import { cn } from "@/lib/utils";

type ConfirmPlaceholderProps = {
  label: string;
  className?: string;
};

/** Clearly-marked placeholder — muted footnote, not a UI badge */
export function ConfirmPlaceholder({ label, className }: ConfirmPlaceholderProps) {
  return (
    <span
      className={cn(
        "font-mono text-xs text-muted-foreground/80",
        className,
      )}
    >
      [Confirm: {label}]
    </span>
  );
}
