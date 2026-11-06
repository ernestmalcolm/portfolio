"use client";

import { useSyncExternalStore } from "react";

export type ScrollDirection = "down" | "up";

// One shared scroll listener for every component that asks
let direction: ScrollDirection = "down";
let lastY = 0;
const listeners = new Set<() => void>();

function onScroll() {
  const y = window.scrollY;
  if (Math.abs(y - lastY) < 4) return;
  const next = y > lastY ? "down" : "up";
  lastY = y;
  if (next !== direction) {
    direction = next;
    listeners.forEach((listener) => listener());
  }
}

function subscribe(listener: () => void) {
  if (listeners.size === 0) {
    lastY = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
  }
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) window.removeEventListener("scroll", onScroll);
  };
}

/** Which way the visitor last scrolled */
export function useScrollDirection() {
  return useSyncExternalStore(
    subscribe,
    () => direction,
    () => "down" as ScrollDirection,
  );
}
