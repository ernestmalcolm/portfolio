/** Shared motion settings, safe to use from server and client components */

export const ease = [0.22, 1, 0.36, 1] as const;

/** Stagger delay: 0.06s per item, and from the fourth item on they appear together */
export const stagger = (index: number) => Math.min(index, 3) * 0.06;
