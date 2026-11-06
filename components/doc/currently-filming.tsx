import { currentlyFilming } from "@/content/show";

/** Dark slate with a clapperboard stripe and the current scenes */
export function CurrentlyFilming() {
  return (
    <div className="on-dark min-w-0 overflow-hidden rounded bg-camera text-camera-text">
      <div
        aria-hidden
        className="h-[26px] bg-[repeating-linear-gradient(-45deg,#F2F1EC_0_18px,#121417_18px_36px)]"
      />
      <ul>
        {currentlyFilming.scenes.map((scene) => (
          <li key={scene.scene} className="flex flex-wrap gap-x-6 gap-y-1 border-t border-strip px-[26px] py-[18px]">
            <span className="shrink-0 basis-[150px] font-mono text-[13px] text-marker">{scene.scene}</span>
            <span className="min-w-0 flex-[1_1_360px] text-base">{scene.body}</span>
          </li>
        ))}
      </ul>
      <p className="border-t border-strip px-[26px] pb-[18px] pt-3.5 font-mono text-xs text-camera-muted">
        {currentlyFilming.footer}
      </p>
    </div>
  );
}
