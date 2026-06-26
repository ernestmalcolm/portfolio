"use client";

import { motion, useReducedMotion } from "framer-motion";

import { SectionHeader } from "@/components/section-header";

const lanes = [
  {
    title: "Product",
    description:
      "PRDs, product strategy, roadmaps, GTM, and pricing — from idea to shipped feature.",
  },
  {
    title: "Design",
    description:
      "Interfaces, UI, and visual systems that match the strategy behind them.",
  },
  {
    title: "AI",
    description:
      "Claude-based agentic skills, orchestration, and insight layers over structured data.",
  },
  {
    title: "Strategy",
    description:
      "Operating plans, financial modeling, and market analysis grounded in real numbers.",
  },
  {
    title: "Consulting",
    description:
      "Business plans, maturity assessments, and advisory — with a light audit/IFRS/tax nod where it helps.",
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
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <SectionHeader
            label="Capabilities"
            title="What I do"
            description="Five lanes, one throughline — messy business problems in, products and working software out."
          />
        </motion.div>

        <ol className="mt-12 divide-y divide-border/50 border-y border-border/50">
          {lanes.map((lane, index) => (
            <motion.li
              key={lane.title}
              initial={reduceMotion ? false : { opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
              className="grid gap-3 py-7 md:grid-cols-[3.5rem_minmax(0,1fr)] md:gap-6"
            >
              <span className="font-mono text-sm tabular-nums text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-medium text-foreground">
                  {lane.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {lane.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
