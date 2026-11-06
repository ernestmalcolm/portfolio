"use client";

import { motion, type Variants } from "motion/react";

import { Reveal, WriteIn } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

// After the line writes in, the arrow draws itself down towards the next scene
const draw = (delay: number): Variants => ({
  in: { pathLength: 1, transition: { duration: 0.35, ease: "easeOut", delay } },
  below: { pathLength: 0, transition: { duration: 0 } },
  above: { pathLength: 0, transition: { duration: 0 } },
});

/** Handwritten line at the end of a home section that hands over to the next one */
export function SceneBridge({
  children,
  dark = false,
  className,
}: {
  children: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      as="p"
      className={cn(
        "mt-12 flex items-end gap-1.5 font-hand text-[28px] leading-[1.1] sm:justify-end sm:text-[30px]",
        dark ? "text-marker" : "text-pen",
        className,
      )}
    >
      <WriteIn as="span">{children}</WriteIn>
      <svg
        aria-hidden
        width="34"
        height="40"
        viewBox="0 0 34 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0"
      >
        <motion.path variants={draw(0.7)} d="M6 4 C 22 10, 26 22, 20 36" />
        <motion.path variants={draw(1.05)} d="M13 30 L20 37 L26 29" />
      </svg>
    </Reveal>
  );
}
