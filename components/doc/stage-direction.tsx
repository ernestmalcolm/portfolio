"use client";

import { motion } from "motion/react";

import { beat } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/** `[looks at camera]` style direction. Inside a Reveal it lands a beat after its line. */
export function StageDirection({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.span variants={beat} className={cn("font-mono text-[13px] italic text-muted", className)}>
      {children}
    </motion.span>
  );
}
