# Design System: Ernest Mwinchumu Portfolio

## Direction: the documentary

The whole site is a mockumentary about Ernest's work, and every page is an episode. The look borrows documentary camera language: a REC header with a live clock, a viewfinder, talking heads, stage directions like `[looks at camera]`, episode title cards, "Previously on", "Coming up next" and end credits. It also borrows office objects: manila folders, a receipt, a whiteboard, a cork board, sticky notes and a visitor sign-in sheet.

The content stays professional. The jokes live in captions, stage directions and extras. The show is named once, in the end credits. Beyond that, the references are hidden: ten props around the site nod to moments fans know, each drawn from scratch with captions in our own words or short lines. No logos, stills, character likenesses or character names, and nothing traced.

| Page | Route | Episode |
|---|---|---|
| Home | `/` | Ep 1 Pilot |
| Work | `/work` | Ep 2 The Work Files |
| Case study | `/work/[slug]` | Part of Ep 2 |
| About | `/about` | Ep 3 Personnel File |
| Writing | `/writing` | Ep 4 Memos |
| Post | `/writing/[slug]` | A memo |
| Contact | `#reception` on every page | Ep 5 Reception |

## Tokens

| Token | Hex | Use |
|---|---|---|
| `ink` | `#1E2329` | Main text |
| `camera` | `#121417` | Header, episode cards, dark panels |
| `credits` | `#0B0C0E` | End credits |
| `strip` | `#2B2F35` | "Previously on" strip |
| `wall` | `#D9D6CB` | Page background |
| `panel` | `#E4E1D6` | Alternate sections, viewfinder |
| `panel-dark` | `#CFCBBE` | Hero surround, jump-link bar |
| `cubicle` | `#4F5B66` | Dark-grey sections |
| `muted` / `muted-deep` | `#4A4F55` / `#3B434C` | Secondary text |
| `marker` | `#FFD84D` | Notes and labels on dark only |
| `sticky` | `#FFE98A` | Sticky notes |
| `pen` | `#2244B8` | Links, handwritten notes, buttons, focus rings |
| `stamp` | `#B8323A` | VERIFIED and ON HOLD stamps, form errors |
| `rec` | `#E0393B` | The REC dot only (blinks; solid with reduced motion) |
| `manila` | `#E3C88A` (tab `#D9BC78`, edge `#C9A962`) | Work folders |
| `cork` | `#B98E5E` (frame `#7A5A38`) | Break room |

Text links are pen blue and semibold, with a soft underline (1.5px, set 0.24em below the text, 40% strength) that firms up on hover. On light paper a yellow marker swipe slides in under the link on hover. Text meets 4.5:1. Yellow text only appears on dark backgrounds. Focus rings are pen blue, and yellow inside dark panels (`.on-dark`).

## Type

Self-hosted from `app/fonts` with `next/font/local` (latin subsets), so a build never depends on Google Fonts. IBM Plex Sans is the variable version: one file covers 100 to 700, plus an italic file.

| Font | Class | Role |
|---|---|---|
| IBM Plex Sans | `font-sans` | Body and UI |
| IBM Plex Sans Condensed 700 | `font-condensed` | Headings, names, episode titles |
| IBM Plex Mono | `font-mono` | Timecodes, labels, the receipt, the REC header |
| Reenie Beanie | `font-hand` | Handwriting: notes under headings, whiteboard, sticky notes |

## Shape

Paper and the receipt have no radius. Buttons are 4px. Folders are 4px with a 6px tab. The whiteboard is 6px with a 14px grey frame.

## Components

Shared pieces live in `components/doc/`. Their copy lives in `content/show.ts` (the show frame), `content/projects.ts` (work files), `content/about.ts` (the personnel file) and `content/writing/` (memos).

- `CameraHeader`: sticky black bar with `<EM/>`, the live REC clock (`RecClock`: Dar es Salaam time, ticking every second, with a hard-blinking red dot), "CAM B" and the episode guide. The guide underlines the episode in view: on home it follows the sections (scroll-spy), and on every page Reception takes over at the bottom. The current page gets `aria-current="page"`, the section in view `aria-current="location"`. On mobile the guide is one row that scrolls sideways, keeps the active episode in view and fades at the right edge while there is more to swipe. A 2px yellow `RuntimeBar` along the bottom shows how far down the page you are.
- `EpisodeCard`: black title card with a mono label, a condensed title, an optional white tagline and an optional handwritten yellow explainer.
- `PreviouslyOn`: thin strip under the header on every page except home.
- `Timecode` and `SectionHeading`: mono label, condensed heading and a handwritten explainer. Every section has one, so visitors always know where they are.
- `HandNote` and `StickyNote`: Reenie Beanie notes, slightly rotated. Decorative notes are hidden from screen readers.
- `Viewfinder` and `InterviewFrame`: the home hero frame with corner brackets and ceiling tiles, and the portrait with its lower third caption. On home, Snap zoom punches in 1.55x on the face.
- `TalkingHead`: 48px portrait crop, a quoted line and an optional stage direction.
- `Receipt`: the career receipt. Roles with outlines on home, promotion history on About.
- `WorkFolder`: manila folder holding a white sheet with the real cover, meta, blurb, outcome and an ON HOLD stamp where needed.
- `ConsultingCabinet`: on Work, under Consulting. Locked manila files stamped CONFIDENTIAL stand for the client work that stays private; one open file shows a public engagement with its live site cover, a link to the client's team page, and three stills from the build.
- `CurrentlyFilming`, `InterviewQA`, `BranchRules`, `WhiteboardAgenda`, `DeletedScenes`, `Corkboard` and `ComingUpNext`: the home, About and closing sections.
- `Reception`: contact details, a sticky note and the visitor sign-in sheet, which posts to `/api/contact`.
- `EndCredits`: the credits list, the one inspiration line and the copyright line.
- `Prop` (`components/props/`): ten hidden props, each an original inline SVG inside a focusable button. The caption shows on hover, focus or tap, and each plays one short animation (under 0.6s, never looping). They sit absolutely in existing whitespace, so they never move the layout: the bobblehead (home photo), the stapler in jelly (home work files), the pretzel with a live countdown to 26 April (home currently filming), the World's Best Boss mug (home meeting), the letterhead box (home reception), the trophy (About, intern to Tech Lead), the kitchen wall notice and watercolour, the crossword (About, branch rules), the gift-wrapped folder (last work folder) and the beet (404). Their copy is in `content/props.ts`. Found props are counted in localStorage and shown in the end credits as "Props department".

## Motion

One library per job:

| Library | Job |
|---|---|
| `motion` (`motion/react`) | All component animation |
| `react-rough-notation` | Four hand-drawn marks: the yellow highlight on the home whiteboard, the underline on the first folder's "Outcome", the box around the About receipt's VERIFIED stamp, and the underline under "Let me explain myself." |
| `next-view-transitions` | A 120ms cut through black between pages, from the episode guide and Coming up next cards. The camera header stays put |
| `qrcode.react` | The LinkedIn QR on every receipt, next to a visible "LinkedIn" link |

How things move:

- `Reveal` (`components/motion/reveal.tsx`) wraps section blocks and cards. Every element is rechecked on each scroll frame and resize through one shared listener (`lib/scroll-frame.ts`), measured against the strip below the sticky header: anything fully visible is always shown, and anything partly on screen is never left hidden. They rise 16px in when entering from below, drop in from -16px when scrolling back up (`useScrollDirection`), and dim to 0.4 with an 8px drift while leaving. This replays on every pass. Long reading blocks (case study text, the memo) use a single soft fade.
- Inside a `Reveal`, handwritten explainers write in left to right (`WriteIn`), and stage directions land 0.4s after their line.
- Set pieces replay only after fully leaving the screen: episode title cards fade up from black, the receipt prints and its stamp lands, the clapper on Currently filming snaps shut, scene bridge arrows draw, and the rough-notation marks redraw.
- Props play one short animation each on hover, focus or tap (a nod, a wobble, steam, a ribbon untying). With reduced motion they show their caption and stay still.
- Snap zoom springs to 1.55x with a tiny shake. Work folder sheets slide up 10px on hover or focus, sticky notes lift 3px, and outtakes cut rather than slide.
- Limits: 16px max distance, 0.35 to 0.6s, ease out `[0.22, 1, 0.36, 1]`, 0.06s stagger capped at four items. Only opacity, transform and clip-path animate.
- The server HTML always shows everything; elements only park off screen after hydration.
- `MotionConfig reducedMotion="user"`: with reduced motion everything is simply shown, marks appear without drawing, and the REC dot stops blinking.

## Responsive

Rotated elements never overlap text at 320px. Wide rows (receipt beside text, the folders grid) stack below 900px. The camera header stays one short sticky bar on phones, with the episode guide scrolling sideways.

Phones (below 640px) get a tighter cut, so home stays under 9,000px at 390px wide:

- Sections use 56px of vertical padding instead of 88 to 96.
- Hero: text, then the 240px photo with Snap zoom beside the caption, then the sticky note at 80% size.
- Home shows the first 2 work files and the first 2 deleted scenes, with "See all files" and "See all scenes" after them; Currently filming shows its first 2 scenes; the personnel teaser shows one answer and skips the house rules (they're on About).
- Folders on home skip the blurb and quote, the home receipt skips the role outlines, and the short version keeps its first paragraph. The Reception sticky note is hidden.
- Desktop shows everything.
