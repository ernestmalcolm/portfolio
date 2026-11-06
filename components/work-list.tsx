import Link from "next/link";

import { ProjectCover } from "@/components/project-cover";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

type RowOptions = {
  headingLevel: "h2" | "h3";
  /** Show the cover screenshot (Selected work on the home page) */
  showCovers: boolean;
  /** Hide the organisation when the group heading already names it */
  hideOrganisation: boolean;
};

function ProjectRow({
  project,
  index,
  headingLevel,
  showCovers,
  hideOrganisation,
}: RowOptions & { project: Project; index: number }) {
  const withCover = showCovers && Boolean(project.cover);
  const Heading = headingLevel;
  const caseStudy = project.slug ? `/work/${project.slug}` : null;

  return (
    <li className="border-t border-line">
      <div
        className={cn(
          "-mx-4 grid gap-2 rounded-lg px-4 py-8 transition-colors duration-300 hover:bg-navy-light/60 md:gap-8",
          withCover
            ? "md:grid-cols-[11rem_minmax(0,1fr)_14rem]"
            : "md:grid-cols-[11rem_minmax(0,1fr)]",
        )}
      >
        <div className="text-sm text-muted">
          {!hideOrganisation && <p>{project.organisation}</p>}
          {project.years && <p>{project.years}</p>}
        </div>
        <div>
          <Heading className="text-xl font-semibold">
            {caseStudy ? (
              <Link
                href={caseStudy}
                className="hover:text-coral hover:underline hover:underline-offset-[3px]"
              >
                {project.title}
              </Link>
            ) : (
              project.title
            )}
            {project.status && (
              <span className="ml-3 align-middle text-sm font-normal text-muted">
                {project.status}
              </span>
            )}
          </Heading>
          <p className="mt-1 text-sm text-mist">{project.role}</p>
          <p className="mt-3 max-w-prose">{project.oneLiner}</p>
          <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {caseStudy && (
              <Link href={caseStudy} className="link">
                Read the case study
                <span className="sr-only">: {project.title}</span>
              </Link>
            )}
            {project.seeAlso && (
              <Link href={project.seeAlso.href} className="link">
                {project.seeAlso.label}
              </Link>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                {project.linkLabel ?? `Open ${project.title}`}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </p>
        </div>
        {withCover && (
          <ProjectCover
            cover={project.cover}
            title={project.title}
            size="row"
            className="order-first mb-4 md:order-none md:mb-0"
          />
        )}
      </div>
    </li>
  );
}

export function WorkList({
  projects,
  headingLevel = "h3",
  showCovers = false,
  hideOrganisation = false,
}: {
  projects: Project[];
} & Partial<RowOptions>) {
  return (
    <ul className="border-b border-line">
      {projects.map((project, index) => (
        <ProjectRow
          key={project.title}
          project={project}
          index={index}
          headingLevel={headingLevel}
          showCovers={showCovers}
          hideOrganisation={hideOrganisation}
        />
      ))}
    </ul>
  );
}
