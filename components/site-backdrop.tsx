/**
 * Site wide background: a fixed dot grid with two slow drifting glows, coral
 * and blue. Sits behind every page so the texture carries all the way down.
 */
export function SiteBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="site-dots absolute inset-0" />
      <div className="glow-drift absolute -left-[20vw] top-[10vh] h-[70vh] w-[70vw] rounded-full bg-[radial-gradient(closest-side,rgba(255,107,94,0.18),transparent)]" />
      <div className="glow-drift-reverse absolute -right-[20vw] bottom-[-10vh] h-[80vh] w-[70vw] rounded-full bg-[radial-gradient(closest-side,rgba(91,112,150,0.3),transparent)]" />
    </div>
  );
}
