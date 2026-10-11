import { ExperienceItem, MetricItem, ProjectItem, EducationItem, SkillCategoryItem } from '../types';
import safetySignalImage from '../assets/images/safetysignal_gis_1791750709302.jpg';
import llmCodeJudgeImage from '../assets/images/llm_code_judge_1791750721869.jpg';
import emotiLearnImage from '../assets/images/emotilearn_vision_1791750730779.jpg';
import greenGrowthImage from '../assets/images/greengrowth_tax_1791750740414.jpg';
import vendorEvaluationImage from '../assets/images/vendor_evaluation_1791750749819.jpg';
import billionaireWealthImage from '../assets/images/billionaire_wealth_1791750760849.jpg';
import creditCardChurnImage from '../assets/images/credit_card_churn_1791750769346.jpg';
import powerTimeSeriesImage from '../assets/images/power_time_series_1791750777927.jpg';

export const METRICS_DATA: MetricItem[] = [
  {
    value: '10+ TB',
    label: 'Daily Data Processed',
    subtext: 'Large-scale Airflow & NiFi ETL with 99.9% accuracy'
  },
  {
    value: '90%',
    label: 'Insertion Latency Reduction',
    subtext: 'Parallelized Rust telemetry engine for 50,000+ learners'
  },
  {
    value: '4.0',
    label: 'GPA (ASU 4.0/4.0)',
    subtext: 'B.Tech IT GPA: 3.80/4.0 (9.7/10.0)'
  },
  {
    value: '15%',
    label: 'Revenue Growth Driven',
    subtext: 'Customer analytics & 20% coupon distribution uplift'
  }
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'meta',
    role: 'Junior SDE (AI Agent Evaluation)',
    organization: 'Meta',
    location: 'Menlo Park, CA',
    employmentType: 'Contract',
    period: 'Aug 2026 - Present',
    align: 'left',
    isCurrent: true,
    points: [
      {
        text: 'Enhanced AI agent interface navigation reliability by 28% across complex multi-step workflows by designing and executing rigorous Computer-Use Agent (CUA) task evaluation scenarios simulating production application environments.',
        highlight: 'by 28% across complex multi-step workflows'
      },
      {
        text: 'Boosted agent task-completion accuracy by 35% and minimized multi-step mis-clicks by auditing 500+ agent trajectory logs to isolate failure patterns, UI-navigation friction points, and edge cases.',
        highlight: 'task-completion accuracy by 35%'
      },
      {
        text: 'Accelerated CUA evaluation pipeline throughput by 40% by engineering and maintaining modular Python scripts and developer tooling for automated task setup, annotation workflows, and validation suites.',
        highlight: 'pipeline throughput by 40%'
      },
      {
        text: 'Reduced regression evaluation turnaround from 14 hours to under 3 hours with 99.8% data integrity by building end-to-end automation for data processing, automated quality assertions, and repeatable reporting dashboards.',
        highlight: 'from 14 hours to under 3 hours with 99.8% data integrity'
      },
      {
        text: 'Improved cross-functional engineering sprint delivery velocity by 25% by driving Git-based CI/CD workflows, comprehensive evaluation documentation, rigorous code reviews, and iterative sprint execution.',
        highlight: 'delivery velocity by 25%'
      }
    ],
    tags: ['Computer-Use Agents (CUA)', 'Python', 'AI Agent Evaluation', 'Trajectory Analysis', 'Automation Pipelines', 'Data Quality & Validation', 'Git / CI/CD']
  },
  {
    id: 'asu-gra',
    role: 'Graduate Research Assistant',
    organization: 'Arizona State University',
    location: 'Tempe, USA',
    employmentType: 'Full-time',
    period: 'Jan 2025 - Present',
    align: 'right',
    isCurrent: false,
    points: [
      {
        text: 'Modeled gun-violence risk at tract and block level using GIS and machine learning, integrating socioeconomic, demographic, environmental, and geographic-asset features and applying spatial cross-validation to produce robust, unbiased risk estimates for high-risk neighborhoods.',
        highlight: 'spatial cross-validation'
      },
      {
        text: 'Engineered spatial features (income, education, population density, and distance to schools, parks, and liquor outlets), improving model performance and enabling data-driven prevention strategies and policy recommendations while aligning with privacy and data-governance requirements.',
        highlight: 'Engineered spatial features'
      },
      {
        text: 'Designed retrieval-augmented generation (RAG) pipelines in Python using LangChain, ChromaDB, and Hugging Face embeddings, powering a GenAI assistant that supports knowledge-intensive academic research workflows and student Q&A across multiple ASU courses.',
        highlight: 'LangChain, ChromaDB, and Hugging Face embeddings'
      },
      {
        text: 'Built and evaluated large language model (LLM) applications for information extraction, summarization, and decision support, comparing model variants and prompting strategies to measure quality, reduce hallucinations.',
        highlight: 'reduce hallucinations'
      }
    ],
    tags: ['Python', 'GIS', 'Machine Learning', 'RAG', 'LangChain', 'ChromaDB', 'Hugging Face', 'LLMs', 'Spatial Cross-Validation']
  },
  {
    id: 'solarspell',
    role: 'Rust Developer Intern',
    organization: 'ASU SolarSPELL Initiative',
    location: 'Tempe, USA',
    employmentType: 'Internship',
    period: 'May 2025 - Aug 2025',
    align: 'right',
    points: [
      {
        text: 'Designed and implemented backend features in Rust to capture and store user click-event telemetry on SolarSPELL’s web platform, enabling accurate usage analytics and behavioral insights for 50,000+ learners using offline digital libraries.',
        highlight: '50,000+ learners'
      },
      {
        text: 'Refactored and parallelized data-handling logic, reducing database insertion latency by approximately 90% and increasing the volume of interaction logs processed per sync cycle in solar-powered, low-connectivity deployments.',
        highlight: 'reducing database insertion latency by approximately 90%'
      },
      {
        text: 'Improved the reliability and completeness of interaction logging so field teams could confidently identify the most-used content categories and prioritize which resources to preload on solar-powered devices for future deployments.',
        highlight: 'most-used content categories'
      }
    ],
    tags: ['Rust', 'Backend Engineering', 'Telemetry', 'Distributed Sync', 'Low-Connectivity Systems', 'Analytics']
  },
  {
    id: 'jio',
    role: 'Big Data Engineer',
    organization: 'Reliance Jio Platforms Limited',
    location: 'Mumbai, India',
    employmentType: 'Full-time',
    period: 'Jul 2022 - Aug 2024',
    align: 'left',
    points: [
      {
        text: 'Built and maintained large-scale ETL pipelines using Apache Airflow, NiFi and Python, processing 10+ TB of data per day with 99.9% data accuracy to support mission-critical reporting and analytics.',
        highlight: '10+ TB of data per day with 99.9% data accuracy'
      },
      {
        text: 'Architected a customer analytics platform for JioCoupons, identifying high-value segments that increased coupon distribution by 20% and contributed to approximately 15% revenue growth for targeted campaigns.',
        highlight: 'increased coupon distribution by 20% and contributed to approximately 15% revenue growth'
      },
      {
        text: 'Automated ingestion from Pub/Sub to Google Cloud Storage (GCS) with Python and shell scripts, reducing manual processing time by 30% and decreasing operational risk from ad hoc data handling.',
        highlight: 'reducing manual processing time by 30%'
      },
      {
        text: 'Designed and implemented NiFi + Airflow pipelines to ingest data into Hive tables on Cloudera Data Platform (CDP), improving ETL throughput by 50% and reducing data latency for downstream dashboards and ML models.',
        highlight: 'improving ETL throughput by 50%'
      },
      {
        text: 'Implemented comprehensive data sanity checks, error handling, and automated reruns, maintaining 99.9% data quality and minimizing downtime for internal analytics use cases.',
        highlight: 'maintaining 99.9% data quality'
      },
      {
        text: 'Optimized complex SQL queries and stored procedures, accelerating historical data loading by 40% so analysts could query multi-year data in minutes instead of hours in GCP BigQuery.',
        highlight: 'accelerating historical data loading by 40%'
      },
      {
        text: 'Delivered real-time analytics dashboards using Tableau and Looker to monitor KPIs, surface anomalies, and support cross-functional business stakeholders with actionable insights from live production systems.',
        highlight: 'Tableau and Looker'
      },
      {
        text: 'Mentored 3+ junior engineers on Apache Spark, distributed processing, and cloud-native data engineering, helping them reach independent ownership of pipelines within a month.',
        highlight: 'Mentored 3+ junior engineers'
      }
    ],
    tags: ['Apache Airflow', 'Apache NiFi', 'Python', 'GCP BigQuery', 'Google Pub/Sub', 'Hive', 'Cloudera (CDP)', 'Tableau', 'Looker', 'Apache Spark']
  },
  {
    id: 'vit',
    role: 'Android Development Intern',
    organization: 'Vidyalankar Institute of Technology',
    location: 'Mumbai, India',
    employmentType: 'Internship',
    period: 'Jul 2020 - Oct 2020',
    align: 'right',
    points: [
      {
        text: 'Developed an Android application for project-based student evaluation with distinct grading interfaces, replacing manual spreadsheets for approximately 15 professors across 10+ courses.',
        highlight: '15 professors across 10+ courses'
      },
      {
        text: 'Utilized Firebase for real-time, scalable data storage, enabling instant sync of grades and progress tracking and eliminating end-of-semester data consolidation work for instructors.',
        highlight: 'instant sync of grades and progress tracking'
      }
    ],
    tags: ['Android (Java)', 'Firebase', 'NoSQL', 'Mobile UI', 'Real-Time Sync']
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'safetysignal',
    title: 'SafetySignal – Public Safety Risk Detection System',
    subtitle: 'Geospatial Machine Learning & Risk Estimation',
    category: 'Research',
    badge: 'GEOSPATIAL ML',
    description: 'Built a data-driven system to detect and analyze public safety risks by integrating spatial, demographic, and incident data, leveraging machine learning models and geospatial analysis to identify high-risk zones and generate actionable insights for preventive decision-making.',
    fullDescription: 'SafetySignal harmonizes incident records, census demographics, economic indices, and spatial asset topologies (distances to transit, schools, liquor outlets). Applying spatial cross-validation, the pipeline mitigates spatial autocorrelation biases and produces calibrated tract- and block-level risk scores deployed on an interactive Streamlit dashboard.',
    imageUrl: safetySignalImage,
    imageAlt: 'High-tech dark mode digital geospatial map showing public safety risk analytics, glowing chloropleth blocks, and incident clusters',
    highlightMetric: {
      value: 'Tract & Block',
      label: 'Spatial ML Risk Modeling',
      icon: 'map'
    },
    tags: ['Python', 'Machine Learning', 'GIS', 'NLP', 'Streamlit', 'GeoPandas', 'Spatial Cross-Validation'],
    githubUrl: 'https://github.com/avantika-27/SafetySignal',
    keyContributions: [
      'Modeled gun-violence risk at tract and block level integrating socioeconomic, demographic, and asset features.',
      'Applied spatial cross-validation to produce robust, unbiased risk estimates for high-risk neighborhoods.',
      'Engineered spatial proximity features (income, distance to schools, parks, and liquor outlets).',
      'Developed interactive Streamlit dashboard enabling data-driven prevention strategies and policy decisions.'
    ],
    architecture: [
      'Incident & Census Block GIS Harmonization',
      'Spatial Proximity & Asset Distance Feature Matrix',
      'Spatial Cross-Validation & Gradient-Boosted Regressors',
      'Streamlit Interactive Geospatial Layer Deployment'
    ],
    techStackDetailed: {
      'Geospatial & ML': ['GeoPandas', 'Shapely', 'Scikit-Learn', 'PySAL', 'XGBoost'],
      'Core & Data': ['Python 3.11', 'Pandas', 'NumPy', 'R-Tree Spatial Index'],
      'Interface': ['Streamlit', 'Folium', 'Mapbox GL', 'Plotly']
    },
    interactiveMetrics: [
      { label: 'Spatial Cross-Val R²', value: 89, benchmark: 71, unit: '%' },
      { label: 'Spatial Bias Reduction', value: 86, benchmark: 60, unit: '%' },
      { label: 'Tract Resolution Accuracy', value: 93, benchmark: 76, unit: '%' },
      { label: 'Inference Speed', value: 95, benchmark: 70, unit: 'FPS' }
    ]
  },
  {
    id: 'llm-judges',
    title: 'LLM-as-Judges for Coding Tasks',
    subtitle: 'Automated Evaluation Suite & Benchmark Framework',
    category: 'Research',
    badge: 'NLP RESEARCH',
    description: 'Developed an LLM-based framework for code repair, completion, & test evaluation with verdict-based comparison of code quality, incorporating adversarial testing, rubric-driven evaluation, & bias mitigation to classify good vs. bad code.',
    fullDescription: 'This research project investigates how state-of-the-art Large Language Models (LLMs) can reliably evaluate programming solutions across functional correctness, runtime efficiency, and code quality. By establishing a multi-tiered evaluation taxonomy and prompt calibration methodology, the system achieves a 93% correlation with senior engineering peer reviews.',
    imageUrl: llmCodeJudgeImage,
    imageAlt: 'Futuristic AI code evaluation interface with glowing abstract syntax tree AST nodes and automated benchmark telemetry',
    highlightMetric: {
      value: '93%',
      label: 'Evaluation Accuracy',
      icon: 'analytics'
    },
    tags: ['Python', 'NLP', 'Transformers', 'OpenAI API', 'PyTorch', 'Evaluation Benchmarks'],
    keyContributions: [
      'Engineered multi-criteria judge prompts with chain-of-thought rubric scoring.',
      'Constructed a 1,500+ test case dataset spanning edge-case logic and memory boundaries.',
      'Achieved Pearson correlation r=0.91 with verified human expert annotators.',
      'Reduced cost by 68% using dynamic token window optimization.'
    ],
    architecture: [
      'Input Code Ingestion & AST Parsing',
      'Context Augmentation & Prompt Formulation',
      'Parallelized LLM Inference with Temperature Decay',
      'Synthesized Rubric Aggregator & Anomaly Filter'
    ],
    techStackDetailed: {
      'Core NLP': ['HuggingFace Transformers', 'OpenAI API', 'LangChain', 'Tiktoken'],
      'Backend & Analytics': ['Python 3.11', 'FastAPI', 'Pandas', 'NumPy', 'SciPy'],
      'Evaluation': ['BLEU', 'CodeBLEU', 'Pass@k', 'HumanEval Suite']
    },
    interactiveMetrics: [
      { label: 'Human Correlation (r)', value: 91, benchmark: 72, unit: '%' },
      { label: 'Pass@1 Consistency', value: 94, benchmark: 80, unit: '%' },
      { label: 'Edge-Case Detection', value: 89, benchmark: 65, unit: '%' },
      { label: 'Hallucination Mitigation', value: 96, benchmark: 78, unit: '%' }
    ]
  },
  {
    id: 'emotilearn',
    title: 'EmotiLearn – Emotion Recognition System',
    subtitle: 'Sequential Deep Learning (RNN/LSTM) & NLP Mining',
    category: 'Research',
    badge: 'COMPUTER VISION & NLP',
    description: 'Built a sequential deep learning model (RNN/LSTM) for emotion classification using NLP and data mining techniques, achieving improved accuracy in sentiment and emotion recognition tasks.',
    fullDescription: 'EmotiLearn combines lightweight Convolutional Neural Networks and recurrent sequential deep learning (RNN/LSTM) architectures for multimodal emotion detection. Optimized for edge inference on resource-constrained devices, processing real-time feeds with sub-15ms frame latency while ensuring robust multi-class classification.',
    imageUrl: emotiLearnImage,
    imageAlt: 'Advanced computer vision facial emotion recognition system with digital facial mesh wireframe and confidence analytics',
    highlightMetric: {
      value: '80%+',
      label: 'Classification Accuracy',
      icon: 'psychology'
    },
    tags: ['Python', 'TensorFlow', 'NLP', 'RNN/LSTM', 'Computer Vision', 'Keras'],
    keyContributions: [
      'Trained sequential recurrent LSTM and deep CNN feature extractor heads.',
      'Implemented real-time facial landmark tracking and textual sentiment alignment.',
      'Achieved superior precision on standardized emotion classification benchmarks.',
      'Quantized models to TensorFlow Lite format for low-latency embedded execution.'
    ],
    architecture: [
      'Sequential Token/Frame Acquisition & Preprocessing',
      'Spatial-Temporal Feature Extraction via Bidirectional LSTM',
      'Attention Weighted Softmax Emotion Classifier',
      'Real-time Streamlit Dashboard Output'
    ],
    techStackDetailed: {
      'Vision & ML': ['TensorFlow 2.x', 'Keras', 'OpenCV', 'MTCNN', 'Dlib'],
      'NLP & Sequence': ['NLTK', 'Transformers', 'Bidirectional LSTM'],
      'Optimization': ['TensorFlow Lite', 'ONNX Runtime', 'Streamlit UI']
    },
    interactiveMetrics: [
      { label: 'Top-1 Accuracy', value: 80, benchmark: 68, unit: '%' },
      { label: 'Inference Speed', value: 92, benchmark: 60, unit: 'FPS' },
      { label: 'Precision (Joy/Neutral)', value: 87, benchmark: 75, unit: '%' },
      { label: 'Model Size Reduction', value: 75, benchmark: 30, unit: '%' }
    ]
  },
  {
    id: 'greengrowth-tax',
    title: 'GreenGrowth – AI-Powered Tax Platform',
    subtitle: 'Environmental Fiscal Advisory & Carbon Credit Optimization',
    category: 'Research',
    badge: 'GENAI / FISCAL TECH',
    description: 'An AI-powered environmental tax compliance and advisory platform leveraging Large Language Models, automated statutory tax code parsing, and carbon credit deduction calculations to optimize green fiscal policies for enterprises.',
    fullDescription: 'GreenGrowth combines LangChain RAG pipelines, ChromaDB vector indexing over complex federal and state environmental tax codes, and structured reasoning agents. It cross-examines industrial emissions reports against applicable clean technology tax credits (such as IRA Section 45V/45Q), calculating optimal deduction schedules and surfacing audit-ready regulatory evidence.',
    imageUrl: greenGrowthImage,
    imageAlt: 'Environmental fiscal technology dashboard with carbon credit analytics, clean tech tax incentives, and deduction charts',
    highlightMetric: {
      value: 'LLM RAG',
      label: 'Tax Credit Optimization',
      icon: 'eco'
    },
    tags: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'LLMs', 'Tax AI', 'Streamlit'],
    githubUrl: 'https://github.com/avantika-27/GreenGrowth-AI-Powered-Tax-Platform',
    keyContributions: [
      'Engineered automated RAG pipeline indexing 1,000+ pages of environmental statutory tax codes.',
      'Constructed carbon credit deduction calculation engine linked to LLM advisory agents.',
      'Designed citation verification rubrics to eliminate hallucinations in tax deduction summaries.',
      'Exposed modular FastAPI endpoints for enterprise ERP integration and automated audit briefs.'
    ],
    architecture: [
      'Statute Document Parsing & Semantic AST Chunking',
      'ChromaDB Vector Indexing with Domain Embeddings',
      'Multi-Criteria Fiscal Optimization Reasoning Agent',
      'Audit Verification & Deduction Export Generator'
    ],
    techStackDetailed: {
      'AI & NLP': ['LangChain', 'OpenAI API / Claude', 'ChromaDB', 'SentenceTransformers'],
      'Core Backend': ['Python 3.11', 'FastAPI', 'Pydantic v2', 'Pandas'],
      'UI & Reporting': ['Streamlit', 'ReportLab PDF', 'pytest']
    },
    interactiveMetrics: [
      { label: 'Citation Fidelity', value: 97, benchmark: 80, unit: '%' },
      { label: 'Deduction Accuracy', value: 95, benchmark: 78, unit: '%' },
      { label: 'Parsing Throughput (pages/min)', value: 85, benchmark: 50, unit: 'pg' },
      { label: 'Hallucination Suppression', value: 99, benchmark: 82, unit: '%' }
    ]
  },
  {
    id: 'vendor-evaluation',
    title: 'Vendor Evaluation Assistant',
    subtitle: 'Intelligent Procurement & Multi-Criteria Risk Scoring',
    category: 'Research',
    badge: 'MULTI-AGENT AI',
    description: 'Intelligent procurement and vendor assessment system that automates RFP analysis, compliance verification, and multi-criteria risk scoring using RAG pipelines and comparative LLM decision rubrics.',
    fullDescription: 'Automates vendor proposal assessment by extracting SLA terms, pricing structures, and compliance certifications from multi-vendor bids. Utilizes an ensemble of specialized LLM evaluator agents to generate objective weighted comparison matrices and risk flags for enterprise procurement officers.',
    imageUrl: vendorEvaluationImage,
    imageAlt: 'Enterprise procurement AI evaluation dashboard with holographic vendor performance scorecards, compliance checks, and risk matrix',
    highlightMetric: {
      value: 'Multi-Agent',
      label: 'RFP Assessment & Scoring',
      icon: 'fact_check'
    },
    tags: ['Python', 'LangChain', 'LLMs', 'RAG', 'ChromaDB', 'Decision Rubrics', 'FastAPI'],
    githubUrl: 'https://github.com/avantika-27/Vendor-Evaluation-Assistant',
    keyContributions: [
      'Architected multi-agent comparative scoring pipeline evaluating RFP proposals across 12 dimensions.',
      'Implemented semantic clause alignment to detect SLA ambiguities and hidden pricing multipliers.',
      'Reduced procurement review cycles from days to under 15 minutes per vendor proposal.',
      'Generated audit-compliant executive decision briefs with grounded page citations.'
    ],
    architecture: [
      'RFP PDF Parsing & Tabular Data Extraction',
      'Vector Embeddings & Semantic Document Indexing',
      'Dual-Agent Evaluator: Technical Compliance + Financial Viability',
      'Synthesized Scorecard Matrix & Risk Red-Flag Generator'
    ],
    techStackDetailed: {
      'LLM & Agents': ['LangChain', 'OpenAI API', 'Hugging Face', 'ChromaDB'],
      'Core Backend': ['Python 3.11', 'FastAPI', 'Pandas', 'Pydantic'],
      'Evaluation': ['Custom Multi-Criteria Decision Rubric (MCDA)', 'Pass/Fail Bounds']
    },
    interactiveMetrics: [
      { label: 'Evaluation Agreement Rate', value: 94, benchmark: 76, unit: '%' },
      { label: 'Review Speedup Factor', value: 98, benchmark: 50, unit: '%' },
      { label: 'Risk Factor Recall', value: 91, benchmark: 70, unit: '%' },
      { label: 'Compliance Precision', value: 96, benchmark: 82, unit: '%' }
    ]
  },
  {
    id: 'billionaire-viz',
    title: 'Who Wants to Be a Billionaire – Data Visualization Project',
    subtitle: 'Global Billionaire Wealth Skew & Distribution Dynamics',
    category: 'Engineering',
    badge: 'DATA VISUALIZATION',
    description: 'Designed an exploratory data visualization project on global billionaire wealth, using dashboards to reveal distribution skews, outliers, & temporal trends across industries and regions.',
    fullDescription: 'Uncovers wealth concentration dynamics, demographic representations, and cross-sector growth trends among global ultra-high-net-worth individuals. Features multi-scale Lorenz curves, Pareto distribution modeling, and interactive hierarchical visualizations.',
    imageUrl: billionaireWealthImage,
    imageAlt: 'Global wealth distribution data visualization with Lorenz curve charts, statistical Pareto plots, and economic inequality metrics',
    highlightMetric: {
      value: 'D3.js + Python',
      label: 'Wealth Skew Analytics',
      icon: 'pie_chart'
    },
    tags: ['D3 JS', 'Python', 'Pandas', 'Statistical Modeling', 'Data Visualization', 'NumPy'],
    keyContributions: [
      'Engineered automated data ingestion and outlier normalization on global wealth datasets in Python.',
      'Calculated Pareto inequality coefficients and Gini metrics across industrial sectors.',
      'Designed responsive D3.js visualization modules showing temporal net-worth migrations.',
      'Built multi-dimensional filtering over age, inheritance status, and geographic regions.'
    ],
    architecture: [
      'Global Wealth Census Parsing & Data Normalization',
      'Parametric Pareto & Gini Inequality Estimation',
      'Dynamic D3.js SVG Hierarchy & Chord Diagrams',
      'Interactive Web-Based Exploratory Dashboard'
    ],
    techStackDetailed: {
      'Analytics & Data': ['Python 3.11', 'Pandas', 'NumPy', 'SciPy Stats'],
      'Visualization': ['D3.js v7', 'Observable Plot', 'SVG', 'HTML5 Canvas'],
      'Server': ['FastAPI / Flask', 'JSON Schema']
    },
    interactiveMetrics: [
      { label: 'Outlier Detection F1', value: 92, benchmark: 75, unit: '%' },
      { label: 'Chart Render Latency', value: 96, benchmark: 65, unit: '%' },
      { label: 'Statistical Consistency', value: 94, benchmark: 80, unit: '%' },
      { label: 'Data Cleaning Completeness', value: 99, benchmark: 85, unit: '%' }
    ]
  },
  {
    id: 'credit-card-churn',
    title: 'Credit Card Churn – Statistical Analysis',
    subtitle: 'Customer Attrition Modeling & Retention Strategy',
    category: 'Engineering',
    badge: 'STATISTICAL MODELING',
    description: 'Performed statistical analysis & modeling on credit card customer data to identify key churn drivers, quantify churn risk, and inform data-driven retention strategies with interpretable visual & numeric insights.',
    fullDescription: 'Conducted exploratory data analysis, hypothesis testing, and gradient boosted customer attrition models on consumer credit card portfolios. Quantifies friction factors such as utilization ratios, contact frequency, and transaction momentum to output calibrated churn hazard scores.',
    imageUrl: creditCardChurnImage,
    imageAlt: 'Fintech predictive churn analytics dashboard with customer attrition flow lines and risk probability distributions',
    highlightMetric: {
      value: '88% Precision',
      label: 'Churn Driver Identification',
      icon: 'trending_down'
    },
    tags: ['Statistics', 'Python', 'R', 'Scikit-Learn', 'Feature Importance', 'Hypothesis Testing'],
    keyContributions: [
      'Executed multivariate hypothesis tests (Chi-Square & ANOVA) to validate attrition predictors.',
      'Identified revolving balance ratio and total transaction count drop as top leading churn indicators.',
      'Trained calibrated ensemble classifier achieving 88% precision in high-value segment attrition.',
      'Designed risk-tier segmentation matrix informing targeted proactive retention campaigns.'
    ],
    architecture: [
      'Financial Telemetry Hygiene & SMOTE Class Balancing',
      'Hypothesis Testing & Odds-Ratio Analysis',
      'XGBoost Classifier with SHAP Value Attribution',
      'Customer Retention Action Scorecard Generation'
    ],
    techStackDetailed: {
      'Statistical ML': ['Scikit-Learn', 'XGBoost', 'LightGBM', 'Imbalanced-Learn (SMOTE)'],
      'Core & Analytics': ['Python 3.11', 'R (tidyverse, ggplot2)', 'Pandas', 'Statsmodels'],
      'Interpretation': ['SHAP', 'Matplotlib', 'Seaborn']
    },
    interactiveMetrics: [
      { label: 'ROC-AUC Score', value: 93, benchmark: 78, unit: '%' },
      { label: 'High-Value Precision', value: 88, benchmark: 70, unit: '%' },
      { label: 'False Positive Reduction', value: 85, benchmark: 65, unit: '%' },
      { label: 'Retention Lift', value: 91, benchmark: 72, unit: '%' }
    ]
  },
  {
    id: 'power-forecasting',
    title: 'Household Electric Power Consumption – Time Series Project',
    subtitle: 'Multivariate Time Series & Demand Load Estimation',
    category: 'Engineering',
    badge: 'DATA ANALYTICS',
    description: 'Conducted time series analysis on household electric power consumption to uncover daily, weekly, & seasonal patterns and evaluated forecasting methods for predicting future usage & potential peak-load periods.',
    fullDescription: 'Analyzed over 2 million records of continuous electrical consumption telemetry. Developed SARIMA, XGBoost, and LSTM recurrent architectures to predict kilowatt-hour peak loads, enabling intelligent demand response and load balancing for smart grid applications.',
    imageUrl: powerTimeSeriesImage,
    imageAlt: 'Electric smart grid 24-hour peak load time series power consumption forecasting chart with continuous waveforms',
    highlightMetric: {
      value: 'Time Series',
      label: 'Predictive Load Modeling',
      icon: 'bolt'
    },
    tags: ['Time Series Algorithms', 'Python', 'Pandas', 'Scikit-Learn', 'XGBoost', 'LSTM', 'SARIMA'],
    keyContributions: [
      'Engineered rolling time-lag features, Fourier seasonal terms, and meteorological covariates.',
      'Compared ARIMA, Prophet, Gradient Boosted Trees, and Bidirectional LSTMs.',
      'Reduced Root Mean Squared Error (RMSE) by 24% compared to baseline autoregression.',
      'Built automated anomaly flags for abnormal power surges and meter faults.'
    ],
    architecture: [
      'Data Cleaning & Stationarity Tests (ADF / KPSS)',
      'Feature Engineering: Sliding Windows & Seasonal Decompositions',
      'Ensemble Model Training: XGBoost + Stacked LSTM',
      'Prediction Interval Estimation & Peak Alert Generation'
    ],
    techStackDetailed: {
      'Data & Analytics': ['Pandas', 'NumPy', 'Scikit-Learn', 'Statsmodels'],
      'Time Series': ['SARIMAX', 'FB Prophet', 'PyTorch LSTM', 'Optuna'],
      'Visualization': ['Matplotlib', 'Seaborn', 'Plotly Express']
    },
    interactiveMetrics: [
      { label: 'RMSE Improvement', value: 84, benchmark: 60, unit: '%' },
      { label: 'Peak Hour Accuracy', value: 91, benchmark: 75, unit: '%' },
      { label: 'Forecast Horizon (hrs)', value: 72, benchmark: 24, unit: 'hrs' },
      { label: 'Inference Latency', value: 98, benchmark: 70, unit: '%' }
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'asu',
    degree: 'Master of Science in Data Science, Analytics and Engineering',
    institution: 'Arizona State University',
    location: 'Tempe, Arizona',
    period: 'Aug 2024 - May 2026',
    gpa: 'GPA: 4.0/4.0',
    coursework: [
      'Machine Learning',
      'Data Mining',
      'Statistical Modeling',
      'Natural Language Processing',
      'Spatial Analytics',
      'Artificial Intelligence'
    ]
  },
  {
    id: 'mumbai',
    degree: 'Bachelor of Technology in Information Technology',
    institution: 'University of Mumbai',
    location: 'Mumbai, India',
    period: 'Aug 2018 - May 2022',
    gpa: 'GPA: 3.80/4.0 (9.7/10.0)',
    coursework: [
      'Algorithms',
      'Database Systems',
      'Software Engineering',
      'Operating Systems',
      'Data Structures',
      'Computer Networks'
    ]
  }
];

export const SKILL_CATEGORIES_DATA: SkillCategoryItem[] = [
  {
    id: 'ml-ai',
    title: 'ML & AI',
    icon: 'smart_toy',
    skills: ['Scikit-Learn', 'TensorFlow', 'LLMs', 'RAG', 'LangChain', 'Hugging Face', 'ChromaDB', 'NLP', 'Time Series', 'Feature Engineering']
  },
  {
    id: 'data-eng',
    title: 'Data Engineering & Big Data',
    icon: 'schema',
    skills: ['ETL Pipelines', 'Apache Spark', 'Apache Airflow', 'Apache NiFi', 'Apache Hive', 'Cloudera Data Platform', 'Google Pub/Sub']
  },
  {
    id: 'cloud-devops',
    title: 'Cloud, MLOps & DevOps',
    icon: 'cloud',
    skills: ['Google Cloud Platform (GCP)', 'AWS', 'Docker', 'Git', 'Linux', 'RESTful APIs', 'CI/CD', 'Firebase']
  },
  {
    id: 'lang-db',
    title: 'Languages & Databases',
    icon: 'code',
    colSpan: 'lg:col-span-2',
    skills: [],
    languages: ['Python', 'SQL', 'Rust', 'Java', 'JavaScript', 'Android (Java)'],
    databases: ['PostgreSQL', 'MySQL', 'GCP BigQuery', 'Apache Hive', 'Firebase / Firestore', 'ChromaDB']
  },
  {
    id: 'analytics-vis',
    title: 'Analytics & BI',
    icon: 'bar_chart',
    skills: ['Tableau', 'Power BI', 'Looker', 'Statistical Analysis', 'Hypothesis Testing', 'Excel (Dashboards)']
  }
];
