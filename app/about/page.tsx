import { PreviouslyOn } from "@/components/doc/previously-on";
import { previouslyOn } from "@/content/show";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Receipt } from "@/components/receipt";
import { Timeline } from "@/components/timeline";
import {
  beyondWork,
  bio,
  education,
  experience,
  growthStory,
  heading,
  howIWork,
  languages,
  skills,
} from "@/content/about";
import { getPublishedPosts } from "@/content/writing/index";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, career and direction of Ernest Mwinchumu, Product and Tech Lead in Dar es Salaam.",
};

function DefinitionRows({ rows }: { rows: { title: string; body: string }[] }) {
  return (
    <dl className="border-b border-line">
      {rows.map((row, index) => (
        <div
          key={row.title}
          className="grid gap-1 border-t border-line py-5 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-8"
        >
          <dt className="font-semibold">{row.title}</dt>
          <dd className="max-w-prose text-mist">{row.body}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function AboutPage() {
  const [latestPost] = getPublishedPosts();

  return (
    <>
      <PreviouslyOn>{previouslyOn.about}</PreviouslyOn>
    <main className="pb-24">
      <section
        aria-labelledby="about-heading"
        className="container-page relative isolate pb-16 pt-16 md:pb-24 md:pt-24"
      >
        <div>
          <h1 id="about-heading" className="max-w-3xl">
            Product, tech, business.{" "}
            <span className="text-gradient">I work in the overlap.</span>
          </h1>
        </div>

        <div
          className="mt-12 grid gap-12 md:grid-cols-[minmax(0,1fr)_16rem] md:items-start"
        >
          <div className="max-w-prose space-y-4 text-lg">
            {bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>{siteConfig.personalityLine}</p>
          </div>
          <Image
            src={siteConfig.photo}
            alt="Ernest Mwinchumu in a navy blazer, seated against a dark grey backdrop"
            width={960}
            height={1200}
            className="w-full max-w-[16rem] rounded-img"
            sizes="16rem"
            priority
          />
        </div>

        <div>
          <h2 className="mt-16 text-[1.5rem] md:text-[1.875rem]">How I work</h2>
          <p className="mt-4 max-w-prose text-lg">{howIWork}</p>
        </div>
      </section>

      <section aria-labelledby="receipt-heading" className="section">
        <div className="container-page grid gap-12 md:grid-cols-[minmax(0,1fr)_24rem] md:items-start">
          <div>
            <h2 id="receipt-heading">Intern to Tech Lead in 18 months</h2>
            <div className="mt-6 max-w-prose space-y-4 text-lg">
              {growthStory.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>Here&apos;s where that leaves me today, on a receipt.</p>
            </div>
          </div>
          <Receipt print="click" className="mx-auto md:mx-0" />
        </div>
      </section>

      <section aria-labelledby="experience-heading" className="section">
        <div className="container-page">
          <div>
            <h2 id="experience-heading">Experience</h2>
          </div>
          <div className="mt-8">
            <Timeline entries={experience} />
          </div>

          <div>
            <h2 className="mt-16">Education</h2>
          </div>
          <div className="mt-8">
            <Timeline entries={education} />
          </div>

          <p className="mt-8">
            <span className="font-semibold">Languages:</span> {languages}
          </p>
        </div>
      </section>

      <section aria-labelledby="skills-heading" className="section">
        <div className="container-page">
          <div>
            <h2 id="skills-heading">Skills and tools</h2>
          </div>
          <div className="mt-8">
            <DefinitionRows
              rows={skills.map((s) => ({ title: s.group, body: s.items }))}
            />
          </div>
        </div>
      </section>

      <section
        id="heading"
        aria-labelledby="heading-heading"
        className="section"
      >
        <div className="container-page">
          <div>
            <h2 id="heading-heading">Where I&apos;m heading</h2>
            <div className="mt-6 max-w-prose space-y-4 text-lg">
              {heading.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {latestPost && (
              <p className="mt-6">
                <Link href={`/writing/${latestPost.slug}`} className="link">
                  Read what I believe about digital in Tanzania
                </Link>
              </p>
            )}
          </div>
        </div>
      </section>

      <section aria-labelledby="beyond-heading" className="section">
        <div className="container-page">
          <div>
            <h2 id="beyond-heading">Beyond work</h2>
          </div>
          <div className="mt-8">
            <DefinitionRows rows={beyondWork} />
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
