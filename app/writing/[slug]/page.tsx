import { PreviouslyOn } from "@/components/doc/previously-on";
import { previouslyOn } from "@/content/show";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getPublishedPosts, getWritingPost } from "@/content/writing/index";
import { getMdxContent } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

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
    <>
      <PreviouslyOn>{previouslyOn.post}</PreviouslyOn>
    <main className="container-page relative isolate pb-24 pt-12 md:pt-16">
      <p>
        <Link href="/writing" className="link text-sm">
          All writing
        </Link>
      </p>
      <article className="mt-8">
        <header className="max-w-3xl">
          <time dateTime={post.date} className="text-sm text-muted">
            {formatDate(post.date)}
          </time>
          <h1 className="mt-2">{post.title}</h1>
          <p className="mt-6 max-w-prose text-xl leading-snug text-mist">
            {post.excerpt}
          </p>
        </header>
        <div className="prose mt-12">{mdx.content}</div>
      </article>
    </main>
    </>
  );
}
