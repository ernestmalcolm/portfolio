import { ConfirmPlaceholder } from "@/components/confirm-placeholder";
import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/site-config";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-border/40 pb-16 pt-8 md:pb-20 md:pt-10"
    >
      <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
        <div>
          <SectionHeader label="Background" title="About" />
          <p className="mt-8 text-lg leading-relaxed text-foreground">
            {siteConfig.personalityLine}
          </p>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I build products where structured, unglamorous problems meet modern
              software — audits, financial data, compliance workflows, and the
              operational glue around them. My background in finance and audit
              gives me domain depth; product and design work is how I make that
              depth usable.
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

        <aside className="lg:pt-12">
          {/* TODO: [ERNEST PHOTO] */}
          <div className="aspect-[4/5] border border-border/60 bg-muted/20">
            <div className="flex h-full flex-col justify-end p-4">
              <ConfirmPlaceholder label="professional photo" />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
