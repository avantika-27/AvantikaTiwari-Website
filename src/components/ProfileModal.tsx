import React, { useState } from 'react';
import { TabType } from '../types';
import { useProfilePhoto } from '../context/PhotoContext';
import { PhotoUploadModal } from './PhotoUploadModal';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: TabType) => void;
  onOpenResume: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenResume,
}) => {
  const { photoUrl } = useProfilePhoto();
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
        <div
          className="bg-[#121212] w-full max-w-lg rounded-3xl shadow-2xl border border-[#27272a] overflow-hidden flex flex-col animate-fade-in-up"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Dark Header */}
          <div className="bg-[#18181b] p-6 text-white border-b border-[#27272a] relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Close Profile Modal"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>

            <div className="flex items-center gap-4">
              <div className="relative shrink-0 group">
                <button
                  type="button"
                  onClick={() => setUploadModalOpen(true)}
                  title="Click to update with your exact photo & sync to GitHub"
                  className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500/50 hover:border-blue-400 shadow-lg bg-blue-950/80 cursor-pointer relative block transition-all"
                >
                  <img
                    src={photoUrl}
                    alt="Avantika Tiwari"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:opacity-75 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="material-symbols-outlined text-[20px] text-white">photo_camera</span>
                  </div>
                </button>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-headline text-xl font-bold text-[#ededed]">Avantika Tiwari</h2>
                  <button
                    onClick={() => setUploadModalOpen(true)}
                    className="text-[11px] font-mono-tech px-2 py-0.5 rounded-md bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 border border-blue-500/30 flex items-center gap-1 cursor-pointer transition-colors"
                    title="Upload your exact photo and sync with GitHub"
                  >
                    <span className="material-symbols-outlined text-[13px]">cloud_upload</span>
                    <span>Sync Photo</span>
                  </button>
                </div>
                <p className="font-mono-tech text-xs text-blue-400 font-semibold mt-0.5">
                  Junior SDE @ Meta • Graduate Research Assistant @ ASU
                </p>
                <p className="font-mono-tech text-xs text-neutral-400">
                  San Francisco Bay Area, CA • Arizona State University
                </p>
              </div>
            </div>
          </div>

        {/* Bio Body */}
        <div className="p-6 space-y-5 font-body text-neutral-300">
          <div>
            <span className="font-mono-tech text-[11px] uppercase tracking-wider text-neutral-400 font-bold block mb-1">
              About
            </span>
            <p className="text-[15px] leading-relaxed">
              Data Scientist and ML/GenAI Engineer with a battle-tested foundation in big data engineering (10+ TB/day). Currently Junior SDE at Meta evaluating Computer-Use Agents and Graduate Research Assistant at ASU. Dedicated to turning messy data into scalable, intelligent systems people actually use.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-2 border-t border-[#27272a]">
            <div className="bg-[#18181b] p-3 rounded-xl border border-[#27272a]">
              <span className="font-mono-tech text-[11px] text-neutral-400 block">Academic GPAs</span>
              <span className="font-headline text-sm font-bold text-[#ededed] block">4.0 & 9.7/10</span>
              <span className="font-mono-tech text-[10px] text-neutral-400 block">ASU & Mumbai Univ</span>
            </div>
            <div className="bg-[#18181b] p-3 rounded-xl border border-[#27272a]">
              <span className="font-mono-tech text-[11px] text-neutral-400 block">Location</span>
              <span className="font-mono-tech text-xs font-bold text-[#ededed] truncate block" title="San Francisco Bay Area">SF Bay Area</span>
            </div>
            <div className="bg-[#18181b] p-3 rounded-xl border border-[#27272a]">
              <span className="font-mono-tech text-[11px] text-neutral-400 block">Status</span>
              <span className="font-mono-tech text-xs font-bold text-emerald-400">Open to Roles</span>
            </div>
          </div>

          <div>
            <span className="font-mono-tech text-[11px] uppercase tracking-wider text-neutral-400 font-bold block mb-2">
              Primary Research Interests
            </span>
            <div className="flex flex-wrap gap-1.5 font-mono-tech text-xs">
              <span className="px-2.5 py-1 bg-[#18181b] border border-[#27272a] text-neutral-300 rounded-lg">LLM-as-a-Judge</span>
              <span className="px-2.5 py-1 bg-[#18181b] border border-[#27272a] text-neutral-300 rounded-lg">Computer Vision</span>
              <span className="px-2.5 py-1 bg-[#18181b] border border-[#27272a] text-neutral-300 rounded-lg">Distributed Anomaly Detection</span>
              <span className="px-2.5 py-1 bg-[#18181b] border border-[#27272a] text-neutral-300 rounded-lg">Time Series Forecasting</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#18181b] border-t border-[#27272a] flex items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenResume();
            }}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#121212] border border-[#27272a] text-neutral-200 hover:bg-[#27272a] rounded-xl font-mono-tech text-xs font-bold transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">description</span>
            <span>View Resume</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onNavigate('contact');
            }}
            className="flex items-center gap-1.5 px-5 py-2 bg-white text-black hover:bg-neutral-200 rounded-xl font-mono-tech text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">mail</span>
            <span>Get in Touch</span>
          </button>
        </div>
      </div>
    </div>
    <PhotoUploadModal
      isOpen={uploadModalOpen}
      onClose={() => setUploadModalOpen(false)}
    />
  </>
  );
};
