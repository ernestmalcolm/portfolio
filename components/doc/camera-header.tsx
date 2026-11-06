"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { RecClock } from "@/components/doc/rec-clock";
import { RuntimeBar } from "@/components/doc/runtime-bar";
import { episodes } from "@/content/show";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/** Sticky black camera bar: logo, live REC clock, the episode guide and the runtime bar */
export function CameraHeader() {
  const pathname = usePathname();
  const listRef = useRef<HTMLUListElement>(null);

  // On mobile the guide scrolls sideways, so bring the current episode into view
  useEffect(() => {
    const list = listRef.current;
    const current = list?.querySelector<HTMLElement>('[aria-current="page"]');
    if (!list || !current || list.scrollWidth <= list.clientWidth) return;
    list.scrollLeft = current.parentElement!.offsetLeft - 32;
  }, [pathname]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : href.startsWith("/") && (pathname === href || pathname.startsWith(`${href}/`));

  return (
    <header className="on-dark sticky top-0 z-40 bg-camera text-camera-text">
      <div className="container-page flex flex-wrap items-center justify-between gap-x-3.5 gap-y-1 pt-3 min-[900px]:py-3.5">
        <div className="flex items-center gap-[18px] font-mono text-[13px]">
          <Link
            href="/"
            aria-label={`${siteConfig.name}, home`}
            className="text-[19px] font-semibold text-white no-underline hover:text-white"
          >
            &lt;EM/&gt;
          </Link>
          <RecClock />
          <span className="hidden text-camera-muted min-[380px]:inline">CAM B</span>
        </div>
        <nav aria-label="Episode guide" className="-mx-8 w-[calc(100%+4rem)] min-[900px]:mx-0 min-[900px]:w-auto">
          <ul
            ref={listRef}
            className="relative flex gap-x-[22px] gap-y-1.5 overflow-x-auto whitespace-nowrap px-8 pb-2.5 pt-1.5 text-sm [scrollbar-width:none] min-[900px]:flex-wrap min-[900px]:overflow-visible min-[900px]:p-0"
          >
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
      <RuntimeBar />
    </header>
  );
}
