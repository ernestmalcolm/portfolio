"use client";

import { motion, type Variants } from "motion/react";
import * as React from "react";

import { HandNote } from "@/components/doc/hand-note";
import { useRevealPhase, WriteIn } from "@/components/motion/reveal";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

type EpisodeCardProps = {
  /** Small mono label, for example "Season 1, Episode 2" */
  label: string;
  title: string;
  id?: string;
  /** Confident line in white */
  tagline?: string;
  /** Handwritten explainer in yellow */
  explainer?: string;
  as?: "h1" | "h2";
  className?: string;
};

// A cut to a title card: the words fade up out of black and the title settles
const fromBlack: Variants = {
  in: { opacity: 1, transition: { duration: 0.5, ease } },
  below: { opacity: 0, transition: { duration: 0 } },
  above: { opacity: 0, transition: { duration: 0 } },
};

const settle: Variants = {
  in: { y: 0, transition: { duration: 0.5, ease } },
  below: { y: 12, transition: { duration: 0 } },
  above: { y: 12, transition: { duration: 0 } },
};

/** Black episode title card */
export function EpisodeCard({ label, title, id, tagline, explainer, as: Tag = "h1", className }: EpisodeCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const phase = useRevealPhase(ref, { piece: true });
  const MotionTag = motion[Tag];

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={phase}
      className={cn("on-dark bg-camera px-8 py-11 text-center text-white", className)}
    >
      <motion.div variants={fromBlack}>
        <p className="font-mono text-[13px] text-camera-muted">{label}</p>
        <MotionTag
          variants={settle}
          id={id}
          className={cn(
            "mt-1.5 font-condensed font-bold",
            Tag === "h1" ? "text-[2.75rem] sm:text-[56px]" : "text-[2.5rem] sm:text-5xl",
            "leading-[1.05]",
          )}
        >
          {title}
        </MotionTag>
        {tagline && (
          <p className="mx-auto mt-3.5 max-w-[46rem] font-condensed text-[1.625rem] font-bold leading-[1.15] sm:text-[30px]">
            {tagline}
          </p>
        )}
        {explainer && (
          <WriteIn delay={0.2}>
            <HandNote color="text-marker" size={32} className="mx-auto mt-2 max-w-[60rem] max-sm:!text-[27px]">
              {explainer}
            </HandNote>
          </WriteIn>
        )}
      </motion.div>
    </motion.div>
  );
}
