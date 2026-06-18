"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, wire to an API route or form service
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(200,228,232,0.08)",
    border: "1px solid rgba(200,228,232,0.2)",
    borderRadius: 4,
    padding: "0.85rem 1rem",
    color: "#ffffff",
    fontSize: "0.9rem",
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.68rem",
    fontWeight: 600,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "rgba(200,228,232,0.6)",
    marginBottom: "0.5rem",
  };

  return (
    <section
      id="contact"
      style={{
        background: "var(--navy)",
        padding: "7rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
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

      <div 
        style={{
          maxWidth: 900,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "5rem",
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Left: copy */}
        <div>
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
            Contact
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Let&apos;s Talk <span style={{ color: "var(--mint)" }}>Business</span>
          </h2>
          <p
            style={{
              fontSize: "0.92rem",
              color: "rgba(200,228,232,0.65)",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            Whether you have a specific project in mind or just want to
            understand what&apos;s possible, we&apos;re happy to start a
            conversation. No obligation, no jargon.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { label: "Email", value: "webdevconstruct249@gmail..com" },
              { label: "Based In", value: "Lagos, Nigeria · Remote-Ready" },
              { label: "Response Time", value: "Within 24 hours" },
            ].map((item) => (
              <div key={item.label}>
                <div
                  style={{
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(200,228,232,0.4)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: "0.88rem",
                    color: "rgba(200,228,232,0.85)",
                    fontWeight: 500,
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div>
          {submitted ? (
            <div
              style={{
                background: "rgba(200,228,232,0.08)",
                border: "1px solid rgba(200,228,232,0.25)",
                borderRadius: 6,
                padding: "3rem 2rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  color: "var(--mint)",
                  marginBottom: "1rem",
                }}
              >
                ◉
              </div>
              <h3
                style={{
                  color: "#ffffff",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                }}
              >
                Message Received
              </h3>
              <p
                style={{
                  color: "rgba(200,228,232,0.65)",
                  fontSize: "0.88rem",
                  lineHeight: 1.75,
                }}
              >
                We&apos;ll review your details and come back to you within 24
                hours. Thank you for reaching out.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input
                    style={inputStyle}
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(200,228,232,0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(200,228,232,0.2)")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Company</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="Your organisation"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(200,228,232,0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(200,228,232,0.2)")}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Email Address</label>
                <input
                  style={inputStyle}
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(200,228,232,0.6)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(200,228,232,0.2)")}
                />
              </div>

              <div>
                <label style={labelStyle}>Area of Interest</label>
                <select
                  style={{ ...inputStyle, cursor: "pointer" }}
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(200,228,232,0.6)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(200,228,232,0.2)")}
                >
                  <option value="" style={{ background: "#1B3A52" }}>Select one…</option>
                  <option value="custom-app" style={{ background: "#1B3A52" }}>Custom Application</option>
                  <option value="strategy" style={{ background: "#1B3A52" }}>Solution Strategy</option>
                  <option value="research" style={{ background: "#1B3A52" }}>Technology Research</option>
                  <option value="operations" style={{ background: "#1B3A52" }}>Team & Operations</option>
                  <option value="other" style={{ background: "#1B3A52" }}>Something Else</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>What Are You Working On?</label>
                <textarea
                  style={{ ...inputStyle, minHeight: 120, resize: "vertical" }}
                  placeholder="Brief description of your situation or goal…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(200,228,232,0.6)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(200,228,232,0.2)")}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: "var(--mint)",
                  color: "var(--navy)",
                  border: "none",
                  borderRadius: 4,
                  padding: "1rem",
                  fontWeight: 800,
                  fontSize: "0.82rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "background 0.2s, transform 0.15s",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget).style.background = "#a8d4da";
                  (e.currentTarget).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget).style.background = "var(--mint)";
                  (e.currentTarget).style.transform = "translateY(0)";
                }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
