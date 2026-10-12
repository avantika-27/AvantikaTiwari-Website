import { useState, useEffect } from 'react';
import { TabType, ProjectItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ProjectsView } from './components/ProjectsView';
import { SkillsView } from './components/SkillsView';
import { ContactView } from './components/ContactView';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ProfileModal } from './components/ProfileModal';
import { TerminalDrawer } from './components/TerminalDrawer';
import { PhotoProvider } from './context/PhotoContext';
import { RecruiterRoleId } from './data/recruiterRoles';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<RecruiterRoleId>('all');

  // Sync window scroll on tab change
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut support (Escape to close modals, Ctrl+K or Cmd+K for Terminal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle terminal on Ctrl + K or Cmd + K
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
        return;
      }

      if (e.key === 'Escape') {
        setSelectedProject(null);
        setResumeOpen(false);
        setProfileOpen(false);
        setTerminalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleRoleSelect = (roleId: RecruiterRoleId) => {
    setSelectedRole(roleId);
    if (activeTab !== 'home') {
      setActiveTab('home');
    }
  };

  return (
    <PhotoProvider>
      <div id="app-content" className="bg-[#0a0a0a] font-body text-[#ededed] flex flex-col min-h-screen selection:bg-neutral-800 selection:text-white relative">
        {/* Navigation Header */}
        <Header
          activeTab={activeTab}
          setActiveTab={handleTabChange}
          onOpenProfile={() => setProfileOpen(true)}
          onOpenTerminal={() => setTerminalOpen(true)}
        />

        {/* Main Content Area */}
        <main className="flex-grow pt-16 md:pt-20">
          {activeTab === 'home' && (
            <HomeView
              onNavigate={handleTabChange}
              onOpenResume={() => setResumeOpen(true)}
              selectedRole={selectedRole}
              onSelectRole={handleRoleSelect}
            />
          )}

          {activeTab === 'projects' && (
            <ProjectsView
              onSelectProject={(project) => setSelectedProject(project)}
            />
          )}

          {activeTab === 'skills' && (
            <SkillsView
              onNavigate={handleTabChange}
              onOpenResume={() => setResumeOpen(true)}
            />
          )}

          {activeTab === 'contact' && <ContactView />}
        </main>

        {/* Footer */}
        <Footer onNavigateTab={handleTabChange} />

        {/* Floating Interactive Terminal Trigger (bottom right on mobile & desktop) */}
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setTerminalOpen(true)}
            title="Open Developer Terminal (Ctrl + K)"
            className="flex items-center gap-2 bg-[#12131a] hover:bg-[#1a1b24] text-neutral-200 hover:text-white px-3.5 py-2.5 rounded-full border border-[#2e303e] shadow-[0_4px_25px_rgba(0,0,0,0.7)] hover:shadow-[0_6px_30px_rgba(59,130,246,0.25)] hover:border-blue-500/50 transition-all font-mono-tech text-xs cursor-pointer group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="material-symbols-outlined text-[17px] text-emerald-400 group-hover:rotate-12 transition-transform">
              terminal
            </span>
            <span className="font-semibold hidden sm:inline">CLI Drawer</span>
            <span className="bg-[#21222e] text-[10px] text-neutral-400 px-1.5 py-0.5 rounded border border-[#333544] hidden md:inline">
              ^K
            </span>
          </button>
        </div>

        {/* Modals & Overlays */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />

        <ProfileModal
          isOpen={profileOpen}
          onClose={() => setProfileOpen(false)}
          onNavigate={handleTabChange}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Terminal Drawer Overlay */}
        <TerminalDrawer
          isOpen={terminalOpen}
          onClose={() => setTerminalOpen(false)}
          onNavigateTab={handleTabChange}
          onOpenResume={() => {
            setResumeOpen(true);
            setTerminalOpen(false);
          }}
          onSelectRole={(role) => {
            handleRoleSelect(role as RecruiterRoleId);
          }}
        />
      </div>
    </PhotoProvider>
  );
}
