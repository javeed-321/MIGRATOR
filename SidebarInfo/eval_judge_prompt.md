## Prompt for judge model for checking the v1-task

Act as a strict technical judge and evaluate the quality of the v1 API Reference
conversion pipeline. Analyse ALL of the following source and output files and
produce a detailed accuracy report.

## Files to Read and Cross-Reference

### Source Files (ground truth)

- RTF source: /home/javeed/Documents/Starter-Kit/v1-json-task-3/v1json (1).rtf
- Extracted JSON: /home/javeed/Documents/Starter-Kit/v1-json-task-3/v1_clean.json
- Manually fixed JSON: /home/javeed/Documents/Starter-Kit/v1-json-task-3/dsp-fixed.json
- Conversion script: /home/javeed/Documents/Starter-Kit/split_v1_to_yamls.py

### Output Files (what was generated)

- YAML files: /home/javeed/Documents/Starter-Kit/capillary/documentationai-handbook/api-reference/v1-*.yaml
- MDX stub pages: /home/javeed/Documents/Starter-Kit/capillary/documentationai-handbook/reference/v1-*.mdx
- Navigation config: /home/javeed/Documents/Starter-Kit/capillary/documentationai-handbook/documentation.json

## Evaluation Criteria — Check Each of These

### 1. Completeness

- How many operations exist in v1_clean.json (source)?
- How many v1-*.yaml files were generated?
- Are all source operationIds present in the YAML files?
- Which operations are missing (in source but no YAML)?
- Which YAMLs are extra (not in source — stale or copy artefacts)?

### 2. Accuracy of Content Conversion

- Pick 5 random v1-*.yaml files and compare their content
(path, method, parameters, requestBody, responses, descriptions)
directly against the same operation in v1_clean.json.
- Are all parameters correctly carried over (name, in, type, description, required)?
- Are request body schemas faithfully reproduced?
- Are response schemas and status codes correct?
- Are operationIds preserved exactly as in source?

### 3. Structural Correctness of YAML

- Do all YAML files parse as valid OpenAPI 3.1.0?
- Does every YAML have: openapi, info, servers, security, paths, components?
- Are path parameters declared with required: true?
- Are query strings correctly stripped from path keys and converted to query params?
- Are spaced path param names (e.g. {reward Id}) normalized to camelCase?

### 4. Copy/Duplicate Artefact Detection

- Are there any operationIds with -copy, -copy-1, or similar suffixes?
- Do any path keys in the source contain literal "(COPY)" text?
- Are duplicate endpoints (same API at different base URLs) included?

### 5. MDX Page Quality

- Do all v1-*.mdx files have correct YAML frontmatter with a title field?
- Does the title in the MDX match the summary in the corresponding YAML?
- Does the description in the MDX match the description in the source JSON?

### 6. Navigation Accuracy

- Does documentation.json contain a "v1 API Reference" tab?
- Does every nav entry point to a YAML file that actually exists?
- Does every nav entry point to an MDX file that actually exists?
- Are all 184 expected operations present across the 15 groups?
- Do the group counts match: Authentication 23, Badges 28, Rewards 51, etc.?

### 7. Known Issues to Verify

- Check if the "model" parameter in recommendations endpoints is incorrectly
set to "in: path" instead of "in: query"
- Check how many response examples are stored as escaped JSON strings
instead of parsed YAML objects
- Check for any raw HTML tags (<br>, <, etc.) in parameter descriptions

## Report Format

Produce a structured report with these sections:

### Executive Summary

- Source operation count vs generated YAML count vs nav entry count
- Overall accuracy score (0-10) with justification

### Completeness Report

- Table: group | source count | yaml count | matched | missing | extra

### Accuracy Spot-Check (5 operations)

- For each: operation name | field | source value | yaml value | match?

### Structural Issues Found

- List every YAML that fails any structural check with the specific issue

### Artefact/Duplicate Issues

- List any copy artefacts or duplicate entries still present

### MDX Quality Check

- Are titles and descriptions consistent with source?

### Navigation Integrity

- All 184 entries present? Any broken file references?

### Issue Severity Table

| # | Severity | Issue | Count | Files affected |

### Final Verdict

- What passed, what failed, what needs fixing