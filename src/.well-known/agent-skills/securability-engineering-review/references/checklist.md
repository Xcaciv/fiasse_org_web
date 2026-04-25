# SSEM Evaluation Checklist (FIASSE v1.0.4)

Canonical 50-item checklist for SSEM scoring. Five items per sub-attribute, ten sub-attributes, three pillars. Item IDs are stable across runs and projects so review-to-review comparisons are meaningful.

ID convention: `<pillar>-<sub-attribute>-<n>` where pillar ∈ {M, T, R} and sub-attribute is the two-letter code in the section heading.

When rendering this checklist into a report, use `[x]` for pass and `[ ]` for fail / unverified. Preserve the IDs verbatim.

---

## Maintainability (20 items)

### Analyzability (M-AN)

- [ ] **M-AN-1** — Methods/functions are kept short (typically ≤ 30 LoC) and single-purpose; outliers are justified by evidence.
- [ ] **M-AN-2** — Cyclomatic complexity per unit is low (target < 10) and tracked; hot spots are visible to the team.
- [ ] **M-AN-3** — Naming and module boundaries are descriptive enough that an unfamiliar engineer can locate change-impact in reasonable time (low time-to-understand).
- [ ] **M-AN-4** — Code duplication is minimal; identified duplicates are tracked rather than tolerated indefinitely.
- [ ] **M-AN-5** — Comments explain *why* (not what) at trust boundaries and complex logic; no dead or commented-out code blocks remain.

### Modifiability (M-MO)

- [ ] **M-MO-1** — Dependencies are injected (DI / IoC) rather than hard-wired; static mutable state is avoided.
- [ ] **M-MO-2** — Security-sensitive logic (auth, crypto, validation, authorization) is centralized in dedicated modules, not scattered.
- [ ] **M-MO-3** — Configuration is externalized from code; environment-specific values are not hardcoded.
- [ ] **M-MO-4** — Module coupling (afferent / efferent) is monitored; high-coupling hotspots are tracked and reduced over time.
- [ ] **M-MO-5** — Regression rate from changes is measured or bounded; commit history shows refactoring is tractable.

### Testability (M-TE)

- [ ] **M-TE-1** — Unit and integration test coverage is meaningful (not just line counts) and trending favorably.
- [ ] **M-TE-2** — Public interfaces are testable without modifying production code under test.
- [ ] **M-TE-3** — Security controls (auth, crypto, input validation) are isolated for dedicated test suites.
- [ ] **M-TE-4** — Test execution time is reasonable; long suites do not disincentivize frequent runs.
- [ ] **M-TE-5** — Mocking / stubbing complexity is low; new tests are quick to write per developer feedback.

### Observability (M-OB)

- [ ] **M-OB-1** — Structured logging with consistent fields exists at trust boundaries and security-relevant events.
- [ ] **M-OB-2** — Decision-reason capture is present for allow / deny / redact outcomes.
- [ ] **M-OB-3** — Metrics and traces expose latency, error rate, and saturation of critical paths.
- [ ] **M-OB-4** — Health and readiness signals exist for each deployable unit.
- [ ] **M-OB-5** — Error messages convey enough context for diagnosis without leaking sensitive data (Transparency Principle, §2.5).

---

## Trustworthiness (15 items)

### Confidentiality (T-CO)

- [ ] **T-CO-1** — Sensitive data is classified and handled at the type level; classification flows into encryption and access decisions.
- [ ] **T-CO-2** — Secrets are stored outside source control and outside log / error output; key management practices are documented.
- [ ] **T-CO-3** — Encryption at rest and in transit is applied where data classification requires it; protocols and key sizes are current.
- [ ] **T-CO-4** — Access control follows least privilege; component and user permissions are scoped to specific operations.
- [ ] **T-CO-5** — Data minimization is enforced — only necessary fields are collected, transmitted, logged, and retained.

### Accountability (T-AC)

- [ ] **T-AC-1** — Security-sensitive actions are logged with who, what, where, and when as structured fields.
- [ ] **T-AC-2** — Authentication events (login, logout, MFA, failure) and authorization decisions (grant, deny) are recorded with the responsible principal.
- [ ] **T-AC-3** — Audit trails are append-only or otherwise tamper-evident; retention meets compliance and operational needs.
- [ ] **T-AC-4** — Actions are uniquely traceable to a specific identified entity (no shared service accounts for user-attributable actions).
- [ ] **T-AC-5** — Non-repudiation strength is appropriate (e.g. signed artifacts where required); evidence supports incident reconstruction.

### Authenticity (T-AU)

- [ ] **T-AU-1** — Defendable authentication mechanisms are used (established libraries, current standards); custom auth is avoided.
- [ ] **T-AU-2** — Tokens and sessions are integrity-protected (signed JWTs, secure cookies, anti-CSRF where applicable).
- [ ] **T-AU-3** — MFA or strong credential types are used at appropriate authentication points; coverage is measured.
- [ ] **T-AU-4** — Service-to-service authentication is mutual where trust boundaries warrant it.
- [ ] **T-AU-5** — Identity-verification flows (registration, recovery, password change) follow current OWASP ASVS v5.0.0 guidance.

---

## Reliability (15 items)

### Availability (R-AV)

- [ ] **R-AV-1** — External calls have explicit timeouts; resource limits (memory, connections, file handles) are enforced.
- [ ] **R-AV-2** — Concurrent code is thread-safe; deadlock and race-condition risks are addressed in design.
- [ ] **R-AV-3** — Rate limiting is applied where appropriate to protect critical paths from abuse and saturation.
- [ ] **R-AV-4** — Redundancy or failover is in place for critical components; SLO / uptime targets are tracked.
- [ ] **R-AV-5** — Disaster recovery and business-continuity plans are tested; results inform improvements.

### Integrity (R-IN)

- [ ] **R-IN-1** — Inputs are canonicalized → sanitized → validated at every trust boundary (FIASSE §4.4.1).
- [ ] **R-IN-2** — Request Surface Minimization is applied — only explicitly expected fields, headers, and parameters are consumed (§4.4.1.1).
- [ ] **R-IN-3** — Derived Integrity is applied — server-owned state (identity, permissions, pricing, balances) is computed server-side, never accepted from the client (§4.4.1.2).
- [ ] **R-IN-4** — Data persistence uses parameterized queries exclusively; output encoding is applied at rendering boundaries.
- [ ] **R-IN-5** — Tamper detection (checksums, signatures, integrity monitoring) is in place where data integrity is load-bearing.

### Resilience (R-RE)

- [ ] **R-RE-1** — Exception handling is specific — no bare catch-all that swallows errors; error semantics are predictable.
- [ ] **R-RE-2** — Resource disposal patterns prevent leaks (try-with-resources, context managers, IDisposable, defer).
- [ ] **R-RE-3** — Graceful degradation is designed for non-critical dependencies (circuit breakers, fallbacks, retries with backoff).
- [ ] **R-RE-4** — Out-of-bounds and adversarial input is anticipated and handled rather than allowed to crash or corrupt state.
- [ ] **R-RE-5** — Recovery time after incidents (RTO) is measured; performance under stress (load, simulated attacks) is tested.

---

## Pass-Rate Summary Template

| Pillar | Items | Passed | Pass Rate |
|--------|-------|--------|-----------|
| Maintainability | 20 | _ | _% |
| Trustworthiness | 15 | _ | _% |
| Reliability | 15 | _ | _% |
| **Overall** | **50** | _ | _% |
