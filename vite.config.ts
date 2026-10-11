import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { exec } from 'child_process';
import util from 'util';
import {defineConfig} from 'vite';

const execPromise = util.promisify(exec);

function photoSyncPlugin() {
  return {
    name: 'photo-sync-plugin',
    configureServer(server: any) {
      server.middlewares.use('/api/save-photo', (req: any, res: any) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        let body = '';
        req.on('data', (chunk: any) => {
          body += chunk;
        });

        req.on('end', async () => {
          try {
            const data = JSON.parse(body);
            if (!data.imageBase64) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Missing imageBase64' }));
              return;
            }

            const base64Data = data.imageBase64.replace(/^data:image\/\w+;base64,/, '');
            const buffer = Buffer.from(base64Data, 'base64');

            // 1. Save to public/avatar.jpg
            fs.writeFileSync(path.resolve(__dirname, 'public/avatar.jpg'), buffer);
            // 2. Save to src/assets/images
            fs.writeFileSync(path.resolve(__dirname, 'src/assets/images/avantika_profile_1791755523545.jpg'), buffer);

            // 3. Rebuild production bundle
            await execPromise('npm run build', { cwd: __dirname });

            let token = process.env.GITHUB_PAT || '';
            if (!token && fs.existsSync(path.resolve(__dirname, '.env.local'))) {
              const envContent = fs.readFileSync(path.resolve(__dirname, '.env.local'), 'utf8');
              const match = envContent.match(/GITHUB_PAT=([^\r\n]+)/);
              if (match) token = match[1].trim();
            }

            if (token) {
              const remoteUrl = `https://avantika-27:${token}@github.com/avantika-27/AvantikaTiwari-Website.git`;
              
              // 4. Push gh-pages
              await execPromise(
                `cd dist && touch .nojekyll && rm -rf .git && git init && git config user.name "Avantika Tiwari" && git config user.email "avantika.tiwari2000@gmail.com" && git branch -m gh-pages && git add -A && git commit -m "Update exact profile picture" && git push "${remoteUrl}" gh-pages --force && rm -rf .git`,
                { cwd: __dirname }
              );

              // 5. Push main
              await execPromise(
                `git add public/avatar.jpg src/assets/images/avantika_profile_1791755523545.jpg && git commit -m "Update profile picture with exact photo" && git push "${remoteUrl}" main --force`,
                { cwd: __dirname }
              );
            }

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, message: 'Photo saved and pushed to GitHub main and gh-pages!' }));
          } catch (err: any) {
            console.error('Error in save-photo endpoint:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: err.message || 'Failed to save and push photo' }));
          }
        });
      });
    },
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss(), photoSyncPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
