// Site-wide content: profile, experience, skills, education.
// Edit this file to change anything outside the project pages.
// Sources: LinkedIn profile (experience, dates, education, certifications)
// and Project_Points.md (skills must be used in at least one project, except Power BI).

export const profile = {
  name: 'Melvin Mathew',
  roles: 'Data Scientist and AI/ML Engineer',
  // Small line under the name in the site header.
  tagline: 'Data Science · ML Engineering · GenAI',
  location: 'Bengaluru, India',
  email: 'melvinmathew9991@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mathew-melvin',
  github: 'https://github.com/melvinmathew9991',
  resume: '/resume.pdf',
  // Update this date whenever public/resume.pdf is replaced.
  resumeUpdated: '2026-11-07',
  // GoatCounter account for visitor stats (dashboard: https://<name>.goatcounter.com).
  // Empty = no stats script. Only loaded in the production build, and GoatCounter itself
  // ignores localhost, so local previews are never counted.
  goatcounter: 'melvinmathew',
  description:
    'Data Scientist and AI/ML Engineer in Bengaluru. Fraud detection, forecasting, credit risk and RAG systems, each audited until the numbers held up. Available now for full-time and freelance work.',
};

// Headline numbers in the About section. Each must be backed by the site itself:
// - deployed: AML fraud API and bike-taxi forecaster, both on Google Cloud Run (their case studies).
// - prepCut: "reducing data preparation time by about 30%", upGrad role (LinkedIn wording, also on the resume).
// - tests: sum of the "tests" metrics across project files, 2,119 on 2026-11-07; shown rounded down.
// The project count is not listed here: the home page counts the project files at build time.
export const aboutStats = [
  { value: '2', label: 'ML services deployed on Google Cloud Run' },
  { value: '~30%', label: 'data-prep time cut in an end-to-end ML pipeline' },
  { value: '2,000+', label: 'automated tests across my projects' },
];

// "What I'm looking for" card above the contact form. Keep in line with the About section
// (roles and cities) and profile.description ("Available now").
export const lookingFor = [
  { label: 'Roles', value: 'Data Scientist, ML Engineer, AI Engineer' },
  { label: 'Location', value: 'Bengaluru, Hyderabad, Chennai or anywhere else' },
  { label: 'Work type', value: 'Full-time roles and freelance projects' },
  { label: 'Availability', value: 'Available now' },
];

// The "correction ledger" on the home page: figures that looked good, and what they were after checking.
// Every number here is from Project_Points.md.
export const corrections = [
  {
    project: 'Credit default model',
    measure: 'Gini',
    before: '0.927',
    after: '0.2914',
    note: '85% of the reported Gini came from data not available at application time.',
    href: '/projects/credit-default-model-audit/',
  },
  {
    project: 'ICU mortality model (MIMIC-III)',
    measure: 'ROC-AUC',
    before: '0.770',
    after: '0.606',
    note: 'Whole-stay features and repeat patients across the split were inflating my own first result.',
    href: 'https://github.com/melvinmathew9991/emr-sql-pipeline',
  },
  {
    project: 'Bike-taxi demand forecast',
    measure: 'MASE vs naive',
    before: '0.999',
    after: '0.804',
    note: 'The inherited model tied a seasonal-naive baseline. The rebuild beats it on all 50 clusters.',
    href: '/projects/bike-taxi-demand-forecast/',
  },
  {
    project: 'MEDBOT medical RAG',
    measure: 'False refusals',
    before: '18 / 46',
    after: '0 / 46',
    note: 'Fixed without loosening the guard: all 120 unanswerable questions are still refused.',
    href: '/projects/medbot-medical-rag/',
  },
];

// Experience follows LinkedIn wording. Freelance entry wording and dates confirmed by Melvin.
export const experience = [
  {
    role: 'Independent Data Scientist (Freelance)',
    org: 'Self-employed',
    dates: 'Jan 2026 – Present',
    // Counts toward the "years of experience" figure in the About section (Melvin's choice, 2026-11-07).
    note: 'Freelance data science and AI work for clients, alongside public portfolio projects (code on GitHub). Portfolio projects from this period:',
    // Tool row: only tools in the stack lists of the three projects below.
    tools: ['Python', 'XGBoost', 'LightGBM', 'FastAPI', 'Docker', 'Google Cloud Run', 'GitHub Actions', 'Streamlit'],
    // Every figure below is from the matching project page in src/content/projects/.
    points: [
      'Rebuilt an inherited bike-taxi demand forecaster on 8.38M real Bengaluru bookings using XGBoost with 1-day and 7-day lags. It went from tying a seasonal-naive baseline and failing its deploy gate (MASE 0.999) to beating that baseline on all 50 clusters (MASE 0.804).',
      'Ran rolling-origin backtests under 5.2× demand growth and found that a frozen model can lose to naive from week 6 in the worst case, so the model ships with retraining every 4 weeks. Deployed it as a gated FastAPI service on Cloud Run with a model registry, rollback and 352 tests.',
      'Deployed an AML fraud pipeline on 6.36M simulated (PaySim) transactions to Cloud Run, using keyless GitHub Actions CI/CD. It catches 95.1% of fraud with zero false positives at 250 reviews a day, with PSI drift monitoring and 234 tests.',
      // "82-feature" and "no-lookahead leakage tests": wording confirmed by Melvin from the Nectar repo.
      'Built an 82-feature predictive-maintenance pipeline with no-lookahead leakage tests for the Nectar building-assets platform, plus day-ahead energy forecasting and anomaly detection, on synthetic data as the take-home brief required. The energy forecaster reaches 9.27% MAPE against 161% for a Holt-Winters baseline, backed by 55 tests.',
    ],
  },
  {
    role: 'Data Scientist',
    org: 'upGrad School of Technology',
    dates: 'Sep 2025 – Dec 2025',
    note: "Promoted from Aimerz.ai after upGrad's acquisition; same team, expanded production-facing role.",
    // Tool row: only tools named in the LinkedIn bullets for this role.
    tools: ['Python', 'SQL', 'pandas', 'scikit-learn', 'LangChain', 'FAISS', 'ChromaDB', 'OpenAI', 'Ollama'],
    points: [
      'Engineered end-to-end ML pipelines (Python, SQL, Pandas, scikit-learn) covering ingestion, preprocessing, feature engineering and deployment, reducing data preparation time by about 30%.',
      'Built and deployed RAG-based LLM applications (LangChain, FAISS, ChromaDB, OpenAI, Ollama) on PubMed and Wikipedia knowledge bases, supporting 3+ stakeholder-facing proof-of-concept use cases.',
      'Designed NLP workflows (semantic search, text classification, embedding-based retrieval) for production-facing proof-of-concept systems.',
      'Applied anomaly detection, classification and risk-scoring models to structured data, surfacing actionable insights through EDA and statistical analysis.',
      'Delivered model documentation, dashboards and stakeholder reporting on schedule using Agile/Scrum, across technical and business teams.',
    ],
  },
  {
    role: 'Data Science Content Strategist Associate',
    org: 'Aimerz.ai',
    dates: 'Aug 2024 – Aug 2025',
    tools: ['Python', 'SQL', 'LangChain', 'Vector databases'],
    points: [
      'Designed and built 20+ Python machine learning projects covering regression, classification, NLP and RAG pipelines.',
      'Developed data preprocessing pipelines and EDA frameworks, applying feature engineering, statistical modelling and anomaly detection to real-world datasets.',
      'Built and documented RAG systems, semantic search workflows and LLM integrations with LangChain and vector databases as reference implementations.',
      'Ran model evaluation, bias analysis and data validation across 10+ ML projects, with documentation and reports used by 500+ learners.',
      'Standardised SQL and Python coding practices across curriculum deliverables.',
    ],
  },
];

// "2 years" in the About section, worked out from the roles above at build time so it never goes
// stale. Roles marked countsTowardYears: false are skipped; overlapping months count once;
// "Present" means the build date. Rounded DOWN to whole years, so it never overstates.
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function monthIndex(text: string, now: Date) {
  const s = text.trim();
  if (s === 'Present') return now.getFullYear() * 12 + now.getMonth();
  const [mon, year] = s.split(' ');
  const m = MONTHS.indexOf(mon);
  if (m < 0 || !Number(year)) throw new Error(`Unrecognised experience date "${s}" (expected e.g. "Sep 2025")`);
  return Number(year) * 12 + m;
}

export function experienceLabel(now = new Date()) {
  const months = new Set<number>();
  for (const job of experience) {
    if ('countsTowardYears' in job && job.countsTowardYears === false) continue;
    const [from, to] = job.dates.split('–');
    for (let i = monthIndex(from, now); i <= monthIndex(to, now); i++) months.add(i);
  }
  const years = Math.floor(months.size / 12);
  return `${years} year${years === 1 ? '' : 's'}`;
}

// Grouped skills. Rules: no Kafka, microservices, ELK or AWS; ChromaDB is not a skill;
// Power BI appears only here.
export const skills = [
  {
    group: 'Machine learning and statistics',
    items: ['scikit-learn', 'XGBoost', 'LightGBM', 'Time-series forecasting', 'A/B testing', 'Bayesian modelling (PyMC)', 'Survival analysis', 'statsmodels'],
  },
  {
    group: 'Model evaluation and auditing',
    items: ['Leakage detection', 'Cross-validation', 'Calibration', 'SHAP', 'Golden-set evaluation', 'RAGAS', 'PSI drift monitoring'],
  },
  {
    group: 'LLM applications',
    items: ['RAG', 'LangChain', 'Prompt engineering', 'FAISS', 'Qdrant', 'MCP tool-calling agents', 'Ollama', 'OpenAI', 'Google Gemini', 'Langfuse'],
  },
  {
    group: 'Deep learning and NLP',
    items: ['PyTorch', 'TensorFlow/Keras', 'LSTM', 'Hugging Face Transformers', 'Fine-tuning (LoRA, QLoRA)', 'Embeddings'],
  },
  {
    group: 'Deployment and MLOps',
    items: ['FastAPI', 'Docker', 'Google Cloud Run', 'GitHub Actions', 'MLflow', 'Prefect', 'pytest'],
  },
  {
    group: 'Data and analytics',
    items: ['Python', 'SQL', 'pandas', 'NumPy', 'DuckDB', 'PostgreSQL', 'Streamlit', 'Tableau', 'Power BI'],
  },
];

export const education = [
  { title: 'Data Science Bootcamp', org: 'Brototype, Bengaluru', dates: 'Apr 2023 – Jun 2024' },
  { title: 'BSc Mathematics', org: 'Amrita Vishwa Vidyapeetham', dates: 'Apr 2017 – Feb 2020' },
];

// Certifications as listed on the resume, newest first, each with its Coursera verification link (Melvin's choice, 2026-11-06).
export const certifications: { name: string; issuer: string; date: string; url: string }[] = [
  { name: 'Databases and SQL for Data Science with Python', issuer: 'IBM (Coursera)', date: 'Jan 2024', url: 'https://coursera.org/verify/RJN3DQWG2JDE' },
  { name: 'Machine Learning with Python', issuer: 'IBM (Coursera)', date: 'Dec 2023', url: 'https://coursera.org/verify/ETYX27CE2ARN' },
  { name: 'Exploratory Data Analysis for Machine Learning', issuer: 'IBM (Coursera)', date: 'Dec 2023', url: 'https://coursera.org/verify/8SV2A67PGCPF' },
  { name: 'Data Analysis with Python', issuer: 'IBM (Coursera)', date: 'Oct 2023', url: 'https://coursera.org/verify/NSGRGQLUJA79' },
  { name: 'Python Packages for Data Science', issuer: 'University of Colorado Boulder (Coursera)', date: 'Oct 2023', url: 'https://coursera.org/verify/N9GV9H32RMER' },
];
