"use client";
const insights = [
  {
    category: "Tech Trends",
    title: "Why Most Businesses Are Solving the Wrong Problem with AI",
    excerpt:
      "Adoption is outpacing understanding. Before investing in intelligent systems, there is a more important question to answer.",
    date: "Jun 2025",
  },
  {
    category: "Operations",
    title: "The Hidden Cost of Disconnected Tools in Mid-Size Teams",
    excerpt:
      "When five systems share the same data but don't talk to each other, the business pays — in time, errors, and missed decisions.",
    date: "May 2025",
  },
  {
    category: "Strategy",
    title: "What Enterprise Procurement Can Learn from SME Speed",
    excerpt:
      "Large organisations move slower than they need to. The fix is rarely more process — it's better tooling at the right decision points.",
    date: "Apr 2025",
  },
];

export default function Insights() {
  return (
    <section
      id="insights"
      style={{
        background: "var(--offwhite)",
        padding: "7rem 2rem",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "4rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
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
              Insights
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--navy)",
                lineHeight: 1.1,
              }}
            >
              What We&apos;re{" "}
              <span style={{ color: "var(--steel)" }}>Watching</span>
            </h2>
          </div>
          <a
            href="#"
            style={{
              color: "var(--steel)",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderBottom: "1px solid var(--steel)",
              paddingBottom: 2,
              whiteSpace: "nowrap",
            }}
          >
            All Articles →
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {insights.map((item, i) => (
            <article
              key={i}
              style={{
                borderTop: "2px solid var(--steel)",
                paddingTop: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--steel)",
                  }}
                >
                  {item.category}
                </span>
                <span
                  style={{
                    fontSize: "0.65rem",
                    color: "#9CA3AF",
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.date}
                </span>
              </div>

              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--navy)",
                  lineHeight: 1.45,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: "0.87rem",
                  color: "#4B5563",
                  lineHeight: 1.75,
                  flexGrow: 1,
                }}
              >
                {item.excerpt}
              </p>

              <a
                href="#"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "var(--steel)",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginTop: "0.5rem",
                }}
              >
                Read More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
