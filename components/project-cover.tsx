import fs from "node:fs";
import path from "node:path";

import Image from "next/image";

import { cn } from "@/lib/utils";

function coverExists(cover: string) {
  return fs.existsSync(path.join(process.cwd(), "public", cover));
}

/**
 * A project's screenshot, or a clearly marked placeholder until the file is
 * added under public/images/work/. Server only: it checks the file at build.
 */
export function ProjectCover({
  cover,
  title,
  size,
  priority = false,
  className,
}: {
  cover?: string;
  title: string;
  size: "row" | "hero";
  priority?: boolean;
  className?: string;
}) {
  if (!cover) return null;

  const frame = cn(
    "relative w-full overflow-hidden rounded-img border border-line",
    size === "row" ? "aspect-[16/10]" : "aspect-[16/9]",
    className,
  );

  if (!coverExists(cover)) {
    return (
      <div
        className={cn(frame, "flex flex-col items-center justify-center gap-1 bg-navy-light/70 p-4 text-center")}
        role="img"
        aria-label={`Screenshot of ${title} coming soon`}
      >
        <span className="font-mono text-xs text-coral">Placeholder</span>
        <span className={cn("font-mono text-muted", size === "row" ? "text-[11px]" : "text-sm")}>
          {cover}
        </span>
      </div>
    );
  }

  return (
    <div className={frame}>
      <Image
        src={cover}
        alt={`Screenshot of ${title}`}
        fill
        priority={priority}
        sizes={size === "row" ? "(min-width: 768px) 14rem, 100vw" : "(min-width: 1024px) 64rem, 100vw"}
        className="object-cover object-top"
      />
    </div>
  );
}
