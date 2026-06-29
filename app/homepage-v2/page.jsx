"use client"

import { useState } from "react";

/* ─── SVG Background (Mintlify-style hero decoration) ─── */
function HeroBg() {
  return (
    <svg
      viewBox="0 0 1152 320"
      fill="none"
      style={{
        position: "absolute",
        top: -40,
        left: 0,
        right: 0,
        width: "100%",
        height: "auto",
        opacity: 0.55,
        pointerEvents: "none",
      }}
    >
      <defs>
        <linearGradient id="hg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0E7FF" />
          <stop offset="100%" stopColor="#F5F3FF" />
        </linearGradient>
        <linearGradient id="hg2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ECFEFF" />
          <stop offset="100%" stopColor="#ECFDF5" />
        </linearGradient>
      </defs>
      <ellipse cx="280" cy="160" rx="380" ry="200" fill="url(#hg1)" />
      <ellipse cx="880" cy="140" rx="340" ry="180" fill="url(#hg2)" />
      <ellipse cx="576" cy="260" rx="500" ry="120" fill="#F5F3FF" opacity="0.4" />
    </svg>
  );
}

/* ─── Product card illustrations (Mintlify-style image cards) ─── */
function LoyaltyImg() {
  return (
    <svg viewBox="0 0 480 200" fill="none" style={{ width: "100%", display: "block" }}>
      <rect width="480" height="200" rx="12" fill="#F5F3FF" />
      <rect x="36" y="28" width="220" height="30" rx="7" fill="#EDE9FE" />
      <rect x="36" y="28" width="130" height="30" rx="7" fill="#DDD6FE" />
      <rect x="36" y="70" width="150" height="10" rx="4" fill="#EDE9FE" />
      <rect x="36" y="88" width="200" height="10" rx="4" fill="#EDE9FE" />
      <rect x="36" y="112" width="88" height="34" rx="8" fill="#7C3AED" />
      <text x="80" y="134" fontSize="13" fill="white" fontFamily="system-ui" fontWeight="500" textAnchor="middle">Earn</text>
      <rect x="134" y="112" width="88" height="34" rx="8" fill="#EDE9FE" />
      <text x="178" y="134" fontSize="13" fill="#7C3AED" fontFamily="system-ui" fontWeight="500" textAnchor="middle">Redeem</text>
      <circle cx="360" cy="52" r="20" fill="#EDE9FE" />
      <path d="M360 37l3 6 6.5 1-4.7 4.6 1.1 6.4-5.9-3.1-5.9 3.1 1.1-6.4-4.7-4.6 6.5-1z" fill="#7C3AED" />
      <circle cx="410" cy="88" r="13" fill="#EDE9FE" />
      <circle cx="340" cy="100" r="10" fill="#DDD6FE" />
      <rect x="310" y="130" width="120" height="40" rx="10" fill="#EDE9FE" />
      <rect x="320" y="140" width="32" height="7" rx="3" fill="#DDD6FE" />
      <rect x="320" y="152" width="56" height="5" rx="2" fill="#DDD6FE" />
    </svg>
  );
}

function EngageImg() {
  return (
    <svg viewBox="0 0 480 200" fill="none" style={{ width: "100%", display: "block" }}>
      <rect width="480" height="200" rx="12" fill="#ECFEFF" />
      <rect x="36" y="32" width="180" height="50" rx="12" fill="#CFFAFE" />
      <rect x="48" y="46" width="90" height="9" rx="3" fill="#A5F3FC" />
      <rect x="48" y="60" width="130" height="7" rx="3" fill="#A5F3FC" />
      <rect x="140" y="94" width="180" height="50" rx="12" fill="#0891B2" />
      <rect x="152" y="108" width="90" height="9" rx="3" fill="rgba(255,255,255,0.5)" />
      <rect x="152" y="122" width="130" height="7" rx="3" fill="rgba(255,255,255,0.3)" />
      <circle cx="380" cy="48" r="22" fill="#CFFAFE" />
      <rect x="370" y="38" width="20" height="20" rx="4" fill="#0891B2" opacity="0.55" />
      <circle cx="418" cy="96" r="16" fill="#CFFAFE" />
      <circle cx="418" cy="96" r="7" fill="#0891B2" opacity="0.45" />
      <circle cx="370" cy="128" r="14" fill="#CFFAFE" />
      <line x1="380" y1="70" x2="418" y2="80" stroke="#A5F3FC" strokeWidth="1.5" />
      <line x1="418" y1="112" x2="370" y2="114" stroke="#A5F3FC" strokeWidth="1.5" />
      <rect x="340" y="156" width="100" height="26" rx="7" fill="#0891B2" opacity="0.12" />
      <rect x="350" y="164" width="44" height="7" rx="3" fill="#0891B2" opacity="0.35" />
    </svg>
  );
}

function InsightsImg() {
  return (
    <svg viewBox="0 0 480 200" fill="none" style={{ width: "100%", display: "block" }}>
      <rect width="480" height="200" rx="12" fill="#ECFDF5" />
      <rect x="36" y="30" width="200" height="136" rx="10" fill="#D1FAE5" />
      <rect x="54" y="114" width="24" height="38" rx="4" fill="#059669" opacity="0.4" />
      <rect x="86" y="90" width="24" height="62" rx="4" fill="#059669" opacity="0.6" />
      <rect x="118" y="66" width="24" height="86" rx="4" fill="#059669" opacity="0.8" />
      <rect x="150" y="48" width="24" height="104" rx="4" fill="#059669" />
      <rect x="182" y="72" width="24" height="80" rx="4" fill="#059669" opacity="0.65" />
      <rect x="260" y="30" width="180" height="136" rx="10" fill="#D1FAE5" />
      <rect x="272" y="44" width="140" height="9" rx="3" fill="#A7F3D0" />
      <line x1="272" y1="62" x2="428" y2="62" stroke="#A7F3D0" strokeWidth="1" />
      <rect x="272" y="72" width="56" height="7" rx="2" fill="#6EE7B7" />
      <rect x="380" y="72" width="34" height="7" rx="2" fill="#A7F3D0" />
      <rect x="272" y="90" width="68" height="7" rx="2" fill="#6EE7B7" />
      <rect x="380" y="90" width="44" height="7" rx="2" fill="#A7F3D0" />
      <rect x="272" y="108" width="50" height="7" rx="2" fill="#6EE7B7" />
      <rect x="380" y="108" width="38" height="7" rx="2" fill="#A7F3D0" />
      <rect x="272" y="126" width="62" height="7" rx="2" fill="#6EE7B7" />
      <rect x="380" y="126" width="28" height="7" rx="2" fill="#A7F3D0" />
    </svg>
  );
}

function DataImg() {
  return (
    <svg viewBox="0 0 480 200" fill="none" style={{ width: "100%", display: "block" }}>
      <rect width="480" height="200" rx="12" fill="#FFFBEB" />
      <circle cx="80" cy="66" r="26" fill="#FEF3C7" />
      <rect x="70" y="54" width="20" height="24" rx="4" fill="#D97706" opacity="0.5" />
      <line x1="106" y1="66" x2="160" y2="66" stroke="#FCD34D" strokeWidth="2.5" />
      <polygon points="156,59 168,66 156,73" fill="#FCD34D" />
      <rect x="170" y="42" width="72" height="48" rx="10" fill="#FEF3C7" />
      <rect x="182" y="56" width="48" height="7" rx="2" fill="#FBBF24" />
      <rect x="182" y="70" width="36" height="7" rx="2" fill="#FBBF24" opacity="0.5" />
      <line x1="242" y1="54" x2="300" y2="42" stroke="#FCD34D" strokeWidth="2" />
      <line x1="242" y1="78" x2="300" y2="100" stroke="#FCD34D" strokeWidth="2" />
      <rect x="300" y="26" width="130" height="38" rx="8" fill="#FEF3C7" />
      <rect x="312" y="36" width="60" height="7" rx="2" fill="#D97706" opacity="0.5" />
      <rect x="312" y="48" width="84" height="6" rx="2" fill="#D97706" opacity="0.3" />
      <rect x="300" y="82" width="130" height="38" rx="8" fill="#FEF3C7" />
      <rect x="312" y="92" width="72" height="7" rx="2" fill="#D97706" opacity="0.5" />
      <rect x="312" y="104" width="48" height="6" rx="2" fill="#D97706" opacity="0.3" />
      <text x="60" y="156" fontSize="30" fill="#D97706" opacity="0.18" fontFamily="monospace" fontWeight="700">{"{ }"}</text>
      <rect x="140" y="146" width="90" height="28" rx="7" fill="#D97706" opacity="0.08" />
      <rect x="150" y="156" width="46" height="7" rx="2" fill="#D97706" opacity="0.25" />
    </svg>
  );
}

const productImgs = { loyalty: LoyaltyImg, engage: EngageImg, insights: InsightsImg, data: DataImg };

/* ─── Small icon components for migration tasks ─── */
function TaskIcon({ emoji }) {
  return <span style={{ fontSize: 22 }}>{emoji}</span>;
}

function StatusBadge({ label, color, bg }) {
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 600,
        color: color,
        background: bg,
        padding: "3px 10px",
        borderRadius: 6,
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

/* ─── SearchBar ─── */
function SearchBar() {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ position: "relative", width: 400, maxWidth: "45%" }}>
      <svg
        width="15"
        height="15"
        viewBox="0 0 20 20"
        fill="none"
        style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" }}
      >
        <circle cx="9" cy="9" r="5.5" stroke="#9ca3af" strokeWidth="1.5" />
        <line x1="13" y1="13" x2="17" y2="17" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <input
        placeholder="Search documentation..."
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          height: 38,
          padding: "0 90px 0 36px",
          borderRadius: 10,
          border: `1px solid ${focused ? "#a78bfa" : "#e5e7eb"}`,
          fontSize: 13,
          color: "#111827",
          background: focused ? "#fff" : "#f9fafb",
          outline: "none",
          transition: "all 0.15s",
          fontFamily: "inherit",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 8,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span
          style={{
            fontSize: 10,
            color: "#9ca3af",
            background: "#f3f4f6",
            padding: "2px 6px",
            borderRadius: 4,
            fontFamily: "monospace",
          }}
        >
          ⌘K
        </span>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            fontSize: 11,
            fontWeight: 600,
            color: "#7C3AED",
            background: "#F5F3FF",
            border: "none",
            borderRadius: 6,
            padding: "4px 9px",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
            <path d="M8 1l1.2 4.8L14 8l-4.8 1.2L8 14l-1.2-4.8L2 8l4.8-1.2z" fill="#7C3AED" />
          </svg>
          Ask AI
        </button>
      </div>
    </div>
  );
}

/* ════════════════ MAIN ════════════════ */
export default function CapillaryDocsHome() {
  const [hovered, setHovered] = useState(null);
  const [hoveredTask, setHoveredTask] = useState(null);

  const products = [
    { key: "loyalty", name: "Loyalty+", desc: "Retain customers and drive repeat sales with personalised loyalty programs, tiers, points, and promotions.", color: "#7C3AED", href: "#" },
    { key: "engage", name: "Engage+", desc: "Personalise engagement with omnichannel campaigns, journey builders, and targeted messaging at scale.", color: "#0891B2", href: "#" },
    { key: "insights", name: "Insights+", desc: "Get actionable insights with fact tables, dimensions, dashboards, and AI-powered retail analytics.", color: "#059669", href: "#" },
    { key: "data", name: "Data Platform", desc: "Connect and manage data seamlessly — event schemas, integrations, webhooks, and the unified customer data layer.", color: "#D97706", href: "#" },
  ];

  const tasks = [
    {
      emoji: "📊",
      title: "Fact & Dimension Tables",
      desc: "Images in correct proportions, cross-references between diagrams and text, star schema layout preserved.",
      status: "Data models",
      statusColor: "#059669",
      statusBg: "#ECFDF5",
      href: "#",
    },
    {
      emoji: "⚡",
      title: "Event Schema Payload",
      desc: "Optimized for faster page load — restructured schema sections, lazy-loaded payloads, and streamlined navigation.",
      status: "Events",
      statusColor: "#0891B2",
      statusBg: "#ECFEFF",
      href: "#",
    },
    {
      emoji: "🔗",
      title: "OpenAPI v1.json Migration",
      desc: "Full API spec migrated to separate YAML files per endpoint group — zero information loss from both body and spec.",
      status: "API reference",
      statusColor: "#7C3AED",
      statusBg: "#F5F3FF",
      href: "#",
    },
    {
      emoji: "🎯",
      title: "Loyalty Promotions APIs",
      desc: "Complete migration of all promotion endpoints — YAML definitions and markdown body content preserved as-is.",
      status: "Loyalty APIs",
      statusColor: "#D97706",
      statusBg: "#FFFBEB",
      href: "#",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        background: "#ffffff",
        minHeight: "100vh",
        color: "#111827",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        a { text-decoration: none; color: inherit; }
        ::selection { background: #DDD6FE; }
      `}</style>

      {/* ═══ HEADER ═══ */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid #f3f4f6",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 28px",
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <img
              src="https://files.readme.io/bba3939-small-Layer_1_1.png"
              alt="Capillary"
              style={{ height: 24 }}
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <span style={{ fontSize: 15, fontWeight: 600 }}>Capillary</span>
            <span style={{ fontSize: 12, fontWeight: 500, color: "#9ca3af", marginLeft: -4 }}>docs</span>
          </div>

          <SearchBar />

          <a
            href="https://www.capillarytech.com/contact-us/"
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: "#fff",
              background: "#111827",
              padding: "8px 18px",
              borderRadius: 8,
              flexShrink: 0,
            }}
          >
            Contact us
          </a>
        </div>
      </header>

      {/* ═══ HERO (Mintlify-style) ═══ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <HeroBg />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1100,
            margin: "0 auto",
            padding: "72px 28px 0",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "#0f0f0f",
              marginBottom: 14,
            }}
          >
            Documentation
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: "#6b7280",
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            Explore guides, API references, and integration resources across Capillary's loyalty, engagement, analytics, and data platforms.
          </p>
        </div>

        {/* ═══ PRODUCT CARDS (Mintlify 2×2 image cards) ═══ */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1100,
            margin: "0 auto",
            padding: "48px 28px 0",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18 }}>
            {products.map((p, i) => {
              const Img = productImgs[p.key];
              const isH = hovered === i;
              return (
                <a
                  key={p.key}
                  href={p.href}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display: "block",
                    borderRadius: 16,
                    overflow: "hidden",
                    border: `1px solid ${isH ? "#d1d5db" : "#e5e7eb"}`,
                    background: "#fff",
                    transition: "all 0.2s ease",
                    boxShadow: isH ? "0 8px 32px rgba(0,0,0,0.06)" : "0 1px 3px rgba(0,0,0,0.03)",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      overflow: "hidden",
                      transition: "transform 0.25s ease",
                      transform: isH ? "scale(1.02)" : "scale(1)",
                    }}
                  >
                    <Img />
                  </div>
                  <div style={{ padding: "18px 22px 22px" }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: "#0f0f0f", marginBottom: 5 }}>
                      {p.name}
                    </h3>
                    <p style={{ fontSize: 14, lineHeight: 1.55, color: "#6b7280", margin: 0 }}>
                      {p.desc}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 28px 0" }}>
        <div style={{ borderTop: "1px solid #f3f4f6" }} />
      </div>

      {/* ═══ MIGRATION TASKS ═══ */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 28px 0" }}>
        <h2
          style={{
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#0f0f0f",
            marginBottom: 6,
          }}
        >
          Migration progress
        </h2>
        <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 28, lineHeight: 1.55 }}>
          Key documentation areas currently being migrated to the new platform.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
          {tasks.map((t, i) => {
            const isH = hoveredTask === i;
            return (
              <a
                key={i}
                href={t.href}
                onMouseEnter={() => setHoveredTask(i)}
                onMouseLeave={() => setHoveredTask(null)}
                style={{
                  display: "flex",
                  gap: 14,
                  padding: "22px",
                  borderRadius: 14,
                  border: `1px solid ${isH ? "#d1d5db" : "#e5e7eb"}`,
                  background: isH ? "#fafafa" : "#fff",
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}
              >
                <div style={{ flexShrink: 0, paddingTop: 2 }}>
                  <TaskIcon emoji={t.emoji} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>{t.title}</span>
                    <StatusBadge label={t.status} color={t.statusColor} bg={t.statusBg} />
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: "#6b7280", margin: 0 }}>{t.desc}</p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 28px 32px" }}>
        <div
          style={{
            borderTop: "1px solid #f3f4f6",
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 12, color: "#9ca3af" }}>Last updated Jun 2026</span>
          <a
            href="https://documentation.ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 12, color: "#9ca3af" }}
          >
            Built with Documentation.AI
          </a>
        </div>
      </footer>
    </div>
  );
}