export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  title: string;
  slug: string;
  role: string;
  year: string;
  tags: string[];
  oneLiner: string;
  confidential: boolean;
  featured: boolean;
  /** null = no public link; show "Contact for more information" */
  link: string | null;
  cover?: string;
  screenshots?: string[];
  sections?: ProjectSection[];
};

export const projects: Project[] = [
  {
    title: "Simplitech",
    slug: "simplitech",
    role: "Strategy & product (leadership)",
    year: "2022 – present",
    tags: ["Strategy", "Product", "Business"],
    oneLiner:
      "My primary engagement — long-term product and strategy leadership for a Tanzanian tech venture (subscription + embedded credit), from early-stage foundations to a growth-ready operating plan.",
    confidential: true,
    featured: true,
    link: null,
    sections: [
      {
        heading: "Context",
        body: "I joined Simplitech in 2022 and have been central to shaping its product and strategic direction ever since. The company operates in Tanzania's embedded-finance space, combining subscription software with a credit layer — a model that requires tightly-coupled product, commercial, and financial thinking.",
      },
      {
        heading: "Early work (2022 – 2023)",
        body: "In the first phase, the priority was building the foundations: getting clear on who the customer was, what the product needed to do, and what a credible business model looked like. This meant early product definition, market sizing, and establishing the commercial logic for a subscription + credit offering in the Tanzanian context.",
      },
      {
        heading: "Deepening (2024 – 2025)",
        body: "As the business matured, the work shifted toward operational rigour. Led the design of a comprehensive operating plan — vision/mission/values, multi-horizon strategic initiatives, impact-aligned metrics, team structure, and an expansion roadmap. Ran a data strategy workstream to ensure product and pricing decisions were grounded in evidence, not assumptions.",
      },
      {
        heading: "Now",
        body: "Ongoing involvement in product direction, strategy review, and ensuring the roadmap stays coherent with the commercial reality on the ground. The depth of tenure means I carry institutional memory alongside current-state clarity — useful for decisions that need both.",
      },
      {
        heading: "Outcome",
        body: "A board-ready operating plan, a clearer product/data roadmap, and sustained strategic continuity across multiple growth phases. No internal figures shown.",
      },
    ],
  },
  {
    title: "SimplifyAudit / Cassian Audit Suite",
    slug: "simplifyaudit",
    role: "Product, domain & build lead",
    year: "2025–2026",
    tags: ["Product", "AI", "Compliance", "Strategy"],
    oneLiner:
      "An AI audit-intelligence platform that helps audit firms take on more engagements without dropping compliance quality.",
    confidential: true,
    featured: true,
    link: null,
    sections: [
      {
        heading: "Context / Problem",
        body: "Audit work hits a capacity ceiling — most of an engagement is structured, repetitive preparation done manually every time. Senior time is scarce, and quality varies across a file.",
      },
      {
        heading: "What I did",
        body: "Led product, domain, and build for an agentic platform covering the full audit lifecycle across 30+ areas — trial-balance mapping, workpapers, tax-compliance checks, confirmation letters, and draft financial statements and reports — with human-in-the-loop decision gates so a licensed auditor keeps every judgment call, and a documented trail for inspection.",
      },
      {
        heading: "Approach",
        body: "A locally-calibrated knowledge base (ISA, IFRS, Tanzanian tax/regulatory) built as structured AI skills rather than prompt-stuffing; an evidence-gated, two-pass execution model with a clean human-control boundary.",
      },
      {
        heading: "Outcome",
        body: "A working agent suite validated against real engagements — the foundation for a productized roadmap.",
      },
      {
        heading: "Stack / Tools",
        body: "Claude (agentic skills + orchestration), structured knowledge base, document generation.",
      },
    ],
  },
  {
    title: "FinSights / FSI-Analysis",
    slug: "finsights",
    role: "Product strategy, design & build",
    year: "2025–2026",
    tags: ["Product", "Design", "AI", "Data"],
    oneLiner:
      "A financial-data intelligence platform — a modern, Bloomberg-style view built for East African markets, starting with Tanzanian banking.",
    confidential: true,
    featured: true,
    link: "https://finsightstz.vercel.app/",
    sections: [
      {
        heading: "Context / Problem",
        body: "Analysts, institutions and researchers lack a modern, deep, locally-focused way to compare and analyze financial data. Existing options are shallow, dated, or not built for this market.",
      },
      {
        heading: "What I did",
        body: "Designed and built an authenticated analytics platform — sector overview, bank comparison, P&L and balance-sheet views, macro indicators, credit & risk — across multiple Tanzanian banks and several years, with an admin layer for data and users, and a planned AI layer that lets users ask questions in plain language.",
      },
      {
        heading: "Approach",
        body: "Designed the data value chain (extract → clean → store → intelligence → render) on a modern stack, with the AI insight layer as a first-class differentiator rather than a bolt-on; positioned B2B-first for institutions.",
      },
      {
        heading: "Outcome",
        body: "A production-grade product with deep analytics and a roadmap toward live data ingestion, more sectors, and subscription tiers.",
      },
      {
        heading: "Stack / Tools",
        body: "Next.js, React, Supabase, Tailwind; Claude API for the insight layer.",
      },
    ],
  },
  {
    title: "Finsol — Verified Business Portal",
    slug: "finsol-verified-portal",
    role: "Product definition",
    year: "2025",
    tags: ["Product", "Strategy"],
    oneLiner:
      "Product definition and PRD for a verification portal with third-party integration.",
    confidential: true,
    featured: false,
    link: "https://www.finsol.africa/",
    sections: [
      {
        heading: "What I did",
        body: "Defined the product requirements for a verified business portal — user flows, integration points, and a PRD ready for engineering handoff.",
      },
    ],
  },
  {
    title: "Beyond the Org Chart",
    slug: "beyond-the-org-chart",
    role: "Brand & content design",
    year: "2024–2025",
    tags: ["Design"],
    oneLiner:
      "A reusable LinkedIn carousel system for a leadership-content brand.",
    confidential: false,
    featured: false,
    link: null,
    sections: [
      {
        heading: "What I built",
        body: "Turned written episodes into branded 1080×1080 carousels in the brand's exact colours and logo, plus a Canva handoff system so the owner could produce future episodes herself.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
