import { cn } from "@/lib/utils";

/** Small mono label above a section heading, for example "00:04:30  Simplitech Limited" */
export function Timecode({ code, label, className }: { code: string; label?: string; className?: string }) {
  return (
    <p className={cn("whitespace-pre-wrap font-mono text-xs text-muted", className)}>
      {label ? `${code}  ${label}` : code}
    </p>
  );
}
