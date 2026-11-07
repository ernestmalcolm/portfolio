"use client";

import { motion, type MotionStyle, useReducedMotion, type Variants } from "motion/react";
import * as React from "react";

import { ease } from "@/lib/motion";
import { onScrollFrame } from "@/lib/scroll-frame";
import { useScrollDirection } from "@/lib/use-scroll-direction";

/**
 * Where an element is in its scroll pass:
 * - "in": on screen (also the server render, so content is never hidden without JS)
 * - "out": clipped by a screen edge on the way out, so it dims and drifts
 * - "below" / "above": fully off screen, parked ready to enter from that side
 */
export type RevealPhase = "in" | "out" | "below" | "above";

/** The visible strip of the page: from under the sticky camera header to the bottom */
function viewport() {
  const header = document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;
  return { top: Math.max(header, 0), bottom: window.innerHeight };
}

/** Where an element sits against the visible strip right now */
function measure(el: Element, current: RevealPhase, piece: boolean): RevealPhase {
  const rect = el.getBoundingClientRect();
  const view = viewport();
  const edge = (view.bottom - view.top) * 0.1;
  if (rect.top >= view.bottom) return "below";
  if (rect.bottom <= view.top) return "above";
  // Fully visible, or well into the strip: always in
  if (rect.top >= view.top && rect.bottom <= view.bottom) return "in";
  if (rect.top < view.bottom - edge && rect.bottom > view.top + edge) return "in";
  // Clipped by an edge. Anything parked comes in as soon as it shows, so nothing on
  // screen is ever left hidden; on the way out blocks dim, set pieces hold until fully gone
  if (current === "below" || current === "above") return "in";
  if (piece) return current;
  return current === "in" ? "out" : current;
}

/**
 * Tracks an element through each scroll pass, rechecked on every scroll frame and
 * resize. Set pieces (`piece`) skip the "out" state, so they only reset after fully
 * leaving and never stutter at the edge.
 */
export function useRevealPhase(ref: React.RefObject<Element | null>, { piece = false } = {}) {
  const reduce = useReducedMotion();
  const [phase, setPhase] = React.useState<RevealPhase>("in");

  React.useEffect(() => {
    if (reduce) return;
    const check = () => {
      const el = ref.current;
      if (el) setPhase((current) => measure(el, current, piece));
    };
    check();
    return onScrollFrame(check);
  }, [ref, reduce, piece]);

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
