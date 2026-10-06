export type Language = "en" | "es";

export interface Profile {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
}

export interface Project {
  id: string;
  title: string;
  company: string;
  period: string;
  role: string;
  description: string;
  metrics: string[];
  tools?: string[];
}

export interface Specimen {
  name: string;
  category: string;
  icon: string;
}

export interface Certification {
  name: string;
  date: string;
}

export interface Education {
  school: string;
  location: string;
  degree: string;
  date: string;
  coursework: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Framework {
  name: string;
  focus: string;
  icon: string;
}

export interface Methodology {
  body: string;
  videoUrl: string;
  videoTitle: string;
}

export interface InnovationProject {
  id: string;
  title: string;
  category: string;
  summary: string;
  challenge: string;
  process: { title: string; detail: string }[];
  aiRole: string;
  tools: string[];
  evidence: string;
  status: string;
  image?: string;
  imageAlt?: string;
  screenshots?: { src: string; alt: string }[];
}

export interface SpaceImage {
  credit: string;
}

export interface SectionTitles {
  work: string;
  frameworks: string;
  methodology: string;
  innovation: string;
  contact: string;
}

export interface UiStrings {
  scroll: string;
  focusLabel: string;
  downloadResume: string;
  toolsLabel: string;
  educationLabel: string;
  certificationsLabel: string;
  exploreInnovation: string;
  linkedinLabel: string;
  innovationEyebrow: string;
  aiToolsLabel: string;
  innovationChallenge: string;
  innovationAiRole: string;
  innovationEvidence: string;
  innovationTools: string;
  downloadLogo: string;
}

export interface ContentBundle {
  profile: Profile;
  projects: Project[];
  specimens: Specimen[];
  certifications: Certification[];
  education: Education;
  navLinks: NavLink[];
  frameworks: Framework[];
  methodology: Methodology;
  innovationIntro: string;
  aiTools: string[];
  innovationProjects: InnovationProject[];
  spaceImage: SpaceImage;
  sectionTitles: SectionTitles;
  ui: UiStrings;
}

const en: ContentBundle = {
  profile: {
    name: "HORACIO RUIZ",
    title: "Bilingual GRC & IT Operations | Applied AI Builder",
    summary:
      "B.S. in Management Information Systems. Building practical AI-assisted products and research workflows grounded in privacy, security, and human review, backed by hands-on GRC and IT operations experience.",
    email: "horacio.cr.belair1107@gmail.com",
    phone: "954-556-0429",
    linkedin: "linkedin.com/in/horaciochris-ruiz970711",
    location: "Miami, FL",
  },
  projects: [
    {
      id: "zero-error-phi",
      title: "Zero-Error PHI Compliance",
      company: "Propio Language Solutions",
      period: "April 2024 – Present",
      role: "Data Privacy & HIPAA Compliance Specialist",
      description:
        "Secured high-acuity Cardiology and ER remote communication environments. Identified PHI data leakage risks during 700+ monthly calls. Enforced strict HIPAA data privacy controls and access protocols. Achieved zero privacy violations across 900+ critical cycles with a 91% QA score.",
      metrics: [
        "91% QA Score",
        "Gold Tier Performer",
        "900+ Critical Cycles",
        "Zero Privacy Violations",
      ],
    },
    {
      id: "rbac-architecture",
      title: "RBAC Policy Architecture",
      company: "AnswerNet",
      period: "Nov 2023 – Sept 2024",
      role: "Access Control & Security Operations Lead",
      description:
        "Secured enterprise remote answering service systems. Identified insider threat exposure due to overly permissive editing rights. Engineered and enforced a Role-Based Access Control (RBAC) policy using the principle of least privilege on a private VLAN SharePoint. Reduced Tier 3 incident escalations by 45% within 4 months.",
      metrics: [
        "45% Tier 3 Reduction in 4 Months",
        "Principle of Least Privilege",
        "Insider Threat Mitigation",
      ],
      tools: ["SharePoint", "Private VLAN"],
    },
    {
      id: "algorithmic-auditing",
      title: "Algorithmic Policy Auditing",
      company: "Welocalize (Google Project)",
      period: "Jan 2023 – Oct 2023",
      role: "Data Quality & Policy Compliance Auditor",
      description:
        "Executed rigorous compliance audits using the EWOQ Ad Rating System. Analyzed multi-variable data sets to identify content risks and policy violations, training Google Search algorithms.",
      metrics: [
        "Google Governance Frameworks",
        "Multi-Variable Data Analysis",
        "Search Algorithm Training",
      ],
      tools: ["EWOQ Ad Rating System"],
    },
    {
      id: "workflow-automation",
      title: "Workflow Automation Engine",
      company: "Concentrix",
      period: "May 2021 – Jan 2023",
      role: "IT Incident Response & Workflow Analyst",
      description:
        "Secured high-volume IT support operations. Identified workflow bottlenecks leading to delayed incident response. Developed automated scripting tools and utilized Zendesk CRM to route tickets. Reduced manual processing time by 20% and exceeded SLA performance metrics.",
      metrics: [
        "20% Reduction in Manual Processing",
        "SLA Exceeded",
        "Zendesk CRM Automation",
      ],
      tools: ["Zendesk CRM"],
    },
    {
      id: "grc-framework-simulation",
      title: "Enterprise GRC Framework Simulation",
      company: "Independent Capstone Project",
      period: "2024",
      role: "GRC Analyst (Simulation)",
      description:
        "An independent capstone project conducting a theoretical gap analysis for a simulated small medical clinic. Mapped patient privacy workflows (HIPAA) and payment processing flows to enterprise regulatory requirements, including PCI DSS, CCPA, and GDPR. Utilized the NIST Cybersecurity Framework (CSF) and CIS Controls as the implementation baseline to identify control deficiencies and draft remediation guidance documentation.",
      metrics: [
        "NIST CSF & CIS Controls",
        "PCI DSS, GDPR, CCPA, SOX Mapping",
        "Gap Analysis & Remediation",
      ],
    },
  ],
  specimens: [
    { name: "HIPAA Regulations", category: "Compliance Framework", icon: "ShieldCheck" },
    { name: "NIST CSF Mapping", category: "Cybersecurity Framework", icon: "Network" },
    { name: "ISO 27001 Fundamentals", category: "Security Standard", icon: "FileLock" },
    { name: "RBAC / IAM", category: "Access Control", icon: "Fingerprint" },
    { name: "PCI DSS", category: "Payment Compliance", icon: "CreditCard" },
    { name: "GDPR", category: "Data Privacy", icon: "ShieldCheck" },
    { name: "CCPA", category: "Data Privacy", icon: "ShieldCheck" },
    { name: "SOX", category: "Financial Compliance", icon: "FileLock" },
    { name: "SharePoint Administration", category: "Platform", icon: "FolderTree" },
    { name: "Kali Linux / Wireshark", category: "Security Tools", icon: "Terminal" },
    { name: "Codex / Claude Code / ChatGPT", category: "AI Platforms", icon: "Bot" },
    { name: "Risk Assessments", category: "GRC Practice", icon: "Gauge" },
    { name: "Incident Response", category: "Security Operations", icon: "Siren" },
    { name: "Data Privacy Auditing", category: "Compliance Framework", icon: "ScanSearch" },
  ],
  certifications: [
    { name: "Cisco Networking Foundations", date: "12/2024" },
    { name: "Asana Workflow Specialist", date: "04/2025" },
    { name: "ISC2 Certified in Cybersecurity (CC)", date: "In Progress" },
  ],
  education: {
    school: "Keiser University",
    location: "Fort Lauderdale, FL",
    degree: "B.S. Management Information Systems",
    date: "May 2022",
    coursework: [
      "Database Management",
      "Network Security",
      "Systems Analysis",
      "Software Engineering",
      "Process Optimization",
      "Project Management",
    ],
  },
  navLinks: [
    { label: "Work", href: "#work" },
    { label: "Frameworks", href: "#frameworks" },
    { label: "Methodology", href: "#methodology" },
    { label: "Innovation & AI", href: "#innovation" },
    { label: "Contact", href: "#contact" },
  ],
  frameworks: [
    {
      name: "HIPAA Regulations",
      focus: "Zero-error PHI exchange",
      icon: "ShieldCheck",
    },
    {
      name: "NIST CSF Mapping",
      focus: "Gap analysis & vulnerability identification",
      icon: "Network",
    },
    {
      name: "RBAC Architecture",
      focus: "Principle of least privilege",
      icon: "Fingerprint",
    },
  ],
  methodology: {
    body: "Conducting gap analysis mapping medical privacy workflows (HIPAA) to NIST Cybersecurity Framework controls to identify operational vulnerabilities. Architected and documented comprehensive RBAC policies ensuring alignment with least-privilege principles.",
    videoUrl: "https://www.youtube.com/embed/Vak79kIt1Uc",
    videoTitle: "What is HIPAA? What do I Need to Know for HIPAA Compliance?",
  },
  innovationIntro:
    "I use AI as a practical engineering partner: to research, prototype, automate, and explain real systems. Each case study separates model assistance from deterministic software and shows the evidence and limits behind the work.",
  aiTools: ["OpenAI Codex", "Claude Code", "ChatGPT", "Gemini", "Kimi", "DeepSeek"],
  innovationProjects: [
    {
      id: "lunara-health-ai",
      title: "Lunara: Private Cycle Calendar",
      category: "Health web app · opt-in AI",
      summary: "A private cycle calendar for daily logging and predictions, with an optional health education assistant.",
      challenge: "People need useful cycle insights without making intimate health records a default cloud product.",
      process: [
        { title: "Keep data local", detail: "Built the core tracker on IndexedDB with offline cycle calculations, no account, and no analytics." },
        { title: "Make AI a choice", detail: "Gemini is behind an explicit consent gate. A small allowlist sends cycle context and recent symptom names; names, notes, dates, and full history stay out of the prompt." },
        { title: "Add safety boundaries", detail: "The assistant provides education, not diagnosis, and directs emergency symptoms to real care. Conversations are not persisted." },
      ],
      aiRole: "An opt-in Gemini educator, with consent, minimal context, and a human-care boundary. This is a working product prototype, not a medical device.",
      tools: ["Next.js", "React", "Dexie / IndexedDB", "Gemini", "Capacitor", "Claude Code"],
      evidence: "The web app and static iOS export were built and validated; the mobile layout was checked at 375 × 812. App Store signing and release still require a Mac.",
      status: "Web prototype verified · iOS release preparation",
      screenshots: [
        { src: "/images/projects/lunara-interface.jpg", alt: "Lunara dashboard interface preview using an empty Portfolio Demo profile; no cycle or health entries are present." },
        { src: "/images/projects/lunara-calendar.jpg", alt: "Lunara monthly calendar interface preview using an empty Portfolio Demo profile; no cycle or health entries are present." },
      ],
    },
    {
      id: "mnq-lab",
      title: "MNQ Lab: Trading Research System",
      category: "Quant research · responsible automation",
      summary: "A risk-gated MNQ research stack that audits market data, compares rule-based strategy candidates, and keeps execution in a paper-only stage.",
      challenge: "Trading rules can look convincing when costs, lookahead bias, weak samples, and risk are ignored.",
      process: [
        { title: "Audit the data", detail: "Rebuilt and checked the time-aligned MNQ dataset, applied eligibility rules, and separated in-sample from out-of-sample sessions." },
        { title: "Compare candidates", detail: "Completed 500 strategy candidates and 1,150 charged evaluations, including chronological out-of-sample and walk-forward checks." },
        { title: "Keep risk bounded", detail: "The project has a paper broker, explicit risk gates, and a decision journal. Live routing remains disabled." },
      ],
      aiRole: "Claude Code supported the phased build and teaching workflow. Trade signals come from explicit rules; an LLM does not decide trades or place orders.",
      tools: ["Python", "Streamlit", "Pandas", "NinjaTrader CSV", "Claude Code"],
      evidence: "HP-10's saved run, documented Oct 1, 2026, covered data through Sep 11, 2026: 500 candidates and 1,150 charged evaluations. One hundred candidates passed a positive OOS expectancy and five-trade screen, but 500-way OOS reuse makes that descriptive—not independent validation. No ensemble exceeded 0.5 WFE; profitability is unproven.",
      status: "Research only · no validated edge · live routing disabled",
      image: "/images/projects/mnq-lab-backtest.svg",
      imageAlt: "MNQ Lab HP-10 research infographic dated October 1, 2026, showing the data split, candidate count, validation limit, and paper-only status.",
    },
    {
      id: "chrono-clash",
      title: "Chrono Clash: Unity Game Prototype",
      category: "Agent-assisted game engineering",
      summary: "A 3D bullet-heaven game concept pairing a modern arsenal with medieval armies.",
      challenge: "Turn a game idea into a structured prototype with combat systems, balance data, progression, and a porting plan.",
      process: [
        { title: "Design the systems", detail: "Wrote the prototype spec, balance plans, enemy and weapon data, and a staged roadmap." },
        { title: "Build from the editor", detail: "Used a Unity Editor pipeline and C# gameplay systems to assemble the scene and Windows player." },
        { title: "Validate the real build", detail: "Scene and player build steps passed, but the current Windows build crashes at launch with a corrupted data file. Runtime playtesting remains open." },
      ],
      aiRole: "Claude Code helped implement and debug the Unity project. This screenshot shows the separate browser greybox prototype, not the Unity player build.",
      tools: ["Unity 6", "C#", "Unity Editor scripting", "Claude Code"],
      evidence: "The browser greybox v0.1 runs and shows movement, automatic weapon fire, enemy waves, health, and elapsed time. The Windows Unity build packaged successfully but then crashed at launch because level0 was corrupted; Unity runtime playtesting is unverified.",
      status: "Prototype · launch validation required",
      image: "/images/projects/chrono-clash-prototype.jpg",
      imageAlt: "Active Chrono Clash browser greybox v0.1 screenshot showing the player, enemy units, health bar, and run timer; not the Unity build.",
    },
    {
      id: "workout-vault",
      title: "WorkoutVault: Private Fitness Tracker",
      category: "Fitness web app · privacy-first, AI-assisted build",
      summary: "A training tracker for routines, workout history, progress, rest timing, and data the athlete can export.",
      challenge: "Make workout logging useful without requiring an account or network for the core routine.",
      process: [
        { title: "Model the training loop", detail: "Represent routines, sessions, sets, rest periods, personal records, and estimated one-rep max." },
        { title: "Keep core features on device", detail: "Use SwiftData and SwiftUI with charts, local notifications, and manual CSV/JSON export." },
        { title: "Set a deliberate AI boundary", detail: "The product spec explicitly excludes AI coaching and recommendations. Strength estimates use a transparent Epley formula." },
      ],
      aiRole: "AI assisted product planning and implementation. The one-rep-max estimate remains a transparent Epley calculation; no AI coaching feature is claimed as shipped.",
      tools: ["WorkoutVault", "AI-assisted product design", "Privacy-first data design"],
      evidence: "Project files cover routine design, workout logging, rest timing, personal records, charts, and CSV/JSON export. A public demo link is not attached yet.",
      status: "Fitness product prototype · demo link to add",
    },
    {
      id: "three-router-home-network",
      title: "Three-Router Privacy-Focused Home Network",
      category: "Home network engineering · privacy routing",
      summary: "A three-router home setup that coordinates multiple connection paths, privacy routes, and network zones.",
      challenge: "Keep different internet links and privacy-routing needs organized in one practical home network.",
      process: [
        { title: "Map the paths", detail: "Plan how the three routers divide separate links and privacy-related routes." },
        { title: "Give each router a role", detail: "Configure the devices as cooperating parts of a single home-network system." },
        { title: "Check the traffic flow", detail: "Test connectivity and confirm devices use the intended route for each network need." },
      ],
      aiRole: "AI supports research and troubleshooting; router configuration controls traffic. No language model sits in the network forwarding path.",
      tools: ["Three-router home network", "Privacy routing", "AI-assisted research"],
      evidence: "The owner describes a three-router setup combining different links and privacy routes. Device models, exact topology, and performance measurements are not documented here.",
      status: "Personal infrastructure build · topology details to document",
      image: "/images/projects/home-router-network.svg",
      imageAlt: "Illustrative three-router home-network concept; it does not show the owner's exact device configuration.",
    },
    {
      id: "agentic-web-studio",
      title: "Agentic Website-Building Workflow",
      category: "AI agent design · small business",
      summary: "A reusable workflow that turns business details into research, a site structure, brand direction, and a conversion-focused site.",
      challenge: "Small businesses often have scattered details and limited time to translate them into a credible online presence.",
      process: [
        { title: "Collect a structured brief", detail: "Capture services, audience, location, contact route, tone, and owner-approved assets." },
        { title: "Research and plan", detail: "Organize the sitemap, page copy, calls to action, and mobile priorities." },
        { title: "Build and hand off", detail: "Create a branded site prototype, then explain hosting, ownership, maintenance, and client decisions." },
      ],
      aiRole: "ChatGPT research and site-building tools were used on the Costuras by Sule prototype. The reusable master prompt is an evolving workflow, not a fully autonomous product.",
      tools: ["ChatGPT", "Deep Research", "Sites", "Prompt design"],
      evidence: "A Costuras by Sule website prototype was created. Final domain ownership, commercial maintenance, and client handoff are separate decisions.",
      status: "Website prototype built · reusable workflow in progress",
    },
    {
      id: "grc-llm-workflow",
      title: "LLMs for GRC Gap Analysis",
      category: "Human-reviewed AI workflow",
      summary: "Using language models to speed up first-pass mapping of medical privacy workflows to NIST Cybersecurity Framework controls.",
      challenge: "GRC teams must translate workflows into control language without mistaking fluent model output for evidence or approval.",
      process: [
        { title: "Frame the workflow", detail: "Describe the process and control question, keeping the task narrow and traceable." },
        { title: "Compare model drafts", detail: "Use Claude, Kimi, DeepSeek, ChatGPT, or Codex to surface candidate controls, gaps, and follow-up questions." },
        { title: "Verify and document", detail: "Check suggestions against authoritative framework text and operational evidence; a human owns the final mapping." },
      ],
      aiRole: "Models accelerate drafting and comparison. They do not certify HIPAA compliance or validate controls without evidence.",
      tools: ["Claude", "Kimi", "DeepSeek", "ChatGPT", "OpenAI Codex"],
      evidence: "This is a hands-on analysis workflow, not a deployed GRC automation product. Do not enter PHI or confidential client data into public models.",
      status: "Practiced workflow · human validation required",
    },
    {
      id: "ai-assisted-delivery",
      title: "AI-Agent Software Delivery",
      category: "AI-assisted DevOps",
      summary: "An agent-assisted workflow for planning and shipping a bilingual Next.js portfolio with human review at engineering boundaries.",
      challenge: "Move from a detailed brief to a maintainable change without losing bilingual accuracy, site conventions, or release confidence.",
      process: [
        { title: "Shape the request", detail: "Turn the brief into typed bilingual content and a reusable component contract." },
        { title: "Implement with an agent", detail: "Use Claude Code and Codex for code edits, iteration, and debugging; keep changes reviewable in Git." },
        { title: "Verify before release", detail: "Run the production build and lint, commit the change, and check the deployed page instead of assuming a push went live." },
      ],
      aiRole: "Models accelerate implementation; build, lint, Git review, and public-site checks remain separate. The 80% speed improvement is owner-reported, not a measured benchmark.",
      tools: ["Claude Code", "OpenAI Codex", "ChatGPT", "Next.js", "TypeScript", "GitHub", "Vercel"],
      evidence: "The site passed lint and its production build, and the updated experience was verified on horacio-portfolio.vercel.app.",
      status: "Production deployment verified",
    },
  ],
  spaceImage: {
    credit: "NASA, ESA, CSA, STScI — Pillars of Creation, James Webb Space Telescope",
  },
  sectionTitles: {
    work: "Selected Work",
    frameworks: "Frameworks & Specimens",
    methodology: "Methodology & Approach",
    innovation: "AI & Applied Innovation",
    contact: "Let's Connect.",
  },
  ui: {
    scroll: "Scroll",
    focusLabel: "Focus",
    downloadResume: "Download Resume PDF",
    toolsLabel: "Tools",
    educationLabel: "Education",
    certificationsLabel: "Certifications",
    exploreInnovation: "Follow my AI work on LinkedIn",
    linkedinLabel: "Connect on LinkedIn",
    innovationEyebrow: "Applied AI · Systems · Responsible Practice",
    aiToolsLabel: "AI tools in practice",
    innovationChallenge: "The challenge",
    innovationAiRole: "Where AI fits",
    innovationEvidence: "Evidence & current status",
    innovationTools: "Tools",
    downloadLogo: "Download my logo (SVG)",
  },
};

const es: ContentBundle = {
  profile: {
    name: "HORACIO RUIZ",
    title: "GRC y Operaciones de TI Bilingües | Constructor de Soluciones con IA",
    summary:
      "Licenciatura en Sistemas de Información Gerencial. Desarrollo productos y flujos de investigación asistidos por IA con privacidad, seguridad y revisión humana, respaldados por experiencia práctica en GRC y operaciones de TI.",
    email: "horacio.cr.belair1107@gmail.com",
    phone: "954-556-0429",
    linkedin: "linkedin.com/in/horaciochris-ruiz970711",
    location: "Miami, FL",
  },
  projects: [
    {
      id: "zero-error-phi",
      title: "Cumplimiento de PHI sin Errores",
      company: "Propio Language Solutions",
      period: "Abril 2024 – Presente",
      role: "Especialista en Privacidad de Datos y Cumplimiento de HIPAA",
      description:
        "Aseguré entornos de comunicación remota de alta complejidad en Cardiología y UR. Identifiqué riesgos de fuga de PHI en más de 700 llamadas mensuales. Apliqué estrictos controles de privacidad de datos y protocolos de acceso HIPAA. Logré cero violaciones de privacidad en más de 900 ciclos críticos con un 91% de puntaje QA.",
      metrics: [
        "91% en Control de Calidad",
        "Nivel Oro de Desempeño",
        "900+ Ciclos Críticos",
        "Cero Violaciones de Privacidad",
      ],
    },
    {
      id: "rbac-architecture",
      title: "Arquitectura de Políticas RBAC",
      company: "AnswerNet",
      period: "Nov 2023 – Sept 2024",
      role: "Líder de Control de Acceso y Operaciones de Seguridad",
      description:
        "Aseguré sistemas empresariales remotos de contestador. Identifiqué exposición a amenazas internas debido a derechos de edición excesivos. Diseñé e implementé una política de Control de Acceso Basado en Roles (RBAC) usando el principio de mínimo privilegio en una VLAN privada de SharePoint. Reduje las escalaciones de incidentes de Nivel 3 en un 45% en 4 meses.",
      metrics: [
        "45% de Reducción de Nivel 3 en 4 Meses",
        "Principio de Privilegio Mínimo",
        "Mitigación de Amenazas Internas",
      ],
      tools: ["SharePoint", "VLAN privada"],
    },
    {
      id: "algorithmic-auditing",
      title: "Auditoría Algorítmica de Políticas",
      company: "Welocalize (Proyecto de Google)",
      period: "Ene 2023 – Oct 2023",
      role: "Auditor de Calidad de Datos y Cumplimiento de Políticas",
      description:
        "Ejecuté auditorías de cumplimiento rigurosas utilizando el sistema de calificación de anuncios EWOQ. Analicé conjuntos de datos multivariables para identificar riesgos de contenido y violaciones de políticas, entrenando los algoritmos de Google Search.",
      metrics: [
        "Marcos de Gobernanza de Google",
        "Análisis de Datos Multivariable",
        "Entrenamiento de Algoritmos de Búsqueda",
      ],
      tools: ["Sistema de Calificación EWOQ"],
    },
    {
      id: "workflow-automation",
      title: "Motor de Automatización de Flujos de Trabajo",
      company: "Concentrix",
      period: "Mayo 2021 – Ene 2023",
      role: "Analista de Respuesta a Incidentes de TI y Flujos de Trabajo",
      description:
        "Aseguré operaciones de soporte de TI de alto volumen. Identifiqué cuellos de botella en el flujo de trabajo que retrasaban la respuesta a incidentes. Desarrollé herramientas de script automatizadas y utilicé Zendesk CRM para enrutar tickets. Reduje el tiempo de procesamiento manual en un 20% y superé las métricas de rendimiento SLA.",
      metrics: [
        "20% de Reducción en Procesamiento Manual",
        "SLA Superado",
        "Automatización de Zendesk CRM",
      ],
      tools: ["Zendesk CRM"],
    },
    {
      id: "grc-framework-simulation",
      title: "Simulación de Marco de Trabajo GRC Empresarial",
      company: "Proyecto Capstone Independiente",
      period: "2024",
      role: "Analista GRC (Simulación)",
      description:
        "Un proyecto capstone independiente que realiza un análisis de brechas teórico para una clínica médica pequeña simulada. Mapeó los flujos de trabajo de privacidad del paciente (HIPAA) y los flujos de procesamiento de pagos con los requisitos regulatorios empresariales, incluidos PCI DSS, CCPA y GDPR. Utilizó el NIST Cybersecurity Framework (CSF) y los Controles CIS como base de implementación para identificar deficiencias de control y redactar documentación de guía de remediación.",
      metrics: [
        "NIST CSF y Controles CIS",
        "Mapeo PCI DSS, GDPR, CCPA, SOX",
        "Análisis de Brechas y Remediación",
      ],
    },
  ],
  specimens: [
    { name: "Regulaciones HIPAA", category: "Marco de Cumplimiento", icon: "ShieldCheck" },
    { name: "Mapeo del NIST CSF", category: "Marco de Ciberseguridad", icon: "Network" },
    { name: "Fundamentos de ISO 27001", category: "Estándar de Seguridad", icon: "FileLock" },
    { name: "RBAC / IAM", category: "Control de Acceso", icon: "Fingerprint" },
    { name: "PCI DSS", category: "Cumplimiento de Pagos", icon: "CreditCard" },
    { name: "GDPR", category: "Privacidad de Datos", icon: "ShieldCheck" },
    { name: "CCPA", category: "Privacidad de Datos", icon: "ShieldCheck" },
    { name: "SOX", category: "Cumplimiento Financiero", icon: "FileLock" },
    { name: "Administración de SharePoint", category: "Plataforma", icon: "FolderTree" },
    { name: "Kali Linux / Wireshark", category: "Herramientas de Seguridad", icon: "Terminal" },
    { name: "Codex / Claude Code / ChatGPT", category: "Plataformas de IA", icon: "Bot" },
    { name: "Evaluaciones de Riesgo", category: "Práctica de GRC", icon: "Gauge" },
    { name: "Respuesta a Incidentes", category: "Operaciones de Seguridad", icon: "Siren" },
    { name: "Auditoría de Privacidad de Datos", category: "Marco de Cumplimiento", icon: "ScanSearch" },
  ],
  certifications: [
    { name: "Cisco Networking Foundations", date: "12/2024" },
    { name: "Asana Workflow Specialist", date: "04/2025" },
    { name: "ISC2 Certified in Cybersecurity (CC)", date: "En Curso" },
  ],
  education: {
    school: "Keiser University",
    location: "Fort Lauderdale, FL",
    degree: "Licenciatura en Sistemas de Información Gerencial",
    date: "Mayo 2022",
    coursework: [
      "Gestión de Bases de Datos",
      "Seguridad de Redes",
      "Análisis de Sistemas",
      "Ingeniería de Software",
      "Optimización de Procesos",
      "Gestión de Proyectos",
    ],
  },
  navLinks: [
    { label: "Trabajo", href: "#work" },
    { label: "Marcos", href: "#frameworks" },
    { label: "Metodología", href: "#methodology" },
    { label: "Innovación e IA", href: "#innovation" },
    { label: "Contacto", href: "#contact" },
  ],
  frameworks: [
    {
      name: "HIPAA Regulations",
      focus: "Intercambio de PHI sin errores",
      icon: "ShieldCheck",
    },
    {
      name: "NIST CSF Mapping",
      focus: "Análisis de brechas e identificación de vulnerabilidades",
      icon: "Network",
    },
    {
      name: "RBAC Architecture",
      focus: "Principio de privilegio mínimo",
      icon: "Fingerprint",
    },
  ],
  methodology: {
    body: "Realizando análisis de brechas que vinculan los flujos de trabajo de privacidad médica (HIPAA) con los controles del NIST Cybersecurity Framework para identificar vulnerabilidades operativas. Diseñé y documenté políticas RBAC integrales, garantizando el alineamiento con los principios de privilegio mínimo.",
    videoUrl: "https://www.youtube.com/embed/l48OWQ8Vr1E",
    videoTitle: "Normas de Privacidad y Seguridad de HIPAA (en español)",
  },
  innovationIntro:
    "Uso la IA como apoyo práctico de ingeniería para investigar, crear prototipos, automatizar y explicar sistemas reales. Cada caso distingue la ayuda del modelo del software determinista y presenta la evidencia y los límites del trabajo.",
  aiTools: ["OpenAI Codex", "Claude Code", "ChatGPT", "Gemini", "Kimi", "DeepSeek"],
  innovationProjects: [
    {
      id: "lunara-health-ai",
      title: "Lunara: Calendario de ciclo privado",
      category: "Aplicación web de salud · IA opcional",
      summary: "Calendario privado para registrar ciclos y consultar predicciones, con un asistente educativo opcional.",
      challenge: "Ofrecer información útil del ciclo sin convertir los datos íntimos de salud en un producto que dependa de la nube.",
      process: [
        { title: "Mantener los datos en el dispositivo", detail: "El seguimiento usa IndexedDB y cálculos locales; no requiere cuenta ni analítica." },
        { title: "Hacer opcional la IA", detail: "Gemini requiere consentimiento explícito. Una lista mínima permite enviar contexto del ciclo y nombres recientes de síntomas; excluye nombres, notas, fechas e historial completo." },
        { title: "Definir límites de seguridad", detail: "El asistente ofrece educación, no diagnósticos, y deriva síntomas de emergencia a atención real. Las conversaciones no se guardan." },
      ],
      aiRole: "Gemini funciona como educador opcional, con consentimiento, contexto mínimo y límites de atención humana. Es un prototipo de producto, no un dispositivo médico.",
      tools: ["Next.js", "React", "Dexie / IndexedDB", "Gemini", "Capacitor", "Claude Code"],
      evidence: "Se construyeron y validaron la aplicación web y la exportación estática para iOS; se revisó el diseño móvil a 375 × 812. La firma y publicación requieren una Mac.",
      status: "Prototipo web verificado · preparación para iOS",
      screenshots: [
        { src: "/images/projects/lunara-interface.jpg", alt: "Vista previa del panel de Lunara con un perfil de demostración vacío; no contiene datos de ciclo ni de salud." },
        { src: "/images/projects/lunara-calendar.jpg", alt: "Vista previa del calendario mensual de Lunara con un perfil de demostración vacío; no contiene datos de ciclo ni de salud." },
      ],
    },
    {
      id: "mnq-lab",
      title: "MNQ Lab: sistema de investigación de trading",
      category: "Investigación cuantitativa · automatización responsable",
      summary: "Sistema de investigación de MNQ con límites de riesgo, auditoría de datos, comparación de estrategias con reglas explícitas y ejecución en fase de simulación.",
      challenge: "Las reglas de trading pueden parecer eficaces si se ignoran costos, sesgo de anticipación, muestras pequeñas y riesgo.",
      process: [
        { title: "Auditar los datos", detail: "Se reconstruyó y verificó el conjunto de MNQ con horarios correctos, reglas de elegibilidad y separación entre sesiones dentro y fuera de muestra." },
        { title: "Comparar candidatos", detail: "Se completaron 500 candidatos de estrategia y 1.150 evaluaciones contabilizadas, con pruebas cronológicas fuera de muestra y walk-forward." },
        { title: "Limitar el riesgo", detail: "El proyecto incluye un bróker simulado, límites de riesgo explícitos y un diario de decisiones. La ejecución real sigue desactivada." },
      ],
      aiRole: "Claude Code apoyó la construcción por fases y el aprendizaje. Las señales son reglas explícitas; un LLM no decide operaciones ni envía órdenes.",
      tools: ["Python", "Streamlit", "Pandas", "CSV de NinjaTrader", "Claude Code"],
      evidence: "La ejecución HP-10 guardada, documentada el 1 oct 2026, cubrió datos hasta el 11 sep 2026: 500 candidatos y 1.150 evaluaciones contabilizadas. Cien candidatos pasaron un filtro de expectativa positiva fuera de muestra y cinco operaciones, pero reutilizar esos datos en 500 candidatos ofrece resultados descriptivos, no validación independiente. Ningún conjunto superó 0,5 WFE; la rentabilidad no está demostrada.",
      status: "Solo investigación · sin ventaja validada · ejecución real desactivada",
      image: "/images/projects/mnq-lab-backtest.svg",
      imageAlt: "Infografía del análisis HP-10 de MNQ Lab, con fecha 1 de octubre de 2026, división de datos, número de candidatos, límites de validación y estado de simulación.",
    },
    {
      id: "chrono-clash",
      title: "Chrono Clash: prototipo de videojuego en Unity",
      category: "Ingeniería de videojuegos con agentes de IA",
      summary: "Concepto de juego 3D tipo bullet-heaven que combina un arsenal moderno con ejércitos medievales.",
      challenge: "Convertir una idea en un prototipo estructurado con combate, balance, progresión y una ruta de portabilidad.",
      process: [
        { title: "Diseñar los sistemas", detail: "Se definieron el prototipo, el balance, los datos de enemigos y armas y una hoja de ruta por fases." },
        { title: "Construir desde el editor", detail: "Un flujo de Unity Editor y sistemas C# ensamblan la escena y el ejecutable para Windows." },
        { title: "Validar la compilación real", detail: "La escena y el ejecutable se compilaron, pero el juego actual se cierra al iniciar por un archivo de datos dañado. Las pruebas de juego siguen pendientes." },
      ],
      aiRole: "Claude Code ayudó a implementar y depurar el proyecto Unity. La captura muestra el prototipo greybox independiente en el navegador, no la compilación de Unity.",
      tools: ["Unity 6", "C#", "Unity Editor scripting", "Claude Code"],
      evidence: "El greybox v0.1 del navegador funciona y muestra movimiento, disparo automático, oleadas de enemigos, salud y tiempo de partida. El ejecutable de Windows se compiló, pero falló al iniciar por un archivo level0 dañado; no se ha verificado el juego en Unity.",
      status: "Prototipo · falta validar el inicio",
      image: "/images/projects/chrono-clash-prototype.jpg",
      imageAlt: "Captura activa del greybox v0.1 de Chrono Clash en el navegador: jugador, enemigos, barra de salud y cronómetro; no es la compilación de Unity.",
    },
    {
      id: "workout-vault",
      title: "WorkoutVault: registro privado de entrenamiento",
      category: "Aplicación web de fitness · privada y asistida por IA",
      summary: "Registro de entrenamiento para rutinas, historial, progreso, descansos y exportación de datos bajo control del atleta.",
      challenge: "Hacer útil el registro de ejercicios sin exigir cuenta ni conexión para las funciones principales.",
      process: [
        { title: "Modelar el entrenamiento", detail: "Rutinas, sesiones, series, descansos, récords y estimación de una repetición máxima." },
        { title: "Mantener el núcleo en el dispositivo", detail: "SwiftData y SwiftUI gestionan gráficos, notificaciones locales y exportación manual CSV/JSON." },
        { title: "Definir un límite deliberado para la IA", detail: "La especificación excluye coaching y recomendaciones de IA. La fuerza se estima con la fórmula transparente de Epley." },
      ],
      aiRole: "La IA apoyó el diseño y la implementación. La estimación de una repetición máxima usa la fórmula transparente de Epley; no se presenta coaching de IA como función publicada.",
      tools: ["WorkoutVault", "Diseño de producto asistido por IA", "Diseño de datos privados"],
      evidence: "Los archivos cubren rutinas, registro de ejercicios, descansos, récords, gráficos y exportación CSV/JSON. Falta enlazar una demo pública.",
      status: "Prototipo de fitness · falta añadir enlace a demo",
    },
    {
      id: "three-router-home-network",
      title: "Red doméstica privada con tres routers",
      category: "Redes domésticas · rutas privadas",
      summary: "Sistema doméstico de tres routers que coordina varios enlaces, rutas de privacidad y zonas de red.",
      challenge: "Organizar distintos enlaces de internet y necesidades de privacidad en una sola red doméstica práctica.",
      process: [
        { title: "Definir las rutas", detail: "Planificar cómo los tres routers dividen enlaces separados y rutas relacionadas con privacidad." },
        { title: "Asignar un rol a cada router", detail: "Configurar los dispositivos como partes coordinadas de un sistema doméstico." },
        { title: "Comprobar el tráfico", detail: "Probar la conectividad y confirmar que los dispositivos usan la ruta prevista para cada necesidad." },
      ],
      aiRole: "La IA apoya la investigación y resolución de problemas; la configuración de los routers controla el tráfico. Ningún modelo de lenguaje enruta paquetes.",
      tools: ["Red doméstica de tres routers", "Rutas privadas", "Investigación asistida por IA"],
      evidence: "El propietario describe tres routers que combinan distintos enlaces y rutas privadas. Aquí no están documentados los modelos, la topología exacta ni mediciones de rendimiento.",
      status: "Infraestructura personal · topología pendiente de documentar",
      image: "/images/projects/home-router-network.svg",
      imageAlt: "Diagrama conceptual de red doméstica con tres routers; no representa la configuración exacta del propietario.",
    },
    {
      id: "agentic-web-studio",
      title: "Flujo agéntico para crear sitios web",
      category: "Diseño de agentes de IA · pequeñas empresas",
      summary: "Flujo reutilizable que convierte información de un negocio en investigación, estructura web, identidad visual y un sitio enfocado en conversiones.",
      challenge: "Los pequeños negocios suelen tener información dispersa y poco tiempo para transformarla en una presencia digital confiable.",
      process: [
        { title: "Recopilar un brief estructurado", detail: "Servicios, audiencia, ubicación, contacto, tono y recursos aprobados por la persona propietaria." },
        { title: "Investigar y planificar", detail: "Organizar el mapa del sitio, los textos, las llamadas a la acción y las prioridades móviles." },
        { title: "Construir y entregar", detail: "Crear un prototipo de marca y explicar alojamiento, propiedad, mantenimiento y decisiones del cliente." },
      ],
      aiRole: "ChatGPT y herramientas de investigación y creación de sitios apoyaron el prototipo de Costuras by Sule. El prompt maestro es un flujo en evolución, no un producto totalmente autónomo.",
      tools: ["ChatGPT", "Deep Research", "Sites", "Diseño de prompts"],
      evidence: "Se creó un prototipo web para Costuras by Sule. El dominio final, mantenimiento comercial y entrega al cliente son decisiones aparte.",
      status: "Prototipo web creado · flujo reutilizable en desarrollo",
    },
    {
      id: "grc-llm-workflow",
      title: "LLM para análisis de brechas GRC",
      category: "Flujo de IA revisado por personas",
      summary: "Uso de modelos de lenguaje para acelerar el primer mapeo de procesos de privacidad médica a controles NIST CSF.",
      challenge: "Traducir procesos a controles sin confundir una respuesta fluida del modelo con evidencia o aprobación de cumplimiento.",
      process: [
        { title: "Definir el proceso", detail: "Describir el flujo y la pregunta de control de forma acotada y rastreable." },
        { title: "Comparar borradores", detail: "Usar Claude, Kimi, DeepSeek, ChatGPT o Codex para proponer controles, brechas y preguntas." },
        { title: "Verificar y documentar", detail: "Contrastar cada sugerencia con el marco oficial y evidencia operativa; la revisión final es humana." },
      ],
      aiRole: "Los modelos aceleran la redacción y comparación. No certifican HIPAA ni validan controles sin evidencia.",
      tools: ["Claude", "Kimi", "DeepSeek", "ChatGPT", "OpenAI Codex"],
      evidence: "Es un flujo de análisis práctico, no un producto GRC automatizado en producción. No se debe ingresar PHI ni datos confidenciales en modelos públicos.",
      status: "Flujo practicado · requiere validación humana",
    },
    {
      id: "ai-assisted-delivery",
      title: "Entrega de software con agentes de IA",
      category: "DevOps asistido por IA",
      summary: "Flujo asistido por agentes para planificar y actualizar un portafolio bilingüe Next.js con revisión humana en cada fase.",
      challenge: "Pasar de un brief detallado a un cambio mantenible sin perder precisión bilingüe ni confianza en la entrega.",
      process: [
        { title: "Estructurar la solicitud", detail: "Convertir el brief en datos bilingües tipados y un contrato reutilizable de componente." },
        { title: "Implementar con agentes", detail: "Usar Claude Code y Codex para editar, iterar y depurar; mantener los cambios revisables en Git." },
        { title: "Verificar antes de publicar", detail: "Ejecutar compilación y lint, crear el commit y revisar el sitio publicado; un push no garantiza que esté activo." },
      ],
      aiRole: "Los modelos aceleran la implementación; compilación, lint, revisión en Git y verificación pública son pasos distintos. La mejora del 80% es estimada, no medida con un benchmark.",
      tools: ["Claude Code", "OpenAI Codex", "ChatGPT", "Next.js", "TypeScript", "GitHub", "Vercel"],
      evidence: "El sitio superó las comprobaciones de lint y compilación de producción; la versión actual se verificó en horacio-portfolio.vercel.app.",
      status: "Despliegue de producción verificado",
    },
  ],
  spaceImage: {
    credit: "NASA, ESA, CSA, STScI — Pilares de la Creación, Telescopio Espacial James Webb",
  },
  sectionTitles: {
    work: "Trabajo Seleccionado",
    frameworks: "Marcos y Especímenes",
    methodology: "Metodología y Enfoque",
    innovation: "IA e Innovación Aplicada",
    contact: "Conectemos.",
  },
  ui: {
    scroll: "Desplázate",
    focusLabel: "Enfoque",
    downloadResume: "Descargar Currículum en PDF",
    toolsLabel: "Herramientas",
    educationLabel: "Educación",
    certificationsLabel: "Certificaciones",
    exploreInnovation: "Sigue mi trabajo de IA en LinkedIn",
    linkedinLabel: "Conectar en LinkedIn",
    innovationEyebrow: "IA aplicada · Sistemas · Práctica responsable",
    aiToolsLabel: "Herramientas de IA en práctica",
    innovationChallenge: "El desafío",
    innovationAiRole: "El papel de la IA",
    innovationEvidence: "Evidencia y estado actual",
    innovationTools: "Herramientas",
    downloadLogo: "Descargar mi logo (SVG)",
  },
};

export const content: Record<Language, ContentBundle> = { en, es };

export const resumeDownloadUrl = "/horacio-ruiz-resume.pdf";

export const ambientAudioUrl = "/audio/ambient.mp3";
export const ambientAudioCredit = '"The Long Dark" by Scott Buckley (CC BY 3.0)';
