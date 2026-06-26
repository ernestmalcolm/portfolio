"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MAX_POINTS = 28;
const COMPLEMENT_RGB = "78, 205, 196";
const CORAL_RGB = "255, 107, 94";

type Point = { x: number; y: number };

export function CursorBeam() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setEnabled(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const onMove = (event: MouseEvent) => {
      pointsRef.current.push({ x: event.clientX, y: event.clientY });
      if (pointsRef.current.length > MAX_POINTS) {
        pointsRef.current.shift();
      }
    };

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const points = pointsRef.current;

      if (points.length > 1) {
        for (let i = 1; i < points.length; i++) {
          const progress = i / (points.length - 1);
          ctx.beginPath();
          ctx.moveTo(points[i - 1].x, points[i - 1].y);
          ctx.lineTo(points[i].x, points[i].y);
          ctx.strokeStyle = `rgba(${COMPLEMENT_RGB}, ${0.08 + progress * 0.42})`;
          ctx.lineWidth = 1.5 + progress * 16;
          ctx.lineCap = "round";
          ctx.stroke();
        }
      }

      if (points.length > 0) {
        const { x, y } = points[points.length - 1];
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 36);
        glow.addColorStop(0, `rgba(${COMPLEMENT_RGB}, 0.5)`);
        glow.addColorStop(0.35, `rgba(${CORAL_RGB}, 0.14)`);
        glow.addColorStop(1, `rgba(${COMPLEMENT_RGB}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 36, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(${COMPLEMENT_RGB}, 0.85)`;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      frame = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    frame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [reduceMotion]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1] mix-blend-screen"
      aria-hidden
    />
  );
}
