"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import * as React from "react";

import { receiptJokes } from "@/content/about";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const roles = ["Tech Lead", "Research and Product Lead", "Tech Consultancy"];

// Fixed jokes, itemised (full version only)
const extras = [
  { label: "Metaphors you didn't ask for", value: "Free" },
  { label: "Sitcom quotes", value: "Unlimited" },
];

function Row({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className={cn("min-w-0", strong && "font-semibold")}>{label}</dt>
      <dd className={cn("shrink-0 text-right", strong && "font-semibold")}>
        {value}
      </dd>
    </div>
  );
}

function Divider({ double }: { double?: boolean }) {
  return (
    <hr
      className={cn(
        "my-4 border-0 border-t border-dashed border-receipt-slate/50",
        double && "border-t-[3px] border-double border-receipt-slate/60",
      )}
    />
  );
}

const PRINT = { duration: 1.1, ease: [0.4, 0, 0.2, 1] as const };

function pickJoke(previous: number | null) {
  let next = Math.floor(Math.random() * receiptJokes.length);
  if (next === previous) next = (next + 1) % receiptJokes.length;
  return next;
}

/**
 * Who Ernest is right now, as a fiscal receipt. `short` drops the extras,
 * payment line and QR code for the home page.
 *
 * `print="view"` prints top to bottom once, the first time it scrolls into
 * view. `print="click"` starts printed and adds a "Print another" button that
 * reprints it with a random joke line item. Reduced motion skips the animation.
 */
export function Receipt({
  short = false,
  print = "view",
  className,
}: {
  short?: boolean;
  print?: "view" | "click";
  className?: string;
}) {
  // Watch the unclipped figure; the clipped receipt has no visible area to observe
  const figureRef = React.useRef<HTMLElement>(null);
  const inView = useInView(figureRef, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();
  const [joke, setJoke] = React.useState<number | null>(null);
  const [printCount, setPrintCount] = React.useState(0);

  const printAnother = () => {
    setJoke((previous) => pickJoke(previous));
    setPrintCount((count) => count + 1);
  };

  const animated = print === "click" && printCount > 0;
  const current = joke === null ? null : receiptJokes[joke];

  return (
    <figure
      ref={figureRef}
      className={cn("w-full min-w-0 max-w-sm", className)}
      aria-label="Career receipt"
    >
      <div className="drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
        <motion.div
          // A new key remounts the slip, so each click prints from the top
          key={printCount}
          className={cn(animated && "receipt-print")}
          initial={
            animated && !reduceMotion
              ? { clipPath: "inset(0 0 100% 0)" }
              : false
          }
          animate={
            print === "click" || inView || !animated
              ? {
                  clipPath: "inset(0 0 0% 0)",
                  transition: reduceMotion ? { duration: 0 } : PRINT,
                }
              : undefined
          }
        >
          <div className="receipt-tear relative bg-receipt px-4 pb-10 pt-7 font-mono text-[13px] leading-relaxed text-receipt-slate sm:px-6 sm:text-sm">
            <header className="text-center">
              <p className="font-semibold uppercase tracking-wide text-receipt-ink">
                {siteConfig.name}
              </p>
              <p>{siteConfig.location}</p>
            </header>

            <Divider />

            <p className="mt-1 text-center">No. EM-2022</p>

            <Divider />

            <ul className="space-y-0.5 font-semibold text-receipt-ink">
              {roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>

            {!short && (
              <>
                <Divider />
                <dl className="space-y-0.5">
                  {extras.map((item) => (
                    <Row
                      key={item.label}
                      label={item.label}
                      value={item.value}
                    />
                  ))}
                  {current && (
                    <Row label={current.item} value={current.price} strong />
                  )}
                </dl>
              </>
            )}

            <Divider double />

            <dl className="space-y-0.5 text-receipt-ink">
              <Row label="Total" value="1 Ernest" strong />
              <Row label="VAT (Very Average Thinking)" value="0%" strong />
            </dl>

            {!short && (
              <dl className="mt-3 space-y-0.5">
                <Row label="Paid with" value="Patience" />
                <p className="pl-3 text-receipt-muted">Manchester United fan</p>
              </dl>
            )}

            <div className="relative mt-6 flex flex-wrap items-end justify-between gap-4">
              {!short && (
                <div className="flex items-end gap-3">
                  <QRCodeSVG
                    value={siteConfig.social.linkedin}
                    size={72}
                    fgColor="#222831"
                    bgColor="#FFFFFF"
                    title="QR code linking to Ernest's LinkedIn"
                  />
                  <a
                    href={siteConfig.social.linkedin}
                    className="pb-1 text-receipt-red underline underline-offset-[3px] hover:no-underline font-sans text-sm"
                  >
                    LinkedIn
                  </a>
                </div>
              )}
              <span
                aria-hidden
                className={cn(
                  "inline-block -rotate-[8deg] select-none border-[3px] border-double border-stamp px-3 py-1 font-sans text-lg font-semibold uppercase tracking-[0.2em] text-stamp opacity-90",
                  short ? "mx-auto" : "ml-auto",
                )}
              >
                Verified
              </span>
            </div>

            <p className="mt-6 text-center text-receipt-muted">
              Thank you for reading.
              <br />
              Keep this receipt for your records.
            </p>

            <Divider />

            <p className="text-center text-xs text-receipt-muted">
              Printed on 100% recycled meeting notes.
            </p>
          </div>
        </motion.div>
      </div>

      {print === "click" && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={printAnother}
            className="rounded-full border border-field px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:border-cream hover:bg-cream hover:text-navy"
          >
            Print another
          </button>
        </div>
      )}
      <p className="sr-only" aria-live="polite">
        {current
          ? `Printed a new line: ${current.item}, ${current.price}.`
          : ""}
      </p>
    </figure>
  );
}
