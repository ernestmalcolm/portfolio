"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";

import { SectionHeader } from "@/components/section-header";
import { projects } from "@/content/projects";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: (typeof projects)[number];
  index: number;
  featured?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <div
        className={cn(
          "group relative h-full rounded-2xl border border-border/50 bg-card/40 p-7 backdrop-blur-sm",
          "transition-all duration-300 ease-out",
          "hover:border-coral/40 hover:bg-card/70 hover:shadow-[0_0_40px_rgba(255,107,94,0.09)]",
          featured &&
            "border-coral/20 bg-gradient-to-br from-card/60 via-card/40 to-navy-light/20",
        )}
      >
        {/* Glow accent line at top */}
        <span
          className={cn(
            "absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-coral/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            featured && "opacity-60",
          )}
          aria-hidden
        />

        {/* Featured label */}
        {featured && (
          <span className="mb-4 inline-flex items-center rounded-full border border-coral/30 bg-coral/10 px-3 py-0.5 font-mono text-[10px] uppercase tracking-widest text-coral">
            Main engagement
          </span>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/60 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title — this is the case-study link */}
        <h3
          className={cn(
            "mt-4 text-xl font-semibold leading-tight",
            featured && "text-2xl",
          )}
        >
          <Link
            href={`/work/${project.slug}`}
            className="text-foreground transition-colors hover:text-coral focus-visible:text-coral"
          >
            {project.title}
          </Link>
        </h3>

        {/* Role — show tenure only on the Simplitech featured card */}
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          {project.role}
          {featured && project.year ? ` · ${project.year}` : ""}
        </p>

        {/* One-liner */}
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {project.oneLiner}
        </p>

        {/* CTA row — standalone links, never nested inside another <a> */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-coral transition-opacity hover:underline"
          >
            Case study <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </Link>

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground underline-offset-4 hover:text-coral hover:underline"
            >
              Visit site <ArrowUpRight className="h-3 w-3" aria-hidden />
            </a>
          ) : (
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground underline-offset-4 hover:text-coral hover:underline"
            >
              <Mail className="h-3 w-3" aria-hidden />
              Contact for more information
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function WorkSection() {
  const reduceMotion = useReducedMotion();
  const [flagship, ...rest] = projects;

  return (
    <section id="work" className="section-pad scroll-mt-24 border-b border-border/40">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <SectionHeader
            label="Portfolio"
            title="Selected work"
            description="Named projects, real roles — no client names or internal numbers."
          />
        </motion.div>

        {/* Simplitech — full-width featured card */}
        {flagship && (
          <div className="mt-12">
            <ProjectCard project={flagship} index={0} featured />
          </div>
        )}

        {/* Remaining projects — 2-column grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {rest.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
