import { PropsCredit, PropsReward } from "@/components/props/props-counter";
import { credits, creditsLines } from "@/content/show";
import { siteConfig } from "@/lib/site-config";

export function EndCredits() {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="End credits"
      className="on-dark bg-credits px-8 pb-10 pt-14 sm:pb-16 sm:pt-[88px] text-center text-credits-text"
    >
      <dl className="mx-auto grid max-w-[520px] grid-cols-2 gap-x-4 gap-y-1.5 text-sm sm:gap-x-6 sm:gap-y-2 sm:text-[15px]">
        {credits.map((credit) => (
          <div key={credit.role} className="contents">
            <dt className="pt-0.5 text-right font-mono text-xs text-credits-muted sm:text-[13px]">{credit.role}</dt>
            <dd className="text-left text-white">{credit.name}</dd>
          </div>
        ))}
        <PropsCredit />
      </dl>
      <PropsReward />
      <p className="mt-8 font-condensed text-[24px] sm:mt-12 sm:text-[26px] font-bold leading-tight text-white">
        {creditsLines.inspiredBy}
      </p>
      <p className="mt-2 text-[15px]">{creditsLines.disclaimer}</p>
      <p className="mt-6 font-mono text-xs text-credits-muted sm:mt-8">
        &lt;EM/&gt; {year} {siteConfig.name}. {creditsLines.copyright}
      </p>
    </footer>
  );
}
