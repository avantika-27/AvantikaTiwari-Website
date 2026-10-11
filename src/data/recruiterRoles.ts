export type RecruiterRoleId = 'all' | 'ml-ai' | 'data-eng' | 'data-science' | 'ai-agents';

export interface RecruiterRole {
  id: RecruiterRoleId;
  title: string;
  shortTitle: string;
  badge: string;
  icon: string;
  fitScore: string;
  elevatorPitch: string;
  primarySkills: string[];
  spotlightExperienceId: string;
  matchingExperienceIds: string[];
  experienceRoleLabels?: { [expId: string]: string };
  spotlightProjectId: string;
  keyStats: { label: string; value: string }[];
  tailoredBioExcerpt: string;
}

export const RECRUITER_ROLES: RecruiterRole[] = [
  {
    id: 'ai-agents',
    title: 'AI Agent / GenAI Engineer',
    shortTitle: 'AI Agents & GenAI',
    badge: 'Meta CUA & RAG',
    icon: 'smart_toy',
    fitScore: '98% Match',
    elevatorPitch: 'Specialized in Computer-Use Agents (CUA), trajectory evaluation, multi-step LLM navigation, RAG pipelines (LangChain, ChromaDB), and reducing hallucinations.',
    primarySkills: ['Computer-Use Agents (CUA)', 'Trajectory Auditing', 'LangChain', 'ChromaDB', 'Hugging Face', 'Prompt Engineering', 'Python', 'Evaluation Automation'],
    spotlightExperienceId: 'meta',
    matchingExperienceIds: ['meta', 'asu-gra'],
    experienceRoleLabels: {
      'meta': 'Meta (Computer-Use Agents)',
      'asu-gra': 'ASU (RAG & GenAI Assistant)'
    },
    spotlightProjectId: 'llm-judges',
    keyStats: [
      { label: 'Evaluation Speedup', value: '14h → <3h' },
      { label: 'Agent Nav Accuracy', value: '+35%' },
      { label: 'Trajectory Audits', value: '500+ Runs' }
    ],
    tailoredBioExcerpt: 'Evaluating and scaling next-gen Computer-Use Agents at Meta and architecting production RAG systems at ASU. Focused on reliable tool navigation, prompt robustness, and hallucination reduction.'
  },
  {
    id: 'data-eng',
    title: 'Big Data / Data Platform Engineer',
    shortTitle: 'Big Data Platform',
    badge: '10+ TB/Day Scale',
    icon: 'database',
    fitScore: '99% Match',
    elevatorPitch: '2+ years of enterprise production data engineering at Jio Platforms processing 10+ TB/day with 99.9% accuracy, plus parallelized Rust telemetry engine at SolarSPELL.',
    primarySkills: ['Apache Airflow', 'Apache NiFi', 'PySpark', 'Rust Telemetry', 'SQL / Hive', 'Kafka', 'ETL / ELT', 'CI/CD Pipelines'],
    spotlightExperienceId: 'jio',
    matchingExperienceIds: ['jio', 'solarspell'],
    experienceRoleLabels: {
      'jio': 'Reliance Jio (10+ TB/Day Airflow & NiFi)',
      'solarspell': 'ASU SolarSPELL (Rust Telemetry Engine)'
    },
    spotlightProjectId: 'safetysignal',
    keyStats: [
      { label: 'Daily Data Volume', value: '10+ TB/day' },
      { label: 'ETL Pipeline Accuracy', value: '99.9%' },
      { label: 'DB Latency Cut', value: '90% (Rust)' }
    ],
    tailoredBioExcerpt: 'Deep enterprise background building fault-tolerant distributed pipelines at Jio Platforms. High concurrency, distributed computing, and extreme database optimization in Rust and Spark.'
  },
  {
    id: 'data-science',
    title: 'Data Scientist & Applied ML',
    shortTitle: 'Data Science & Analytics',
    badge: 'GIS & Spatial ML',
    icon: 'analytics',
    fitScore: '96% Match',
    elevatorPitch: 'M.S. Data Science candidate at ASU (4.0 GPA) modeling complex spatial risk with GIS & ML, driving 15% revenue growth in product analytics, and statistical decision modeling.',
    primarySkills: ['Spatial Modeling', 'GIS (QGIS/ArcGIS)', 'Python (Scikit-Learn, Pandas)', 'Spatial Cross-Validation', 'Customer Segmentation', 'A/B Testing', 'Statistics'],
    spotlightExperienceId: 'asu-gra',
    matchingExperienceIds: ['asu-gra', 'jio'],
    experienceRoleLabels: {
      'asu-gra': 'ASU (Spatial ML & GIS Risk Modeling)',
      'jio': 'Reliance Jio (Customer Growth Analytics)'
    },
    spotlightProjectId: 'safetysignal',
    keyStats: [
      { label: 'ASU Graduate GPA', value: '4.0 / 4.0' },
      { label: 'Revenue Growth Driven', value: '+15%' },
      { label: 'Coupons Uplift', value: '+20%' }
    ],
    tailoredBioExcerpt: 'Bridging deep statistical modeling with real human outcomes. Modeled neighborhood gun violence risk via spatial ML, customer lifetime growth analytics, and high-impact predictive models.'
  },
  {
    id: 'ml-ai',
    title: 'Machine Learning Engineer',
    shortTitle: 'Machine Learning Eng',
    badge: '98%+ Accuracy ML',
    icon: 'neurology',
    fitScore: '97% Match',
    elevatorPitch: 'End-to-end ML lifecycle from spatial feature engineering to production deployment, embeddings search, evaluation metrics, and repeatable automated test harnesses.',
    primarySkills: ['PyTorch / Scikit-Learn', 'Feature Engineering', 'Embeddings & Vectors', 'Model Auditing', 'Python', 'MLOps & CI/CD', 'Spatial CV'],
    spotlightExperienceId: 'asu-gra',
    matchingExperienceIds: ['asu-gra', 'meta'],
    experienceRoleLabels: {
      'asu-gra': 'ASU (Spatial Cross-Val & Applied ML)',
      'meta': 'Meta (AI Evaluation & CUA Testing)'
    },
    spotlightProjectId: 'safetysignal',
    keyStats: [
      { label: 'Pipeline Throughput', value: '+40%' },
      { label: 'Model Quality Lift', value: '28%' },
      { label: 'Integrity Assertion', value: '99.8%' }
    ],
    tailoredBioExcerpt: 'Building robust, repeatable ML pipelines from raw telemetry to served models. Passionate about verifiable metrics, rigorous cross-validation, and production reliability.'
  }
];
