import { PreviouslyOn } from "@/components/doc/previously-on";
import { previouslyOn } from "@/content/show";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectCover } from "@/components/project-cover";
import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/content/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.flatMap((project) =>
    project.slug ? [{ slug: project.slug }] : [],
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.oneLiner,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const meta = [
    { label: "Organisation", value: project.organisation },
    { label: "Role", value: project.role },
    { label: "Years", value: project.years },
    { label: "Status", value: project.status },
  ].filter((item): item is { label: string; value: string } =>
    Boolean(item.value),
  );

  return (
    <>
      <PreviouslyOn>{previouslyOn.caseStudy}</PreviouslyOn>
    <main className="container-page relative isolate pb-24 pt-12 md:pt-16">
      <p>
        <Link href="/work" className="link text-sm">
          All work
        </Link>
      </p>

      <article className="mt-8">
        <div>
          <header>
            <h1>{project.title}</h1>
            <p className="mt-6 max-w-prose text-xl leading-snug">
              {project.oneLiner}
            </p>

            <dl className="mt-8 grid max-w-3xl gap-x-8 gap-y-4 border-y border-line py-6 text-sm sm:grid-cols-2 lg:grid-cols-4">
              {meta.map((item) => (
                <div key={item.label}>
                  <dt className="text-muted">{item.label}</dt>
                  <dd className="mt-1 text-cream">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              {project.link ? (
                <Button asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.linkLabel ?? `Open ${project.title}`}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </Button>
              ) : (
                <p className="max-w-prose text-muted">
                  There&apos;s no public link for this one.{" "}
                  <a href="#reception" className="link">
                    Ask me about it
                  </a>
                  .
                </p>
              )}
            </div>
          </header>
        </div>

        <ProjectCover
          cover={project.cover}
          title={project.title}
          size="hero"
          priority
          className="mt-12"
        />

        <div className="mt-16 max-w-prose space-y-12">
          {project.sections?.map((section) => (
            <div key={section.heading}>
              <section>
                <h2 className="text-[1.5rem] md:text-[1.875rem]">
                  {section.heading}
                </h2>
                {section.body && <p className="mt-4 text-lg">{section.body}</p>}
                {section.items && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-lg marker:text-mist">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            </div>
          ))}
        </div>

        {project.slug === "simplify" && (
          <p className="mt-12">
            <Link href="/work/simplifyaudit" className="link">
              Read the SimplifyAudit case study
            </Link>
          </p>
        )}
      </article>
    </main>
    </>
  );
}
