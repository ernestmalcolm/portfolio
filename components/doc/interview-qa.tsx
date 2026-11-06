import { StageDirection } from "@/components/doc/talking-head";
import type { InterviewAnswer } from "@/content/about";

/** "Producer, off camera:" question, the answer, and an optional stage direction */
export function InterviewQA({ answers }: { answers: InterviewAnswer[] }) {
  return (
    <dl>
      {answers.map((qa) => (
        <div key={qa.question} className="border-t border-panel-dark py-[22px]">
          <dt className="font-mono text-[13px] text-muted">Producer, off camera: &ldquo;{qa.question}&rdquo;</dt>
          <dd className="mt-2 text-ink">
            {qa.answer}
            {qa.direction && <StageDirection className="mt-2 block">{qa.direction}</StageDirection>}
          </dd>
        </div>
      ))}
    </dl>
  );
}
