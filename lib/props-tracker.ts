"use client";

import { useSyncExternalStore } from "react";

import { propIds } from "@/content/props";

const key = "em-props-found";
const event = "em-props-found";

// Storage can be blocked (private mode, strict settings), so every access is guarded
function read(): string[] {
  try {
    const value = JSON.parse(window.localStorage.getItem(key) ?? "[]");
    return Array.isArray(value) ? value.filter((id) => (propIds as readonly string[]).includes(id)) : [];
  } catch {
    return [];
  }
}

let cache: string[] | null = null;

function snapshot() {
  if (cache === null) cache = read();
  return cache.length;
}

/** Records a prop as found the first time it's hovered, focused or tapped */
export function markPropFound(id: string) {
  const found = cache ?? read();
  if (found.includes(id)) return;
  cache = [...found, id];
  try {
    window.localStorage.setItem(key, JSON.stringify(cache));
  } catch {
    // Not saved, but still counted for this visit
  }
  window.dispatchEvent(new Event(event));
}

function subscribe(listener: () => void) {
  const onStorage = () => {
    cache = read();
    listener();
  };
  window.addEventListener(event, listener);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(event, listener);
    window.removeEventListener("storage", onStorage);
  };
}

/** How many props this visitor has found. 0 on the server and first render. */
export function usePropsFound() {
  return useSyncExternalStore(subscribe, snapshot, () => 0);
}
