import { cn } from "@/lib/utils";

type ConfirmPlaceholderProps = {
  label: string;
  className?: string;
};

/** Renders a clearly-marked placeholder for [CONFIRM] / [ERNEST TO PROVIDE] items */
export function ConfirmPlaceholder({ label, className }: ConfirmPlaceholderProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-dashed border-coral/50 bg-coral/5 px-2 py-0.5 text-xs font-medium text-coral",
        className,
      )}
    >
      {label}
    </span>
  );
}
