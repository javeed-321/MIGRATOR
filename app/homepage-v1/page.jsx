"use client";

import { useState } from "react";

/*
  Design rationale — following the Mintlify/Stripe/Twilio docs homepage pattern:
  1. Light background, clean typography
  2. Centered title + subtitle
  3. Image/illustration cards for products (2×2 Mintlify style)
  4. Use-case quick links (Stripe style)
  5. "Browse by product" organized link lists (Stripe/Twilio style)
  6. Featured content picks (Twilio style)
  7. Beauty = whitespace + precision, not effects
*/

// ── Card illustration components (simple, flat, docs-style) ──
function LoyaltyIllustration() {
  return (
    <svg viewBox="0 0 400 180" fill="none" style={{ width: "100%", display: "block" }}>
      <rect width="400" height="180" rx="12" fill="#F5F3FF" />
      <rect x="40" y="30" width="200" height="28" rx="6" fill="#EDE9FE" />
      <rect x="40" y="30" width="120" height="28" rx="6" fill="#DDD6FE" />
      <rect x="40" y="70" width="140" height="10" rx="3" fill="#EDE9FE" />
      <rect x="40" y="88" width="180" height="10" rx="3" fill="#EDE9FE" />
      <rect x="40" y="112" width="80" height="32" rx="8" fill="#7C3AED" />
      <text x="80" y="133" fontSize="13" fill="white" fontFamily="system-ui" fontWeight="500" textAnchor="middle">Earn</text>
      <rect x="132" y="112" width="80" height="32" rx="8" fill="#EDE9FE" />
      <text x="172" y="133" fontSize="13" fill="#7C3AED" fontFamily="system-ui" fontWeight="500" textAnchor="middle">Redeem</text>
      {/* Stars decoration */}
      <circle cx="310" cy="50" r="16" fill="#EDE9FE" />
      <path d="M310 38l2.5 5 5.5.8-4 3.9.9 5.3-4.9-2.6-4.9 2.6.9-5.3-4-3.9 5.5-.8z" fill="#7C3AED" />
      <circle cx="350" cy="80" r="10" fill="#EDE9FE" />
      <circle cx="290" cy="90" r="8" fill="#DDD6FE" />
      <rect x="270" y="120" width="100" height="36" rx="8" fill="#EDE9FE" />
      <rect x="278" y="128" width="28" height="6" rx="3" fill="#DDD6FE" />
      <rect x="278" y="140" width="50" height="4" rx="2" fill="#DDD6FE" />
    </svg>
  );
}

function EngageIllustration() {
  return (
    <svg viewBox="0 0 400 180" fill="none" style={{ width: "100%", display: "block" }}>
      <rect width="400" height="180" rx="12" fill="#ECFEFF" />
      {/* Message bubbles */}
      <rect x="40" y="30" width="160" height="44" rx="10" fill="#CFFAFE" />
      <rect x="48" y="42" width="80" height="8" rx="3" fill="#A5F3FC" />
      <rect x="48" y="56" width="120" height="6" rx="3" fill="#A5F3FC" />
      <rect x="120" y="86" width="160" height="44" rx="10" fill="#0891B2" />
      <rect x="128" y="98" width="80" height="8" rx="3" fill="rgba(255,255,255,0.5)" />
      <rect x="128" y="112" width="120" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
      {/* Channel icons */}
      <circle cx="320" cy="45" r="18" fill="#CFFAFE" />
      <rect x="312" y="37" width="16" height="16" rx="3" fill="#0891B2" opacity="0.6" />
      <circle cx="350" cy="85" r="14" fill="#CFFAFE" />
      <circle cx="350" cy="85" r="6" fill="#0891B2" opacity="0.5" />
      <circle cx="310" cy="115" r="12" fill="#CFFAFE" />
      {/* Connection lines */}
      <line x1="320" y1="63" x2="350" y2="71" stroke="#A5F3FC" strokeWidth="1.5" />
      <line x1="350" y1="99" x2="310" y2="103" stroke="#A5F3FC" strokeWidth="1.5" />
      <rect x="290" y="140" width="90" height="24" rx="6" fill="#0891B2" opacity="0.15" />
      <rect x="298" y="148" width="40" height="6" rx="3" fill="#0891B2" opacity="0.4" />
    </svg>
  );
}

function InsightsIllustration() {
  return (
    <svg viewBox="0 0 400 180" fill="none" style={{ width: "100%", display: "block" }}>
      <rect width="400" height="180" rx="12" fill="#ECFDF5" />
      {/* Chart */}
      <rect x="40" y="30" width="180" height="120" rx="8" fill="#D1FAE5" />
      <rect x="56" y="100" width="20" height="36" rx="4" fill="#059669" opacity="0.4" />
      <rect x="84" y="80" width="20" height="56" rx="4" fill="#059669" opacity="0.6" />
      <rect x="112" y="60" width="20" height="76" rx="4" fill="#059669" opacity="0.8" />
      <rect x="140" y="45" width="20" height="91" rx="4" fill="#059669" />
      <rect x="168" y="65" width="20" height="71" rx="4" fill="#059669" opacity="0.7" />
      {/* Table preview */}
      <rect x="240" y="30" width="140" height="120" rx="8" fill="#D1FAE5" />
      <rect x="250" y="42" width="120" height="8" rx="3" fill="#A7F3D0" />
      <line x1="250" y1="58" x2="370" y2="58" stroke="#A7F3D0" strokeWidth="1" />
      <rect x="250" y="66" width="50" height="6" rx="2" fill="#6EE7B7" />
      <rect x="320" y="66" width="30" height="6" rx="2" fill="#A7F3D0" />
      <rect x="250" y="82" width="60" height="6" rx="2" fill="#6EE7B7" />
      <rect x="320" y="82" width="40" height="6" rx="2" fill="#A7F3D0" />
      <rect x="250" y="98" width="45" height="6" rx="2" fill="#6EE7B7" />
      <rect x="320" y="98" width="35" height="6" rx="2" fill="#A7F3D0" />
      <rect x="250" y="114" width="55" height="6" rx="2" fill="#6EE7B7" />
      <rect x="320" y="114" width="25" height="6" rx="2" fill="#A7F3D0" />
    </svg>
  );
}

function DataPlatformIllustration() {
  return (
    <svg viewBox="0 0 400 180" fill="none" style={{ width: "100%", display: "block" }}>
      <rect width="400" height="180" rx="12" fill="#FFFBEB" />
      {/* Pipeline flow */}
      <circle cx="70" cy="60" r="22" fill="#FEF3C7" />
      <rect x="62" y="50" width="16" height="20" rx="3" fill="#D97706" opacity="0.5" />
      <line x1="92" y1="60" x2="140" y2="60" stroke="#FCD34D" strokeWidth="2" />
      <polygon points="137,54 147,60 137,66" fill="#FCD34D" />
      <rect x="150" y="40" width="60" height="40" rx="8" fill="#FEF3C7" />
      <rect x="160" y="50" width="40" height="6" rx="2" fill="#FBBF24" />
      <rect x="160" y="62" width="30" height="6" rx="2" fill="#FBBF24" opacity="0.5" />
      <line x1="210" y1="50" x2="260" y2="40" stroke="#FCD34D" strokeWidth="2" />
      <line x1="210" y1="70" x2="260" y2="90" stroke="#FCD34D" strokeWidth="2" />
      <rect x="260" y="25" width="100" height="34" rx="6" fill="#FEF3C7" />
      <rect x="270" y="34" width="50" height="6" rx="2" fill="#D97706" opacity="0.5" />
      <rect x="270" y="44" width="70" height="5" rx="2" fill="#D97706" opacity="0.3" />
      <rect x="260" y="75" width="100" height="34" rx="6" fill="#FEF3C7" />
      <rect x="270" y="84" width="60" height="6" rx="2" fill="#D97706" opacity="0.5" />
      <rect x="270" y="94" width="40" height="5" rx="2" fill="#D97706" opacity="0.3" />
      {/* JSON brackets */}
      <text x="50" y="140" fontSize="28" fill="#D97706" opacity="0.2" fontFamily="monospace" fontWeight="700">{"{ }"}</text>
      <rect x="120" y="130" width="80" height="24" rx="6" fill="#D97706" opacity="0.1" />
      <rect x="128" y="138" width="40" height="6" rx="2" fill="#D97706" opacity="0.3" />
    </svg>
  );
}

const illustrations = {
  loyalty: LoyaltyIllustration,
  engage: EngageIllustration,
  insights: InsightsIllustration,
  data: DataPlatformIllustration,
};

// ── Main component ──
export default function CapillaryDocsHome() {
  const [hovered, setHovered] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  const products = [
    {
      key: "loyalty",
      name: "Loyalty+",
      desc: "Programs, points, tiers, and promotions to drive repeat purchases and retention.",
      color: "#7C3AED",
      href: "#",
    },
    {
      key: "engage",
      name: "Engage+",
      desc: "Omnichannel campaigns, journey builders, and targeted messaging at scale.",
      color: "#0891B2",
      href: "#",
    },
    {
      key: "insights",
      name: "Insights+",
      desc: "Fact tables, dimensions, dashboards, and AI-powered retail analytics.",
      color: "#059669",
      href: "#",
    },
    {
      key: "data",
      name: "Data Platform",
      desc: "Event schemas, integrations, webhooks, and the unified customer data layer.",
      color: "#D97706",
      href: "#",
    },
  ];

  const browseLinks = [
    {
      title: "Guides",
      color: "#6366F1",
      links: [
        "Getting started",
        "Authentication & API keys",
        "Customer registration",
        "Transaction tracking",
        "Points & rewards setup",
        "Campaign configuration",
      ],
    },
    {
      title: "API reference",
      color: "#0891B2",
      links: [
        "Loyalty APIs",
        "Customer APIs",
        "Transaction APIs",
        "Coupon APIs",
        "Promotions APIs",
        "Communication APIs",
      ],
    },
    {
      title: "Data & analytics",
      color: "#059669",
      links: [
        "Fact tables overview",
        "Dimension tables",
        "Event schema payload",
        "Data export & ETL",
        "Custom reports",
        "Dashboard templates",
      ],
    },
    {
      title: "Resources",
      color: "#D97706",
      links: [
        "Release notes",
        "Webhook events",
        "Error codes",
        "Rate limits",
        "SDKs & tools",
        "Changelog",
      ],
    },
  ];

  const featured = [
    { title: "Build a loyalty program from scratch", tag: "Tutorial", time: "15 min", tagColor: "#7C3AED", tagBg: "#F5F3FF" },
    { title: "Migrating from v1 to v2 APIs", tag: "Guide", time: "10 min", tagColor: "#0891B2", tagBg: "#ECFEFF" },
    { title: "Event schema payload reference", tag: "Reference", time: "", tagColor: "#D97706", tagBg: "#FFFBEB" },
  ];

  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      background: "#FFFFFF",
      minHeight: "100vh",
      color: "#1a1a1a",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        a { text-decoration: none; color: inherit; }
      `}</style>

      {/* ═══════ HERO ═══════ */}
      <div style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "60px 24px 0",
        textAlign: "center",
      }}>
        <h1 style={{
          fontSize: 40,
          fontWeight: 700,
          letterSpacing: "-0.025em",
          lineHeight: 1.2,
          color: "#0f0f0f",
          marginBottom: 12,
        }}>
          Documentation
        </h1>
        <p style={{
          fontSize: 18,
          lineHeight: 1.6,
          color: "#6b7280",
          maxWidth: 540,
          margin: "0 auto",
        }}>
          Explore guides, API references, and integration resources across 
          Capillary's loyalty, engagement, and data platforms.
        </p>
      </div>

      {/* ═══════ PRODUCT CARDS (Mintlify pattern: 2×2 image cards) ═══════ */}
      <div style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "48px 24px 0",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 20,
        }}>
          {products.map((p, i) => {
            const Illustration = illustrations[p.key];
            const isHovered = hovered === i;
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
                  border: `1px solid ${isHovered ? "#e0e0e0" : "#f0f0f0"}`,
                  transition: "all 0.2s ease",
                  boxShadow: isHovered ? "0 8px 30px rgba(0,0,0,0.06)" : "none",
                  cursor: "pointer",
                }}
              >
                {/* Illustration */}
                <div style={{
                  overflow: "hidden",
                  transition: "transform 0.2s ease",
                  transform: isHovered ? "scale(1.02)" : "scale(1)",
                }}>
                  <Illustration />
                </div>

                {/* Text */}
                <div style={{ padding: "20px 24px 24px" }}>
                  <h3 style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: "#0f0f0f",
                    marginBottom: 6,
                  }}>
                    {p.name}
                  </h3>
                  <p style={{
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: "#6b7280",
                  }}>
                    {p.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* ═══════ USE CASES (Stripe top-links pattern) ═══════ */}
      <div style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "64px 24px 0",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          background: "#f3f4f6",
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid #f3f4f6",
        }}>
          {[
            {
              emoji: "🚀",
              title: "Get started",
              links: ["Quick start guide", "Authentication", "First API call"],
            },
            {
              emoji: "🔗",
              title: "Integrate",
              links: ["Webhooks setup", "SDK installation", "Event tracking"],
            },
            {
              emoji: "📖",
              title: "Learn",
              links: ["Core concepts", "Data models", "Best practices"],
            },
          ].map((col) => (
            <div
              key={col.title}
              style={{
                background: "#FFFFFF",
                padding: "28px 24px",
              }}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}>
                <span style={{ fontSize: 20 }}>{col.emoji}</span>
                <span style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#0f0f0f",
                }}>
                  {col.title}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontSize: 14,
                      color: "#6366F1",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    {link}
                    <span style={{ fontSize: 11, opacity: 0.6 }}>→</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════ BROWSE BY PRODUCT (Stripe/Twilio pattern) ═══════ */}
      <div style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "64px 24px 0",
      }}>
        <h2 style={{
          fontSize: 24,
          fontWeight: 600,
          color: "#0f0f0f",
          letterSpacing: "-0.02em",
          marginBottom: 32,
        }}>
          Browse by topic
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
        }}>
          {browseLinks.map((section) => (
            <div key={section.title}>
              <div style={{
                fontSize: 13,
                fontWeight: 600,
                color: section.color,
                marginBottom: 16,
                paddingBottom: 12,
                borderBottom: `2px solid ${section.color}20`,
              }}>
                {section.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {section.links.map((link, i) => (
                  <a
                    key={link}
                    href="#"
                    onMouseEnter={() => setHoveredLink(`${section.title}-${i}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    style={{
                      fontSize: 14,
                      color: hoveredLink === `${section.title}-${i}` ? "#0f0f0f" : "#4b5563",
                      transition: "color 0.15s",
                      lineHeight: 1.4,
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════ FEATURED (Twilio pattern) ═══════ */}
      <div style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "64px 24px 0",
      }}>
        <h2 style={{
          fontSize: 24,
          fontWeight: 600,
          color: "#0f0f0f",
          letterSpacing: "-0.02em",
          marginBottom: 24,
        }}>
          Featured
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
        }}>
          {featured.map((item, i) => (
            <a
              key={i}
              href="#"
              style={{
                display: "block",
                padding: "24px",
                borderRadius: 12,
                border: "1px solid #f0f0f0",
                transition: "all 0.2s",
                background: "#FFFFFF",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#e0e0e0";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#f0f0f0";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
              }}>
                <span style={{
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "3px 8px",
                  borderRadius: 5,
                  color: item.tagColor,
                  background: item.tagBg,
                }}>
                  {item.tag}
                </span>
                {item.time && (
                  <span style={{ fontSize: 12, color: "#9ca3af" }}>
                    {item.time}
                  </span>
                )}
              </div>
              <h3 style={{
                fontSize: 15,
                fontWeight: 600,
                color: "#0f0f0f",
                lineHeight: 1.4,
              }}>
                {item.title}
              </h3>
            </a>
          ))}
        </div>
      </div>

      {/* ═══════ CTA ═══════ */}
      <div style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "64px 24px 80px",
      }}>
        <div style={{
          textAlign: "center",
          padding: "40px",
          borderRadius: 16,
          background: "#F9FAFB",
          border: "1px solid #f0f0f0",
        }}>
          <p style={{
            fontSize: 16,
            fontWeight: 600,
            color: "#0f0f0f",
            marginBottom: 8,
          }}>
            Can't find what you're looking for?
          </p>
          <p style={{
            fontSize: 14,
            color: "#6b7280",
            marginBottom: 20,
          }}>
            Reach out to our team or explore the full API reference.
          </p>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: 12,
          }}>
            <a href="#" style={{
              padding: "10px 24px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              background: "#0f0f0f",
              color: "#FFFFFF",
            }}>
              Contact support
            </a>
            <a href="#" style={{
              padding: "10px 24px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              background: "#FFFFFF",
              color: "#0f0f0f",
              border: "1px solid #e0e0e0",
            }}>
              API reference →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}