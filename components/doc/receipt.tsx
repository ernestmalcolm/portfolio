"use client";

import { motion, type Variants } from "motion/react";
import { QRCodeSVG } from "qrcode.react";
import * as React from "react";

import { Mark } from "@/components/motion/mark";
import { useRevealPhase } from "@/components/motion/reveal";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type ReceiptItem = {
  label: string;
  /** One line outline under the item (home) */
  detail?: string;
  /** Right aligned value, e.g. a date (About) */
  aside?: string;
};

type ReceiptProps = {
  items: ReceiptItem[];
  /** Replaces the location line, e.g. "Promotion history" */
  subtitle?: string;
  /** Adds the "Paid with Patience" line */
  paidWith?: string;
  rotate?: number;
  /** Draws a red box around the VERIFIED stamp (the About receipt) */
  boxStamp?: boolean;
  className?: string;
};

const dashed = "border-dashed border-[#A9B0B6]";

// Prints from the top down in small jumps, like a till roll. The clip box reaches
// past the edges so the paper's shadow isn't cut off.
const print: Variants = {
  in: {
    clipPath: "inset(0px -40px -60px -40px)",
    transition: { duration: 0.9, ease: (t: number) => Math.ceil(t * 12) / 12 },
  },
  below: { clipPath: "inset(0px -40px 100% -40px)", transition: { duration: 0 } },
  above: { clipPath: "inset(0px -40px 100% -40px)", transition: { duration: 0 } },
};

// Then the stamp lands, with a little overshoot
const stamp: Variants = {
  in: {
    opacity: 1,
    scale: 1,
    rotate: -8,
    transition: { delay: 0.95, type: "spring", stiffness: 520, damping: 17, opacity: { delay: 0.95, duration: 0.05 } },
  },
  below: { opacity: 0, scale: 1.4, rotate: -14, transition: { duration: 0 } },
  above: { opacity: 0, scale: 1.4, rotate: -14, transition: { duration: 0 } },
};

/** The career receipt: a white mono slip, verified */
export function Receipt({ items, subtitle, paidWith, rotate = 1, boxStamp = false, className }: ReceiptProps) {
  const ref = React.useRef<HTMLElement>(null);
  const phase = useRevealPhase(ref, { piece: true });

  const verified = (
    <motion.span
      variants={stamp}
      style={{ rotate: -8 }}
      className="inline-block border-[3px] border-double border-stamp px-4 py-1 text-lg font-semibold tracking-[0.16em] text-stamp"
    >
      VERIFIED
    </motion.span>
  );

  return (
    <motion.figure
      ref={ref}
      initial={false}
      animate={phase}
      variants={print}
      aria-label="Career receipt"
      className={cn(
        "m-0 min-w-0 bg-white px-5 pb-7 pt-[22px] font-mono sm:px-[26px] sm:pb-8 sm:pt-[26px] text-sm leading-[1.55] text-ink sm:leading-[1.7] shadow-[0_12px_30px_rgba(18,20,23,0.15)]",
        className,
      )}
      style={{ rotate }}
    >
      <p className="text-center font-semibold">ERNEST MWINCHUMU</p>
      <p className="text-center text-muted">{subtitle ?? "Dar es Salaam, Tanzania"}</p>
      <p className={cn("mt-3 border-y py-1.5 text-center", dashed)}>No. EM-2022</p>

      <ul className="mt-3">
        {items.map((item) =>
          item.aside ? (
            <li key={item.label} className="flex justify-between gap-3">
              <span>{item.label}</span>
              <span className="text-muted">{item.aside}</span>
            </li>
          ) : (
            <li key={item.label} className="mb-2.5">
              <span className="block font-semibold">{item.label}</span>
              {item.detail && (
                <span className="hidden text-[12.5px] leading-normal text-muted sm:block">{item.detail}</span>
              )}
            </li>
          ),
        )}
      </ul>

      <dl className="mt-3 border-t-2 border-ink pt-2.5">
        <div className="flex justify-between font-semibold">
          <dt>Total</dt>
          <dd>1 Ernest</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt>VAT (Very Average Thinking)</dt>
          <dd>0%</dd>
        </div>
        {paidWith && (
          <div className="flex justify-between gap-3">
            <dt>Paid with</dt>
            <dd>{paidWith}</dd>
          </div>
        )}
      </dl>

      <div className="mt-5 flex items-center justify-center gap-4">
        <QRCodeSVG
          aria-hidden
          value={siteConfig.social.linkedin}
          size={72}
          fgColor="#1E2329"
          bgColor="#FFFFFF"
          level="M"
          className="shrink-0"
        />
        <p className="text-[13px] leading-snug">
          <span className="block text-muted">Scan to call back</span>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline"
          >
            LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </div>

      <p className="mt-5 text-center">
        {boxStamp ? (
          <Mark type="box" color="#B8323A" padding={8} delay={1500}>
            {verified}
          </Mark>
        ) : (
          verified
        )}
      </p>
      <p className="mt-[18px] hidden text-center text-muted sm:block">Keep this receipt for your records.</p>
      <p className={cn("mt-3 border-t pt-2.5 text-center text-xs text-muted", dashed)}>
        Printed on 100% recycled meeting notes.
      </p>
    </motion.figure>
  );
}
