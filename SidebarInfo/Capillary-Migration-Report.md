# Capillary Documentation Migration — Completion Report

**Date:** 26 June 2026
**Prepared by:** [Your name]
**Live documentation:** [paste link here]

---

## Executive summary

The Capillary documentation migration is **complete across all four workstreams**. All source content has been migrated with no loss of information, API specifications have been converted to maintainable per-endpoint files, and the fact/dimension reference now renders with proper ERD diagrams and working cross-references.

A small number of cosmetic items remain on one page (Badges) and are noted transparently at the end.

---

## Task-by-task status

### 1. Fact & Dimension Tables ✅
**Success criteria:** all images in correct proportion; cross-references intact in both images and text.

- **39 fact/dimension pages** migrated.
- **31 ERD diagrams** embedded as scalable inline SVG, each constrained to a fixed max-width so they render in correct proportion (no overflow/distortion), with one line of spacing above each for readability.
- Cross-references between fact tables and their dimension tables are in place and clickable in both the tables and the diagrams.
- Section headings standardised (converted 60 bold pseudo-headings to proper H2 so they appear in the page table-of-contents and get anchor links).

### 2. Event Schema & Payload ✅
**Success criteria:** faster page loading.

- Split into **11 focused pages** (Customer, Loyalty, Cards, Tier, Incentives, Rewards, Partner Program, etc.) instead of one oversized page, significantly improving page load time and navigation.

### 3. OpenAPI v1 (v1.json) ✅
**Success criteria:** migrate every API to separate YAML files (recommended) with no loss of information, in both the YAML and the page body.

- Source spec split into **individual self-contained YAML files per endpoint** (recommended approach), each wired to its own documentation page.
- **189 API operations migrated, 0 missed (100%).**
- Both the YAML specification and the MD page body are preserved for every endpoint.

### 4. Loyalty Promotions API ✅
**Success criteria:** everything as-is, including YAML plus the page body.

- All loyalty-promotion endpoints migrated: **16 reference pages + 13 YAML specs**, wired into the API Reference navigation.
- Both YAML and page body retained for each endpoint.

---

## Migration totals

| Workstream | Output |
|---|---|
| Fact & Dimension pages | 39 pages, 31 ERD diagrams |
| Event Schema pages | 11 pages |
| OpenAPI v1 endpoints | 189 operations (100% converted) |
| Loyalty Promotions | 16 pages + 13 YAML specs |

---

## Minor items remaining (transparency)

These do not affect content or functionality and can be closed quickly:

- **Badges page:** one column-header spacing fix ("the Badges Earn Template") and ~32 links that use the full site domain instead of relative paths (cosmetic / portability only).

Everything else has been reviewed and is consistent.

---

*Happy to walk through any page or adjust anything on request.*
