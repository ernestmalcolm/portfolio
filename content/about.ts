import type { Quip } from "@/content/projects";

export type InterviewAnswer = {
  question: string;
  answer: string;
  /** Italic stage direction after the answer */
  direction?: string;
};

/** Ep 3 interview on /about */
export const interview = {
  timecode: "00:11:42",
  timecodeLabel: "The interview",
  title: "The interview",
  explainer: "In my own words.",
  answers: [
    {
      question: "So what do you actually do?",
      answer:
        "I lead product, design, engineering and partner integrations for Simplify at Simplitech. I decide what we build and why, talk to customers, design features before they're built, direct developers, and lead our research into where the company goes next, including AI for audit and compliance.",
    },
    {
      question: "Is that one job?",
      answer:
        "It's the overlap. Understanding the market, turning it into a product, getting the tech right, and making sure the organisation and the business case hold together. Lately I direct more of the code than I write, often through AI agents.",
      direction: "[looks at camera]",
    },
    {
      question: "And outside Simplitech?",
      answer: "I consult for businesses on product, digital presence and tech, and I build my own products on the side.",
    },
    {
      question: "What got you from intern to Tech Lead?",
      answer:
        "People who trusted me early, and work that stretched me. Leading our first mobile app was the big one. I learned most by staying close to customers and to the team, and by owning the result, not just the task.",
    },
  ] satisfies InterviewAnswer[],
};

/** The two questions teased on the home page */
export const homeInterview: InterviewAnswer[] = [
  {
    question: "What do you care about most in the work?",
    answer:
      "That it actually helps someone. A feature isn't done when it ships. It's done when the person on the other side can use it without needing to call us.",
  },
  {
    question: "And what does a Tech Lead actually do?",
    answer:
      "Translate. The business, the customer, the regulator and the developers all speak different languages. I turn them into one decision.",
  },
];

/** The home page receipt: current roles, each with a one line outline */
export const receiptRoles: { label: string; detail: string }[] = [
  { label: "Tech Lead, Simplitech", detail: "Product, design and tech for Simplify across web, mobile, API and WhatsApp" },
  { label: "Research and Product Lead", detail: "AI agents for audit firms, with a human approving every key decision" },
  { label: "Tech Consultant", detail: "Product discovery and websites for other businesses" },
  { label: "Builder, on the side", detail: "My own products: FinSights, MotoCare, EM To Do" },
];

export const growth = {
  timecode: "00:14:03",
  timecodeLabel: "Intern to Tech Lead",
  title: "Intern to Tech Lead in 18 months",
  explainer: "How I got here.",
  paragraphs: [
    "I joined Simplitech as an intern in November 2022. My first jobs were small: design documents for user journeys, a Contact Us flow to sales, bug fixes from user feedback.",
    "By August 2023 I was a Software Engineer. By May 2024 I was Tech Lead. Somewhere in between I led an external consultant through building our first mobile app, then took it over full time.",
  ],
  quip: { line: "\"The intern desk is still there. I check on it sometimes.\"", direction: "[looks at camera]" } satisfies Quip,
  /** The About receipt */
  promotions: [
    { label: "Intern", aside: "Nov 2022" },
    { label: "Software Engineer", aside: "Aug 2023" },
    { label: "Tech Lead", aside: "May 2024" },
    { label: "Research and Product Lead", aside: "2025" },
    { label: "Tech Consultant", aside: "2026" },
  ],
};

export const branchRules = {
  /** Short version on the home page */
  homeTitle: "Branch rules (how I work)",
  home: [
    "Discovery first.",
    "Design and prototype before anyone builds.",
    "Test before release. Every time.",
    "No meeting without an agenda.",
  ],
  homeFooter: "Laminated. Violations will be noted. In a binder.",
  /** Full version on /about */
  timecode: "00:17:40",
  timecodeLabel: "B-roll: the kitchen wall",
  title: "How I work",
  explainer: "The way I run product work.",
  intro: "Posted by the kettle. Laminated, so nobody can argue with it.",
  sheetTitle: "Branch rules",
  about: [
    "Discovery first. Talk to the customer and the business before anyone designs anything.",
    "Design it, prototype it, and write requirements a team can build from.",
    "Test before release. Every time. No \"it worked on my machine\".",
    "Report after release, so the next decision is a better one.",
    "Design and build in one pair of hands, so less gets lost in handover.",
    "No meeting without an agenda. No agenda without a reason.",
  ],
  aboutFooter: "Violations will be noted. In a binder.",
};

export const leadership = {
  timecode: "00:18:30",
  title: "Leadership",
  explainer: "How I lead the team.",
  items: [
    "Direct backend and remote developers, and keep every important technical decision written down.",
    "Review key work before it ships, and unblock people within a day or two.",
    "Send a report every week, so nobody has to ask where things are.",
    "Mentor juniors and interns. I was one recently enough to remember.",
  ],
  quip: { line: "\"Leading is mostly moving things out of people's way.\"", direction: "[long pause] Including meetings." } satisfies Quip,
};

export const strategy = {
  timecode: "00:19:02",
  title: "Strategy",
  explainer: "How I decide what's worth building.",
  memoTitle: "Memo: how I think about strategy",
  items: [
    "Start from the customer, and the rules they live with.",
    "Choose fewer things. Must, should, could, won't. Mostly won't.",
    "Write it down before anyone builds.",
    "Price and position it like a business, not a project.",
    "Measure after release, and change course without ego.",
  ],
  onMyDesk: "Researching where AI fits in audit and compliance work for East African firms.",
};

export type RecordEntry = {
  period: string;
  role: string;
  organisation: string;
  summary: string;
};

export const employmentRecord = {
  timecode: "00:19:15",
  title: "Employment record",
  explainer: "Every role so far, newest first.",
  entries: [
    {
      period: "May 2024 to present",
      role: "Tech Lead and Software Engineer",
      organisation: "Simplitech Limited",
      summary: "Lead Simplify across web, mobile, API and WhatsApp, plus product, design and partner integrations.",
    },
    {
      period: "2025 to present",
      role: "Research and Product Lead, SimplifyAudit",
      organisation: "Simplitech Limited",
      summary: "Lead research and product for an AI agent suite that covers the audit lifecycle.",
    },
    {
      period: "2026 to present",
      role: "Tech Consultant",
      organisation: "FinSol (T) Ltd",
      summary: "Discovery for, and build of, the company website.",
    },
    {
      period: "Aug 2023 to Apr 2024",
      role: "Software Engineer",
      organisation: "Simplitech Limited",
      summary: "Web interfaces, product architecture and API integrations for tax invoicing.",
    },
    {
      period: "Nov 2022 to Jul 2023",
      role: "Software Developer Intern",
      organisation: "Simplitech Limited",
      summary: "User journey design documents, a Contact Us flow to sales, bug fixes from user feedback.",
    },
    {
      period: "Jul 2022 to Oct 2022",
      role: "Frontend Developer Intern",
      organisation: "Oceanware Limited",
      summary: "Built on an event venue booking platform and sped up venue photo loading.",
    },
    {
      period: "Jul 2021 to Oct 2021",
      role: "Software Development Intern",
      organisation: "e-Government Authority, Dodoma",
      summary: "Researched open source alternatives for government productivity tools.",
    },
  ] satisfies RecordEntry[],
};

export const trainingRecords = {
  title: "Training records",
  entries: [
    "BSc Computer Science (Honours), University of Dar es Salaam, 2020 to 2023. UDICTI Innovation Hub member; final year project, a construction equipment rental system.",
    "A-Level PCM, Feza Boys' High School, 2018 to 2020. Minister of the Media Ministry.",
  ],
  languages: "Languages: Swahili (native), English (fluent)",
};

export const skills = {
  title: "Skills on file",
  rows: [
    { group: "Product", items: "Strategy, PRDs, roadmaps, customer research, UAT" },
    { group: "Design", items: "Figma, UI/UX, prototyping" },
    { group: "Tech", items: "Next.js, React, React Native, TypeScript, Supabase" },
    { group: "AI", items: "Agents and AI assisted development" },
    { group: "Domain", items: "Fiscal devices, Tanzanian tax, payments, audit" },
  ],
};

export const breakRoom = {
  timecode: "00:26:00",
  timecodeLabel: "B-roll: the break room",
  title: "The break room",
  explainer: "Life outside work.",
  intro: "What's pinned up when I'm not shipping.",
  cards: [
    { title: "Manchester United", body: "Patience training disguised as a hobby." },
    { title: "Tennis and padel", body: "Two sports that ruin my weekends in the best way. Casual football too." },
    { title: "Cars", body: "Toyota and Lexus for reliability. Will defend the BMW 3 Series GT to anyone who asks." },
    { title: "Books", body: "Paper only, read very slowly. Podcasts and videos do the heavy lifting." },
    { title: "Sitcom quotes", body: "I quote one particular office mockumentary more than is strictly professional." },
    { title: "lukakuCanCode", body: "A football joke that became my handle. Lukaku, plus me convincing myself I could actually code." },
    {
      title: "Family and friends",
      body: "The people who keep me grounded, and the reason any of this is worth doing. I show up when it counts, and treat those relationships as the most important thing I'll ever build.",
    },
  ],
};

export const jumpLinks = [
  { label: "Interview", href: "#interview" },
  { label: "How I got here", href: "#growth" },
  { label: "How I work", href: "#rules" },
  { label: "Leadership", href: "#leadership" },
  { label: "Strategy", href: "#strategy" },
  { label: "Record", href: "#record" },
  { label: "The Meeting", href: "#meeting" },
  { label: "Break room", href: "#breakroom" },
];
