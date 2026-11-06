export type Quip = {
  line: string;
  /** Italic stage direction after the line, e.g. "[looks at camera]" */
  direction?: string;
};

export type ProjectSection = {
  heading: string;
  /** Handwritten line under the heading */
  explainer: string;
  body?: string;
  items?: string[];
  /** Term and detail rows, e.g. "What I own" */
  rows?: { term: string; detail: string }[];
};

export type ProjectGroup = "simplitech" | "personal";

export type Project = {
  title: string;
  slug: string;
  group: ProjectGroup;
  /** Label on the folder tab */
  tab: string;
  organisation: string;
  role: string;
  years: string;
  /** Mono line under the folder title */
  meta: string;
  /** Shown as an ON HOLD stamp on the folder */
  onHold?: boolean;
  /** Short description on the folder */
  blurb: string;
  /** One line result on the folder */
  outcome: string;
  /** Talking head under the folder */
  quip: Quip;
  /** Position on the home page; unset = not in the home folders */
  selected?: number;
  /** null = no public link */
  link: string | null;
  linkLabel?: string;
  /** Show the public link on the folder as well as on the case study */
  linkOnFolder?: boolean;
  cover?: string;
  /** Case study: handwritten line on the episode card */
  tagline: string;
  /** Case study: the fourth fact in the key facts bar */
  extraFact: { label: string; value: string };
  /** Case study: sections in order, each with a timecode and explainer */
  sections: ProjectSection[];
  /** Case study: the closing Outcome section */
  outcomeDetail: string;
  /** Case study: talking heads in the side column */
  asides: Quip[];
  /** Blurb used on the "Coming up next" card that points to this project */
  teaser: string;
};

export const workPage = {
  groups: {
    simplitech: {
      timecode: "00:04:30",
      title: "Simplitech Limited",
      explainer: "My main job, since 2022.",
      intro:
        "My main engagement since 2022. I lead Simplify across product, design, tech and partner integrations.",
    },
    personal: {
      timecode: "00:09:52",
      title: "Personal products",
      explainer: "Things I build on my own, because I can't help it.",
      intro:
        "My own products, built because I saw a product where others saw a spreadsheet, or a glovebox full of receipts.",
    },
  } satisfies Record<ProjectGroup, { timecode: string; title: string; explainer: string; intro: string }>,
  openFile: "Open the file",
  backLink: "Back to the work files",
  noLink: "There's no public link for this one. Ask me about it.",
};

export const consulting = {
  timecode: "00:14:05",
  title: "Consulting",
  explainer: "How I help other businesses.",
  body: "I help businesses get their product and digital side right: discovery to work out what's actually needed, websites that sell the experience, and product requirements a team can deliver from. Work so far includes a fintech's company website and product discovery, a hospitality business and a media brand.",
  quip: {
    line: "\"I can't name the clients.\"",
    direction: "[looks at camera] It's called discretion. Also manners.",
  } satisfies Quip,
  cta: "Email me about a project",
  pointsTitle: "What clients get",
  points: [
    "Discovery first: what the business needs before anyone designs anything",
    "Websites that sell the experience, not just describe it",
    "Design and build in one pair of hands, so nothing gets lost in handover",
    "Thinking about the business, not just the screens",
  ],
};

export const projects: Project[] = [
  // ── Simplitech Limited ─────────────────────────────────────────────────
  {
    title: "Simplify",
    slug: "simplify",
    group: "simplitech",
    tab: "Simplitech Limited",
    organisation: "Simplitech Limited",
    role: "Product and Tech Lead",
    years: "2022 to present",
    meta: "Product and Tech Lead, since 2022",
    selected: 1,
    blurb:
      "Fiscal receipts and invoicing for businesses across Tanzania. I lead product, design and tech across web, mobile, API and WhatsApp.",
    outcome: "One product across four channels, so businesses issue receipts wherever they already work.",
    quip: { line: "\"I don't have favourites.\"", direction: "[glances at Simplify]" },
    link: "https://www.simplify.co.tz",
    linkLabel: "Open Simplify",
    cover: "/images/work/simplify.png",
    tagline: "Fiscal receipts and invoicing for businesses across Tanzania.",
    extraFact: { label: "Channels", value: "Web, mobile, API, WhatsApp" },
    sections: [
      {
        heading: "Context",
        explainer: "What Simplify is.",
        body: "Simplify is a TRA approved Virtual Fiscal Device platform. Businesses use it to issue tax compliant receipts and invoices without changing how they sell.",
      },
      {
        heading: "What I own",
        explainer: "My part in it.",
        rows: [
          {
            term: "Product",
            detail:
              "Scoping every feature, prioritising the backlog, owning product decisions, and research into where the market and the product should go",
          },
          { term: "Design", detail: "UI/UX and prototypes for new features before development" },
          { term: "Tech", detail: "Frontend and mobile, code review, direction for backend and remote developers" },
          { term: "Delivery", detail: "Testing and UAT before release, weekly stakeholder reports" },
          { term: "Partners", detail: "Integrations with the tax authority, banks, payment providers and client systems" },
          { term: "Business", detail: "Commercial and pricing input, operating plans" },
        ],
      },
      {
        heading: "The first mobile app",
        explainer: "The project that changed my role.",
        body: "In 2024 I led an external consultant through building Simplitech's first mobile app, then took it over and ran it full time. It's where the job stopped being \"write the code\" and became \"decide what's worth building, and make sure it gets built right\".",
      },
      {
        heading: "Every channel, one product",
        explainer: "What keeps me busy now.",
        body: "Simplify runs on web, mobile, an API and a WhatsApp chatbot. The API is how businesses and partner systems plug Simplify straight into their own software. Keeping four channels behaving like one product is most of the job.",
      },
      {
        heading: "Growing into the roles",
        explainer: "More than the title says.",
        body: "I took ownership of product management and frontend work alongside the tech lead role, and upskilled into each of them as I went. Product decisions, the backlog and the frontend now sit with me.",
      },
      {
        heading: "Features built or led",
        explainer: "The work you can point at.",
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
        explainer: "Already on the whiteboard.",
        items: [
          "SimplifyAudit: I lead the research and product for an AI agent suite for audit firms",
          "Payroll: a separate payroll app with a Tanzanian tax engine, now in development",
        ],
      },
    ],
    outcomeDetail:
      "One product across web, mobile, API and WhatsApp, so businesses can issue compliant receipts wherever they already work, and partners can plug in without changing their own systems.",
    asides: [
      { line: "\"Four channels. One product. Zero favourites.\"", direction: "[long pause]" },
      { line: "\"The API is my favourite channel.\"", direction: "[looks at camera] I said zero favourites." },
    ],
    teaser: "Fiscal receipts and invoicing, across four channels.",
  },
  {
    title: "SimplifyAudit",
    slug: "simplifyaudit",
    group: "simplitech",
    tab: "Simplitech Limited",
    organisation: "Simplitech Limited",
    role: "Research and Product Lead",
    years: "2025 to present",
    meta: "Research and Product Lead, 2025 to present",
    selected: 2,
    blurb:
      "AI agents covering the full audit lifecycle for audit firms, with a human approving every key decision.",
    outcome:
      "In research and build: an agent suite tested on real audit work, with a clear line where the human decides.",
    quip: { line: "\"The AI does the prep. The auditor keeps the judgment. Everyone keeps their weekend.\"" },
    link: null,
    cover: "/images/work/simplifyaudit.png",
    tagline: "AI agents for audit firms, with a human approving every key decision.",
    extraFact: { label: "Status", value: "In research and build" },
    sections: [
      {
        heading: "The problem",
        explainer: "Why audit firms need this.",
        body: "Audit work hits a capacity ceiling. Much of an engagement is structured, repetitive preparation done by hand every time, and senior time is scarce.",
      },
      {
        heading: "What I do",
        explainer: "My part in it.",
        body: "I lead the research and build of an agent suite that covers the audit lifecycle: trial balance mapping, workpapers, tax compliance checks, confirmation letters, and draft financial statements and reports. A licensed auditor approves every key decision, and every step leaves a documented trail.",
      },
      {
        heading: "Approach",
        explainer: "How it's built.",
        body: "A knowledge base built for local work (ISA, IFRS, and Tanzanian tax and regulation), structured as AI skills rather than long prompts. Each step needs evidence before it runs, and the line between what the agent does and what the auditor decides is drawn clearly.",
      },
      {
        heading: "Stack",
        explainer: "What's under the hood.",
        body: "Claude agents and skills, a structured knowledge base, document generation.",
      },
    ],
    outcomeDetail:
      "In research and build at Simplitech: an agent suite tested on real audit work, with a clear line between what the agent prepares and what the auditor decides.",
    asides: [
      { line: "\"The AI does the prep. The auditor keeps the judgment.\"", direction: "[long pause] Everyone keeps their weekend." },
      { line: "\"Every key decision still has a human signature on it.\"", direction: "[looks at camera]" },
    ],
    teaser: "AI agents for audit firms. A human approves every key decision.",
  },

  // ── Personal products ──────────────────────────────────────────────────
  {
    title: "FinSights",
    slug: "finsights",
    group: "personal",
    tab: "Personal product",
    organisation: "Personal product, with a co founder",
    role: "Product, design and build",
    years: "2025 to present",
    meta: "With a co founder, 2025 to present",
    selected: 3,
    blurb:
      "Financial data platform for Tanzanian banks: sector overview, bank comparisons, financial statements and macro indicators.",
    outcome: "A working platform that makes Tanzanian bank data comparable at a glance.",
    quip: { line: "\"He had the data. I had the opinions.\"", direction: "[long pause]" },
    link: "https://finsightstz.vercel.app/",
    linkLabel: "Open FinSights",
    cover: "/images/work/finsights.png",
    tagline: "Tanzanian bank data, comparable at a glance.",
    extraFact: { label: "Status", value: "Live" },
    sections: [
      {
        heading: "How it started",
        explainer: "A spreadsheet with potential.",
        body: "A friend had analysed years of Tanzanian bank data. I saw a product in it. We built FinSights together: the analysis is his, and I lead product, design and build.",
      },
      {
        heading: "The problem",
        explainer: "Why it needed to exist.",
        body: "Analysts, institutions and researchers don't have a modern, locally focused way to compare and analyse Tanzanian financial data. What exists is shallow, dated, or not built for this market.",
      },
      {
        heading: "What's in it",
        explainer: "The features so far.",
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
        explainer: "How the data gets to the screen.",
        body: "I designed the path the data takes, from extraction and cleaning to storage, insight and the screen. A plain language AI layer is planned, so users can ask questions instead of hunting through tables. It's positioned for institutions first.",
      },
      {
        heading: "What's next",
        explainer: "Already on the whiteboard.",
        body: "Live data ingestion, more sectors and subscription tiers.",
      },
      {
        heading: "Stack",
        explainer: "What's under the hood.",
        body: "Next.js, React, Supabase, Tailwind. Claude API for the planned insight layer.",
      },
    ],
    outcomeDetail: "A working platform that makes Tanzanian bank data comparable at a glance, built for institutions first.",
    asides: [
      { line: "\"He had the data. I had the opinions.\"", direction: "[long pause]" },
      { line: "\"Spreadsheets are where good data goes to hide.\"", direction: "[looks at camera]" },
    ],
    teaser: "Tanzanian bank data, comparable at a glance.",
  },
  {
    title: "MotoCare",
    slug: "motocare",
    group: "personal",
    tab: "Personal product",
    organisation: "Personal product",
    role: "Product, design and build",
    years: "2025",
    meta: "Product, design and build, 2025",
    onHold: true,
    selected: 4,
    blurb: "A garage for your cars: service history, what they cost you, and reminders before anything is due.",
    outcome: "Version 0.1 built and working. Paused, not abandoned.",
    quip: { line: "\"It's on hold. Like most car services.\"", direction: "[looks at camera]" },
    link: null,
    cover: "/images/work/motocare.png",
    tagline: "A garage for your cars, in your pocket.",
    extraFact: { label: "Status", value: "On hold" },
    sections: [
      {
        heading: "Why",
        explainer: "The glovebox problem.",
        body: "Every car owner has a glovebox full of receipts and a vague memory of when the oil was last changed. MotoCare puts a car's whole life in one place, so the next service is a reminder, not a surprise.",
      },
      {
        heading: "What's in version 0.1",
        explainer: "The features so far.",
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
        explainer: "Where it stands.",
        body: "Started in 2025. Version 0.1 is built and running as an MVP, and it's on hold while my time goes elsewhere. A mobile app is planned.",
      },
      {
        heading: "Stack",
        explainer: "What's under the hood.",
        body: "Next.js, React, TypeScript, Mantine, Supabase for auth and data, Framer Motion.",
      },
    ],
    outcomeDetail: "Version 0.1 is built and working as an MVP. Paused, not abandoned.",
    asides: [
      { line: "\"It's on hold. Like most car services.\"", direction: "[looks at camera]" },
      { line: "\"Version 0.2 is waiting for a free weekend.\"", direction: "[long pause]" },
    ],
    teaser: "A garage for your cars. Currently on hold. It's fine.",
  },
  {
    title: "EM To Do",
    slug: "em-todo",
    group: "personal",
    tab: "Personal product",
    organisation: "Personal product",
    role: "Design and build",
    years: "2024",
    meta: "Design and build, 2024",
    blurb: "An Eisenhower style task app: separate what matters from what just feels urgent.",
    outcome: "Live, and used daily by at least one person. Me.",
    quip: { line: "\"It judges you a little. That's a feature.\"" },
    link: "https://emtodo.vercel.app/",
    linkLabel: "Open EM To Do",
    linkOnFolder: true,
    cover: "/images/work/em-todo.png",
    tagline: "Separate what matters from what just feels urgent.",
    extraFact: { label: "Status", value: "Live" },
    sections: [
      {
        heading: "What I built",
        explainer: "One idea, done properly.",
        body: "A small, mobile first task app built on one idea: good prioritisation is the productivity system, not the tool. Tasks sort by what's important and what's urgent, so the urgent but unimportant ones stop winning.",
      },
      {
        heading: "Stack",
        explainer: "What's under the hood.",
        body: "React Native, Expo, NativeWind, deployed to Vercel.",
      },
    ],
    outcomeDetail: "Live, and used daily by at least one person. Me.",
    asides: [
      { line: "\"It judges you a little. That's a feature.\"" },
      { line: "\"Urgent and important are different things. I built an app to remind myself.\"", direction: "[looks at camera]" },
    ],
    teaser: "A task app that judges you a little.",
  },
];

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
