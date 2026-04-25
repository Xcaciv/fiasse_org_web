# Per-Feature PRD Enhancement Checklist (FIASSE v1.0.4)

Run this checklist for **every feature** in the input document. It is shape-distinct from the [50-item scoring checklist](../../securability-engineering-review/references/checklist.md) used for code review — this one validates whether the *requirement* is framed for securability before code is written.

Mark each item `[x]` (satisfied), `[ ]` (gap — promote to "open gaps and assumptions" in the output), or `N/A` with a brief reason.

## Coverage and Level

- [ ] An ASVS level (1 / 2 / 3) is named for this feature, or it explicitly inherits the product-level baseline
- [ ] Each applicable [OWASP ASVS v5.0.0](https://github.com/OWASP/ASVS/tree/v5.0.0/5.0/en) requirement is mapped and tagged Covered / Partial / Missing / N/A
- [ ] Missing requirements have been promoted to feature requirement statements (not left implicit)
- [ ] The feature's data sensitivity classification is stated and matches the chosen ASVS level

## Trust Boundaries and Inputs (§4.3, §4.4.1)

- [ ] Trust boundaries crossed by this feature are identified (user input, API ingress, DB, file I/O, service-to-service, cross-tenant)
- [ ] Inputs that must be canonicalized → sanitized → validated are named (Canonical Input Handling, §4.4.1)
- [ ] Request surface is enumerated — only specific expected fields, headers, and params are consumed (Request Surface Minimization, §4.4.1.1)
- [ ] Server-derived state is called out — values that must NOT be client-supplied (identity, permissions, pricing, balances, tenant, role) are listed (Derived Integrity, §4.4.1.2)

## Trustworthiness Annotations

- [ ] Sensitive data fields are classified; encryption-at-rest and encryption-in-transit expectations are stated
- [ ] Least-privilege access scope is named (which roles / services may read / write)
- [ ] Auditable events tied to the responsible principal are listed (Accountability)
- [ ] Authentication strategy uses **defendable authentication** terminology and names MFA / mutual-auth touchpoints
- [ ] No requirement leaks secrets, tokens, or PII into examples, logs, or error-message templates

## Reliability Annotations

- [ ] Availability expectations include explicit timeouts for external calls and rate-limit posture where applicable
- [ ] Integrity controls (parameterized queries, output encoding, tamper detection) are named for any data-handling path
- [ ] Resilience expectations (graceful degradation, retries with backoff, circuit-breakers) are stated for non-critical dependencies
- [ ] Failure modes and recovery expectations (RTO / RPO if applicable) are defined

## Observability and Transparency (§2.5)

- [ ] Structured-logging requirements name the events to log and the fields to include
- [ ] Decision-reason capture is required for allow / deny / redact outcomes the feature emits
- [ ] Metrics, traces, or health signals required for this feature are listed
- [ ] Error-message contract: diagnostic for operators, sensitive-data-free for end users

## Acceptance Criteria

- [ ] Acceptance criteria are testable (Given / When / Then or equivalent), not aspirational
- [ ] At least one acceptance criterion exists for each Major SSEM annotation added in Step 5
- [ ] Negative-path criteria exist (rejected inputs, denied authz, failed integrity checks)
- [ ] Cross-cutting requirements (logging schema, auth model, rate limits) are not silently re-litigated per feature; either inherited or explicitly overridden

## Predictability (§2.6 — Principle of Least Astonishment)

- [ ] Defaults named in the feature match conventions used elsewhere in the product
- [ ] Error semantics (status codes, error shapes, retry hints) match cross-cutting standards
- [ ] Naming of fields, endpoints, and events follows existing product vocabulary

## Output Hygiene

- [ ] Securability note is *compact* — one short paragraph per feature, naming only material SSEM sub-attributes and FIASSE principles
- [ ] Notes link back to the FIASSE principle by section number (§2.5, §4.4.1.1, etc.) so reviewers can audit the rationale
- [ ] Open gaps for this feature are captured in the document-level open-gaps section, not buried in prose
