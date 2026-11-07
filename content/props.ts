/**
 * The props department: ten small objects hidden around the site. Each is a button
 * whose caption shows on hover, focus or tap. Found props are counted in the credits.
 */

export const propIds = [
  "bobblehead",
  "stapler",
  "pretzel",
  "paper-box",
  "trophy",
  "mug",
  "kitchen-wall",
  "crossword",
  "gift",
  "beet",
] as const;

export type PropId = (typeof propIds)[number];

export const props: Record<PropId, { label: string; caption: string }> = {
  bobblehead: { label: "Office bobblehead", caption: "Identity theft is not a joke." },
  stapler: { label: "Stapler set in jelly", caption: "Someone's been in my files." },
  // {days} is filled in live, counting down to the next 26 April
  pretzel: { label: "A pretzel", caption: "Days until Pretzel Day: {days}. Not that I'm counting." },
  "paper-box": { label: "Box of letterhead paper", caption: "Paper is still the best way to say hello." },
  trophy: {
    label: "Gold trophy engraved Most Improved, 2024",
    caption: "Every year, everyone gets one. I got this one.",
  },
  mug: { label: "World's Best Boss mug", caption: "Bought it myself. The team hasn't voted yet." },
  "kitchen-wall": {
    label: "Fire safety notice and a watercolour of the office",
    caption: "In case of fire: save the laptop, then the snacks.",
  },
  crossword: { label: "Crossword book", caption: "Reply to a meeting with no agenda (3, 1, 7)" },
  gift: { label: "Gift-wrapped folder", caption: "Coming 2027." },
  beet: { label: "A beet", caption: "This page is a beet farm. Nothing here but beets." },
};

/** Second line under the kitchen wall caption, for the painting */
export const watercolourCaption = "Painted by reception.";

/** The crossword answer that writes itself in */
export const crosswordAnswer = ["DID", "I", "STUTTER"];

export const propsCredits = {
  role: "Props department",
  found: (count: number, total: number) => `${count} of ${total} found`,
  allFound: "You'd make a great assistant (to the) regional manager.",
};
