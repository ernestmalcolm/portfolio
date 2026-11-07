"use client";

import { motion, type TargetAndTransition, useAnimationControls } from "motion/react";
import * as React from "react";

import { Prop } from "@/components/props/prop";
import { crosswordAnswer, props, watercolourCaption } from "@/content/props";

/*
 * Original drawings of everyday office objects, in the site palette: ink outlines,
 * two-tone shading from a light source at the top left, and small highlights.
 * Fine detail is marked `detail` and drops away on phones, where props are ~48px.
 */
const ink = "#1E2329";
const condensed = "var(--font-plex-condensed), sans-serif";
const line = { stroke: ink, strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const detail = "max-sm:hidden";

/** Unique, url()-safe ids for gradients and clip paths */
function useIds() {
  const base = React.useId().replace(/[^a-zA-Z0-9]/g, "");
  return (name: string) => `p${base}-${name}`;
}

/** Plays a one-off keyframe animation each time the prop is played */
function usePlay(played: number, target: TargetAndTransition) {
  const controls = useAnimationControls();
  const targetRef = React.useRef(target);
  React.useEffect(() => {
    if (played > 0) controls.start(targetRef.current);
  }, [played, controls]);
  return controls;
}

const pivotBottom = { transformBox: "fill-box", transformOrigin: "50% 100%" } as const;
const pivotTop = { transformBox: "fill-box", transformOrigin: "50% 0%" } as const;
const pivotCentre = { transformBox: "fill-box", transformOrigin: "50% 50%" } as const;

type Placement = Pick<React.ComponentProps<typeof Prop>, "className" | "captionPosition" | "captionClassName">;

/** Soft contact shadow under an object */
function Shadow({ cx, cy, rx, ry = 2.6 }: { cx: number; cy: number; rx: number; ry?: number }) {
  return <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={ink} opacity="0.18" />;
}

/* 1. A classic office bobblehead that nods */

export function Bobblehead(placement: Placement) {
  return (
    <Prop id="bobblehead" {...placement}>
      {({ played }) => <BobbleheadDrawing played={played} />}
    </Prop>
  );
}

function BobbleheadDrawing({ played }: { played: number }) {
  const id = useIds();
  const nod = usePlay(played, { rotate: [0, 14, -10, 6, -2, 0], transition: { duration: 0.58, ease: "easeOut" } });
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="h-full w-full overflow-visible">
      <defs>
        <linearGradient id={id("skin")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E2B48A" />
          <stop offset="1" stopColor="#B9845A" />
        </linearGradient>
        <linearGradient id={id("base")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3B434C" />
          <stop offset="1" stopColor="#15181B" />
        </linearGradient>
      </defs>
      <Shadow cx={32} cy={61} rx={18} />
      {/* Pedestal with a brass nameplate */}
      <path d="M15 53 H49 L47 60 H17 Z" fill={`url(#${id("base")})`} {...line} />
      <rect x="25" y="55" width="14" height="3.2" rx="0.6" fill="#D8B24A" />
      {/* Body: white shirt, dark tie, grey trousers */}
      <path d="M24 53 V47 H40 V53 Z" fill="#5B636C" {...line} />
      <path d="M21 47 C21 40 26 37 32 37 C38 37 43 40 43 47 Z" fill="#F4F2EC" {...line} />
      <path d="M21.5 44 L18.5 47.5 M42.5 44 L45.5 47.5" {...line} fill="none" />
      <path d="M32 38 L30.6 40 L31.4 46 L32 47 L32.6 46 L33.4 40 Z" fill="#26344F" />
      <path className={detail} d="M28 37.6 L32 40 L36 37.6" fill="none" stroke="#C9CDC6" strokeWidth="1" />
      {/* Spring */}
      <path
        d="M32 31.5 l-2.4 1.4 l4.8 1.4 l-4.8 1.4 l2.4 1.3"
        fill="none"
        stroke="#8A9199"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Head: oversized, glossy resin */}
      <motion.g animate={nod} style={pivotBottom}>
        <ellipse cx="17.6" cy="19.5" rx="2.4" ry="3.2" fill="#C99468" {...line} strokeWidth={1.2} />
        <ellipse cx="46.4" cy="19.5" rx="2.4" ry="3.2" fill="#C99468" {...line} strokeWidth={1.2} />
        <ellipse cx="32" cy="18.5" rx="14.5" ry="14" fill={`url(#${id("skin")})`} {...line} />
        <path
          d="M17.6 16 C17 6 26 3.5 33 4.4 C41 5.4 47 9 46.4 16 C44 12 39 10.5 34.5 10.8 C30 11 27 13.6 24.5 12.4 C22 11.2 19.5 13 17.6 16 Z"
          fill="#3A2A20"
          {...line}
          strokeWidth={1.2}
        />
        {/* Glasses */}
        <rect
          x="22.4"
          y="16"
          width="8"
          height="5.6"
          rx="1.6"
          fill="#FFFFFF"
          fillOpacity="0.35"
          stroke={ink}
          strokeWidth="1.3"
        />
        <rect
          x="33.6"
          y="16"
          width="8"
          height="5.6"
          rx="1.6"
          fill="#FFFFFF"
          fillOpacity="0.35"
          stroke={ink}
          strokeWidth="1.3"
        />
        <path d="M30.4 18.2 H33.6" stroke={ink} strokeWidth="1.3" />
        <circle cx="26.4" cy="18.9" r="1.1" fill={ink} />
        <circle cx="37.6" cy="18.9" r="1.1" fill={ink} />
        <path d="M27 26.2 Q32 29.4 37 26.2" fill="none" stroke="#6E3B2A" strokeWidth="1.4" strokeLinecap="round" />
        <path
          className={detail}
          d="M32 21.5 L31 24.4 L32.6 24.6"
          fill="none"
          stroke="#9C6A45"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <ellipse cx="25" cy="10.5" rx="4" ry="1.6" fill="#FFFFFF" opacity="0.35" transform="rotate(-20 25 10.5)" />
      </motion.g>
    </svg>
  );
}

/* 2. A red stapler set in a block of lemon jelly, which wobbles */

export function JellyStapler(placement: Placement) {
  return (
    <Prop id="stapler" {...placement}>
      {({ played }) => <JellyStaplerDrawing played={played} />}
    </Prop>
  );
}

function JellyStaplerDrawing({ played }: { played: number }) {
  const id = useIds();
  const wobble = usePlay(played, {
    skewX: [0, -8, 6, -3.5, 1.5, 0],
    scaleY: [1, 0.96, 1.03, 0.99, 1, 1],
    transition: { duration: 0.58, ease: "easeOut" },
  });
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="h-full w-full overflow-visible">
      <defs>
        <linearGradient id={id("jelly")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFEB85" stopOpacity="0.75" />
          <stop offset="1" stopColor="#F2BF1E" stopOpacity="0.62" />
        </linearGradient>
        <linearGradient id={id("arm")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E0484F" />
          <stop offset="1" stopColor="#9C2229" />
        </linearGradient>
      </defs>
      {/* Plate */}
      <ellipse cx="32" cy="56.5" rx="30" ry="5.5" fill="#FFFFFF" {...line} />
      <ellipse className={detail} cx="32" cy="56" rx="23" ry="3.4" fill="none" stroke="#D5D8D3" strokeWidth="1" />
      <motion.g animate={wobble} style={pivotBottom}>
        {/* The stapler: black base, chrome plate, red arm */}
        <rect x="11" y="41" width="42" height="6.5" rx="2.5" fill="#2B2F35" {...line} strokeWidth={1.2} />
        <rect x="14" y="40" width="34" height="2" rx="1" fill="#B9C0C7" />
        <path
          d="M12 39.5 L47 31.5 Q54 30.6 53 36.5 L53 40 L12 40 Z"
          fill={`url(#${id("arm")})`}
          {...line}
          strokeWidth={1.2}
        />
        <path d="M17 37.4 L45 31.6" stroke="#F29BA0" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="49.5" cy="37.4" r="1.7" fill="#C9CED4" stroke={ink} strokeWidth="0.8" />
        {/* The jelly block over it */}
        <rect
          x="6"
          y="13"
          width="52"
          height="42"
          rx="9"
          fill={`url(#${id("jelly")})`}
          stroke="#C99A16"
          strokeWidth="1.4"
        />
        <path d="M7 24 C20 21.5 44 21.5 57 24" fill="none" stroke="#FFF6C4" strokeWidth="1.2" opacity="0.8" />
        <path d="M11.5 19 V46" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" opacity="0.85" />
        <path d="M15.5 16 H33" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
        <g className={detail} fill="#FFFFFF" opacity="0.7">
          <circle cx="44" cy="20" r="1.2" />
          <circle cx="49" cy="26" r="0.8" />
          <circle cx="22" cy="50" r="0.9" />
        </g>
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

/* 3. A salted soft pretzel on a square of wax paper, with a live countdown */

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
  const id = useIds();
  const hop = usePlay(played, { y: [0, -8, 0, -2.5, 0], rotate: [0, -9, 5, -1, 0], transition: { duration: 0.52 } });
  const shape =
    "M17 45 C7 37 9 18 23 16 C33 15 38 26 32 36 C26 26 31 15 41 16 C55 18 57 37 47 45 M17 45 C24 50 30 45 36 38 M47 45 C40 50 34 45 28 38";
  const salt = [
    [13, 31, 20],
    [16, 23, -15],
    [22, 18.5, 35],
    [29, 20, 10],
    [40, 18, -25],
    [47, 21, 40],
    [52, 31, 15],
    [22, 44.5, -30],
    [42, 44.5, 25],
    [32, 33, 0],
    [11, 37, 45],
    [52, 38, -10],
  ];
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="h-full w-full overflow-visible">
      <defs>
        <linearGradient id={id("bake")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#D99A52" />
          <stop offset="0.55" stopColor="#B06A2A" />
          <stop offset="1" stopColor="#7E4519" />
        </linearGradient>
      </defs>
      {/* Wax paper from the pretzel stand */}
      <path className={detail} d="M4 52 L12 40 L60 44 L54 58 Z" fill="#F6F1E3" stroke="#D9D2BE" strokeWidth="1" />
      <ellipse className={detail} cx="44" cy="52" rx="5" ry="2" fill="#E3D3A6" opacity="0.7" />
      <motion.g animate={hop} style={pivotBottom}>
        <path d={shape} fill="none" stroke="#5A3112" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d={shape}
          fill="none"
          stroke={`url(#${id("bake")})`}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 33 C12 25 16 19 22 18 M42 18 C48 19 52 25 51.5 33"
          fill="none"
          stroke="#F2C27E"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.9"
        />
        {salt.map(([x, y, r]) => (
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width="2.6"
            height="2"
            rx="0.4"
            fill="#FFFFFF"
            stroke="#C9CDC6"
            strokeWidth="0.4"
            transform={`rotate(${r} ${x + 1.3} ${y + 1})`}
          />
        ))}
      </motion.g>
    </svg>
  );
}

/* 4. A box of letterhead paper, drawn in three quarter view; the lid lifts */

export function PaperBox(placement: Placement) {
  return (
    <Prop id="paper-box" {...placement}>
      {({ played }) => <PaperBoxDrawing played={played} />}
    </Prop>
  );
}

function PaperBoxDrawing({ played }: { played: number }) {
  const lid = usePlay(played, {
    y: [0, -10, -10, 0],
    rotate: [0, -8, -8, 0],
    transition: { duration: 0.58, times: [0, 0.35, 0.6, 1] },
  });
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="h-full w-full overflow-visible">
      <Shadow cx={30} cy={59} rx={26} ry={3} />
      {/* Paper peeking out under the lid */}
      <path d="M9 27 L47 27 L55 22 L17 22 Z" fill="#FFFFFF" {...line} strokeWidth={1} />
      {/* Box: front, side */}
      <path d="M6 30 H48 V58 H6 Z" fill="#F7F5EF" {...line} />
      <path d="M48 30 L57 24 V52 L48 58 Z" fill="#DCD8CC" {...line} />
      {/* Letterhead on the front */}
      <rect x="11" y="36" width="32" height="16" fill="#FFFFFF" stroke="#C9CDC6" strokeWidth="1" />
      <text
        x="27"
        y="46.4"
        textAnchor="middle"
        fontFamily="var(--font-plex-mono), monospace"
        fontSize="7.6"
        fontWeight="600"
        fill={ink}
      >
        &lt;EM/&gt;
      </text>
      <rect className={detail} x="15" y="48.5" width="24" height="1.2" fill="#2244B8" />
      {/* Lid */}
      <motion.g animate={lid} style={{ transformBox: "fill-box", transformOrigin: "0% 100%" }}>
        <path d="M4 25 H50 V32 H4 Z" fill="#E3C88A" {...line} />
        <path d="M50 25 L59 19 V26 L50 32 Z" fill="#C9A962" {...line} />
        <path d="M4 25 L13 19 H59 L50 25 Z" fill="#EBD6A3" {...line} />
        <path className={detail} d="M8 28.5 H46" stroke="#FFFFFF" strokeWidth="1" opacity="0.7" />
      </motion.g>
    </svg>
  );
}

/* 5. A gold cup trophy on a black base, engraved Most Improved, 2024 */

export function Trophy(placement: Placement) {
  return (
    <Prop id="trophy" {...placement}>
      {({ played }) => <TrophyDrawing played={played} />}
    </Prop>
  );
}

function TrophyDrawing({ played }: { played: number }) {
  const id = useIds();
  const shine = usePlay(played, { x: [-34, 72], transition: { duration: 0.55, ease: "easeInOut" } });
  const cup = "M19 8 H45 V20 C45 31 39 37 32 37 C25 37 19 31 19 20 Z";
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="h-full w-full overflow-visible">
      <defs>
        <linearGradient id={id("gold")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#F7DB7A" />
          <stop offset="0.45" stopColor="#E0B13A" />
          <stop offset="0.75" stopColor="#B88A1C" />
          <stop offset="1" stopColor="#E8C252" />
        </linearGradient>
        <linearGradient id={id("plinth")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3B434C" />
          <stop offset="1" stopColor="#121417" />
        </linearGradient>
        <clipPath id={id("cup")}>
          <path d={cup} />
        </clipPath>
      </defs>
      <Shadow cx={32} cy={61.5} rx={17} />
      {/* Handles */}
      <path d="M19.5 12 C9.5 12 9.5 27 21 27.6" fill="none" stroke={ink} strokeWidth="4.4" strokeLinecap="round" />
      <path d="M19.5 12 C9.5 12 9.5 27 21 27.6" fill="none" stroke="#D9A932" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M44.5 12 C54.5 12 54.5 27 43 27.6" fill="none" stroke={ink} strokeWidth="4.4" strokeLinecap="round" />
      <path
        d="M44.5 12 C54.5 12 54.5 27 43 27.6"
        fill="none"
        stroke="#C99A28"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Cup with a rim and a sweep of light on play */}
      <path d={cup} fill={`url(#${id("gold")})`} {...line} />
      <ellipse cx="32" cy="8.4" rx="13" ry="1.8" fill="#FBE9A6" stroke={ink} strokeWidth="1.2" />
      <path
        d="M23.5 13 C23.5 22 25 29 29 33"
        fill="none"
        stroke="#FFF3C4"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.8"
      />
      <g clipPath={`url(#${id("cup")})`}>
        <motion.rect
          animate={shine}
          initial={{ x: -34 }}
          y="2"
          width="9"
          height="40"
          fill="#FFFBEA"
          opacity="0.85"
          transform="skewX(-20)"
        />
      </g>
      {/* Stem and base */}
      <path d="M28.5 37 H35.5 L34.5 42 H29.5 Z" fill="#C4962A" {...line} strokeWidth={1.2} />
      <rect x="25" y="42" width="14" height="3" rx="0.8" fill="#E0B13A" {...line} strokeWidth={1.2} />
      <path d="M17 45 H47 L48.5 60 H15.5 Z" fill={`url(#${id("plinth")})`} {...line} />
      <rect x="18.5" y="48.4" width="27" height="9" rx="0.6" fill="#E0B13A" stroke="#8A6714" strokeWidth="0.6" />
      <text x="32" y="52.4" textAnchor="middle" fontSize="3.3" fontWeight="700" fill="#3E2E08" fontFamily={condensed}>
        MOST IMPROVED
      </text>
      <text x="32" y="56.3" textAnchor="middle" fontSize="3.4" fontWeight="700" fill="#3E2E08" fontFamily={condensed}>
        2024
      </text>
    </svg>
  );
}

/* 6. A white "World's Best Boss" mug of coffee; steams on hover */

export function BossMug(placement: Placement) {
  return (
    <Prop id="mug" {...placement}>
      {({ open, reduce }) => <BossMugDrawing steaming={open} reduce={reduce} />}
    </Prop>
  );
}

function BossMugDrawing({ steaming, reduce }: { steaming: boolean; reduce: boolean }) {
  const id = useIds();
  const steam = ["M22 17 C18 12.5 26 10 22 4", "M30.5 18 C26.5 13 34.5 10.5 30.5 3", "M39 17 C35 12.5 43 10 39 4"];
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="h-full w-full overflow-visible">
      <defs>
        <linearGradient id={id("ceramic")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#E9EBED" />
          <stop offset="0.25" stopColor="#FFFFFF" />
          <stop offset="0.8" stopColor="#F4F5F6" />
          <stop offset="1" stopColor="#CFD3D7" />
        </linearGradient>
      </defs>
      {steam.map((d, index) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke="#AEB5BC"
          strokeWidth="2"
          strokeLinecap="round"
          initial={false}
          animate={steaming ? { pathLength: 1, opacity: 0.9 } : { pathLength: 0, opacity: 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.45, delay: steaming ? index * 0.06 : 0 }}
        />
      ))}
      <Shadow cx={31} cy={60} rx={21} />
      {/* Handle */}
      <path d="M47 27 C59 27 59 48 47 48" fill="none" stroke={ink} strokeWidth="5.6" strokeLinecap="round" />
      <path d="M47 27 C59 27 59 48 47 48" fill="none" stroke="#F1F2F3" strokeWidth="3" strokeLinecap="round" />
      {/* Body, rim and coffee */}
      <path
        d="M12 21 H48 V55 C48 57.5 46 59 43.5 59 H16.5 C14 59 12 57.5 12 55 Z"
        fill={`url(#${id("ceramic")})`}
        {...line}
      />
      <ellipse cx="30" cy="21" rx="18" ry="3.6" fill="#FFFFFF" {...line} />
      <ellipse cx="30" cy="21.4" rx="15.4" ry="2.4" fill="#4A2C1A" />
      <ellipse className={detail} cx="26" cy="20.8" rx="5" ry="0.7" fill="#8A5A3A" opacity="0.7" />
      <path d="M16.5 26 V53" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
      <text x="30" y="35.5" textAnchor="middle" fontSize="7" fontWeight="700" fill={ink} fontFamily={condensed}>
        WORLD&apos;S
      </text>
      <text x="30" y="43.5" textAnchor="middle" fontSize="7" fontWeight="700" fill={ink} fontFamily={condensed}>
        BEST
      </text>
      <text x="30" y="51.5" textAnchor="middle" fontSize="7" fontWeight="700" fill={ink} fontFamily={condensed}>
        BOSS
      </text>
    </svg>
  );
}

/* 7. The kitchen wall: a pinned fire safety notice beside a framed watercolour */

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
  const id = useIds();
  const flutter = usePlay(played, { rotate: [0, -7, 5, -2.5, 1, 0], transition: { duration: 0.55, ease: "easeOut" } });
  return (
    <svg aria-hidden viewBox="0 0 120 64" className="h-full w-full overflow-visible">
      <defs>
        <linearGradient id={id("frame")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9A7448" />
          <stop offset="1" stopColor="#5E4428" />
        </linearGradient>
        <linearGradient id={id("sky")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7FB0D8" stopOpacity="0.75" />
          <stop offset="1" stopColor="#CFE3EF" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {/* The notice, pinned at the top centre */}
      <motion.g animate={flutter} style={pivotTop}>
        <rect x="5.5" y="8.5" width="44" height="54" fill={ink} opacity="0.15" />
        <rect x="4" y="7" width="44" height="54" fill="#FFFFFF" {...line} strokeWidth={1.2} />
        <rect x="4" y="7" width="44" height="11" fill="#B8323A" />
        <text x="26" y="14.8" textAnchor="middle" fontSize="6" fontWeight="700" fill="#FFFFFF" fontFamily={condensed}>
          FIRE SAFETY
        </text>
        <path
          d="M20 31 C20 26 24 25 24 20.5 C28.5 23.5 31 27 31 31 C31 34.5 28 36.5 25.5 36.5 C22.5 36.5 20 34.5 20 31 Z"
          fill="#E0393B"
        />
        <path
          d="M23.5 32 C23.5 30 25.5 29 25.5 27 C27.5 28.5 28.5 30 28.5 32 C28.5 33.5 27.2 34.5 26 34.5 C24.7 34.5 23.5 33.5 23.5 32 Z"
          fill="#FFD84D"
        />
        {[41, 45.5, 50, 54.5].map((y, index) => (
          <rect key={y} x="9" y={y} width={index === 3 ? 22 : 34} height="1.8" rx="0.9" fill="#B9BEC4" />
        ))}
        <circle
          className={detail}
          cx="38"
          cy="52"
          r="6"
          fill="none"
          stroke="#B98E5E"
          strokeWidth="1.4"
          opacity="0.45"
        />
      </motion.g>
      <circle cx="26" cy="7" r="3" fill="#2244B8" stroke={ink} strokeWidth="0.8" />
      <circle cx="25" cy="6" r="0.9" fill="#FFFFFF" opacity="0.8" />
      {/* The watercolour: soft washes in a wooden frame */}
      <rect x="57" y="4" width="60" height="46" fill={`url(#${id("frame")})`} {...line} strokeWidth={1.2} />
      <rect x="61" y="8" width="52" height="38" fill="#FBF8F0" />
      <rect x="62" y="9" width="50" height="22" fill={`url(#${id("sky")})`} />
      <circle cx="104" cy="15.5" r="4.2" fill="#FFD84D" opacity="0.75" />
      <ellipse cx="86" cy="42" rx="26" ry="5" fill="#8DB86A" opacity="0.5" />
      <ellipse className={detail} cx="70" cy="44" rx="10" ry="3" fill="#6E9E50" opacity="0.4" />
      {/* An office block */}
      <rect x="74" y="16" width="28" height="27" fill="#D9D6CE" stroke="#7D858D" strokeWidth="0.9" />
      <rect x="74" y="16" width="5" height="27" fill="#BFBBB1" opacity="0.8" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={81 + col * 5.2}
            y={19.5 + row * 5.6}
            width="3.2"
            height="3.4"
            fill="#5F7E9E"
            opacity={0.55 + ((row + col) % 2) * 0.2}
          />
        )),
      )}
      <rect x="85" y="39" width="6" height="4" fill="#5F7E9E" opacity="0.7" />
      {/* A palm */}
      <path d="M67 44 C66.5 37 67.5 31 70 27" fill="none" stroke="#7A5A38" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M70 27 C65 25 62 27 61 29.5 M70 27 C73 23 77 24 78 26.5 M70 27 C68 22 69.5 20 72 19 M70 27 C75 27 77 30 77 32.5 M70 27 C66 27.5 64 31 64.5 33"
        fill="none"
        stroke="#3F7D3A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* The label under the frame */}
      <rect x="64" y="53" width="46" height="9" fill="#FFFFFF" {...line} strokeWidth={0.9} />
      <text x="87" y="59.2" textAnchor="middle" fontSize="4.8" fill={ink} fontFamily={condensed}>
        Painted by reception.
      </text>
    </svg>
  );
}

/* 8. A crossword puzzle book with a pencil; the answer writes itself in */

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
  const black = new Set(["0-3", "1-1", "2-4", "3-2", "4-0", "1-4"]);
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="h-full w-full overflow-visible">
      <Shadow cx={32} cy={60} rx={27} />
      {/* Cover edge and pages */}
      <path
        d="M32 15 C23 11 11 11 3 14 V57 C11 54 23 54 32 58 C41 54 53 54 61 57 V14 C53 11 41 11 32 15 Z"
        fill="#2244B8"
        {...line}
        strokeWidth={1.2}
      />
      <path d="M32 14 C24 10 12 10 5 13 V54.5 C12 51.5 24 51.5 32 55.5 Z" fill="#FBFAF6" {...line} strokeWidth={1.2} />
      <path d="M32 14 C40 10 52 10 59 13 V54.5 C52 51.5 40 51.5 32 55.5 Z" fill="#FFFFFF" {...line} strokeWidth={1.2} />
      <path d="M32 14 V55.5" stroke="#C9CDC6" strokeWidth="1.2" />
      {/* Clues on the left page */}
      <rect x="9" y="18" width="12" height="2.2" rx="1" fill={ink} opacity="0.8" />
      {[23.5, 27.5, 31.5, 35.5, 39.5, 43.5].map((y, index) => (
        <rect key={y} x="9" y={y} width={index % 3 === 2 ? 13 : 18} height="1.6" rx="0.8" fill="#AEB5BC" />
      ))}
      {/* The grid on the right page */}
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
            strokeWidth="0.55"
          />
        )),
      )}
      <path
        className={detail}
        d="M37 19.4 l1.4 2.2 M41.6 19.4 l1.6 2"
        stroke="#2244B8"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      {/* Pencil */}
      <g transform="rotate(-36 46 47)">
        <rect x="29" y="44.5" width="27" height="5" fill="#FFC93C" {...line} strokeWidth={1} />
        <rect x="29" y="44.5" width="27" height="1.6" fill="#FFE08A" />
        <path d="M56 44.5 L62 47 L56 49.5 Z" fill="#E8C99A" {...line} strokeWidth={1} />
        <path d="M60 46.2 L62 47 L60 47.8 Z" fill={ink} />
        <rect x="25.5" y="44.5" width="3.5" height="5" fill="#B9C0C7" {...line} strokeWidth={1} />
        <rect x="22" y="44.5" width="3.5" height="5" rx="1" fill="#E79AA0" {...line} strokeWidth={1} />
      </g>
    </svg>
  );
}

/* 9. A manila folder wrapped like a present; a click unties the ribbon */

export function GiftFolder(placement: Placement) {
  const [unwrapped, setUnwrapped] = React.useState(false);
  return (
    <Prop id="gift" onActivate={() => setUnwrapped((value) => !value)} {...placement}>
      {({ reduce }) => <GiftFolderDrawing unwrapped={unwrapped} reduce={reduce} />}
    </Prop>
  );
}

function GiftFolderDrawing({ unwrapped, reduce }: { unwrapped: boolean; reduce: boolean }) {
  const id = useIds();
  const t = (delay = 0) => (reduce ? { duration: 0 } : { duration: 0.35, delay });
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="h-full w-full overflow-visible">
      <defs>
        <linearGradient id={id("ribbon")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#9E252C" />
          <stop offset="0.5" stopColor="#D9474E" />
          <stop offset="1" stopColor="#9E252C" />
        </linearGradient>
      </defs>
      <Shadow cx={32} cy={60} rx={27} />
      {/* Folder: back with tab, then the front */}
      <path d="M5 19 H23 L27 14 H39 L43 19 H59 V57 H5 Z" fill="#D9BC78" {...line} strokeWidth={1.3} />
      <path d="M5 22 H59 V57 H5 Z" fill="#E3C88A" {...line} strokeWidth={1.3} />
      <path d="M5 22 H59" stroke="#F1DDA9" strokeWidth="1.2" />
      <path className={detail} d="M9 26 H25" stroke="#C9A962" strokeWidth="1" />
      {/* Revealed once untied */}
      <motion.g
        initial={false}
        animate={unwrapped ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.3 }}
        transition={t(unwrapped ? 0.25 : 0)}
        style={pivotCentre}
      >
        <g transform="rotate(-8 32 41)">
          <rect x="12" y="32" width="40" height="18" fill="none" stroke="#B8323A" strokeWidth="1.8" />
          <rect x="14" y="34" width="36" height="14" fill="none" stroke="#B8323A" strokeWidth="0.7" />
          <text x="32" y="40" textAnchor="middle" fontSize="6.2" fontWeight="700" fill="#B8323A" fontFamily={condensed}>
            COMING
          </text>
          <text
            x="32"
            y="46.5"
            textAnchor="middle"
            fontSize="6.2"
            fontWeight="700"
            fill="#B8323A"
            fontFamily={condensed}
          >
            2027
          </text>
        </g>
      </motion.g>
      {/* Ribbon */}
      <motion.g
        initial={false}
        animate={unwrapped ? { opacity: 0, scaleY: 0 } : { opacity: 1, scaleY: 1 }}
        transition={t()}
        style={pivotTop}
      >
        <rect x="28.5" y="22" width="7" height="35" fill={`url(#${id("ribbon")})`} />
      </motion.g>
      <motion.g
        initial={false}
        animate={unwrapped ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={t()}
        style={pivotCentre}
      >
        <rect x="5" y="36" width="54" height="7" fill="#C2343B" />
        <path d="M5 37.2 H59" stroke="#E87A80" strokeWidth="1" />
      </motion.g>
      {/* Bow, tails and a tag */}
      <motion.g
        initial={false}
        animate={unwrapped ? { opacity: 0, scale: 0, rotate: 40 } : { opacity: 1, scale: 1, rotate: 0 }}
        transition={t()}
        style={pivotBottom}
      >
        <path d="M31 22 L25 31 L28 31 Z" fill="#9E252C" />
        <path d="M33 22 L39 31 L36 31 Z" fill="#9E252C" />
        <path d="M32 21 C22 6 11 13 20 20.5 C24 23 28 22 32 21 Z" fill="#D9474E" {...line} strokeWidth={1.1} />
        <path d="M32 21 C42 6 53 13 44 20.5 C40 23 36 22 32 21 Z" fill="#D9474E" {...line} strokeWidth={1.1} />
        <path
          d="M21 15 C24 13 27 15 29 18 M43 15 C40 13 37 15 35 18"
          fill="none"
          stroke="#F29BA0"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <ellipse cx="32" cy="21" rx="3.4" ry="3" fill="#B8323A" {...line} strokeWidth={1.1} />
        <g className={detail}>
          <path d="M35 23 L44 28" stroke="#B8323A" strokeWidth="0.8" />
          <rect
            x="43"
            y="26.5"
            width="9"
            height="6"
            rx="0.8"
            fill="#FFFFFF"
            {...line}
            strokeWidth={0.8}
            transform="rotate(18 47.5 29.5)"
          />
        </g>
      </motion.g>
    </svg>
  );
}

/* 10. A fresh beet with its greens; the leaves rustle */

export function Beet(placement: Placement) {
  return (
    <Prop id="beet" {...placement}>
      {({ played }) => <BeetDrawing played={played} />}
    </Prop>
  );
}

function BeetDrawing({ played }: { played: number }) {
  const id = useIds();
  const rustle = usePlay(played, { rotate: [0, -12, 9, -4, 1, 0], transition: { duration: 0.55, ease: "easeOut" } });
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="h-full w-full overflow-visible">
      <defs>
        <radialGradient id={id("root")} cx="0.35" cy="0.35" r="0.75">
          <stop offset="0" stopColor="#C23A6A" />
          <stop offset="0.6" stopColor="#8E1F45" />
          <stop offset="1" stopColor="#5A0F2C" />
        </radialGradient>
        <linearGradient id={id("leaf")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6DB35F" />
          <stop offset="1" stopColor="#2F6B2B" />
        </linearGradient>
      </defs>
      <Shadow cx={30} cy={61.5} rx={14} />
      {/* Soil crumbs */}
      <g className={detail} fill="#6B4A2E">
        <circle cx="18" cy="60" r="1.2" />
        <circle cx="42" cy="61" r="1" />
        <circle cx="46" cy="59.6" r="0.7" />
      </g>
      <motion.g animate={rustle} style={pivotBottom}>
        <path
          d="M30 24 C27 16 21 9.5 13 6 C14 13 21 21 29.5 24.5 Z"
          fill={`url(#${id("leaf")})`}
          {...line}
          strokeWidth={1.2}
        />
        <path d="M30 24 C24 18 18.5 12 15 8" fill="none" stroke="#B8325A" strokeWidth="1.2" strokeLinecap="round" />
        <path
          d="M34 24 C37 15 43 9 52 7 C50 15 42 21 34.5 24.5 Z"
          fill={`url(#${id("leaf")})`}
          {...line}
          strokeWidth={1.2}
        />
        <path d="M34 24 C39 18 44.5 12 50 9" fill="none" stroke="#B8325A" strokeWidth="1.2" strokeLinecap="round" />
        <path
          d="M32 23 C30 15 30.5 8 33 2.5 C37 8.5 36 16 33.5 23 Z"
          fill={`url(#${id("leaf")})`}
          {...line}
          strokeWidth={1.2}
        />
        <path d="M32.6 23 C32.4 15 32.6 9 33 4" fill="none" stroke="#B8325A" strokeWidth="1.1" strokeLinecap="round" />
      </motion.g>
      {/* Root */}
      <path
        d="M31 58 C28.5 52 15.5 47 16.5 35 C17.5 26 24.5 22 32 22 C39.5 22 46.5 26 47.5 35 C48.5 47 35.5 52 33 58 Z"
        fill={`url(#${id("root")})`}
        {...line}
      />
      <path d="M32 58 C32 60.5 33.5 62 35 63" fill="none" stroke="#5A0F2C" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M22.5 31 C21.5 35 21.8 39.5 24 43"
        fill="none"
        stroke="#E07A9C"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        className={detail}
        d="M38 46 l3 1 M40 40 l3 0.5 M26 47 l-2.5 1.2"
        stroke="#5A0F2C"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}
