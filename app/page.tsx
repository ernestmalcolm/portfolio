import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-coral">
        Portfolio rebuild
      </p>
      <h1 className="max-w-3xl text-balance">Ernest Mwinchumu</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
        Product &amp; business strategist who builds — strategy, product, design,
        and AI, grounded in real business, shipped in code.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button size="lg">Scaffold ready</Button>
        <Button variant="outline" size="lg">
          Milestone 1 complete
        </Button>
      </div>
    </main>
  );
}
