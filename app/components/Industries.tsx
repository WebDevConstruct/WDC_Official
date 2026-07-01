"use client";
const industries = [
  { name: "Financial Services", icon: "◈" },
  { name: "Logistics & Supply Chain", icon: "◎" },
  { name: "Healthcare & Wellness", icon: "◉" },
  { name: "Retail & E-Commerce", icon: "◐" },
  { name: "Education & Training", icon: "◑" },
  { name: "Real Estate & Property", icon: "◒" },
  { name: "Professional Services", icon: "◓" },
  { name: "Manufacturing & Operations", icon: "◔" },
];

export default function Industries() {
  return (
    <section
      id="industries"
      style={{
        background: "var(--light-mint)",
        padding: "7rem 2rem",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="industries-grid"
        >
          {/* Left: copy */}
          <div>
            <p
              style={{
                color: "var(--steel)",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Industries
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--navy)",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              Sectors We <span style={{ color: "var(--steel)" }}>Serve</span>
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#374151",
                lineHeight: 1.8,
                maxWidth: 400,
                marginBottom: "2rem",
              }}
            >
              We&apos;ve worked with businesses ranging from ambitious startups to
              established enterprises. Our strength is understanding how each
              sector operates — and building around it, not against it.
            </p>
            <a
              href="#contact"
              style={{
                background: "var(--navy)",
                color: "var(--mint)",
                padding: "0.85rem 2rem",
                borderRadius: 4,
                fontWeight: 700,
                fontSize: "0.78rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget).style.background = "var(--slate)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget).style.background = "var(--navy)")
              }
            >
              Discuss Your Industry
            </a>
          </div>

          {/* Right: industry grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              background: "rgba(74,124,142,0.2)",
              border: "1px solid rgba(74,124,142,0.2)",
            }}
          >
            {industries.map((ind) => (
              <div
                key={ind.name}
                style={{
                  background: "var(--light-mint)",
                  padding: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  transition: "background 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#d8edf0")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "var(--light-mint)")
                }
              >
                <span style={{ color: "var(--steel)", fontSize: "1rem" }}>
                  {ind.icon}
                </span>
                <span
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "var(--navy)",
                    letterSpacing: "0.01em",
                    lineHeight: 1.3,
                  }}
                >
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .industries-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
