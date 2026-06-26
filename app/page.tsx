import { HeroSection } from "@/components/sections/hero";

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      {/* Placeholder anchors for nav — filled in upcoming milestones */}
      <section id="work" className="section-pad mx-auto max-w-5xl px-6">
        <h2 className="text-center">Selected work</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Case-study grid coming in the next milestone.
        </p>
      </section>

      <section id="about" className="section-pad mx-auto max-w-5xl px-6">
        <h2 className="text-center">About</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          About section coming next.
        </p>
      </section>

      <section id="contact" className="section-pad mx-auto max-w-5xl px-6">
        <h2 className="text-center">Contact</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Contact form coming in a later milestone.
        </p>
      </section>
    </main>
  );
}
