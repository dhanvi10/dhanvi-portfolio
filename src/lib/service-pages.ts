export const SITE_URL = "https://dhanvi-portfolio.lovable.app";

export type ServicePage = {
  slug: string;
  h1: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  offers: { title: string; body: string }[];
  stack: string[];
  faqs: { q: string; a: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "laravel-developer",
    eyebrow: "Hire a Laravel developer",
    h1: "Laravel Developer for Hire — CRMs, APIs & Automation",
    title: "Laravel Developer for Hire in Surat, India | Dhanvi Bhadiyadra",
    description:
      "Freelance Laravel developer with 3+ years building CRMs, REST APIs, Stripe/PayPal payments and automation. Laravel, Vue.js, Inertia and MySQL. Based in Surat, working remotely.",
    intro:
      "I build and maintain Laravel applications end to end — modular backends, clean MySQL schemas, queued jobs, webhooks and admin panels with Laravel Nova. Since February 2023 I have shipped CRM platforms, payment modules and AI integrations for teams in India, Australia and the UAE.",
    offers: [
      {
        title: "Laravel application development",
        body: "New builds and feature work on existing codebases: modular services, form requests, policies, jobs, events and tests that keep the app maintainable.",
      },
      {
        title: "REST APIs & integrations",
        body: "Versioned REST APIs plus third-party integrations for Stripe, PayPal, WhatsApp, Google Calendar/Maps, Zoho CRM and the ChatGPT API, including webhook verification and retries.",
      },
      {
        title: "CRM & admin platforms",
        body: "Role-based CRMs with pipelines, leave, payroll and reporting modules, built on Laravel with Vue.js or Laravel Nova front ends.",
      },
      {
        title: "Automation & maintenance",
        body: "Cron schedules, queue workers, IMAP email parsing, n8n workflows, deployment on Ploi and ongoing support after launch.",
      },
    ],
    stack: ["Laravel", "PHP", "Inertia.js", "Vue.js", "MySQL", "Laravel Nova", "Redis queues", "Ploi"],
    faqs: [
      {
        q: "How much Laravel experience do you have?",
        a: "I have been working professionally with Laravel since February 2023 across three roles — PlanicsDev Infotech, AR Team Software Solutions and freelance client work.",
      },
      {
        q: "Do you work on existing Laravel projects?",
        a: "Yes. Most of my work has been extending live applications: adding modules, refactoring legacy controllers, fixing performance issues and adding integrations.",
      },
      {
        q: "Do you work remotely?",
        a: "Yes. I am based in Surat, Gujarat and work remotely with clients in Australia, the UAE and across India.",
      },
    ],
  },
  {
    slug: "php-developer",
    eyebrow: "Hire a PHP developer",
    h1: "PHP Developer — Backend Development, APIs & Legacy Support",
    title: "Freelance PHP Developer | Backend, APIs & MySQL — Dhanvi Bhadiyadra",
    description:
      "Freelance PHP developer building backends, REST APIs, payment flows and IMAP automation with PHP, Laravel and MySQL. Available for new builds, legacy fixes and integrations.",
    intro:
      "PHP is the core of my day-to-day work. I write backend code that other developers can pick up: clear structure, predictable data models and no hidden logic. That covers modern Laravel projects as well as older PHP codebases that need fixing, securing or extending.",
    offers: [
      {
        title: "Backend development",
        body: "Business logic, authentication, roles and permissions, file handling, reporting and export flows built with PHP 8 and MySQL.",
      },
      {
        title: "Legacy PHP support",
        body: "Debugging, security hardening, query optimisation and gradual migration of older PHP applications toward a framework structure.",
      },
      {
        title: "Payment & API work",
        body: "Stripe and PayPal checkouts, subscriptions and webhook-based verification, plus REST integrations with CRMs and messaging platforms.",
      },
      {
        title: "Email & data automation",
        body: "IMAP mailbox processing that extracts structured data from incoming emails and feeds it into your database and reports.",
      },
    ],
    stack: ["PHP 8", "Laravel", "MySQL", "REST APIs", "Stripe", "PayPal", "IMAP", "Git"],
    faqs: [
      {
        q: "Do you take on small PHP fixes?",
        a: "Yes — bug fixes, integration work and single-module builds are welcome alongside larger projects.",
      },
      {
        q: "Can you work with a plain PHP codebase, not Laravel?",
        a: "Yes. I have maintained non-framework PHP code and can improve it in place or plan a staged move to Laravel.",
      },
      {
        q: "How do you handle handover?",
        a: "Code goes into your Git repository with a readable structure, environment notes and a walkthrough of the parts you will maintain.",
      },
    ],
  },
  {
    slug: "full-stack-developer",
    eyebrow: "Hire a full-stack developer",
    h1: "Full-Stack Developer — Laravel, Vue.js & Real-Time Features",
    title: "Full-Stack Developer (Laravel + Vue.js) for Hire | Dhanvi Bhadiyadra",
    description:
      "Full-stack developer building complete web apps with Laravel, Vue.js, Inertia, Node.js sockets and Tailwind CSS — including real-time chat, live tracking and AI automation.",
    intro:
      "I take products from schema to interface. Laravel and MySQL on the backend, Vue.js with Inertia and Tailwind CSS on the front, Node.js and Socket.IO when a feature has to be real time. On RUBBL, an Australian rubbish-pickup marketplace, that meant live chat, driver location and hours tracking, and automatic order assignment to transporters.",
    offers: [
      {
        title: "End-to-end web apps",
        body: "One developer for database design, backend, API, front end and deployment — useful when a project is too small for a full team.",
      },
      {
        title: "Real-time features",
        body: "Chat, presence, live location and notifications on Node.js with Socket.IO, wired into a Laravel backend and Vue.js interface.",
      },
      {
        title: "AI-powered features",
        body: "ChatGPT-based assistants for booking and support, plus computer-vision work — including a YOLO rubbish-detection model that classifies waste from photos.",
      },
      {
        title: "Responsive interfaces",
        body: "Vue.js components and Tailwind CSS layouts that work on phones and desktops, built against real content rather than placeholder blocks.",
      },
    ],
    stack: ["Laravel", "Vue.js", "Inertia.js", "Node.js", "Socket.IO", "Tailwind CSS", "MySQL", "Python"],
    faqs: [
      {
        q: "What does a typical engagement look like?",
        a: "I map the operation first, agree on a modular architecture, then ship in vertical slices so you can review working features early.",
      },
      {
        q: "Can you handle both backend and front end alone?",
        a: "Yes — most of my projects have been solo full-stack builds, from CRM platforms to marketplaces and payment modules.",
      },
      {
        q: "Are you available for long-term work?",
        a: "Yes, I take both project-based and ongoing monthly engagements, alongside my Master's in Generative AI at SRM University.",
      },
    ],
  },
];

export function getServicePage(slug: string): ServicePage {
  const page = servicePages.find((p) => p.slug === slug);
  if (!page) throw new Error(`Unknown service page: ${slug}`);
  return page;
}
