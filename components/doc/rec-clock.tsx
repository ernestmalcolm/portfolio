"use client";

import { useEffect, useState } from "react";

const placeholder = "--:--:--";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Dar_es_Salaam",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

/**
 * Live Dar es Salaam time for the REC label. The server and first client render show a
 * placeholder, so there is no hydration mismatch; the clock starts after mount.
 */
export function RecClock() {
  const [time, setTime] = useState(placeholder);

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="inline-flex items-center gap-2">
      <span
        aria-hidden
        className="inline-block h-2.5 w-2.5 animate-rec rounded-full bg-rec motion-reduce:animate-none"
      />
      <span className="sr-only">Recording</span>
      <span aria-hidden className="whitespace-nowrap tabular-nums">
        REC {time} EAT
      </span>
    </span>
  );
}
