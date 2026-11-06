import Image from "next/image";

import type { Quip } from "@/content/projects";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/** 48px crop of the portrait with a quoted line and an optional stage direction */
export function TalkingHead({ quip, className }: { quip: Quip; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src={siteConfig.photo}
        alt=""
        width={48}
        height={48}
        className="h-12 w-12 shrink-0 rounded-sm object-cover object-[50%_10%]"
      />
      <p className="text-[15px] text-muted-deep">
        {quip.line}
        {quip.direction && <StageDirection className="ml-1">{quip.direction}</StageDirection>}
      </p>
    </div>
  );
}

export function StageDirection({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("font-mono text-[13px] italic text-muted", className)}>{children}</span>;
}
