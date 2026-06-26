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
  /** TODO: [CONFIRM — add URL] when Ernest provides link */
  link: string | null;
  cover?: string;
  screenshots?: string[];
  sections?: ProjectSection[];
};

export const projects: Project[] = [
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
    link: null,
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
    title: "Simplitech",
    slug: "simplitech",
    role: "Strategy & product (leadership)",
    year: "2025–2026",
    tags: ["Strategy", "Product", "Business"],
    oneLiner:
      "Operating strategy and product direction for a Tanzanian tech venture (subscription + embedded credit).",
    confidential: true,
    featured: true,
    link: null,
    sections: [
      {
        heading: "Context / Problem",
        body: "A growing startup needed a coherent operating plan — vision, segments, metrics, and a path to its first profitable year — plus product direction grounded in real data, not assumptions.",
      },
      {
        heading: "What I did",
        body: "Led the operating plan & strategy — vision/mission/values, strategic initiatives across multiple horizons, impact-aligned metrics, team and expansion planning, and a data strategy to back product and pricing decisions.",
      },
      {
        heading: "Approach",
        body: "Tied values to goals, built clear quarter-by-quarter progression, and pushed for the data collection needed to support decisions.",
      },
      {
        heading: "Outcome",
        body: "A board-ready operating plan and a clearer product/data roadmap.",
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
    link: null,
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
  {
    title: "This portfolio & open-source builds",
    slug: "portfolio-and-code",
    role: "Design & build",
    year: "2026",
    tags: ["Design", "Engineering"],
    oneLiner:
      "The site you're on — plus selected GitHub repos where I ship in public.",
    confidential: false,
    featured: false,
    link: "https://github.com/ernestmalcolm",
    sections: [
      {
        heading: "What I built",
        body: "A Next.js portfolio with typed content, case-study pages, and a writing stub — designed to show product thinking in the interface, not just in the copy.",
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
