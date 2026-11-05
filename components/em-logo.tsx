import { cn } from "@/lib/utils";

/** Ernest's mark: <EM/>, used in the nav, the footer and the favicon */
export function EmLogo({ className }: { className?: string }) {
  return (
    <span className={cn("select-none font-mono font-semibold tracking-tight", className)} aria-hidden>
      <span className="text-coral">&lt;</span>
      <span className="text-cream">EM</span>
      <span className="text-coral">/&gt;</span>
    </span>
  );
}
