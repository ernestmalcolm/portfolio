import { ConfirmPlaceholder } from "@/components/confirm-placeholder";
import { DadJoke } from "@/components/dad-joke";
import { SectionHeader } from "@/components/section-header";

const changelog = [
  "v2.6 — added coffee dependency (non-optional)",
  "v2.5 — improved tolerance for Man Utd results",
  "v2.4 — fixed bug: starts side projects faster than finishing them",
  "v2.3 — patch: The Office quotes now deploy to production conversations",
] as const;

export function BeyondWorkSection() {
  return (
    <section id="beyond-work" className="section-pad border-b border-border/40">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          label="Off the clock"
          title="Beyond work"
          description="Personality lives here — not sprinkled through the professional sections."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="max-w-xl space-y-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              When I&apos;m not shipping things, I&apos;m usually on a tennis
              court — full court, no shortcuts — or playing padel. I&apos;m a
              Manchester United fan, which doubles as endurance training. I quote{" "}
              <em>The Office</em> more than is strictly professional. Family and
              friends keep me grounded.
            </p>

            <div>
              <h3 className="text-sm font-medium text-foreground">Man Utd mood</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                <ConfirmPlaceholder label="Man Utd one-liner" />
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-foreground">
                The lukakuCanCode origin
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                <ConfirmPlaceholder label="handle origin story" />
                <span className="mt-2 block">
                  Draft: It started as a football joke and somehow became my
                  coding identity.
                </span>
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <DadJoke />
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Changelog of me
              </h3>
              <ul className="mt-4 space-y-2 font-mono text-sm text-muted-foreground">
                {changelog.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
