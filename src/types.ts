export type TabType = 'home' | 'projects' | 'skills' | 'contact';

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  employmentType?: string;
  period: string;
  points: {
    text: string;
    highlight?: string;
  }[];
  tags: string[];
  align: 'left' | 'right';
  isCurrent?: boolean;
}

export interface MetricItem {
  value: string;
  label: string;
  subtext?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Research' | 'Engineering' | 'Both';
  badge: string;
  description: string;
  fullDescription?: string;
  imageUrl: string;
  imageAlt: string;
  highlightMetric: {
    value: string;
    label: string;
    icon: string;
  };
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  keyContributions?: string[];
  architecture?: string[];
  techStackDetailed?: { [category: string]: string[] };
  codeSnippet?: {
    language: string;
    code: string;
  };
  interactiveMetrics?: {
    label: string;
    value: number;
    benchmark?: number;
    unit?: string;
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  coursework: string[];
}

export interface SkillCategoryItem {
  id: string;
  title: string;
  icon: string;
  skills: string[];
  languages?: string[];
  databases?: string[];
  colSpan?: string;
}
