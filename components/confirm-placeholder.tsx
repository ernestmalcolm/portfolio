import { cn } from "@/lib/utils";

type ConfirmPlaceholderProps = {
  label: string;
  className?: string;
};

/** Visible placeholder for copy Ernest still has to confirm */
export function ConfirmPlaceholder({ label, className }: ConfirmPlaceholderProps) {
  return (
    <span
      className={cn(
        "text-sm text-muted",
        className,
      )}
    >
      [Confirm: {label}]
    </span>
  );
}
