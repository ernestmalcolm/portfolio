"use client";

import * as React from "react";

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
    <blockquote
      aria-live="polite"
      className="border-l-2 border-coral/60 pl-4"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Dad joke
      </p>
      <p className="mt-2 text-base leading-relaxed text-foreground">
        {mounted ? joke : dadJokes[0]}
      </p>
      <button
        type="button"
        className="mt-3 text-sm text-coral underline-offset-4 hover:underline"
        onClick={() => setJoke(pickJoke())}
      >
        Another one…
      </button>
    </blockquote>
  );
}
