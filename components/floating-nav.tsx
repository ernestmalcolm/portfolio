"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Writing", href: "/writing" },
  { label: "Contact", href: "#contact" },
] as const;

export function FloatingNav() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = React.useState(true);
  const [condensed, setCondensed] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setVisible(latest <= 80 || latest < previous);
    setCondensed(latest > 24);
  });

  return (
    <>
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: visible ? 0 : -120, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:px-6"
      >
        <nav
          aria-label="Primary"
          className={cn(
            "flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-border/60 bg-background/85 px-4 py-2 shadow-lg backdrop-blur-md transition-[padding,box-shadow] duration-300 md:px-6",
            condensed && "py-1.5 shadow-md",
          )}
        >
          <Link
            href="/"
            className="font-display text-sm tracking-tight text-foreground transition-colors hover:text-coral md:text-base"
          >
            E. Mwinchumu
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-1 md:flex">
            <ThemeToggle />
            <Button asChild size="sm" variant="outline" className="rounded-full">
              <a href={siteConfig.cvPath} download>
                <Download className="mr-1.5 h-4 w-4" aria-hidden />
                CV
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>
      </motion.header>

      {mobileOpen && (
        <motion.nav
          id="mobile-nav"
          aria-label="Mobile"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-border bg-card/95 p-4 shadow-xl backdrop-blur-md md:hidden"
        >
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-secondary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full rounded-full">
                <a href={siteConfig.cvPath} download>
                  Download CV
                </a>
              </Button>
            </li>
          </ul>
        </motion.nav>
      )}
    </>
  );
}
