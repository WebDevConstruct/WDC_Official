"use client";




export default function Newsletter() {


  return (
  
    <section
      id="newsletter"
      style={{
        background: "var(--light-mint)",
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid accent */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(74,124,142,0.12) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="newsletter-grid"
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
            Weekly Newsletter
          </p>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "var(--navy)",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Stay Ahead of{" "}
            <span style={{ color: "var(--steel)" }}>the Curve</span>
          </h2>

          <p
            style={{
              fontSize: "0.95rem",
              color: "#374151",
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            Every week, we break down what&apos;s shifting in the technology
            landscape — what it means for your business, and where the smart
            money is moving. No fluff. No jargon.
          </p>

          {/* Pill badges */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {["Tech Trends", "Business Strategy", "Tool Spotlights", "Free"].map(
              (tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--steel)",
                    border: "1px solid rgba(74,124,142,0.35)",
                    padding: "0.3rem 0.75rem",
                    borderRadius: 100,
                    background: "rgba(74,124,142,0.06)",
                  }}
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Right: iframe wrapped in WDC card */}
        <div
          style={{
            background: "var(--navy)",
            borderRadius: 6,
            padding: "2.5rem 2rem",
            boxShadow: "0 8px 40px rgba(27,58,82,0.18)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Inner dot grid on card */}
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

          {/* Card header */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              marginBottom: "1.25rem",
              borderBottom: "1px solid rgba(200,228,232,0.15)",
              paddingBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <span style={{ color: "var(--mint)", fontSize: "1rem" }}>◉</span>
            <span
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(200,228,232,0.6)",
              }}
            >
              WDC · Weekly Dispatch
            </span>
          </div>

          {/* Substack iframe */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <iframe
              src="https://wdcconsult.substack.com/embed?transparent=1&light=1"
              width="100%"
              height="320"
              style={{
                border: "0",
                background: "transparent",
                display: "block",
                colorScheme: "light",
              }}
              frameBorder={0}
              scrolling="no"
            />
          </div>

          {/* Card footer */}
          <p
            style={{
              position: "relative",
              zIndex: 1,
              marginTop: "1rem",
              fontSize: "0.65rem",
              color: "rgba(200,228,232,0.35)",
              letterSpacing: "0.06em",
              textAlign: "center",
            }}
          >
            Free. No spam. Unsubscribe any time.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .newsletter-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
  
