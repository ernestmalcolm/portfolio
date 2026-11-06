"use client";

import { motion } from "motion/react";
import Image from "next/image";
import * as React from "react";

import { HandNote } from "@/components/doc/hand-note";
import { Mark } from "@/components/motion/mark";
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
          <HandNote decorative arrow="down" size={32} rotate={-3} as="div" className="mb-1.5 ml-3.5 leading-[1.3]">
            <Mark type="underline" color="#2244B8" padding={1} strokeWidth={1.5} multiline delay={300}>
              {note}
            </Mark>
          </HandNote>
        ) : (
          <HandNote decorative size={32} rotate={-3} className="mb-1.5 ml-2.5 leading-none">
            {note}
          </HandNote>
        ))}
      <div className={cn("relative overflow-hidden bg-[#3A3F45]", home ? "aspect-[300/340]" : "aspect-[260/300]")}>
        {/* Snap zoom: a spring punch-in on the face, with a tiny camera shake going in */}
        <motion.div
          initial={false}
          animate={zoomed ? { scale: 1.55, x: [0, -2, 2, 0] } : { scale: 1, x: 0 }}
          transition={{ scale: { type: "spring", stiffness: 420, damping: 30 }, x: { duration: 0.12 } }}
          className="absolute inset-0 origin-[48%_22%]"
        >
          <Image
            src={siteConfig.photo}
            alt="Ernest Mwinchumu, seated, in a navy blazer"
            fill
            priority={priority}
            sizes={home ? "300px" : "260px"}
            className="object-cover object-[50%_14%]"
          />
        </motion.div>
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
