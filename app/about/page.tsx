import type { Metadata } from "next";

import { BranchRules } from "@/components/doc/branch-rules";
import { ComingUpNext } from "@/components/doc/coming-up-next";
import { Corkboard } from "@/components/doc/corkboard";
import { EpisodeCard } from "@/components/doc/episode-card";
import { HandNote } from "@/components/doc/hand-note";
import { InterviewFrame } from "@/components/doc/interview-frame";
import { InterviewQA } from "@/components/doc/interview-qa";
import { PreviouslyOn } from "@/components/doc/previously-on";
import { Receipt } from "@/components/doc/receipt";
import { SectionHeading } from "@/components/doc/section-heading";
import { TalkingHead } from "@/components/doc/talking-head";
import { WhiteboardAgenda } from "@/components/doc/whiteboard-agenda";
import { Reveal } from "@/components/motion/reveal";
import { stagger } from "@/lib/motion";
import {
  branchRules,
  breakRoom,
  employmentRecord,
  growth,
  interview,
  jumpLinks,
  leadership,
  skills,
  strategy,
  trainingRecords,
} from "@/content/about";
import { comingUpNext, episodeCards, previouslyOn, theMeeting } from "@/content/show";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ernest Mwinchumu, Product and Tech Lead in Dar es Salaam: the interview, how I work, leadership, strategy and the full record.",
};

export default function AboutPage() {
  return (
    <main>
      <PreviouslyOn>{previouslyOn.about}</PreviouslyOn>
      <EpisodeCard {...episodeCards.about} />

      <nav aria-label="On this page" className="bg-panel-dark">
        <div className="container-page flex flex-wrap items-baseline gap-x-[22px] gap-y-1.5 py-3.5 text-[15px]">
          <span className="font-mono text-xs text-muted">Scenes</span>
          {jumpLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-ink underline hover:text-pen">
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* The interview */}
      <section id="interview" aria-labelledby="interview-title" className="bg-panel">
        <div className="container-page flex flex-col gap-14 py-14 sm:py-[88px] min-[900px]:flex-row min-[900px]:items-start">
          <div className="min-w-0 min-[900px]:flex-[1_1_620px]">
            <SectionHeading
              id="interview-title"
              timecode={interview.timecode}
              timecodeLabel={interview.timecodeLabel}
              title={interview.title}
              explainer={interview.explainer}
            />
            <Reveal className="mt-4">
              <InterviewQA answers={interview.answers} />
            </Reveal>
          </div>
          <Reveal delay={stagger(1)} className="min-[900px]:w-[260px] min-[900px]:shrink-0">
            <InterviewFrame size="about" note="Let me explain myself." />
          </Reveal>
        </div>
      </section>

      {/* Intern to Tech Lead */}
      <section id="growth" aria-labelledby="growth-title">
        <div className="container-page flex flex-col gap-16 py-14 sm:py-[88px] min-[900px]:flex-row min-[900px]:items-start">
          <div className="min-w-0 min-[900px]:flex-[1_1_520px]">
            <SectionHeading
              id="growth-title"
              timecode={growth.timecode}
              timecodeLabel={growth.timecodeLabel}
              title={growth.title}
              explainer={growth.explainer}
            />
            <Reveal>
              {growth.paragraphs.map((paragraph, index) => (
                <p key={paragraph} className={`${index === 0 ? "mt-[18px]" : "mt-3.5"} max-w-[36rem] text-muted-deep`}>
                  {paragraph}
                </p>
              ))}
              <TalkingHead quip={growth.quip} className="mt-[22px]" />
            </Reveal>
          </div>
          <Receipt
            subtitle="Promotion history"
            items={growth.promotions}
            paidWith="Patience"
            boxStamp
            rotate={-1}
            className="w-full max-w-[370px] min-[900px]:flex-[0_1_370px]"
          />
        </div>
      </section>

      {/* How I work */}
      <section id="rules" aria-labelledby="rules-title" className="on-dark bg-cubicle">
        <div className="container-page flex flex-col gap-12 py-14 sm:py-[88px] min-[900px]:flex-row min-[900px]:items-start">
          <div className="min-w-0 text-white min-[900px]:flex-[1_1_320px]">
            <SectionHeading
              id="rules-title"
              dark
              timecode={branchRules.timecode}
              timecodeLabel={branchRules.timecodeLabel}
              title={branchRules.title}
              explainer={branchRules.explainer}
            />
            <Reveal as="p" className="mt-3 max-w-[26rem] text-cubicle-text">
              {branchRules.intro}
            </Reveal>
          </div>
          <Reveal delay={stagger(1)} className="min-w-0 min-[900px]:flex-[1_1_560px]">
            <BranchRules
              variant="about"
              title={branchRules.sheetTitle}
              rules={branchRules.about}
              footer={branchRules.aboutFooter}
            />
          </Reveal>
        </div>
      </section>

      {/* Leadership and strategy */}
      <section aria-label="Leadership and strategy" className="bg-panel">
        <div className="container-page flex flex-col gap-12 py-14 sm:py-[88px] min-[900px]:flex-row min-[900px]:items-start">
          <div id="leadership" className="min-w-0 min-[900px]:flex-[1_1_520px]">
            <SectionHeading
              timecode={leadership.timecode}
              timecodeLabel={leadership.title}
              title={leadership.title}
              explainer={leadership.explainer}
            />
            <Reveal>
              <ul className="mt-[18px] max-w-[40rem] list-disc space-y-2.5 pl-[22px] text-muted-deep">
                {leadership.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <TalkingHead quip={leadership.quip} className="mt-[22px]" />
            </Reveal>
          </div>
          <div id="strategy" className="min-w-0 min-[900px]:flex-[1_1_520px]">
            <SectionHeading
              timecode={strategy.timecode}
              timecodeLabel={strategy.title}
              title={strategy.title}
              explainer={strategy.explainer}
            />
            <Reveal
              delay={stagger(1)}
              className="mt-[18px] bg-white px-6 pb-8 pt-[30px] shadow-[0_12px_30px_rgba(18,20,23,0.1)] sm:px-[34px]"
            >
              <h3 className="font-condensed text-[22px] font-bold">{strategy.memoTitle}</h3>
              <ol className="mt-3.5 list-decimal space-y-2 pl-[22px] text-muted-deep">
                {strategy.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
              <p className="mt-4 border-t border-dashed border-[#C9CDC6] pt-3 text-[15px] text-ink">
                <span className="font-mono text-xs text-muted">On my desk now </span>
                {strategy.onMyDesk}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Employment record */}
      <section id="record" aria-labelledby="record-title" className="bg-panel">
        <div className="container-page py-14 sm:py-[88px]">
          <SectionHeading
            id="record-title"
            timecode={employmentRecord.timecode}
            timecodeLabel={employmentRecord.title}
            title={employmentRecord.title}
            explainer={employmentRecord.explainer}
          />
          <Reveal as="ol" className="mt-7">
            {employmentRecord.entries.map((entry) => (
              <li
                key={`${entry.period}-${entry.role}`}
                className="flex flex-wrap gap-x-8 gap-y-2 border-t border-panel-dark py-5"
              >
                <p className="shrink-0 basis-[200px] font-mono text-sm text-muted">{entry.period}</p>
                <div className="min-w-0 flex-[1_1_480px]">
                  <h3 className="font-semibold">{entry.role}</h3>
                  <p className="text-[15px] text-muted">{entry.organisation}</p>
                  <p className="mt-1.5 max-w-[44rem] text-muted-deep">{entry.summary}</p>
                </div>
              </li>
            ))}
          </Reveal>

          <div className="mt-14 flex flex-col gap-12 min-[900px]:flex-row">
            <Reveal className="min-w-0 min-[900px]:flex-[1_1_420px]">
              <h3 className="font-condensed text-[28px] font-bold">{trainingRecords.title}</h3>
              {trainingRecords.entries.map((entry, index) => (
                <p key={entry} className={`${index === 0 ? "mt-3" : "mt-2.5"} text-muted-deep`}>
                  {entry}
                </p>
              ))}
              <p className="mt-2.5 font-mono text-sm text-muted">{trainingRecords.languages}</p>
            </Reveal>
            <Reveal delay={stagger(1)} className="min-w-0 min-[900px]:flex-[1_1_420px]">
              <h3 className="font-condensed text-[28px] font-bold">{skills.title}</h3>
              <dl className="mt-3 grid grid-cols-[100px_minmax(0,1fr)] gap-x-4 gap-y-2 text-[15px] sm:grid-cols-[120px_minmax(0,1fr)]">
                {skills.rows.map((row) => (
                  <div key={row.group} className="contents">
                    <dt className="pt-0.5 font-mono text-[13px] text-muted">{row.group}</dt>
                    <dd className="text-muted-deep">{row.items}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Special episode: The Meeting */}
      <section id="meeting" aria-labelledby="about-meeting-title" className="bg-cubicle">
        <EpisodeCard as="h2" id="about-meeting-title" {...episodeCards.meeting} className="py-10" />
        <div className="container-page flex flex-col gap-12 pb-14 sm:pb-24 pt-14 sm:pt-20 min-[900px]:flex-row min-[900px]:items-start">
          <Reveal className="min-w-0 text-white min-[900px]:flex-[1_1_340px]">
            <p className="font-mono text-[13px] text-cubicle-muted">{theMeeting.setting}</p>
            {theMeeting.aboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3.5 max-w-[28rem] text-lg leading-[1.6]">
                {paragraph}
              </p>
            ))}
            <HandNote color="text-marker" size={38} className="mt-[22px] leading-none">
              {theMeeting.signature}
            </HandNote>
          </Reveal>
          <Reveal delay={stagger(1)} className="min-w-0 min-[900px]:flex-[1_1_620px]">
            <WhiteboardAgenda>{theMeeting.aboutClosing}</WhiteboardAgenda>
          </Reveal>
        </div>
      </section>

      {/* The break room */}
      <section id="breakroom" aria-labelledby="breakroom-title">
        <div className="container-page pb-0 pt-14 sm:pt-24">
          <SectionHeading
            id="breakroom-title"
            timecode={breakRoom.timecode}
            timecodeLabel={breakRoom.timecodeLabel}
            title={breakRoom.title}
            explainer={breakRoom.explainer}
          />
          <Reveal as="p" className="mt-2.5 text-muted-deep">
            {breakRoom.intro}
          </Reveal>
          <Corkboard cards={breakRoom.cards} />
        </div>
      </section>

      <ComingUpNext next={comingUpNext.about} />
    </main>
  );
}
