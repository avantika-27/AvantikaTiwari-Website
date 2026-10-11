import React, { useState, useMemo } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsViewProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'All' | 'Research' | 'Engineering'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    PROJECTS_DATA.forEach((p) => p.tags.forEach((t) => tagsSet.add(t)));
    return Array.from(tagsSet);
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory =
        filter === 'All' ||
        project.category === filter ||
        project.category === 'Both';

      const matchesSearch =
        searchQuery.trim() === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesTag =
        selectedTag === null || project.tags.includes(selectedTag);

      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [filter, searchQuery, selectedTag]);

  return (
    <div className="flex flex-col w-full relative pb-16 pt-4 md:pt-6 animate-fade-in">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-0 w-full">
        {/* Header Title & Filter Buttons */}
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-headline text-[36px] md:text-[44px] font-bold text-[#ededed] tracking-tight mb-2">
                Projects Portfolio
              </h1>
              <p className="font-body text-[18px] text-neutral-400 max-w-2xl">
                A curated selection of works spanning Natural Language Processing, Computer Vision, and Time Series Analysis. Demonstrating rigorous methodology and impactful results.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 flex-wrap">
              <button
                id="filter-all-projects-btn"
                onClick={() => {
                  setFilter('All');
                  setSelectedTag(null);
                }}
                className={`px-5 py-2 rounded-xl font-mono-tech text-[13px] sm:text-[14px] transition-all cursor-pointer flex items-center gap-2 ${
                  filter === 'All'
                    ? 'bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/30 ring-1 ring-blue-400'
                    : 'bg-[#14151b] text-neutral-300 border border-[#272836] hover:bg-[#1c1d28] hover:border-neutral-500'
                }`}
              >
                <span>All Projects</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded font-bold ${
                  filter === 'All' ? 'bg-blue-800/80 text-blue-100' : 'bg-[#20212f] text-neutral-400'
                }`}>
                  {PROJECTS_DATA.length}
                </span>
              </button>
              <button
                id="filter-research-btn"
                onClick={() => {
                  setFilter('Research');
                  setSelectedTag(null);
                }}
                className={`px-5 py-2 rounded-xl font-mono-tech text-[13px] sm:text-[14px] transition-all cursor-pointer flex items-center gap-2 ${
                  filter === 'Research'
                    ? 'bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/30 ring-1 ring-blue-400'
                    : 'bg-[#14151b] text-neutral-300 border border-[#272836] hover:bg-[#1c1d28] hover:border-neutral-500'
                }`}
              >
                <span>Research</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded font-bold ${
                  filter === 'Research' ? 'bg-blue-800/80 text-blue-100' : 'bg-[#20212f] text-neutral-400'
                }`}>
                  {PROJECTS_DATA.filter(p => p.category === 'Research' || p.category === 'Both').length}
                </span>
              </button>
              <button
                id="filter-engineering-btn"
                onClick={() => {
                  setFilter('Engineering');
                  setSelectedTag(null);
                }}
                className={`px-5 py-2 rounded-xl font-mono-tech text-[13px] sm:text-[14px] transition-all cursor-pointer flex items-center gap-2 ${
                  filter === 'Engineering'
                    ? 'bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/30 ring-1 ring-blue-400'
                    : 'bg-[#14151b] text-neutral-300 border border-[#272836] hover:bg-[#1c1d28] hover:border-neutral-500'
                }`}
              >
                <span>Engineering</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded font-bold ${
                  filter === 'Engineering' ? 'bg-blue-800/80 text-blue-100' : 'bg-[#20212f] text-neutral-400'
                }`}>
                  {PROJECTS_DATA.filter(p => p.category === 'Engineering' || p.category === 'Both').length}
                </span>
              </button>
            </div>
          </div>

          {/* Search & Tag Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-[#27272a]">
            <div className="relative flex-1 max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 text-[20px]">
                search
              </span>
              <input
                id="search-projects-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search models, algorithms, frameworks..."
                className="w-full pl-10 pr-4 py-2 bg-[#121212] border border-[#27272a] rounded-xl font-mono-tech text-sm text-[#ededed] placeholder-neutral-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              )}
            </div>

            {/* Quick Tag Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
              <span className="text-xs font-mono-tech text-neutral-500 uppercase whitespace-nowrap">
                Tags:
              </span>
              {allTags.slice(0, 5).map((tag) => {
                const isSelected = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(isSelected ? null : tag)}
                    className={`text-xs font-mono-tech px-2.5 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-blue-500 text-white font-semibold'
                        : 'bg-[#18181b] text-neutral-300 border border-[#27272a] hover:bg-[#27272a]'
                    }`}
                  >
                    #{tag}
                  </button>
                );
              })}
              {selectedTag && (
                <button
                  onClick={() => setSelectedTag(null)}
                  className="text-xs font-mono-tech text-blue-400 hover:underline whitespace-nowrap"
                >
                  Clear Tag
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="bg-[#121212] rounded-2xl p-12 text-center border border-[#27272a] my-8">
            <span className="material-symbols-outlined text-[48px] text-neutral-500 mb-3">
              folder_off
            </span>
            <h3 className="font-headline text-xl font-bold text-[#ededed] mb-1">
              No matching projects found
            </h3>
            <p className="font-body text-neutral-400 mb-4">
              Try adjusting your search query or filter tags.
            </p>
            <button
              onClick={() => {
                setFilter('All');
                setSearchQuery('');
                setSelectedTag(null);
              }}
              className="bg-white text-black font-semibold px-5 py-2 rounded-lg font-mono-tech text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => {
              return (
                <article
                  key={project.id}
                  id={`project-card-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className="group relative flex flex-col bg-[#121212] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#27272a] hover:border-neutral-500 cursor-pointer hover:-translate-y-1"
                >
                  {/* Top Image Preview Banner */}
                  <div className="h-52 w-full bg-[#18181b] relative overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.imageAlt}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent"></div>
                    
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10">
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-lg text-white font-mono-tech text-[11px] tracking-wider uppercase font-semibold border border-white/20">
                        {project.badge}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                        <span className="material-symbols-outlined text-[18px]">
                          arrow_forward
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="font-headline text-[22px] font-bold text-[#ededed] mb-2.5 group-hover:text-blue-400 transition-colors leading-tight">
                      {project.title}
                    </h2>
                    
                    <p className="font-body text-[15px] leading-[1.6] text-neutral-400 mb-6 flex-grow line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-col gap-4 mt-auto pt-4 border-t border-[#27272a]">
                      {/* Highlight Metric Box */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-950/80 border border-blue-800/50 flex items-center justify-center shrink-0 text-blue-300">
                          <span className="material-symbols-outlined text-[20px]">
                            {project.highlightMetric.icon}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-headline text-[18px] font-bold text-[#ededed] leading-tight">
                            {project.highlightMetric.value}
                          </span>
                          <span className="font-mono-tech text-[11px] text-neutral-400">
                            {project.highlightMetric.label}
                          </span>
                        </div>
                      </div>

                      {/* Tag Chips */}
                      <div className="flex flex-wrap gap-2 mt-1">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg bg-[#18181b] border border-[#27272a] text-neutral-300 font-mono-tech text-[11px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
