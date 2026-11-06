import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name}, ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Plex Sans Condensed 700 from Google Fonts. Falls back to the default font if it can't be fetched. */
async function loadCondensed(text: string) {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@700&text=${encodeURIComponent(text)}`,
    ).then((res) => res.text());
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((res) => res.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const name = siteConfig.name;
  const line = `${siteConfig.title}, Dar es Salaam`;
  const label = "Season 1, Episode 1: Pilot";
  const timecode = "REC 00:00:41:12";
  // Every string on the image, so no glyph falls back to a different font
  const condensed = await loadCondensed(`${name}${line}${label}${timecode}<EM/>CAM B`);
  const heading = condensed ? "Plex Condensed" : "sans-serif";

  return new ImageResponse(
    (
      <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", background: "#D9D6CB" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "28px 64px",
            background: "#121417",
            color: "#E8E9EA",
            fontSize: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <span style={{ color: "#FFFFFF", fontSize: 36, fontWeight: 700 }}>&lt;EM/&gt;</span>
            <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ width: 18, height: 18, borderRadius: 9, background: "#E0393B" }} />
              {timecode}
            </span>
          </div>
          <span style={{ color: "#9AA1A9" }}>CAM B</span>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "40px 64px 56px",
            padding: "0 64px",
            background: "#E4E1D6",
            borderLeft: "4px solid #FFFFFF",
            position: "relative",
          }}
        >
          <div style={{ fontSize: 24, color: "#4A4F55" }}>{label}</div>
          <div
            style={{
              marginTop: 16,
              fontSize: 112,
              lineHeight: 0.95,
              fontWeight: 700,
              color: "#1E2329",
              fontFamily: heading,
              letterSpacing: "-0.015em",
            }}
          >
            {name}
          </div>
          <div style={{ display: "flex", marginTop: 28 }}>
            <div
              style={{
                display: "flex",
                background: "rgba(18,20,23,0.92)",
                borderLeft: "8px solid #FFD84D",
                color: "#FFFFFF",
                padding: "12px 22px",
                fontSize: 38,
                fontFamily: heading,
                fontWeight: 700,
              }}
            >
              {line}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: condensed ? [{ name: "Plex Condensed", data: condensed, weight: 700, style: "normal" }] : undefined,
    },
  );
}
