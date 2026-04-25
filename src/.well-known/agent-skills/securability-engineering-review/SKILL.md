---
name: securability-engineering-review
description: Review and score an existing codebase, repository, pull request, or merge request against the FIASSE v1.0.4 Securable Software Engineering Model (SSEM). Use when a user asks to review, audit, assess, score, grade, or evaluate code for securable engineering qualities; produce an SSEM scorecard or evaluation report; perform a FIASSE-aligned code or PR review; or establish a security posture baseline for a project. Scores the ten SSEM sub-attributes across Maintainability (Analyzability, Modifiability, Testability, Observability), Trustworthiness (Confidentiality, Accountability, Authenticity), and Reliability (Availability, Integrity, Resilience). This is the review/analysis counterpart to the `securability-engineering` code-generation skill — use this skill for evaluating existing code, not for generating new code.
license: CC-BY-SA-4.0
---

# Securability Engineering Review (FIASSE v1.0.4 / SSEM Scoring)

Review and score code, repositories, and pull/merge requests against the FIASSE v1.0.4 Securable Software Engineering Model (SSEM). This is the review counterpart to `securability-engineering` (which generates new code) — use this skill for evaluating existing code.

For scoring and reporting, this skill is authoritative. If other repository materials use older FIASSE/SSEM attribute groupings (e.g. merged "Authenticity & Accountability", no Observability sub-attribute, or Integrity under Trustworthiness), follow the v1.0.4-aligned model in this file.

Source of truth for alignment:
- Framework: [FIASSE v1.0.4 — securable_framework.md](https://github.com/Xcaciv/securable_software_engineering/blob/v1.0.4/docs/securable_framework.md) (pinned)
- Informative companion prompt: [SSEM-analysis.prompt.md on `main`](https://raw.githubusercontent.com/Securability-Engineering/securable-framework-supplement/refs/heads/main/examples/SSEM-analysis/SSEM-analysis.prompt.md) — moving target; use this SKILL.md as the authoritative scoring contract.

## SSEM v1.0.4 Structure

Three pillars, ten sub-attributes:

- **Maintainability** — Analyzability, Modifiability, Testability, **Observability**
- **Trustworthiness** — Confidentiality, Accountability, Authenticity
- **Reliability** — Availability, Integrity, Resilience

Notable deltas from earlier SSEM drafts:
- *Observability* is a first-class Maintainability sub-attribute (not a Trustworthiness concern).
- *Accountability* and *Authenticity* are separate sub-attributes under Trustworthiness (no longer merged).
- *Integrity* sits under Reliability only (covers both system and data integrity); it is not duplicated under Trustworthiness.

## Guiding Principles (FIASSE v1.0.4)

Use these principles as interpretive lenses when assigning scores and writing findings:

1. **The Securable Paradigm** (§2.1) — no static "secure" state exists; systems must be designed for adaptive resilience and continuous improvement.
2. **Resiliently Add Computing Value** (§2.2) — software must meet functional requirements while possessing the securable qualities that enable long-term integrity.
3. **Security Mission** (§2.3) — reduce the probability of material impact from cyber events; complete breach elimination is not a practical goal.
4. **First Principle Alignment** (§2.4) — ground security in software engineering first principles rather than security-specific jargon.
5. **Transparency Principle** (§2.5) — design systems so internal state and behavior remain observable to authorized parties.
6. **Principle of Least Astonishment** (§2.6) — behavior should match reasonable expectations.
7. **Boundary Control Principle** (§4.3) — enforce control at trust boundaries; preserve flexibility in the interior.
8. **Canonical Input Handling** (§4.4.1) — canonicalize, validate, and sanitize inputs at trust boundaries.
9. **Request Surface Minimization** (§4.4.1.1) — process only explicitly expected request values.
10. **Derived Integrity Principle** (§4.4.1.2) — calculate critical state server-side; never adopt it from client-supplied context.
11. **Actionable Security Intelligence** (§6.1) — convert raw security output into prioritized, engineering-grounded direction.

## Scoring Framework

Each sub-attribute is scored **0-10**. Pillar scores are calculated using weighted sub-attribute scores. The overall SSEM score is the simple average of the three pillar scores.

### Pillar Weights

| Pillar | Weight | Sub-Attributes (Weight) |
|--------|--------|------------------------|
| **Maintainability** | 33% | Analyzability (30%), Modifiability (25%), Testability (25%), Observability (20%) |
| **Trustworthiness** | 34% | Confidentiality (35%), Accountability (30%), Authenticity (35%) |
| **Reliability** | 33% | Availability (30%), Integrity (35%), Resilience (35%) |

**Overall SSEM Score** = (Maintainability + Trustworthiness + Reliability) / 3

### Scoring Rubric Anchors

- **10**: exemplary implementation
- **8**: strong implementation with minor issues
- **6**: adequate implementation with notable gaps
- **4**: weak implementation with significant issues
- **2**: minimal or poor implementation

Interpolation between anchor points is allowed when justified by evidence, but scoring must remain consistent with the rubric language.

### Grading Scale

| Score Range | Grade | Description |
|-------------|-------|-------------|
| 9.0 - 10.0 | **Excellent** | Exemplary implementation, minimal improvement needed |
| 8.0 - 8.9 | **Good** | Strong implementation, minor improvements beneficial |
| 7.0 - 7.9 | **Adequate** | Functional but notable improvement opportunities exist |
| 6.0 - 6.9 | **Fair** | Basic requirements met, significant improvements needed |
| < 6.0 | **Poor** | Critical deficiencies requiring immediate attention |

## Required Inputs

If the working directory is itself the project under review, infer what you can from the codebase and only ask for context the repository does not reveal. Otherwise, ask the user for the following before scoring:
- Project name and short description
- Programming language(s) and framework(s)
- Architecture overview
- Repository URL or codebase access
- Existing documentation, test results, or prior security assessments

## Steps

1. **Gather Project Information** — Request missing project metadata and context before scoring when necessary.

2. **Scope & Context** — Establish language/framework, system type, data sensitivity, exposure, lifecycle stage, and team context.

3. **Evaluate Maintainability**:
   - **Analyzability** — "The degree of effectiveness and efficiency with which it is possible to assess the impact on a product or system of an intended change." Look at volume, duplication, unit size, cyclomatic complexity, comment density, and time-to-understand.
   - **Modifiability** — "The degree to which a product or system can be effectively and efficiently modified without introducing defects." Look at module coupling, change impact size, regression rate, and centralization of security-relevant code.
   - **Testability** — "The degree of effectiveness and efficiency with which test criteria can be established for a system." Look at coverage, unit test density, mocking complexity, and component independence.
   - **Observability** — The degree to which internal system state can be inferred from external outputs. Look at structured logging, metrics/traces, decision-reason capture, auditable security-relevant events, and UI feedback — all tied to business context (supports the Transparency Principle).

4. **Evaluate Trustworthiness**:
   - **Confidentiality** — "Property that information is not made available or disclosed to unauthorized individuals." Look at data protection, secrets management, encryption at rest/in transit, and access control enforcement.
   - **Accountability** — Property that every action can be attributed to a specific, identified entity. Look at principal management, audit logging coverage, traceability, non-repudiation strength.
   - **Authenticity** — "The property that an entity is what it claims to be." Score against the FIASSE-preferred standard of **defendable authentication**: established mechanisms (no rolled-from-scratch auth), integrity-protected tokens/sessions, MFA at appropriate points, and verified identity flows. Look at credential handling, MFA coverage, signed-token usage, and resilience of registration/recovery flows.

5. **Evaluate Reliability**:
   - **Availability** — "Property of being accessible and usable on demand by an authorized entity." Look at uptime posture, thread safety, deadlock prevention, redundancy, and scalability.
   - **Integrity** — Property of accuracy and completeness at both the system and data levels. Look at input validation, output encoding, canonical input handling, derived-integrity patterns, tamper detection, and checksum/hash validation.
   - **Resilience** — Ability to continue operating during and after component failure. Look at exception handling, graceful degradation, error recovery, fault tolerance, circuit breakers, and resource management.

6. **Document Evidence** — Reference actual code patterns, files, architecture choices, test posture, and operational safeguards.

7. **Calculate Scores**:
   - Score each sub-attribute 0-10
   - Calculate each weighted pillar score
   - Calculate the overall SSEM score as the average of the three pillar scores
   - Assign the overall grade using the grading scale above

8. **Produce the Official Report** — Output the report using the required three-part structure below.

## Output Requirements

The report must contain exactly these three parts.

### Part 1: SSEM Score Summary

Use an ASCII report block that includes:
- Project name and date
- Overall SSEM score, grade, and brief status assessment
- Pillar summary table with Maintainability, Trustworthiness, and Reliability
- Maintainability breakdown table (Analyzability, Modifiability, Testability, Observability) with weights, scores, and short assessments
- Trustworthiness breakdown table (Confidentiality, Accountability, Authenticity) with weights, scores, and short assessments
- Reliability breakdown table (Availability, Integrity, Resilience) with weights, scores, and short assessments
- Top strengths section with three concrete strengths
- Top improvement opportunities section with three concrete weaknesses/recommendations

### Part 2: Detailed Findings

For each pillar, provide:
- Pillar name, score, and grade
- **Strengths** with specific evidence or observed patterns
- **Weaknesses** with concrete examples, locations, or architecture impacts
- **Recommendations** using this structure:

1. **[Recommendation Title]** (Priority: High/Medium/Low)
   - **Issue:** specific problem
   - **Impact:** effect on pillar score
   - **Solution:** actionable remediation steps, referencing the FIASSE principle it supports when applicable (e.g. Boundary Control, Derived Integrity, Transparency)
   - **Expected Improvement:** +[X.X] points

### Part 3: Appendix A — Evaluation Checklist

Use the canonical 50-item checklist from [`./references/checklist.md`](./references/checklist.md). Render every item with a checkbox marker (`[x]` pass, `[ ]` fail/unverified) and preserve the stable item IDs (e.g. `M-AN-1`, `T-CO-3`, `R-IN-5`) so results are comparable across runs and projects.

The checklist groups 50 items as:
- **Maintainability** — 20 items (Analyzability, Modifiability, Testability, Observability — 5 each)
- **Trustworthiness** — 15 items (Confidentiality, Accountability, Authenticity — 5 each)
- **Reliability** — 15 items (Availability, Integrity, Resilience — 5 each)

Include a checklist summary with:
- Maintainability pass count and percentage
- Trustworthiness pass count and percentage
- Reliability pass count and percentage
- Overall pass count and percentage (out of 50)

## Required Evaluation Criteria

Always:
- Be specific and reference observable code or architecture evidence
- Support scores with concrete examples
- Keep recommendations actionable and implementation-oriented, tying them back to a named FIASSE principle where useful
- Consider project size, domain, architecture, and intended use
- Apply the pillar and sub-attribute weights exactly as defined above
- Avoid inventing coverage, architecture, or operational controls when evidence is missing

If evidence is insufficient, state the limitation explicitly and score conservatively.

## OWASP & FIASSE References

- [OWASP FIASSE v1.0.4 — securable_framework.md](https://github.com/Xcaciv/securable_software_engineering/blob/v1.0.4/docs/securable_framework.md) — Framework for Integrating Application Security into Software Engineering
- [FIASSE RFC on main](https://github.com/Xcaciv/securable_software_engineering/blob/main/docs/FIASSE-RFC.md) — evolving normative text (pin to v1.0.4 for scoring stability)
- ISO/IEC 25010:2011 — Software quality models (Maintainability, Reliability definitions)
- RFC 4949 — Internet Security Glossary (Confidentiality, Availability definitions)
- [OWASP ASVS v5.0.0 — English chapters](https://github.com/OWASP/ASVS/tree/v5.0.0/5.0/en) — feature-aligned security requirements for cross-referencing Trustworthiness and Reliability evidence
- OWASP Code Review Guide

## Invocation Behavior

When invoked:
- Ask for missing project information if the repository context is incomplete
- Evaluate the codebase against the v1.0.4-aligned scoring model in this file
- Produce the report in the required three-part format
- Use repository evidence over assumptions
- Prefer FIASSE-native terminology (e.g. "defendable authentication", "canonical input handling", "derived integrity") when describing findings
