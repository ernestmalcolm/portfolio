"use client";

/**
 * One shared scroll and resize listener for the whole site, throttled to one
 * callback run per animation frame. Components subscribe instead of each
 * adding their own listener.
 */
type Callback = () => void;

const callbacks = new Set<Callback>();
let frame = 0;

function run() {
  frame = 0;
  callbacks.forEach((callback) => callback());
}

function schedule() {
  if (!frame) frame = window.requestAnimationFrame(run);
}

export function onScrollFrame(callback: Callback) {
  if (callbacks.size === 0) {
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
  }
  callbacks.add(callback);
  return () => {
    callbacks.delete(callback);
    if (callbacks.size === 0) {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
    }
  };
}
