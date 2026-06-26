import type { Metadata } from "next";
import { Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  CaseStudySection,
  TracingBeam,
} from "@/components/aceternity/tracing-beam";
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
          <p className="section-label">{project.role}</p>
          <h1 className="font-display mt-3 text-balance">{project.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {project.oneLiner}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/60 px-3 py-0.5 font-mono text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project link or contact CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.link ? (
              <Button asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Visit project <ArrowUpRight className="ml-1.5 h-4 w-4" aria-hidden />
                </a>
              </Button>
            ) : (
              <Button asChild variant="outline">
                <Link href="/#contact">
                  <Mail className="mr-2 h-4 w-4" aria-hidden />
                  Contact for more information
                </Link>
              </Button>
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
