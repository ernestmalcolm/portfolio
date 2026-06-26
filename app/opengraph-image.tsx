import { ImageResponse } from "@vercel/og";

import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.title}`;
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
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0B1F3A 0%, #12264A 100%)",
          color: "#F5F1E8",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#FF6B5E",
            marginBottom: 16,
            fontWeight: 600,
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 52, fontWeight: 700, lineHeight: 1.15, maxWidth: 900 }}>
          {siteConfig.title}
        </div>
        <div
          style={{
            fontSize: 24,
            marginTop: 24,
            color: "#F5F1E8",
            opacity: 0.85,
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
