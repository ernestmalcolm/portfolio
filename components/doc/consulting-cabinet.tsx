import Image from "next/image";

import { HandNote } from "@/components/doc/hand-note";
import { TalkingHead } from "@/components/doc/talking-head";
import { Reveal } from "@/components/motion/reveal";
import { consulting } from "@/content/projects";
import { stagger } from "@/lib/motion";

/** A small locked padlock for the confidential files */
function Padlock() {
  return (
    <svg aria-hidden width="16" height="18" viewBox="0 0 16 18" fill="none" className="shrink-0">
      <path d="M4 8 V5.5 C4 3 5.8 1.5 8 1.5 C10.2 1.5 12 3 12 5.5 V8" stroke="#3E3420" strokeWidth="1.8" />
      <rect x="2" y="8" width="12" height="9" rx="1.5" fill="#3E3420" />
      <circle cx="8" cy="12.5" r="1.3" fill="#E3C88A" />
    </svg>
  );
}

/**
 * The consulting cabinet: most client files stay locked (confidential), and one is
 * open, with the live site, a link to the team page and stills from the build.
 */
export function ConsultingCabinet() {
  const { cabinet, featured } = consulting;

  return (
    <div className="mt-16">
      <p className="font-mono text-[13px] text-muted">{cabinet.label}</p>
      <HandNote className="mt-1">{cabinet.note}</HandNote>

      <div className="mt-8 grid gap-10 min-[900px]:grid-cols-[200px_minmax(0,1fr)] min-[900px]:items-start">
        {/* The locked drawer */}
        <ul className="grid grid-cols-2 gap-5 min-[900px]:grid-cols-1" aria-label="Confidential files">
          {cabinet.locked.map((name, index) => (
            <Reveal as="li" key={name} delay={stagger(index)} className="relative pt-[26px]">
              <span className="absolute left-4 top-0 h-[30px] max-w-[calc(100%-2rem)] truncate rounded-t-[6px] bg-[#CDBB92] px-3 pt-1.5 font-mono text-xs text-[#3E3420]">
                {name}
              </span>
              <div className="relative flex h-[118px] items-center justify-center overflow-hidden rounded-folder bg-[#D9C99F] shadow-[0_2px_0_theme(colors.manila.edge)]">
                <p className="rotate-[-10deg] border-[3px] border-double border-stamp px-2 py-0.5 font-mono text-xs font-semibold tracking-[0.08em] text-stamp sm:px-2.5 sm:text-sm sm:tracking-[0.12em]">
                  {cabinet.lockedStamp}
                </p>
                <span className="absolute bottom-2.5 right-2.5">
                  <Padlock />
                </span>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* The open file */}
        <Reveal as="article" delay={stagger(1)} className="min-w-0">
          <div className="relative pt-[30px]">
            <div className="absolute left-7 top-0 h-[34px] rounded-t-[6px] bg-manila-tab px-[18px] pt-1.5 font-mono text-[13px] text-[#3E3420]">
              {featured.tab}
            </div>
            <div className="rounded-folder bg-manila p-4 shadow-[0_2px_0_theme(colors.manila.edge)] sm:px-[22px] sm:pb-[26px] sm:pt-[22px]">
              <div className="bg-white px-[18px] pb-6 pt-5 shadow-[0_1px_3px_rgba(18,20,23,0.18)] sm:px-[22px]">
                <div className="grid gap-6 min-[1100px]:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] min-[1100px]:items-start">
                  <div className="relative aspect-video overflow-hidden border border-[#D5D8D3] bg-[#1A1712]">
                    <Image
                      src={featured.cover}
                      alt={`Home page of the ${featured.title} website`}
                      fill
                      sizes="(min-width: 1100px) 520px, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-condensed text-[28px] font-bold leading-[1.1]">{featured.title}</h3>
                    <p className="mt-1 font-mono text-[13px] text-muted">{featured.meta}</p>
                    <p className="mt-3 text-muted-deep">{featured.blurb}</p>
                    <p className="mt-3 border-t border-dashed border-[#C9CDC6] pt-2.5 text-[15px] text-ink">
                      <span className="font-mono text-xs text-muted">Outcome</span> {featured.outcome}
                    </p>
                    <p className="mt-3.5 flex flex-wrap gap-x-5 gap-y-2">
                      {featured.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold underline"
                        >
                          {link.label}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      ))}
                    </p>
                  </div>
                </div>

                {/* Stills from the build */}
                <p className="mt-6 font-mono text-xs text-muted">{featured.stillsLabel}</p>
                <ul className="mt-2.5 grid grid-cols-3 gap-2.5 sm:gap-4">
                  {featured.stills.map((still) => (
                    <li key={still.src}>
                      <figure className="m-0">
                        <div className="relative aspect-video overflow-hidden border border-[#D5D8D3] bg-[#1A1712]">
                          <Image
                            src={still.src}
                            alt={`${featured.title} website: ${still.caption}`}
                            fill
                            sizes="(min-width: 1100px) 280px, 33vw"
                            className="object-cover object-top"
                          />
                        </div>
                        <figcaption className="mt-1.5 font-mono text-[11px] text-muted sm:text-xs">
                          {still.caption}
                        </figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <TalkingHead quip={featured.quip} className="mt-3.5" />
        </Reveal>
      </div>
    </div>
  );
}
