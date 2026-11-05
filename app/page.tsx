import Link from "next/link";

import { PageBackdrop } from "@/components/page-backdrop";
import { Receipt } from "@/components/receipt";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { WorkList } from "@/components/work-list";
import { heading } from "@/content/about";
import { getSelectedProjects } from "@/content/projects";
import { getPublishedPosts } from "@/content/writing/index";
import { siteConfig } from "@/lib/site-config";
import { formatDate } from "@/lib/utils";

export default function HomePage() {
  const [latestPost] = getPublishedPosts();

  return (
    <main>
      <section aria-labelledby="hero-heading" className="relative isolate">
        <PageBackdrop strong />
        <div className="container-page grid min-h-[calc(100svh-4rem)] items-center gap-12 py-16 md:py-24 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div>
            <Reveal>
              <h1
                id="hero-heading"
                className="text-[3.5rem] leading-[0.95] tracking-[-0.02em] sm:text-[5rem] md:text-[6.5rem]"
              >
                <span className="text-gradient">
                  Ernest
                  <br />
                  Mwinchumu
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-mist md:text-xl">
                {siteConfig.title} in {siteConfig.location}.
              </p>
              <p className="mt-3 max-w-2xl text-xl leading-snug md:text-2xl">
                {siteConfig.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Button asChild>
                  <a href={`mailto:${siteConfig.email}`}>Email me</a>
                </Button>
                <Link href="/work" className="link">
                  See my work
                </Link>
              </div>
            </Reveal>
          </div>
          <Receipt short className="mx-auto lg:mx-0 lg:justify-self-end" />
        </div>
      </section>

      <section aria-labelledby="intro-heading" className="section">
        <div className="container-page">
          <Reveal>
            <h2 id="intro-heading">The short version</h2>
            <div className="mt-6 max-w-prose space-y-4 text-lg">
              <p>
                I lead product, design and tech for Simplify at Simplitech.
                About 4,000 Tanzanian businesses use it to issue their fiscal
                receipts. Millions of them so far.
              </p>
              <p>
                I went from intern to Tech Lead in about 18 months, and these
                days my work sits where the market, the product, the tech and
                the business case meet. {siteConfig.personalityLine}
              </p>
            </div>
            <p className="mt-6">
              <Link href="/about" className="link">
                More about me
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="work-heading" className="section">
        <div className="container-page">
          <Reveal>
            <h2 id="work-heading">Selected work</h2>
          </Reveal>
          <div className="mt-10">
            <WorkList projects={getSelectedProjects()} showCovers />
          </div>
          <Reveal>
            <p className="mt-8">
              <Link href="/work" className="link">
                See all work, including consulting
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="heading-heading" className="section">
        <div className="container-page">
          <Reveal>
            <h2 id="heading-heading">Where I&apos;m heading</h2>
            <p className="mt-6 max-w-prose text-lg">{heading.teaser}</p>
            <p className="mt-6">
              <Link href="/about#heading" className="link">
                Read where I&apos;m heading
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {latestPost && (
        <section aria-labelledby="writing-heading" className="section">
          <div className="container-page">
            <Reveal>
              <h2 id="writing-heading">Latest writing</h2>
              <article className="mt-8 max-w-prose">
                <time dateTime={latestPost.date} className="text-sm text-muted">
                  {formatDate(latestPost.date)}
                </time>
                <h3 className="mt-1">
                  <Link
                    href={`/writing/${latestPost.slug}`}
                    className="hover:text-coral hover:underline hover:underline-offset-[3px]"
                  >
                    {latestPost.title}
                  </Link>
                </h3>
                <p className="mt-2 text-muted">{latestPost.excerpt}</p>
              </article>
            </Reveal>
          </div>
        </section>
      )}
    </main>
  );
}
