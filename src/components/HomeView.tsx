import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { METRICS_DATA, EXPERIENCES_DATA } from '../data/portfolioData';
import { TabType } from '../types';
import { RecruiterRoleMatcher } from './RecruiterRoleMatcher';
import { RecruiterRoleId, RECRUITER_ROLES } from '../data/recruiterRoles';
import { useProfilePhoto } from '../context/PhotoContext';

interface HomeViewProps {
  onNavigate: (tab: TabType) => void;
  onOpenResume: () => void;
  selectedRole?: RecruiterRoleId;
  onSelectRole?: (roleId: RecruiterRoleId) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenResume,
  selectedRole = 'all',
  onSelectRole = (_roleId: RecruiterRoleId) => {}
}) => {
  const [activeMetricHover, setActiveMetricHover] = useState<number | null>(null);
  const { photoUrl } = useProfilePhoto();

  const currentRoleConfig = RECRUITER_ROLES.find((r) => r.id === selectedRole);

  const handleJumpToExperience = (expId: string) => {
    const el = document.getElementById(`exp-card-${expId}`);
    if (el) {
      const navOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Trigger strong visual focus ring animation
      el.classList.remove('ring-4', 'ring-blue-400', 'shadow-[0_0_40px_rgba(59,130,246,0.6)]');
      void el.offsetWidth;
      el.classList.add('ring-4', 'ring-blue-400', 'shadow-[0_0_40px_rgba(59,130,246,0.6)]', 'transition-all');
      setTimeout(() => {
        el.classList.remove('ring-4', 'ring-blue-400', 'shadow-[0_0_40px_rgba(59,130,246,0.6)]');
      }, 3000);
    }
  };

  const handleJumpToProject = (_projId: string) => {
    onNavigate('projects');
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden bg-[#0a0a0a] pt-4 md:pt-8 pb-16">
        <div className="max-w-[1140px] mx-auto px-5 lg:px-0 min-h-[640px] flex flex-col justify-center relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 relative z-10 items-center">
            {/* Left Content Column */}
            <div className="md:col-span-8 flex flex-col justify-center animate-fade-in-up">
              {/* Eye-Pleasing Single-Line Availability Status Badge */}
              <div className="mb-6 w-fit max-w-full">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs sm:text-[13px] font-mono-tech shadow-[0_0_15px_rgba(16,185,129,0.12)] whitespace-nowrap">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span className="font-medium text-emerald-300">
                    Available for Full-Time (2026)
                  </span>
                  <span className="text-emerald-500/60 select-none">|</span>
                  <span className="text-emerald-200/90 inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-400 shrink-0 inline" />
                    San Francisco Bay Area
                  </span>
                </div>
              </div>

              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1.5px] bg-blue-400"></span>
                <span className="font-mono-tech text-[12px] md:text-[13px] text-blue-400 tracking-[0.2em] uppercase font-semibold">
                  Data Scientist • ML/GenAI Engineer • Junior SDE @ Meta
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-headline text-[clamp(38px,5vw,70px)] leading-[1.08] text-[#ededed] tracking-tight mb-6 font-bold">
                Turning messy data into<br />
                <span className="text-neutral-400">intelligent systems people actually use.</span>
              </h1>

              {/* Body Text */}
              <p className="font-body text-[18px] md:text-[20px] leading-[1.65] text-neutral-300 max-w-2xl mb-8">
                Junior SDE at Meta evaluating Computer-Use Agents & Graduate Research Assistant at Arizona State University. With a foundation in big data engineering (10+ TB/day at Jio Platforms), my work sits at the intersection of scalable pipelines, applied ML, and GenAI—building robust evaluation suites, production RAG systems, and human-centered tools that help teams make faster, smarter decisions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  id="hero-view-projects-btn"
                  onClick={() => onNavigate('projects')}
                  className="bg-white text-black font-semibold px-8 py-4 rounded-xl font-mono-tech text-[14px] hover:bg-neutral-200 transition-all hover:shadow-[0_6px_24px_rgba(255,255,255,0.15)] flex items-center gap-2 cursor-pointer group"
                >
                  <span>View Projects</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>

                <button
                  id="hero-download-resume-btn"
                  onClick={onOpenResume}
                  className="bg-[#18181b] border border-[#27272a] text-[#ededed] px-8 py-4 rounded-xl font-mono-tech text-[14px] hover:border-neutral-500 hover:bg-[#27272a] transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px] text-neutral-300">
                    description
                  </span>
                  <span>Download Resume</span>
                </button>
              </div>
            </div>

            {/* Right Visual Card - Avantika Tiwari Portrait & Current Focus */}
            <div className="md:col-span-4 flex flex-col items-center md:items-end justify-center relative mt-4 md:mt-0">
              <div
                className="w-64 sm:w-72 md:w-full max-w-[340px] aspect-[4/5] relative animate-fade-in group"
              >
                {/* Ambient glow backdrop */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/25 via-indigo-500/15 to-purple-600/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#27272a] group-hover:border-blue-500/50 shadow-[0_12px_40px_rgba(0,0,0,0.8)] bg-[#141417]">
                  <img
                    src={photoUrl}
                    alt="Avantika Tiwari - Junior SDE at Meta & ML Engineer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Elegant bottom gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none"></div>

                  {/* Intro card name watermark overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
                    <p className="font-headline font-bold text-white text-[17px] leading-tight drop-shadow-sm">
                      Avantika Tiwari
                    </p>
                    <p className="font-mono-tech text-[11px] text-blue-300 font-medium mt-0.5">
                      Junior SDE @ Meta • Grad Researcher @ ASU
                    </p>
                  </div>
                </div>
              </div>

              {/* Current Focus Box - Positioned cleanly below the photo so it never covers content or name */}
              <div className="w-64 sm:w-72 md:w-full max-w-[340px] mt-3.5 bg-[#141417]/95 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl border border-[#27272a] shadow-[0_8px_30px_rgba(0,0,0,0.85)] backdrop-blur-md transition-all hover:border-blue-500/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.95)]">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse shrink-0"></div>
                      <span className="font-mono-tech text-[10px] sm:text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">
                        Current Focus
                      </span>
                    </div>
                    <span className="font-headline text-[14px] sm:text-[16px] font-bold text-[#ededed] block truncate">
                      Generative AI & LLMs
                    </span>
                  </div>
                  <span className="shrink-0 text-[10px] sm:text-[11px] font-mono-tech px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                    Meta AI
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Watermark DATA */}
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-[0.02] text-[180px] lg:text-[230px] font-headline font-black leading-none select-none text-white transform translate-y-1/4 translate-x-1/4">
            DATA
          </div>
        </div>
      </section>

      {/* Metrics Strip (Bento Tiles) */}
      <section className="w-full bg-[#0d0d0f] py-12 md:py-16 border-y border-[#27272a]">
        <div className="max-w-[1140px] mx-auto px-5 lg:px-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {METRICS_DATA.map((metric, idx) => (
              <div
                key={idx}
                id={`stat-metric-${idx}`}
                onMouseEnter={() => setActiveMetricHover(idx)}
                onMouseLeave={() => setActiveMetricHover(null)}
                className="flex flex-col bg-[#121212] border border-[#27272a] p-5 md:p-6 rounded-2xl transition-all hover:border-neutral-500 hover:bg-[#16161a] group cursor-default"
              >
                <span className="font-headline text-[36px] md:text-[44px] font-bold text-[#ededed] leading-tight mb-1 group-hover:text-blue-400 transition-colors">
                  {metric.value}
                </span>
                <span className="font-mono-tech text-[12px] md:text-[13px] text-neutral-400 uppercase tracking-wider font-semibold">
                  {metric.label}
                </span>
                {metric.subtext && (
                  <span className="font-body text-[13px] text-neutral-500 mt-1.5 hidden sm:block">
                    {metric.subtext}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiter Role Matcher Interactive Section */}
      <section id="role-matcher">
        <RecruiterRoleMatcher
          selectedRole={selectedRole}
          onSelectRole={onSelectRole}
          onJumpToExperience={handleJumpToExperience}
          onJumpToProject={handleJumpToProject}
          onOpenResume={onOpenResume}
        />
      </section>

      {/* Experience Timeline Section */}
      <section className="w-full bg-[#0a0a0a] py-20" id="experience">
        <div className="max-w-[1140px] mx-auto px-5 lg:px-0">
          {/* Section Header */}
          <div className="flex items-baseline justify-between gap-4 mb-16 flex-wrap">
            <div className="flex items-baseline gap-4">
              <h2 className="font-headline text-[32px] md:text-[40px] font-bold text-[#ededed] tracking-tight whitespace-nowrap">
                Experience Timeline
              </h2>
              {currentRoleConfig && (
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono-tech bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/40 flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                    Highlighting: <strong className="text-white font-semibold">{currentRoleConfig.shortTitle}</strong>
                  </span>
                  <button
                    onClick={() => onSelectRole('all')}
                    className="text-[11px] font-mono-tech text-neutral-400 hover:text-white px-2 py-0.5 rounded bg-[#18181b] border border-[#27272a] hover:border-neutral-500 transition-colors cursor-pointer"
                  >
                    Clear Filter
                  </button>
                </div>
              )}
            </div>
            <span className="flex-grow h-[1px] bg-[#27272a] min-w-[60px]"></span>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative">
            {/* Center Timeline Line (Desktop) */}
            <div className="absolute left-[50%] top-4 bottom-4 w-[2px] bg-[#27272a] -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12 md:space-y-16 relative z-10">
              {EXPERIENCES_DATA.map((exp, index) => {
                const isEven = index % 2 === 0;
                const isPrimaryMatch = currentRoleConfig?.spotlightExperienceId === exp.id;
                const isRelevantMatch = currentRoleConfig?.matchingExperienceIds?.includes(exp.id);
                const isSpotlight = isPrimaryMatch || isRelevantMatch;

                return (
                  <div
                    key={exp.id}
                    id={`exp-card-${exp.id}`}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 group items-start transition-all duration-300 rounded-2xl scroll-mt-28 ${
                      !currentRoleConfig
                        ? 'opacity-100'
                        : isPrimaryMatch
                        ? 'opacity-100 p-2 md:p-3 -m-2 md:-m-3 rounded-2xl bg-blue-500/[0.04]'
                        : isRelevantMatch
                        ? 'opacity-100 p-2 md:p-3 -m-2 md:-m-3 rounded-2xl bg-blue-500/[0.02]'
                        : 'opacity-40 hover:opacity-85'
                    }`}
                  >
                    {/* Header Info Column */}
                    <div
                      className={`relative ${
                        isEven
                          ? 'md:text-right md:pr-12'
                          : 'md:col-start-2 md:pl-12 md:row-start-1'
                      }`}
                    >
                      {/* Center Node Dot */}
                      <div
                        className={`absolute top-2 w-4 h-4 rounded-full bg-[#121212] border-[3px] ${
                          isPrimaryMatch
                            ? 'border-blue-400 bg-blue-400 shadow-[0_0_14px_#60a5fa] scale-125'
                            : isRelevantMatch
                            ? 'border-emerald-400 bg-emerald-400 shadow-[0_0_10px_#34d399]'
                            : 'border-blue-400'
                        } z-20 group-hover:bg-blue-400 group-hover:scale-125 transition-all hidden md:block shadow-[0_0_0_4px_#0a0a0a] ${
                          isEven ? 'right-[-33px]' : 'left-[-33px]'
                        }`}
                      ></div>

                      <div className="inline-flex items-center gap-2 mb-2 flex-wrap">
                        <span className="font-mono-tech text-[13px] font-bold text-blue-400">
                          {exp.period}
                        </span>
                        {exp.employmentType && (
                          <span className="bg-[#18181b] border border-[#27272a] text-neutral-300 text-[11px] font-mono-tech px-2.5 py-0.5 rounded-full">
                            {exp.employmentType}
                          </span>
                        )}
                        {exp.isCurrent && (
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-0.5" title="Current Role"></span>
                        )}
                        {isPrimaryMatch && (
                          <span className="bg-blue-500/30 text-blue-200 text-[11px] font-mono-tech px-2.5 py-0.5 rounded font-bold border border-blue-400/50 shadow-sm flex items-center gap-1">
                            ★ Primary Match • {currentRoleConfig.shortTitle}
                          </span>
                        )}
                        {!isPrimaryMatch && isRelevantMatch && (
                          <span className="bg-emerald-500/20 text-emerald-300 text-[11px] font-mono-tech px-2.5 py-0.5 rounded font-medium border border-emerald-400/40 flex items-center gap-1">
                            ✓ Relevant Match • {currentRoleConfig.shortTitle}
                          </span>
                        )}
                      </div>

                      <h3 className={`font-headline text-[22px] md:text-[26px] font-bold mb-1 transition-colors ${
                        isPrimaryMatch ? 'text-blue-300' : 'text-[#ededed] group-hover:text-blue-400'
                      }`}>
                        {exp.role}
                      </h3>
                      <h4 className="font-mono-tech text-[13px] text-neutral-400 uppercase tracking-wider font-semibold">
                        {exp.organization} {exp.location && `• ${exp.location}`}
                      </h4>
                    </div>

                    {/* Bullet Points Details Card Column */}
                    <div
                      className={`p-7 md:p-8 rounded-2xl shadow-xl transition-all ${
                        isPrimaryMatch
                          ? 'bg-gradient-to-br from-[#131726] to-[#0f1118] border-2 border-blue-500/70 shadow-[0_0_25px_rgba(59,130,246,0.18)]'
                          : isRelevantMatch
                          ? 'bg-gradient-to-br from-[#11131c] to-[#0e0f14] border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.1)]'
                          : 'bg-[#121212] border border-[#27272a] hover:border-neutral-600'
                      } ${
                        isEven
                          ? 'md:-mt-2'
                          : 'md:col-start-1 md:row-start-1 md:-mt-2'
                      }`}
                    >
                      <ul className="space-y-4 font-body text-[16px] leading-[1.65] text-neutral-300 list-none">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3">
                            <span className="text-blue-400 mt-1 select-none text-[12px]">
                              ■
                            </span>
                            <span>
                              {pt.highlight ? (
                                <>
                                  {pt.text.split(pt.highlight)[0]}
                                  <strong className="text-white font-semibold">
                                    {pt.highlight}
                                  </strong>
                                  {pt.text.split(pt.highlight)[1]}
                                </>
                              ) : (
                                pt.text
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Tag Chips */}
                      <div className="mt-6 pt-5 border-t border-[#27272a] flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-[#18181b] border border-[#27272a] rounded-lg text-[12px] font-mono-tech text-neutral-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Timeline Quick Links */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-[#121212] px-6 py-3 rounded-full border border-[#27272a] shadow-sm">
              <span className="font-body text-sm text-neutral-400">
                Looking for technical stack or project architecture details?
              </span>
              <button
                id="timeline-to-projects-btn"
                onClick={() => onNavigate('projects')}
                className="font-mono-tech text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors underline flex items-center gap-1 cursor-pointer"
              >
                Explore Projects
                <span className="material-symbols-outlined text-[14px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
