import type { Metadata } from "next";
import Link from "next/link";

import { ComingUpNext } from "@/components/doc/coming-up-next";
import { EpisodeCard } from "@/components/doc/episode-card";
import { PreviouslyOn } from "@/components/doc/previously-on";
import { TalkingHead } from "@/components/doc/talking-head";
import { Timecode } from "@/components/doc/timecode";
import { comingUpNext, episodeCards, previouslyOn } from "@/content/show";
import { getPublishedPosts, memoPage } from "@/content/writing/index";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Memos",
  description:
    "Ernest Mwinchumu on product, digital in Tanzania and East Africa, and the work in between.",
};

export default function WritingPage() {
  const posts = getPublishedPosts();

  return (
    <main>
      <PreviouslyOn>{previouslyOn.writing}</PreviouslyOn>
      <EpisodeCard {...episodeCards.writing} />

      <section aria-label={memoPage.pileLabel} className="bg-panel">
        <div className="container-page py-[88px]">
          <Timecode code={memoPage.pileTimecode} label={memoPage.pileLabel} />
          <ul className="mt-[18px] flex max-w-[860px] flex-col gap-[22px]">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/writing/${post.slug}`}
                  className="group block bg-white px-6 py-[30px] text-ink no-underline shadow-[0_10px_26px_rgba(18,20,23,0.1)] hover:text-ink sm:px-[34px]"
                >
                  <dl className="grid grid-cols-[60px_minmax(0,1fr)] gap-x-3 gap-y-0.5 font-mono text-[13px] text-muted">
                    <dt>To</dt>
                    <dd>{memoPage.to}</dd>
                    <dt>Date</dt>
                    <dd>
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </dd>
                  </dl>
                  <h2 className="mt-3.5 font-condensed text-[30px] font-bold leading-[1.15] group-hover:text-pen">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-muted-deep">{post.excerpt}</p>
                  <span className="mt-3 inline-block font-semibold text-pen underline group-hover:text-pen-dark">
                    {memoPage.readLink}
                  </span>
                </Link>
              </li>
            ))}
            <li className="border-2 border-dashed border-[#A9A592] px-[26px] py-[22px] text-muted">
              <p className="font-mono text-[13px]">{memoPage.outbox.label}</p>
              <p className="mt-1.5">{memoPage.outbox.body}</p>
            </li>
          </ul>
          <TalkingHead quip={memoPage.quip} className="mt-7 max-w-[620px]" />
        </div>
      </section>

      <ComingUpNext next={comingUpNext.writing} />
    </main>
  );
}
