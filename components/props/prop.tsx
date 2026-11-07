"use client";

import { useReducedMotion } from "motion/react";
import * as React from "react";

import { type PropId, props } from "@/content/props";
import { markPropFound } from "@/lib/props-tracker";
import { cn } from "@/lib/utils";

export type PropState = {
  /** Goes up by one each time the prop is played (hovered, focused or tapped). 0 = never, or reduced motion. */
  played: number;
  /** The caption is showing */
  open: boolean;
  reduce: boolean;
};

const captionPositions = {
  "below-start": "left-0 top-[calc(100%+6px)]",
  "below-end": "right-0 top-[calc(100%+6px)]",
  "below-center": "left-1/2 top-[calc(100%+6px)] -translate-x-1/2",
  "above-start": "bottom-[calc(100%+6px)] left-0",
  "above-end": "bottom-[calc(100%+6px)] right-0",
};

type PropProps = {
  id: PropId;
  /** Placement and size. Props sit absolutely in existing whitespace, so they never move the layout. */
  className?: string;
  /** Overrides the caption from content/props.ts; a function gets the live state */
  caption?: React.ReactNode | ((state: PropState) => React.ReactNode);
  captionPosition?: keyof typeof captionPositions;
  /** Responsive caption placement, when the prop moves sides between breakpoints */
  captionClassName?: string;
  /** Extra action on click, e.g. untying the gift */
  onActivate?: () => void;
  children: (state: PropState) => React.ReactNode;
};

/**
 * A hidden prop: a focusable button holding an original drawing. Its caption shows on
 * hover, focus or tap, and the first time that happens it counts as found.
 */
export function Prop({
  id,
  className,
  caption,
  captionPosition = "below-end",
  captionClassName,
  onActivate,
  children,
}: PropProps) {
  const reduce = useReducedMotion() ?? false;
  const [open, setOpen] = React.useState(false);
  const [played, setPlayed] = React.useState(0);
  const ref = React.useRef<HTMLButtonElement>(null);
  const captionId = React.useId();
  const copy = props[id];

  const show = React.useCallback(() => {
    setOpen((wasOpen) => {
      if (!wasOpen && !reduce) setPlayed((count) => count + 1);
      return true;
    });
    markPropFound(id);
  }, [id, reduce]);

  // A tap anywhere else closes the caption
  React.useEffect(() => {
    if (!open) return;
    const close = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);

  return (
    <button
      ref={ref}
      type="button"
      aria-label={copy.label}
      aria-describedby={captionId}
      onPointerEnter={(event) => event.pointerType === "mouse" && show()}
      onPointerLeave={(event) => event.pointerType === "mouse" && setOpen(false)}
      onFocus={show}
      onBlur={() => setOpen(false)}
      onClick={(event) => {
        // Touch has no hover: a tap shows the caption and plays the prop
        if (event.detail > 0 && !open) show();
        onActivate?.();
      }}
      onKeyDown={(event) => event.key === "Escape" && setOpen(false)}
      className={cn(
        "group z-20 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded bg-transparent p-0",
        className,
      )}
    >
      {children({ played, open, reduce })}
      <span
        id={captionId}
        role="tooltip"
        className={cn(
          "pointer-events-none absolute z-30 w-max max-w-[220px] rounded bg-camera px-3 py-2 text-left font-mono text-xs leading-snug text-white shadow-[0_8px_20px_rgba(18,20,23,0.25)] transition-opacity duration-150",
          captionClassName ?? captionPositions[captionPosition],
          open ? "opacity-100" : "opacity-0",
        )}
      >
        {typeof caption === "function" ? caption({ played, open, reduce }) : caption ?? copy.caption}
      </span>
    </button>
  );
}
