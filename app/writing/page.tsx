import type { Metadata } from "next";
import Link from "next/link";

import { getPublishedPosts } from "@/content/writing/index";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes, analysis, and product thinking from Ernest Mwinchumu.",
};

export default function WritingPage() {
  const posts = getPublishedPosts();

  return (
    <main className="pb-24 pt-28 md:pt-32">
      <div className="mx-auto max-w-3xl px-6">
        <h1>Writing</h1>
        <p className="mt-4 text-muted-foreground">
          Product breakdowns, domain explainers, and notes — {siteConfig.name}
          &apos;s thinking in long form.
        </p>

        <ul className="mt-12 space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="rounded-xl border border-border/60 bg-card/40 p-6 transition-colors hover:border-coral/40">
                <time
                  dateTime={post.date}
                  className="text-xs text-muted-foreground"
                >
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <h2 className="mt-2 text-xl font-semibold">
                  <Link href={`/writing/${post.slug}`} className="hover:text-coral">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {post.excerpt}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
