import { Spotlight } from "@/components/aceternity/spotlight";
import { cn } from "@/lib/utils";

/**
 * Coral spotlight behind a page's opening section (the dot grid is site wide,
 * see SiteBackdrop). `strong`
 * fills the parent (home hero) and adds a second, blue spotlight; otherwise
 * it covers the top of the page at full viewport width.
 */
export function PageBackdrop({ strong = false }: { strong?: boolean }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute -z-10 overflow-hidden",
        strong ? "inset-0" : "left-1/2 top-0 h-[34rem] w-screen -translate-x-1/2",
      )}
      aria-hidden
    >
      <Spotlight className="-left-24 -top-40 md:-left-10 md:-top-24" fill="#FF6B5E" />
      {strong && (
        <Spotlight className="-right-40 -top-24 opacity-60 md:-right-24" fill="#5B7096" />
      )}
    </div>
  );
}
