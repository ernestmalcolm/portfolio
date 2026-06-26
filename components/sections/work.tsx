"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { ConfirmPlaceholder } from "@/components/confirm-placeholder";
import { SectionHeader } from "@/components/section-header";
import { projects } from "@/content/projects";

export function WorkSection() {
  const reduceMotion = useReducedMotion();

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
            description="Named projects, moderate detail, real roles — no client names or internal numbers."
          />
        </motion.div>

        <ul className="mt-12 divide-y divide-border/50 border-y border-border/50">
          {projects.map((project, index) => (
            <motion.li
              key={project.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
            >
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
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
