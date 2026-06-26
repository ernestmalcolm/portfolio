export type WritingPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  published: boolean;
};

export const writingPosts: WritingPost[] = [
  {
    slug: "notes-from-the-build",
    title: "Notes from the build",
    date: "2026-06-01",
    excerpt:
      "Why this portfolio exists, what it is trying to prove, and how the stack supports that story.",
    published: true,
  },
];

export function getWritingPost(slug: string) {
  return writingPosts.find((post) => post.slug === slug && post.published);
}

export function getPublishedPosts() {
  return writingPosts.filter((post) => post.published);
}
