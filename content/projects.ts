export type ProjectSection = {
  heading: string;
  body?: string;
  items?: string[];
};

export type ProjectGroup = "simplitech" | "personal";

export type Project = {
  title: string;
  /** No slug = no case study page */
  slug?: string;
  group: ProjectGroup;
  organisation: string;
  role: string;
  years?: string;
  /** Plain status shown next to the title, e.g. "On hold" */
  status?: string;
  oneLiner: string;
  /** Position on the home page; unset = not in Selected work */
  selected?: number;
  /** null = no public link */
  link: string | null;
  linkLabel?: string;
  seeAlso?: { label: string; href: string };
  /** Screenshot under public/, e.g. "/images/work/simplify.png". A placeholder shows until the file exists */
  cover?: string;
  sections?: ProjectSection[];
};

export const projectGroups: { id: ProjectGroup; title: string; intro: string }[] = [
  {
    id: "simplitech",
    title: "Simplitech Limited",
    intro:
      "My main engagement since 2022. I lead Simplify across product, design, tech and partner integrations.",
  },
  {
    id: "personal",
    title: "Personal products",
    intro:
      "My own products, built because I saw a product where others saw a spreadsheet, or a glovebox full of receipts.",
  },
];

export const projects: Project[] = [
  // ── Simplitech Limited ─────────────────────────────────────────────────
  {
    title: "Simplify",
    slug: "simplify",
    group: "simplitech",
    organisation: "Simplitech Limited",
    role: "Intern to Tech Lead",
    years: "2022 to present",
    selected: 1,
    oneLiner:
      "Fiscal receipts and invoicing platform used by businesses across Tanzania. I lead product, design and tech across web, mobile, API and WhatsApp, and took over the mobile app after leading its first build.",
    link: "https://www.simplify.co.tz",
    linkLabel: "Open Simplify",
    cover: "/images/work/simplify.png",
    sections: [
      {
        heading: "Context",
        body: "Simplify is a TRA approved Virtual Fiscal Device (VFD) platform. Businesses use it to issue tax compliant receipts and invoices. It is used by businesses across Tanzania.",
      },
      {
        heading: "What I own",
        items: [
          "Product: scoping every feature, prioritising the backlog, owning product decisions, and research into where the market and the product should go",
          "Design: UI/UX and prototypes for new features before development",
          "Tech: frontend and mobile, code review, technical direction for backend and remote developers",
          "Delivery: testing and UAT before release, follow ups, weekly stakeholder reports",
          "Partners: integrations with the tax authority, banks, payment providers and client systems",
          "Business and organisation: commercial and pricing input, operating plans, and owning whatever the product needs next",
        ],
      },
      {
        heading: "The first mobile app",
        body: "In 2024 I led an external consultant through building Simplitech's first mobile app, then took it over and ran it full time. It happened right as I stepped up from Software Engineer to Tech Lead, and it's where the job stopped being \"write the code\" and became \"decide what's worth building, and make sure it gets built right\".",
      },
      {
        heading: "Every channel, one product",
        body: "Simplify runs on web, mobile, an API and a WhatsApp chatbot. The API is how businesses and partner systems plug Simplify straight into their own software. Keeping four channels behaving like one product is most of the job.",
      },
      {
        heading: "Growing into the roles",
        body: "I took ownership of product management and frontend work alongside the tech lead role, and upskilled into each of them as I went. Product decisions, the backlog and the frontend now sit with me.",
      },
      {
        heading: "Features built or led",
        items: [
          "Simplify App V2 revamp, across design, frontend and rollout",
          "WhatsApp receipt sharing: partner selection, phased plan and PRD",
          "Self registration flow",
          "Product analytics setup",
          "Partner and client system integrations: tax authority, payment providers, enterprise invoicing",
        ],
      },
      {
        heading: "What's next",
        items: [
          "SimplifyAudit: I lead the research and product for an AI agent suite for audit firms",
          "Payroll: a separate payroll app with a Tanzanian tax engine, now in development",
        ],
      },
    ],
  },
  {
    title: "SimplifyAudit / Cassian Audit Suite",
    slug: "simplifyaudit",
    group: "simplitech",
    organisation: "Simplitech Limited",
    role: "Research and Product Lead",
    years: "2025 to present",
    selected: 2,
    cover: "/images/work/simplifyaudit.png",
    oneLiner:
      "AI agents covering the full audit lifecycle for audit firms, with human approval at every key decision.",
    link: null,
    sections: [
      {
        heading: "The problem",
        body: "Audit work hits a capacity ceiling. Much of an engagement is structured, repetitive preparation done by hand every time, and senior time is scarce.",
      },
      {
        heading: "What I do",
        body: "I lead the research and build of an agent suite that covers the audit lifecycle: trial balance mapping, workpapers, tax compliance checks, confirmation letters, and draft financial statements and reports. A licensed auditor approves every key decision, and every step leaves a documented trail.",
      },
      {
        heading: "Approach",
        body: "A knowledge base built for local work (ISA, IFRS, and Tanzanian tax and regulation), structured as AI skills rather than long prompts. Each step needs evidence before it runs, and the line between what the agent does and what the auditor decides is drawn clearly.",
      },
      {
        heading: "Status",
        body: "In research and build at Simplitech.",
      },
      {
        heading: "Stack",
        body: "Claude agents and skills, a structured knowledge base, document generation.",
      },
    ],
  },

  // ── Personal products ──────────────────────────────────────────────────
  {
    title: "FinSights",
    slug: "finsights",
    group: "personal",
    organisation: "Personal product, with a co founder",
    role: "Product, design and build",
    years: "2025 to present",
    selected: 3,
    oneLiner:
      "Financial data platform for Tanzanian banks: sector overview, bank comparisons, financial statements and macro indicators.",
    link: "https://finsightstz.vercel.app/",
    linkLabel: "Open FinSights",
    cover: "/images/work/finsights.png",
    sections: [
      {
        heading: "How it started",
        body: "A friend had analysed years of Tanzanian bank data. I saw a product in it. We built FinSights together: the analysis is his, and I lead product, design and build.",
      },
      {
        heading: "The problem",
        body: "Analysts, institutions and researchers don't have a modern, locally focused way to compare and analyse Tanzanian financial data. What exists is shallow, dated, or not built for this market.",
      },
      {
        heading: "What's in it",
        items: [
          "Sector overview",
          "Bank comparisons",
          "Profit and loss, and balance sheet views",
          "Macro indicators",
          "Credit and risk views",
          "An admin layer for data and users",
        ],
      },
      {
        heading: "Approach",
        body: "I designed the path the data takes, from extraction and cleaning to storage, insight and the screen. A plain language AI layer is planned, so users can ask questions instead of hunting through tables. It's positioned for institutions first.",
      },
      {
        heading: "What's next",
        body: "Live data ingestion, more sectors and subscription tiers.",
      },
      {
        heading: "Stack",
        body: "Next.js, React, Supabase, Tailwind. Claude API for the planned insight layer.",
      },
    ],
  },
  {
    title: "MotoCare",
    slug: "motocare",
    group: "personal",
    organisation: "Personal product",
    role: "Product, design and build",
    years: "2025",
    status: "On hold",
    selected: 4,
    cover: "/images/work/motocare.png",
    oneLiner:
      "A vehicle maintenance tracker: a garage for your cars, their service history, what they cost you, and reminders before anything is due.",
    link: null,
    sections: [
      {
        heading: "Why",
        body: "Every car owner has a glovebox full of receipts and a vague memory of when the oil was last changed. MotoCare puts a car's whole life in one place, so the next service is a reminder, not a surprise.",
      },
      {
        heading: "What's in version 0.1",
        items: [
          "Garage: every vehicle with its make, model, year, plate, mileage, and purchase date and price",
          "Maintenance log: service type, provider, mileage and cost, with the option to save the cost as an expense",
          "Expenses by category and vehicle, with receipt links and date range filters",
          "Reminders for maintenance, inspections and renewals, with due dates and priorities",
          "A dashboard that pulls it together, plus sign up, sign in and a profile",
        ],
      },
      {
        heading: "Status",
        body: "Started in 2025. Version 0.1 is built and running as an MVP, and it's on hold while my time goes elsewhere. A mobile app is planned.",
      },
      {
        heading: "Stack",
        body: "Next.js, React, TypeScript, Mantine, Supabase for auth and data, Framer Motion.",
      },
    ],
  },
  {
    title: "EM To Do",
    slug: "em-todo",
    group: "personal",
    organisation: "Personal product",
    role: "Design and build",
    years: "2024",
    oneLiner:
      "Eisenhower style task app: separate what matters from what just feels urgent.",
    link: "https://emtodo.vercel.app/",
    linkLabel: "Open EM To Do",
    cover: "/images/work/em-todo.png",
    sections: [
      {
        heading: "What I built",
        body: "A small, mobile first task app built on one idea: good prioritisation is the productivity system, not the tool. Tasks sort by what's important and what's urgent, so the urgent but unimportant ones stop winning.",
      },
      {
        heading: "Stack",
        body: "React Native, Expo, NativeWind, deployed to Vercel.",
      },
    ],
  },
];

export const consulting = {
  title: "Consulting",
  body: "I help businesses get their product and digital side right: discovery to work out what's actually needed, websites that sell the experience, and product requirements a team can deliver from. Work so far includes a fintech's company website and product discovery, a hospitality business and a media brand.",
  points: [
    "Discovery first: work out what the business needs before anyone designs anything",
    "Websites that sell the experience, not just describe it",
    "Design and build in one pair of hands, so nothing gets lost in handover",
    "Thinking about the business, not just the screens",
  ],
};

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getSelectedProjects() {
  return projects
    .filter((p) => p.selected)
    .sort((a, b) => (a.selected ?? 0) - (b.selected ?? 0));
}

export function getProjectsByGroup(group: ProjectGroup) {
  return projects.filter((p) => p.group === group);
}
