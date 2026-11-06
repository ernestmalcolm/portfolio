import { cn } from "@/lib/utils";

type HandNoteProps = {
  children: React.ReactNode;
  /** Tailwind text colour class, pen blue by default */
  color?: string;
  /** Font size in px */
  size?: number;
  /** Degrees, for a slightly off-straight note */
  rotate?: number;
  /** A small hand-drawn arrow after the note */
  arrow?: "down" | "right";
  /** Purely decorative notes are hidden from screen readers */
  decorative?: boolean;
  as?: "p" | "span" | "div";
  className?: string;
};

/** Handwritten note in Reenie Beanie */
export function HandNote({
  children,
  color = "text-pen",
  size = 28,
  rotate,
  arrow,
  decorative = false,
  as: Tag = "p",
  className,
}: HandNoteProps) {
  return (
    <Tag
      aria-hidden={decorative || undefined}
      className={cn("font-hand leading-[1.1]", color, arrow && "flex items-end gap-1.5", className)}
      style={{ fontSize: size, transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      {arrow ? <span>{children}</span> : children}
      {arrow && <HandArrow direction={arrow} />}
    </Tag>
  );
}

export function HandArrow({ direction = "down" }: { direction?: "down" | "right" }) {
  return direction === "down" ? (
    <svg aria-hidden width="34" height="40" viewBox="0 0 34 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M6 4 C 22 10, 26 22, 20 36" />
      <path d="M13 30 L20 37 L26 29" />
    </svg>
  ) : (
    <svg aria-hidden width="40" height="24" viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M3 16 C 12 6, 24 6, 35 12" />
      <path d="M28 6 L36 12 L29 18" />
    </svg>
  );
}
