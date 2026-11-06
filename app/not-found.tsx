import Link from "next/link";

import { EpisodeCard } from "@/components/doc/episode-card";
import { StageDirection } from "@/components/doc/talking-head";
import { notFound } from "@/content/show";

export default function NotFound() {
  return (
    <main>
      <EpisodeCard label={notFound.label} title={notFound.title} explainer={notFound.explainer} />
      <section aria-label="Page not found" className="bg-panel">
        <div className="container-page py-[88px]">
          <p className="max-w-[36rem] text-lg text-muted-deep">{notFound.body}</p>
          <StageDirection className="mt-2.5 block">{notFound.direction}</StageDirection>
          <Link
            href={notFound.link.href}
            className="mt-7 inline-flex min-h-[48px] items-center rounded bg-camera px-[26px] font-semibold text-white no-underline hover:bg-strip hover:text-white"
          >
            {notFound.link.label}
          </Link>
        </div>
      </section>
    </main>
  );
}
