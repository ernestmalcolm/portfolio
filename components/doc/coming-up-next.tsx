import { Link } from "next-view-transitions";

import { Reveal } from "@/components/motion/reveal";
import type { ComingUp } from "@/content/show";

/** Dark full width card pointing to the next episode */
export function ComingUpNext({ next }: { next: ComingUp }) {
  const inner = (
    <>
      <span>
        <span className="block font-mono text-xs text-marker">{next.label}</span>
        <span className="block font-condensed text-[30px] font-bold leading-[1.15]">{next.title}</span>
      </span>
      <span className="max-w-[30rem] text-[15px] text-credits-text">{next.blurb}</span>
    </>
  );
  const className =
    "on-dark flex flex-wrap items-center justify-between gap-x-7 gap-y-2 rounded bg-camera px-8 py-[26px] text-white no-underline hover:bg-strip hover:text-white";

  return (
    <Reveal as="section" aria-label="Coming up next" className="container-page pb-[88px] pt-[88px]">
      {next.href.startsWith("#") ? (
        <a href={next.href} className={className}>
          {inner}
        </a>
      ) : (
        <Link href={next.href} className={className}>
          {inner}
        </Link>
      )}
    </Reveal>
  );
}
