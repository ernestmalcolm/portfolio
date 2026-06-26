"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";

import { Spotlight } from "@/components/aceternity/spotlight";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons/social-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ernestmalcolm",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ernestmwinchumu/",
    icon: LinkedInIcon,
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/lukakucancode",
    icon: XIcon,
  },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: "easeOut" as const },
  }),
};

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36 lg:pt-40"
    >
      <Spotlight className="-left-20 md:-left-10 md:opacity-100" fill="#FF6B5E" />

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,107,94,0.08),transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.p
          custom={0}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          className="text-sm font-medium uppercase tracking-[0.2em] text-coral"
        >
          Tanzania · East Africa
        </motion.p>

        <motion.h1
          id="hero-heading"
          custom={0.08}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          className="mt-4 max-w-4xl text-balance"
        >
          Ernest Mwinchumu
        </motion.h1>

        <motion.p
          custom={0.16}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          className="mt-3 text-xl font-medium text-foreground md:text-2xl"
        >
          Product &amp; business strategist who builds
        </motion.p>

        <motion.p
          custom={0.24}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          className="mt-5 max-w-2xl text-balance text-base text-muted-foreground md:text-lg"
        >
          Strategy, product, design, and AI — grounded in real business, shipped
          in code.
        </motion.p>

        <motion.div
          custom={0.32}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild size="lg" className="rounded-full px-6">
            <Link href="#work">
              See my work
              <ArrowDown className="ml-1 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-6">
            <Link href="#contact">Get in touch</Link>
          </Button>
          {/* TODO: [ERNEST PHOTO/CV PDF provided] — replace with real CV in /public */}
          <Button asChild size="lg" variant="ghost" className="rounded-full px-6">
            <a href="/cv.pdf" download>
              <Download className="mr-1.5 h-4 w-4" aria-hidden />
              Download CV
            </a>
          </Button>
        </motion.div>

        <motion.ul
          custom={0.4}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex items-center gap-3"
          aria-label="Social profiles"
        >
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80",
                  "text-muted-foreground transition-colors hover:border-coral hover:text-coral",
                )}
              >
                <Icon className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
