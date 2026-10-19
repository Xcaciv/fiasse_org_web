---
name: prd-securability-enhancement
description: Enhance, enrich, harden, or annotate PRDs, product specs, feature specs, user stories, epics, requirements docs, backlog items, acceptance criteria, or definitions of done with FIASSE v1.3.0 / SSEM securability requirements and OWASP ASVS v5.0.0 coverage. Use when asked to add security requirements, choose an ASVS level, map features to ASVS controls, write per-feature securability notes, derive testable acceptance criteria, or apply the ten SSEM sub-attributes across Maintainability (Analyzability, Modifiability, Testability, Observability), Trustworthiness (Confidentiality, Accountability, Authenticity), and Reliability (Availability, Integrity, Resilience), plus FIASSE principles (Transparency, Boundary Control, Canonical Input Handling, the Canonical Parsing Principle, the Isolated Integrity Principle, Least Astonishment, and control-to-requirement translation). This is the requirements-stage counterpart to `securability-engineering` (code generation) and `securability-engineering-review` (code scoring) — use before code is written, not to produce or score code.
license: CC-BY-SA-4.0
---

# PRD Securability Enhancement (FIASSE v1.3.0 / SSEM + ASVS)

Enhance product requirement content so each feature includes explicit securability requirements, implementation notes, and measurable acceptance criteria aligned to OWASP ASVS v5.0.0 and FIASSE v1.3.0 / SSEM. This is the requirements-stage member of the FIASSE skill trio — the counterparts are [`securability-engineering`](../securability-engineering/SKILL.md) (code generation) and [`securability-engineering-review`](../securability-engineering-review/SKILL.md) (code scoring).

Apply the workflow below to any feature spec, user story, epic breakdown, BRD, or backlog item the user provides.

## When to Use

- User pastes a PRD, product spec, feature spec, requirements doc, BRD, or epic breakdown and asks for security input
- User pastes user stories, backlog items, acceptance criteria, or a definition of done and asks to make them securable
- User asks to choose or apply an ASVS level (1, 2, or 3) for a feature or product
- User asks to map features to ASVS controls or to add SSEM annotations
- Product requirements need securability-by-design before implementation starts

## Steps

1. **Parse Features** — Extract and normalize each feature into a testable requirement form. Treat user stories, epic items, backlog tickets, and PRD sections uniformly as features.

2. **Choose ASVS Level First** — Select the baseline ASVS assurance level (1, 2, or 3) and record rationale (data sensitivity, exposure, regulatory context, blast radius). Per-feature overrides are allowed but should be explicit.

3. **Map Features to ASVS** — For each feature, identify applicable ASVS sections and requirements from the [OWASP ASVS v5.0.0 — English chapters](https://github.com/OWASP/ASVS/tree/v5.0.0/5.0/en), filtered by the chosen level.

4. **Close Requirement Gaps** — Mark coverage as Covered / Partial / Missing / Not Applicable, then add missing requirement statements directly to the feature requirements. Where a catalog control (NIST SP 800-53, ISO/IEC 27001 Annex A, PCI DSS) is in scope, translate it into a requirement with acceptance criteria instead of passing the control ID through as a requirement (§6.1.3). Record which layer satisfies each control and the code's residual share.

5. **Add Compact Securability Notes** — For each feature, write a brief paragraph capturing only the material SSEM sub-attributes and FIASSE v1.3.0 principles that shape implementation. Cover, when relevant:

   **Maintainability** (§3.2.1)
   - *Analyzability, Modifiability, Testability* — call out where the feature should remain easy to reason about, change, and test as it grows
   - *Observability* — what structured logging, metrics, and decision reasons must exist for this feature

   **Trustworthiness** (§3.2.2)
   - *Confidentiality* — sensitivity classification, data minimization, access scope
   - *Accountability* — auditable events tied to the responsible principal
   - *Authenticity* — prefer **defendable authentication** terminology over "secure authentication"; identify mutual-auth and MFA touchpoints

   **Reliability** (§3.2.3)
   - *Availability* — timeouts, rate limits, redundancy expectations
   - *Integrity* — input validation, parameterized queries, tamper detection
   - *Resilience* — failure modes, graceful degradation, recovery expectations

   **FIASSE Principles**
   - **Boundary Control** (§4.3) — where the feature's trust boundaries are and what control belongs at each
      - **Canonical Input Handling** (§4.4.1) — canonicalize → validate → sanitize at every boundary
   - **Canonical Parsing Principle** (§4.4.1.1) — the explicit input schema per operation, which fields the feature parses, fail-closed behavior, and the stated log-or-reject policy for unknown fields
   - **Isolated Integrity Principle** (§4.4.1.2) — which values must be established server-side (identity, permissions, pricing, balances, object state) and never set or biased by the client
   - **Transparency Principle** (§2.6) — the structured logging, metrics, and decision-reason capture that make Observability real
   - **Principle of Least Astonishment** (§2.7) — predictable defaults, naming, and error semantics

6. **Self-Check** — Run the per-feature checks in [`references/checklist.md`](references/checklist.md) before emitting the enhanced PRD. Items left unchecked become entries in the open-gaps section.

7. **Emit Enhanced PRD Content** — Produce the ASVS level decision, the coverage matrix, the updated feature specs with securability notes, the cross-cutting requirements, and the open gaps.

## Output

Deliver a concise enhanced PRD that includes:
- ASVS level selection and rationale
- Feature-to-ASVS coverage matrix (gap summary)
- Per-feature updated requirements with compact securability notes (SSEM sub-attributes touched + FIASSE principles applied)
- Cross-cutting securability requirements, including observability and transparency expectations
- Open gaps and assumptions, including any items left unchecked from the per-feature checklist

## References

- [FIASSE v1.3.0 — securable_framework.md](https://github.com/OWASP/FIASSE/blob/v1.3.0/docs/securable_framework.md) — authoritative framework specification; pin requirement annotations to this version
- [OWASP ASVS v5.0.0 — English chapters](https://github.com/OWASP/ASVS/tree/v5.0.0/5.0/en) — feature-aligned security requirements (pin to this tag for stable requirement IDs)
- [§2.1–§2.7 Foundational Principles](https://github.com/OWASP/FIASSE/blob/v1.3.0/docs/securable_framework.md) — Securable Paradigm, Resiliently Add Computing Value, Security Mission, Quality-Security Relationship, Aligning Security with Development, Transparency, Principle of Least Astonishment
- [§3.2.1–§3.2.3 SSEM Pillars and sub-attributes](https://github.com/OWASP/FIASSE/blob/v1.3.0/docs/securable_framework.md) — Maintainability (including Observability), Trustworthiness, Reliability
- [§4.3 Boundary Control Principle](https://github.com/OWASP/FIASSE/blob/v1.3.0/docs/securable_framework.md)
- [§4.4.1 Canonical Input Handling, §4.4.1.1 Canonical Parsing Principle, §4.4.1.2 Isolated Integrity Principle](https://github.com/OWASP/FIASSE/blob/v1.3.0/docs/securable_framework.md)
- [§6.1 Security Controls in the Code Creation Process](https://github.com/OWASP/FIASSE/blob/v1.3.0/docs/securable_framework.md) — the control-as-requirement and control-as-protection fallacies, and the requirements process as the corrective
- [§6.2 Actionable Security Intelligence Principle](https://github.com/OWASP/FIASSE/blob/v1.3.0/docs/securable_framework.md)
- [`references/checklist.md`](references/checklist.md) — per-feature PRD-enhancement self-check
