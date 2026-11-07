import type { Metadata } from "next";

import { ComingUpNext } from "@/components/doc/coming-up-next";
import { ConsultingCabinet } from "@/components/doc/consulting-cabinet";
import { EpisodeCard } from "@/components/doc/episode-card";
import { PreviouslyOn } from "@/components/doc/previously-on";
import { SectionHeading } from "@/components/doc/section-heading";
import { TalkingHead } from "@/components/doc/talking-head";
import { WorkFolder } from "@/components/doc/work-folder";
import { Reveal } from "@/components/motion/reveal";
import { GiftFolder } from "@/components/props/office-props";
import { stagger } from "@/lib/motion";
import { consulting, getProjectsByGroup, type ProjectGroup, workPage } from "@/content/projects";
import { comingUpNext, episodeCards, previouslyOn } from "@/content/show";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Work",
  description: "Simplify and SimplifyAudit at Simplitech, my own products, and consulting for other businesses.",
};

const groups: ProjectGroup[] = ["simplitech", "personal"];

export default function WorkPage() {
  return (
    <main>
      <PreviouslyOn>{previouslyOn.work}</PreviouslyOn>
      <EpisodeCard {...episodeCards.work} />

      {groups.map((group, index) => {
        const copy = workPage.groups[group];
        const headingId = `group-${group}`;
        return (
          <section key={group} aria-labelledby={headingId} className={cn(index % 2 === 0 && "bg-panel")}>
            <div className="container-page py-14 sm:py-[88px]">
              <SectionHeading
                id={headingId}
                timecode={copy.timecode}
                timecodeLabel={copy.title}
                title={copy.title}
                explainer={copy.explainer}
              />
              <Reveal as="p" className="mt-2.5 max-w-[40rem] text-muted-deep">
                {copy.intro}
              </Reveal>
              <div
                className={cn(
                  "mt-10 grid",
                  group === "simplitech"
                    ? "grid-cols-[repeat(auto-fit,minmax(min(100%,500px),1fr))] gap-x-11 gap-y-16"
                    : "grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-x-9 gap-y-14",
                )}
              >
                {getProjectsByGroup(group).map((project, projectIndex, groupProjects) => {
                  // Prop: a gift-wrapped folder resting on the very last folder of the index
                  const last = group === groups[groups.length - 1] && projectIndex === groupProjects.length - 1;
                  return (
                    <Reveal key={project.slug} delay={stagger(projectIndex)}>
                      <WorkFolder
                        project={project}
                        prop={
                          last ? (
                            <GiftFolder className="absolute -top-2 right-6 h-11 w-11 sm:h-12 sm:w-12 lg:-top-3 lg:h-14 lg:w-14" />
                          ) : undefined
                        }
                      />
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <section aria-labelledby="consulting-title" className="bg-panel">
        <div className="container-page py-14 sm:py-[88px]">
          <div className="flex flex-col gap-12 min-[900px]:flex-row min-[900px]:items-start">
            <div className="min-w-0 min-[900px]:flex-[1_1_520px]">
              <SectionHeading
                id="consulting-title"
                timecode={consulting.timecode}
                timecodeLabel={consulting.title}
                title={consulting.title}
                explainer={consulting.explainer}
              />
              <Reveal>
                <p className="mt-2.5 max-w-[40rem] text-muted-deep">{consulting.body}</p>
                <TalkingHead quip={consulting.quip} className="mt-[22px]" />
                <a href={`mailto:${siteConfig.email}`} className="mt-[22px] inline-block font-semibold underline">
                  {consulting.cta}
                </a>
              </Reveal>
            </div>
            <Reveal
              delay={stagger(1)}
              className="min-w-0 border-t-[10px] border-cubicle bg-white px-6 pb-[34px] pt-8 shadow-[0_12px_30px_rgba(18,20,23,0.12)] sm:px-[34px] min-[900px]:flex-[1_1_400px]"
            >
              <h3 className="font-condensed text-2xl font-bold">{consulting.pointsTitle}</h3>
              <ul className="mt-3.5 list-disc space-y-2 pl-[22px] text-muted-deep">
                {consulting.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <ConsultingCabinet />
        </div>
      </section>

      <ComingUpNext next={comingUpNext.work} />
    </main>
  );
}
