# Design System: Ernest Mwinchumu Portfolio

## Direction: the documentary

The whole site is a mockumentary about Ernest's work, and every page is an episode. The look borrows documentary camera language: a REC header with a timecode, a viewfinder, talking heads, stage directions like `[looks at camera]`, episode title cards, "Previously on", "Coming up next" and end credits. It also borrows office objects: manila folders, a receipt, a whiteboard, a cork board, sticky notes and a visitor sign-in sheet.

The content stays professional. The jokes live in captions, stage directions and extras. The inspiration is credited once, in the end credits, and nothing else from the show is used: no name in the branding, no logo, characters, building, music or famous props, and only one quote on the whole site.

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
| `rec` | `#E0393B` | The REC dot only |
| `manila` | `#E3C88A` (tab `#D9BC78`, edge `#C9A962`) | Work folders |
| `cork` | `#B98E5E` (frame `#7A5A38`) | Break room |

Text meets 4.5:1. Yellow text only appears on dark backgrounds. Focus rings are pen blue, and yellow inside dark panels (`.on-dark`).

## Type

All self-hosted with `next/font/google`.

| Font | Class | Role |
|---|---|---|
| IBM Plex Sans | `font-sans` | Body and UI |
| IBM Plex Sans Condensed 700 | `font-condensed` | Headings, names, episode titles |
| IBM Plex Mono | `font-mono` | Timecodes, labels, the receipt, the REC header |
| Reenie Beanie | `font-hand` | Handwriting: notes under headings, whiteboard, sticky notes |

## Shape

Paper and the receipt have no radius. Buttons are 4px. Folders are 4px with a 6px tab. The whiteboard is 6px with a 14px grey frame.

## Components

Shared pieces live in `components/doc/`, and their copy lives in `content/*.ts`.

- `CameraHeader`: black bar with `<EM/>`, a red REC dot with a per-page timecode, "CAM B" and the episode guide. The current episode gets `aria-current="page"` and a yellow underline. Wraps on mobile.
- `EpisodeCard`: black title card with a mono label, a condensed title, an optional white tagline and an optional handwritten yellow explainer.
- `PreviouslyOn`: thin strip under the header on every page except home.
- `Timecode`: mono label above a section heading.
- `SectionHeading`: condensed H2 with a handwritten explainer underneath. Every section has one, so visitors always know where they are.
- `HandNote`: Reenie Beanie text with optional rotation and a hand-drawn arrow. Decorative notes are hidden from screen readers.
- `StickyNote`: yellow note, slightly rotated, with an optional mono label.
- `Reception`: contact details, a sticky note and the visitor sign-in sheet, which posts to `/api/contact`.
- `EndCredits`: the credits list, the one inspiration line and the copyright line.

Still to come, page by page: `TalkingHead`, `Viewfinder`, `InterviewFrame`, `Receipt`, `WorkFolder`, `CurrentlyFilming`, `InterviewQA`, `BranchRules`, `WhiteboardAgenda`, `DeletedScenes`, `Corkboard` and `ComingUpNext`.

## Motion

Small and on purpose:

- Snap zoom on the home talking head, on click.
- "Play another outtake", on click.
- Hover states change colour only, with no lifts or glows.
- No scroll reveals, cursor effects or animated backgrounds.
- With reduced motion, transitions are cut to nothing.

## Responsive

Rotated elements never overlap text at 320px. Wide rows (receipt beside text, the folders grid) stack below 900px. On mobile the home hero stacks as text, then sticky note, then photo.
