// Single source of truth for all portfolio content.

export const profile = {
  name: 'Neel Sahani',
  role: 'AI Automation Engineer',
  tagline: 'Welcome to my universe',
  intro:
    'Building intelligent systems, AI products and automation workflows that create real impact.',
  location: 'Bhayandar (East), Thane – 401105',
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
    "I'm Neel Sahani, an AI Automation Engineer focused on building intelligent products, workflow automation systems, and scalable backend solutions.",
    'My work combines Python, AI, automation, and modern web technologies to transform manual processes into efficient digital systems.',
    'From AI-powered news intelligence platforms like NewsSphere to automation workflows and intelligent applications, I enjoy turning ideas into products that create measurable impact.',
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
export const certifications = [
  { title: 'Software Engineering Job Simulation', issuer: 'Wells Fargo · Forage', file: '/certificates/WellsFargoCertificate.jpg' },
  { title: 'GenAI Powered Data Analytics', issuer: 'Tata · Forage', file: '/certificates/TataGenAICertificate.jpg' },
  { title: 'Data Visualization', issuer: 'Tata · Forage', file: '/certificates/TataDataVisualisationCertificate.jpg' },
  { title: 'Data Analytics Job Simulation', issuer: 'Deloitte · Forage', file: '/certificates/DeloitteCertificate.jpg' },
  { title: 'Learning Microsoft Power BI', issuer: 'Infosys Springboard', file: '/certificates/PowerBI.jpg' },
  { title: 'Power BI Skill Course', issuer: 'Skill Course', file: '/certificates/PowerBISkillCourse.jpg' },
  { title: 'Microsoft Excel 2016', issuer: 'Infosys Springboard', file: '/certificates/ExcelCertificate.jpg' },
  { title: 'UX & UI — Color Theory', issuer: 'Infosys Springboard', file: '/certificates/UiUxColorTheory.jpg' },
  { title: 'Introduction to UI / UX', issuer: 'Infosys Springboard', file: '/certificates/IntroductionToUI_UX.jpg' },
  { title: 'Generative AI', issuer: 'OutSkill', file: '/certificates/OutSkillGenAI.jpg' },
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
    role: 'Python Developer & AI Automation Engineer',
    company: 'MCM BPO Pvt. Ltd. — Mumbai Metropolitan Region',
    period: 'June 2025 – Present',
    points: [
      '🚀 Automated critical business workflows resulting in 30% improvement in operational efficiency',
      '⚡ Designed and deployed AI-powered solutions for content generation, analysis, and workflow optimization',
      '🔄 Built scalable automation pipelines and browser automation systems using Python, n8n, and Selenium',
      '🌐 Developed backend services, APIs, and data-processing systems supporting high-volume operations',
      '📊 Engineered data pipelines processing 100K+ records daily while improving application performance and reliability',
    ],
  },
]

const CODE_URL = 'https://github.com/neilsahani55'

export const projectsIntro = {
  eyebrow: 'Featured Projects',
  titleLine1: 'Project That',
  titleLine2: 'Make An',
  titleAccent: 'Impact',
  lead: "A collection of AI-powered products, automation systems, and full-stack applications I've built to solve real-world problems.",
}

export const projects = [
  {
    title: 'NewsSphere',
    desc: 'AI-powered multilingual news intelligence platform aggregating 37+ sources across 12+ categories.',
    tags: ['Python', 'Flask', 'Gemini API'],
    icon: 'newspaper',
    tone: 'violet',
    color: '#e9382cff',
    badge: 'Featured',
    image: '/projects/newssphere.png',
    demo: 'https://newssphere.tech/',
    code: CODE_URL,
  },
  {
    title: 'PromptStudio',
    desc: 'AI content + prompt generator that helps creators, marketers and developers.',
    tags: ['Python', 'Flask', 'Gemini API'],
    icon: 'sparkles',
    tone: 'amber',
    badge: 'Featured',
    demo: '#',
    code: CODE_URL,
  },
  {
    title: 'AutoBlog Intelligence',
    desc: 'AI content automation pipeline that researches, writes and publishes blog posts.',
    tags: ['Python', 'n8n', 'OpenAI'],
    icon: 'bot',
    tone: 'slate',
    badge: 'Featured',
    demo: '#',
    code: CODE_URL,
  },
  {
    title: 'FlowGen',
    desc: 'AI workflow automation platform built with n8n and OpenAI.',
    tags: ['Python', 'n8n', 'OpenAI'],
    icon: 'workflow',
    tone: 'mint',
    demo: '#',
    code: CODE_URL,
  },
  {
    title: 'AutoSocial Flow',
    desc: 'End-to-end social media automation for content scheduling, trending & multi-platform posting.',
    tags: ['Python', 'n8n', 'Selenium', 'APIs'],
    icon: 'send',
    tone: 'sky',
    demo: '#',
    code: CODE_URL,
  },
  {
    title: 'SalesHub',
    desc: 'AI-driven due diligence engine for automated financial risk assessment and entity verification.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'LLM'],
    icon: 'shield',
    tone: 'rose',
    demo: '#',
    code: CODE_URL,
  },
  {
    title: 'Smart Stick for Blind',
    desc: 'Sensor-based smart stick for the visually impaired with obstacle detection and audio feedback.',
    tags: ['Python', 'Arduino', 'Ultrasonic', 'Buzzer'],
    icon: 'walk',
    tone: 'dark',
    badge: 'IoT',
    demo: '#',
    code: CODE_URL,
  },
  {
    title: 'Movie App',
    desc: 'Android application for movie discovery using the TMDB API with search, trending & details.',
    tags: ['Java', 'Android', 'TMDB API', 'XML'],
    icon: 'film',
    tone: 'indigo',
    demo: '#',
    code: CODE_URL,
  },
]
