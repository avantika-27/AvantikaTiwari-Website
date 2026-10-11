import React, { useState } from 'react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'benchmarks'>('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div
        className="bg-[#121212] w-full max-w-4xl rounded-3xl shadow-2xl border border-[#27272a] overflow-hidden flex flex-col max-h-[90vh] my-auto animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Hero Image */}
        <div className="relative h-60 sm:h-72 w-full bg-[#18181b] overflow-hidden shrink-0">
          <img
            src={project.imageUrl}
            alt={project.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent"></div>

          {/* Close button */}
          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-colors z-20 cursor-pointer backdrop-blur-md border border-white/20"
            aria-label="Close Project Details"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>

          {/* Header Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-white font-mono-tech text-[11px] tracking-wider uppercase font-semibold border border-white/20 mb-2">
              {project.badge}
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white mb-1">
              {project.title}
            </h2>
            <p className="font-mono-tech text-xs sm:text-sm text-neutral-300">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#27272a] px-6 bg-[#18181b] gap-2 overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 px-3 font-mono-tech text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
              activeTab === 'overview'
                ? 'text-white border-b-2 border-blue-400'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Overview & Contributions
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3.5 px-3 font-mono-tech text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
              activeTab === 'architecture'
                ? 'text-white border-b-2 border-blue-400'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            System Pipeline
          </button>
          {project.interactiveMetrics && (
            <button
              onClick={() => setActiveTab('benchmarks')}
              className={`py-3.5 px-3 font-mono-tech text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
                activeTab === 'benchmarks'
                  ? 'text-white border-b-2 border-blue-400'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Benchmark Metrics
            </button>
          )}
        </div>

        {/* Modal Scrollable Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-mono-tech text-xs uppercase tracking-wider text-neutral-400 font-bold mb-2">
                  Executive Summary
                </h4>
                <p className="font-body text-[16px] leading-relaxed text-neutral-300">
                  {project.fullDescription || project.description}
                </p>
              </div>

              {project.keyContributions && (
                <div>
                  <h4 className="font-mono-tech text-xs uppercase tracking-wider text-neutral-400 font-bold mb-3">
                    Key Technical Contributions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.keyContributions.map((contribution, idx) => (
                      <div
                        key={idx}
                        className="bg-[#18181b] p-4 rounded-xl border border-[#27272a] flex items-start gap-3"
                      >
                        <span className="material-symbols-outlined text-blue-400 text-[20px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="font-body text-sm text-neutral-300">
                          {contribution}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Matrix */}
              {project.techStackDetailed && (
                <div>
                  <h4 className="font-mono-tech text-xs uppercase tracking-wider text-neutral-400 font-bold mb-3">
                    Technology Stack
                  </h4>
                  <div className="space-y-3">
                    {Object.entries(project.techStackDetailed).map(([category, items]) => {
                      const list = (items as string[]) || [];
                      return (
                        <div key={category} className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <span className="font-mono-tech text-xs font-bold text-[#ededed] w-36 shrink-0">
                            {category}:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {list.map((it) => (
                              <span
                                key={it}
                                className="px-2.5 py-0.5 bg-[#18181b] border border-[#27272a] text-neutral-300 rounded-lg font-mono-tech text-xs"
                              >
                                {it}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-mono-tech text-xs uppercase tracking-wider text-neutral-400 font-bold mb-3">
                  Architecture Pipeline Stages
                </h4>
                <div className="space-y-3">
                  {project.architecture?.map((stage, idx) => (
                    <div
                      key={idx}
                      className="bg-[#18181b] p-4 rounded-xl border border-[#27272a] shadow-sm flex items-center gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-950/80 border border-blue-800/50 text-blue-300 font-mono-tech text-xs font-bold flex items-center justify-center shrink-0">
                        0{idx + 1}
                      </div>
                      <div className="font-headline text-base font-semibold text-[#ededed]">
                        {stage}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'benchmarks' && project.interactiveMetrics && (
            <div className="space-y-6">
              <div>
                <h4 className="font-mono-tech text-xs uppercase tracking-wider text-neutral-400 font-bold mb-2">
                  Performance & Validation Comparison
                </h4>
                <p className="font-body text-sm text-neutral-400 mb-6">
                  Empirical results evaluated across standardized testing partitions vs baseline standard implementations.
                </p>
                <div className="space-y-5">
                  {project.interactiveMetrics.map((metric, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-baseline font-mono-tech text-xs">
                        <span className="font-bold text-[#ededed]">{metric.label}</span>
                        <span className="text-blue-400 font-bold text-sm">
                          {metric.value} {metric.unit}
                        </span>
                      </div>
                      <div className="h-3 w-full bg-[#18181b] rounded-full overflow-hidden relative border border-[#27272a]">
                        <div
                          className="h-full bg-blue-500 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min(100, metric.value)}%` }}
                        ></div>
                      </div>
                      {metric.benchmark && (
                        <div className="flex justify-between text-[11px] font-mono-tech text-neutral-400">
                          <span>Baseline: {metric.benchmark} {metric.unit}</span>
                          <span className="text-emerald-400 font-semibold">
                            +{metric.value - metric.benchmark}{metric.unit} delta
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 sm:p-6 bg-[#18181b] border-t border-[#27272a] flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 bg-[#121212] border border-[#27272a] rounded-lg font-mono-tech text-[11px] text-neutral-300"
              >
                #{t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 ml-auto">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#121212] hover:bg-[#27272a] border border-[#27272a] text-[#ededed] rounded-xl font-mono-tech text-xs font-semibold transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">code</span>
                <span>GitHub Repo</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-white text-black hover:bg-neutral-200 rounded-xl font-mono-tech text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
