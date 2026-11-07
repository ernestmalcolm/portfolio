import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ComingUpNext } from "@/components/doc/coming-up-next";
import { HandNote } from "@/components/doc/hand-note";
import { PreviouslyOn } from "@/components/doc/previously-on";
import { Reveal } from "@/components/motion/reveal";
import { comingUpNext, previouslyOn } from "@/content/show";
import { getPublishedPosts, getWritingPost, memoPage } from "@/content/writing/index";
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
    <main>
      <PreviouslyOn>{previouslyOn.post}</PreviouslyOn>

      <section aria-label="Memo" className="bg-panel">
        <div className="container-page pb-14 sm:pb-[88px] pt-14">
          <Link href="/writing" className="font-semibold underline">
            {memoPage.backLink}
          </Link>
          <Reveal
            as="article"
            fade
            className="mx-auto mt-6 max-w-[780px] bg-white px-6 pb-[60px] pt-[52px] text-lg leading-[1.7] shadow-[0_14px_36px_rgba(18,20,23,0.12)] sm:px-[60px]"
          >
            <p className="font-condensed text-lg font-bold">{memoPage.kicker}</p>
            <dl className="mt-3.5 grid grid-cols-[64px_minmax(0,1fr)] gap-x-3 gap-y-1 border-b-2 border-ink pb-3.5 font-mono text-sm">
              <dt className="text-muted">To</dt>
              <dd>{memoPage.to}</dd>
              <dt className="text-muted">From</dt>
              <dd>{memoPage.from}</dd>
              <dt className="text-muted">Date</dt>
              <dd>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </dd>
            </dl>
            <h1 className="mt-[26px] font-condensed text-[36px] font-bold leading-[1.05] sm:text-[46px]">
              {post.title}
            </h1>
            <div className="prose mt-4 max-w-none text-lg">{mdx.content}</div>
            <HandNote size={40} className="mt-[22px] leading-none">
              {memoPage.signature}
            </HandNote>
            <p className="mt-[18px] font-mono text-xs text-muted">{memoPage.cc}</p>
          </Reveal>
        </div>
      </section>

      <ComingUpNext next={comingUpNext.post} />
    </main>
  );
}
