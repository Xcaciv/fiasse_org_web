---
name: prd-securability-enhancement
description: Enhance product requirement documents (PRDs) with FIASSE v1.0.4 / SSEM implementation guidance and OWASP ASVS requirement coverage. Use when users ask to improve PRD security requirements, select an ASVS level, map feature requirements to ASVS controls, annotate features with the ten SSEM attributes (Analyzability, Modifiability, Testability, Observability, Confidentiality, Accountability, Authenticity, Availability, Integrity, Resilience), and apply FIASSE v1.0.4 principles (Transparency, Boundary Control, Canonical Input Handling, Request Surface Minimization, Derived Integrity, Principle of Least Astonishment) across each feature.
license: CC-BY-SA-4.0
---

# PRD Securability Enhancement (FIASSE v1.0.4 / SSEM + ASVS)

Enhance PRD content so each feature includes explicit securability requirements, implementation notes, and measurable acceptance criteria aligned to ASVS and FIASSE v1.0.4 / SSEM.

Follow the complete workflow in `plays/requirements-analysis/prd-fiasse-asvs-enhancement.md`.

## When to Use

- User asks to strengthen a PRD with security requirements
- User asks to choose ASVS level for requirements
- User asks to map PRD features to ASVS requirements
- User asks to annotate feature implementation with FIASSE/SSEM attributes
- Product requirements need securability-by-design before implementation starts

## Steps

1. **Parse PRD Features** — Extract and normalize each feature into testable requirement form.

2. **Choose ASVS Level First** — Select baseline ASVS assurance level (1/2/3) and record rationale.

3. **Map Features to ASVS** — For each feature, identify applicable ASVS sections and requirements from the [OWASP ASVS v5.0.0 requiremnets](https://github.com/OWASP/ASVS/blob/v5.0.0/5.0/docs_en/OWASP_Application_Security_Verification_Standard_5.0.0_en.flat.json), filtered by chosen level.

4. **Close Requirement Gaps** — Mark coverage as Covered/Partial/Missing/Not Applicable, then add missing requirement statements to feature requirements.

5. **Add Compact Securability Notes** — For each feature, write a brief paragraph capturing only the material SSEM attributes and FIASSE v1.0.4 principles that shape implementation. Cover, when relevant:
   - **SSEM attributes** (10 total): Analyzability, Modifiability, Testability, **Observability** (new in v1.0.4), Confidentiality, Accountability, Authenticity, Availability, Integrity, Resilience
   - **Boundary Control Principle** (§4.3) — where the feature's trust boundaries are and what control belongs at each
   - **Canonical Input Handling** (§4.4.1) — canonicalize → sanitize → validate at every boundary
   - **Request Surface Minimization** (§4.4.1.1) — which request fields/headers/params the feature actually consumes
   - **Derived Integrity Principle** (§4.4.1.2) — which values must be server-derived (identity, permissions, pricing, balances, state) and never accepted from the client
   - **Transparency Principle** (§2.5) — structured logging, metrics, decision-reason capture that makes Observability real
   - **Principle of Least Astonishment** (§2.6) — predictable defaults, naming, and error semantics
   - Prefer "defendable authentication" terminology over "secure authentication" when writing auth-related notes.

6. **Emit Enhanced PRD Content** — Produce ASVS level decision, coverage matrix, updated feature specs with securability notes, cross-cutting requirements, and open gaps.

## Output

Deliver a concise enhanced PRD that includes:
- ASVS level selection and rationale
- Feature-ASVS coverage matrix (gap summary)
- Per-feature updated requirements with compact securability notes (SSEM attributes touched + FIASSE principles applied)
- Cross-cutting securability requirements, including observability/transparency expectations
- Open gaps and assumptions

## References

- [FIASSE v1.0.4 — securable_framework.md](https://github.com/Xcaciv/securable_software_engineering/blob/v1.0.4/docs/securable_framework.md) — pin requirement annotations to this version for stable scoping
- [OWASP ASVS v5.0.0 — English chapters](https://github.com/OWASP/ASVS/tree/v5.0.0/5.0/en) — ASVS 5.0 feature-aligned security requirements by chapter (pin to this tag for stable requirement IDs)
- `plays/requirements-analysis/prd-fiasse-asvs-enhancement.md`
- `data/fiasse/S2.1.md`–`S2.6.md` — Foundational Principles (Securable Paradigm, Resiliently Add Computing Value, Security Mission, First Principle Alignment, Transparency, Principle of Least Astonishment)
- `data/fiasse/S3.2.1.md`–`S3.2.3.md` — SSEM Pillars and sub-attributes (Maintainability now includes Observability)
- `data/fiasse/S4.3.md` — Boundary Control Principle
- `data/fiasse/S4.4.1.md`, `S4.4.1.1.md`, `S4.4.1.2.md` — Canonical Input Handling, Request Surface Minimization, Derived Integrity
- `data/fiasse/S6.1.md` — Actionable Security Intelligence Principle
