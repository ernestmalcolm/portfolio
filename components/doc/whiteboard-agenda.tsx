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
    <div className="min-w-0 rounded-board border-[14px] border-[#D7DBDF] bg-[#FBFCFC] px-6 pb-11 pt-10 shadow-[0_18px_40px_rgba(0,0,0,0.3)] sm:px-11">
      <p className="font-hand text-[40px] leading-none text-pen sm:text-5xl">{theMeeting.agendaTitle}</p>
      <ol className="mt-[22px] list-decimal space-y-2.5 pl-[34px] font-hand text-[29px] leading-[1.2] text-ink sm:text-[33px]">
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
      {children && <p className="mt-[26px] max-w-[38rem] text-base text-muted-deep">{children}</p>}
    </div>
  );
}
