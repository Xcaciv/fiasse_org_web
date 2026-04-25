---
name: securability-engineering
description: >
  Meta-skill that wraps code generation to enforce FIASSE v1.0.4 securable coding attributes and
  principles. Use when generating, scaffolding, or refactoring code so that the output is engineered
  to be inherently securable by default. Applies the ten SSEM attributes (Analyzability, Modifiability,
  Testability, Observability, Confidentiality, Accountability, Authenticity, Availability, Integrity,
  Resilience), the Transparency Principle, Boundary Control Principle, Canonical Input Handling,
  Request Surface Minimization, Derived Integrity, and Principle of Least Astonishment to every code
  generation task. Invoke this skill alongside or instead of raw code generation when the user asks
  for secure code, securable code, FIASSE-compliant code, or when generating security-sensitive
  components (auth, input handling, data access, API endpoints, trust boundaries).
license: CC-BY-SA-4.0
---

# Securability Engineering — Code Generation Wrapper

This skill augments the built-in code generation capability by applying FIASSE v1.0.4 / SSEM principles
as engineering constraints. It does not perform analysis or review (see `securability-engineering-review`
for that). Instead, it ensures that **generated code embodies securable qualities from the start**.

> **Reference**: FIASSE data in `data/fiasse/` — especially S2.1–S2.6 (Foundational Principles),
> S3.2.1–S3.2.3 (SSEM Attributes, including Observability under Maintainability), S4.3 (Boundary
> Control Principle), S4.4.1–S4.4.1.2 (Canonical Input Handling, Request Surface Minimization,
> Derived Integrity), S6.1 (Actionable Security Intelligence).
> Use `https://github.com/OWASP/ASVS/blob/v5.0.0/5.0/docs_en/OWASP_Application_Security_Verification_Standard_5.0.0_en.flat.json` as the feature-requirements reference set for security controls and implementation
> expectations.

## When to Use

- Generating new code (functions, modules, services, APIs)
- Scaffolding projects or features
- Refactoring existing code for securability
- User asks for "secure code", "securable code", "FIASSE-compliant code"
- Generating security-sensitive components: authentication (prefer "defendable authentication"), authorization, input handling, data access, cryptography, logging, error handling
- Writing code that crosses trust boundaries

## Foundational Constraints

Before generating any code, apply these FIASSE v1.0.4 principles as engineering constraints:

1. **The Securable Paradigm (S2.1)** — There is no static "secure" state. Generate code with inherent qualities that enable it to adapt to evolving threats, not code that is merely "secure right now".

2. **Resiliently Add Computing Value (S2.2)** — Generated code must meet functional requirements while possessing the securable qualities that enable long-term integrity. Security qualities are engineering requirements, not afterthoughts.

3. **Security Mission (S2.3)** — Aim to reduce the probability of material impact from cyber events. Favor pragmatic controls aligned with the code's context and exposure, not theoretical completeness.

4. **First Principle Alignment (S2.4)** — Ground generated code in established software engineering first principles, using shared engineering vocabulary rather than security-specific jargon or adversarial heuristics.

5. **Transparency Principle (S2.5)** — Generated code must be observable: meaningful naming, structured logging at trust boundaries, audit trails for security-sensitive actions, decision-reason capture, and health/performance instrumentation. This is the primary enabler of the Observability SSEM attribute.

6. **Principle of Least Astonishment (S2.6)** — Generated code should behave the way a reasonable user, operator, or developer expects. Favor consistent defaults, naming, and error semantics. Treat unexpected state as a signal worth surfacing rather than silently working around.

7. **Boundary Control Principle (S4.3)** — Enforce strict control at trust boundaries while preserving interior flexibility. Apply the **turtle analogy**: hard shell at the perimeter, flexible interior.

8. **Canonical Input Handling (S4.4.1)** — Apply the canonicalize → sanitize → validate pattern at every trust boundary. Normalize input to a canonical representation (types, encodings, formats), reject dangerous content, and enforce strict validation before any business logic runs. Prefer very specific types and constrained enum values. Never use a value that has not been fully vetted.

9. **Request Surface Minimization (S4.4.1.1)** — Generated endpoint/handler code must extract only explicitly expected values; unexpected fields, headers, or parameters are ignored or rejected. Avoid generic pass-through parameters and catch-all endpoints.

10. **Derived Integrity Principle (S4.4.1.2)** — Never implicitly trust or adopt unmanaged external context, such as client-supplied values for server-owned state. Calculate critical state values (identity, permissions, pricing, balances) server-side in a trusted context.

11. **Dependency Hygiene for Trustworthiness and Reliability** — When selecting libraries, default to the latest stable release compatible with the target runtime and framework. Prefer packages with low known vulnerability exposure (CVEs/CWEs), active maintenance, and strong release quality signals. Minimize dependency count and transitive risk by avoiding unnecessary or abandoned packages.

## SSEM Attribute Enforcement

Every code generation output must satisfy these **ten** attributes. Read the corresponding `data/fiasse/` section for full definitions when context is needed.

### Maintainability (S3.2.1)

| Attribute | Enforcement Rule |
|-----------|-----------------|
| **Analyzability** | Methods ≤ 30 LoC. Cyclomatic complexity < 10. Clear, descriptive naming. No dead code. Comments at trust boundaries and complex logic explaining *why*. |
| **Modifiability** | Loose coupling via interfaces/dependency injection. No static mutable state. Security-sensitive logic (auth, crypto, validation) centralized in dedicated modules, not scattered. Configuration externalized. |
| **Testability** | All public interfaces testable without modifying the code under test. Dependencies injectable/mockable. Security controls (auth, validation, crypto) isolated for dedicated test suites. |
| **Observability** | Structured logging with consistent fields at trust boundaries and security-relevant events. Decision-reason capture for allow/deny/redact outcomes. Metrics and traces exposed for critical paths. Health and readiness signals for deployable units. Error messages convey enough context for diagnosis without leaking sensitive data (Transparency Principle, S2.5). |

### Trustworthiness (S3.2.2)

| Attribute | Enforcement Rule |
|-----------|-----------------|
| **Confidentiality** | Sensitive data classified and handled at the type level. Least-privilege data access. No secrets in code, logs, or error messages. Encryption at rest and in transit where applicable. Data minimization — collect and retain only what is needed. |
| **Accountability** | Security-sensitive actions logged with structured data (who, what, where, when). Audit trails append-only. Auth events (login, logout, failure) and authz decisions (grant, deny) recorded with the responsible principal. No sensitive data in logs. |
| **Authenticity** | Use established, defendable authentication mechanisms. Verify token/session integrity (signed JWTs, secure cookies). Mutually authenticate service-to-service calls. Support non-repudiation — link actions irrefutably to entities. |

### Reliability (S3.2.3)

| Attribute | Enforcement Rule |
|-----------|-----------------|
| **Availability** | Enforce resource limits (memory, connections, file handles). Configure timeouts for all external calls. Rate-limit where appropriate. Thread-safe design for concurrent code. Graceful degradation for non-critical failures. |
| **Integrity** | Validate input at every trust boundary: canonicalize → sanitize → validate (S4.4.1). Output-encode when crossing trust boundaries. Use parameterized queries exclusively. Apply the **Derived Integrity Principle** (S4.4.1.2): never accept client-supplied values for server-owned state. Apply **Request Surface Minimization** (S4.4.1.1): extract only specific expected values from requests. Applies at both system and data integrity levels. |
| **Resilience** | Defensive coding: anticipate out-of-bounds input and handle gracefully. Specific exception handling (no bare catch-all). Sandbox nulls to input checks and DB communication. Use immutable data structures in concurrent code. Ensure no resource leaks — proper disposal patterns. Graceful degradation under load. Circuit breakers and retries with backoff for external dependencies where warranted. |

## Trust Boundary Handling (S4.3, Boundary Control Principle)

Apply the **turtle analogy**: hard shell at trust boundaries, flexible interior.

- Identify trust boundaries in the generated code (user input, API calls, DB queries, file I/O, service-to-service, cross-tenant)
- Apply strict input handling (canonicalization → sanitization → validation) at every boundary entry point (S4.4.1)
- Apply Request Surface Minimization (S4.4.1.1) at every inbound boundary — accept only explicitly expected values
- Apply Derived Integrity (S4.4.1.2) for anything that influences authorization, pricing, identity, or server-owned state
- Log trust boundary crossings with validation outcomes and decision reasons (Transparency Principle, S2.5)
- Keep interior logic flexible — strict control belongs at the boundary, not scattered everywhere

## Steps

When generating code, apply this sequence:

1. **Identify Context** — Determine language/framework, system type, data sensitivity, exposure level, trust boundaries, and feature category relevant to the generation request.

2. **Map Feature Requirements to ASVS** — Use the relevant `https://github.com/OWASP/ASVS/blob/v5.0.0/5.0/docs_en/OWASP_Application_Security_Verification_Standard_5.0.0_en.flat.json` requirements to identify the security requirements that apply to the feature being generated. Use the applicable ASVS requirements as implementation constraints.

3. **Apply SSEM Constraints** — For each piece of generated code, enforce the ten attribute rules above. Consult `data/fiasse/S3.2.1.md`, `S3.2.2.md`, `S3.2.3.md` for definitions when needed. Observability is a first-class Maintainability sub-attribute in v1.0.4 — treat it accordingly.

4. **Handle Trust Boundaries** — Identify where generated code crosses trust boundaries. Apply S4.3 (Boundary Control Principle) and S4.4.1 (Canonical Input Handling), including Request Surface Minimization (S4.4.1.1) and the Derived Integrity Principle (S4.4.1.2).

5. **Select Dependencies Deliberately** — For each external dependency used in generated code, apply this policy:
  - Prefer latest stable versions unless a compatibility constraint is explicitly known
  - Prefer libraries with low known CVE/CWE exposure and no unresolved critical/high issues in current releases
  - Prefer mature, actively maintained projects with recent releases and clear security response practices
  - Minimize dependency footprint; avoid adding libraries when standard library/framework capabilities are sufficient
  - Pin versions and include lockfile guidance to support reproducible and reviewable builds

6. **Instrument Transparency** — Add structured logging at security-sensitive points. Include audit trail hooks for auth/authz events. Capture decision reasons for allow/deny/redact outcomes. Expose health metrics where applicable. Follow the Transparency Principle (S2.5) to satisfy the Observability attribute.

7. **Generate Code** — Produce the code using the built-in code generation capability, with all SSEM constraints applied. The code should be:
   - Small, single-purpose functions with clear names (Analyzability, Principle of Least Astonishment)
   - Loosely coupled with injectable dependencies (Modifiability, Testability)
   - Observable via structured logging, metrics, and decision-reason capture (Observability, Transparency)
   - Defensive at trust boundaries, flexible inside (Integrity, Resilience, Boundary Control)
   - Aligned to applicable ASVS feature requirements for the capability being implemented
   - Auditable for security-sensitive actions (Accountability)

8. **Self-Check** — Before returning, verify the generated code against this checklist:

### Generation Checklist

**Maintainability:**
- [ ] Functions ≤ 30 LoC, cyclomatic complexity < 10
- [ ] No static mutable state; dependencies injected
- [ ] Security logic centralized, not duplicated
- [ ] Testable without modifying code under test
- [ ] Structured logging, metrics, and decision reasons in place at trust boundaries and security-relevant events (Observability)

**Trustworthiness:**
- [ ] No secrets, PII, or tokens in code, logs, or error output
- [ ] Auth/authz events logged with structured data and principal attribution
- [ ] Authentication uses established, defendable mechanisms
- [ ] Data access follows least privilege

**ASVS Feature Requirements:**
- [ ] Relevant ASVS chapter(s) in `data/asvs/` were identified for the feature
- [ ] Applicable ASVS requirements were translated into implementation constraints
- [ ] Generated code satisfies the relevant ASVS requirement intent, not just the happy path behavior

**Reliability:**
- [ ] Input validated at every trust boundary (canonicalize → sanitize → validate, S4.4.1)
- [ ] Request Surface Minimization applied — only expected values extracted (S4.4.1.1)
- [ ] Derived Integrity Principle applied — server-owned state not client-supplied (S4.4.1.2)
- [ ] Specific exception handling with meaningful messages; no bare catch-all
- [ ] Resource limits, timeouts, and disposal patterns in place

**Dependency Choice (Supply Chain Hygiene):**
- [ ] External libraries are necessary (no avoidable dependency added)
- [ ] Selected versions are latest stable compatible releases
- [ ] Selected packages have low known CVE/CWE exposure and no unresolved critical/high issues
- [ ] Packages show active maintenance (recent releases/commits and issue responsiveness)
- [ ] Versions are pinned and lockfile usage is included in generated setup guidance

**Transparency & Predictability:**
- [ ] Meaningful naming conventions; self-documenting code
- [ ] Behavior follows Principle of Least Astonishment — no hidden side effects
- [ ] Decision-reason logging for allow/deny/redact outcomes
- [ ] Audit trail hooks for security-sensitive actions

## Output

Generated code that embodies FIASSE v1.0.4 securable qualities. When the generation is non-trivial, include a brief **Securability Notes** section after the code listing which SSEM attributes were actively enforced (explicitly naming Observability where instrumented), which FIASSE principles were applied (e.g. Boundary Control, Derived Integrity, Transparency), applicable ASVS chapter or requirement references, dependency-selection rationale (version and risk posture), and any trade-offs made.

## FIASSE References

- [FIASSE v1.0.4 — securable_framework.md](https://github.com/Xcaciv/securable_software_engineering/blob/v1.0.4/docs/securable_framework.md) — Framework for Integrating Application Security into Software Engineering
- [FIASSE RFC (main)](https://github.com/Xcaciv/securable_software_engineering/blob/main/docs/FIASSE-RFC.md) — evolving normative text; pin to v1.0.4 for stable generation constraints
- `data/asvs/README.md` — ASVS usage guidance and chapter index for feature requirements
- `data/asvs/V*.md` — ASVS 5.0 feature-aligned security requirements by chapter
- `data/fiasse/S2.1.md` — The Securable Paradigm
- `data/fiasse/S2.2.md` — Resiliently Add Computing Value
- `data/fiasse/S2.3.md` — Security Mission
- `data/fiasse/S2.4.md` — First Principle Alignment
- `data/fiasse/S2.5.md` — Transparency Principle
- `data/fiasse/S2.6.md` — Principle of Least Astonishment
- `data/fiasse/S3.2.1.md` — Maintainability (Analyzability, Modifiability, Testability, Observability)
- `data/fiasse/S3.2.2.md` — Trustworthiness (Confidentiality, Accountability, Authenticity)
- `data/fiasse/S3.2.3.md` — Reliability (Availability, Integrity, Resilience)
- `data/fiasse/S4.3.md` — Boundary Control Principle
- `data/fiasse/S4.4.1.md` — Canonical Input Handling
- `data/fiasse/S4.4.1.1.md` — Request Surface Minimization
- `data/fiasse/S4.4.1.2.md` — Derived Integrity Principle
- `data/fiasse/S6.1.md` — Actionable Security Intelligence Principle
- ISO/IEC 25010:2011 — Software quality models
- RFC 4949 — Internet Security Glossary
