import Link from "next/link";

import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons/social-icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  { label: "GitHub", href: siteConfig.social.github, icon: GitHubIcon },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: LinkedInIcon },
  { label: "X", href: siteConfig.social.twitter, icon: XIcon },
] as const;

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="section-pad border-b border-border/40 pt-28 md:pt-32"
    >
      <div className="mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="max-w-3xl">
          <p className="section-label">{siteConfig.location}</p>

          <h1
            id="hero-heading"
            className="font-display mt-4 text-balance text-[clamp(2.75rem,8vw,4.5rem)] leading-[1.05] tracking-tight"
          >
            {siteConfig.name}
          </h1>

          <p className="mt-5 max-w-xl text-xl leading-snug text-foreground md:text-2xl">
            {siteConfig.title}
          </p>

          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {siteConfig.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="#work">See my work</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">Get in touch</Link>
            </Button>
            {/* TODO: [ERNEST PHOTO/CV PDF provided] */}
            <Button asChild variant="ghost" size="lg">
              <a href={siteConfig.cvPath} download>
                Download CV
              </a>
            </Button>
          </div>
        </div>

        <aside className="lg:pb-2">
          <p className="section-label mb-3">Elsewhere</p>
          <ul className="flex gap-4 lg:flex-col lg:gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-coral"
                >
                  <Icon className="h-4 w-4 opacity-70 group-hover:opacity-100" aria-hidden />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
