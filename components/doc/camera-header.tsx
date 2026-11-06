"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { episodes, fallbackTimecode, timecodes } from "@/content/show";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/** Black camera bar: logo, REC timecode for this page, and the episode guide */
export function CameraHeader() {
  const pathname = usePathname();
  const timecode = timecodes.find((t) => t.match(pathname))?.code ?? fallbackTimecode;

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : href.startsWith("/") && (pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header className="on-dark bg-camera text-camera-text">
      <div className="container-page flex flex-wrap items-center justify-between gap-3.5 py-3.5">
        <div className="flex items-center gap-[18px] font-mono text-[13px]">
          <Link
            href="/"
            aria-label={`${siteConfig.name}, home`}
            className="text-[19px] font-semibold text-white no-underline hover:text-white"
          >
            &lt;EM/&gt;
          </Link>
          <span className="inline-flex items-center gap-2">
            <span aria-hidden className="inline-block h-2.5 w-2.5 rounded-full bg-rec" />
            <span>
              <span className="sr-only">Recording, timecode </span>REC {timecode}
            </span>
          </span>
          <span className="text-camera-muted">CAM B</span>
        </div>
        <nav aria-label="Episode guide">
          <ul className="flex flex-wrap gap-x-[22px] gap-y-1.5 text-sm">
            {episodes.map((episode) => {
              const current = isCurrent(episode.href);
              return (
                <li key={episode.number}>
                  <Link
                    href={episode.href}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "pb-0.5 text-camera-text no-underline hover:text-white",
                      current && "border-b-2 border-marker",
                    )}
                  >
                    <span className="font-mono text-camera-muted">Ep {episode.number}</span> {episode.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
