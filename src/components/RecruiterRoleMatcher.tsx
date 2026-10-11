import React, { useState } from 'react';
import { RECRUITER_ROLES, RecruiterRoleId } from '../data/recruiterRoles';

interface RecruiterRoleMatcherProps {
  selectedRole: RecruiterRoleId;
  onSelectRole: (roleId: RecruiterRoleId) => void;
  onJumpToExperience: (id: string) => void;
  onJumpToProject: (id: string) => void;
  onOpenResume: () => void;
}

export const RecruiterRoleMatcher: React.FC<RecruiterRoleMatcherProps> = ({
  selectedRole,
  onSelectRole,
  onJumpToExperience,
  onOpenResume
}) => {
  const [justMatched, setJustMatched] = useState(false);
  const currentRole = RECRUITER_ROLES.find((r) => r.id === selectedRole);

  const handleRoleClick = (roleId: RecruiterRoleId) => {
    if (selectedRole === roleId) {
      onSelectRole('all');
    } else {
      onSelectRole(roleId);
      setJustMatched(true);
      setTimeout(() => setJustMatched(false), 900);
    }
  };

  return (
    <div className="w-full bg-[#0c0d11] border-y border-[#27272a] py-6 sm:py-8">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-0">
        {/* Playful compact header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="text-lg">🎯</span>
            <div>
              <span className="font-headline text-[16px] sm:text-[18px] font-bold text-white tracking-tight">
                Recruiter Role Matcher
              </span>
              <span className="ml-2 font-mono-tech text-[11px] text-neutral-400 hidden sm:inline">
                • Tap what you're hiring for:
              </span>
            </div>
          </div>

          {selectedRole !== 'all' && (
            <button
              onClick={() => onSelectRole('all')}
              className="inline-flex items-center gap-1.5 text-[11px] font-mono-tech text-neutral-400 hover:text-white px-2.5 py-1 rounded-full bg-[#18181b] border border-[#27272a] hover:border-neutral-500 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[13px]">refresh</span>
              Show All Roles
            </button>
          )}
        </div>

        {/* 4 Interactive Role Buttons (Fun, clickable pills with match badges) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          {RECRUITER_ROLES.map((role) => {
            const isSelected = selectedRole === role.id;
            return (
              <button
                key={role.id}
                onClick={() => handleRoleClick(role.id)}
                className={`group relative flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer active:scale-[0.98] select-none ${
                  isSelected
                    ? 'bg-gradient-to-br from-blue-950/70 via-[#151928] to-[#11131c] border-blue-500/80 text-white shadow-[0_0_20px_rgba(59,130,246,0.25)] ring-1 ring-blue-400/60'
                    : 'bg-[#121217] border-[#262730] text-neutral-300 hover:border-neutral-500/80 hover:bg-[#181822]'
                }`}
              >
                {/* Active corner indicator badge */}
                {isSelected && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 border border-black"></span>
                  </span>
                )}

                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                    isSelected
                      ? 'bg-blue-500 text-white shadow-md shadow-blue-500/30'
                      : 'bg-[#1a1b24] text-neutral-400 group-hover:text-blue-400 group-hover:bg-[#20222f]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[19px]">{role.icon}</span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1.5 mb-0.5">
                    <span
                      className={`font-headline text-[13px] sm:text-[14px] font-bold truncate block ${
                        isSelected ? 'text-white' : 'text-neutral-200'
                      }`}
                    >
                      {role.shortTitle}
                    </span>
                    <span
                      className={`text-[10px] font-mono-tech font-bold px-1.5 py-0.5 rounded shrink-0 border ${
                        isSelected
                          ? 'bg-blue-500/30 text-blue-200 border-blue-400/40'
                          : 'bg-emerald-950/40 text-emerald-400 border-emerald-500/30'
                      }`}
                    >
                      {role.fitScore}
                    </span>
                  </div>
                  <span className="font-mono-tech text-[10px] text-neutral-400 truncate block">
                    {role.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Match Drawer - Short, Fun, Crisp */}
        {currentRole ? (
          <div
            className={`bg-gradient-to-br from-[#12141f] via-[#101118] to-[#0c0d12] border border-blue-500/40 rounded-xl p-4 sm:p-5 transition-all duration-300 shadow-xl ${
              justMatched ? 'scale-[1.005] shadow-[0_0_30px_rgba(59,130,246,0.3)] ring-1 ring-blue-500/40' : ''
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
              {/* Pitch & Highlights */}
              <div className="space-y-2.5 flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-mono-tech text-[11px] font-bold text-blue-400 uppercase tracking-wider">
                    Role Match: {currentRole.title}
                  </span>
                  <span className="text-neutral-600 hidden sm:inline">•</span>
                  <span className="text-[11px] font-mono-tech text-emerald-400 font-semibold bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30">
                    High Fit ({currentRole.fitScore})
                  </span>
                </div>

                <p className="font-body text-xs sm:text-[13.5px] text-neutral-300 leading-relaxed max-w-2xl">
                  {currentRole.elevatorPitch}
                </p>

                {/* Key Skills Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                  <span className="text-[10px] font-mono-tech text-neutral-400 uppercase mr-1">
                    Key Stack:
                  </span>
                  {currentRole.primarySkills.slice(0, 5).map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-[#1b1f2e] border border-blue-500/25 text-blue-200 text-[11px] font-mono-tech px-2 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats & Actions */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0 border-t lg:border-t-0 lg:border-l border-[#242633] pt-3.5 lg:pt-0 lg:pl-6">
                {/* Stats */}
                <div className="flex items-center gap-4">
                  {currentRole.keyStats.slice(0, 2).map((stat, idx) => (
                    <div key={idx} className="min-w-[70px] bg-[#161722]/80 border border-[#272838] px-3 py-1.5 rounded-lg text-center">
                      <span className="block font-headline text-[16px] sm:text-[18px] font-bold text-white tracking-tight">
                        {stat.value}
                      </span>
                      <span className="block font-mono-tech text-[10px] text-neutral-400 truncate">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Actions & Role Direct Pills */}
                <div className="flex flex-col gap-2 w-full sm:w-auto">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onJumpToExperience(currentRole.spotlightExperienceId)}
                      className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-mono-tech text-xs font-semibold px-3.5 py-2 rounded-lg transition-all cursor-pointer shadow-md shadow-blue-600/20"
                      title="Jump to timeline spotlight"
                    >
                      <span>View Roles in Timeline</span>
                      <span className="material-symbols-outlined text-[15px]">arrow_downward</span>
                    </button>
                    <button
                      onClick={onOpenResume}
                      className="inline-flex items-center gap-1.5 bg-[#181926] hover:bg-[#222435] text-neutral-300 hover:text-white font-mono-tech text-xs px-3 py-2 rounded-lg border border-[#2e3146] transition-colors cursor-pointer"
                      title="Open Resume"
                    >
                      <span className="material-symbols-outlined text-[15px]">description</span>
                      <span className="hidden sm:inline">Resume</span>
                    </button>
                  </div>

                  {/* Direct Jump Pills for Each Matching Experience */}
                  {currentRole.matchingExperienceIds && currentRole.matchingExperienceIds.length > 0 && (
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] font-mono-tech text-neutral-400">Jump to:</span>
                      {currentRole.matchingExperienceIds.map((expId) => {
                        const label = currentRole.experienceRoleLabels?.[expId] || expId;
                        const isPrimary = expId === currentRole.spotlightExperienceId;
                        return (
                          <button
                            key={expId}
                            onClick={() => onJumpToExperience(expId)}
                            className={`inline-flex items-center gap-1 text-[11px] font-mono-tech px-2 py-0.5 rounded-md border transition-all cursor-pointer ${
                              isPrimary
                                ? 'bg-blue-950/80 border-blue-500/60 text-blue-200 hover:bg-blue-900 hover:border-blue-400 font-medium'
                                : 'bg-[#181926] border-[#2c2e40] text-neutral-300 hover:text-white hover:border-neutral-500'
                            }`}
                            title={`Scroll to ${label}`}
                          >
                            <span className="text-[10px] text-blue-400 font-bold">↳</span>
                            <span>{label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-2 text-xs font-mono-tech text-neutral-500">
            👆 Click any role card above to instantly preview tailored impact & experience
          </div>
        )}
      </div>
    </div>
  );
};
