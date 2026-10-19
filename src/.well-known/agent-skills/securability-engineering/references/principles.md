# FIASSE v1.3.0 Principles for Code Generation

Full text of the principles invoked by [`../SKILL.md`](../SKILL.md). Each entry names the framework section, what it means in plain terms, and how it should constrain generated code.

Authoritative source: [FIASSE v1.3.0 — securable_framework.md](https://github.com/OWASP/FIASSE/blob/v1.3.0/docs/securable_framework.md).

## Foundational (§2)

FIASSE is oriented by four core values: Securable Attributes over Security Controls, Participation over Assessment, Engineering First Principles over Security Jargon, and Business Value over Security Activity. Generated code expresses the first and third values directly: it builds securable attributes into the code and names them in engineering vocabulary.

1. **The Securable Paradigm (§2.1)** — There is no static "secure" state. Generate code with inherent qualities that let it adapt to evolving threats, not code that is merely "secure right now". Bias toward maintainability, observability, and explicit boundaries; avoid clever tricks that obscure how the code can be re-secured later. The question is "Is it built so that security can be maintained?"

2. **Resiliently Add Computing Value (§2.2)** — Generated code must meet functional requirements *while* leaving the system able to withstand the change, stress, and attack that follows. Value without resilience is capability the business loses later; resilience without value is security as an end in itself. Securable qualities are engineering requirements, not afterthoughts.

3. **Security Mission (§2.3)** — Aim to reduce the probability of material impact from cyber events. Favor pragmatic measures aligned with the code's context and exposure, not theoretical completeness. Calibrate effort to data sensitivity and blast radius.

4. **The Quality-Security Relationship (§2.4)** — Security cannot exceed software quality. Unmaintainable code cannot be analyzed, cannot absorb a fix, and cannot verify one. Every downstream security activity is bounded by what the code makes possible, so quality in generated code is a security investment.

5. **Aligning Security with Development (§2.5)** — Ground generated code in established software engineering first principles, using shared engineering vocabulary (Analyzability, Modifiability, Testability, Confidentiality) rather than security-specific jargon or adversarial heuristics. The reader should be able to reason about the code's security posture from its structure.

6. **The Transparency Principle (§2.6)** — Generated code must let authorized parties understand internal state and behavior: meaningful naming, structured logging at trust boundaries, immutable audit trails for security-sensitive actions (who, what, where, when, why), decision-reason capture for allow / deny / redact outcomes, and health / performance instrumentation. Transparency operates within the bound set by Confidentiality. This is the primary enabler of the **Observability** SSEM sub-attribute.

7. **The Principle of Least Astonishment (§2.7)** — Generated code should behave the way a reasonable user, operator, or developer expects. Favor consistent naming, defaults, and error semantics; no hidden side effects. Treat unexpected state as a signal worth surfacing rather than silently working around.

## Boundaries, Inputs, and Dependencies (§4)

8. **The Boundary Control Principle (§4.3)** — Enforce strict control at trust boundaries while preserving interior flexibility. Apply the **turtle analogy**: hard shell at the perimeter, flexible interior. Trust boundaries include user input, API ingress, DB access, file I/O, service-to-service calls, cross-tenant context, and anything crossing process or trust domains. "Control" here is the software-engineering sense, not a catalog "security control".

9. **Resilient Coding (§4.4)** — Strong typing, input validation at trust boundaries, output encoding, null confined to the edges, comprehensive error handling, immutable data for concurrency, avoidance or isolation of risky operations (string-built queries, deserialization of untrusted data, dynamic execution), deterministic resource release, graceful and secure failure (generic external messages, diagnostics internal), and least privilege at the code level.

10. **Canonical Input Handling (§4.4.1)** — Apply canonicalization / normalization, validation, and sanitization at every trust boundary. Normalize input to one standard representation before any check, prefer explicit allow-lists of known-good values, and neutralize harmful content. Never use a value that has not been fully handled.

11. **The Canonical Parsing Principle (§4.4.1.1)** — "Parse, don't validate." Define an explicit input schema per operation, parse only expected fields into a typed structure at the boundary, and fail closed when parsing does not succeed. The resulting data structure is proof that required invariants hold, so core logic operates on trustworthy structures. Whether unknown or forbidden fields are logged only or rejected is a deliberate policy decision; in sensitive contexts prefer rejection. Log deviations with actionable context: the deviation, request source, timestamp, and identity.

12. **The Isolated Integrity Principle (§4.4.1.2)** — Isolation of authority: integrity-critical facts (identity, permissions, pricing, balances, tenant, role, object state, token algorithm) must be established server-side in a trusted context from authoritative sources, and must never be set, overridden, or indirectly biased by a client. The client expresses intent; the server enforces integrity. Ask: could an untrusted caller directly set or indirectly bias this value?

13. **Dependency Stewardship (§4.5)** — Evaluate each dependency against SSEM attributes (Analyzability, Modifiability, Testability, Trustworthiness, Reliability) and treat it as a relationship the team owns for as long as it remains. Add a dependency only when its value justifies the ongoing maintenance, prefer verifiable provenance and a traceable delivery path, keep dependencies loosely coupled so they can be replaced, pin versions for reproducible builds, update regularly, and do not rely on CVE databases alone.

## Engineering Output (§6)

14. **The Actionable Security Intelligence Principle (§6.2)** — Security output (findings, advisories, scan results) becomes valuable only when translated into prioritized, engineering-grounded direction calibrated to the developer's context. When this skill emits **Securability Notes**, those notes should be actionable — naming the principle applied, the SSEM sub-attribute strengthened, and the trade-off taken — not an exhaustive catalog of every possible threat. §6.3 (Strategic Use of Security Output) applies the same principle to tool output.
