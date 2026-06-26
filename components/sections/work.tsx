"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { ConfirmPlaceholder } from "@/components/confirm-placeholder";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/content/projects";

export function WorkSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="work" className="section-pad border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2>Selected work</h2>
          <p className="mt-4 text-muted-foreground">
            Named projects, moderate detail, real roles — no client names or
            internal numbers.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.li
              key={project.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link href={`/work/${project.slug}`} className="group block h-full">
                <Card className="h-full border-border/60 bg-card/50 transition-all duration-300 hover:border-coral/40 hover:shadow-lg hover:shadow-coral/5">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle className="text-lg leading-snug group-hover:text-coral">
                        {project.title}
                      </CardTitle>
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral"
                        aria-hidden
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {project.role} · {project.year}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {project.oneLiner}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {!project.link && (
                      <ConfirmPlaceholder label="Project link — confirm" />
                    )}
                  </CardContent>
                </Card>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
