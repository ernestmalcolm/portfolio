import type { Metadata } from "next";
import Link from "next/link";

import { PageBackdrop } from "@/components/page-backdrop";
import { Reveal } from "@/components/reveal";
import { getPublishedPosts } from "@/content/writing/index";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Ernest Mwinchumu on product, digital in Tanzania and East Africa, and the work in between.",
};

export default function WritingPage() {
  const posts = getPublishedPosts();

  return (
    <main className="container-page relative isolate pb-24 pt-16 md:pt-24">
      <PageBackdrop />
      <Reveal>
        <h1>Writing</h1>
        <p className="mt-6 max-w-prose text-xl leading-snug">
          Longer thoughts on product, on digital in Tanzania and East Africa,
          and on the work in between.
        </p>
      </Reveal>

      {posts.length === 0 ? (
        <p className="mt-12 text-muted">
          Nothing published yet. The first post is on its way.
        </p>
      ) : (
        <ul className="mt-12 border-b border-line">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="grid gap-1 border-t border-line py-8 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-8"
            >
              <time dateTime={post.date} className="text-sm text-muted">
                {formatDate(post.date)}
              </time>
              <Reveal>
                <article>
                  <h2 className="font-sans text-xl font-semibold tracking-normal">
                    <Link
                      href={`/writing/${post.slug}`}
                      className="hover:text-coral hover:underline hover:underline-offset-[3px]"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 max-w-prose text-muted">{post.excerpt}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
