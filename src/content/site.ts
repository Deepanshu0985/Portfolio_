// Everything on the site comes from this file: edit here to change your name,
// contact links, services, projects or FAQs.

export const site = {
  name: "Deepanshu Yadav",
  role: "Software & AI Engineer",
  headlineLead: "I build",
  // Rotates in the hero headline.
  headlineWords: ["AI chatbots", "AI automations", "modern websites", "full-stack apps", "mobile apps"],
  headlineTail: "that grow your business.",
  intro:
    "I'm a full-time software developer and AI engineer working with businesses in India and around the world. I take on a few projects at a time, so you get focused attention, clear communication and a product that works.",
  // Contact links: leave a value empty to hide that button.
  contact: {
    email: "deepanshu.dev.ai098@gmail.com",
    calendly: "",
    whatsapp: "", // e.g. "https://wa.me/91XXXXXXXXXX"
    linkedin: "",
    github: "https://github.com/Deepanshu0985",
  },
  responseTime: "I reply within 24 hours.",
};

export type Service = { title: string; description: string; icon: string; outcome: string };

export const services: Service[] = [
  {
    icon: "🤖",
    title: "AI chatbots",
    description: "A 24/7 assistant trained on your business that answers customers accurately and captures leads.",
    outcome: "Never miss an enquiry",
  },
  {
    icon: "⚙️",
    title: "AI automation",
    description: "Lead triage, email drafting, document processing and CRM updates that run on their own.",
    outcome: "Hours saved every week",
  },
  {
    icon: "🔌",
    title: "AI integration",
    description: "Smart search, summaries, assistants and content tools added to the product you already have.",
    outcome: "AI where it adds value",
  },
  {
    icon: "🌐",
    title: "Modern websites",
    description: "Fast, responsive, SEO-ready websites and landing pages designed to turn visitors into customers.",
    outcome: "More visitors become clients",
  },
  {
    icon: "💻",
    title: "Full-stack web apps",
    description: "SaaS products, dashboards, portals and MVPs, from database design to deployment.",
    outcome: "Launch your idea properly",
  },
  {
    icon: "📱",
    title: "Mobile apps",
    description: "Cross-platform iOS and Android apps from a single codebase.",
    outcome: "Reach customers on their phones",
  },
];

export const techStack = [
  "Next.js", "React", "TypeScript", "Node.js", "Python", "Java", "Spring Boot", "PostgreSQL",
  "Supabase", "Tailwind CSS", "React Native", "Mistral AI", "OpenAI", "RAG", "n8n", "Vercel",
];

export type Project = {
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
  images?: { src: string; alt: string }[];
  visual?: "spendwise";
  note?: string;
};

export const projects: Project[] = [
  {
    name: "AI Receptionist for a Dental Clinic",
    tagline: "AI chatbot + lead follow-up automation",
    problem:
      "Clinics lose patients when questions arrive after hours, and staff spend hours answering the same questions and chasing enquiries.",
    solution:
      "An AI assistant that answers from the clinic's own information, books appointment requests, and automatically triages every lead with a drafted reply for the front desk.",
    highlights: [
      "Answers only from the business's own knowledge, and says so when it doesn't know",
      "Emergency safety rules, no diagnosis, resistant to prompt-injection attempts",
      "Every request triaged as urgent, high value or routine, with an AI-drafted reply",
      "Staff dashboard; installs on any website with one line of code",
    ],
    stack: ["Next.js", "TypeScript", "Mistral AI", "Supabase", "Vercel"],
    links: [{ label: "Try the live demo", href: "https://brightsmile-dental-ai-one.vercel.app" }],
    images: [
      { src: "/work/dental-chat.webp", alt: "AI assistant answering a patient and taking an appointment request" },
      { src: "/work/dental-dashboard.webp", alt: "Staff dashboard with AI-triaged leads and drafted replies" },
    ],
    note: "Demo built for a fictional clinic.",
  },
  {
    name: "Spendwise",
    tagline: "Personal finance app with grounded AI",
    problem:
      "People can't easily see where their money went, which subscriptions they pay for, or why spending changed.",
    solution:
      "A full-stack finance app that imports bank and card statements, detects duplicates, transfers and recurring payments, and explains spending with an AI assistant that only uses verified data.",
    highlights: [
      "PDF statement import with OCR fallback and review before import",
      "Duplicate, transfer, refund and recurring-payment detection",
      "Analytics, budgets and savings goals",
      "AI assistant limited to safe backend tools, with per-user data isolation in the database",
    ],
    stack: ["React", "TypeScript", "Java", "Spring Boot", "PostgreSQL"],
    links: [{ label: "View the app", href: "https://spendwise-frontend-sand.vercel.app" }],
    visual: "spendwise",
    note: "In active development.",
  },
];

export const process = [
  { step: "01", title: "Free discovery call", text: "We talk about your goals. You get a clear plan, timeline and fixed quote." },
  { step: "02", title: "Design & build", text: "You see a working preview early and get progress updates every week." },
  { step: "03", title: "Launch", text: "I deploy it on your domain, hosting or app store and walk you through it." },
  { step: "04", title: "Support", text: "Free bug fixes after launch, and optional monthly maintenance." },
];

export const included = [
  "Fixed quote and written scope before work starts",
  "Revision rounds included at every stage",
  "Weekly progress updates and a live preview",
  "Mobile-friendly, fast and SEO-ready",
  "Full source code and accounts in your name",
  "Free bug fixes after launch",
];

export const faqs = [
  {
    q: "How much does a project cost?",
    a: "It depends on what you need, so every project gets a fixed quote after a short free call. You know the full price before anything starts, and I'll suggest options that fit your budget.",
  },
  {
    q: "Do you work with clients in India and abroad?",
    a: "Yes, both. For clients in India I quote in rupees and accept UPI or bank transfer. For international clients I quote in USD and accept Wise, PayPal or bank transfer.",
  },
  {
    q: "How does payment work?",
    a: "Usually 50% to start and 50% before launch. Larger projects are split into milestones, so you only pay as you see progress.",
  },
  {
    q: "How many revisions do I get?",
    a: "Every project includes revision rounds at each stage. Anything new beyond the agreed scope is quoted separately, so there are no surprises.",
  },
  {
    q: "Who owns the code?",
    a: "You do. After the final payment you get the full source code, and all accounts are in your name.",
  },
  {
    q: "How long does a project take?",
    a: "A chatbot or landing page usually takes 1–2 weeks. Full-stack and mobile apps take 3–12 weeks depending on scope. You get a timeline with the quote.",
  },
];
