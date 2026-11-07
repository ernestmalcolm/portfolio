import Link from "next/link";

import { ComingUpNext } from "@/components/doc/coming-up-next";
import { EpisodeCard } from "@/components/doc/episode-card";
import { StageDirection } from "@/components/doc/talking-head";
import { Reveal } from "@/components/motion/reveal";
import { Beet } from "@/components/props/office-props";
import { comingUpNext, notFound } from "@/content/show";

export default function NotFound() {
  return (
    <main>
      <EpisodeCard label={notFound.label} title={notFound.title} explainer={notFound.explainer} />
      <section aria-label="Page not found" className="bg-panel">
        <Reveal className="container-page relative py-14 sm:py-[88px]">
          <p className="max-w-[36rem] text-lg text-muted-deep">{notFound.body}</p>
          <StageDirection className="mt-2.5 block">{notFound.direction}</StageDirection>
          <Link
            href={notFound.link.href}
            className="mt-7 inline-flex min-h-[48px] items-center rounded bg-camera px-[26px] font-semibold text-white no-underline hover:bg-strip hover:text-white"
          >
            {notFound.link.label}
          </Link>
          {/* Prop: a beet, level with the button */}
          <Beet className="absolute bottom-14 right-8 h-12 w-12 sm:bottom-[88px] sm:h-20 sm:w-20" />
        </Reveal>
      </section>
      <ComingUpNext next={comingUpNext.notFound} />
    </main>
  );
}
