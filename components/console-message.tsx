"use client";

import { useEffect } from "react";

import { siteConfig } from "@/lib/site-config";

export function ConsoleMessage() {
  useEffect(() => {
    // TODO: [CONFIRM] — pick console easter egg line from content_drafts.md
    console.log(
      `%cBears. Beets. Battlestar Galactica.`,
      "color: #FF6B5E; font-size: 14px; font-weight: bold;",
    );
    console.log(
      `%cYou found the console. Let's talk → ${siteConfig.social.linkedin}`,
      "color: #F5F1E8; font-size: 12px;",
    );
  }, []);

  return null;
}
