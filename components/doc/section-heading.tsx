import { HandNote } from "@/components/doc/hand-note";
import { Timecode } from "@/components/doc/timecode";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id?: string;
  title: React.ReactNode;
  /** Handwritten line under the heading, so visitors know where they are */
  explainer: string;
  timecode?: string;
  timecodeLabel?: string;
  /** Use on dark sections: white heading, yellow note */
  dark?: boolean;
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  id,
  title,
  explainer,
  timecode,
  timecodeLabel,
  dark = false,
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {timecode && (
        <Timecode code={timecode} label={timecodeLabel} className={dark ? "text-camera-muted" : undefined} />
      )}
      <Tag
        id={id}
        className={cn(
          "font-condensed text-[2.25rem] font-bold leading-[1.05] sm:text-[44px]",
          timecode && "mt-1.5",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </Tag>
      <HandNote color={dark ? "text-marker" : "text-pen"} className="mt-1">
        {explainer}
      </HandNote>
    </div>
  );
}
