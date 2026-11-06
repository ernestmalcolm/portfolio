"use client";

import { motion, type MotionStyle, useInView, useReducedMotion, type Variants } from "motion/react";
import * as React from "react";

import { ease } from "@/lib/motion";
import { useScrollDirection } from "@/lib/use-scroll-direction";

/**
 * Where an element is in its scroll pass:
 * - "in": on screen (also the server render, so content is never hidden without JS)
 * - "out": partly off screen after being in, so it dims and drifts
 * - "below" / "above": fully off screen, parked ready to enter from that side
 */
export type RevealPhase = "in" | "out" | "below" | "above";

/**
 * Tracks an element through each scroll pass. Set pieces (`piece`) skip the "out"
 * state, so they only reset after fully leaving and never stutter at the edge.
 */
export function useRevealPhase(ref: React.RefObject<Element | null>, { piece = false } = {}) {
  const reduce = useReducedMotion();
  const inBand = useInView(ref, { margin: "-10% 0px -10% 0px" });
  const onScreen = useInView(ref);
  const [phase, setPhase] = React.useState<RevealPhase>("in");

  React.useEffect(() => {
    const el = ref.current;
    if (reduce || !el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    if (rect.top >= vh) setPhase("below");
    else if (rect.bottom <= 0) setPhase("above");
    else if (rect.top < vh * 0.9 && rect.bottom > vh * 0.1) setPhase("in");
    else if (!piece) setPhase((current) => (current === "in" ? "out" : current));
  }, [ref, inBand, onScreen, reduce, piece]);

  return reduce ? "in" : phase;
}

type RevealTag = "div" | "section" | "article" | "li" | "ul" | "ol" | "dl" | "p" | "aside" | "figure";

type RevealProps = {
  children: React.ReactNode;
  as?: RevealTag;
  /** Seconds before entering, see `stagger` */
  delay?: number;
  /** Long reading blocks: a single soft fade, no movement, no dimming */
  fade?: boolean;
  className?: string;
  style?: MotionStyle;
  id?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

/**
 * Animates a block in, out and back as the visitor scrolls, aware of direction.
 * Children with "in", "below" and "above" variants (WriteIn, Beat) follow its phase.
 */
export function Reveal({ children, as = "div", delay = 0, fade = false, style, ...rest }: RevealProps) {
  const ref = React.useRef<HTMLElement>(null);
  const phase = useRevealPhase(ref);
  const direction = useScrollDirection();
  const Tag = motion[as] as typeof motion.div;

  const variants: Variants = fade
    ? {
        in: { opacity: 1, transition: { duration: 0.6, ease, delay } },
        out: { opacity: 1 },
        below: { opacity: 0, transition: { duration: 0 } },
        above: { opacity: 0, transition: { duration: 0 } },
      }
    : {
        in: { opacity: 1, y: 0, transition: { duration: 0.5, ease, delay } },
        out: { opacity: 0.4, y: direction === "down" ? -8 : 8, transition: { duration: 0.25, ease } },
        below: { opacity: 0, y: 16, transition: { duration: 0 } },
        above: { opacity: 0, y: -16, transition: { duration: 0 } },
      };

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      initial={false}
      animate={phase}
      variants={variants}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Clip boxes reach past the element so handwriting that leans out isn't cut off
const clipShown = "inset(-30% -6% -30% -6%)";
const clipHidden = "inset(-30% 106% -30% -6%)";

/** Handwritten lines "write in" left to right, a beat after their heading */
export const writeIn: Variants = {
  in: { clipPath: clipShown, transition: { duration: 0.6, ease: "easeOut", delay: 0.15 } },
  below: { clipPath: clipHidden, transition: { duration: 0 } },
  above: { clipPath: clipHidden, transition: { duration: 0 } },
};

type WriteInProps = { children: React.ReactNode; as?: "div" | "span"; delay?: number; className?: string };

export function WriteIn({ children, as = "div", delay = 0, className }: WriteInProps) {
  const Tag = motion[as] as typeof motion.div;
  const variants: Variants = delay
    ? { ...writeIn, in: { clipPath: clipShown, transition: { duration: 0.6, ease: "easeOut", delay: 0.15 + delay } } }
    : writeIn;
  return (
    <Tag variants={variants} className={className}>
      {children}
    </Tag>
  );
}

/** Comic timing: stage directions land 0.4s after their line */
export const beat: Variants = {
  in: { opacity: 1, transition: { duration: 0.35, delay: 0.4 } },
  below: { opacity: 0, transition: { duration: 0 } },
  above: { opacity: 0, transition: { duration: 0 } },
};
