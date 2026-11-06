/**
 * The documentary frame around every page: the episode guide, the REC
 * timecode per page, the "Previously on" lines, Reception and the credits.
 */

export const episodes = [
  { number: 1, title: "Pilot", href: "/" },
  { number: 2, title: "The Work Files", href: "/work" },
  { number: 3, title: "Personnel File", href: "/about" },
  { number: 4, title: "Memos", href: "/writing" },
  { number: 5, title: "Reception", href: "#reception" },
] as const;

/** The REC timecode in the camera header, by route. First match wins. */
export const timecodes: { match: (pathname: string) => boolean; code: string }[] = [
  { match: (p) => p === "/", code: "00:00:41:12" },
  { match: (p) => p === "/work", code: "00:04:12:03" },
  { match: (p) => p.startsWith("/work/"), code: "00:05:48:19" },
  { match: (p) => p === "/about", code: "00:11:20:44" },
  { match: (p) => p === "/writing", code: "00:23:05:31" },
  { match: (p) => p.startsWith("/writing/"), code: "00:24:40:08" },
];

/** Shown when no route matches, for example on the 404 page */
export const fallbackTimecode = "00:00:00:00";

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
  intro: "Product work, consulting, or a conversation worth having. Email is fastest.",
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
