# FIASSE v1.0.4 Principles for Code Generation

Full text of the principles invoked by [`../SKILL.md`](../SKILL.md). Each entry names the framework section, what it means in plain terms, and how it should constrain generated code.

Authoritative source: [FIASSE v1.0.4 — securable_framework.md](https://github.com/Xcaciv/securable_software_engineering/blob/v1.0.4/docs/securable_framework.md).

## Foundational (§2)

1. **The Securable Paradigm (§2.1)** — There is no static "secure" state. Generate code with inherent qualities that let it adapt to evolving threats, not code that is merely "secure right now". Bias toward maintainability, observability, and explicit boundaries; avoid clever tricks that obscure how the code can be re-secured later.

2. **Resiliently Add Computing Value (§2.2)** — Generated code must meet functional requirements *while* possessing the securable qualities that enable long-term integrity. Securable qualities are engineering requirements, not afterthoughts; do not trade them off against each other unless the user explicitly accepts the trade.

3. **Security Mission (§2.3)** — Aim to reduce the probability of material impact from cyber events. Favor pragmatic controls aligned with the code's context and exposure, not theoretical completeness. Calibrate effort to data sensitivity and blast radius.

4. **First Principle Alignment (§2.4)** — Ground generated code in established software engineering first principles, using shared engineering vocabulary rather than security-specific jargon or adversarial heuristics. The reader of the code should be able to reason about its security posture from its structure, not from threat-model glossaries.

5. **Transparency Principle (§2.5)** — Generated code must be observable: meaningful naming, structured logging at trust boundaries, audit trails for security-sensitive actions, decision-reason capture for allow / deny / redact outcomes, and health / performance instrumentation. This is the primary enabler of the **Observability** SSEM sub-attribute.

6. **Principle of Least Astonishment (§2.6)** — Generated code should behave the way a reasonable user, operator, or developer expects. Favor consistent defaults, naming, and error semantics. Treat unexpected state as a signal worth surfacing rather than silently working around.

## Boundaries and Inputs (§4)

7. **Boundary Control Principle (§4.3)** — Enforce strict control at trust boundaries while preserving interior flexibility. Apply the **turtle analogy**: hard shell at the perimeter, flexible interior. Trust boundaries include: user input, API ingress, DB access, file I/O, service-to-service calls, cross-tenant context, anything crossing process or trust domains.

8. **Canonical Input Handling (§4.4.1)** — Apply the canonicalize → sanitize → validate pattern at every trust boundary. Normalize input to a canonical representation (types, encodings, formats), reject dangerous content, and enforce strict validation before any business logic runs. Prefer specific types and constrained enum values. Never use a value that has not been fully vetted.

9. **Request Surface Minimization (§4.4.1.1)** — Generated endpoint and handler code must extract only explicitly expected values; unexpected fields, headers, or parameters are ignored or rejected. Avoid generic pass-through parameters and catch-all endpoints. The smaller the inbound surface, the fewer assumptions the rest of the system has to defend.

10. **Derived Integrity Principle (§4.4.1.2)** — Never implicitly trust or adopt unmanaged external context, such as client-supplied values for server-owned state. Calculate critical state values (identity, permissions, pricing, balances, tenant, role) server-side in a trusted context. The client may *propose*; the server *decides*.

## Engineering Output (§6)

11. **Actionable Security Intelligence Principle (§6.1)** — Security output (findings, advisories, scan results) becomes valuable only when translated into prioritized, engineering-grounded direction calibrated to the developer's context. When this skill emits **Securability Notes**, those notes should be actionable — naming the principle applied, the SSEM sub-attribute strengthened, and the trade-off taken — not an exhaustive catalog of every possible threat.

## Project-Specific Rule

12. **Dependency Hygiene for Trustworthiness and Reliability** — When selecting libraries, default to the latest stable release compatible with the target runtime and framework. Prefer packages with low known vulnerability exposure (CVEs / CWEs), active maintenance, and strong release-quality signals. Minimize dependency count and transitive risk by avoiding unnecessary or abandoned packages. This rule is not in the FIASSE framework directly; it is a generation-skill discipline that protects the Trustworthiness and Reliability pillars at the supply-chain layer.
