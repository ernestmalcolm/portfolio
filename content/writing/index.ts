export type WritingPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  published: boolean;
};

export const writingPosts: WritingPost[] = [
  {
    slug: "intern-to-tech-lead-and-whats-next",
    title: "From intern to Tech Lead, and what comes next",
    date: "2026-11-05",
    excerpt:
      "How I got here, what I believe about digital in Tanzania, and what I hope you take away from this site.",
    published: true,
  },
];

export function getWritingPost(slug: string) {
  return writingPosts.find((post) => post.slug === slug && post.published);
}

export function getPublishedPosts() {
  return writingPosts
    .filter((post) => post.published)
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** Copy around the memos */
export const memoPage = {
  pileTimecode: "00:23:20",
  pileLabel: "The memo pile",
  to: "Whoever is reading this",
  from: "Ernest Mwinchumu",
  readLink: "Read the memo",
  backLink: "Back to the memos",
  kicker: "Interoffice memo",
  outbox: {
    label: "Outbox",
    body: "More memos are being drafted. Some of them will even be sent.",
  },
  quip: { line: "\"I write slower than I read. And I read very slowly.\"", direction: "[long pause]" },
  signature: "Ernest",
  cc: "cc: the intern desk",
};
