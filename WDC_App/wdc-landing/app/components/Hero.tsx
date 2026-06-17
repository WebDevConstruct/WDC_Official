"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const counterRef = useRef<HTMLSpanElement>(null);

  // Animated counter for a stat
  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;
    let start = 0;
    const end = 150;
    const duration = 1800;
    const step = Math.ceil(duration / end);
    const timer = setInterval(() => {
      start += 1;
      el.textContent = start + "+";
      if (start >= end) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, var(--navy) 0%, var(--slate) 55%, var(--steel) 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 72,
      }}
    >
      {/* Halftone dot grid background — brand signature */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(200,228,232,0.12) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      {/* Glowing orb accent */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,228,232,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          padding: "0 2rem",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <p
          className="animate-fade-up"
          style={{
            color: "var(--mint)",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
            opacity: 0,
          }}
        >
          Your Tech Consultant
        </p>

        {/* Main headline — spaced caps mirroring brand wordmark */}
        <h1
          className="animate-fade-up delay-100"
          style={{
            fontWeight: 900,
            fontSize: "clamp(2.8rem, 7vw, 6rem)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#ffffff",
            lineHeight: 1.05,
            marginBottom: "1.75rem",
            opacity: 0,
          }}
        >
          Built for
          <br />
          <span style={{ color: "var(--mint)" }}>Real Results.</span>
        </h1>

        <p
          className="animate-fade-up delay-200"
          style={{
            color: "rgba(200,228,232,0.8)",
            fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
            lineHeight: 1.75,
            maxWidth: 620,
            margin: "0 auto 3rem",
            fontWeight: 400,
            opacity: 0,
          }}
        >
          We design and deliver custom business applications that solve the
          right problems — for enterprises, growing companies, and ambitious
          teams that need technology to work as hard as they do.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-fade-up delay-300"
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: 0,
          }}
        >
          <a
            href="#contact"
            style={{
              background: "var(--mint)",
              color: "var(--navy)",
              padding: "0.9rem 2.2rem",
              borderRadius: 4,
              fontWeight: 800,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.15s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget).style.background = "#a8d4da";
              (e.currentTarget).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget).style.background = "var(--mint)";
              (e.currentTarget).style.transform = "translateY(0)";
            }}
          >
            Start a Project
          </a>
          <a
            href="#services"
            style={{
              border: "2px solid rgba(200,228,232,0.5)",
              color: "var(--mint)",
              padding: "0.9rem 2.2rem",
              borderRadius: 4,
              fontWeight: 600,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "border-color 0.2s, background 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget).style.borderColor = "var(--mint)";
              (e.currentTarget).style.background = "rgba(200,228,232,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget).style.borderColor = "rgba(200,228,232,0.5)";
              (e.currentTarget).style.background = "transparent";
            }}
          >
            See What We Build
          </a>
        </div>

        {/* Stats row */}
        <div
          className="animate-fade-up delay-400"
          style={{
            display: "flex",
            gap: "3rem",
            justifyContent: "center",
            marginTop: "5rem",
            flexWrap: "wrap",
            opacity: 0,
          }}
        >
          {[
          //  { value: null, counter: true, label: "Projects Delivered" },
            { value: "2x", label: "Avg. Efficiency Gain" },
            { value: "100%", label: "Client Ownership" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                borderTop: "2px solid rgba(200,228,232,0.25)",
                paddingTop: "1.25rem",
                minWidth: 120,
              }}
            >
              <div
                style={{
                  fontSize: "2.4rem",
                  fontWeight: 900,
                  color: "var(--mint)",
                  letterSpacing: "0.04em",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                {stat.counter ? <span ref={counterRef}>0+</span> : stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(200,228,232,0.6)",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "rgba(200,228,232,0.45)", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, rgba(200,228,232,0.5), transparent)",
          }}
        />
      </div>
    </section>
  );
}
