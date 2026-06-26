import { ConfirmPlaceholder } from "@/components/confirm-placeholder";
import { DadJoke } from "@/components/dad-joke";

const changelog = [
  "v2.6 — added coffee dependency (non-optional)",
  "v2.5 — improved tolerance for Man Utd results",
  "v2.4 — fixed bug: starts side projects faster than finishing them",
  "v2.3 — patch: The Office quotes now deploy to production conversations",
] as const;

export function BeyondWorkSection() {
  return (
    <section id="beyond-work" className="section-pad border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2>Beyond work</h2>
          <p className="mt-4 text-muted-foreground">
            The 25% — personality lives here, not in every paragraph.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
            <p className="leading-relaxed text-muted-foreground">
              When I&apos;m not shipping things, I&apos;m usually on a tennis
              court — full court, no shortcuts — or playing padel, the two sports
              that have ruined my weekends in the best possible way. I&apos;m a
              Manchester United fan, which doubles as endurance training. I quote{" "}
              <em>The Office</em> more than is strictly professional. And the
              people who keep me grounded are my family and friends.
            </p>

            <div>
              <h3 className="text-base font-semibold">Man Utd mood</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {/* TODO: [CONFIRM] — pick Man Utd one-liner */}
                <ConfirmPlaceholder label="Man Utd one-liner — confirm" />
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold">The lukakuCanCode origin</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {/* TODO: [CONFIRM] — replace with real handle story */}
                <ConfirmPlaceholder label="Handle origin story — confirm" />
                <span className="mt-2 block">
                  Draft: It started as a football joke and somehow became my
                  coding identity. Now it&apos;s the name I build under.
                </span>
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <DadJoke />

            <div className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
              <h3 className="text-base font-semibold">Changelog of me</h3>
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
