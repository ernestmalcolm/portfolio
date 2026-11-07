import { StageDirection } from "@/components/doc/talking-head";
import type { InterviewAnswer } from "@/content/about";
import { cn } from "@/lib/utils";

/** "Producer, off camera:" question, the answer, and an optional stage direction */
export function InterviewQA({ answers, mobileLimit }: { answers: InterviewAnswer[]; mobileLimit?: number }) {
  return (
    <dl>
      {answers.map((qa, index) => (
        <div
          key={qa.question}
          className={cn(
            "border-t border-panel-dark py-[22px]",
            mobileLimit !== undefined && index >= mobileLimit && "hidden sm:block",
          )}
        >
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
