"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

// From content_drafts.md — starter dad-joke set
const dadJokes = [
  "I told my code a joke. No reaction — just a sense of syntax.",
  "Why did the auditor break up with the spreadsheet? Too many unresolved issues.",
  "I tried to write a finance pun, but it made no cents.",
  "Why don't programmers like nature? Too many bugs.",
  "Parallel lines have so much in common — shame they'll never meet. Bit like my side projects and a finish date.",
  "I'm reading a book on anti-gravity. Impossible to put down.",
  "What do you call a strategist who only plans? All talk, no commit.",
  "Why did the startup go to therapy? Too many unresolved dependencies.",
  "I asked the designer for a lighter shade. He ghosted me — said it was out of his palette.",
  "I had a UDP joke here, but you might not get it.",
] as const;

function pickJoke() {
  return dadJokes[Math.floor(Math.random() * dadJokes.length)];
}

export function DadJoke() {
  const [joke, setJoke] = React.useState<string>(dadJokes[0]);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setJoke(pickJoke());
    setMounted(true);
  }, []);

  return (
    <aside
      aria-live="polite"
      className="rounded-2xl border border-dashed border-border/70 bg-card/50 p-4 md:p-5"
    >
      <p className="text-xs font-medium uppercase tracking-widest text-coral">
        Dad joke of the visit
      </p>
      <p className="mt-2 text-sm text-foreground md:text-base">
        {mounted ? joke : dadJokes[0]}
      </p>
      <Button
        type="button"
        variant="link"
        className="mt-2 h-auto p-0 text-coral"
        onClick={() => setJoke(pickJoke())}
      >
        Tell me another
      </Button>
    </aside>
  );
}
