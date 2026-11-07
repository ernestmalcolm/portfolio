"use client";

import { useSyncExternalStore } from "react";

import { onScrollFrame } from "@/lib/scroll-frame";

export type ScrollDirection = "down" | "up";

// Shared by every component that asks, on the site's one scroll listener
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

let stop: (() => void) | null = null;

function subscribe(listener: () => void) {
  if (listeners.size === 0) {
    lastY = window.scrollY;
    stop = onScrollFrame(onScroll);
  }
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) stop?.();
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
