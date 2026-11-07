"use client";

import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import { useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { RecClock } from "@/components/doc/rec-clock";
import { RuntimeBar } from "@/components/doc/runtime-bar";
import { episodes } from "@/content/show";
import { onScrollFrame } from "@/lib/scroll-frame";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/** On home, each episode's section, in page order. Anything above the first is the Pilot. */
const homeSections: { href: string; id: string }[] = [
  { href: "/work", id: "work" },
  { href: "/about", id: "personnel" },
  { href: "/writing", id: "memos" },
  { href: "#reception", id: "reception" },
];

/** The episode in view: the last section whose top has passed 40% of the screen */
function episodeInView(pathname: string) {
  const line = window.innerHeight * 0.4;
  const sections = pathname === "/" ? homeSections : homeSections.slice(-1);
  let inView: string | null = null;
  for (const section of sections) {
    const el = document.getElementById(section.id);
    if (el && el.getBoundingClientRect().top <= line) inView = section.href;
  }
  return inView;
}

/** Sticky black camera bar: logo, live REC clock, the episode guide and the runtime bar */
export function CameraHeader() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLUListElement>(null);
  const [inView, setInView] = useState<string | null>(null);
  const [atEnd, setAtEnd] = useState(false);

  const isPage = (href: string) =>
    href === "/" ? pathname === "/" : href.startsWith("/") && (pathname === href || pathname.startsWith(`${href}/`));
  const pageHref = episodes.find((episode) => isPage(episode.href))?.href ?? null;
  // Scroll-spy: on home it follows the sections; on every page, Reception takes over at the bottom
  const active = inView ?? pageHref;

  useEffect(() => {
    const check = () => setInView(episodeInView(pathname));
    check();
    return onScrollFrame(check);
  }, [pathname]);

  // On mobile the guide scrolls sideways: keep the active episode in view, and fade the
  // right edge while there are more episodes to swipe to
  const updateEdge = () => {
    const list = listRef.current;
    if (list) setAtEnd(list.scrollLeft + list.clientWidth >= list.scrollWidth - 4);
  };

  useEffect(() => {
    const list = listRef.current;
    const item = list?.querySelector<HTMLElement>("[data-active]")?.parentElement;
    if (list && item && list.scrollWidth > list.clientWidth) {
      const outside =
        item.offsetLeft < list.scrollLeft || item.offsetLeft + item.offsetWidth > list.scrollLeft + list.clientWidth;
      if (outside) list.scrollTo({ left: item.offsetLeft - 32, behavior: reduce ? "auto" : "smooth" });
    }
    updateEdge();
  }, [active, reduce]);

  return (
    <header className="on-dark sticky top-0 z-40 [view-transition-name:camera-header] bg-camera text-camera-text">
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
        <nav
          aria-label="Episode guide"
          className="relative -mx-8 w-[calc(100%+4rem)] min-[900px]:mx-0 min-[900px]:w-auto"
        >
          <ul
            ref={listRef}
            onScroll={updateEdge}
            className="relative flex gap-x-[22px] gap-y-1.5 overflow-x-auto whitespace-nowrap px-8 pb-2.5 pt-1.5 text-sm [scrollbar-width:none] min-[900px]:flex-wrap min-[900px]:overflow-visible min-[900px]:p-0"
          >
            {episodes.map((episode) => {
              const isActive = episode.href === active;
              const current = episode.href === pageHref ? "page" : isActive ? "location" : undefined;
              // Reception is on this page, so it scrolls instead of cutting
              const EpisodeLink = episode.href.startsWith("#") ? "a" : Link;
              return (
                <li key={episode.number}>
                  <EpisodeLink
                    href={episode.href}
                    aria-current={current}
                    data-active={isActive || undefined}
                    className={cn(
                      "border-b-2 border-transparent pb-0.5 text-camera-text no-underline transition-colors hover:text-white",
                      isActive && "border-marker text-white",
                    )}
                  >
                    <span className="font-mono text-camera-muted">Ep {episode.number}</span> {episode.title}
                  </EpisodeLink>
                </li>
              );
            })}
          </ul>
          <span
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-camera to-transparent transition-opacity min-[900px]:hidden",
              atEnd && "opacity-0",
            )}
          />
        </nav>
      </div>
      <RuntimeBar />
    </header>
  );
}
