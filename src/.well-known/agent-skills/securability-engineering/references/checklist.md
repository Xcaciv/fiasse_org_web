# Generation Self-Check Checklist (FIASSE v1.0.4)

Run through this checklist before returning generated code. Mark each item `[x]` (satisfied), `[ ]` (not satisfied / needs follow-up), or `N/A` with a brief reason. Surfaced gaps belong in the **Securability Notes** section appended to the output.

The checklist mirrors the SSEM sub-attribute structure used by the sibling [`securability-engineering-review`](../../securability-engineering-review/SKILL.md) skill so generation and review converge on the same evidence.

## Maintainability

- [ ] Functions ≤ 30 LoC; cyclomatic complexity < 10 per unit
- [ ] No static mutable state; dependencies injected
- [ ] Security logic centralized, not duplicated across modules
- [ ] Public interfaces are testable without modifying production code
- [ ] Structured logging with consistent fields at trust boundaries and security-relevant events (Observability)
- [ ] Decision-reason capture for allow / deny / redact outcomes (Observability + Transparency Principle, §2.5)
- [ ] Health / readiness signals exposed for deployable units

## Trustworthiness

- [ ] No secrets, PII, or tokens in code, logs, or error output
- [ ] Auth events (login, logout, MFA, failure) and authz decisions logged with the responsible principal (Accountability)
- [ ] Authentication uses established, **defendable** mechanisms; no rolled-from-scratch auth (Authenticity)
- [ ] Tokens / sessions are integrity-protected (signed JWTs, secure cookies, anti-CSRF where applicable)
- [ ] Data access follows least privilege; sensitive data classified and encrypted per classification (Confidentiality)
- [ ] Audit trails are append-only or otherwise tamper-evident

## Reliability

- [ ] Inputs canonicalized → sanitized → validated at every trust boundary (Integrity, §4.4.1)
- [ ] Request Surface Minimization applied — only explicitly expected fields / headers / params extracted (§4.4.1.1)
- [ ] Derived Integrity applied — server-owned state (identity, permissions, pricing, balances) is server-derived, never client-supplied (§4.4.1.2)
- [ ] Specific exception handling with meaningful messages; no bare catch-all that swallows errors (Resilience)
- [ ] Resource limits, explicit timeouts on external calls, and proper disposal patterns in place (Availability + Resilience)
- [ ] Parameterized queries used exclusively; output encoding applied at rendering boundaries

## ASVS Feature Requirements

- [ ] Relevant [OWASP ASVS v5.0.0](https://github.com/OWASP/ASVS/tree/v5.0.0/5.0/en) chapter(s) identified for the feature
- [ ] Applicable ASVS requirements translated into implementation constraints
- [ ] Generated code satisfies the requirement *intent*, not just happy-path behavior

## Dependency Choice (Supply Chain Hygiene)

- [ ] Each external library is necessary (no avoidable dependency added)
- [ ] Selected versions are latest stable compatible releases
- [ ] Selected packages have low known CVE / CWE exposure and no unresolved critical / high issues
- [ ] Packages show active maintenance (recent releases / commits, responsive issue tracker)
- [ ] Versions are pinned and lockfile usage included in setup guidance

## Transparency & Predictability

- [ ] Meaningful naming conventions; code is largely self-documenting
- [ ] Behavior follows the Principle of Least Astonishment (§2.6) — no hidden side effects
- [ ] Decision-reason logging for allow / deny / redact outcomes
- [ ] Audit trail hooks for security-sensitive actions
- [ ] Error messages are diagnostic without leaking sensitive data
