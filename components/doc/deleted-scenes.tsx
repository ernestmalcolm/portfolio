"use client";

import { AnimatePresence, motion } from "motion/react";
import * as React from "react";

import { Reveal } from "@/components/motion/reveal";
import { deletedScenes } from "@/content/show";
import { stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Outtake cards, plus a button that cycles through the outtake lines.
 * With `mobileLimit`, phones show that many cards and a button for the rest.
 */
export function DeletedScenes({ mobileLimit }: { mobileLimit?: number }) {
  const [index, setIndex] = React.useState(0);
  const [showAll, setShowAll] = React.useState(false);
  const { scenes, outtakes, button, seeAll } = deletedScenes;
  const limited = mobileLimit !== undefined && !showAll && scenes.length > mobileLimit;

  return (
    <>
      <ul
        id="deleted-scenes-list"
        className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-[18px]"
      >
        {scenes.map((scene, sceneIndex) => (
          <Reveal
            as="li"
            key={scene.scene}
            delay={stagger(sceneIndex)}
            className={cn(
              "on-dark rounded bg-camera px-5 pb-4 pt-4 text-camera-text sm:pb-[22px] sm:pt-5",
              limited && sceneIndex >= mobileLimit && "hidden sm:block",
            )}
          >
            <p className="font-mono text-xs text-camera-muted">{scene.runtime}</p>
            <p className="mt-2 text-base leading-[1.45]">{scene.scene}</p>
            <p className="mt-2 font-mono text-xs text-marker">{scene.reason}</p>
          </Reveal>
        ))}
      </ul>
      {limited && (
        <button
          type="button"
          aria-controls="deleted-scenes-list"
          aria-expanded={false}
          onClick={() => setShowAll(true)}
          className="mt-3.5 min-h-[44px] font-semibold text-pen underline hover:text-pen-dark sm:hidden"
        >
          {seeAll}
        </button>
      )}
      <div className="mt-[22px] flex flex-wrap items-center gap-4">
        <p
          aria-live="polite"
          className="min-w-0 flex-[1_1_360px] font-hand text-[26px] leading-[1.15] text-ink sm:text-[30px]"
        >
          {/* A hard cut between outtakes: out, then in, no slide */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={index}
              className="block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.12 } }}
              exit={{ opacity: 0, transition: { duration: 0.12 } }}
            >
              {outtakes[index % outtakes.length]}
            </motion.span>
          </AnimatePresence>
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
