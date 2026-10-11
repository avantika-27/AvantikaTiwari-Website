import React, { useState } from 'react';
import { TabType } from '../types';
import { useProfilePhoto } from '../context/PhotoContext';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onOpenProfile: () => void;
  onOpenTerminal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenProfile,
  onOpenTerminal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { photoUrl } = useProfilePhoto();

  const navItems: { id: TabType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: TabType) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md shadow-[0_1px_12px_rgba(0,0,0,0.5)] border-b border-[#27272a] transition-all">
      <div className="h-16 md:h-20 max-w-[1140px] mx-auto px-5 lg:px-0 flex items-center justify-between">
        {/* Brand */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex flex-col text-left focus:outline-none group cursor-pointer"
        >
          <span className="font-headline text-[18px] md:text-[20px] font-bold text-[#ededed] tracking-tight group-hover:text-blue-400 transition-colors">
            AVANTIKA TIWARI
          </span>
          <span className="font-mono-tech text-[12px] text-neutral-400 tracking-normal">
            Data Science & Analytics
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 h-full">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`h-full flex items-center font-mono-tech text-[14px] transition-all relative cursor-pointer px-1 ${
                  isActive
                    ? 'text-white font-bold border-b-2 border-white'
                    : 'text-neutral-400 hover:text-white font-medium'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* CLI Terminal Drawer Trigger */}
          <button
            id="terminal-trigger-btn"
            onClick={onOpenTerminal}
            title="Open Interactive Terminal (Ctrl + K)"
            className="hidden sm:inline-flex items-center gap-1.5 h-9 px-3 rounded-lg bg-[#14151b] border border-[#27272a] hover:border-neutral-500 hover:bg-[#1f2029] text-neutral-300 hover:text-white transition-all text-xs font-mono-tech cursor-pointer group"
          >
            <span className="material-symbols-outlined text-[16px] text-emerald-400 group-hover:scale-110 transition-transform">
              terminal
            </span>
            <span className="font-semibold">CLI</span>
            <span className="text-[10px] text-neutral-400 bg-[#22232a] px-1.5 py-0.5 rounded ml-0.5">
              ^K
            </span>
          </button>

          <button
            id="profile-avatar-btn"
            onClick={onOpenProfile}
            title="View Profile & Bio"
            className="w-9 h-9 rounded-full overflow-hidden border border-[#27272a] hover:border-blue-400 hover:ring-2 hover:ring-blue-400/20 flex items-center justify-center transition-all shadow-sm cursor-pointer group bg-[#18181b]"
          >
            <img
              src={photoUrl}
              alt="Avantika Tiwari"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
            />
          </button>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center text-white hover:bg-neutral-800 rounded transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121212] border-b border-[#27272a] px-5 py-4 flex flex-col gap-2 shadow-2xl animate-fade-in">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2.5 px-3 rounded-lg font-mono-tech text-[14px] transition-colors ${
                  isActive
                    ? 'bg-neutral-800 text-white font-bold'
                    : 'text-neutral-400 hover:bg-neutral-800/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTerminal?.();
            }}
            className="text-left py-2.5 px-3 rounded-lg font-mono-tech text-[14px] text-emerald-400 hover:bg-neutral-800/50 flex items-center gap-2 border border-emerald-500/20 mt-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">terminal</span>
            <span>Interactive Terminal (CLI)</span>
          </button>
        </div>
      )}
    </header>
  );
};
