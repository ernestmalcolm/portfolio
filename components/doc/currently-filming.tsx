"use client";

import { motion, type Variants } from "motion/react";
import * as React from "react";

import { useRevealPhase } from "@/components/motion/reveal";
import { currentlyFilming } from "@/content/show";

// The clapper bar snaps shut on its left hinge
const clap: Variants = {
  in: { rotate: 0, transition: { type: "spring", stiffness: 600, damping: 22, delay: 0.25 } },
  below: { rotate: -8, transition: { duration: 0 } },
  above: { rotate: -8, transition: { duration: 0 } },
};

/** Dark slate with a clapperboard stripe and the current scenes */
export function CurrentlyFilming() {
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
        {currentlyFilming.scenes.map((scene) => (
          <li key={scene.scene} className="flex flex-wrap gap-x-6 gap-y-1 border-t border-strip px-[26px] py-[18px]">
            <span className="shrink-0 basis-[150px] font-mono text-[13px] text-marker">{scene.scene}</span>
            <span className="min-w-0 flex-[1_1_360px] text-base">{scene.body}</span>
          </li>
        ))}
      </ul>
      <p className="border-t border-strip px-[26px] pb-[18px] pt-3.5 font-mono text-xs text-camera-muted">
        {currentlyFilming.footer}
      </p>
    </div>
  );
}
