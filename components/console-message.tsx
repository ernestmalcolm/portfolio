"use client";

import { useEffect } from "react";

import { siteConfig } from "@/lib/site-config";

export function ConsoleMessage() {
  useEffect(() => {
    console.log(
      "%c● REC  Director's commentary unlocked.",
      "color: #E0393B; font-size: 16px; font-weight: bold; font-family: monospace;",
    );
    console.log(
      "%cYou found the console. That makes you my kind of person. The camera saw that.",
      "font-size: 12px; font-family: monospace;",
    );
    console.log(
      `%cSay hi on LinkedIn: ${siteConfig.social.linkedin}`,
      "font-size: 12px; font-family: monospace;",
    );
  }, []);

  return null;
}
