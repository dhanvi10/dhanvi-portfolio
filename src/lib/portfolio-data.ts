export const profile = {
  name: "Dhanvi Bhadiyadra",
  role: "Laravel & Vue.js Developer",
  tagline: "Full-Stack Engineer building CRMs, automations & AI-powered products",
  location: "Surat, Gujarat, India",
  phone: "88666 38673",
  phoneHref: "tel:+918866638673",
  email: "dhanvibhadiyadra15@gmail.com",
  linkedin: "https://www.linkedin.com/in/dhanvi-bhadiyadara-634bbb205/",
  since: "February 2023",
  summary:
    "Full-Stack Developer working professionally since February 2023, building scalable web applications with Laravel, Vue.js, Inertia.js and PHP. I integrate third-party APIs (WhatsApp, Stripe, PayPal, Google Calendar, ChatGPT), design CRM platforms and build automation workflows — with a strong focus on clean, maintainable backend architecture and responsive Tailwind interfaces.",
};

export const skillGroups = [
  {
    title: "Backend",
    items: [
      "Laravel",
      "PHP",
      "Node.js",
      "Socket.IO / Real-time",
      "REST API Development",
      "MySQL",
      "Laravel Nova",
      "Cron Automation",
    ],
  },
  {
    title: "Frontend",
    items: ["Vue.js", "Inertia.js", "JavaScript", "jQuery", "Tailwind CSS", "Bootstrap", "HTML5 / CSS3"],
  },
  {
    title: "APIs & Integrations",
    items: ["WhatsApp API", "Google Calendar API", "Stripe", "PayPal", "ChatGPT API", "Zoho CRM"],
  },
  {
    title: "Automation & AI",
    items: [
      "n8n Workflows",
      "IMAP Email Processing",
      "Python",
      "YOLO Object Detection",
      "OpenCV",
    ],
  },
  { title: "Tools & DevOps", items: ["Git", "SSH", "Ploi", "Postman"] },
];

export const experience = [
  {
    company: "Freelance Full-Stack Developer",
    role: "Self-Employed",
    period: "Oct 2025 — Present",
    points: [
      "Deliver custom CRM systems for small businesses, including leave management, payroll and automated reporting modules.",
      "Build automation workflows and third-party integrations tailored to each client's operations.",
    ],
  },
  {
    company: "AR Team Software Solutions",
    role: "Full-Stack Developer",
    period: "Oct 2024 — Oct 2025",
    points: [
      "Built AI-powered CRM features, integrating ChatGPT and WhatsApp APIs for real-time customer communication.",
      "Integrated Stripe and PayPal, including subscription flows and webhook-based payment verification.",
      "Developed multiple web applications end-to-end with Laravel and Vue.js.",
    ],
  },
  {
    company: "PlanicsDev Infotech",
    role: "Laravel / Vue.js Developer",
    period: "Feb 2023 — Oct 2024",
    points: [
      "Developed and maintained CRM systems with scalable Laravel backends and reusable Vue.js components.",
      "Designed automation workflows for tag assignment, pipeline updates and notifications.",
      "Synchronised booking data with the Google Calendar API for seamless scheduling.",
    ],
  },
];

export const education = [
  {
    degree: "Master's in Generative AI",
    school: "SRM University",
    period: "Jan 2026 — Present",
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    school: "Veer Narmad South Gujarat University",
    period: "2020 — 2023",
  },
];

export const projects = [
  {
    name: "RUBBL",
    kind: "Australian Rubbish-Pickup Marketplace",
    featured: true,
    description:
      "Australian on-demand rubbish removal platform where customers book a pickup and orders are auto-assigned to the right transporter. I built the real-time chat module on Node.js sockets, live driver location and working-hours tracking with zero manual entry, and the automated dispatch logic behind the whole operation.",
    highlights: [
      "Real-time customer ↔ driver chat built with Node.js + Socket.IO",
      "Automatic order assignment to transporters based on availability and area",
      "Live driver location tracking with automated hours/timesheet calculation",
      "Operational dashboards for bookings, jobs, pricing and payouts",
    ],
    stack: ["Laravel", "Vue.js", "Node.js", "Socket.IO", "Google Maps API", "MySQL"],
  },
  {
    name: "Rubbish Detection System",
    kind: "Computer Vision / YOLO",
    featured: true,
    description:
      "Object detection system built with a YOLO model to automatically identify and classify rubbish from images, so waste type and load size can be verified without manual inspection.",
    highlights: [
      "Trained and tuned a YOLO object-detection model on rubbish imagery",
      "Detects and classifies waste items with bounding boxes and confidence scores",
      "Python inference pipeline designed to plug into booking/verification flows",
    ],
    stack: ["Python", "YOLO", "OpenCV", "REST API"],
  },
  {
    name: "Recency CRM",
    kind: "AI CRM Platform",
    description:
      "Custom CRM integrating ChatGPT and WhatsApp APIs for real-time customer conversations, with automation workflows syncing user actions to Google Calendar.",
    stack: ["Laravel", "Vue.js", "ChatGPT API", "WhatsApp API"],
  },

  {
    name: "EVSpares",
    kind: "Automotive E-Commerce",
    description:
      "Led end-to-end development: Stripe payments, VIN-based search filters, bulk Excel product imports and a custom admin dashboard for stock and order control.",
    stack: ["Laravel", "Stripe", "MySQL", "Vue.js"],
  },
  {
    name: "Talent UAE",
    kind: "Finance Management",
    description:
      "Expense tracking, reconciliation and dynamic reporting modules with Vue.js frontends and Laravel cron jobs for scheduled task automation.",
    stack: ["Laravel", "Vue.js", "Cron Jobs"],
  },
  {
    name: "AI Booking Assistant",
    kind: "AI Automation",
    description:
      "ChatGPT-powered assistant that collects booking details, checks slot availability, suggests nearest available times and auto-syncs confirmed bookings to Google Calendar.",
    stack: ["ChatGPT API", "Laravel", "Google Calendar API"],
  },
  {
    name: "Nquiree",
    kind: "E-Commerce Enhancement",
    description:
      "Added testimonials, product tabs and dynamic content pages; integrated Zoho CRM and a chatbot; redesigned checkout and invoice workflows in responsive Tailwind CSS.",
    stack: ["Laravel", "Zoho CRM", "Tailwind CSS"],
  },
  {
    name: "PPAY — Project Pay",
    kind: "Payments Module",
    description:
      "Subcontractor payment tracking for claims, variations, due dates, bank info and ledger entries using modular Laravel architecture and interactive Vue.js components.",
    stack: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    name: "Email Processing System",
    kind: "Automation",
    description:
      "IMAP-based system that fetches booking emails, extracts structured data and stores it for downstream automation and analytics.",
    stack: ["PHP", "IMAP", "Laravel"],
  },
];

export const languages = [
  { name: "Gujarati", level: 100 },
  { name: "Hindi", level: 95 },
  { name: "English", level: 80 },
];

export const services = [
  {
    title: "CRM & internal platforms",
    body: "Custom CRMs with roles, pipelines, leave, payroll and reporting modules — built to be extended, not rewritten.",
  },
  {
    title: "Real-time features",
    body: "Chat, live tracking and notifications on Node.js sockets, wired cleanly into a Laravel backend.",
  },
  {
    title: "API integrations",
    body: "WhatsApp, Stripe, PayPal, Google Calendar/Maps, Zoho and ChatGPT — including webhooks and retries.",
  },
  {
    title: "Automation & AI",
    body: "Cron jobs, n8n workflows, IMAP parsing and computer-vision models that remove manual work.",
  },
];

export const process = [
  { step: "01", title: "Understand", body: "Map the actual operation and the people using it before touching code." },
  { step: "02", title: "Architect", body: "Modular Laravel structure, clean schema, predictable API contracts." },
  { step: "03", title: "Build", body: "Ship in vertical slices so you can use and review features early." },
  { step: "04", title: "Automate", body: "Replace the repetitive parts with jobs, webhooks and workflows." },
];

export const marqueeTech = [
  "Laravel",
  "Vue.js",
  "Inertia.js",
  "Node.js",
  "Socket.IO",
  "MySQL",
  "Tailwind CSS",
  "Stripe",
  "WhatsApp API",
  "Google Maps",
  "ChatGPT API",
  "YOLO",
  "n8n",
  "Python",
];
