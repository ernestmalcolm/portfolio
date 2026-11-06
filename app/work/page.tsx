import { PreviouslyOn } from "@/components/doc/previously-on";
import { previouslyOn } from "@/content/show";
import type { Metadata } from "next";

import { WorkList } from "@/components/work-list";
import {
  consulting,
  getProjectsByGroup,
  projectGroups,
} from "@/content/projects";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Products Ernest Mwinchumu leads at Simplitech, his own products, and his consulting work.",
};

export default function WorkPage() {
  return (
    <>
      <PreviouslyOn>{previouslyOn.work}</PreviouslyOn>
    <main className="container-page relative isolate pb-24 pt-16 md:pt-24">
      <div>
        <h1>Work</h1>
        <p className="mt-6 max-w-prose text-xl leading-snug">
          What I lead at Simplitech, what I build on my own, and how I help
          other businesses.
        </p>
      </div>

      {projectGroups.map((group) => (
        <section
          key={group.id}
          aria-labelledby={`${group.id}-heading`}
          className="mt-20"
        >
          <div>
            <h2 id={`${group.id}-heading`}>{group.title}</h2>
            <p className="mt-4 max-w-prose text-muted">{group.intro}</p>
          </div>
          <div className="mt-8">
            <WorkList
              projects={getProjectsByGroup(group.id)}
              hideOrganisation={group.id === "simplitech"}
            />
          </div>
        </section>
      ))}

      <section aria-labelledby="consulting-heading" className="mt-20">
        <div>
          <h2 id="consulting-heading">{consulting.title}</h2>
          <p className="mt-6 max-w-prose text-lg">{consulting.body}</p>
          <ul className="mt-6 max-w-prose list-disc space-y-2 pl-5 marker:text-mist">
            {consulting.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className="mt-8">
            <a
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                "A project",
              )}`}
              className="link"
            >
              Email me about a project
            </a>
          </p>
        </div>
      </section>
    </main>
    </>
  );
}
