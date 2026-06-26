import Link from "next/link";

import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons/social-icons";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.social.github,
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "X (Twitter)",
    href: siteConfig.social.twitter,
    icon: XIcon,
  },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-navy-dark/40">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12 md:py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            © {year} {siteConfig.name}. Built with Next.js, shadcn/ui, and
            Aceternity-inspired motion.
          </p>

          <ul className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-coral hover:text-coral"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-muted-foreground/80">
          That&apos;s what she said. (About the footer padding.)
        </p>
      </div>
    </footer>
  );
}
