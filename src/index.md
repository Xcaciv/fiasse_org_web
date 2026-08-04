# OWASP FIASSE

> Framework for Integrating Application Security into Software Engineering

Relentlessly Practical. Relentlessly Securable.

FIASSE (pronounced /feiz/, like "the phases of the moon") is a framework for Securable Software Engineering. It provides practical guidance for Software Engineers to build securable applications, and for Security to impact securable outcomes.

[Read the Doc (latest)](https://github.com/OWASP/FIASSE/blob/main/docs/securable_framework.md)

> Note: FIASSE is not an assurance framework. This is a new project and some concepts may seem odd — your LLM may not get it either. Share your honest feedback; we want you both to understand.

[Donate](https://owasp.org/donate/?reponame=www-project-fiasse&title=OWASP%20FIASSE)

---

## Contents

- [About](#about)
- [The Project](#the-project)
- [SSEM — Securable Software Engineering Model](#ssem--securable-software-engineering-model)
- [Tenets of FIASSE](#tenets-of-fiasse)
- [Adoption](#adoption)
- [Resources](#resources)

---

## About

### What is FIASSE?

FIASSE (/feiz/) is an [OWASP project](https://owasp.org/www-project-fiasse/) that provides a software-engineering-centric approach to building securable software. It combines practical software engineering methodologies with modern security practices to create a framework that is effective and scalable.

### Our Mission

To help development teams **resiliently add computing value**: deliver useful capability continuously, in a way that leaves the system able to withstand the change, stress, and attack that follows. Security should be relentlessly practical for software engineers, and security teams have more to offer than secret test suites.

### Key Concepts

- **Securable Attributes over Security Controls** — Prefer the engineering qualities that let a system be built and kept defensible over security controls put in after the fact to make up for weaknesses. Security controls remain valid where they do their work — in risk management and assurance. Building defensible software is a different job, and it needs different vocabulary.
- **Participation over Assessment** — Prefer structured engagement between security and development throughout the lifecycle over evaluation performed after the work is done. It is OK to give development the answers to the security test, because they have to implement it to functionally pass. This is called requirements.
- **Engineering First Principles over Security Jargon** — Prefer grounding in established software engineering first principles over security-specific jargon or adversarial heuristics.
- **Business Value over Security Activity** — Prefer security that sustains the organization's value creation over security pursued as an end in itself. This means abandoning the "shovel-left" anti-pattern in favor of clearer communication and earlier collaboration.
- **The Securable Paradigm** — There is no static state of "secure." A system declared secure today may be vulnerable tomorrow. Security is not a property a system permanently possesses; it is a capacity the system must be designed to sustain. The question shifts from "Is it secure?" to "Is it built so that security can be maintained?"

### The Quality-Security Relationship

Security cannot exceed software quality. ISO/IEC 5055 codifies this: it defines security as one of four structural quality characteristics measurable directly from source code, alongside reliability, performance efficiency, and maintainability. The qualities that make software easy to understand, change, test, and observe are the same qualities that make it possible to secure. Where those qualities are absent, security expertise runs into a hard ceiling — every security intervention downstream of the code is bounded by what the code itself makes possible.

---

## The Project

FIASSE activity can be understood as three pillars: **Expectations**, **Implementation**, and **Assurance**. These are not domains in the sense of OWASP SAMM or similar maturity frameworks; they are a way to indicate the context of development activity.

FIASSE is designed to align people, process, and technology with the business of making software. It addresses the issues of perceived conflicting goals and the "shovel-left" anti-pattern, built on the premise that software engineers can create securable code without learning to be hackers.

### Project Goals

#### Primary Objectives

- Practical software engineering guidance
- Efficiency and scale by reducing waste and toil
- Structured security interaction
- Metrics particular to the methodology

#### Target Audience

- Software engineers seeking practical security guidance
- Security professionals wanting to align with development
- Teams establishing a solid engineering basis for security
- Educators teaching securable software engineering practices
- Development orgs who want to take ownership of security outcomes

> Take your project beyond "0 to 1" — address security with minimal impact to velocity.

### Primary Components

#### Core Elements

- SSEM: the articles of security from a software engineering perspective
- Principles for guiding securable software creation
- Tactics for executing on securable principles
- Guidance for development activities
- Guidance for security interactions and effective vulnerability remediation

#### Supporting Artifacts

- Prompts, plugins, and templates
- Mapping references pertaining to related projects and frameworks
- Training materials (future)

### Expectations

Set expectations in a way that organically leverages battle-tested software engineering practices for optimum security outcomes.

#### Architecture and Design

1. **Reference Architecture** — Leverage known security architectures to inform needed architecture outcomes.
2. **Threat Modeling** — Identify potential threats and vulnerabilities using a formal methodology like STRIDE, PASTA, or LINDDUN, conducted by a cross-functional group and producing a documented threat model.
3. **Threat Awareness** — A lightweight, continuous complement to formal threat modeling: asking "What can go wrong?" at the code level, guided by the Four Question Framework (What are we building? What can go wrong? What are we going to do about it? Did we do a good job?). It does not substitute for formal threat modeling — design-level findings should be escalated into the formal threat model.

#### Requirements

1. **Threat Scenarios** — Identify potential threats and frame them as use cases.
2. **Security Acceptance Criteria** — Specific, testable conditions a feature must satisfy to be considered secure. Implementation completeness against defined acceptance criteria is itself a measurable security outcome.
3. **Security Requirements** — Features that handle sensitive data or perform delicate operations require explicit security requirements specifying what the feature must do and how. ASVS is a useful reference for what to require.
4. **Security Features** — Specific capabilities whose purpose is security — Defendable Authentication, encryption at rest, authorization checks, audit logging. Security features are built; they are how engineering attention is invested. Specify them with the same rigor as any other feature.

Incomplete requirements are the dominant root cause of security gaps in application code. Where security expectations are absent from the requirements developers work from, the resulting implementation is not deficient by error — it is deficient by design. Some vulnerability classes sit outside this case regardless: injection flaws, supply-chain compromise, cryptographic weaknesses, and truly novel flaws. FIASSE addresses these residuals through Resilience, Dependency Stewardship, and Observability.

### Implementation

Encourage Software Engineering as a discipline so as to improve software security posture.

#### Code

1. **Securable Software Engineering Model (SSEM)** — Continually target Maintainability, Trustworthiness, and Reliability.
   - **Maintainability** — code that can be analyzed, modified, tested, and observed without introducing new vulnerabilities.
   - **Trustworthiness** — behavior that meets expectations in a verifiable way: Confidentiality, Accountability, Authenticity.
   - **Reliability** — predictable operation under adverse conditions: Availability, Integrity, Resilience.
   - Ask "Do we meet our defined goals for this securable attribute?" rather than a binary "Is it secure?"
2. **Securable Tenets** — Foster a mindset for creating securable software; support it with process.
   - Build so security can be maintained — there is no static state of "secure."
   - Parse, don't validate: handle input canonically at every trust boundary.
   - Derive integrity-critical values (price, role, state) from server-side authority, never from the client.
   - Locate control at trust boundaries; preserve flexibility in the interior.
   - Make behavior observable through logging and instrumentation built into the code itself.

#### Process

1. **Software Engineering process extensions** — Alignment of security assurance and governance process with existing empirical software engineering processes.
2. **Securable Tenet Support** — Support the Securable Mindset in development activities like Merge Reviews and Dependency Management.
3. **Dependency Stewardship** — Treat third-party dependencies as an ongoing engineering responsibility: selection, monitoring, update cadence, and removal, rather than a one-time choice.
4. **Strategic Remediation** — Higher quality security assurance data allows for systemic remediation and empirical process change.
5. **The Securability Report** — Every merge produces an informational report combining automated scanning with reviewer assessment in SSEM vocabulary. It is generated unconditionally and, by default, blocks nothing — guardrails, not gates. A team may elect to gate designated finding classes as a policy decision, provided an override path exists; exercising the override is not a failure of the mechanism, it is the mechanism completing, with the business retaining authority to accept vulnerable code and the override recording who accepted what, and why. The resulting audit trail — findings, gating decisions, and overrides, all timestamped and attributable — is what proof-based compliance consumes, mapping directly onto obligations like the EU Cyber Resilience Act and NIST SP 800-218. What the organization manages is security posture over time, not the pass rate of individual merges: a recurring override on the same finding class is a signal pointing upstream to a requirements or securability gap, not a compliance failure to enforce harder at the merge.

### Assurance

Assurance activities are still important when using the FIASSE approach. Investment in participation during Requirements and Design has high value, and there is a significant difference in how testing results are used. Assurance metrics are downstream indicators of upstream health — recurring findings, regressing fixes, or stalled turnaround typically point at requirements or engineering gaps, not at the testing that surfaced them.

- **Vulnerability Analysis** — Trend and class analysis with root cause investigation and vulnerability verification to avoid "shoveling left". Includes standard AppSec analysis types for comprehensive coverage. *(Root Cause, Exploitability, Risk Analysis, Collaborative Remediation, Vulnerability Correlation, Attack Surface Analysis)*
- **Training** — Role-specific, practical training for developers. *(Product, Architecture & Design, Software Engineering, Quality Assurance)*
- **Program Assessment** — Point-in-time assessment of Application Security process and program effectiveness. *(OWASP SAMM, OWASP ASVS, BSIMM, NIST SSDF, ISO/IEC 27034, CIS Controls, PCI Secure SLC)*
- **Automated Application Security Testing** — Fast and affordable testing to identify basic security vulnerabilities. *(SAST, DAST, SCA, IAST, RASP, IaC Scanning, Secrets Scanning, API Security Testing, Configuration Analysis)*
- **Manual Pentesting** — Hands-on process to uncover complex issues tools often miss. *(Expert Analysis, Business Logic Testing, Exploit Validation)*
- **Compliance** — The security policy defining how your organization builds secure products. *(OWASP PSCF, Point-in-time assessments, Continuous Improvement)*

---

## SSEM — Securable Software Engineering Model

*pronounced /si:m/*

A model that identifies fundamental and universal attributes that are the building blocks of securable software. Together, these terms form a comprehensive model for understanding software security and a design language for communicating security concerns.

The SSEM is centered on the core attributes that make software "securable" (FIASSE §3.2 Core Securable Attributes). These attributes allow SSEM to abstract security away from specialized jargon or exploit-centric views:

- **For Software Engineers** — integrate security considerations as a natural part of development work.
- **For the Security Team** — identify how existing code meets security needs and where improvements are required; surface where explicit security requirements are needed for functionality not covered by inherent attributes alone.

### Concrete Security

- **Securable Attributes over Security Controls** — prefer the engineering qualities that let a system be built and kept defensible over external catalogs of controls evaluated against the system from outside the code creation process. Security features fully implemented in code are less likely to be circumvented and can always be supplemented. Control catalogs remain valid where they do their work — risk management, assurance, external evaluation — but they measure software; they do not construct it.
- **Participation over Assessment** — The security team offers high value when actively participating in development rather than only assessing after the fact. Participation enables organic knowledge transfer from the start.
- **Engineering First Principles over Security Jargon** — Ground security in established software engineering first principles rather than security-specific jargon or adversarial heuristics. Shared engineering vocabulary lets developers reason about security without years of specialized training.
- **Business Value over Security Activity** — Security that sustains the organization's value creation over security pursued as an end in itself. Judge security efforts by how well they support business objectives and risk tolerance, not by how much activity they generate.

The central shift SSEM enables is a change in the question asked during security assessment: rather than a binary "Is it secure?" evaluation, the focus becomes "Do we meet our defined goals for this particular securable attribute?" — actionable, measurable, and compatible with iterative development.

### Benefits

- **Intention** — With defined security objectives, development teams act with purpose instead of guessing about how to pass the next security assessment.
- **Transparency** — Developers, operators, and responders can diagnose issues quickly and confidently, with full context and zero data leakage.

### Why SSEM

- **Optimized for Business** — SSEM gives AppSec insight into development without derailing processes or adding toil.
- **Developer-Centric** — Aligns Application Security with software development principles and strategies.
- **Scalable Framework** — Adaptable to projects of any size, from small applications to high-scale systems.

### SSEM as a Design Language

A design language is a set of shared terms, concepts, and patterns that helps a team communicate ideas, expectations, and standards consistently. In software engineering, it provides a common vocabulary for describing system qualities, architecture, and implementation details — making collaboration easier.

A design language ensures clarity and consistency, simplifies decision-making through well-defined principles, and embeds security concepts into familiar engineering terms. This empowers developers to build securable systems without needing deep security expertise.

By adopting SSEM as your software engineering design language, you adopt a pre-built shorthand for all roles (product, development, security, management...) that carries with it the *essence of security culture*.

### The Model

SSEM identifies the fundamental attributes that are the building blocks of securable software in an evolving landscape (FIASSE §3.2 Core Securable Attributes).

#### Maintainability

*The "degree of effectiveness and efficiency with which a product or system can be modified by the intended maintainers" (ISO/IEC 25010).*

- **Analyzability** — Quickly assess the impact of changes, diagnose issues, and identify what needs to be modified.
- **Modifiability** — Safely and quickly modify a system without causing defects or reducing quality or securability.
- **Testability** — Verify that a system meets its requirements and is free of defects.
- **Observability** — Infer the internal state of a system from its external outputs. Grounded in Kálmán's 1960 control theory formalization, observability must be built into the code itself through instrumentation and auditing, not achieved through external tooling alone — a system not instrumented at the code level is opaque by construction.

#### Trustworthiness

*"Ability to meet stakeholder expectations in a verifiable way" (ISO/IEC TS 5723:2022).*

- **Confidentiality** — Keep sensitive information secure and private (ISO/IEC 27000 §3.10).
- **Accountability** — Uniquely trace every action within a system to a specific, identified entity.
- **Authenticity** — Confirm that a user or system is what it claims to be, reinforced by non-repudiation (ISO/IEC 27000).

> **On Authorization:** SSEM has no Authorization attribute by design. Authorization is not a property code simply has; it is a security feature, gathered as a requirement and implemented against acceptance criteria wherever the operating context demands it. What SSEM supplies is everything a sound authorization feature depends on to stay defensible: Authenticity establishes who the actor is, Confidentiality and Integrity bound what may be seen and changed, and Accountability makes each authorization decision traceable.

#### Reliability

*The "degree to which a system, product or component performs specified functions under specified conditions for a specified period of time" (ISO/IEC 25010).*

- **Availability** — Remain accessible and operational when needed (ISO/IEC 27000 §3.7).
- **Integrity** — Ensure accuracy and completeness at two levels: *system integrity* (the system performs its intended function unimpaired, free from unauthorized manipulation) and *data integrity* (data has not been changed, destroyed, or lost through unauthorized action) (ISO/IEC 27000 §3.36).
- **Resilience** — Recover from failures and continue operating.

The model implies the existence of strategies for producing these qualities — which is where the rest of FIASSE comes in. While implementation patterns vary with platforms and tools, the model's purpose is to support the definition of the principles that drive these strategies.

### Measuring SSEM Attributes

Measuring SSEM attributes is essential to quantify and evaluate the securable qualities of software. The lists below are a starting point for teams to adapt and expand. Try using [this prompt](https://github.com/OWASP/FIASSE/blob/main/prompts/add-in/securable-engineering.prompt.md) in your code assistant to get started.

#### Maintainability — Elemental Security

##### Analyzability

*Quantitative:*

- Volume (LoC) — lower LoC for given functionality can indicate better analyzability.
- Duplication percentage (e.g., SonarQube, PMD) — lower is better.
- Unit size (mLoC/cLoC) — excessively large units are harder to analyze.
- Unit complexity (e.g., cyclomatic complexity) — lower per unit is generally better.
- Comment density/quality.

*Qualitative:*

- Time to Understand (TTU) — time for an unfamiliar developer to understand a section.
- Developer surveys on perceived analyzability.

##### Modifiability

*Quantitative:*

- Module coupling (afferent/efferent).
- Change impact size — files/modules affected by typical changes.
- Regression rate — percentage of changes that introduce new defects.

*Qualitative:*

- Ease of change assessment during code reviews.
- Time to implement standard modifications.

##### Testability

*Quantitative:*

- Code coverage (unit, integration).
- Unit test density (per KLoC or per class).
- Mocking/stubbing complexity.

*Qualitative:*

- Ease of writing meaningful tests.
- Test execution time (long runs disincentivize testing).

##### Observability

*Quantitative:*

- Log coverage — percentage of trust boundaries and security-sensitive operations emitting structured log events with sufficient context (identity, action, outcome, timestamp).
- Instrumentation coverage — fraction of critical execution paths exposing health and performance metrics through a standardized API.
- Alert signal-to-noise ratio — ratio of actionable alerts to total alerts fired; a low ratio indicates noisy instrumentation.
- Mean Time to Detect (MTTD) — lower values indicate more effective instrumentation.

*Qualitative:*

- Structured logging review — whether the who, what, where, when, and outcome of security-relevant events are captured, not just that an event occurred.
- Code-level instrumentation audit — whether observability is built into the code itself or depends entirely on external tooling.
- Failure-path observability — whether error and recovery paths produce observable output; silent failures and exception swallowing are common gaps.
- UI and operator feedback review — whether the system surfaces meaningful state at decision points without leaking internal implementation details.

#### Trustworthiness — Systemic Security

##### Confidentiality

*Quantitative:*

- Number of identified data leaks (pentests, code reviews, incidents).
- Access control violations logged.

*Qualitative:*

- Data classification adherence.
- Principle of Least Privilege review.
- Effectiveness of encryption and key management.

##### Accountability

*Quantitative:*

- Audit log coverage of critical actions.
- Traceability success rate.

*Qualitative:*

- Audit log review findings.
- Non-repudiation strength (e.g., digital signatures).

##### Authenticity

*Quantitative:*

- Authentication failures — number of failed login attempts (can indicate brute-forcing or misconfiguration).
- Authentication mechanism coverage — percentage of authentication points implementing factors appropriate to the context, with documented rationale for each configuration choice.

*Qualitative:*

- Verification of identities.
- Adaptability of authentication mechanisms — whether the design supports ongoing analysis, modification, and verification as threats evolve.

#### Reliability — Behavioral Security

##### Availability

*Quantitative:*

- Uptime percentage.
- MTBF (Mean Time Between Failures).
- MTTR (Mean Time To Recovery).

*Qualitative:*

- Redundancy review.
- Disaster recovery test results.

##### Integrity

*Quantitative:*

- Number of data corruption incidents.
- Checksum/hash validation success rate (at rest and in transit).

*Qualitative:*

- Input validation effectiveness at trust boundaries.
- System file integrity monitoring alerts.

##### Resilience

*Quantitative:*

- RTO adherence after incidents.
- Performance under stress (load testing, simulated attacks).

*Qualitative:*

- Defensive coding practice reviews.
- Incident response plan effectiveness.

#### Scoring and Enhancement Suggestions

Where teams combine SSEM indicators into a composite score, treat it as a directional management aid, not a statement of assurance, compliance, or absolute security — useful for comparing a system against itself over time, not for claiming the codebase is "secure." Pair scoring with enhancement suggestions that are attribute-specific, actionable (state the next engineering step, not just the deficiency), evidence-based, comparable over time, context-aware, and reviewed when material. The most useful scoring output has three parts: the score, the rationale, and a short list of prioritized changes.

---

## Tenets of FIASSE

Core principles that guide software engineers in implementing securable software engineering practices using the FIASSE framework.

### Core Tenets

#### [The Securable Paradigm: No Static Secure State](https://github.com/OWASP/FIASSE/blob/main/docs/securable_framework.md#21-the-securable-paradigm-no-static-secure-state)

There is no static state of "secure." A system declared secure today may be vulnerable tomorrow because of a newly discovered exploit, a dependency update, or a shift in the threat environment. Software must instead be built so it can be secured and kept secure over time.

*Three organizing ideas:*

- **Adaptive Resilience** — Software should be designed with the capability to respond to and recover from security events.
- **Evolutionary Security** — Security measures must evolve alongside the software and its operating environment.
- **Continuous Improvement** — Security is an iterative process that requires ongoing attention and refinement.

#### [The Isolated Integrity Principle](https://github.com/OWASP/FIASSE/blob/main/docs/securable_framework.md#4412-the-isolated-integrity-principle)

Isolation of *authority*: integrity-critical facts must be controlled by server-side logic and data sources that clients cannot set, override, or indirectly bias. Ask: *could an untrusted caller directly set or indirectly bias this integrity-critical value?*

*In practice:*

- Any value critical to a system's integrity or business logic must be derived from authoritative server-side sources, never accepted directly from a client. The client expresses intent (e.g., "I want to purchase item X"); the server derives and enforces the facts (e.g., its price).
- Good candidates: pricing and totals calculated server-side from product IDs and quantities, user permissions loaded from a server-side session, object state managed by an internal state machine rather than accepted as a client parameter.
- A more advanced application: a server must never accept a client-dictated signature algorithm (e.g., a JWT `alg` header) for verifying that same client's token — that lets the client dictate how its own integrity is established.

#### [Canonical Input Handling](https://github.com/OWASP/FIASSE/blob/main/docs/securable_framework.md#441-canonical-input-handling)

Convert all incoming data into a validated, well-defined state before it is used anywhere in the system, through canonicalization/normalization, validation, and sanitization at trust boundaries.

*The Canonical Parsing Principle* — "Parse, don't validate": perform one strict parse step at the boundary into a canonical internal type, and fail closed if parsing does not succeed. The resulting data structure is proof that required invariants hold; core logic then operates on trustworthy structures instead of reinterpreting raw input repeatedly. Whether a boundary deviation is logged only or logged-and-rejected should be a deliberate policy choice based on context sensitivity — not a silent default — since silent discard forgoes reconnaissance detection, manipulation prevention, and audit evidence that rejection provides.

*In practice:*

- Define clear schemas and allowed formats for all inputs; enforce them at trust boundaries (API gateways, controllers) so the rest of the code works with strongly typed, normalized objects.
- Use canonicalization to reduce ambiguity and attack surface (encodings, path forms, duplicated fields), making it easier to reason about integrity, authorization, and logging.

#### [The Transparency Principle](https://github.com/OWASP/FIASSE/blob/main/docs/securable_framework.md#26-the-transparency-principle)

How the system works should be perceptible so engineers and stakeholders can see what it is doing, why, and how. Design systems whose behavior is visible.

- Transparency means exposing clear, contextualized signals about system behavior (logs, metrics, traces, decision reasons) so people can detect misuse, misconfiguration, and drift early.
- Instead of hiding complexity behind black boxes, the system surfaces enough structured information to reason about integrity, authorization, and failure modes.
- This attribute is not entirely exposed to end users, to preserve confidentiality.

*In practice:*

- Build consistent, meaningful observability: structured logging, traceable request flows, clear error reporting, and auditable security-relevant events, all tied to business context.
- Use transparency to align AppSec and development via shared views of state, defects, and behavior.

### Engineering Principles

#### The Boundary Control Principle

*Control* in this principle refers to its software-engineering sense — the regulated handling of data and execution at trust boundaries — not to *security controls* in the risk-and-assurance sense.

Flexibility within a system's interior is an engineering asset to be preserved; control at every trust boundary is a security requirement to be enforced. These objectives are complementary, not competing.

*In practice:*

- Identify trust boundaries where data crosses between differently-trusted entities (user → application, application → database, service → service).
- Locate control precisely at those boundaries; preserve interior flexibility for maintainability.
- Think of trust boundaries as the hard shell of a turtle: flexible interior, controlled perimeter.

#### The Principle of Least Astonishment

A system should behave the way a reasonable user, operator, or developer expects. Surprise is a source of defects — including security defects — because behavior that diverges from expectation is not being reviewed or defended.

*In practice:*

- Choose defaults, naming, and behavior consistent throughout the codebase and with users' expectations.
- Flag and document any deviation from expected behavior, especially at trust boundaries.
- Treat unexpected state as a signal worth investigating, not a condition to silently work around.

#### Resiliently Add Computing Value

The primary directive of software engineering: deliver useful capability continuously (*add*), in a way that leaves the system able to withstand the change, stress, and attack that follows (*resiliently*). Value added without resilience is capability the business will lose later, with interest. Resilience pursued without adding value is security as an end in itself.

#### Strategic Use of Security Output

Security output becomes valuable only once it is translated into prioritized, engineering-grounded direction calibrated to the developer's context. Raw tool output, exploit-centric narratives, and unfiltered vulnerability lists are information, not yet intelligence.

*In practice:*

- Security teams collaborate with development on systemic flaw reductions, not one-off finding hand-offs.
- Findings arrive through the engineering channels developers already use, tied to requirements and acceptance criteria.
- Reports explain observed effects and how they violate requirements or user expectations — skillful communication that opposes the "Shoveling Left" anti-pattern.

---

## Adoption

How to introduce FIASSE into an organization, assign responsibilities across roles, and avoid AppSec anti-patterns that undermine developer engagement.

### A Practical Path to Integration

FIASSE does not require a rigid adoption sequence, but organizations benefit from a deliberate implementation plan. The seven steps below represent a practical path toward successful integration.

1. **Assess current practices** — Evaluate organizational readiness through stakeholder discussions and a review of existing security and development workflows. Identify where practices align with SSEM attributes, whether a functioning requirements process exists, whether a senior engineering bench with both design maturity and calendar capacity exists, and whether merge reviews are substantive rather than rubber-stamp. Where a prerequisite is thin or absent, name it — degraded-mode adoption (below) depends on that honesty.
2. **Integrate SSEM terminology** — Deliberately incorporate SSEM attributes (Maintainability, Trustworthiness, Reliability) and their sub-attributes into developer documentation, coding standards, and training. Favor securable-property language over static-state language: "built so security can be maintained" rather than "secure."
3. **Identify key influencers** — Find senior engineers and stakeholders grounded in software engineering who can internalize the framework and champion adoption from within the engineering culture.
4. **Educate and train teams** — Role-specific training on FIASSE and SSEM delivered inside onboarding, merge reviews, architecture discussions, and requirements sessions — not as a standalone security program.
5. **Adopt agentic AppSec tooling as capacity relief** — The AppSec role shift FIASSE describes depends on security expertise being available for requirements and design work, which in most organizations requires deliberate relief from the mechanical portion of the reviewer role. Adopt agentic tooling (AI-assisted analysis, triage, pattern detection) with a clear intent: the capacity it frees is reinvested upstream, tied to specific engagements the security team will now take on. Without that tie, it just produces higher-volume Shoveling Left.
6. **Foster collaboration** — Promote regular engagement between AppSec and Development. Discourage isolated reviews. Encourage AppSec participation in requirements gathering and early design.
7. **Monitor and improve continuously** — Use real-time security observability to refine implementation over time. Treat adoption as ongoing discipline, not a one-time rollout.

### Degraded-Mode Adoption

Where the readiness assessment identifies a gap — a sparse requirements process, a thin senior bench, an engineering culture that doesn't yet support substantive review — FIASSE is still adoptable, shaped around the gap rather than pretending the prerequisite is present. This is a legitimate posture, not a failure to adopt; what's illegitimate is claiming full adoption while operating without the prerequisites.

- **Compensate with agentic assistance** — AI-assisted tooling can expand throughput that would otherwise consume scarce senior-engineer hours, though it does not replace the judgment the bench exists to provide.
- **Invest in the prerequisite first** — Where the gap is large, invest in requirements-process work, engineering culture, or senior hiring before or alongside adoption; these are legitimate FIASSE-adjacent investments.
- **Adopt partially with named gaps** — Start with the parts the prerequisites support (e.g., merge-review threat awareness without a requirements process, or requirements integration without a deep bench) and name what's deferred, so partial adoption isn't mistaken for full adoption.

### Indicators of Adoption Effectiveness

**Leading indicators** (visible within one to two quarters): security acceptance criteria appear on user stories as a matter of course; threat scenarios are recorded during requirements gathering rather than surfaced during review; security participates in requirements and design on a standing basis; merge reviews reference SSEM attributes as design language.

**Lagging indicators** (visible within one to two years): findings churn declines; fixes stay fixed; turnaround from finding to remediation shortens; the vulnerability class distribution shifts toward classes outside what upstream requirements can reach.

Where leading indicators don't move after two quarters of good-faith effort, the failure is in adoption — a missed prerequisite or missing leadership backing. Where leading indicators move but lagging indicators don't follow, the team is owed an honest reassessment of the framework's fit, not a longer runway.

### Roles and Responsibilities

FIASSE only works when responsibilities are distributed across the roles that shape software. Each role has a distinct contribution.

**Security Team** — Engage early and often. Shape requirements, design, and architecture rather than arriving at the end with a finding list. This is a strategic shift, not the norm today, and it depends on business-leadership alignment as a precondition and agentic tooling for capacity relief; it is a transition, not a switchover — assurance work continues while participation is grown into.

- State security objectives in SSEM-grounded acceptance criteria developers can act on.
- Apply the Strategic Use of Security Output principle: deliver engineering-grounded direction, not raw tool output.
- Measure the partnership through implementation completeness, not vulnerability counts.

**Senior Software Engineers** — Carry SSEM vocabulary and securable design patterns into merge reviews, architecture decisions, and mentorship — including review of AI-generated code and the prompt-engineering standards that shape it.

- Model Boundary Control, Isolated Integrity, and Canonical Input Handling in day-to-day code.
- Make securable design visible in reviews so junior engineers can learn it.
- Champion adoption from inside the engineering culture, not as a security mandate.

**Developing Software Engineers** — Apply SSEM attributes to the code you write and review. Securable engineering is an extension of good engineering, not a second discipline. Follow guidelines closely and understand *why* over time — only then can you identify *why not*.

- Use SSEM attribute language in commit messages, code comments, and review feedback.
- Treat trust boundaries as first-class design concerns; scrutinize AI-generated code against SSEM attributes and acceptance criteria before accepting it.
- Ask for framework-grounded acceptance criteria when requirements are vague. Clarity is a security feature.

**Product Owners and Managers** — The security posture of a product is a product decision. Every scope cut, deferred maintenance, or story accepted without security criteria has a consequence.

- Include framework-grounded security acceptance criteria in user stories and definitions of done.
- Protect time for dependency stewardship, threat modeling, and requirements refinement.
- Bring FIASSE literacy to vendor selection, third-party integration review, and incident response.

### Common AppSec Anti-Patterns

These patterns undermine AppSec credibility and cause developer disengagement. Each has a corrective discipline.

**The Control-as-Requirement Fallacy** — Treating a catalog control (NIST 800-53, ISO 27001 Annex A, PCI DSS) as a specification the programmer should already know to build. A control like "Enforce approved authorizations" (AC-3) is deliberately implementation-agnostic; it cannot be verified against a codebase as written. Translated into a requirement — *every request to a document endpoint verifies the caller's permission server-side; unauthorized requests return 403 and are logged* — development has something to implement, and a passing test against those criteria is the audit evidence.
*Corrective:* The requirements process. Allocate which layer satisfies each control, specify the code's share as observable behavior with acceptance criteria, and treat the catalog as a floor, never a ceiling.

**The Control-as-Protection Fallacy** — Reading the documented existence of a control as a property of the software, when many controls are properly satisfied outside the application (platform, network, process). A correctly-external control still leaves residual obligations inside the code — e.g., the code must accept identity only from the trusted boundary and fail closed when the upstream protection is absent — that go unspecified because "the control is handled."
*Corrective:* Specify the code's residual share of every relevant control explicitly, implement it, and verify it.

**"Shoveling Left"** — Supplying impractical information to developers and leaving the burden on them to make sense of it. Manifests in how vulnerabilities are reported, how training is conducted, and how test results are delivered.
*Corrective:* Translate raw information into prioritized, engineering-grounded direction calibrated to the developer's context before handing it over.

**Ineffective Vulnerability Reporting** — Long finding lists with CVSS scores but no engineering direction. Developers are expected to prioritize, triage, and remediate without the security context.
*Corrective:* Report root cause, class of flaw, and suggested engineering change. Tie findings to requirements and acceptance criteria so remediation becomes ordinary engineering work.

**Exploit-First Training** — Training that teaches developers to think like attackers rather than to build securable software. Understanding how a system can be broken is not the same as knowing how to engineer it to remain defensible.
*Corrective:* Train on SSEM attributes and securable engineering patterns. Adversarial understanding is supplementary, not foundational.

**Bypassing Engineering Workflows** — Fix requests that circumvent the processes software engineers rely on. Disrupting the workflow degrades software quality and produces the conditions AppSec seeks to prevent.
*Corrective:* Route findings through normal engineering channels with clear, actionable information and time for the team's standard processes.

---

## Resources

### GitHub Repository

The main repository contains the framework specification, prompts, and detailed documentation for securable software engineering practices.

- [github.com/OWASP/FIASSE](https://github.com/OWASP/FIASSE)
- Active Development · CC BY-SA 4.0 License · Community Driven

### OWASP Project Page

Official OWASP project documentation and community resources — comprehensive documentation, community discussions, and the latest project updates.

- [owasp.org/www-project-fiasse](https://owasp.org/www-project-fiasse/)

### Community

- Slack: `#project-fiasse`
- GitHub: [OWASP/FIASSE](https://github.com/OWASP/FIASSE)
- OWASP Project: [owasp.org/www-project-fiasse](https://owasp.org/www-project-fiasse/)

Ways to get involved:

- Contribute feedback
- Create a Pull Request with correction or addition

---

## Links

### Quick Links

- [OWASP Project Page](https://owasp.org/www-project-fiasse/)
- [GitHub Repository](https://github.com/OWASP/FIASSE)
- [Prompts](https://github.com/OWASP/FIASSE/tree/main/prompts)
- [Other OWASP Projects](https://owasp.org/projects/)
- [OWASP Cheat Sheets](https://cheatsheetseries.owasp.org/)

### Legal

- [Privacy Policy](https://owasp.org/www-policy/operational/privacy)
- [Policies & Terms](https://owasp.org/www-policy/)
- [License (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/)
- [Security Policy](https://github.com/OWASP/FIASSE/security/policy)

---

&copy; 2025 OWASP FIASSE Project. Licensed under CC BY-SA 4.0. *Relentlessly Practical. Relentlessly Securable.*
