import { ImageResponse } from "@vercel/og";

import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = `${siteConfig.name}, ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #0B1F3A 0%, #12264A 100%)",
          color: "#F5F1E8",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, marginBottom: 28 }}>
            <span style={{ color: "#FF6B5E" }}>&lt;</span>
            <span>EM</span>
            <span style={{ color: "#FF6B5E" }}>/&gt;</span>
          </div>
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em" }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 36, marginTop: 24, color: "#C5CEDB" }}>
            {siteConfig.title} in {siteConfig.location}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ fontSize: 30, maxWidth: 760, lineHeight: 1.35 }}>
            {siteConfig.tagline}
          </div>
          <div
            style={{
              display: "flex",
              border: "6px double #FF6B5E",
              color: "#FF6B5E",
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "0.2em",
              padding: "8px 20px",
              transform: "rotate(-8deg)",
            }}
          >
            VERIFIED
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
