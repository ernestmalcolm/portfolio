import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {year} {siteConfig.name}</p>
        <p className="font-mono text-xs">
          Built with Next.js ·{" "}
          <span className="text-muted-foreground/70">
            That&apos;s what she said. (About the padding.)
          </span>
        </p>
      </div>
    </footer>
  );
}
