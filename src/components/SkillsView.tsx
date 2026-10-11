import React from 'react';
import { EDUCATION_DATA, SKILL_CATEGORIES_DATA } from '../data/portfolioData';
import { TabType } from '../types';

interface SkillsViewProps {
  onNavigate: (tab: TabType) => void;
  onOpenResume: () => void;
}

export const SkillsView: React.FC<SkillsViewProps> = ({ onNavigate, onOpenResume }) => {
  return (
    <div className="flex flex-col w-full animate-fade-in">
      {/* Education Section */}
      <section className="max-w-[1140px] mx-auto w-full px-5 lg:px-0 py-12 md:py-16 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 justify-between items-start">
          {/* Left Intro */}
          <div className="flex flex-col w-full md:w-1/3">
            <h1 className="font-headline text-[36px] md:text-[44px] font-bold text-[#ededed] mb-3">
              Education
            </h1>
            <p className="font-body text-[16px] md:text-[17px] text-neutral-400 max-w-sm leading-[1.6]">
              Academic foundation in Computer Science and specialized training in advanced Data Science methodologies.
            </p>
          </div>

          {/* Right Education Cards */}
          <div className="flex flex-col w-full md:w-2/3 gap-6">
            {EDUCATION_DATA.map((edu) => (
              <div
                key={edu.id}
                id={`edu-card-${edu.id}`}
                className="bg-[#121212] rounded-2xl shadow-xl hover:shadow-2xl transition-all p-6 md:p-8 relative overflow-hidden group border border-[#27272a] hover:border-neutral-500"
              >
                {/* Subtle corner decorative glow */}
                <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/5 rounded-bl-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>

                <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-3 mb-3">
                  <div>
                    <h3 className="font-headline text-[20px] md:text-[22px] font-bold text-[#ededed] group-hover:text-blue-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="font-body text-[16px] text-neutral-300">
                      {edu.institution} • {edu.location}
                    </p>
                  </div>

                  {edu.gpa && (
                    <div className="bg-blue-950/80 border border-blue-800/50 px-3.5 py-1 rounded-lg text-blue-300 font-mono-tech text-[12px] font-semibold shrink-0 self-start">
                      {edu.gpa}
                    </div>
                  )}
                </div>

                <div className="flex gap-4 text-neutral-400 font-mono-tech text-[12px] mb-4">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">
                      calendar_month
                    </span>
                    {edu.period}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-[#27272a]">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 bg-[#18181b] rounded-lg font-mono-tech text-[11px] text-neutral-300 border border-[#27272a]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Arsenal Section (Bento Grid layout) */}
      <section className="w-full bg-[#0d0d0f] py-16 md:py-20 relative overflow-hidden border-y border-[#27272a]">
        {/* Soft decorative background blurs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1140px] mx-auto w-full px-5 lg:px-0 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-headline text-[32px] md:text-[40px] font-bold text-[#ededed] tracking-tight">
              Technical Arsenal
            </h2>
            <p className="font-body text-[17px] text-neutral-400 mt-2 max-w-xl mx-auto">
              Comprehensive stack for end-to-end data pipelines and model deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES_DATA.map((cat) => {
              const isTwoCol = cat.colSpan === 'lg:col-span-2';

              return (
                <div
                  key={cat.id}
                  id={`skill-cat-${cat.id}`}
                  className={`bg-[#121212] p-6 md:p-7 rounded-2xl shadow-xl hover:-translate-y-1 hover:border-neutral-500 transition-all duration-300 border border-[#27272a] ${
                    cat.colSpan || ''
                  }`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="material-symbols-outlined text-blue-400 text-[28px]">
                      {cat.icon}
                    </span>
                    <h3 className="font-headline text-[20px] font-bold text-[#ededed]">
                      {cat.title}
                    </h3>
                  </div>

                  {isTwoCol ? (
                    <div className="flex flex-col gap-5">
                      {/* Languages */}
                      <div>
                        <span className="text-neutral-400 font-mono-tech text-[11px] mb-2.5 block uppercase tracking-wider font-semibold">
                          Languages
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {cat.languages?.map((lang) => (
                            <span
                              key={lang}
                              className="font-mono-tech text-[13px] text-neutral-200 bg-[#18181b] hover:bg-[#27272a] transition-colors px-3 py-1.5 rounded-lg border border-[#27272a]"
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Databases */}
                      <div>
                        <span className="text-neutral-400 font-mono-tech text-[11px] mb-2.5 block uppercase tracking-wider font-semibold">
                          Databases
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {cat.databases?.map((db) => (
                            <span
                              key={db}
                              className="font-mono-tech text-[13px] text-neutral-200 bg-[#18181b] hover:bg-[#27272a] transition-colors px-3 py-1.5 rounded-lg border border-[#27272a]"
                            >
                              {db}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono-tech text-[13px] text-neutral-200 bg-[#18181b] hover:bg-[#27272a] transition-colors px-3 py-1.5 rounded-lg border border-[#27272a]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ready to Innovate CTA Section */}
      <section className="max-w-[1140px] mx-auto w-full px-5 lg:px-0 py-16">
        <div className="bg-[#121212] text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-[#27272a]">
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col max-w-lg">
            <h2 className="font-headline text-[32px] md:text-[38px] font-bold text-[#ededed] mb-3">
              Ready to Innovate?
            </h2>
            <p className="font-body text-[17px] text-neutral-300 mb-6 leading-relaxed">
              Currently open for full-time roles in Data Science, Machine Learning Engineering, and Data Engineering.
            </p>
            <div className="flex gap-4">
              <button
                id="cta-contact-me-btn"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 rounded-xl font-mono-tech text-[14px] font-semibold hover:bg-neutral-200 transition-colors shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">
                  mail
                </span>
                <span>Contact Me</span>
              </button>
            </div>
          </div>

          {/* Quick Action Links on Right */}
          <div className="relative z-10 grid grid-cols-1 gap-3.5 w-full md:w-80">
            <a
              id="cta-linkedin-link"
              href="https://www.linkedin.com/in/avantika-tiwari-1bb6091a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-[#18181b] rounded-xl hover:bg-[#27272a] transition-all group border border-[#27272a]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800/50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-400 text-[20px]">
                    link
                  </span>
                </div>
                <span className="font-mono-tech text-[14px] text-neutral-200 font-medium">
                  LinkedIn Profile
                </span>
              </div>
              <span className="material-symbols-outlined text-neutral-500 group-hover:text-white transition-colors group-hover:translate-x-1 duration-300">
                arrow_forward
              </span>
            </a>

            <a
              id="cta-github-link"
              href="https://github.com/avantika-27"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-[#18181b] rounded-xl hover:bg-[#27272a] transition-all group border border-[#27272a]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800/50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-400 text-[20px]">
                    code
                  </span>
                </div>
                <span className="font-mono-tech text-[14px] text-neutral-200 font-medium">
                  GitHub Repository
                </span>
              </div>
              <span className="material-symbols-outlined text-neutral-500 group-hover:text-white transition-colors group-hover:translate-x-1 duration-300">
                arrow_forward
              </span>
            </a>

            <button
              id="cta-resume-download-btn"
              onClick={onOpenResume}
              className="flex items-center justify-between p-4 bg-[#18181b] rounded-xl hover:bg-[#27272a] transition-all group border border-[#27272a] text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800/50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-400 text-[20px]">
                    description
                  </span>
                </div>
                <span className="font-mono-tech text-[14px] text-neutral-200 font-medium">
                  Download Resume
                </span>
              </div>
              <span className="material-symbols-outlined text-neutral-500 group-hover:text-white transition-colors group-hover:translate-y-0.5 duration-300">
                download
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
