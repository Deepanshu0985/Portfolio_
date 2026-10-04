// Everything on the site comes from this file: edit here to change your name,
// contact links, services, prices or projects.

export const site = {
  name: "Deepanshu Yadav",
  role: "Software & AI Engineer",
  headline: "I build AI chatbots, automations and modern web apps that save businesses time.",
  intro:
    "I'm a full-time software developer and AI engineer. I take on a small number of freelance projects at a time, so every client gets focused attention, clear communication and a working product, not just code.",
  // Contact links: leave a value empty to hide that button.
  contact: {
    email: "",
    calendly: "",
    linkedin: "",
    github: "https://github.com/Deepanshu0985",
  },
  responseTime: "I reply within 24 hours, Monday to Saturday.",
};

export type Service = { title: string; description: string; from: string; icon: string };

export const services: Service[] = [
  {
    icon: "🤖",
    title: "AI chatbots for your website",
    description:
      "A 24/7 assistant trained on your business: answers customers accurately, captures leads and books appointments.",
    from: "$499",
  },
  {
    icon: "⚙️",
    title: "AI automation",
    description:
      "Remove repetitive work: lead triage, email drafting, document processing and CRM updates that run on their own.",
    from: "$349",
  },
  {
    icon: "🔌",
    title: "AI integration",
    description: "Add AI features to the product you already have: smart search, summaries, assistants and content tools.",
    from: "$799",
  },
  {
    icon: "🌐",
    title: "Modern websites",
    description: "Fast, responsive, SEO-ready sites and landing pages built to turn visitors into customers.",
    from: "$499",
  },
  {
    icon: "💻",
    title: "Full-stack web apps",
    description: "SaaS products, dashboards, portals and MVPs, from database to deployment.",
    from: "$2,500",
  },
  {
    icon: "📱",
    title: "Mobile apps",
    description: "Cross-platform iOS and Android apps with one codebase.",
    from: "$3,000",
  },
];

export type Project = {
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
  note?: string;
};

export const projects: Project[] = [
  {
    name: "AI Receptionist for a Dental Clinic",
    tagline: "AI chatbot + lead follow-up automation",
    problem:
      "Clinics lose patients when questions arrive after hours and no one answers, and staff spend hours replying to the same questions.",
    solution:
      "An AI assistant that answers from the clinic's own information, captures appointment requests, and automatically triages every lead with a drafted reply for the front desk.",
    highlights: [
      "Answers only from the business's own knowledge (RAG), and says so when it doesn't know",
      "Emergency safety rules, no diagnosis, resistant to prompt-injection attempts",
      "In-chat booking form; every request triaged as urgent, high value or routine",
      "AI-drafted reply email per lead, sent in one click from a staff dashboard",
      "Installs on any existing website with one line of code",
      "19 automated behaviour tests for the AI's answers",
    ],
    stack: ["Next.js", "TypeScript", "Mistral AI", "Supabase", "Vercel"],
    links: [
      { label: "Try the live demo", href: "https://brightsmile-dental-ai-one.vercel.app" },
    ],
    note: "Demo for a fictional clinic.",
  },
  {
    name: "Spendwise",
    tagline: "Personal finance app with grounded AI",
    problem:
      "People can't easily answer where their money went, which subscriptions they pay for, or why spending changed month to month.",
    solution:
      "A full-stack finance app that imports bank and card PDF statements, detects duplicates, transfers and recurring payments, and explains spending with an AI assistant that only uses verified data.",
    highlights: [
      "PDF statement import with text extraction, OCR fallback and review before import",
      "Duplicate, transfer, refund and recurring-payment detection",
      "Deterministic analytics, budgets and savings goals",
      "AI assistant limited to allowlisted backend tools, never raw database access",
      "Per-user data isolation enforced by PostgreSQL row-level security",
    ],
    stack: ["React", "TypeScript", "Java", "Spring Boot", "PostgreSQL"],
    links: [{ label: "View the app", href: "https://spendwise-frontend-sand.vercel.app" }],
    note: "In active development.",
  },
];

export const process = [
  { step: "1", title: "Free discovery call", text: "15–30 minutes to understand your goals. You get a written scope and a fixed quote." },
  { step: "2", title: "Design & build", text: "A preview or staging link early, then weekly progress updates you can click through." },
  { step: "3", title: "Launch", text: "I deploy to your domain, hosting or app store and walk you through everything." },
  { step: "4", title: "Support", text: "Free bug fixes after launch, plus optional monthly maintenance." },
];

export const included = [
  "Written scope and fixed price before work starts",
  "Revision rounds included in every project",
  "Weekly progress updates",
  "Mobile-friendly, fast and SEO-ready",
  "Deployment and handover: source code, access and a video walkthrough",
  "Free bug fixes for 14–60 days after launch",
];

export const faqs = [
  {
    q: "How does payment work?",
    a: "Small projects: 50% to start and 50% before launch. Larger projects are split into milestones. Payment by bank transfer, Wise, Payoneer or PayPal in USD.",
  },
  {
    q: "How many revisions do I get?",
    a: "Every project includes set revision rounds (usually two per stage). New features beyond the agreed scope are quoted separately, so there are no surprises.",
  },
  {
    q: "Who owns the code?",
    a: "You do. After the final payment you get the full source code and all accounts are in your name.",
  },
  {
    q: "What about AI running costs?",
    a: "AI usage is billed to your own provider account, usually a few dollars a month for a small business. I'll estimate it for you up front.",
  },
  {
    q: "We're in a different time zone. Is that a problem?",
    a: "No. I work asynchronously with clear written updates, and schedule calls at a time that suits you. Many clients like waking up to finished work.",
  },
  {
    q: "How long does a project take?",
    a: "A chatbot or landing page usually takes 1–2 weeks. Full-stack and mobile apps take 3–12 weeks depending on scope. You get a timeline with the quote.",
  },
];
