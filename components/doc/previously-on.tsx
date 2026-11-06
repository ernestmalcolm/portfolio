/** Thin strip under the header on every page except home */
export function PreviouslyOn({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-strip text-camera-text">
      <p className="container-page flex flex-wrap items-baseline gap-x-4 gap-y-1.5 py-3.5">
        <span className="font-mono text-xs text-marker">Previously on Ernest</span>
        <span className="text-[15px]">{children}</span>
      </p>
    </div>
  );
}
