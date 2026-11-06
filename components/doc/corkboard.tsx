const tilts = [-2, 1.5, -1, 2, -1.5, 1];

/** Cork board with pinned white cards */
export function Corkboard({ cards }: { cards: { title: string; body: string }[] }) {
  return (
    <ul className="mt-8 flex flex-wrap items-start gap-8 rounded-board border-[12px] border-cork-frame bg-cork px-6 pb-[52px] pt-11 sm:px-10">
      {cards.map((card, index) => (
        <li
          key={card.title}
          className="relative min-w-0 flex-[1_1_200px] bg-white px-5 pb-[22px] pt-[26px] shadow-[0_6px_12px_rgba(0,0,0,0.25)] sm:max-w-[250px]"
          style={{ transform: `rotate(${tilts[index % tilts.length]}deg)` }}
        >
          <span
            aria-hidden
            className="absolute left-1/2 top-2 -ml-[7px] h-3.5 w-3.5 rounded-full bg-pen shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
          />
          <p className="font-condensed text-xl font-bold">{card.title}</p>
          <p className="mt-1.5 text-[15px] leading-normal text-muted-deep">{card.body}</p>
        </li>
      ))}
    </ul>
  );
}
