"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { TalkingHead } from "@/components/doc/talking-head";
import { Mark } from "@/components/motion/mark";
import { ease } from "@/lib/motion";
import { type Project, workPage } from "@/content/projects";

/** Manila folder holding a project's sheet: cover, title, meta, blurb and outcome */
type WorkFolderProps = {
  project: Project;
  headingLevel?: "h2" | "h3";
  /** Underlines the "Outcome" label in pen (the first folder on home) */
  markOutcome?: boolean;
};

const sheetShadow = {
  rest: "0 1px 3px rgba(18,20,23,0.18)",
  lifted: "0 10px 22px rgba(18,20,23,0.24)",
};

export function WorkFolder({ project, headingLevel = "h3", markOutcome = false }: WorkFolderProps) {
  const Heading = headingLevel;
  const [hovered, setHovered] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const lifted = hovered || focused;
  const outcomeLabel = <span className="font-mono text-xs text-muted">Outcome</span>;

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <div className="relative pt-[30px]">
        <div className="absolute left-7 top-0 h-[34px] rounded-t-[6px] bg-manila-tab px-[18px] pt-1.5 font-mono text-[13px] text-[#3E3420]">
          {project.tab}
        </div>
        <div className="relative rounded-folder bg-manila p-4 shadow-[0_2px_0_theme(colors.manila.edge)] sm:px-[22px] sm:pb-[26px] sm:pt-[22px]">
          {/* Hover or focus slides the sheet up out of the folder */}
          <motion.div
            initial={false}
            animate={lifted ? { y: -10, boxShadow: sheetShadow.lifted } : { y: 0, boxShadow: sheetShadow.rest }}
            transition={{ duration: 0.3, ease }}
            style={{ boxShadow: sheetShadow.rest }}
            className="bg-white px-[18px] pb-6 pt-5 sm:px-[22px]"
          >
            <Cover project={project} />
            <Heading className="mt-[18px] font-condensed text-[28px] font-bold leading-[1.1]">{project.title}</Heading>
            <p className="mt-1 font-mono text-[13px] text-muted">{project.meta}</p>
            <p className="mt-3 text-muted-deep">{project.blurb}</p>
            <p className="mt-3 border-t border-dashed border-[#C9CDC6] pt-2.5 text-[15px] text-ink">
              {markOutcome ? (
                <Mark type="underline" color="#2244B8" padding={1} strokeWidth={1.5}>
                  {outcomeLabel}
                </Mark>
              ) : (
                outcomeLabel
              )}{" "}
              {project.outcome}
            </p>
            <p className="mt-3.5 flex flex-wrap gap-x-5 gap-y-2">
              <Link href={`/work/${project.slug}`} className="font-semibold underline">
                {workPage.openFile}
                <span className="sr-only">: {project.title}</span>
              </Link>
              {project.link && project.linkOnFolder && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                  {project.linkLabel}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
            </p>
          </motion.div>
          {project.onHold && (
            <p className="absolute right-[26px] top-10 rotate-[-12deg] border-[3px] border-double border-stamp bg-white/80 px-3.5 py-1 font-mono text-lg font-semibold tracking-[0.12em] text-stamp">
              ON HOLD
            </p>
          )}
        </div>
      </div>
      <TalkingHead quip={project.quip} className="mt-3.5" />
    </article>
  );
}

export function Cover({
  project,
  wide = false,
  priority = false,
}: {
  project: Project;
  wide?: boolean;
  priority?: boolean;
}) {
  const frame = wide ? "aspect-[16/7]" : "aspect-video";

  if (!project.cover) {
    return (
      <div
        role="img"
        aria-label={`Screenshot of ${project.title} coming soon`}
        className={`${frame} flex items-center justify-center border border-dashed border-[#A9B0B6] bg-[#E6E8E4] font-mono text-[13px] text-muted`}
      >
        [{project.title} screenshot]
      </div>
    );
  }

  return (
    <div className={`${frame} relative overflow-hidden border border-[#D5D8D3] bg-[#E6E8E4]`}>
      <Image
        src={project.cover}
        alt={`Home page of ${project.title}`}
        fill
        priority={priority}
        sizes={wide ? "(min-width: 1240px) 1176px, 100vw" : "(min-width: 1100px) 520px, 100vw"}
        className="object-cover object-top"
      />
    </div>
  );
}
