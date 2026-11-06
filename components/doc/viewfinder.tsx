import { cn } from "@/lib/utils";

const corner = "absolute h-11 w-11 border-white";

/** Camera viewfinder: four corner brackets, a focus circle and ceiling tiles behind */
export function Viewfinder({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("ceiling-tiles relative mx-auto max-w-page", className)}>
      <span aria-hidden className={cn(corner, "left-[18px] top-[18px] border-l-[3px] border-t-[3px]")} />
      <span aria-hidden className={cn(corner, "right-[18px] top-[18px] border-r-[3px] border-t-[3px]")} />
      <span aria-hidden className={cn(corner, "bottom-[18px] left-[18px] border-b-[3px] border-l-[3px]")} />
      <span aria-hidden className={cn(corner, "bottom-[18px] right-[18px] border-b-[3px] border-r-[3px]")} />
      <span
        aria-hidden
        className="absolute left-1/2 top-[26px] -ml-2.5 h-5 w-5 rounded-full border-2 border-white/80"
      />
      {children}
    </div>
  );
}
