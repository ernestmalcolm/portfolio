import { HandArrow } from "@/components/doc/hand-note";
import { cn } from "@/lib/utils";

/** Handwritten line at the end of a home section that hands over to the next one */
export function SceneBridge({ children, dark = false, className }: { children: string; dark?: boolean; className?: string }) {
  return (
    <p
      className={cn(
        "mt-12 flex items-end gap-1.5 font-hand text-[28px] leading-[1.1] sm:justify-end sm:text-[30px]",
        dark ? "text-marker" : "text-pen",
        className,
      )}
    >
      <span>{children}</span>
      <HandArrow direction="down" />
    </p>
  );
}
