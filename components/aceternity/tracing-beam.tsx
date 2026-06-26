"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

export function TracingBeam({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 10%", "end 50%"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (reduceMotion) {
    return <div>{children}</div>;
  }

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-3xl">
      <div
        className="absolute left-4 top-3 h-full w-[2px] bg-border md:left-8"
        aria-hidden
      >
        <motion.div
          style={{ height }}
          className="w-full bg-gradient-to-b from-coral to-coral/20"
        />
      </div>
      <div className="pl-10 md:pl-16">{children}</div>
    </div>
  );
}

export function CaseStudySection({
  heading,
  body,
  index,
}: {
  heading: string;
  body: string;
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className={cn("mb-12 last:mb-0")}
    >
      <h2 className="text-xl font-semibold md:text-2xl">{heading}</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">{body}</p>
    </motion.section>
  );
}
