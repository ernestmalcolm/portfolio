import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  CaseStudySection,
  TracingBeam,
} from "@/components/aceternity/tracing-beam";
import { ConfirmPlaceholder } from "@/components/confirm-placeholder";
import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/content/projects";

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
    description: project.oneLiner,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <main className="pb-24 pt-28 md:pt-32">
      <article className="mx-auto max-w-5xl px-6">
        <Button asChild variant="ghost" className="mb-8 -ml-2">
          <Link href="/#work">← Back to work</Link>
        </Button>

        <header className="max-w-3xl">
          <p className="text-sm text-muted-foreground">
            {project.role} · {project.year}
          </p>
          <h1 className="font-display mt-2 text-balance">{project.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {project.oneLiner}
          </p>
          <p className="mt-3 font-mono text-xs text-muted-foreground">
            {project.tags.join(" · ")}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.link ? (
              <Button asChild>
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  View project
                </Link>
              </Button>
            ) : (
              <ConfirmPlaceholder label="Project link — confirm" />
            )}
          </div>
        </header>

        <div className="mt-16">
          <TracingBeam>
            {project.sections?.map((section, index) => (
              <CaseStudySection
                key={section.heading}
                heading={section.heading}
                body={section.body}
                index={index}
              />
            ))}
          </TracingBeam>
        </div>
      </article>
    </main>
  );
}
