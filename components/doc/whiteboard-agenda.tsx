import { Mark } from "@/components/motion/mark";
import { theMeeting } from "@/content/show";

/** Whiteboard with the handwritten agenda for where I'm heading */
type WhiteboardAgendaProps = {
  children?: React.ReactNode;
  /** Highlights the second agenda item in marker yellow (home) */
  highlight?: boolean;
};

export function WhiteboardAgenda({ children, highlight = false }: WhiteboardAgendaProps) {
  return (
    <div className="min-w-0 rounded-board border-[10px] border-[#D7DBDF] bg-[#FBFCFC] px-5 pb-6 pt-5 shadow-[0_18px_40px_rgba(0,0,0,0.3)] sm:border-[14px] sm:px-11 sm:pb-11 sm:pt-10">
      <p className="font-hand text-[28px] leading-none text-pen sm:text-5xl">{theMeeting.agendaTitle}</p>
      <ol className="mt-4 list-decimal space-y-1.5 pl-7 font-hand text-[22px] leading-[1.15] text-ink sm:mt-[22px] sm:space-y-2.5 sm:pl-[34px] sm:text-[33px] sm:leading-[1.2]">
        {theMeeting.agenda.map((item, index) => (
          <li key={item}>
            {highlight && index === 1 ? (
              <Mark type="highlight" color="#FFD84D" padding={[0, 2]} multiline delay={400}>
                {item}
              </Mark>
            ) : (
              item
            )}
          </li>
        ))}
      </ol>
      {children && <p className="mt-5 max-w-[38rem] text-base text-muted-deep sm:mt-[26px]">{children}</p>}
    </div>
  );
}
