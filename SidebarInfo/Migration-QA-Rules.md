# Documentation Migration — QA Rules & Checklist

Use this file to check every batch of migrated MDX files before pushing to the live site.
Rules are grouped by category. Each rule shows what to look for (the problem) and what the correct output should be.

---

## 1. Scraping Artifacts to Remove

These blocks are inserted by web scrapers and must be deleted from every file.

### 1.1 Documentation Index Blockquote
**Problem (input):**
```
> ## Documentation Index
> Fetch the complete documentation index at: https://docs.capillarytech.com/llms.txt
> Use this file to discover all available pages before exploring further.
```
**Fix:** Delete the entire block including the surrounding blank lines.
**Detection command:**
```bash
grep -rl "Documentation Index" docs/
```
**Expected result after fix:** Zero files returned.

---

### 1.2 Redundant Bold Page Title
**Problem (input):**
```
---
title: My Page Title
---

**My Page Title**
```
The bold line duplicates the frontmatter `title:` and renders as an extra heading on the page.

**Fix:** Delete the `**Page Title**` line. The platform renders the title from frontmatter automatically.

---

### 1.3 ERD Heading Without a Diagram
**Problem (input):**
```
**Fact Table Name - Entity Relationship Diagram (ERD)**

| Column Name | ...
```
An ERD heading was added during scraping but no actual SVG diagram follows it.

**Fix:** Delete the `**...Entity Relationship Diagram (ERD)**` line if there is no `<div dangerouslySetInnerHTML...>` SVG block directly below it.

---

### 1.4 Emoji / Icon Scraping Artifacts Inside Components
**Problem (input):**
```
<Callout kind="info" title="Note text here.">

📘

</Callout>
```
The `📘` (or similar emoji) is a rendered icon from the source HTML that got scraped as text content.

**Fix:** Remove the emoji. The callout body should be empty or contain actual descriptive text.

---

## 2. Link Rules

### 2.1 Internal Links Must Be Relative
**Problem (input):**
```
[`dimension_table`](https://docs.capillarytech.com/docs/dimension-tables#anchor)
```
Absolute links to `docs.capillarytech.com` do not render as clickable links inside table cells on the DocumentationAI platform.

**Fix:** Convert to relative internal path:
```
[`dimension_table`](/dimensions-tables#anchor)
```
**Detection command:**
```bash
grep -rl "https://docs.capillarytech.com/docs/dimension-tables" docs/
```

---

### 2.2 Correct Path for Dimension Tables
The dimension tables page lives at `/dimensions-tables` (NOT `/docs/dimension-tables`).

| Wrong | Correct |
|-------|---------|
| `/docs/dimension-tables#anchor` | `/dimensions-tables#anchor` |

**Detection command:**
```bash
grep -rn "/docs/dimension-tables" docs/
```

---

### 2.3 Bullet Point Links Must Be Hyperlinks
**Problem (input):**
```
- Create a chart using Badges KPI and Dimensions
- Create a custom report on Badges
```
These are plain text — they should be hyperlinks matching the original source.

**Fix:** Wrap the link text in markdown link syntax:
```
- Create a chart [using Badges KPI and Dimensions](https://docs.capillarytech.com/docs/...)
- Create a [custom report on Badges](https://docs.capillarytech.com/docs/...)
```

---

## 3. Table Column Rules (Fact Tables)

### 3.1 Linked Table Column (4th Column)
Every row in the Linked Table column must use a clickable relative link, not plain text.

**Problem (input):**
```
| date | bigint | ... | date |
```
**Correct output:**
```
| date | bigint | ... | [date](/dimensions-tables#date) |
```

---

### 3.2 5th Column Header — Availability for Export
The 5th column header must include the template name as a clickable link, not plain text.

**Problem (input) — various bad forms seen:**
```
| Export Availability |
| Export Available |
| **Export Available** |
| Availability for Export in the Points Template |   ← plain text, no link
```

**Correct output format:**
```
| Availability for Export in the [Template Name](/docs/template-slug) Template |
```

**Template URL pattern:** `/docs/<template-name>-standard-export-template`
Example: `[Points](/docs/points-standard-export-template)`

**Detection command:**
```bash
grep -rn "Export Availability\|Export Available\b\|\*\*Export" docs/
```

---

## 4. Content Structure Rules

### 4.1 No Standalone Legend Table
**Problem (input):**
```
## Legend

| Element | Definition |
| --- | --- |
| **PK** | Primary Key |
| **LK** | Linking Key |
```
The original Capillary docs do not have a separate Legend section — this was added during migration.

**Fix:** Delete the `## Legend` heading and its table entirely.

---

### 4.2 Frontmatter Must Have a Title
Every MDX file must start with:
```yaml
---
title: Page Title Here
---
```
No file should be missing the `title:` field.

**Detection command:**
```bash
for f in docs/*.mdx; do head -3 "$f" | grep -q "title:" || echo "MISSING TITLE: $f"; done
```

---

## 5. Component Rules (MDX)

### 5.1 Callout Syntax
Use `kind="info"` for informational callouts. Do NOT add `icon` or `emoji` props unless they were in the original.

**Correct:**
```mdx
<Callout kind="info" title="Note text here.">
Optional body text.
</Callout>
```

**Incorrect:**
```mdx
<Callout kind="info" title="Note text here.">
📘
</Callout>
```

### 5.2 Bold Pseudo-Headings → Proper H2
**Problem (input):**
```
**Section Name**
```
Bold text used as a heading does not appear in the page table-of-contents and has no anchor link.

**Fix:** Convert to a proper markdown heading:
```
## Section Name
```

---

## 6. Navigation Rules

### 6.1 Every New Page Must Be in documentation.json
A page only appears in the sidebar and on the live site if its path is listed in `documentation.json`.

**Check:** After adding any new `.mdx` file, add a matching entry in `documentation.json`:
```json
{ "title": "My Page Title", "path": "docs/my-page-slug" }
```
The `path` value is the file path without `.mdx`.

---

## 7. Quick Full-Scan Commands

Run these after any migration batch to catch the most common issues:

```bash
cd capillary/documentationai-handbook

# 1. Scraping artifact (Documentation Index block)
grep -rl "Documentation Index" docs/ loyalty-promotions-api-mdx/

# 2. Wrong dimension-tables path
grep -rn "/docs/dimension-tables" docs/

# 3. Bad 5th column headers
grep -rn "Export Availability\|Export Available\b\|\*\*Export" docs/

# 4. Absolute links to old Capillary site in table cells
grep -rn "capillarytech.com/docs/dimension-tables" docs/

# 5. Legend section still present
grep -rn "## Legend" docs/

# 6. Emoji artifacts in callouts
grep -rn "📘\|📗\|📙" docs/

# 7. Missing frontmatter title
for f in docs/*.mdx; do head -3 "$f" | grep -q "title:" || echo "MISSING TITLE: $f"; done
```

All commands should return **zero results** on a clean migration.

---

*Last updated: 2026-06-29*
