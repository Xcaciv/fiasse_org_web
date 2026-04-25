---
name: securability-engineering
description: Generate, scaffold, write, refactor, or harden code so the output is securable by default per FIASSE v1.0.4 and the Securable Software Engineering Model (SSEM). Use when a user asks to write, build, create, implement, scaffold, stub out, refactor, or harden code — especially security-sensitive components such as authentication, authorization, input handling, validation, API endpoints, request handlers, data access, cryptography, logging, error handling, or anything crossing a trust boundary. Applies the ten SSEM sub-attributes across Maintainability (Analyzability, Modifiability, Testability, Observability), Trustworthiness (Confidentiality, Accountability, Authenticity), and Reliability (Availability, Integrity, Resilience), plus Transparency, Boundary Control, Canonical Input Handling, Request Surface Minimization, Derived Integrity, and Least Astonishment. This is the code-generation counterpart to `securability-engineering-review` — use this skill to produce new code, not to score existing code.
license: CC-BY-SA-4.0
---

# Securability Engineering — Code Generation Wrapper

Apply FIASSE v1.0.4 / SSEM as engineering constraints when generating, scaffolding, refactoring, or hardening code, so the output embodies securable qualities from the start. This is the code-generation counterpart to [`securability-engineering-review`](../securability-engineering-review/SKILL.md), which scores existing code against the same model.

## When to Use

- Generating new code (functions, modules, services, APIs, handlers)
- Scaffolding projects or features
- Refactoring or hardening existing code for securability
- User asks for "secure code", "securable code", "FIASSE-compliant code", "make this safer", "harden this"
- Generating security-sensitive components: authentication (prefer **defendable authentication**), authorization, input handling, data access, cryptography, logging, error handling
- Writing code that crosses a trust boundary

## Reference Inputs

- **FIASSE v1.0.4** — [securable_framework.md](https://github.com/Xcaciv/securable_software_engineering/blob/v1.0.4/docs/securable_framework.md) is the authoritative source for principles, sub-attribute definitions, and section numbering used throughout this skill.
- **OWASP ASVS v5.0.0** — [English chapters](https://github.com/OWASP/ASVS/tree/v5.0.0/5.0/en) provide feature-aligned security requirements. Map the feature being generated to the relevant chapter (e.g. V3 Session Management, V4 Access Control, V5 Validation/Sanitization) and treat the applicable requirements as implementation constraints.

## SSEM Attribute Enforcement

Every code generation output must satisfy these **ten** sub-attributes.

### Maintainability ([§3.2.1](https://github.com/Xcaciv/securable_software_engineering/blob/v1.0.4/docs/securable_framework.md))

| Attribute | Enforcement Rule |
|-----------|-----------------|
| **Analyzability** | Methods ≤ 30 LoC. Cyclomatic complexity < 10. Clear, descriptive naming. No dead code. Comments at trust boundaries and complex logic explain *why*. |
| **Modifiability** | Loose coupling via interfaces / dependency injection. No static mutable state. Security-sensitive logic (auth, crypto, validation) centralized in dedicated modules, not scattered. Configuration externalized. |
| **Testability** | All public interfaces testable without modifying the code under test. Dependencies injectable / mockable. Security controls (auth, validation, crypto) isolated for dedicated test suites. |
| **Observability** | Structured logging with consistent fields at trust boundaries and security-relevant events. Decision-reason capture for allow / deny / redact outcomes. Metrics and traces for critical paths. Health and readiness signals for deployable units. Error messages convey enough context for diagnosis without leaking sensitive data (Transparency Principle, §2.5). |

### Trustworthiness ([§3.2.2](https://github.com/Xcaciv/securable_software_engineering/blob/v1.0.4/docs/securable_framework.md))

| Attribute | Enforcement Rule |
|-----------|-----------------|
| **Confidentiality** | Sensitive data classified and handled at the type level. Least-privilege data access. No secrets in code, logs, or error messages. Encryption at rest and in transit where applicable. Data minimization — collect and retain only what is needed. |
| **Accountability** | Security-sensitive actions logged with structured data (who, what, where, when). Audit trails append-only. Auth events (login, logout, failure) and authz decisions (grant, deny) recorded with the responsible principal. No sensitive data in logs. |
| **Authenticity** | Use established, defendable authentication mechanisms. Verify token / session integrity (signed JWTs, secure cookies). Mutually authenticate service-to-service calls. Support non-repudiation — link actions irrefutably to entities. |

### Reliability ([§3.2.3](https://github.com/Xcaciv/securable_software_engineering/blob/v1.0.4/docs/securable_framework.md))

| Attribute | Enforcement Rule |
|-----------|-----------------|
| **Availability** | Enforce resource limits (memory, connections, file handles). Configure timeouts for all external calls. Rate-limit where appropriate. Thread-safe design for concurrent code. Graceful degradation for non-critical failures. |
| **Integrity** | Validate input at every trust boundary: canonicalize → sanitize → validate (§4.4.1). Output-encode when crossing trust boundaries. Use parameterized queries exclusively. Apply the **Derived Integrity Principle** (§4.4.1.2): never accept client-supplied values for server-owned state. Apply **Request Surface Minimization** (§4.4.1.1): extract only specific expected values from requests. Applies at both system and data integrity levels. |
| **Resilience** | Defensive coding: anticipate out-of-bounds input and handle gracefully. Specific exception handling — no bare catch-all. Constrain null handling to input checks and DB communication paths. Use immutable data structures in concurrent code. Ensure no resource leaks — proper disposal patterns. Graceful degradation under load. Circuit breakers and retries with backoff for external dependencies where warranted. |

## Trust Boundary Handling (§4.3, Boundary Control Principle)

Apply the **turtle analogy**: hard shell at trust boundaries, flexible interior.

- Identify trust boundaries in the generated code (user input, API calls, DB queries, file I/O, service-to-service, cross-tenant)
- Apply strict input handling (canonicalization → sanitization → validation) at every boundary entry point (§4.4.1)
- Apply Request Surface Minimization (§4.4.1.1) at every inbound boundary — accept only explicitly expected values
- Apply Derived Integrity (§4.4.1.2) for anything that influences authorization, pricing, identity, or server-owned state
- Log trust-boundary crossings with validation outcomes and decision reasons (Transparency Principle, §2.5)
- Keep interior logic flexible — strict control belongs at the boundary, not scattered everywhere

## Foundational Principles (Quick Reference)

These FIASSE v1.0.4 principles inform every generated unit of code. Full text and rationale are in [`references/principles.md`](references/principles.md).

- §2.1 Securable Paradigm · §2.2 Resiliently Add Computing Value · §2.3 Security Mission · §2.4 First Principle Alignment · §2.5 Transparency Principle · §2.6 Principle of Least Astonishment
- §4.3 Boundary Control · §4.4.1 Canonical Input Handling · §4.4.1.1 Request Surface Minimization · §4.4.1.2 Derived Integrity
- §6.1 Actionable Security Intelligence
- Plus a project-specific rule: **Dependency Hygiene** for Trustworthiness and Reliability — minimize, monitor, pin

## Steps

When generating code, apply this sequence:

1. **Identify Context** — Determine language / framework, system type, data sensitivity, exposure level, trust boundaries, and feature category for the request.

2. **Map Feature Requirements to ASVS** — Identify the relevant chapter(s) of [OWASP ASVS v5.0.0](https://github.com/OWASP/ASVS/tree/v5.0.0/5.0/en) and treat the applicable requirements as implementation constraints.

3. **Apply SSEM Constraints** — Enforce the rules in the Attribute Enforcement tables above for each piece of generated code. Observability is a first-class Maintainability sub-attribute in v1.0.4 — treat it accordingly.

4. **Handle Trust Boundaries** — Apply Boundary Control (§4.3), Canonical Input Handling (§4.4.1), Request Surface Minimization (§4.4.1.1), and Derived Integrity (§4.4.1.2) at every boundary the generated code crosses.

5. **Select Dependencies Deliberately** — For each external dependency:
   - Prefer latest stable versions unless a compatibility constraint is explicitly known
   - Prefer libraries with low known CVE / CWE exposure and no unresolved critical / high issues in current releases
   - Prefer mature, actively maintained projects with recent releases and clear security response practices
   - Minimize dependency footprint; avoid adding libraries when standard library / framework capabilities are sufficient
   - Pin versions and include lockfile guidance to support reproducible and reviewable builds

6. **Instrument Transparency** — Add structured logging at security-sensitive points; capture decision reasons for allow / deny / redact outcomes; expose health metrics where applicable; emit audit trail events for auth / authz. Follow the Transparency Principle (§2.5) to satisfy Observability.

7. **Generate Code** — Produce the code with all constraints applied. The result should be:
   - Small, single-purpose functions with clear names (Analyzability, Least Astonishment)
   - Loosely coupled with injectable dependencies (Modifiability, Testability)
   - Observable via structured logging, metrics, and decision-reason capture (Observability, Transparency)
   - Defensive at trust boundaries, flexible inside (Integrity, Resilience, Boundary Control)
   - Aligned to applicable ASVS feature requirements
   - Auditable for security-sensitive actions (Accountability)

8. **Self-Check** — Before returning, verify the generated code against the canonical [`references/checklist.md`](references/checklist.md). Note any items skipped (with justification) or items that need follow-up work.

## Output

Generated code that embodies FIASSE v1.0.4 securable qualities. When the generation is non-trivial, append a short **Securability Notes** section listing:

- Which SSEM sub-attributes were actively enforced (explicitly naming Observability where instrumented)
- Which FIASSE principles were applied (e.g. Boundary Control, Derived Integrity, Transparency, Least Astonishment)
- Applicable ASVS chapter or requirement IDs
- Dependency-selection rationale (version and risk posture)
- Any trade-offs made

## References

- [FIASSE v1.0.4 — securable_framework.md](https://github.com/Xcaciv/securable_software_engineering/blob/v1.0.4/docs/securable_framework.md) — authoritative framework specification
- [FIASSE RFC (main)](https://github.com/Xcaciv/securable_software_engineering/blob/main/docs/FIASSE-RFC.md) — evolving normative text; pin to v1.0.4 for stable generation constraints
- [OWASP ASVS v5.0.0 — English chapters](https://github.com/OWASP/ASVS/tree/v5.0.0/5.0/en) — feature-aligned security requirements
- [`references/principles.md`](references/principles.md) — full text of the FIASSE v1.0.4 principles applied by this skill
- [`references/checklist.md`](references/checklist.md) — self-check used in Step 8
- ISO/IEC 25010:2011 — Software quality models (Maintainability, Reliability definitions)
- RFC 4949 — Internet Security Glossary (Confidentiality, Availability definitions)
