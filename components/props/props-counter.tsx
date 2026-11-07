"use client";

import { propIds, propsCredits } from "@/content/props";
import { usePropsFound } from "@/lib/props-tracker";

/** "Props department" credit, counting the props this visitor has found */
export function PropsCredit() {
  const found = usePropsFound();
  return (
    <div className="contents">
      <dt className="pt-0.5 text-right font-mono text-xs text-credits-muted sm:text-[13px]">{propsCredits.role}</dt>
      <dd className="text-left text-white" aria-live="polite">
        {propsCredits.found(found, propIds.length)}
      </dd>
    </div>
  );
}

/** The reward line, once all ten are found */
export function PropsReward() {
  const found = usePropsFound();
  if (found < propIds.length) return null;
  return <p className="mt-2 font-hand text-[26px] leading-tight text-marker">{propsCredits.allFound}</p>;
}
