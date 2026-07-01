"use client";
const services = [
  {
    icon: "◈",
    title: "Custom Application Development",
    description:
      "We build tailored software for your business — not off-the-shelf tools that half-fit. Every solution is designed around your workflows, your team, and your goals.",
    tags: ["Enterprise", "SME", "Web & Mobile"],
  },
  {
    icon: "◎",
    title: "Solution-Oriented Strategy",
    description:
      "Before a single line is written, we map the problem. We challenge assumptions, identify the root cause, and design a solution that actually removes friction instead of adding more.",
    tags: ["Consulting", "Process Design", "Architecture"],
  },
  {
    icon: "◉",
    title: "Technology Research & Advisory",
    description:
      "Stay ahead without drowning in noise. We track what matters in the technology landscape and translate it into clear guidance your leadership team can act on.",
    tags: ["Tech Trends", "Risk Analysis", "Strategic Briefings"],
  },
  {
    icon: "◐",
    title: "Team Efficiency & Operations",
    description:
      "The best system is the one your team actually uses. We work with your people to identify bottlenecks, streamline handoffs, and build tools that make daily operations measurably faster.",
    tags: ["Process Automation", "Internal Tools", "SME Teams"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: "var(--offwhite)",
        padding: "7rem 2rem",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: "4.5rem" }}>
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
            What We Do
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--navy)",
              lineHeight: 1.1,
              maxWidth: 480,
            }}
          >
            Technology That{" "}
            <span style={{ color: "var(--steel)" }}>Moves the Needle</span>
          </h2>
        </div>

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5px",
            background: "rgba(74,124,142,0.15)",
            border: "1.5px solid rgba(74,124,142,0.15)",
          }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                background: "var(--offwhite)",
                padding: "2.5rem",
                transition: "background 0.25s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--light-mint)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--offwhite)")
              }
            >
              {/* Icon glyph */}
              <div
                style={{
                  fontSize: "1.8rem",
                  color: "var(--steel)",
                  marginBottom: "1.25rem",
                  lineHeight: 1,
                }}
              >
                {s.icon}
              </div>

              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--navy)",
                  letterSpacing: "0.02em",
                  marginBottom: "0.9rem",
                  lineHeight: 1.35,
                }}
              >
                {s.title}
              </h3>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#4B5563",
                  lineHeight: 1.75,
                  marginBottom: "1.5rem",
                }}
              >
                {s.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.62rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--steel)",
                      border: "1px solid rgba(74,124,142,0.35)",
                      padding: "0.3rem 0.65rem",
                      borderRadius: 2,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
