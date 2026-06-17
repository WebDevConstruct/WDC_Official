"use client";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#0F2538",
        padding: "3rem 2rem",
        borderTop: "1px solid rgba(200,228,232,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        {/* Logo mark */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
          <span
            style={{
              fontWeight: 900,
              fontSize: "1rem",
              letterSpacing: "0.2em",
              color: "var(--mint)",
              textTransform: "uppercase",
            }}
          >
            WDC
          </span>
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              color: "rgba(200,228,232,0.35)",
              textTransform: "uppercase",
            }}
          >
            · WebDevConstruct
          </span>
        </div>

        <p
          style={{
            fontSize: "0.72rem",
            color: "rgba(200,228,232,0.3)",
            letterSpacing: "0.05em",
          }}
        >
          © {year} WebDevConstruct. All rights reserved.
        </p>

        <div style={{ display: "flex", gap: "1.75rem" }}>
          {["Privacy", "Terms", "LinkedIn"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                fontSize: "0.7rem",
                color: "rgba(200,228,232,0.35)",
                textDecoration: "none",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--mint)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(200,228,232,0.35)")
              }
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
