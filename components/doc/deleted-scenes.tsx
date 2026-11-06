"use client";

import * as React from "react";

import { deletedScenes } from "@/content/show";

/** Outtake cards, plus a button that cycles through the outtake lines */
export function DeletedScenes() {
  const [index, setIndex] = React.useState(0);
  const { scenes, outtakes, button } = deletedScenes;

  return (
    <>
      <ul className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-[18px]">
        {scenes.map((scene) => (
          <li key={scene.scene} className="on-dark rounded bg-camera px-5 pb-[22px] pt-5 text-camera-text">
            <p className="font-mono text-xs text-camera-muted">{scene.runtime}</p>
            <p className="mt-2 text-base leading-[1.45]">{scene.scene}</p>
            <p className="mt-2 font-mono text-xs text-marker">{scene.reason}</p>
          </li>
        ))}
      </ul>
      <div className="mt-[22px] flex flex-wrap items-center gap-4">
        <p aria-live="polite" className="min-w-0 flex-[1_1_360px] font-hand text-[30px] leading-[1.15] text-ink">
          {outtakes[index % outtakes.length]}
        </p>
        <button
          type="button"
          onClick={() => setIndex((i) => i + 1)}
          className="min-h-[44px] rounded bg-camera px-4 font-semibold text-white hover:bg-strip"
        >
          {button}
        </button>
      </div>
    </>
  );
}
