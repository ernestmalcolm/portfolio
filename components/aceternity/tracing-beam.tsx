"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

export function TracingBeam({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 20%", "end 80%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

  if (reduceMotion) {
    return <div className="mx-auto w-full max-w-3xl">{children}</div>;
  }

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-3xl">
      <div
        className="absolute bottom-0 left-4 top-3 w-[2px] overflow-hidden bg-border md:left-8"
        aria-hidden
      >
        <motion.div
          style={{ scaleY }}
          className="h-full w-full origin-top bg-gradient-to-b from-coral via-coral/60 to-transparent"
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
      transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
      className={cn("mb-12 last:mb-0")}
    >
      <h2 className="font-display text-xl md:text-2xl">{heading}</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">{body}</p>
    </motion.section>
  );
}
