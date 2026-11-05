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
