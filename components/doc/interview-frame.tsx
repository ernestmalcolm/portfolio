"use client";

import Image from "next/image";
import * as React from "react";

import { HandNote } from "@/components/doc/hand-note";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type InterviewFrameProps = {
  /** "home" is 300 by 340 with Snap zoom, "about" is 260 by 300 */
  size?: "home" | "about";
  note?: string;
  priority?: boolean;
  className?: string;
};

/** The portrait with a lower third caption bar. On home, Snap zoom punches in on the face. */
export function InterviewFrame({ size = "home", note, priority = false, className }: InterviewFrameProps) {
  const [zoomed, setZoomed] = React.useState(false);
  const home = size === "home";

  return (
    <figure className={cn("m-0 w-full", home ? "max-w-[300px]" : "max-w-[260px]", className)}>
      {note &&
        (home ? (
          <HandNote decorative arrow="down" size={34} rotate={-3} as="div" className="mb-1.5 ml-3.5 leading-none">
            {note}
          </HandNote>
        ) : (
          <HandNote decorative size={32} rotate={-3} className="mb-1.5 ml-2.5 leading-none">
            {note}
          </HandNote>
        ))}
      <div className={cn("relative overflow-hidden bg-[#3A3F45]", home ? "aspect-[300/340]" : "aspect-[260/300]")}>
        <Image
          src={siteConfig.photo}
          alt="Ernest Mwinchumu, seated, in a navy blazer"
          fill
          priority={priority}
          sizes={home ? "300px" : "260px"}
          className={cn(
            "object-cover object-[50%_14%]",
            home && "origin-[48%_22%] transition-transform duration-[140ms] ease-[cubic-bezier(.2,.9,.2,1)] motion-reduce:transition-none",
            zoomed && "scale-[1.55]",
          )}
        />
        <figcaption
          className={cn(
            "absolute left-0 border-l-[5px] border-marker bg-camera/[0.88] py-2 pl-3.5 pr-3 text-white",
            home ? "bottom-[18px] right-7" : "bottom-4 right-6",
          )}
        >
          <span className={cn("block font-condensed font-bold", home ? "text-[19px]" : "text-lg", "leading-[1.15]")}>
            {siteConfig.name}
          </span>
          <span className="block text-[13px] text-[#E3E6EA]">{siteConfig.title}</span>
        </figcaption>
      </div>
      {home && (
        <button
          type="button"
          aria-pressed={zoomed}
          onClick={() => setZoomed((z) => !z)}
          className="mt-2.5 min-h-[44px] rounded border border-muted bg-transparent px-3.5 font-mono text-[13px] text-ink hover:bg-white/50"
        >
          {zoomed ? "Pull back out" : "Snap zoom"}
        </button>
      )}
    </figure>
  );
}
