// Single source of truth for all portfolio content.

export const profile = {
  name: 'Neel Sahani',
  role: 'AI Automation Engineer',
  tagline: 'Welcome to my universe',
  intro:
    'Building intelligent systems, AI products and automation workflows that create real impact.',
  location: 'MiraRoad (East), Thane – 401107',
  phone: '+91 83569 98852',
  email: 'neilsahani55@gmail.com',
  links: {
    github: 'https://github.com/neilsahani55',
    linkedin: 'https://www.linkedin.com/in/neel-sahani/',
    instagram: 'https://www.instagram.com/neilsahani55',
    email: 'mailto:neilsahani55@gmail.com',
  },
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Tech Arsenal' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { value: '15+', title: 'Projects Delivered', note: 'End-to-end solutions', tone: 'orange', icon: 'code' },
  { value: '5+', title: 'AI Products Built', note: 'Shipped & live', tone: 'purple', icon: 'box' },
  { value: '10+', title: 'Automation Workflows', note: 'Optimizing business processes', tone: 'lime', icon: 'rocket' },
  { value: '30%+', title: 'Efficiency Improvement', note: 'Average impact across projects', tone: 'blue', icon: 'trend' },
]

export const about = {
  eyebrow: 'Who I Am',
  heading: 'I Build Intelligent Systems That Solve Real Problems.',
  paragraphs: [
    "I'm Neel Sahani, a Full-Stack, AI & Automation Engineer who turns slow, manual processes into intelligent products — from AI-powered platforms to end-to-end workflow automation.",
    'I work across the entire stack: Python and Flask/FastAPI on the backend, React on the frontend, and n8n with LLM APIs in between — taking ideas from rough concept to deployed, working products.',
    "Whether it's NewsSphere aggregating 37+ news sources with AI summaries or pipelines processing 100K+ records a day, what drives me is shipping work that makes a measurable difference.",
  ],
  focus: [
    'Python',
    'AI / LLMs',
    'Automation',
    'n8n',
    'Backend',
    'Web Apps',
    'REST APIs',
    'Agentic Workflows',
  ],
  education: [
    {
      degree: 'BSc — IT',
      place: 'Chetana’s H. S. College',
      period: '2022 – 2025',
      score: 'CGPI 9.42',
    },
    {
      degree: 'HSC',
      place: 'Thakur Vidya Mandir',
      period: '2021 – 2022',
      score: '66.17%',
    },
    {
      degree: 'SSC',
      place: 'Holy Angels English High School',
      period: '2019 – 2020',
      score: '80.40%',
    },
  ],
  competencies: [
    'AI Automation & Workflow Engineering',
    'Backend Development & API Design',
    'LLM Applications & Prompt Engineering',
    'Browser Automation & Data Pipelines',
    'Database Design & Query Optimization',
    'Data Analytics & Visualization',
    'Process Optimization & Business Automation',
    'AI Product Development',
  ],
}

// Merged "Virtual Job Simulations" + "Certifications" — shown in a carousel.
// Ordered by market value: AWS first, then job simulations, then platform courses.
// Microsoft Learn badge/trophy certificates live on the badge shelf instead (see `badges`).
export const certifications = [
  // AWS Skill Builder
  { title: 'AWS Cloud Practitioner Essentials', issuer: 'AWS Skill Builder', file: '/certificates/AWSCloudPractitionerEssentials.jpg' },
  { title: 'Compute Knowledge Badge Assessment', issuer: 'AWS Skill Builder', file: '/certificates/ComputeKnowledgeBadgeAssessment.jpg' },
  { title: 'Compute Knowledge Badge Readiness Path', issuer: 'AWS Skill Builder', file: '/certificates/ComputeKnowledgeBadgeReadinessPath.jpg' },
  { title: 'Foundations of Prompt Engineering', issuer: 'AWS Skill Builder', file: '/certificates/FoundationsOfPromptEngineering.jpg' },
  { title: 'Amazon EC2 Basics', issuer: 'AWS Skill Builder', file: '/certificates/AmazonEC2Basics.jpg' },
  { title: 'Build with Amazon EC2', issuer: 'AWS Skill Builder', file: '/certificates/BuildWithAmazonEC2.jpg' },
  { title: 'Innovations in Amazon EC2', issuer: 'AWS Skill Builder', file: '/certificates/InnovationsInAmazonEC2.jpg' },
  { title: 'Amazon EC2 Observability, Monitoring, and Troubleshooting', issuer: 'AWS Skill Builder', file: '/certificates/AmazonEC2ObservabilityMonitoringAndTroubleshooting.jpg' },
  { title: 'Right Size Your Amazon EC2 Workload', issuer: 'AWS Skill Builder', file: '/certificates/RightSizeYourAmazonEC2Workload.jpg' },
  { title: 'Introduction to Capacity Manager for Amazon EC2', issuer: 'AWS Skill Builder', file: '/certificates/IntroductionToCapacityManagerForAmazonEC2.jpg' },
  { title: 'AWS Compute Services Overview', issuer: 'AWS Skill Builder', file: '/certificates/AWSComputeServicesOverview.jpg' },
  { title: 'AWS Lambda Foundations', issuer: 'AWS Skill Builder', file: '/certificates/AWSLambdaFoundations.jpg' },
  { title: 'AWS Graviton Processors Fundamentals', issuer: 'AWS Skill Builder', file: '/certificates/AWSGravitonProcessorsFundamentals.jpg' },
  { title: 'AWS Nitro System Deep Dive', issuer: 'AWS Skill Builder', file: '/certificates/AWSNitroSystemDeepDive.jpg' },
  { title: 'AWS AI Chips: Trainium and Inferentia Fundamentals', issuer: 'AWS Skill Builder', file: '/certificates/AWSAIChipsTrainiumAndInferentiaFundamentals.jpg' },
  { title: 'Confidential Computing with AWS Compute', issuer: 'AWS Skill Builder', file: '/certificates/ConfidentialComputingWithAWSCompute.jpg' },
  { title: 'Compute Cost Optimization Services', issuer: 'AWS Skill Builder', file: '/certificates/ComputeCostOptimizationServices.jpg' },
  { title: 'AWS Billing and Cost', issuer: 'AWS Skill Builder', file: '/certificates/AWSBillingAndCost.jpg' },
  { title: 'AWS Foundations: Getting Started with the AWS Cloud Essentials', issuer: 'AWS Skill Builder', file: '/certificates/AWSFoundationsGettingStartedWithTheAWSCloudEssentials.jpg' },
  { title: 'Getting Started with Cloud Acquisition', issuer: 'AWS Skill Builder', file: '/certificates/GettingStartedWithCloudAcquisition.jpg' },
  { title: 'Job Roles in the Cloud', issuer: 'AWS Skill Builder', file: '/certificates/JobRolesInTheCloud.jpg' },
  // Virtual job simulations (Forage)
  { title: 'Software Engineering Job Simulation', issuer: 'Wells Fargo · Forage', file: '/certificates/WellsFargoCertificate.jpg' },
  { title: 'Data Analytics Job Simulation', issuer: 'Deloitte · Forage', file: '/certificates/DeloitteCertificate.jpg' },
  { title: 'GenAI Powered Data Analytics', issuer: 'Tata · Forage', file: '/certificates/TataGenAICertificate.jpg' },
  { title: 'Data Visualization', issuer: 'Tata · Forage', file: '/certificates/TataDataVisualisationCertificate.jpg' },
  // Platform courses
  { title: 'Generative AI', issuer: 'OutSkill', file: '/certificates/OutSkillGenAI.jpg' },
  { title: 'Learning Microsoft Power BI', issuer: 'Infosys Springboard', file: '/certificates/PowerBI.jpg' },
  { title: 'Power BI Skill Course', issuer: 'Skill Course', file: '/certificates/PowerBISkillCourse.jpg' },
  { title: 'Microsoft Excel 2016', issuer: 'Infosys Springboard', file: '/certificates/ExcelCertificate.jpg' },
  { title: 'UX & UI — Color Theory', issuer: 'Infosys Springboard', file: '/certificates/UiUxColorTheory.jpg' },
  { title: 'Introduction to UI / UX', issuer: 'Infosys Springboard', file: '/certificates/IntroductionToUI_UX.jpg' },
]

// Earned badges & trophies — shown on the badge shelf below certifications.
// type: 'badge' (module) | 'trophy' (learning path). Clicking opens `file`:
// the full badge image for AWS, the matching certificate for Microsoft Learn.
export const badges = [
  {
    title: 'AWS Knowledge: Compute',
    type: 'badge',
    issuer: 'AWS Training & Certification',
    date: 'Jul 2026',
    image: '/badges/AWSComputeKnowledgeBadge.png',
    file: '/badges/AWSComputeKnowledgeBadge.png',
  },
  {
    title: 'Introduction to Microsoft 365 Copilot',
    type: 'badge',
    issuer: 'Microsoft Learn',
    date: 'Jun 2026',
    image: '/badges/IntroductionToMicrosoft365Copilot.png',
    file: '/certificates/IntroductionToMicrosoft365Copilot.jpg',
  },
  {
    title: 'Create and draft with Microsoft 365 Copilot',
    type: 'badge',
    issuer: 'Microsoft Learn',
    date: 'Jun 2026',
    image: '/badges/CreateAndDraftWithMicrosoft365Copilot.png',
    file: '/certificates/CreateAndDraftWithMicrosoft365Copilot.jpg',
  },
  {
    title: 'Explore the possibilities with Microsoft 365 Copilot',
    type: 'badge',
    issuer: 'Microsoft Learn',
    date: 'Jun 2026',
    image: '/badges/ExploreThePossibilitiesWithMicrosoft365Copilot.png',
    file: '/certificates/ExploreThePossibilitiesWithMicrosoft365Copilot.jpg',
  },
  {
    title: 'Optimize and extend Microsoft 365 Copilot',
    type: 'badge',
    issuer: 'Microsoft Learn',
    date: 'Jun 2026',
    image: '/badges/OptimizeAndExtendMicrosoft365Copilot.png',
    file: '/certificates/OptimizeAndExtendMicrosoft365Copilot.jpg',
  },
  {
    title: 'Get started with Microsoft 365 Copilot',
    type: 'trophy',
    issuer: 'Microsoft Learn',
    date: 'Jun 2026',
    image: '/badges/GetStartedWithMicrosoft365Copilot.png',
    file: '/certificates/GetStartedWithMicrosoft365Copilot.jpg',
  },
  {
    title: 'Introduction to AI Skills for nonprofits',
    type: 'trophy',
    issuer: 'Microsoft Learn',
    date: 'Jun 2026',
    image: '/badges/IntroductionToAISkillsForNonprofits.png',
    file: '/certificates/IntroductionToAISkillsForNonprofits.jpg',
  },
]

export const skillsIntro = {
  eyebrow: 'Tech Arsenal',
  titleLine1: 'Technologies',
  titleLine2: 'I Work',
  titleAccent: 'With',
  lead: 'The tools and technologies behind the AI products, automation systems and workflows I build.',
}

// Three auto-scrolling rows of tech logos (brand icons via simpleicons CDN).
export const techRows = [
  {
    dir: 'left',
    items: [
      { name: 'Python', slug: 'python' },
      { name: 'FastAPI', slug: 'fastapi' },
      { name: 'Django', slug: 'django' },
      { name: 'React', slug: 'react' },
      { name: 'OpenAI', src: '/tech/openai.svg' },
      { name: 'Gemini', slug: 'googlegemini' },
      { name: 'LangChain', slug: 'langchain' },
      { name: 'n8n', slug: 'n8n' },
      { name: 'Docker', slug: 'docker' },
      { name: 'AWS', src: '/tech/aws.svg' },
      { name: 'GCP', slug: 'googlecloud' },
    ],
  },
  {
    dir: 'right',
    items: [
      { name: 'Redis', slug: 'redis' },
      { name: 'MongoDB', slug: 'mongodb' },
      { name: 'PostgreSQL', slug: 'postgresql' },
      { name: 'MySQL', slug: 'mysql' },
      { name: 'Selenium', slug: 'selenium' },
      { name: 'Git', slug: 'git' },
      { name: 'Linux', slug: 'linux' },
      { name: 'Nginx', slug: 'nginx' },
    ],
  },
  {
    dir: 'left',
    items: [
      { name: 'Power BI', src: '/tech/powerbi.svg' },
      { name: 'Tableau', src: '/tech/tableau.svg' },
      { name: 'Pandas', slug: 'pandas' },
      { name: 'NumPy', slug: 'numpy' },
      { name: 'Scikit-learn', slug: 'scikitlearn' },
      { name: 'TensorFlow', slug: 'tensorflow' },
      { name: 'Matplotlib', src: '/tech/matplotlib.svg' },
      { name: 'Seaborn', src: '/tech/seaborn.svg' },
    ],
  },
]

export const whatIBuild = [
  { label: 'AI Automation Systems', icon: 'bot' },
  { label: 'Backend APIs', icon: 'code' },
  { label: 'LLM Applications', icon: 'brain' },
  { label: 'Data Pipelines', icon: 'database' },
  { label: 'AI Products', icon: 'boxes' },
  { label: 'Analytics Dashboards', icon: 'chart' },
]

export const currentlyExploring = [
  { label: 'Agentic AI', icon: 'sparkles' },
  { label: 'MCP', icon: 'cpu' },
  { label: 'Multi-Agent Systems', icon: 'network' },
]

export const experience = [
  {
    role: 'Full-Stack, AI & Automation Engineer',
    company: 'MCM BPO Pvt. Ltd. — Mumbai Metropolitan Region',
    period: 'July 2025 – Present',
    points: [
      '🚀 Automated critical business workflows with Python, n8n, and Selenium — lifting operational efficiency by 30%',
      '⚡ Designed and deployed AI-powered solutions for content generation, analysis, and workflow optimization',
      '💻 Built responsive React frontends and internal dashboards, shipping end-to-end features from UI to API',
      '🌐 Developed backend services and REST APIs that keep high-volume, business-critical operations running',
      '📊 Engineered data pipelines processing 100K+ records daily while improving performance and reliability',
    ],
  },
]

export const projectsIntro = {
  eyebrow: 'Featured Projects',
  titleLine1: 'Project That',
  titleLine2: 'Make An',
  titleAccent: 'Impact',
  lead: "A collection of AI-powered products, automation systems, and full-stack applications I've built to solve real-world problems.",
}

// Live/code links are omitted per project when they don't exist — the card
// simply hides the buttons (see Projects.jsx).
export const projects = [
  {
    title: 'NewsSphere',
    desc: 'AI-powered multilingual news intelligence platform aggregating 37+ sources across 12+ categories, with LLM smart summaries, personalization, sports, markets and 18-language translation.',
    tags: ['React', 'Supabase', 'Node.js', 'GitHub Actions', 'NVIDIA NIM'],
    icon: 'newspaper',
    tone: 'violet',
    color: '#e9382cff',
    badge: 'Featured',
    image: '/projects/newssphere.jpg',
    demo: 'https://newssphere.tech/',
    code: 'https://github.com/neilsahani55/NewsSphere',
  },
  {
    title: 'PromptStudio',
    desc: 'AI prompt-generation studio and multi-model media suite — turn posts or screenshots into Midjourney/DALL-E/SD/Flux prompts and generate images/videos across 4+ models at once.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Google Genkit', 'TailwindCSS'],
    icon: 'sparkles',
    tone: 'amber',
    color: '#ea580c',
    badge: 'Featured',
    image: '/projects/promptstudio.jpg',
    demo: 'https://promptstudios.vercel.app',
    code: 'https://github.com/neilsahani55/PromptStudio',
  },
  {
    title: 'World of PDF',
    desc: 'All-in-one PDF toolkit with 48+ free tools to merge, split, compress, convert, OCR and secure PDFs — 100% client-side processing, no sign-up required.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'pdf-lib', 'Tesseract.js'],
    icon: 'filetext',
    tone: 'indigo',
    color: '#6d5ce8',
    badge: 'New',
    image: '/projects/worldofpdf.jpg',
    demo: 'https://world-of-pdf.vercel.app/',
    code: 'https://github.com/neilsahani55/world-of-pdf',
  },
  {
    title: 'FlowGen',
    desc: 'Django 5 AI content platform with full user auth, dashboard and n8n + OpenAI webhook pipelines — generates ready-to-publish blogs, landing pages, analyses and reports with Jazzmin admin and Excel export.',
    tags: ['Python', 'Django', 'n8n', 'OpenAI', 'Jazzmin'],
    icon: 'workflow',
    tone: 'slate',
    color: '#1e40af',
    badge: 'AI',
    image: '/projects/flowgen.jpg',
    code: 'https://github.com/neilsahani55/Flowgen',
  },
  {
    title: 'AutoSocial Flow',
    desc: 'End-to-end social media automation covering content scheduling, trend discovery and multi-platform posting.',
    tags: ['Python', 'n8n', 'Selenium', 'APIs'],
    icon: 'send',
    tone: 'sky',
    color: '#38bdf8',
    badge: 'Automation',
    image: '/projects/autosocialflow.jpg',
  },
  {
    title: 'Jadoo',
    desc: 'Interactive replica of the iconic computer interface from Koi Mil Gaya — follow the sequence, send the signal and call Jadoo. A nostalgic web experiment.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: 'dish',
    tone: 'mint',
    color: '#16a34a',
    badge: 'Fun',
    image: '/projects/jadoo.jpg',
    demo: 'https://jadoooo.vercel.app/',
    code: 'https://github.com/neilsahani55/jadoo',
  },
  {
    title: 'SalesHub',
    desc: 'AI-driven due diligence engine for automated financial risk assessment and entity verification.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'LLM'],
    icon: 'shield',
    tone: 'rose',
    color: '#e11d48',
    badge: 'FinTech',
    image: '/projects/saleshub.jpg',
  },
  {
    title: 'Smart Stick for Blind',
    desc: 'Sensor-based smart stick for the visually impaired with obstacle detection and real-time audio feedback.',
    tags: ['C++', 'Arduino', 'Ultrasonic', 'Buzzer'],
    icon: 'walk',
    tone: 'dark',
    color: '#06b6d4',
    badge: 'IoT',
    image: '/projects/smartstick.jpg',
  },
  {
    title: 'Movie App',
    desc: 'Android app for movie discovery using the TMDB API with search, trending lists and detailed movie views.',
    tags: ['Java', 'Android', 'TMDB API', 'XML'],
    icon: 'film',
    tone: 'indigo',
    color: '#8b5cf6',
    badge: 'Android',
    image: '/projects/movieapp.jpg',
  },
  {
    title: 'And Many More…',
    desc: 'Beyond these highlights I keep building — personal tools, professional work projects and just-for-fun experiments. Explore them all on my GitHub.',
    tags: ['Personal', 'Professional', 'Fun'],
    icon: 'more',
    tone: 'dark',
    color: '#ff4d1c',
    badge: 'Explore',
    code: 'https://github.com/neilsahani55',
  },
]
