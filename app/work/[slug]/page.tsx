import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ComingUpNext } from "@/components/doc/coming-up-next";
import { EpisodeCard } from "@/components/doc/episode-card";
import { PreviouslyOn } from "@/components/doc/previously-on";
import { SectionHeading } from "@/components/doc/section-heading";
import { TalkingHead } from "@/components/doc/talking-head";
import { Cover } from "@/components/doc/work-folder";
import { Reveal } from "@/components/motion/reveal";
import { stagger } from "@/lib/motion";
import { getProject, type ProjectSection, projects, workPage } from "@/content/projects";
import { comingUpNext, previouslyOn } from "@/content/show";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.blurb,
  };
}

/** "00:06:10" style timecode, counted on from where this part starts */
function timecodeAt(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `00:${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
}

function SectionBody({ section }: { section: ProjectSection }) {
  return (
    <>
      {section.body && <p className="mt-2.5 max-w-[40rem] text-muted-deep">{section.body}</p>}
      {section.items && (
        <ul className="mt-3.5 max-w-[46rem] list-disc space-y-2 pl-[22px] text-muted-deep">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {section.rows && (
        <dl className="mt-3.5 grid max-w-[46rem] gap-x-6 gap-y-3 sm:grid-cols-[170px_minmax(0,1fr)]">
          {section.rows.map((row) => (
            <div key={row.term} className="contents">
              <dt className="pt-[3px] font-mono text-sm text-muted">{row.term}</dt>
              <dd className="mb-2 text-muted-deep sm:mb-0">{row.detail}</dd>
            </div>
          ))}
        </dl>
      )}
    </>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[index + 1];
  const start = 6 * 60 + 10 + index * 6 * 60;

  const facts = [
    { label: "Organisation", value: project.organisation },
    { label: "Role", value: project.role },
    { label: "Years", value: project.years },
    project.extraFact,
  ];

  const sections = [
    ...project.sections,
    { heading: "Outcome", explainer: "Where it landed.", body: project.outcomeDetail },
  ];

  return (
    <main>
      <PreviouslyOn>{previouslyOn.caseStudy}</PreviouslyOn>
      <EpisodeCard label={`Episode 2, Part ${index + 1}`} title={project.title} explainer={project.tagline} />

      <section aria-label={`${project.title} case study`} className="bg-panel">
        <div className="container-page py-14 sm:py-[88px]">
          <Link href="/work" className="font-semibold underline">
            {workPage.backLink}
          </Link>

          <Reveal
            as="dl"
            className="on-dark mt-7 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 border-l-[6px] border-marker bg-camera px-[26px] py-[22px] text-white"
          >
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs text-camera-muted">{fact.label}</dt>
                <dd className="mt-0.5">{fact.value}</dd>
              </div>
            ))}
          </Reveal>

          <p className="mt-5">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                {project.linkLabel ?? `Open ${project.title}`}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <span className="text-muted-deep">{workPage.noLink}</span>
            )}
          </p>

          <Reveal fade className="mt-6">
            <Cover project={project} wide priority />
          </Reveal>

          <div className="mt-14 flex flex-col gap-14 min-[900px]:flex-row min-[900px]:items-start">
            <div className="min-w-0 min-[900px]:flex-[1_1_620px]">
              {sections.map((section, sectionIndex) => (
                <div key={section.heading} className={sectionIndex > 0 ? "mt-10" : undefined}>
                  <SectionHeading
                    size="md"
                    timecode={timecodeAt(start + sectionIndex * 80)}
                    timecodeLabel={section.heading}
                    title={section.heading}
                    explainer={section.explainer}
                  />
                  <Reveal fade>
                    <SectionBody section={section} />
                  </Reveal>
                </div>
              ))}
            </div>
            <aside className="flex min-w-0 flex-col gap-[22px] min-[900px]:flex-[1_1_300px]">
              {project.asides.map((quip, asideIndex) => (
                <Reveal key={quip.line} delay={stagger(asideIndex)}>
                  <TalkingHead quip={quip} />
                </Reveal>
              ))}
            </aside>
          </div>
        </div>
      </section>

      <ComingUpNext
        next={
          next
            ? {
                label: `Coming up next: Episode 2, Part ${index + 2}`,
                title: next.title,
                href: `/work/${next.slug}`,
                blurb: next.teaser,
              }
            : comingUpNext.work
        }
      />
    </main>
  );
}
