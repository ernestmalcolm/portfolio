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
  as?: "h1" | "h2" | "h3";
  /** lg 44px for page sections, md 32px for case study sections, sm 30px for side columns */
  size?: "lg" | "md" | "sm";
  className?: string;
};

const sizes = {
  lg: "text-[2.25rem] sm:text-[44px]",
  md: "text-[28px] sm:text-[32px]",
  sm: "text-[30px]",
};

export function SectionHeading({
  id,
  title,
  explainer,
  timecode,
  timecodeLabel,
  dark = false,
  as: Tag = "h2",
  size = "lg",
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {timecode && (
        <Timecode code={timecode} label={timecodeLabel} className={dark ? "text-cubicle-muted" : undefined} />
      )}
      <Tag
        id={id}
        className={cn(
          "font-condensed font-bold",
          sizes[size],
          "leading-[1.05]",
          timecode && "mt-1.5",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </Tag>
      <HandNote color={dark ? "text-marker" : "text-pen"} size={size === "sm" ? 26 : 28} className="mt-1">
        {explainer}
      </HandNote>
    </div>
  );
}
