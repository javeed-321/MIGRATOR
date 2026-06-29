"use client"
import { useState } from "react";

const capillaryBlue = "#1341A9";
const capillaryDark = "#0B2D7A";
const capillaryLight = "#E8EEFB";
const accentOrange = "#F97316";
const surfaceGray = "#F8FAFC";
const textPrimary = "#0F172A";
const textSecondary = "#64748B";
const borderLight = "#E2E8F0";

const products = [
  {
    name: "Loyalty+",
    icon: "💎",
    color: "#7C3AED",
    lightBg: "#F3F0FF",
    description:
      "Retain customers and drive repeat sales with personalised loyalty programs, points management, and tier-based rewards.",
    links: [
      { label: "Getting started", href: "#" },
      { label: "API reference", href: "#" },
      { label: "Promotions", href: "#" },
    ],
  },
  {
    name: "Engage+",
    icon: "📣",
    color: "#0891B2",
    lightBg: "#ECFEFF",
    description:
      "Personalise your engagement with omnichannel campaigns, journey builders, and targeted messaging solutions.",
    links: [
      { label: "Campaigns", href: "#" },
      { label: "Referrals", href: "#" },
      { label: "Journeys", href: "#" },
    ],
  },
  {
    name: "Insights+",
    icon: "📊",
    color: "#059669",
    lightBg: "#ECFDF5",
    description:
      "Get actionable insights with AI-powered customer analytics, reports, and retail intelligence dashboards.",
    links: [
      { label: "Fact tables", href: "#" },
      { label: "Dimensions", href: "#" },
      { label: "Schemas", href: "#" },
    ],
  },
  {
    name: "Data Platform",
    icon: "🔗",
    color: "#D97706",
    lightBg: "#FFFBEB",
    description:
      "Connect and manage data seamlessly across multiple sources with event schemas, ETL pipelines, and integrations.",
    links: [
      { label: "Event schemas", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Data models", href: "#" },
    ],
  },
];

const migrationTasks = [
  {
    id: 1,
    title: "Fact & dimension tables",
    source: "docs.capillarytech.com/docs/fact-dimension-tables",
    status: "In progress",
    statusColor: "#F59E0B",
    criteria:
      "All images in appropriate proportion with cross references in images and text preserved.",
    icon: "📐",
    detail: "2 sub-sections with data model diagrams",
  },
  {
    id: 2,
    title: "Event schema payload",
    source: "docs.capillarytech.com/docs/event-schema-payload",
    status: "Queued",
    statusColor: "#6366F1",
    criteria: "Faster loading time of the page with optimized rendering.",
    icon: "⚡",
    detail: "Performance-critical page migration",
  },
  {
    id: 3,
    title: "OpenAPI v1.json migration",
    source: "docs.capillarytech.com/openapi/v1.json",
    status: "Queued",
    statusColor: "#6366F1",
    criteria:
      "All APIs migrated under separate YAML files. No loss from md body or YAML specs.",
    icon: "📦",
    detail: "Bulk API migration — many endpoints",
  },
  {
    id: 4,
    title: "Loyalty promotions API",
    source: "docs.capillarytech.com/reference/loyalty-promotions",
    status: "Queued",
    statusColor: "#6366F1",
    criteria:
      "Complete migration including YAML specs and markdown body content — nothing lost.",
    icon: "🏆",
    detail: "Multiple APIs under this reference",
  },
];

const navLinks = [
  { label: "User documentation", href: "#" },
  { label: "API documentation", href: "#" },
  { label: "Developer docs", href: "#" },
  { label: "Releases", href: "#" },
];

export default function CapillaryDocsHome() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [hoveredTask, setHoveredTask] = useState(null);

  return (
    <div className="min-h-screen" style={{ background: "#FFFFFF" }}>
      {/* ─── NAVIGATION ─── */}
      <nav
        className="sticky top-0 z-50"
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${borderLight}`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
              style={{ background: capillaryBlue }}
            >
              C
            </div>
            <span
              className="text-base font-semibold"
              style={{ color: textPrimary }}
            >
              Capillary Docs
            </span>
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full"
              style={{
                background: capillaryLight,
                color: capillaryBlue,
              }}
            >
              v2.0
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors hover:opacity-80"
                style={{ color: textSecondary }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              className="text-sm px-4 py-2 rounded-lg transition-all hover:opacity-90"
              style={{
                background: capillaryBlue,
                color: "#FFFFFF",
              }}
            >
              Contact us
            </button>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${capillaryLight} 0%, #FFFFFF 50%, #FFF7ED 100%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(${capillaryBlue} 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
          {/* Breadcrumb pill */}
          <div className="flex justify-center mb-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
              style={{
                background: "rgba(19,65,169,0.06)",
                color: capillaryBlue,
                border: `1px solid rgba(19,65,169,0.12)`,
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Now migrating to Documentation.AI
            </div>
          </div>

          {/* Main headline */}
          <h1
            className="text-center text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-5"
            style={{ color: textPrimary }}
          >
            Capillary{" "}
            <span style={{ color: capillaryBlue }}>Documentation</span> Hub
          </h1>
          <p
            className="text-center text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: textSecondary }}
          >
            Explore detailed guides, API references, and integration resources
            across Capillary's loyalty, engagement, analytics, and data
            platforms.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto mb-10">
            <div
              className="flex items-center rounded-xl overflow-hidden transition-shadow"
              style={{
                background: "#FFFFFF",
                border: `1.5px solid ${borderLight}`,
                boxShadow: "0 4px 24px rgba(15,23,42,0.06)",
              }}
            >
              <div className="pl-4 pr-2">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke={textSecondary}
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 py-3.5 px-2 text-base outline-none"
                style={{ color: textPrimary, background: "transparent" }}
              />
              <div className="pr-3">
                <kbd
                  className="text-xs px-2 py-1 rounded-md font-mono"
                  style={{
                    background: surfaceGray,
                    color: textSecondary,
                    border: `1px solid ${borderLight}`,
                  }}
                >
                  ⌘K
                </kbd>
              </div>
            </div>
          </div>

          {/* Quick navigation pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Quick start", icon: "🚀" },
              { label: "API reference", icon: "📘" },
              { label: "Data models", icon: "🗃️" },
              { label: "Release notes", icon: "📋" },
            ].map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all hover:scale-[1.02]"
                style={{
                  background: "#FFFFFF",
                  color: textPrimary,
                  border: `1px solid ${borderLight}`,
                  boxShadow: "0 1px 3px rgba(15,23,42,0.04)",
                }}
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCT CARDS SECTION ─── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-1 h-6 rounded-full"
            style={{ background: capillaryBlue }}
          />
          <h2
            className="text-2xl font-bold"
            style={{ color: textPrimary }}
          >
            Explore by product
          </h2>
        </div>
        <p className="text-base mb-8 ml-4" style={{ color: textSecondary }}>
          Dive into the documentation for each Capillary product suite.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {products.map((product, i) => (
            <div
              key={product.name}
              className="group rounded-xl p-6 transition-all duration-300 cursor-pointer"
              style={{
                background: hoveredProduct === i ? product.lightBg : "#FFFFFF",
                border: `1px solid ${hoveredProduct === i ? product.color + "30" : borderLight}`,
                boxShadow:
                  hoveredProduct === i
                    ? `0 8px 32px ${product.color}12`
                    : "0 1px 3px rgba(15,23,42,0.04)",
                transform: hoveredProduct === i ? "translateY(-2px)" : "none",
              }}
              onMouseEnter={() => setHoveredProduct(i)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: product.lightBg }}
                  >
                    {product.icon}
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold"
                      style={{ color: textPrimary }}
                    >
                      {product.name}
                    </h3>
                  </div>
                </div>
                <svg
                  className="mt-1 transition-transform"
                  style={{
                    color: product.color,
                    transform:
                      hoveredProduct === i
                        ? "translateX(4px)"
                        : "translateX(0)",
                  }}
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: textSecondary }}
              >
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
                    style={{
                      color: product.color,
                      background: product.lightBg,
                    }}
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── DIVIDER ─── */}
      <div className="max-w-6xl mx-auto px-6">
        <div style={{ borderTop: `1px solid ${borderLight}` }} />
      </div>

      {/* ─── MIGRATION TASKS SECTION ─── */}
      <section
        className="py-16"
        style={{
          background: `linear-gradient(180deg, #FFFFFF 0%, ${surfaceGray} 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-1 h-6 rounded-full"
              style={{ background: accentOrange }}
            />
            <h2
              className="text-2xl font-bold"
              style={{ color: textPrimary }}
            >
              Migration roadmap
            </h2>
          </div>
          <p className="text-base mb-3 ml-4" style={{ color: textSecondary }}>
            Tracking our migration from ReadMe to Documentation.AI — four key
            milestones.
          </p>

          {/* Progress bar */}
          <div className="ml-4 mb-8 max-w-md">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span style={{ color: textSecondary }}>Overall progress</span>
              <span className="font-semibold" style={{ color: capillaryBlue }}>
                1 of 4 tasks
              </span>
            </div>
            <div
              className="h-2 rounded-full overflow-hidden"
              style={{ background: borderLight }}
            >
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: "25%",
                  background: `linear-gradient(90deg, ${capillaryBlue}, #3B82F6)`,
                }}
              />
            </div>
          </div>

          {/* Task cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {migrationTasks.map((task, i) => (
              <div
                key={task.id}
                className="rounded-xl p-5 transition-all duration-300 cursor-pointer"
                style={{
                  background: "#FFFFFF",
                  border: `1px solid ${hoveredTask === i ? capillaryBlue + "40" : borderLight}`,
                  boxShadow:
                    hoveredTask === i
                      ? `0 8px 32px rgba(19,65,169,0.08)`
                      : "0 1px 3px rgba(15,23,42,0.04)",
                  transform: hoveredTask === i ? "translateY(-2px)" : "none",
                }}
                onMouseEnter={() => setHoveredTask(i)}
                onMouseLeave={() => setHoveredTask(null)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-2xl leading-none"
                    >
                      {task.icon}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded-md"
                          style={{
                            background: surfaceGray,
                            color: textSecondary,
                          }}
                        >
                          Task {task.id}
                        </span>
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded-full"
                          style={{
                            background: task.statusColor + "18",
                            color: task.statusColor,
                          }}
                        >
                          {task.status}
                        </span>
                      </div>
                      <h3
                        className="text-base font-bold mt-1"
                        style={{ color: textPrimary }}
                      >
                        {task.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Detail */}
                <p
                  className="text-xs mb-3 ml-10"
                  style={{ color: textSecondary }}
                >
                  {task.detail}
                </p>

                {/* Source */}
                <div
                  className="rounded-lg px-3 py-2.5 mb-3 ml-10 font-mono text-xs overflow-x-auto"
                  style={{
                    background: surfaceGray,
                    color: textSecondary,
                    border: `1px solid ${borderLight}`,
                  }}
                >
                  📎 {task.source}
                </div>

                {/* Success criteria */}
                <div className="ml-10">
                  <span
                    className="text-xs font-semibold"
                    style={{ color: textPrimary }}
                  >
                    Success criteria
                  </span>
                  <p
                    className="text-xs mt-0.5 leading-relaxed"
                    style={{ color: textSecondary }}
                  >
                    {task.criteria}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        className="py-10"
        style={{
          background: textPrimary,
          borderTop: `1px solid ${borderLight}`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center text-white font-bold text-xs"
                style={{ background: capillaryBlue }}
              >
                C
              </div>
              <span className="text-sm font-medium text-gray-400">
                Capillary Documentation
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors">
                Status
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Support
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                API changelog
              </a>
              <span className="text-gray-600">
                Built with{" "}
                <a href="#" className="text-blue-400 hover:underline">
                  Documentation.AI
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}