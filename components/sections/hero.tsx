"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { Spotlight } from "@/components/aceternity/spotlight";
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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  }),
};

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border/40 pb-20 pt-28 md:pb-28 md:pt-32"
    >
      <Spotlight
        className="-left-24 md:-left-10 motion-reduce:opacity-30"
        fill="#FF6B5E"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(255,107,94,0.07),transparent_50%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="max-w-3xl">
          <motion.p
            custom={0}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            className="section-label"
          >
            {siteConfig.location}
          </motion.p>

          <motion.h1
            id="hero-heading"
            custom={0.06}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            className="font-display mt-4 text-balance text-[clamp(2.75rem,8vw,4.5rem)] leading-[1.05] tracking-tight"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            custom={0.12}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            className="mt-5 max-w-xl text-xl leading-snug text-foreground md:text-2xl"
          >
            {siteConfig.title}
          </motion.p>

          <motion.p
            custom={0.18}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            custom={0.24}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg">
              <Link href="#work">See my work</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">Get in touch</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href={siteConfig.cvPath} download>
                Download CV
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.aside
          custom={0.3}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          className="lg:pb-2"
        >
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
                  <Icon
                    className="h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100"
                    aria-hidden
                  />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}
