"use client";

import { useReducedMotion } from "motion/react";
import * as React from "react";
import { RoughNotation, type types } from "react-rough-notation";

import { useRevealPhase } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type MarkProps = {
  children: React.ReactNode;
  type: types;
  color: string;
  padding?: number | [number, number];
  /** Leave unset for highlights, which fill the line height */
  strokeWidth?: number;
  multiline?: boolean;
  /** Milliseconds to wait before drawing, e.g. until a stamp has landed */
  delay?: number;
  className?: string;
};

/**
 * A hand-drawn mark, like someone marking up a printout. Draws itself on view, redraws
 * after fully leaving and coming back, and simply shows with reduced motion.
 */
export function Mark({ children, type, color, padding = 4, strokeWidth, multiline, delay = 0, className }: MarkProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const phase = useRevealPhase(ref, { piece: true });
  const reduce = useReducedMotion();
  // rough-notation measures on mount, so wait for fonts to settle first
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    document.fonts.ready.then(() => !cancelled && setReady(true));
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    // Relative, so the drawing stays anchored here even when an animated parent drops its transform
    <span ref={ref} className={cn("relative", className)}>
      <RoughNotation
        type={type}
        color={color}
        padding={padding}
        strokeWidth={strokeWidth}
        multiline={multiline}
        animate={!reduce}
        animationDelay={delay}
        animationDuration={700}
        iterations={type === "highlight" ? 1 : 2}
        show={ready && phase === "in"}
      >
        {children}
      </RoughNotation>
    </span>
  );
}
