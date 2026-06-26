import {
  Bot,
  Briefcase,
  LineChart,
  Palette,
  Package,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const lanes = [
  {
    title: "Product",
    icon: Package,
    description:
      "PRDs, product strategy, roadmaps, GTM, and pricing — from idea to shipped feature.",
  },
  {
    title: "Design",
    icon: Palette,
    description:
      "Interfaces, UI, and visual & brand systems that feel as considered as the strategy behind them.",
  },
  {
    title: "AI",
    icon: Bot,
    description:
      "Claude-based agentic skills, orchestration, and insight layers over structured data.",
  },
  {
    title: "Strategy",
    icon: LineChart,
    description:
      "Operating plans, financial modeling, and market & competitive analysis grounded in real numbers.",
  },
  {
    title: "Consulting",
    icon: Briefcase,
    description:
      "Business plans, maturity assessments, and advisory — with a light nod to audit/IFRS/tax credibility where it matters.",
  },
] as const;

export function WhatIDoSection() {
  return (
    <section id="what-i-do" className="section-pad border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2>What I do</h2>
          <p className="mt-4 text-muted-foreground">
            Five lanes, one throughline — I take messy business problems and ship
            products, strategy, and working software.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lanes.map((lane, index) => (
            <Card
              key={lane.title}
              className={`group border-border/60 bg-card/50 transition-colors hover:border-coral/40 hover:bg-card ${
                index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <CardHeader className="pb-2">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-coral">
                  <lane.icon className="h-5 w-5" aria-hidden />
                </div>
                <CardTitle className="text-lg">{lane.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {lane.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
