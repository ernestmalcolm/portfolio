"use client";

import { motion, useReducedMotion } from "framer-motion";

import { SectionHeader } from "@/components/section-header";
import { cn } from "@/lib/utils";

const lanes = [
  {
    num: "01",
    title: "Product",
    description:
      "PRDs, product strategy, roadmaps, GTM, and pricing — from idea to shipped feature.",
    accent: true,
  },
  {
    num: "02",
    title: "Design",
    description:
      "Interfaces, UI, and visual systems that match the strategy behind them.",
    accent: false,
  },
  {
    num: "03",
    title: "AI",
    description:
      "Claude-based agentic skills, orchestration, and insight layers over structured data.",
    accent: false,
  },
  {
    num: "04",
    title: "Strategy",
    description:
      "Operating plans, financial modeling, and market analysis grounded in real numbers.",
    accent: false,
  },
  {
    num: "05",
    title: "Consulting",
    description:
      "Business plans, maturity assessments, and advisory — with a light audit/IFRS/tax nod where it helps.",
    accent: false,
  },
] as const;

export function WhatIDoSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="what-i-do" className="section-pad border-b border-border/40">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <SectionHeader
            label="Capabilities"
            title="What I do"
            description="Five lanes, one throughline — messy business problems in, products and working software out."
          />
        </motion.div>

        {/* Bento grid: 2+2+1 */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {lanes.map((lane, index) => (
            <motion.div
              key={lane.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                index === 4 && "sm:col-span-2",
              )}
            >
              <div
                className={cn(
                  "group relative h-full rounded-2xl border border-border/50 bg-card/30 p-7 backdrop-blur-sm",
                  "transition-all duration-300 hover:border-coral/30 hover:bg-card/60 hover:shadow-[0_0_30px_rgba(255,107,94,0.07)]",
                )}
              >
                {/* Hover glow line */}
                <span
                  className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-coral/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />

                {/* Large ghost number */}
                <p
                  className="mb-4 font-mono text-5xl font-light leading-none text-foreground/8 transition-colors duration-300 group-hover:text-coral/12 select-none"
                  aria-hidden
                >
                  {lane.num}
                </p>

                <h3 className="text-lg font-semibold text-foreground group-hover:text-coral transition-colors duration-200">
                  {lane.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {lane.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
