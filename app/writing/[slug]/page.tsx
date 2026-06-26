import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getPublishedPosts, getWritingPost } from "@/content/writing/index";
import { getMdxContent } from "@/lib/mdx";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getWritingPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function WritingPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getWritingPost(slug);

  if (!post) notFound();

  const mdx = await getMdxContent(slug);
  if (!mdx) notFound();

  return (
    <main className="pb-24 pt-28 md:pt-32">
      <article className="mx-auto max-w-3xl px-6">
        <Link
          href="/writing"
          className="text-sm text-muted-foreground hover:text-coral"
        >
          ← Back to writing
        </Link>
        <header className="mt-6">
          <time
            dateTime={post.date}
            className="text-sm text-muted-foreground"
          >
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <h1 className="mt-2">{post.title}</h1>
          <p className="mt-3 text-muted-foreground">{post.excerpt}</p>
        </header>
        <div className="article-content mt-10">{mdx.content}</div>
      </article>
    </main>
  );
}
