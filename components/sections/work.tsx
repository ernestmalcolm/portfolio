import Link from "next/link";

import { ConfirmPlaceholder } from "@/components/confirm-placeholder";
import { SectionHeader } from "@/components/section-header";
import { projects } from "@/content/projects";

export function WorkSection() {
  return (
    <section id="work" className="section-pad border-b border-border/40 scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          label="Portfolio"
          title="Selected work"
          description="Named projects, moderate detail, real roles — no client names or internal numbers."
        />

        <ul className="mt-12 divide-y divide-border/50 border-y border-border/50">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className="group grid gap-3 py-8 transition-colors md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-8"
              >
                <div className="min-w-0">
                  <h3 className="text-lg font-medium text-foreground transition-colors group-hover:text-coral md:text-xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs tabular-nums text-muted-foreground">
                    {project.role} · {project.year}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {project.oneLiner}
                  </p>
                  {!project.link && (
                    <p className="mt-2">
                      <ConfirmPlaceholder label="project link" />
                    </p>
                  )}
                </div>
                <p className="font-mono text-xs text-muted-foreground md:pt-1 md:text-right">
                  {project.tags.join(" · ")}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
