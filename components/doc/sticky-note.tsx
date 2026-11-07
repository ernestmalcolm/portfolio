"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type StickyNoteProps = {
  children: React.ReactNode;
  /** Small mono label at the top */
  label?: string;
  rotate?: number;
  className?: string;
};

/** Yellow sticky note with a handwritten body */
export function StickyNote({ children, label, rotate = -2, className }: StickyNoteProps) {
  return (
    <motion.div
      initial={false}
      whileHover={{ y: -3, rotate: rotate + 1 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "bg-sticky px-4 pb-5 pt-4 font-hand text-[26px] leading-[1.05] text-ink shadow-[0_6px_14px_rgba(18,20,23,0.14)]",
        className,
      )}
      style={{ rotate }}
    >
      {label && <span className="mb-1.5 block font-mono text-[11px] text-sticky-ink">{label}</span>}
      {children}
    </motion.div>
  );
}
