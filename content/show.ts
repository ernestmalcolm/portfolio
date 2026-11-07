/**
 * The documentary frame around every page: the episode guide, the
 * "Previously on" lines, Reception and the credits.
 */

export const episodes = [
  { number: 1, title: "Pilot", href: "/" },
  { number: 2, title: "The Work Files", href: "/work" },
  { number: 3, title: "Personnel File", href: "/about" },
  { number: 4, title: "Memos", href: "/writing" },
  { number: 5, title: "Reception", href: "#reception" },
] as const;

export const previouslyOn = {
  work: "Ernest connected the business, the market and the team. Then someone pressed record.",
  caseStudy: "Episode 2 opened the work files. One of them is on hold. It's fine.",
  about: "Episode 2 opened the work files. Ernest claimed to have no favourites. Nobody believed him.",
  writing: "Episode 3 opened the personnel file. A receipt was issued. It was verified.",
  post: "Episode 4 found one memo in the pile. This is it.",
} as const;

export const reception = {
  episode: "Episode 5",
  title: "Reception",
  explainer: "Get in touch: email, phone, or sign the visitor sheet.",
  intro:
    "If this is your kind of story, sign in. Product work, consulting, or a conversation worth having. Email is fastest.",
  stickyNote: "While you were out: someone wants to build something. Call back.",
  formTitle: "Visitor sign-in sheet",
  submit: "Sign in and send",
  sending: "Signing you in",
  success: "Signed in. Ernest will call back.",
};

export const credits: { role: string; name: string }[] = [
  { role: "Directed by", name: "Ernest Mwinchumu" },
  { role: "Produced by", name: "Ernest Mwinchumu" },
  { role: "Product and design", name: "Ernest Mwinchumu" },
  { role: "Engineering", name: "Ernest, and some AI agents" },
  { role: "Filmed on location", name: "Dar es Salaam, Tanzania" },
  { role: "Catering", name: "Coffee" },
  { role: "Emotional support", name: "Family and friends" },
];

export const creditsLines = {
  inspiredBy: "Inspired by The Office. The best show of all time.",
  disclaimer: "No receipts were harmed in the making of this portfolio.",
  copyright: "Filmed in Dar es Salaam. Fully tax compliant.",
};

export type ComingUp = { label: string; title: string; href: string; blurb: string };

/** "Coming up next" cards at the foot of each page */
export const comingUpNext = {
  home: {
    label: "Coming up next: Episode 2",
    title: "The Work Files",
    href: "/work",
    blurb: "Every file, including consulting. Some of them are even finished.",
  },
  notFound: {
    label: "Coming up next: Episode 1",
    title: "Pilot",
    href: "/",
    blurb: "Start from the beginning. It makes more sense that way.",
  },
  work: {
    label: "Coming up next: Episode 3",
    title: "Personnel File",
    href: "/about",
    blurb: "The interview, the branch rules, and a receipt.",
  },
  about: {
    label: "Coming up next: Episode 4",
    title: "Memos",
    href: "/writing",
    blurb: "Long form thoughts. One memo so far. The outbox is optimistic.",
  },
  writing: {
    label: "Coming up next: Episode 5",
    title: "Reception",
    href: "#reception",
    blurb: "Sign the visitor sheet. Someone will actually read it.",
  },
  post: {
    label: "Coming up next: Episode 5",
    title: "Reception",
    href: "#reception",
    blurb: "You read a whole memo. The least you can do is sign the visitor sheet.",
  },
} satisfies Record<string, ComingUp>;

/** One line at the end of each home section, handing over to the next */
export const homeBridges = {
  shortVersion: "That's the summary. Here are the files.",
  work: "So how does one person cover all that?",
  personnel: "Which leaves the real question: what's it all for?",
  meeting: "And right now?",
  currentlyFilming: "Before the credits roll.",
};

/** Episode title cards for each page and for the home page's sections */
export const episodeCards = {
  work: {
    label: "Season 1, Episode 2",
    title: "The Work Files",
    tagline: "Business, product and tech. One person. No translator needed.",
    explainer: "What I lead at Simplitech, what I build on my own, and how I help other businesses.",
  },
  about: {
    label: "Season 1, Episode 3",
    title: "Personnel File",
    tagline: "Product, tech, business. I work in the overlap, and I like it there.",
    explainer: "Who I am, how I lead, and how I think.",
  },
  writing: {
    label: "Season 1, Episode 4",
    title: "Memos",
    explainer: "Product thinking, notes and the occasional opinion, in long form.",
  },
  homeWork: {
    label: "Episode 2",
    title: "The Work Files",
    explainer: "What I lead at Simplitech, and what I build on my own.",
  },
  homePersonnel: {
    label: "Episode 3",
    title: "Personnel File",
    explainer: "Who I am and how I work. The full file is one click away.",
  },
  meeting: {
    label: "Special episode",
    title: "The Meeting",
    explainer: "Where I'm heading: my plans for the next few years, on the whiteboard.",
  },
};

/** The home page, Episode 1 */
export const pilot = {
  label: "Season 1, Episode 1: Pilot. Contains mild product management.",
  stickyLabel: "While you were out",
  sticky: "Now showing: product, design and tech at Simplitech. Open to interesting problems.",
  explainNote: "Let me explain myself.",
  primaryCta: "Email me",
  secondaryCta: { label: "Watch Episode 2: The Work Files", href: "/work" },
  shortVersion: {
    timecode: "00:01:04",
    timecodeLabel: "Talking head",
    title: "The short version",
    explainer: "Who I am, in a few lines.",
    paragraphs: [
      "I lead product, design and tech for Simplify at Simplitech, a fiscal receipts platform used by businesses across Tanzania.",
      "My work sits where the market, the product, the tech and the business case meet. I plan it, design it, and build it, then explain it with a metaphor you didn't ask for.",
    ],
    direction: "[looks at camera]",
    link: { label: "Watch Episode 3: Personnel File", href: "/about" },
    receiptNote: "My roles, itemised. Tax included.",
  },
  workLink: { label: "See every file, including consulting", mobileLabel: "See all files", href: "/work" },
  personnelLinks: [
    { label: "Watch the full interview", href: "/about#interview" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "Strategy", href: "/about#strategy" },
  ],
  latestMemo: {
    timecode: "00:21:30",
    timecodeLabel: "Latest memo",
    title: "From the memo pile",
    explainer: "My latest piece of writing.",
  },
};

export const currentlyFilming = {
  timecode: "00:20:05",
  timecodeLabel: "Now",
  title: "Currently filming",
  explainer: "What I'm working on this season.",
  updated: "Last updated November 2026",
  scenes: [
    { scene: "Scene 1: Simplify", body: "Keeping web, mobile, API and WhatsApp feeling like one product." },
    { scene: "Scene 2: SimplifyAudit", body: "Researching and building AI agents with audit firms." },
    { scene: "Scene 3: Consulting", body: "Product discovery and websites for a few businesses." },
    { scene: "Scene 4: Memos", body: "Writing more about product and digital in Tanzania." },
  ],
  footer: "Take: ongoing. Director: still Ernest.",
};

export const deletedScenes = {
  timecode: "00:22:10",
  timecodeLabel: "Bonus features",
  title: "Deleted scenes",
  explainer: "Just for fun. Outtakes that didn't make the cut.",
  scenes: [
    {
      runtime: "Runtime 47:00",
      scene: "Ernest explains VAT at a family dinner.",
      reason: "Cut for length. And morale.",
    },
    {
      runtime: "Runtime 0:04",
      scene: "Ernest names a variable temp2_final. Ships it.",
      reason: "Cut on the advice of the code reviewer.",
    },
    {
      runtime: "Runtime 1:30",
      scene: "Man United lose. Ernest says [bleep]. Reviews the backlog in silence.",
      reason: "Cut at the request of the backlog.",
    },
    { runtime: "Runtime 6 weeks", scene: "Ernest reads a book. Page 4.", reason: "Still filming." },
  ],
  button: "Play another outtake",
  seeAll: "See all scenes",
  /** The site's one and only "That's what she said" lives here */
  outtakes: [
    "Outtake: 1x Bug fix. Price: 3 new bugs.",
    "Outtake: I told my code a joke. No reaction, just a sense of syntax.",
    "Outtake: Podcasts at 1.5x, books at 0.5x. It averages out.",
    'Outtake: Reviewing a 40 page spec. "Can we make it shorter?" That\'s what she said.',
    "Outtake: Man United and tax law. Rules that make sense to nobody but you.",
  ],
};

export const theMeeting = {
  setting: "Conference room. 10:00. Attendance mandatory.",
  homeLine: "For once, this meeting could not have been an email.",
  aboutParagraphs: [
    "Too much digital work here is built to tick a box, copied from elsewhere, or sold before it's useful. The businesses and people it's meant for deserve products designed for how they actually work.",
    "That's why I'm drawn to product strategy and digital leadership where the reach is real.",
  ],
  signature: "Ernest",
  agendaTitle: "Agenda: where I'm heading",
  agenda: [
    "Raise the bar for digital products and services in Tanzania and East Africa.",
    "Products that understand the businesses and people they're built for.",
    "Lead digital work where the reach is real: finance, telecoms, payments, public systems.",
    "Advise. Then boards, especially youth and innovation.",
  ],
  homeClosing: "Everything so far is practice for that.",
  homeClosingLink: { label: "Read the full memo", href: "/about#meeting" },
  aboutClosing: "Everything so far, from intern to Tech Lead, is practice for that.",
};

export const notFound = {
  label: "Season 1, Episode 404",
  title: "Scene missing",
  explainer: "This page didn't get its fiscal receipt.",
  body: "Whatever was filmed here didn't make the final cut. It may have moved, or it may never have existed.",
  direction: "[looks at camera]",
  link: { label: "Back to Ep 1", href: "/" },
};
