import React, { useState } from 'react';
import { TabType } from '../types';

interface FooterProps {
  onNavigateTab: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab }) => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('avantika.tiwari2000@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
    onNavigateTab('contact');
  };

  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-[#27272a] py-16 mt-16">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-0 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="font-headline text-[22px] font-bold text-[#ededed] mb-1.5">
            Let's Connect
          </p>
          <p className="font-body text-[16px] text-neutral-400">
            Open for collaborations in Data Engineering and AI Research.
          </p>
        </div>

        <div className="flex items-center gap-8 flex-wrap justify-center">
          <button
            id="footer-email-btn"
            onClick={handleEmailClick}
            className="flex items-center gap-2 font-mono-tech text-[14px] text-neutral-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform text-neutral-300">
              mail
            </span>
            <span>{copied ? 'Copied Email!' : 'Email'}</span>
          </button>

          <a
            id="footer-linkedin-link"
            href="https://www.linkedin.com/in/avantika-tiwari-1bb6091a4/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono-tech text-[14px] text-neutral-400 hover:text-white transition-colors group"
          >
            <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform text-neutral-300">
              link
            </span>
            <span>LinkedIn</span>
          </a>

          <a
            id="footer-github-link"
            href="https://github.com/avantika-27"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono-tech text-[14px] text-neutral-400 hover:text-white transition-colors group"
          >
            <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform text-neutral-300">
              code
            </span>
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-5 lg:px-0 mt-8 pt-6 border-t border-[#27272a] flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
        <span className="font-mono-tech text-[12px] text-neutral-500">
          © 2026 Avantika Tiwari. Professional Portfolio. Built with Precision.
        </span>
        <div className="flex items-center gap-4 font-mono-tech text-[12px] text-neutral-400">
          <span className="inline-flex items-center gap-1.5 bg-[#18181b] border border-[#27272a] px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for full-time roles
          </span>
        </div>
      </div>
    </footer>
  );
};
