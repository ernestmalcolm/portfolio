"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { EmLogo } from "@/components/em-logo";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/writing" },
  { label: "Contact", href: "#contact" },
] as const;

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  const isCurrent = (href: string) =>
    href.startsWith("/") &&
    (pathname === href || pathname.startsWith(`${href}/`));

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const linkClass = (href: string) =>
    cn(
      "text-mist underline-offset-[6px] transition-colors hover:text-cream",
      isCurrent(href) && "text-cream underline decoration-coral decoration-2",
    );

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-navy/80 backdrop-blur-md">
      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between">
        <Link href="/" aria-label={`${siteConfig.name}, home`} className="text-lg">
          <EmLogo />
        </Link>

        <ul className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isCurrent(link.href) ? "page" : undefined}
                className={linkClass(link.href)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          ref={menuButtonRef}
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          <AnimatePresence initial={false} mode="wait">
            <motion.span
              key={mobileOpen ? "close" : "open"}
              initial={reduceMotion ? false : { opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
              className="flex"
            >
              {mobileOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-navy md:hidden"
          >
            <motion.ul
              className="container-page py-2"
              initial="closed"
              animate="open"
              variants={{ open: { transition: { staggerChildren: 0.05, delayChildren: 0.06 } } }}
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={
                    reduceMotion
                      ? undefined
                      : {
                          closed: { opacity: 0, x: -12 },
                          open: { opacity: 1, x: 0 },
                        }
                  }
                >
                  <Link
                    href={link.href}
                    aria-current={isCurrent(link.href) ? "page" : undefined}
                    className={cn("block py-3 text-lg", linkClass(link.href))}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
