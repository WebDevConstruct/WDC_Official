"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "What We Do", href: "#services" },
    { label: "Our Approach", href: "#approach" },
    { label: "Industries", href: "#industries" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(27,58,82,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        boxShadow: scrolled ? "0 2px 24px rgba(27,58,82,0.18)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 2rem",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 800,
                fontSize: "1.1rem",
                letterSpacing: "0.18em",
                color: "#C8E4E8",
                textTransform: "uppercase",
              }}
            >
              WDC
            </span>
            <span
              style={{
                width: 1,
                height: 18,
                background: "rgba(200,228,232,0.4)",
                display: "inline-block",
                marginBottom: 2,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 300,
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                color: "rgba(200,228,232,0.75)",
                textTransform: "uppercase",
              }}
            >
              WebDevConstruct
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "2rem",
            alignItems: "center",
          }}
          className="nav-desktop"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  color: "rgba(200,228,232,0.85)",
                  textDecoration: "none",
                  fontSize: "0.82rem",
                  letterSpacing: "0.08em",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#C8E4E8")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(200,228,232,0.85)")
                }
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              style={{
                background: "var(--mint)",
                color: "var(--navy)",
                padding: "0.5rem 1.25rem",
                borderRadius: 4,
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.2s, transform 0.15s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "#a8d4da";
                (e.target as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "var(--mint)";
                (e.target as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Get Started
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
          }}
          className="nav-mobile-btn"
          aria-label="Toggle menu"
        >
          <div
            style={{
              width: 24,
              height: 2,
              background: "#C8E4E8",
              marginBottom: 5,
              transition: "transform 0.2s",
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <div
            style={{
              width: 24,
              height: 2,
              background: "#C8E4E8",
              marginBottom: 5,
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.2s",
            }}
          />
          <div
            style={{
              width: 24,
              height: 2,
              background: "#C8E4E8",
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              transition: "transform 0.2s",
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--navy)",
            padding: "1.5rem 2rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--mint)",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
