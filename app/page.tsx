import Link from "next/link";

import { BranchRules } from "@/components/doc/branch-rules";
import { ComingUpNext } from "@/components/doc/coming-up-next";
import { CurrentlyFilming } from "@/components/doc/currently-filming";
import { DeletedScenes } from "@/components/doc/deleted-scenes";
import { EpisodeCard } from "@/components/doc/episode-card";
import { InterviewFrame } from "@/components/doc/interview-frame";
import { InterviewQA } from "@/components/doc/interview-qa";
import { Receipt } from "@/components/doc/receipt";
import { SceneBridge } from "@/components/doc/scene-bridge";
import { SectionHeading } from "@/components/doc/section-heading";
import { StickyNote } from "@/components/doc/sticky-note";
import { StageDirection } from "@/components/doc/talking-head";
import { Viewfinder } from "@/components/doc/viewfinder";
import { WhiteboardAgenda } from "@/components/doc/whiteboard-agenda";
import { WorkFolder } from "@/components/doc/work-folder";
import { Reveal } from "@/components/motion/reveal";
import { BossMug, JellyStapler, Pretzel } from "@/components/props/office-props";
import { stagger } from "@/lib/motion";
import { branchRules, homeInterview, receiptRoles } from "@/content/about";
import { getSelectedProjects } from "@/content/projects";
import {
  comingUpNext,
  currentlyFilming,
  deletedScenes,
  episodeCards,
  homeBridges,
  pilot,
  theMeeting,
} from "@/content/show";
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
      <section aria-labelledby="pilot-title" className="bg-panel-dark px-4 pb-10 pt-6 sm:px-8 sm:pb-[72px] sm:pt-12">
        <Viewfinder className="px-6 pb-12 pt-[52px] sm:px-16 sm:pb-[72px] sm:pt-16">
          <div className="flex flex-col gap-7 sm:gap-9 min-[900px]:flex-row min-[900px]:flex-wrap min-[900px]:items-center min-[900px]:justify-between">
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
              <p className="mt-3.5 max-w-[34rem] text-[19px] leading-[1.45] sm:text-[22px]">{siteConfig.tagline}</p>
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
              className="order-3 w-[240px] self-start px-3.5 pb-[18px] pt-3.5 text-[22px] leading-[1.08] shadow-[0_8px_16px_rgba(18,20,23,0.16)] sm:order-none sm:w-[200px] sm:px-[18px] sm:pb-[22px] sm:pt-[18px] sm:text-[27px] min-[900px]:mt-6"
            >
              {pilot.sticky}
            </StickyNote>
            <InterviewFrame
              size="home"
              note={pilot.explainNote}
              priority
              className="order-2 sm:order-none min-[900px]:w-[300px] min-[900px]:shrink-0"
            />
          </div>
        </Viewfinder>
      </section>

      {/* The short version, with the receipt */}
      <section aria-labelledby="short-title" className="container-page py-14 sm:py-24">
        <div className="flex flex-col gap-8 sm:gap-10 min-[900px]:flex-row min-[900px]:items-start min-[900px]:justify-between">
          <div className="min-w-0 min-[900px]:flex-[1_1_460px]">
            <SectionHeading
              id="short-title"
              timecode={shortVersion.timecode}
              timecodeLabel={shortVersion.timecodeLabel}
              title={shortVersion.title}
              explainer={shortVersion.explainer}
            />
            <Reveal>
              {shortVersion.paragraphs.map((paragraph, index) => (
                // On phones the second paragraph repeats the hero line, so it waits for wider screens
                <p
                  key={paragraph}
                  className={`${index === 0 ? "mt-5" : "mt-3.5 hidden sm:block"} max-w-[36rem] text-muted-deep`}
                >
                  {paragraph}
                </p>
              ))}
              <StageDirection className="mt-2.5 block">{shortVersion.direction}</StageDirection>
              <Link href={shortVersion.link.href} className="mt-[18px] inline-block font-semibold underline">
                {shortVersion.link.label}
              </Link>
            </Reveal>
          </div>
          <div
            aria-hidden
            className="hidden shrink-0 basis-[170px] -rotate-[4deg] flex-col items-start gap-1 self-center text-pen min-[900px]:flex"
          >
            <span className="font-hand text-[32px] leading-[1.05]">{shortVersion.receiptNote}</span>
            <svg
              width="150"
              height="46"
              viewBox="0 0 150 46"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 10 C 40 40, 90 42, 140 22" />
              <path d="M126 14 L141 22 L128 33" />
            </svg>
          </div>
          <Receipt items={receiptRoles} className="w-full max-w-[370px] min-[900px]:flex-[0_1_370px]" />
        </div>
        <SceneBridge>{homeBridges.shortVersion}</SceneBridge>
      </section>

      {/* Ep 2: the work files */}
      <section id="work" aria-labelledby="work-title" className="bg-panel">
        <EpisodeCard as="h2" id="work-title" {...episodeCards.homeWork} className="py-7 sm:py-10" />
        <div className="container-page pb-14 sm:pb-[88px] pt-12 sm:pt-[72px]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,500px),1fr))] gap-x-11 gap-y-10 sm:gap-y-16">
            {selected.map((project, index) => (
              // On phones the first two files make the point; the link below has the rest
              <Reveal
                key={project.slug}
                delay={stagger(index % 2)}
                className={index > 1 ? "hidden sm:block" : undefined}
              >
                <WorkFolder project={project} markOutcome={index === 0} compact />
              </Reveal>
            ))}
          </div>
          <p className="relative mt-6 sm:mt-12">
            <Link href={pilot.workLink.href} className="font-semibold underline">
              <span className="sm:hidden">{pilot.workLink.mobileLabel}</span>
              <span className="hidden sm:inline">{pilot.workLink.label}</span>
            </Link>
            <JellyStapler
              captionPosition="above-end"
              className="absolute right-0 top-1/2 h-12 w-12 -translate-y-1/2 sm:h-16 sm:w-16"
            />
          </p>
          <SceneBridge>{homeBridges.work}</SceneBridge>
        </div>
      </section>

      {/* Ep 3: personnel file teaser */}
      <section id="personnel" aria-labelledby="pers-title">
        <EpisodeCard as="h2" id="pers-title" {...episodeCards.homePersonnel} className="py-7 sm:py-10" />
        <div className="container-page pb-14 sm:pb-[88px] pt-12 sm:pt-[72px]">
          <div className="flex flex-col gap-8 sm:gap-14 min-[900px]:flex-row min-[900px]:items-start">
            <Reveal className="min-w-0 min-[900px]:flex-[1_1_520px]">
              <InterviewQA answers={homeInterview} mobileLimit={1} />
              <p className="mt-[18px] flex flex-wrap gap-x-[22px] gap-y-2">
                {pilot.personnelLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="font-semibold underline">
                    {link.label}
                  </Link>
                ))}
              </p>
            </Reveal>
            {/* The full rules are on About; phones get the interview and the links */}
            <Reveal delay={stagger(1)} className="hidden min-w-0 sm:block min-[900px]:flex-[1_1_460px]">
              <BranchRules title={branchRules.homeTitle} rules={branchRules.home} footer={branchRules.homeFooter} />
            </Reveal>
          </div>
          <SceneBridge>{homeBridges.personnel}</SceneBridge>
        </div>
      </section>

      {/* Special episode: The Meeting */}
      <section id="meeting" aria-labelledby="meeting-title" className="bg-cubicle">
        <EpisodeCard as="h2" id="meeting-title" {...episodeCards.meeting} className="py-7 sm:py-10" />
        <div className="container-page pb-14 sm:pb-24 pt-14 sm:pt-20">
          <div className="flex flex-col gap-8 sm:gap-12 min-[900px]:flex-row min-[900px]:items-start">
            <Reveal className="on-dark relative min-w-0 text-white min-[900px]:flex-[1_1_340px]">
              <p className="font-mono text-[13px] text-cubicle-muted">{theMeeting.setting}</p>
              <p className="mt-3.5 max-w-[26rem] text-xl leading-normal">{theMeeting.homeLine}</p>
              {/* On the conference table: top right on phones, the empty space below on desktop */}
              <BossMug
                captionClassName="right-0 top-[calc(100%+6px)] min-[900px]:left-0 min-[900px]:right-auto"
                className="absolute right-0 top-0 h-11 w-11 min-[900px]:left-0 min-[900px]:right-auto min-[900px]:top-[calc(100%+56px)] min-[900px]:h-28 min-[900px]:w-28"
              />
            </Reveal>
            <Reveal delay={stagger(1)} className="min-w-0 min-[900px]:flex-[1_1_620px]">
              <WhiteboardAgenda highlight>
                {theMeeting.homeClosing}{" "}
                <Link href={theMeeting.homeClosingLink.href} className="font-semibold underline">
                  {theMeeting.homeClosingLink.label}
                </Link>
              </WhiteboardAgenda>
            </Reveal>
          </div>
          <SceneBridge dark>{homeBridges.meeting}</SceneBridge>
        </div>
      </section>

      {/* Currently filming */}
      <section aria-labelledby="now-title" className="bg-panel">
        <div className="container-page flex flex-col gap-8 pt-14 sm:gap-12 sm:pt-[88px] min-[900px]:flex-row min-[900px]:items-start">
          <div className="min-w-0 min-[900px]:flex-[1_1_300px]">
            <SectionHeading
              id="now-title"
              timecode={currentlyFilming.timecode}
              timecodeLabel={currentlyFilming.timecodeLabel}
              title={currentlyFilming.title}
              explainer={currentlyFilming.explainer}
            />
            <p className="relative mt-3.5 font-mono text-[13px] text-muted">
              {currentlyFilming.updated}
              {/* Beside the date on phones; in the empty space below it on desktop */}
              <Pretzel
                captionClassName="right-0 top-[calc(100%+6px)] min-[900px]:left-0 min-[900px]:right-auto"
                className="absolute right-0 top-0 h-12 w-12 min-[900px]:left-0 min-[900px]:right-auto min-[900px]:top-[calc(100%+40px)] min-[900px]:h-20 min-[900px]:w-20"
              />
            </p>
          </div>
          <Reveal className="min-w-0 min-[900px]:flex-[1_1_640px]">
            <CurrentlyFilming mobileLimit={2} />
          </Reveal>
        </div>
        <div className="container-page pb-14 sm:pb-[88px]">
          <SceneBridge className="mt-8">{homeBridges.currentlyFilming}</SceneBridge>
        </div>
      </section>

      {/* Latest memo and deleted scenes */}
      <section
        aria-labelledby="deleted-title"
        className="container-page flex flex-col gap-10 pb-14 pt-14 sm:gap-12 sm:pt-24 min-[900px]:flex-row min-[900px]:items-start"
      >
        <div id="memos" className="min-w-0 min-[900px]:flex-[1_1_360px]">
          <SectionHeading
            timecode={pilot.latestMemo.timecode}
            timecodeLabel={pilot.latestMemo.timecodeLabel}
            title={pilot.latestMemo.title}
            explainer={pilot.latestMemo.explainer}
            size="sm"
          />
          {latestPost && (
            <Reveal
              as="article"
              className="mt-4 bg-white px-6 py-4 shadow-[0_8px_20px_rgba(18,20,23,0.08)] sm:py-[22px]"
            >
              <p className="font-mono text-[13px] text-muted">
                <time dateTime={latestPost.date}>{formatDate(latestPost.date)}</time>
              </p>
              <h3 className="mt-1.5 text-[19px] font-semibold leading-[1.3] sm:text-[21px]">
                <Link href={`/writing/${latestPost.slug}`} className="text-ink underline hover:text-pen">
                  {latestPost.title}
                </Link>
              </h3>
              <p className="mt-2 hidden text-muted-deep sm:block">{latestPost.excerpt}</p>
            </Reveal>
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
          <DeletedScenes mobileLimit={2} />
        </div>
      </section>

      <ComingUpNext next={comingUpNext.home} />
    </main>
  );
}
