"use client";
const steps = [
  {
    num: "01",
    title: "Understand the Business",
    body: "We start with your goals, not a technology stack. The first conversation is about where you're headed, what's getting in the way, and what success looks like in measurable terms.",
  },
  {
    num: "02",
    title: "Define the Right Solution",
    body: "Not every problem needs a complex system. We map the simplest path to the right outcome — whether that's a focused internal tool or a full-scale platform.",
  },
  {
    num: "03",
    title: "Build Transparently",
    body: "You see progress from day one. We work in short cycles, share working software early, and adjust based on what we learn — not what we assumed at the start.",
  },
  {
    num: "04",
    title: "Hand Over, Don't Walk Away",
    body: "Every project ends with your team owning what we built. Full documentation, training, and support options. You're never left dependent on us to keep things running.",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      style={{
        background: "var(--navy)",
        padding: "7rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(200,228,232,0.07) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: "4.5rem" }}>
          <p
            style={{
              color: "var(--mint)",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Our Approach
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#ffffff",
              lineHeight: 1.1,
              maxWidth: 480,
            }}
          >
            How We{" "}
            <span style={{ color: "var(--mint)" }}>Work</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2rem",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                borderTop: "2px solid rgba(200,228,232,0.2)",
                paddingTop: "1.75rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.25em",
                  color: "rgba(200,228,232,0.4)",
                  marginBottom: "1rem",
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--mint)",
                  marginBottom: "0.9rem",
                  letterSpacing: "0.02em",
                  lineHeight: 1.35,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "rgba(200,228,232,0.65)",
                  lineHeight: 1.8,
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
