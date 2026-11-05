# Design System: Ernest Mwinchumu Portfolio

## Direction: navy, coral and the receipt

Dark navy with coral accents, an Aceternity style spotlight and dot grid behind each page's opening, and content that eases in as you scroll. The one bold idea is the **career receipt**: a white fiscal receipt on the navy, because Ernest's product issues them for about 4,000 Tanzanian businesses.

The logo is always `<EM/>`: coral brackets, cream letters, IBM Plex Mono. It's used in the nav, the footer, the favicon and the share image.

Audience: hiring managers and leaders at banks, telcos and institutions, plus consulting clients. Credible first, then charming.

## Tokens

| Token | Value | Role | Contrast on navy |
|---|---|---|---|
| `navy` | `#0B1F3A` | Page background | n/a |
| `navy-light` | `#12264A` | Row hover, inputs | n/a |
| `navy-dark` | `#07152A` | Footer | n/a |
| `cream` | `#F5F1E8` | Body text, headings | 14.6:1 |
| `mist` | `#C5CEDB` | Secondary text, nav links | 10.4:1 |
| `muted` | `#98A4B8` | Meta text, dates | 6.6:1 |
| `coral` | `#FF6B5E` | Links, primary button, focus ring, accents | 5.9:1 (navy text on it 5.9:1) |
| `coral-light` | `#FF8A80` | Hover state | 7.2:1 |
| `line` | `#2E4670` | Hairlines between rows | decorative |
| `field` | `#5B7096` | Input borders | 3.0:1 or more |

The receipt is a white slip and keeps its own palette: `receipt` `#FFFFFF`, `receipt-ink` `#222831`, `receipt-slate` `#30475E`, `receipt-muted` `#5F6873`, `receipt-red` `#C8333F`, and `stamp` `#E5484D` for the VERIFIED stamp.

The primary button uses navy text on coral, because white on coral fails AA.

## Type

IBM Plex, self hosted with `next/font/google`.

| Role | Face | Size (mobile / desktop) |
|---|---|---|
| Hero name | Plex Sans Condensed 700, cream to coral gradient | 56 / 112px |
| h1 | Plex Sans Condensed 700 | 40 / 64px |
| h2 | Plex Sans Condensed 700 | 30 / 40px |
| h3 | Plex Sans 600 | 20px |
| Body | Plex Sans 400, leading 1.6 | 17px |
| Logo, dates, receipt | Plex Mono | 13 to 18px |

Body text is capped at `65ch`.

## Backgrounds

- `SiteBackdrop` (`components/site-backdrop.tsx`): one fixed layer behind every page, so the texture carries all the way down. A dot grid fading at the edges (`.site-dots`), a coral glow on the left and a blue glow on the right, both drifting slowly (`.glow-drift`, off with reduced motion).
- `PageBackdrop` (`components/page-backdrop.tsx`): the Aceternity coral `Spotlight` (`components/aceternity/spotlight.tsx`) over each page's opening, with a second, blue spotlight on the home hero.
- The hero name and the About headline use `.text-gradient` (cream to coral).
- The header (navy at 80%) and footer (navy-dark at 80%) blur what's behind them.

## Motion

- `Reveal` (`components/reveal.tsx`): content fades and lifts 28px the first time it enters the viewport, then stays. Rows stagger by about 50ms.
- The receipt has two modes. On the home hero it prints top to bottom once, when it first comes into view. On `/about` it starts printed, and **Print another** reprints it with a random joke line item (`receiptJokes` in `content/about.ts`). The print animation there runs only on click.
- The spotlight fades in once on page load. The site background glows drift slowly.
- Hover: rows get a faint `navy-light` tint, and the primary button's glow brightens.
- With `prefers-reduced-motion` or no JavaScript, everything is simply shown, and Print another swaps the line without animating.

## Project covers

Each project can set `cover` (for example `/images/work/simplify.png`). `ProjectCover` shows it with `next/image`, 8px radius and no hover zoom: small on the right of Selected work rows on desktop (above the text on mobile), and large at the top of each case study. Until the file exists under `public/`, a clearly marked placeholder shows the expected path.

## Layout

- Container `max-w-5xl`, left aligned.
- Work, experience, skills, beliefs and writing are rows: a hairline, then meta in an 11rem left column and content on the right. Stacked on mobile.
- Radius: receipt 0, inputs 4px, buttons full pill, images 8px.

## The career receipt

```
┌────────────────────────────────────┐
│          ERNEST MWINCHUMU          │
│        Dar es Salaam, Tanzania     │
│ ---------------------------------- │
│             No. EM-2022            │
│ ---------------------------------- │
│  Tech Lead                         │
│  Research and Product Lead         │
│  Tech Consultancy                  │
│ ---------------------------------- │
│  Metaphors you didn't ask for Free │   (/about only)
│  The Office quotes       Unlimited │   (/about only)
│ ================================== │
│  Total                    1 Ernest │
│  VAT (Very Average Thinking)    0% │
│  Paid with  Patience (Man Utd fan) │   (/about only)
│   [QR → LinkedIn]     [VERIFIED]   │   (QR: /about only)
│  Thank you for reading.            │
│  Powered by Dunder Mifflin         │
└╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲┘
```

Real text in a `dl`, so it's readable by screen readers and search engines. It sums up who Ernest is now: roles and personality, no history and no Simplify figures. The home page shows the short version.

## Pages

- `/`: hero with the short receipt beside the name, the short version, selected work with covers, where I'm heading, latest writing
- `/work`: Simplitech Limited, Personal products, Consulting
- `/about`: bio and photo, how I work, the interactive receipt, experience, education, skills (four rows), where I'm heading (beliefs live in the writing post), beyond work
- `/work/[slug]`, `/writing`, `/writing/[slug]`
- Contact lives in the footer of every page (`#contact`)

## Quality floor

Responsive to 320px, visible coral focus ring, AA contrast, no layout shift from motion (opacity, transform and clip-path only), reduced motion respected.
