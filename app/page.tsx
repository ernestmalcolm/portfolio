import Link from "next/link";

import { BranchRules } from "@/components/doc/branch-rules";
import { CurrentlyFilming } from "@/components/doc/currently-filming";
import { DeletedScenes } from "@/components/doc/deleted-scenes";
import { EpisodeCard } from "@/components/doc/episode-card";
import { InterviewFrame } from "@/components/doc/interview-frame";
import { InterviewQA } from "@/components/doc/interview-qa";
import { Receipt } from "@/components/doc/receipt";
import { SectionHeading } from "@/components/doc/section-heading";
import { StickyNote } from "@/components/doc/sticky-note";
import { StageDirection } from "@/components/doc/talking-head";
import { Viewfinder } from "@/components/doc/viewfinder";
import { WhiteboardAgenda } from "@/components/doc/whiteboard-agenda";
import { WorkFolder } from "@/components/doc/work-folder";
import { branchRules, homeInterview, receiptRoles } from "@/content/about";
import { getSelectedProjects } from "@/content/projects";
import { currentlyFilming, deletedScenes, episodeCards, pilot, theMeeting } from "@/content/show";
import { getPublishedPosts } from "@/content/writing/index";
import { siteConfig } from "@/lib/site-config";
import { formatDate } from "@/lib/utils";

export default function HomePage() {
  const selected = getSelectedProjects();
  const latestPost = getPublishedPosts()[0];
  const { shortVersion } = pilot;

  return (
    <main>
      {/* Ep 1: the viewfinder */}
      <section aria-labelledby="pilot-title" className="bg-panel-dark px-4 pb-[72px] pt-12 sm:px-8">
        <Viewfinder className="px-6 pb-[72px] pt-16 sm:px-16">
          <div className="flex flex-col gap-9 min-[900px]:flex-row min-[900px]:flex-wrap min-[900px]:items-center min-[900px]:justify-between">
            <div className="min-w-0 min-[900px]:flex-[1_1_400px]">
              <p className="font-mono text-[13px] text-muted">{pilot.label}</p>
              <h1
                id="pilot-title"
                className="mt-3 font-condensed text-[clamp(3.2rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.015em]"
              >
                {siteConfig.name}
              </h1>
              <p className="mt-[18px] font-mono text-[15px] text-muted">
                {siteConfig.title} in {siteConfig.location}.
              </p>
              <p className="mt-3.5 max-w-[34rem] text-[22px] leading-[1.45]">{siteConfig.tagline}</p>
              <div className="mt-[30px] flex flex-wrap items-center gap-5">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex min-h-[48px] items-center rounded bg-camera px-[26px] font-semibold text-white no-underline hover:bg-strip hover:text-white"
                >
                  {pilot.primaryCta}
                </a>
                <Link href={pilot.secondaryCta.href} className="font-semibold underline">
                  {pilot.secondaryCta.label}
                </Link>
              </div>
            </div>
            <StickyNote
              label={pilot.stickyLabel}
              rotate={3}
              className="w-[200px] self-start px-[18px] pb-[22px] pt-[18px] text-[27px] leading-[1.08] shadow-[0_8px_16px_rgba(18,20,23,0.16)] min-[900px]:mt-6"
            >
              {pilot.sticky}
            </StickyNote>
            <InterviewFrame size="home" note={pilot.explainNote} priority className="min-[900px]:w-[300px] min-[900px]:shrink-0" />
          </div>
        </Viewfinder>
      </section>

      {/* The short version, with the receipt */}
      <section
        aria-labelledby="short-title"
        className="container-page flex flex-col gap-10 py-24 min-[900px]:flex-row min-[900px]:items-start min-[900px]:justify-between"
      >
        <div className="min-w-0 min-[900px]:flex-[1_1_460px]">
          <SectionHeading
            id="short-title"
            timecode={shortVersion.timecode}
            timecodeLabel={shortVersion.timecodeLabel}
            title={shortVersion.title}
            explainer={shortVersion.explainer}
          />
          {shortVersion.paragraphs.map((paragraph, index) => (
            <p key={paragraph} className={`${index === 0 ? "mt-5" : "mt-3.5"} max-w-[36rem] text-muted-deep`}>
              {paragraph}
            </p>
          ))}
          <StageDirection className="mt-2.5 block">{shortVersion.direction}</StageDirection>
          <Link href={shortVersion.link.href} className="mt-[18px] inline-block font-semibold underline">
            {shortVersion.link.label}
          </Link>
        </div>
        <div
          aria-hidden
          className="hidden shrink-0 basis-[170px] -rotate-[4deg] flex-col items-start gap-1 self-center text-pen min-[900px]:flex"
        >
          <span className="font-hand text-[32px] leading-[1.05]">{shortVersion.receiptNote}</span>
          <svg width="150" height="46" viewBox="0 0 150 46" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 10 C 40 40, 90 42, 140 22" />
            <path d="M126 14 L141 22 L128 33" />
          </svg>
        </div>
        <Receipt items={receiptRoles} className="w-full max-w-[370px] min-[900px]:flex-[0_1_370px]" />
      </section>

      {/* Currently filming */}
      <section aria-labelledby="now-title" className="bg-panel">
        <div className="container-page flex flex-col gap-12 py-[88px] min-[900px]:flex-row min-[900px]:items-start">
          <div className="min-w-0 min-[900px]:flex-[1_1_300px]">
            <SectionHeading
              id="now-title"
              timecode={currentlyFilming.timecode}
              timecodeLabel={currentlyFilming.timecodeLabel}
              title={currentlyFilming.title}
              explainer={currentlyFilming.explainer}
            />
            <p className="mt-3.5 font-mono text-[13px] text-muted">{currentlyFilming.updated}</p>
          </div>
          <div className="min-w-0 min-[900px]:flex-[1_1_640px]">
            <CurrentlyFilming />
          </div>
        </div>
      </section>

      {/* Ep 2: the work files */}
      <section id="work" aria-labelledby="work-title" className="bg-panel">
        <EpisodeCard as="h2" id="work-title" {...episodeCards.homeWork} className="py-10" />
        <div className="container-page pb-[88px] pt-[72px]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,500px),1fr))] gap-x-11 gap-y-16">
            {selected.map((project) => (
              <WorkFolder key={project.slug} project={project} />
            ))}
          </div>
          <p className="mt-12">
            <Link href={pilot.workLink.href} className="font-semibold underline">
              {pilot.workLink.label}
            </Link>
          </p>
        </div>
      </section>

      {/* Ep 3: personnel file teaser */}
      <section aria-labelledby="pers-title">
        <EpisodeCard as="h2" id="pers-title" {...episodeCards.homePersonnel} className="py-10" />
        <div className="container-page flex flex-col gap-14 pb-[88px] pt-[72px] min-[900px]:flex-row min-[900px]:items-start">
          <div className="min-w-0 min-[900px]:flex-[1_1_520px]">
            <InterviewQA answers={homeInterview} />
            <p className="mt-[18px] flex flex-wrap gap-x-[22px] gap-y-2">
              {pilot.personnelLinks.map((link) => (
                <Link key={link.href} href={link.href} className="font-semibold underline">
                  {link.label}
                </Link>
              ))}
            </p>
          </div>
          <BranchRules
            title={branchRules.homeTitle}
            rules={branchRules.home}
            footer={branchRules.homeFooter}
            className="min-[900px]:flex-[1_1_460px]"
          />
        </div>
      </section>

      {/* Special episode: The Meeting */}
      <section id="meeting" aria-labelledby="meeting-title" className="bg-cubicle">
        <EpisodeCard as="h2" id="meeting-title" {...episodeCards.meeting} className="py-10" />
        <div className="container-page flex flex-col gap-12 pb-24 pt-20 min-[900px]:flex-row min-[900px]:items-start">
          <div className="min-w-0 text-white min-[900px]:flex-[1_1_340px]">
            <p className="font-mono text-[13px] text-cubicle-muted">{theMeeting.setting}</p>
            <p className="mt-3.5 max-w-[26rem] text-xl leading-normal">{theMeeting.homeLine}</p>
          </div>
          <div className="min-w-0 min-[900px]:flex-[1_1_620px]">
            <WhiteboardAgenda>
              {theMeeting.homeClosing}{" "}
              <Link href={theMeeting.homeClosingLink.href} className="font-semibold underline">
                {theMeeting.homeClosingLink.label}
              </Link>
            </WhiteboardAgenda>
          </div>
        </div>
      </section>

      {/* Latest memo and deleted scenes */}
      <section
        aria-labelledby="deleted-title"
        className="container-page flex flex-col gap-12 pb-14 pt-24 min-[900px]:flex-row min-[900px]:items-start"
      >
        <div className="min-w-0 min-[900px]:flex-[1_1_360px]">
          <SectionHeading
            timecode={pilot.latestMemo.timecode}
            timecodeLabel={pilot.latestMemo.timecodeLabel}
            title={pilot.latestMemo.title}
            explainer={pilot.latestMemo.explainer}
            size="sm"
          />
          {latestPost && (
            <article className="mt-4 bg-white px-6 py-[22px] shadow-[0_8px_20px_rgba(18,20,23,0.08)]">
              <p className="font-mono text-[13px] text-muted">
                <time dateTime={latestPost.date}>{formatDate(latestPost.date)}</time>
              </p>
              <h3 className="mt-1.5 text-[21px] font-semibold leading-[1.3]">
                <Link href={`/writing/${latestPost.slug}`} className="text-ink underline hover:text-pen">
                  {latestPost.title}
                </Link>
              </h3>
              <p className="mt-2 text-muted-deep">{latestPost.excerpt}</p>
            </article>
          )}
        </div>
        <div className="min-w-0 min-[900px]:flex-[1_1_620px]">
          <SectionHeading
            id="deleted-title"
            timecode={deletedScenes.timecode}
            timecodeLabel={deletedScenes.timecodeLabel}
            title={deletedScenes.title}
            explainer={deletedScenes.explainer}
          />
          <DeletedScenes />
        </div>
      </section>
    </main>
  );
}
