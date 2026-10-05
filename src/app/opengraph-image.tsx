import { ImageResponse } from "next/og";
import { brandName, site } from "@/content/site";

// Branded preview card shown when the site is shared on WhatsApp, LinkedIn, X, etc.
export const alt = `${brandName}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #05070f 0%, #1e1145 55%, #062a33 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "linear-gradient(135deg, #8b5cf6, #22d3ee)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 800,
            }}
          >
            N
          </div>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>
            {site.brand}&nbsp;<span style={{ color: "#67e8f9" }}>{site.brandSuffix}</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", flexWrap: "wrap", fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>
            {site.headline.before}&nbsp;<span style={{ color: "#a78bfa" }}>{site.headline.highlight}</span>
          </div>
          <div style={{ fontSize: 30, color: "#cbd5e1" }}>
            AI chatbots · Automation · Websites · Web & mobile apps
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#94a3b8" }}>
          <span>{site.tagline}</span>
          <span>India & worldwide</span>
        </div>
      </div>
    ),
    size,
  );
}
