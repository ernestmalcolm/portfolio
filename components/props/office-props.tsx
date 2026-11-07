"use client";

import { motion, type TargetAndTransition, useAnimationControls } from "motion/react";
import * as React from "react";

import { Prop } from "@/components/props/prop";
import { crosswordAnswer, props, watercolourCaption } from "@/content/props";

// Original drawings in the site palette: ink outlines, round caps, flat fills
const ink = "#1E2329";
const condensed = "var(--font-plex-condensed), sans-serif";
const line = { stroke: ink, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;

/** Plays a one-off keyframe animation each time the prop is played */
function usePlay(played: number, target: TargetAndTransition) {
  const controls = useAnimationControls();
  const targetRef = React.useRef(target);
  React.useEffect(() => {
    if (played > 0) controls.start(targetRef.current);
  }, [played, controls]);
  return controls;
}

/** Rotates around the bottom centre of the drawn shape */
const pivotBottom = { transformBox: "fill-box", transformOrigin: "50% 100%" } as const;
const pivotTop = { transformBox: "fill-box", transformOrigin: "50% 0%" } as const;

type Placement = Pick<React.ComponentProps<typeof Prop>, "className" | "captionPosition" | "captionClassName">;

/** 1. Home hero: a bobblehead of Ernest that nods */
export function Bobblehead(placement: Placement) {
  return (
    <Prop id="bobblehead" {...placement}>
      {({ played }) => <BobbleheadDrawing played={played} />}
    </Prop>
  );
}

function BobbleheadDrawing({ played }: { played: number }) {
  const nod = usePlay(played, { rotate: [0, 13, -9, 5, 0], transition: { duration: 0.55, ease: "easeOut" } });
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="h-full w-full">
      <rect x="15" y="54" width="34" height="8" rx="2" fill="#2B2F35" {...line} />
      <path d="M19 54 C19 43 25 38 32 38 C39 38 45 43 45 54 Z" fill="#26344F" {...line} />
      <path d="M28.5 38.5 L32 46 L35.5 38.5" fill="#C9D6E3" {...line} strokeWidth={1.5} />
      <path d="M32 31 l-2.5 1.6 l5 1.6 l-5 1.6 l2.5 1.6" fill="none" {...line} strokeWidth={1.5} />
      <motion.g animate={nod} style={pivotBottom}>
        <circle cx="18" cy="19" r="2.6" fill="#6B4431" {...line} strokeWidth={1.5} />
        <circle cx="46" cy="19" r="2.6" fill="#6B4431" {...line} strokeWidth={1.5} />
        <circle cx="32" cy="18" r="14" fill="#7A4E36" {...line} />
        <path d="M18.4 16 C18.5 5 45.5 5 45.6 16 C42 10.5 22 10.5 18.4 16 Z" fill={ink} />
        <path d="M20.5 22 C22.5 33.5 41.5 33.5 43.5 22 C40 28.5 24 28.5 20.5 22 Z" fill={ink} opacity="0.85" />
        <circle cx="26.8" cy="18" r="1.5" fill={ink} />
        <circle cx="37.2" cy="18" r="1.5" fill={ink} />
        <path d="M27.5 24.2 Q32 28 36.5 24.2 Z" fill="#FFFFFF" />
      </motion.g>
    </svg>
  );
}

/** 2. Home work files: a stapler set in jelly that wobbles */
export function JellyStapler(placement: Placement) {
  return (
    <Prop id="stapler" {...placement}>
      {({ played }) => <JellyStaplerDrawing played={played} />}
    </Prop>
  );
}

function JellyStaplerDrawing({ played }: { played: number }) {
  const wobble = usePlay(played, { skewX: [0, -8, 6, -3, 0], transition: { duration: 0.5, ease: "easeOut" } });
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="h-full w-full">
      <ellipse cx="32" cy="56" rx="29" ry="5" fill="#FFFFFF" {...line} />
      <motion.g animate={wobble} style={pivotBottom}>
        {/* The stapler, then the jelly over it */}
        <rect x="12" y="40" width="40" height="7" rx="2.5" fill="#3B434C" {...line} strokeWidth={1.5} />
        <path d="M13 39 L47 32 Q53 31.5 52 36.5 L52 39.5 L13 39.5 Z" fill="#B8323A" {...line} strokeWidth={1.5} />
        <path d="M18 37 L44 32" stroke="#E07A80" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="48.5" cy="37.5" r="1.6" fill="#FFFFFF" />
        <rect
          x="7"
          y="14"
          width="50"
          height="40"
          rx="8"
          fill="#FFD84D"
          fillOpacity="0.42"
          {...line}
          strokeOpacity="0.5"
        />
        <path d="M12.5 20 V44" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
        <path d="M16 17.5 H30" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <path
          d="M44 24 C47 22 49 24 52 22"
          fill="none"
          stroke="#C9A21A"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </motion.g>
    </svg>
  );
}

/** Days from today (in Dar es Salaam) to the next 26 April */
function daysUntilPretzelDay(now: Date) {
  const [y, m, d] = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Dar_es_Salaam",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(now)
    .split("-")
    .map(Number);
  const today = Date.UTC(y, m - 1, d);
  let target = Date.UTC(y, 3, 26);
  if (target < today) target = Date.UTC(y + 1, 3, 26);
  return Math.round((target - today) / 86_400_000);
}

/** 3. Home currently filming: a pretzel with a live countdown */
export function Pretzel(placement: Placement) {
  // Worked out after mount, so the server and first render agree
  const [days, setDays] = React.useState<number | null>(null);
  React.useEffect(() => setDays(daysUntilPretzelDay(new Date())), []);

  return (
    <Prop
      id="pretzel"
      caption={props.pretzel.caption.replace("{days}", days === null ? "..." : String(days))}
      {...placement}
    >
      {({ played }) => <PretzelDrawing played={played} />}
    </Prop>
  );
}

function PretzelDrawing({ played }: { played: number }) {
  const hop = usePlay(played, { y: [0, -7, 0, -2, 0], rotate: [0, -10, 6, 0, 0], transition: { duration: 0.5 } });
  const shape =
    "M17 45 C7 37 9 18 23 16 C33 15 38 26 32 36 C26 26 31 15 41 16 C55 18 57 37 47 45 M17 45 C24 50 30 45 36 38 M47 45 C40 50 34 45 28 38";
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="h-full w-full">
      <motion.g animate={hop} style={pivotBottom}>
        <path d={shape} fill="none" stroke="#5E3A1C" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        <path d={shape} fill="none" stroke="#C98B45" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
        {[
          [14, 30],
          [22, 18],
          [41, 18],
          [51, 30],
          [24, 44],
          [41, 44],
          [32, 33],
        ].map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="2.2" height="1.6" rx="0.5" fill="#FFFFFF" />
        ))}
      </motion.g>
    </svg>
  );
}

/** 4. Home reception: a box of letterhead paper, lid lifts */
export function PaperBox(placement: Placement) {
  return (
    <Prop id="paper-box" {...placement}>
      {({ played }) => <PaperBoxDrawing played={played} />}
    </Prop>
  );
}

function PaperBoxDrawing({ played }: { played: number }) {
  const lid = usePlay(played, { y: [0, -9, 0], rotate: [0, -7, 0], transition: { duration: 0.5, ease: "easeOut" } });
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="h-full w-full">
      <rect x="11" y="23" width="42" height="10" fill="#FFFFFF" {...line} strokeWidth={1.5} />
      <rect x="8" y="28" width="48" height="29" fill="#F6F4EE" {...line} />
      <rect x="16" y="35" width="32" height="15" fill="#FFFFFF" {...line} strokeWidth={1.5} />
      <text
        x="32"
        y="45.5"
        textAnchor="middle"
        fontFamily="var(--font-plex-mono), monospace"
        fontSize="8"
        fontWeight="600"
        fill={ink}
      >
        &lt;EM/&gt;
      </text>
      <motion.g animate={lid} style={{ transformBox: "fill-box", transformOrigin: "0% 100%" }}>
        <rect x="5" y="20" width="54" height="10" rx="1.5" fill="#E3C88A" {...line} />
      </motion.g>
    </svg>
  );
}

/** 5. About: a gold trophy, Most Improved 2024, catches the light */
export function Trophy(placement: Placement) {
  return (
    <Prop id="trophy" {...placement}>
      {({ played }) => <TrophyDrawing played={played} />}
    </Prop>
  );
}

function TrophyDrawing({ played }: { played: number }) {
  const shine = usePlay(played, { x: [-30, 70], transition: { duration: 0.55, ease: "easeInOut" } });
  const id = React.useId();
  const cup = "M20 9 H44 V21 C44 31 38.5 37 32 37 C25.5 37 20 31 20 21 Z";
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="h-full w-full">
      <defs>
        <clipPath id={id}>
          <path d={cup} />
        </clipPath>
      </defs>
      <path d="M20.5 13 C11 13 11 27 22 27.5" fill="none" {...line} strokeWidth={2.5} />
      <path d="M43.5 13 C53 13 53 27 42 27.5" fill="none" {...line} strokeWidth={2.5} />
      <path d={cup} fill="#E2B33C" {...line} />
      <g clipPath={`url(#${id})`}>
        <motion.rect
          animate={shine}
          initial={{ x: -30 }}
          y="4"
          width="8"
          height="40"
          fill="#FFF6D2"
          opacity="0.85"
          transform="skewX(-20)"
        />
      </g>
      <rect x="29" y="37" width="6" height="8" fill="#C4962A" {...line} strokeWidth={1.5} />
      <rect x="17" y="45" width="30" height="14" rx="1.5" fill="#2B2F35" {...line} />
      <rect x="20.5" y="48" width="23" height="8" rx="0.5" fill="#E2B33C" />
      <text x="32" y="51.6" textAnchor="middle" fontSize="3.4" fontWeight="700" fill={ink} fontFamily={condensed}>
        MOST IMPROVED
      </text>
      <text x="32" y="55" textAnchor="middle" fontSize="3.2" fontWeight="700" fill={ink} fontFamily={condensed}>
        2024
      </text>
    </svg>
  );
}

/** 6. The Meeting: a "World's Best Boss" mug, steams on hover */
export function BossMug(placement: Placement) {
  return (
    <Prop id="mug" {...placement}>
      {({ open, reduce }) => <BossMugDrawing steaming={open} reduce={reduce} />}
    </Prop>
  );
}

function BossMugDrawing({ steaming, reduce }: { steaming: boolean; reduce: boolean }) {
  const steam = ["M23 19 C19 14 27 11 23 5", "M31 19 C27 14 35 11 31 5", "M39 19 C35 14 43 11 39 5"];
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="h-full w-full">
      {steam.map((d, index) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke="#9AA2AA"
          strokeWidth="2"
          strokeLinecap="round"
          initial={false}
          animate={steaming ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.45, delay: steaming ? index * 0.06 : 0 }}
        />
      ))}
      <path d="M46 28 C58 28 58 47 46 47" fill="none" {...line} strokeWidth={3} />
      <rect x="12" y="22" width="35" height="35" rx="3.5" fill="#FFFFFF" {...line} />
      <text x="29.5" y="35" textAnchor="middle" fontSize="6" fontWeight="700" fill={ink} fontFamily={condensed}>
        WORLD&apos;S
      </text>
      <text x="29.5" y="42" textAnchor="middle" fontSize="6" fontWeight="700" fill={ink} fontFamily={condensed}>
        BEST
      </text>
      <text x="29.5" y="49" textAnchor="middle" fontSize="6" fontWeight="700" fill={ink} fontFamily={condensed}>
        BOSS
      </text>
    </svg>
  );
}

/** 7. About kitchen wall: fire safety notice beside a watercolour of an office block */
export function KitchenWall(placement: Placement) {
  return (
    <Prop
      id="kitchen-wall"
      caption={
        <>
          <span className="block">{props["kitchen-wall"].caption}</span>
          <span className="mt-1.5 block text-[#C9CED4]">The painting? {watercolourCaption}</span>
        </>
      }
      {...placement}
    >
      {({ played }) => <KitchenWallDrawing played={played} />}
    </Prop>
  );
}

function KitchenWallDrawing({ played }: { played: number }) {
  const flutter = usePlay(played, { rotate: [0, -7, 5, -2, 0], transition: { duration: 0.5, ease: "easeOut" } });
  return (
    <svg aria-hidden viewBox="0 0 120 64" className="h-full w-full">
      {/* The notice, pinned at the top */}
      <motion.g animate={flutter} style={pivotTop}>
        <rect x="4" y="7" width="44" height="54" fill="#FFFFFF" {...line} strokeWidth={1.5} />
        <rect x="4" y="7" width="44" height="11" fill="#B8323A" />
        <text x="26" y="14.6" textAnchor="middle" fontSize="5.6" fontWeight="700" fill="#FFFFFF" fontFamily={condensed}>
          FIRE SAFETY
        </text>
        <path
          d="M18 30 C18 25 22 24 22 20 C26 23 28 26 28 30 C28 33 25.5 35 23 35 C20 35 18 33 18 30 Z"
          fill="#E0393B"
        />
        {[40, 45, 50, 55].map((y) => (
          <rect key={y} x="9" y={y} width={y === 55 ? 22 : 34} height="2" rx="1" fill="#C9CDC6" />
        ))}
      </motion.g>
      <circle cx="26" cy="7" r="3" fill="#2244B8" />
      {/* The watercolour, framed */}
      <rect x="58" y="5" width="58" height="44" fill="#F7F3EA" stroke="#7A5A38" strokeWidth="3" />
      <rect x="61" y="8" width="52" height="22" fill="#8FB8DA" opacity="0.55" />
      <circle cx="104" cy="15" r="4" fill="#FFD84D" opacity="0.8" />
      <rect x="61" y="36" width="52" height="10" fill="#9DBF7C" opacity="0.55" />
      <rect x="73" y="17" width="28" height="27" fill="#D6D3CB" stroke="#6E7680" strokeWidth="1" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={76 + col * 6.4}
            y={20 + row * 5.6}
            width="3.6"
            height="3"
            fill="#6E87A3"
            opacity="0.7"
          />
        )),
      )}
      <path d="M66 46 C66 38 67 33 69 28" fill="none" stroke="#7A5A38" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M69 28 C64 26 61 28 60 30 M69 28 C72 24 76 25 77 27 M69 28 C67 23 69 21 71 20 M69 28 C74 28 76 31 76 33"
        fill="none"
        stroke="#3F7D3A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="64" y="52" width="46" height="9" fill="#FFFFFF" {...line} strokeWidth={1} />
      <text x="87" y="58.2" textAnchor="middle" fontSize="4.6" fill={ink} fontFamily={condensed}>
        Painted by reception.
      </text>
    </svg>
  );
}

/** 8. About branch rules: a crossword book; the answer writes itself in */
export function Crossword(placement: Placement) {
  return (
    <Prop
      id="crossword"
      caption={({ open, reduce }) => <CrosswordCaption writing={open} reduce={reduce} />}
      {...placement}
    >
      {() => <CrosswordDrawing />}
    </Prop>
  );
}

function CrosswordCaption({ writing, reduce }: { writing: boolean; reduce: boolean }) {
  const letters = crosswordAnswer.flatMap((word, w) => [...word].map((letter, i) => ({ letter, key: `${w}-${i}`, w })));
  return (
    <>
      <span className="block">{props.crossword.caption}</span>
      <span className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
        {crosswordAnswer.map((word, w) => (
          <span key={word} className="flex gap-px">
            {letters
              .filter((item) => item.w === w)
              .map((item) => (
                <span key={item.key} className="grid h-[22px] w-[18px] place-items-center bg-white">
                  <motion.span
                    initial={false}
                    animate={writing || reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: -3 }}
                    transition={
                      writing && !reduce
                        ? { duration: 0.12, delay: 0.1 + letters.indexOf(item) * 0.04 }
                        : { duration: 0 }
                    }
                    className="font-hand text-[21px] leading-none text-pen"
                  >
                    {item.letter}
                  </motion.span>
                </span>
              ))}
          </span>
        ))}
      </span>
    </>
  );
}

function CrosswordDrawing() {
  const black = new Set(["0-3", "1-1", "2-4", "3-2", "4-0"]);
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="h-full w-full">
      <path d="M32 14 C24 10 12 10 5 13 V55 C12 52 24 52 32 56 Z" fill="#FFFFFF" {...line} strokeWidth={1.5} />
      <path d="M32 14 C40 10 52 10 59 13 V55 C52 52 40 52 32 56 Z" fill="#FFFFFF" {...line} strokeWidth={1.5} />
      {[22, 28, 34, 40].map((y) => (
        <rect key={y} x="9" y={y} width="18" height="2" rx="1" fill="#C9CDC6" />
      ))}
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3, 4].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={36 + col * 4.4}
            y={18 + row * 4.4}
            width="4.4"
            height="4.4"
            fill={black.has(`${row}-${col}`) ? ink : "#FFFFFF"}
            stroke={ink}
            strokeWidth="0.6"
          />
        )),
      )}
      <g transform="rotate(-38 46 48)">
        <rect x="30" y="45" width="28" height="5" rx="1" fill="#FFD84D" {...line} strokeWidth={1.2} />
        <path d="M58 45 L63 47.5 L58 50 Z" fill="#E3C88A" {...line} strokeWidth={1.2} />
        <rect x="27" y="45" width="4" height="5" fill="#E79AA0" {...line} strokeWidth={1.2} />
      </g>
    </svg>
  );
}

/** 9. Work index: a gift-wrapped folder; a click unties the ribbon */
export function GiftFolder(placement: Placement) {
  const [unwrapped, setUnwrapped] = React.useState(false);
  return (
    <Prop id="gift" onActivate={() => setUnwrapped((value) => !value)} {...placement}>
      {({ reduce }) => <GiftFolderDrawing unwrapped={unwrapped} reduce={reduce} />}
    </Prop>
  );
}

function GiftFolderDrawing({ unwrapped, reduce }: { unwrapped: boolean; reduce: boolean }) {
  const t = (delay = 0) => (reduce ? { duration: 0 } : { duration: 0.35, delay });
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="h-full w-full">
      <path d="M6 18 H24 L28 13 H40 L44 18 H58 V56 H6 Z" fill="#D9BC78" {...line} strokeWidth={1.5} />
      <rect x="6" y="20" width="52" height="36" fill="#E3C88A" {...line} strokeWidth={1.5} />
      <motion.g
        initial={false}
        animate={unwrapped ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.3 }}
        transition={t(unwrapped ? 0.25 : 0)}
        style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
      >
        <g transform="rotate(-8 32 40)">
          <rect x="13" y="32" width="38" height="16" fill="none" stroke="#B8323A" strokeWidth="1.6" />
          <text x="32" y="39" textAnchor="middle" fontSize="6" fontWeight="700" fill="#B8323A" fontFamily={condensed}>
            COMING
          </text>
          <text x="32" y="45.5" textAnchor="middle" fontSize="6" fontWeight="700" fill="#B8323A" fontFamily={condensed}>
            2027
          </text>
        </g>
      </motion.g>
      <motion.g
        initial={false}
        animate={unwrapped ? { opacity: 0, scaleY: 0 } : { opacity: 1, scaleY: 1 }}
        transition={t()}
        style={pivotTop}
      >
        <rect x="29" y="20" width="6" height="36" fill="#B8323A" />
      </motion.g>
      <motion.g
        initial={false}
        animate={unwrapped ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={t()}
        style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
      >
        <rect x="6" y="35" width="52" height="6" fill="#B8323A" />
      </motion.g>
      <motion.g
        initial={false}
        animate={unwrapped ? { opacity: 0, scale: 0, rotate: 40 } : { opacity: 1, scale: 1, rotate: 0 }}
        transition={t()}
        style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
      >
        <path d="M32 20 C24 9 15 13 21 20 Z" fill="#D9474E" {...line} strokeWidth={1.2} />
        <path d="M32 20 C40 9 49 13 43 20 Z" fill="#D9474E" {...line} strokeWidth={1.2} />
        <circle cx="32" cy="20" r="3" fill="#B8323A" {...line} strokeWidth={1.2} />
      </motion.g>
    </svg>
  );
}

/** 10. 404: a beet, leaves rustle */
export function Beet(placement: Placement) {
  return (
    <Prop id="beet" {...placement}>
      {({ played }) => <BeetDrawing played={played} />}
    </Prop>
  );
}

function BeetDrawing({ played }: { played: number }) {
  const rustle = usePlay(played, { rotate: [0, -12, 9, -4, 0], transition: { duration: 0.5, ease: "easeOut" } });
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="h-full w-full">
      <motion.g animate={rustle} style={pivotBottom}>
        <path d="M31 24 C29 17 25 11 19 6 C24 6 31 11 32 23" fill="#3F7D3A" {...line} strokeWidth={1.5} />
        <path d="M33 24 C36 16 42 10 49 8 C47 15 40 21 34 24" fill="#4E9147" {...line} strokeWidth={1.5} />
        <path d="M32 23 C31 15 32 8 34 3 C37 9 35 17 33 23" fill="#5BA052" {...line} strokeWidth={1.5} />
      </motion.g>
      <path
        d="M32 59 C30 53 16 47 17 35 C18 26 25 22 32 22 C39 22 46 26 47 35 C48 47 34 53 32 59 Z"
        fill="#8E2448"
        {...line}
      />
      <path d="M32 59 C32 61 33 62 34 63" fill="none" {...line} strokeWidth={1.5} />
      <path d="M23 31 C22 35 22 39 24 42" fill="none" stroke="#C25478" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
