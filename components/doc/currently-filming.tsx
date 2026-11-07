"use client";

import { motion, type Variants } from "motion/react";
import * as React from "react";

import { useRevealPhase } from "@/components/motion/reveal";
import { currentlyFilming } from "@/content/show";
import { cn } from "@/lib/utils";

// The clapper bar snaps shut on its left hinge
const clap: Variants = {
  in: { rotate: 0, transition: { type: "spring", stiffness: 600, damping: 22, delay: 0.25 } },
  below: { rotate: -8, transition: { duration: 0 } },
  above: { rotate: -8, transition: { duration: 0 } },
};

/** Dark slate with a clapperboard stripe and the current scenes */
/** With `mobileLimit`, phones show only the first scenes; the rest have their own sections below */
export function CurrentlyFilming({ mobileLimit }: { mobileLimit?: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const phase = useRevealPhase(ref, { piece: true });

  return (
    <div ref={ref} className="on-dark min-w-0 rounded bg-camera text-camera-text">
      <motion.div
        aria-hidden
        initial={false}
        animate={phase}
        variants={clap}
        className="h-[26px] origin-bottom-left rounded-t bg-[repeating-linear-gradient(-45deg,#F2F1EC_0_18px,#121417_18px_36px)]"
      />
      <ul>
        {currentlyFilming.scenes.map((scene, index) => (
          <li
            key={scene.scene}
            className={cn(
              "flex flex-wrap gap-x-6 gap-y-1 border-t border-strip px-5 py-3.5 sm:px-[26px] sm:py-[18px]",
              mobileLimit !== undefined && index >= mobileLimit && "hidden sm:flex",
            )}
          >
            <span className="shrink-0 basis-full font-mono sm:basis-[150px] text-[13px] text-marker">
              {scene.scene}
            </span>
            <span className="min-w-0 flex-[1_1_360px] text-base">{scene.body}</span>
          </li>
        ))}
      </ul>
      <p className="border-t border-strip px-5 pb-3.5 pt-3 font-mono sm:px-[26px] sm:pb-[18px] sm:pt-3.5 text-xs text-camera-muted">
        {currentlyFilming.footer}
      </p>
    </div>
  );
}
