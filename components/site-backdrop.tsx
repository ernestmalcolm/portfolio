"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import * as React from "react";

const GLOW_SIZE = 640;

/**
 * Site wide background: a fixed dot grid, a slow drifting blue glow, and a
 * coral glow that trails the cursor. On touch screens, or with reduced motion,
 * the coral glow drifts on its own instead.
 */
export function SiteBackdrop() {
  const reduceMotion = useReducedMotion();
  const [followPointer, setFollowPointer] = React.useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 60, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 60, damping: 20, mass: 0.6 });

  React.useEffect(() => {
    if (reduceMotion || !window.matchMedia("(pointer: fine)").matches) return;

    // Start roughly where the old static glow sat, so the first frame matches
    x.jump(window.innerWidth * 0.25);
    y.jump(window.innerHeight * 0.4);
    springX.jump(x.get());
    springY.jump(y.get());
    setFollowPointer(true);

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduceMotion, x, y, springX, springY]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="site-dots absolute inset-0" />
      {followPointer ? (
        <motion.div
          className="absolute left-0 top-0 rounded-full bg-[radial-gradient(closest-side,rgba(255,107,94,0.2),transparent)]"
          style={{
            width: GLOW_SIZE,
            height: GLOW_SIZE,
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      ) : (
        <div className="glow-drift absolute -left-[20vw] top-[10vh] h-[70vh] w-[70vw] rounded-full bg-[radial-gradient(closest-side,rgba(255,107,94,0.18),transparent)]" />
      )}
      <div className="glow-drift-reverse absolute -right-[20vw] bottom-[-10vh] h-[80vh] w-[70vw] rounded-full bg-[radial-gradient(closest-side,rgba(91,112,150,0.3),transparent)]" />
    </div>
  );
}
