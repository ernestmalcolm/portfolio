import { ConfirmPlaceholder } from "@/components/confirm-placeholder";
import { siteConfig } from "@/lib/site-config";

export function AboutSection() {
  return (
    <section id="about" className="section-pad border-t border-border/40">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-[1fr_280px] lg:items-start">
        <div>
          <h2>About</h2>
          <p className="mt-6 text-lg font-medium text-foreground">
            {siteConfig.personalityLine}
          </p>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              I build products where structured, unglamorous problems meet modern
              software — audits, financial data, compliance workflows, and the
              operational glue around them. My background in finance and audit
              gives me domain depth; my product and design work is how I make
              that depth usable.
            </p>
            <p>
              Based in {siteConfig.location}, I focus on East African markets —
              Tanzanian tax, local institutions, and the realities of building
              for businesses that cannot afford tools designed elsewhere.
            </p>
            <p>
              If we work together, you get someone who can write the strategy,
              sketch the interface, and ship the first version — then explain the
              whole thing with a metaphor you did not ask for.
            </p>
          </div>
        </div>

        <aside className="mx-auto w-full max-w-xs lg:mx-0">
          {/* TODO: [ERNEST PHOTO] — replace placeholder with professional photo */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-dashed border-border bg-muted/30">
            <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
              <ConfirmPlaceholder label="Photo — Ernest to provide" />
              <p className="text-xs text-muted-foreground">
                Professional headshot placeholder
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
