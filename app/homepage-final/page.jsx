"use client"
import { useState } from "react";

/*
  Capillary Documentation Homepage
  Modeled after docs.datafiniti.co exact pattern:
  • Theme toggle (light/dark)
  • Gradient card image areas with centered icons — same in both modes
  • Page bg: white (light) / dark (dark) — no tinted backgrounds
  • Header: logo + version + search + Ask AI + nav links + Get Started + toggle
*/

export default function CapillaryDocsHome() {
  const [dark, setDark] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [hoveredTask, setHoveredTask] = useState(null);

  const t = dark
    ? {
        bg: "#0D0D0D",
        surface: "#1A1A1A",
        text: "#F0F0F0",
        textSec: "#999999",
        textTer: "#666666",
        border: "#262626",
        borderHover: "#3A3A3A",
        cardBg: "#141414",
        link: "#A78BFA",
        navActive: "#F0F0F0",
        navDefault: "#888888",
        searchBg: "#1A1A1A",
        searchBorder: "#333333",
      }
    : {
        bg: "#FFFFFF",
        surface: "#F9F9F9",
        text: "#111111",
        textSec: "#666666",
        textTer: "#999999",
        border: "#E8E8E8",
        borderHover: "#D0D0D0",
        cardBg: "#FFFFFF",
        link: "#7C3AED",
        navActive: "#111111",
        navDefault: "#666666",
        searchBg: "#F5F5F5",
        searchBorder: "#E0E0E0",
      };

  // Blue-purple gradients for cards (same in both modes)
  const gradients = [
    "linear-gradient(135deg, #1B4DFF 0%, #7C3AED 50%, #A855F7 100%)",
    "linear-gradient(135deg, #7C3AED 0%, #9333EA 50%, #C084FC 100%)",
    "linear-gradient(135deg, #2563EB 0%, #6366F1 50%, #8B5CF6 100%)",
    "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #D946EF 100%)",
  ];

  const products = [
    {
      name: "Loyalty+",
      desc: "Design programs, manage points and tiers, configure promotions, and set up reward strategies that drive repeat purchases.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 8l3.5 7.1 7.8 1.1-5.65 5.5 1.33 7.8L24 26l-6.98 3.5 1.33-7.8-5.65-5.5 7.8-1.1z" stroke="white" strokeWidth="2" strokeLinejoin="round" fill="none" />
          <rect x="12" y="34" width="24" height="4" rx="2" stroke="white" strokeWidth="1.5" fill="none" />
          <rect x="16" y="40" width="16" height="2" rx="1" fill="white" opacity="0.4" />
        </svg>
      ),
    },
    {
      name: "Engage+",
      desc: "Build omnichannel campaigns, design customer journeys, and send targeted messages across SMS, email, push, and WhatsApp.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="6" y="10" width="22" height="14" rx="4" stroke="white" strokeWidth="1.8" fill="none" />
          <rect x="10" y="15" width="12" height="1.5" rx="0.75" fill="white" opacity="0.5" />
          <rect x="10" y="19" width="8" height="1.5" rx="0.75" fill="white" opacity="0.3" />
          <rect x="20" y="24" width="22" height="14" rx="4" stroke="white" strokeWidth="1.8" fill="none" />
          <rect x="24" y="29" width="12" height="1.5" rx="0.75" fill="white" opacity="0.5" />
          <rect x="24" y="33" width="8" height="1.5" rx="0.75" fill="white" opacity="0.3" />
          <path d="M17 24l3 4" stroke="white" strokeWidth="1.2" opacity="0.4" />
        </svg>
      ),
    },
    {
      name: "Insights+",
      desc: "Query fact and dimension tables, build dashboards, and use AI-powered analytics to understand customer behavior at scale.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="30" width="6" height="10" rx="1.5" stroke="white" strokeWidth="1.5" fill="none" />
          <rect x="17" y="24" width="6" height="16" rx="1.5" stroke="white" strokeWidth="1.5" fill="none" />
          <rect x="26" y="16" width="6" height="24" rx="1.5" stroke="white" strokeWidth="1.5" fill="none" />
          <rect x="35" y="10" width="6" height="30" rx="1.5" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M10 26 L19 20 L28 14 L37 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
          <circle cx="37" cy="8" r="2" fill="white" opacity="0.5" />
        </svg>
      ),
    },
    {
      name: "Data Platform",
      desc: "Set up event schemas, configure integrations and webhooks, and manage the unified customer data layer powering all products.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <ellipse cx="24" cy="14" rx="14" ry="5" stroke="white" strokeWidth="1.8" fill="none" />
          <path d="M10 14v8c0 2.76 6.27 5 14 5s14-2.24 14-5v-8" stroke="white" strokeWidth="1.8" fill="none" />
          <path d="M10 22v8c0 2.76 6.27 5 14 5s14-2.24 14-5v-8" stroke="white" strokeWidth="1.8" fill="none" />
          <ellipse cx="24" cy="14" rx="8" ry="2.5" fill="white" opacity="0.15" />
        </svg>
      ),
    },
  ];

  const tasks = [
    { icon: "📊", title: "Fact & dimension tables", desc: "Images in correct proportions with cross-references between diagrams and body text.", tag: "Data models" },
    { icon: "⚡", title: "Event schema payload", desc: "Restructured for faster page load — streamlined schema sections and navigation.", tag: "Events" },
    { icon: "🔗", title: "OpenAPI v1.json migration", desc: "Full API spec split into separate YAML files per endpoint group — zero information loss.", tag: "API reference" },
    { icon: "🎯", title: "Loyalty promotions APIs", desc: "All promotion endpoints — YAML definitions and markdown body content preserved.", tag: "Loyalty APIs" },
  ];

  const navLinks = ["Home", "Guides", "API Reference", "Changelog"];

  return (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        minHeight: "100vh",
        background: t.bg,
        color: t.text,
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        a { text-decoration: none; color: inherit; }
      `}</style>

      {/* ═══ HEADER ═══ */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: t.bg,
          borderBottom: `1px solid ${t.border}`,
          transition: "background 0.3s, border-color 0.3s",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "0 32px",
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo + version */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: "#1B4DFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L2 5.5V10.5L8 14L14 10.5V5.5L8 2Z" fill="white" opacity="0.9" />
              </svg>
            </div>
            <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.04em" }}>CAPILLARY</span>
            <span
              style={{
                fontSize: 12,
                color: t.textTer,
                background: t.surface,
                border: `1px solid ${t.border}`,
                padding: "2px 8px",
                borderRadius: 6,
                fontWeight: 500,
                marginLeft: 2,
              }}
            >
              v4.0
            </span>
          </div>

          {/* Search + Ask AI */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: t.searchBg,
                border: `1px solid ${t.searchBorder}`,
                borderRadius: 10,
                padding: "0 12px",
                height: 36,
                width: 220,
                transition: "background 0.3s, border-color 0.3s",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="5.5" stroke={t.textTer} strokeWidth="1.5" />
                <line x1="13" y1="13" x2="17" y2="17" stroke={t.textTer} strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span style={{ fontSize: 13, color: t.textTer, flex: 1 }}>Search</span>
              <span style={{ fontSize: 11, color: t.textTer, background: t.border, padding: "1px 6px", borderRadius: 4, fontFamily: "monospace" }}>Ctrl+K</span>
            </div>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontSize: 13,
                fontWeight: 500,
                color: t.text,
                background: t.surface,
                border: `1px solid ${t.border}`,
                borderRadius: 10,
                padding: "0 14px",
                height: 36,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "background 0.3s, border-color 0.3s, color 0.3s",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M8 1l1.2 4.8L14 8l-4.8 1.2L8 14l-1.2-4.8L2 8l4.8-1.2z" fill={t.link} />
              </svg>
              Ask AI
            </button>
          </div>

          {/* Nav links + Get Started + Theme toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {navLinks.map((link, i) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: 13,
                  fontWeight: i === 0 ? 600 : 400,
                  color: i === 0 ? t.navActive : t.navDefault,
                  padding: "6px 10px",
                  borderRadius: 6,
                  transition: "color 0.2s",
                }}
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#FFFFFF",
                background: "#1B4DFF",
                padding: "8px 18px",
                borderRadius: 10,
                marginLeft: 6,
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              Get Started
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6h7M7 3.5L9.5 6 7 8.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            {/* Theme toggle */}
            <button
              onClick={() => setDark(!dark)}
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                border: `1px solid ${t.border}`,
                background: t.surface,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                marginLeft: 4,
                transition: "background 0.3s, border-color 0.3s",
              }}
              aria-label="Toggle theme"
            >
              {dark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="5" stroke="#F0F0F0" strokeWidth="1.8" />
                  <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M16.95 16.95l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M16.95 7.05l1.42-1.42" stroke="#F0F0F0" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" stroke="#333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ═══ HERO ═══ */}
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "72px 32px 0" }}>
        <h1 style={{ fontSize: 38, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 16 }}>
          Welcome to Capillary Documentation
        </h1>
        <p style={{ fontSize: 17, lineHeight: 1.65, color: t.textSec, maxWidth: 600 }}>
          Everything you need to integrate Capillary's loyalty, engagement, analytics, and data platforms — from your first API call to production.
        </p>
      </section>

      {/* ═══ PRODUCT CARDS ═══ */}
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "48px 32px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {products.map((p, i) => {
            const isH = hovered === i;
            return (
              <a
                key={p.name}
                href="#"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "block",
                  borderRadius: 16,
                  overflow: "hidden",
                  border: `1px solid ${isH ? t.borderHover : t.border}`,
                  background: t.cardBg,
                  transition: "all 0.25s ease",
                  boxShadow: isH ? "0 12px 40px rgba(0,0,0,0.12)" : "none",
                  cursor: "pointer",
                  transform: isH ? "translateY(-2px)" : "translateY(0)",
                }}
              >
                {/* Gradient area with centered icon */}
                <div
                  style={{
                    height: 170,
                    background: gradients[i],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Subtle radial glow */}
                  <div
                    style={{
                      position: "absolute",
                      width: 200,
                      height: 200,
                      borderRadius: "50%",
                      background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
                    }}
                  />
                  <div style={{ position: "relative", zIndex: 1 }}>{p.icon}</div>
                </div>

                {/* Text area */}
                <div style={{ padding: "22px 24px 28px" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{p.name}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: t.textSec, marginBottom: 18 }}>{p.desc}</p>
                  <span style={{ fontSize: 14, fontWeight: 500, color: t.link, display: "inline-flex", alignItems: "center", gap: 5 }}>
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 7h8M8.5 4.5L11 7l-2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "56px 32px 0" }}>
        <div style={{ borderTop: `1px solid ${t.border}`, transition: "border-color 0.3s" }} />
      </div>

      {/* ═══ MIGRATION TASKS ═══ */}
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "40px 32px 0" }}>
        <h2 style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 6 }}>
          Migration progress
        </h2>
        <p style={{ fontSize: 14, color: t.textSec, marginBottom: 28, lineHeight: 1.55 }}>
          Key documentation areas currently being migrated to the new platform.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {tasks.map((item, i) => {
            const isH = hoveredTask === i;
            return (
              <a
                key={i}
                href="#"
                onMouseEnter={() => setHoveredTask(i)}
                onMouseLeave={() => setHoveredTask(null)}
                style={{
                  display: "flex",
                  gap: 16,
                  padding: "22px 24px",
                  borderRadius: 14,
                  border: `1px solid ${isH ? t.borderHover : t.border}`,
                  background: isH ? t.surface : t.cardBg,
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}
              >
                <span style={{ fontSize: 24, flexShrink: 0, paddingTop: 2 }}>{item.icon}</span>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 7 }}>
                    <span style={{ fontSize: 15, fontWeight: 600 }}>{item.title}</span>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: t.link,
                        background: dark ? "#1E1B4B" : "#EDE9FE",
                        padding: "3px 10px",
                        borderRadius: 6,
                        transition: "background 0.3s, color 0.3s",
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: t.textSec, margin: 0 }}>{item.desc}</p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ maxWidth: 1120, margin: "0 auto", padding: "64px 32px 36px" }}>
        <div
          style={{
            borderTop: `1px solid ${t.border}`,
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            transition: "border-color 0.3s",
          }}
        >
          <span style={{ fontSize: 13, color: t.textTer }}>Last updated Jun 2026</span>
          <span style={{ fontSize: 13, color: t.textTer }}>Built with Documentation.AI</span>
        </div>
      </footer>
    </div>
  );
}