export const bio = [
  "I lead product, design, engineering and partner integrations for Simplify at Simplitech, a business platform used by about 4,000 Tanzanian businesses.",
  "The title covers a lot. I decide what we build and why, talk to customers, design features before they're built, direct developers, manage partner integrations and report to stakeholders every week. I also lead our research into where the company goes next, including AI for audit and compliance.",
  "My work isn't one discipline. It's the overlap: understanding the market, turning it into a product, getting the tech right and making sure the organisation and the business case hold together. Lately I direct more of the code than I write, often through AI agents, so my time goes into decisions, design and quality.",
  "Outside Simplitech I consult for businesses on product, digital presence and tech, and I build my own products on the side.",
];

export const howIWork =
  "Discovery first. I talk to the customer and the business before anyone designs anything. Then I design it, prototype it, and write requirements a team can build from. I direct the build, test it before release and report on it after. Design and build in one pair of hands means less gets lost in handover, and thinking about the business means the screens have a reason to exist.";

export const growthStory = [
  "I joined Simplitech as an intern in November 2022. My first jobs were small: design documents for user journeys, a Contact Us flow to sales, bug fixes from user feedback.",
  "By August 2023 I was a Software Engineer. By May 2024 I was Tech Lead. Somewhere in between I led an external consultant through building our first mobile app, then took it over full time. Intern to Tech Lead took about 18 months.",
];

export type TimelineEntry = {
  period: string;
  role: string;
  organisation: string;
  summary: string;
};

export const experience: TimelineEntry[] = [
  {
    period: "May 2024 to present",
    role: "Tech Lead and Software Engineer",
    organisation: "Simplitech Limited",
    summary:
      "Lead Simplify's channels (web, mobile, API, WhatsApp chatbot), product, design and partner integrations.",
  },
  {
    period: "2025 to present",
    role: "Research and Product Lead, SimplifyAudit",
    organisation: "Simplitech Limited",
    summary:
      "Lead the research and product for an AI agent suite that covers the audit lifecycle for audit firms.",
  },
  {
    period: "2026 to present",
    role: "Tech Consultant",
    organisation: "FinSol (T) Ltd",
    summary:
      "Discovery for and build of the company website, and product definition for a business portal.",
  },
  {
    period: "Aug 2023 to Apr 2024",
    role: "Software Engineer",
    organisation: "Simplitech Limited",
    summary:
      "Web interfaces for SimplifyVFD, product architecture, API integrations for tax invoicing.",
  },
  {
    period: "Nov 2022 to Jul 2023",
    role: "Software Developer Intern",
    organisation: "Simplitech Limited",
    summary:
      "User journey design documents, a Contact Us flow to sales, bug fixes from user feedback.",
  },
  {
    period: "Jul 2022 to Oct 2022",
    role: "Frontend Developer Intern",
    organisation: "Oceanware Limited",
    summary:
      "Built on Ukumbi Tz, an event venue booking platform, and sped up venue photo loading (Next.js, Mantine).",
  },
  {
    period: "Jul 2021 to Oct 2021",
    role: "Software Development Intern",
    organisation: "e-Government Authority, Dodoma",
    summary:
      "Researched open source alternatives for government productivity tools and documented the chosen solution.",
  },
];

export const education: TimelineEntry[] = [
  {
    period: "Nov 2020 to Jul 2023",
    role: "BSc Computer Science (Honours)",
    organisation: "University of Dar es Salaam",
    summary:
      "Member of the UDICTI Innovation Hub. Final year project: a construction equipment rental system (Next.js, Mantine, Supabase).",
  },
  {
    period: "May 2018 to Jul 2020",
    role: "A-Level, PCM",
    organisation: "Feza Boys' High School, Dar es Salaam",
    summary:
      "Minister of the Media Ministry, Media Club, Time to Help Charity Club.",
  },
];

export const languages = "Swahili (native), English (fluent)";

export const skills: { group: string; items: string }[] = [
  {
    group: "Product and leadership",
    items:
      "Product strategy, PRDs, roadmaps, MoSCoW prioritisation, customer research, UAT, pricing and subscription analysis, stakeholder reporting, directing developers and consultants, Agile delivery",
  },
  {
    group: "Design and tech",
    items:
      "Figma, UI/UX, prototyping, design systems. TypeScript, Next.js, React, Vue, React Native, Expo, Tailwind, Mantine, Node.js, REST APIs, Supabase, Firebase",
  },
  {
    group: "AI and tools",
    items: "Claude based agents and skills, AI assisted development, Git, Cursor, Postman, Jira",
  },
  {
    group: "Domain",
    items: "Fiscal devices (VFD/EFD), Tanzanian tax, payments, audit workflows",
  },
];

export const heading = {
  teaser:
    "Most people here meet technology at a bank counter, a mobile money menu or a government office. I want those moments to just work: products built for Tanzania and East Africa by people who understand the business behind them and the person in front of them. Get it right and millions feel it. Get it wrong and millions queue.",
  paragraphs: [
    "Most people here meet technology at a bank counter, a mobile money menu or a government office. I want those moments to just work: products built for Tanzania and East Africa by people who understand the business behind them and the person in front of them. Get it right and millions feel it. Get it wrong and millions queue.",
    "That's why I'm drawn to product strategy and digital leadership where the reach is real: banks, telecoms, payments and the public systems everyone relies on. Over time I want to lead digital work at that scale, advise organisations on getting their product and digital strategy right, and bring that thinking to boards, especially ones focused on youth and innovation.",
    "Everything I've done so far, from intern to Tech Lead, from code to customers to strategy, is practice for that.",
  ],
};

export const beyondWork: { title: string; body: string }[] = [
  {
    title: "Football",
    body: "Manchester United fan. Patience training disguised as a hobby. I also play casual football.",
  },
  {
    title: "Tennis and padel",
    body: "The two sports that have ruined my weekends in the best possible way.",
  },
  {
    title: "Cars",
    body: "Toyota and Lexus for reliability. A quiet admiration for BMW. I will defend the 3 Series GT over the 5 Series GT to anyone who asks, and some who don't.",
  },
  {
    title: "Books",
    body: "Paper only, because on a screen the phone always wins. I read very slowly and journal the takeaways, so my reading list is basically a long term investment. Podcasts at 1.5x, books at 0.5x. It averages out.",
  },
  {
    title: "The Office",
    body: "I quote it more than is strictly professional.",
  },
  {
    title: "lukakuCanCode",
    body: "My handle started as a football joke: Lukaku, plus me convincing myself I could actually code. It stuck.",
  },
  {
    title: "Family and friends",
    body: "The people who keep me grounded, and the reason any of this is worth doing. I make time for them, show up when it counts, and treat those relationships as the most important thing I'll ever build.",
  },
];

/** Line items for the receipt's "Print another" button on /about */
export const receiptJokes: { item: string; price: string }[] = [
  { item: "Receipt sent to WhatsApp", price: "Shared, not filed" },
  { item: "Tax compliance, made boring", price: "For you. Thrilling for me" },
  { item: "Patience, via Man United", price: "Season ticket" },
  { item: "Reading list, paper only", price: "Long term investment" },
  { item: "Podcasts 1.5x, books 0.5x", price: "Averages out" },
  { item: "3 Series GT over 5 Series GT", price: "Unsolicited, free" },
  { item: "Joke about syntax", price: "No reaction" },
  { item: "UDP joke", price: "You might not get it" },
  { item: "Book on anti gravity", price: "Can't put it down" },
  { item: "Startup therapy session", price: "Unresolved dependencies" },
  { item: "Bears. Beets. Battlestar Galactica.", price: "Fact" },
];
