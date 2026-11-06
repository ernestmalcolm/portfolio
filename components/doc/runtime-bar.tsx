"use client";

import { motion, useScroll } from "motion/react";

/** Thin yellow bar under the camera header showing how far down the page the visitor is */
export function RuntimeBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden
      className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-marker"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
