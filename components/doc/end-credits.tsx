import { credits, creditsLines } from "@/content/show";
import { siteConfig } from "@/lib/site-config";

export function EndCredits() {
  const year = new Date().getFullYear();

  return (
    <footer aria-label="End credits" className="on-dark bg-credits px-8 pb-16 pt-[88px] text-center text-credits-text">
      <dl className="mx-auto grid max-w-[520px] grid-cols-2 gap-x-6 gap-y-2 text-[15px]">
        {credits.map((credit) => (
          <div key={credit.role} className="contents">
            <dt className="pt-0.5 text-right font-mono text-[13px] text-credits-muted">{credit.role}</dt>
            <dd className="text-left text-white">{credit.name}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-12 font-condensed text-[26px] font-bold leading-tight text-white">{creditsLines.inspiredBy}</p>
      <p className="mt-2 text-[15px]">{creditsLines.disclaimer}</p>
      <p className="mt-8 font-mono text-xs text-credits-muted">
        &lt;EM/&gt; {year} {siteConfig.name}. {creditsLines.copyright}
      </p>
    </footer>
  );
}
