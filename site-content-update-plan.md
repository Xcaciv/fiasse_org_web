# Plan: Update fiasse.org content to the new securable_framework.md

Date: 2026-08-02
Scope: `src/index.html` and `src/index.md` (regenerate `src/llms.txt` / `src/llms-full.txt` afterward).
Source of truth: `docs/securable_framework.md` on `OWASP/FIASSE` `main` (130,103 bytes; every claim below verified against it). Note: `main` is **ahead of the latest tag v1.0.6** (whose copy is 99,917 bytes), so the new spec text is not yet released under any tag.

## 0. Decisions needed before/while executing

1. **Version label and pin.** The site says "Read the Doc (v1.0.4)" and pins `blob/v1.0.4/...`. The new spec exists only on `main`. Either (a) cut a new tag upstream (e.g. v1.1.0) and pin the site to it, or (b) link to `main` with a "latest" label until the tag exists. Recommendation: (a); use (b) as the interim.
2. **SSEM version badge.** The SSEM page shows "SSEM v2.1.0". The new spec declares no SSEM version anywhere. Confirm whether to keep, bump, or drop the badge.
3. **Donate link.** `reponame=www-project-fiasse` in the OWASP donate URL is donation attribution tied to the OWASP project-page repo name, not the code repo — leave unchanged unless OWASP says otherwise.

## 1. Cross-cutting terminology changes (both files)

- **Four core values (§2, spec lines ~155–158).** Present FIASSE by its four Agile-Manifesto-style values, names verbatim:
  - Securable Attributes over Security Controls
  - Participation over Assessment
  - **Engineering First Principles over Security Jargon** (site currently: "First Principle Alignment")
  - **Business Value over Security Activity** (site currently: "Business Alignment")
- **"The Securable Principle" → "The Securable Paradigm: No Static Secure State" (§2.1).** Update card text to include the reframed question ("Is it built so that security can be maintained?") and the three organizing ideas: Adaptive Resilience, Evolutionary Security, Continuous Improvement.
- **"Derived Integrity Principle" → "The Isolated Integrity Principle" (§4.4.1.2).** New framing: isolation of *authority*; litmus question "Could an untrusted caller directly set or indirectly bias this integrity-critical value?" Update every mention (Tenets card, Adoption roles bullet "Model Boundary Control, Derived Integrity...", llms.txt tenet list).
- **Section reference remap.** "FIASSE RFC §2.1" (used twice on the SSEM page for the attribute list) → **§3.2 Core Securable Attributes**. Full remap (already applied to URLs, see §3; visible "§" citations in prose still need it):

  | Old (FIASSE-RFC.md) | New (securable_framework.md) |
  |---|---|
  | §3 The Securable Principle | §2.1 The Securable Paradigm (`#21-the-securable-paradigm-no-static-secure-state`) |
  | §6.4.1 Canonical Input Handling | §4.4.1 (`#441-canonical-input-handling`) |
  | §6.4.1.1 Derived Integrity Principle | §4.4.1.2 The Isolated Integrity Principle (`#4412-the-isolated-integrity-principle`) |
  | §2.6 Transparency Principle | §2.6 (unchanged anchor) |
  | §2.1 securable attributes | §3.2 |

- **Primary directive.** Add "resiliently add computing value" (§2.2) where the mission is described; the spec makes each word load-bearing and rejects both value-without-resilience and resilience-without-value.

## 2. Section-by-section content updates

### Home / About (index.html `page-home`; index.md About)

- Update "Read the Doc" link + version label per decision 0.1.
- Key Concepts cards → the four values above plus the Securable Paradigm. Keep the "give development the answers to the security test" passage (still consistent with §4.1.2).
- Optionally add a card for the Quality-Security Relationship (§2.4): "Security cannot exceed software quality" — now codified via ISO/IEC 5055 (security as a structural quality characteristic measurable from source code). A new, prominent claim in the spec.

### The Project (tabs: overview / expectations / implementation / assurance)

- **Expectations tab:** rename "Acceptance Criteria" → "Security Acceptance Criteria" (§4.1.2) and note that implementation completeness against criteria is a measurable security outcome. Add §4.1.2's claim that incomplete requirements are the dominant root cause of security gaps. Update the threat-modeling methodology list: the spec cites **STRIDE, PASTA, LINDDUN** (§4.2) — the tab currently says "STRIDE, PASTA, or DREAD".
- **Implementation tab:** add the merge-review mechanism from §5.2: the **Securability Report** (generated on every merge, automation base + reviewer SSEM assessment), the **advisory default** ("guardrails, not gates"), **gating as a policy decision** (override path = Accountability), the **audit trail** (feeds CRA / NIST SP 800-218 attestation), and **posture over pass rates**. Add the §4.2 distinction between formal **Threat Modeling** and continuous **Threat Awareness** (Four Question Framework from the Threat Modeling Manifesto).
- **Assurance tab:** add the framing that assurance metrics are *downstream indicators of upstream health* (§2.5, §8.2) — recurring findings point at requirements/engineering gaps, not at testing.

### SSEM (tabs: overview / model / metrics)

- **Overview:** update the "Concrete Security" list to the four values (new names); add §3.1's central question shift: from "Is it secure?" to "Do we meet our defined goals for this particular securable attribute?".
- **Model tab — definition updates:**
  - **Trustworthiness:** now "Ability to meet stakeholder expectations in a verifiable way" (ISO/IEC TS 5723:2022) — replaces the ISO 25010 "predictable manner" quote currently on the site.
  - **Confidentiality**, **Availability**, **Integrity** (now explicitly *system* integrity + *data* integrity), **Authenticity** (reinforced by non-repudiation), **Accountability** (attribution of every action to an identified entity) — all now sourced to ISO/IEC 27000 definitions.
  - **Observability:** add the control-theory grounding (Kálmán 1960) and "instrumented in the code itself, not external tooling alone".
  - Add the **"On Authorization" note** (blockquote at the end of §3.2.2): SSEM has no Authorization attribute by design — authorization is a security *feature* gathered as a requirement; SSEM supplies what makes it defensible (Authenticity, Confidentiality/Integrity, Accountability).
- **Metrics tab:**
  - Add **Observability metrics (Appendix A.1.4)** — currently missing entirely: log coverage, instrumentation coverage, alert signal-to-noise ratio, MTTD; qualitative: structured-logging review, code-level instrumentation audit, failure-path observability, UI/operator feedback review. (index.md has the same gap.)
  - **Authenticity (A.2.3):** replace "Use of Strong Authentication (MFA %)" with **"Authentication mechanism coverage"** (factors appropriate to context, documented rationale); replace "Integrity of Authentication Mechanisms" with **"Adaptability of authentication mechanisms"** (supports analysis, modification, verification as threats evolve).
  - Add **A.4 Scoring and Enhancement Suggestions**: composite scores are directional management aids, not assurance; outputs should be score + rationale + prioritized changes.
  - Fix markup typo at index.html:1837 (`<b></b>Authentication Failures:</b>`).

### Tenets (tabs: core / principles)

- **Core tab:**
  - Securable Principle card → §2.1 title and text (anchor already fixed, see §3).
  - Derived Integrity card → rename to **Isolated Integrity Principle**, §4.4.1.2 text (client expresses intent, server enforces integrity; optionally the checkout-price example and the JWT `alg` note).
  - Canonical Input Handling card → §4.4.1 (canonicalization/normalization, validation, sanitization) and add the **Canonical Parsing Principle (§4.4.1.1)**: "Parse, don't validate", data-structure-as-proof, and the deliberate log-only vs log-and-reject boundary posture.
  - Transparency card → keep; optionally surface §2.6.3 tactics.
- **Engineering Principles tab:**
  - Boundary Control → now linkable to §4.3.
  - **Request Surface Minimization** — no longer a named section in the new spec (in v1.0.4 it was §4.4.1.1; that number now belongs to Canonical Parsing). Fold its bullets into the Canonical Parsing content (explicit schema per operation, no catch-all envelopes) or keep as unlinked site-level guidance.
  - Principle of Least Astonishment → now a foundational principle (§2.7); link it, and consider moving it to the Core tab.
  - Actionable Security Intelligence → link to §6.3 (Strategic Use of Security Output).
  - Candidates to add as cards: Resiliently Add Computing Value (§2.2) and the Quality-Security Relationship (§2.4).

### Adoption (tabs: plan / roles / anti-patterns)

- **Plan tab:** six steps → **seven steps** (§8). New step 5: **"Adopt agentic AppSec tooling as capacity relief"** — tie tooling adoption to specific upstream engagements the freed capacity will take on; otherwise it is higher-volume Shoveling Left. Renumber Foster collaboration → 6, Monitor → 7. Step 2 gains "favor securable-property language over static-state language".
- Add **Degraded-Mode Adoption (§8.1)**: compensate with agentic assistance / invest in the prerequisite first / adopt partially with named gaps — a legitimate posture, not a failure to adopt.
- Add **Indicators of Adoption Effectiveness (§8.2)**: leading (1–2 quarters) vs lagging (1–2 years) indicators, and the framework-failure vs adoption-failure distinction. Suggest a fourth sub-tab ("Indicators") or cards under the plan tab.
- **Roles tab:** Security Team card — add the §7.1.1–7.1.5 role shift (strategic case; agentic capacity relief; transition-not-switchover; business-leadership alignment as precondition; staffing implications). Senior engineers — add AI-generated-code ownership and prompt-engineering standards (§7.2). Developing engineers — add scrutinizing AI output against SSEM and acceptance criteria (§7.3). Product Owners — add vendor-selection and incident-response literacy (§7.4). Update "Derived Integrity" → "Isolated Integrity" in the senior-engineer bullet.
- **Anti-Patterns tab:** replace the single "Control-Catalog Fallacy" card with the two §6.1 fallacies:
  - **Control-as-Requirement Fallacy** (§6.1.1): catalog items treated as specifications; the AC-3 worked example (control → translated requirement → test as audit evidence).
  - **Control-as-Protection Fallacy** (§6.1.2): documented existence of a control read as a property of the software; residual code obligations go unspecified.
  - Corrective for both: **the requirements process** (§6.1.3) — allocation, specification, adequacy; the four-artifact chain (catalog control → security requirement → security feature → verification evidence).
  - Keep Shoveling Left, Ineffective Vulnerability Reporting, Exploit-First Training, Bypassing Engineering Workflows (corrective: Strategic Use of Security Output, §6.3).
- **Bug (index.html:2834):** the `PAGES` whitelist lists adoption tabs as `['plan', 'roles']` — `anti-patterns` is missing, so `#adoption/anti-patterns` deep links fall back to the default tab. Add it.

### Resources / footer / llms files

- Repo links already swapped to `OWASP/FIASSE` (see §3). After the content update, regenerate `src/llms.txt` and `src/llms-full.txt` from index.md; in llms.txt also update: "current framework release is v1.0.4" (per decision 0.1), the tenet list ("Derived Integrity" → "Isolated Integrity"), and the engineering-principles list if Request Surface Minimization is folded.

## 3. Repo-wide link fixes (APPLIED 2026-08-02, alongside this plan)

Files touched: `src/index.html`, `src/index.md`, `src/llms.txt`, `src/llms-full.txt`, `scripts/fetch-framework-docs.py`, and the three agent skills under `src/.well-known/agent-skills/` (+ `references/principles.md`).

- `github.com/Xcaciv/securable_software_engineering` → `github.com/OWASP/FIASSE` everywhere — URLs and visible labels, including the `@xcaciv/...` community labels (now "OWASP/FIASSE"). Verified against the live repo: `OWASP/FIASSE` exists, default branch `main`, discussions enabled, `security/policy` present, tags v0.0.11-rfc–v1.0.6 carried over (so v1.0.4-pinned links still resolve).
- `docs/FIASSE-RFC.md` → `docs/securable_framework.md` (the RFC file no longer exists on `main`; those links were dead). Anchors remapped per the table in §1 rather than bare-path-swapped, which would have produced dead anchors. Link labels "FIASSE RFC (main)" → "FIASSE framework spec (main)".
- `.../blob/main/examples/SSEM-analysis/SSEM-analysis.prompt.md` → `.../blob/main/prompts/add-in/securable-engineering.prompt.md` — the new repo has no `examples/` tree; `prompts/add-in/` is the closest equivalent (verified contents).
- `.../tree/main/examples` → `.../tree/main/prompts`, with visible "Examples" labels → "Prompts".
- `scripts/fetch-framework-docs.py`: `REPO` → `OWASP/FIASSE` (`DEFAULT_TAG` stays `v1.0.4` until a new tag is cut — see §4).
- No links to a `github.com/owasp/www-project-fiasse` repo exist anywhere; all `www-project-fiasse` occurrences are `owasp.org` project-page URLs or the donate `reponame` parameter, which are correct as-is.

## 4. Follow-ups (out of scope here, flagged)

- **Agent skills are pinned to v1.0.4 semantics.** The three SKILL.md files and `references/principles.md` deliberately pin v1.0.4 **section numbering** (e.g. they cite §4.4.1.1 as Request Surface Minimization, which is now Canonical Parsing). Only the repo host and dead RFC paths were swapped. Re-pinning them to the new release is a separate task: re-map every section citation, apply the Isolated Integrity rename, and revisit the Request Surface Minimization references.
- `docs/framework/` content served from `/docs/` is fetched from the pinned tag via `scripts/fetch-framework-docs.py`; re-run with the new tag once it exists and bump `DEFAULT_TAG`.
- The securability-engineering-review skill's companion-prompt link points at the `Securability-Engineering/securable-framework-supplement` repo (a different org) — untouched; verify separately if that repo also reorganized.
