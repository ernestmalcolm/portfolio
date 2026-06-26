"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { Spotlight } from "@/components/aceternity/spotlight";
import { LinkedInIcon, XIcon } from "@/components/icons/social-icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: LinkedInIcon },
  { label: "X", href: siteConfig.social.twitter, icon: XIcon },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative min-h-[92vh] overflow-hidden border-b border-border/40 pb-16 pt-32 md:pt-40 flex flex-col justify-center"
    >
      {/* Dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(245,241,232,0.05)_1px,transparent_0)] bg-[size:36px_36px]"
        aria-hidden
      />

      {/* Primary coral spotlight */}
      <Spotlight className="-left-20 top-0 md:-left-10" fill="#FF6B5E" />

      {/* Secondary accent — cool depth from top-right */}
      <Spotlight
        className="-right-40 -top-20 opacity-30 md:-right-20"
        fill="#12264A"
      />

      {/* Radial vignette overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,107,94,0.06),transparent)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
        <div className="max-w-4xl">
          {/* Location eyebrow */}
          <motion.p
            custom={0}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            className="section-label tracking-[0.22em]"
          >
            {siteConfig.location}
          </motion.p>

          {/* Display name */}
          <motion.h1
            id="hero-heading"
            custom={0.08}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            className="mt-5 font-display text-[clamp(3rem,9vw,5.5rem)] leading-[1.02] tracking-[-0.01em]"
          >
            <span className="text-gradient">{siteConfig.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            custom={0.16}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            className="mt-5 text-xl font-medium leading-snug text-foreground/90 md:text-2xl"
          >
            {siteConfig.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            custom={0.22}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={0.3}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-coral px-7 text-white hover:bg-coral-dark focus-visible:ring-coral"
            >
              <Link href="#work">See my work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7">
              <Link href="#contact">Get in touch</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="rounded-full px-7">
              <a href={siteConfig.cvPath} download>
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.ul
            custom={0.38}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex items-center gap-5"
          >
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-coral"
                >
                  <Icon
                    className="h-4 w-4 opacity-60 transition-opacity group-hover:opacity-100"
                    aria-hidden
                  />
                  <span className="hidden sm:inline">{label}</span>
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Decorative floating stat blobs — subtle */}
        <motion.div
          custom={0.5}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pointer-events-none absolute bottom-16 right-6 hidden flex-col gap-4 text-right lg:flex"
          aria-hidden
        >
          {[
            { label: "Capability lanes", value: "05" },
            { label: "East Africa focus", value: "TZ" },
          ].map(({ label, value }) => (
            <div key={label} className="space-y-0.5">
              <p className="font-mono text-3xl font-light text-foreground/20">
                {value}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
