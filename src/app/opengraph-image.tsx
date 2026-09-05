import { ImageResponse } from "next/og";

export const alt = "Lumina — Practical digital skills training";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0A09",
          color: "#F7F1E4",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 28,
            letterSpacing: -1,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: "#0e6e68",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
            }}
          >
            L
          </div>
          Lumina
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 650,
              letterSpacing: -2.4,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Build digital skills that move you forward.
          </div>
          <div style={{ fontSize: 26, color: "rgba(247,241,228,0.62)" }}>
            Graphic design · Web development · IT · SEO
          </div>
        </div>
      </div>
    ),
    size,
  );
}
