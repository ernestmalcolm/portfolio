import { HandNote } from "@/components/doc/hand-note";
import { cn } from "@/lib/utils";

type EpisodeCardProps = {
  /** Small mono label, for example "Season 1, Episode 2" */
  label: string;
  title: string;
  id?: string;
  /** Confident line in white */
  tagline?: string;
  /** Handwritten explainer in yellow */
  explainer?: string;
  as?: "h1" | "h2";
  className?: string;
};

/** Black episode title card */
export function EpisodeCard({ label, title, id, tagline, explainer, as: Tag = "h1", className }: EpisodeCardProps) {
  return (
    <div className={cn("on-dark bg-camera px-8 py-11 text-center text-white", className)}>
      <p className="font-mono text-[13px] text-camera-muted">{label}</p>
      <Tag
        id={id}
        className={cn(
          "mt-1.5 font-condensed font-bold leading-[1.02]",
          Tag === "h1" ? "text-[2.75rem] sm:text-[56px]" : "text-[2.5rem] sm:text-5xl",
        )}
      >
        {title}
      </Tag>
      {tagline && (
        <p className="mx-auto mt-3.5 max-w-[46rem] font-condensed text-[1.625rem] font-bold leading-[1.15] sm:text-[30px]">
          {tagline}
        </p>
      )}
      {explainer && (
        <HandNote color="text-marker" size={32} className="mx-auto mt-3 max-w-[60rem]">
          {explainer}
        </HandNote>
      )}
    </div>
  );
}
