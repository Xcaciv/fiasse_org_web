# OWASP FIASSE

> Framework for Integrating Application Security into Software Engineering

Relentlessly Practical. Relentlessly Securable.

FIASSE (pronounced /feiz/, like "the phases of the moon") is a framework for Securable Software Engineering. It provides practical guidance for Software Engineers to build securable applications, and for Security to impact securable outcomes.

[Read the Doc (v1.0.4)](https://github.com/Xcaciv/securable_software_engineering/blob/v1.0.4/docs/securable_framework.md)

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

To provide developers and security professionals with a practical, actionable framework to reduce friction and increase developer velocity. Security should be relentlessly practical for software engineers, and security teams have more to offer than secret test suites.

### Key Concepts

- **The Securable Principle** — There is no static state of "secure". New methods of exploitation are developed all the time, so even unchanged software may have new vulnerabilities. Software must be maintainable or it will be exploitable.
- **Business Alignment** — Security must align with development's reason for existing to engage with them. This means abandoning the "shovel-left" anti-pattern in favor of clearer communication and earlier collaboration.
- **Participation over Assessment** — Structured participation by the security team in the development process yields better results than security assessment alone, which tends to be late and expensive. It is OK to give development the answers to the security test, because they have to implement it to functionally pass. This is called requirements.

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
2. **Threat Modeling** — Identify potential threats and vulnerabilities using a framework like STRIDE, PASTA, or DREAD.

#### Requirements

1. **Threat Scenarios** — Identify potential threats and frame them as use cases.
2. **Acceptance Criteria** — Define what it looks like when the product is protected from threats.
3. **Security Requirements** — Features that include sensitive data or delicate operations need explicit security requirements (see OWASP ASVS).
4. **Security Features** — Matching the existing style, include explicit security requirements (see OWASP ASVS).

### Implementation

Encourage Software Engineering as a discipline so as to improve software security posture.

#### Code

1. **Securable Software Engineering Model (SSEM)** — Continually target Maintainability, Trustworthiness, and Reliability.
2. **Securable Tenets** — Foster a mindset for creating securable software; support it with process.

#### Process

1. **Software Engineering process extensions** — Align security assurance and governance with existing empirical software engineering processes.
2. **Securable Tenet Support** — Support the Securable Mindset in development activities like Merge Reviews and Dependency Management.
3. **Dependency Stewardship** — Treat third-party dependencies as an ongoing engineering responsibility: selection, monitoring, update cadence, and removal — not a one-time choice.
4. **Strategic Remediation** — Higher-quality security assurance data allows for systemic remediation and empirical process change.

### Assurance

Assurance activities are still important when using the FIASSE approach. Investment in participation during Requirements and Design has high value, and there is a significant difference in how testing results are used.

- **Vulnerability Analysis** — Trend and class analysis with root cause investigation and vulnerability verification to avoid "shoveling left". Includes standard AppSec analysis types for comprehensive coverage. *(Root Cause, Exploitability, Risk Analysis, Collaborative Remediation, Vulnerability Correlation, Attack Surface Analysis)*
- **Training** — Role-specific, practical training for developers. *(Product, Architecture & Design, Software Engineering, Quality Assurance)*
- **Program Assessment** — Point-in-time assessment of Application Security process and program effectiveness. *(OWASP SAMM, OWASP ASVS, BSIMM, NIST SSDF, ISO/IEC 27034, CIS Controls, PCI Secure SLC)*
- **Automated Application Security Testing** — Fast and affordable testing to identify basic security vulnerabilities. *(SAST, DAST, SCA, IAST, RASP, IaC Scanning, Secrets Scanning, API Security Testing, Configuration Analysis)*
- **Manual Pentesting** — Hands-on process to uncover complex issues tools often miss. *(Expert Analysis, Business Logic Testing, Exploit Validation)*
- **Compliance** — The security policy defining how your organization builds secure products. *(OWASP PSCF, Point-in-time assessments, Continuous Improvement)*

---

## SSEM — Securable Software Engineering Model

*SSEM v2.1.0* — pronounced /si:m/

A model that identifies fundamental and universal attributes that are the building blocks of securable software. Together, these terms form a comprehensive model for understanding software security and a design language for communicating security concerns.

The SSEM is centered on the core attributes that make software "securable" (FIASSE RFC §2.1). These attributes allow SSEM to abstract security away from specialized jargon or exploit-centric views:

- **For Software Engineers** — integrate security considerations as a natural part of development work.
- **For the Security Team** — identify how existing code meets security needs and where improvements are required; surface where explicit security requirements are needed for functionality not covered by inherent attributes alone.

### Concrete Security

- **Securable Attributes over Security Controls** — Emphasize building software with inherent qualities so it's easier to analyze, modify, test, and trust. Security features fully implemented in code are less likely to be circumvented and can always be supplemented.
- **Participation over Assessment** — The security team offers high value when actively participating in development rather than only assessing after the fact. Participation enables organic knowledge transfer from the start.
- **First Principle Alignment** — Ground security in established software engineering first principles rather than security-specific jargon or adversarial heuristics. Shared engineering vocabulary lets developers reason about security without years of specialized training.
- **Business Alignment** — Security that sustains the organization's value creation over security pursued as an end in itself. Judge security efforts by how well they support business objectives and risk tolerance, not by how much activity they generate.

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

SSEM identifies the fundamental attributes that are the building blocks of securable software in an evolving landscape (FIASSE RFC §2.1).

#### Maintainability

*The "degree of effectiveness and efficiency with which a product or system can be modified by the intended maintainers" (ISO/IEC 25010:2011).*

- **Analyzability** — Quickly assess the impact of changes, diagnose issues, and identify what needs to be modified.
- **Modifiability** — Safely and quickly modify a system without causing defects or reducing quality or securability.
- **Testability** — Verify that a system meets its requirements and is free of defects.
- **Observability** — Infer the internal state of a system from its external outputs.

#### Trustworthiness

*The "degree to which a system can be trusted to behave in a predictable manner" (ISO/IEC 25010:2011).*

- **Confidentiality** — Keep sensitive information secure and private.
- **Accountability** — Uniquely trace actions to the responsible entity.
- **Authenticity** — Confirm the identity of a user or system.

#### Reliability

*The "degree to which a system, product or component performs specified functions under specified conditions for a specified period of time" (ISO/IEC 25010:2011).*

- **Availability** — Remain accessible and operational when needed.
- **Integrity** — Ensure that data is accurate and uncorrupted.
- **Resilience** — Recover from failures and continue operating.

The model implies the existence of strategies for producing these qualities — which is where the rest of FIASSE comes in. While implementation patterns vary with platforms and tools, the model's purpose is to support the definition of the principles that drive these strategies.

### Measuring SSEM Attributes

Measuring SSEM attributes is essential to quantify and evaluate the securable qualities of software. The lists below are a starting point for teams to adapt and expand. Try using [this prompt](https://github.com/Xcaciv/securable_software_engineering/blob/main/examples/SSEM-analysis/SSEM-analysis.prompt.md) in your code assistant to get started.

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

- Authentication failures.
- Percentage of authentication points using MFA or strong credential types.

*Qualitative:*

- Identity verification processes.
- Integrity of authentication mechanisms.

#### Reliability — Universal Security

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

---

## Tenets of FIASSE

Core principles that guide software engineers in implementing securable software engineering practices using the FIASSE framework.

### Core Tenets

#### [Securable Principle](https://github.com/Xcaciv/securable_software_engineering/blob/main/docs/FIASSE-RFC.md#3-the-securable-principle)

Software is never in a final, fixed state of "secure"; instead, it must be built so it can be secured and kept secure over time. Security is an ongoing property of the system's design, code, and operations.

*Fundamentally, this means:*

- Emphasize maintainability, trustworthiness, and reliability as core engineering attributes to support long-term security.
- Design the system so that changes can be applied safely and predictably, without destabilizing it.

#### [Derived Integrity Principle](https://github.com/Xcaciv/securable_software_engineering/blob/main/docs/FIASSE-RFC.md#6411-the-derived-integrity-principle)

An application must not implicitly trust or adopt unmanaged external context — such as client-supplied data or other untrusted inputs — when making critical decisions. Instead, derive important facts (identity, permissions, pricing, state) from authoritative, controlled sources to preserve integrity.

*In practice:*

- Treat all external inputs (requests, headers, query parameters, cookies, webhooks, events) as untrusted until validated and normalized.
- Use explicitly trusted sources or recompute sensitive values server-side (roles, discounts, balances) rather than accepting them from the client.
- Design flows so behavior depends on trustworthy state, avoiding hidden or accidental trust in anything an attacker can influence.

#### [Canonical Input Handling](https://github.com/Xcaciv/securable_software_engineering/blob/main/docs/FIASSE-RFC.md#641-canonical-input-handling)

Convert all incoming data into a validated, well-defined state before it is used anywhere in the system. Supports the Securable and Derived Integrity principles by ensuring every decision is based on normalized, predictable input.

- All external inputs (HTTP parameters, headers, JSON bodies, files, events) are first normalized to a canonical representation (types, encodings, formats) and validated against strict expectations before any business logic runs.
- Only the trusted internal representation flows through the system; downstream logic does not re-handle every edge case of raw input.

*In practice:*

- Define clear schemas and allowed formats for all inputs; enforce them at trust boundaries (API gateways, controllers) so the rest of the code works with strongly typed, normalized objects.
- Use canonicalization to reduce ambiguity and attack surface (encodings, path forms, duplicated fields), making it easier to reason about integrity, authorization, and logging.

#### [The Transparency Principle](https://github.com/Xcaciv/securable_software_engineering/blob/main/docs/FIASSE-RFC.md#26-the-transparency-principle)

How the system works should be perceptible so engineers and stakeholders can see what it is doing, why, and how. Design systems whose behavior is visible.

- Transparency means exposing clear, contextualized signals about system behavior (logs, metrics, traces, decision reasons) so people can detect misuse, misconfiguration, and drift early.
- Instead of hiding complexity behind black boxes, the system surfaces enough structured information to reason about integrity, authorization, and failure modes.
- This attribute is not entirely exposed to end users, to preserve confidentiality.

*In practice:*

- Build consistent, meaningful observability: structured logging, traceable request flows, clear error reporting, and auditable security-relevant events, all tied to business context.
- Use transparency to align AppSec and development via shared views of state, defects, and behavior.

### Engineering Principles

#### Boundary Control Principle

Flexibility within a system's interior is an engineering asset to be preserved; control at every trust boundary is a security requirement to be enforced. These objectives are complementary, not competing.

*In practice:*

- Identify trust boundaries where data crosses between differently-trusted entities (user → application, application → database, service → service).
- Locate control precisely at those boundaries; preserve interior flexibility for maintainability.
- Think of trust boundaries as the hard shell of a turtle: flexible interior, controlled perimeter.

#### Request Surface Minimization

The smaller and more intentional the surface that accepts external input, the fewer assumptions the rest of the system has to defend. Accept only what the operation needs, and reject everything else explicitly.

*In practice:*

- Define endpoint contracts that enumerate allowed fields, types, and ranges.
- Avoid generic pass-through parameters and catch-all endpoints.
- Minimize the headers, query parameters, and body fields the endpoint inspects; each one is surface an attacker can probe.

#### Principle of Least Astonishment

A system should behave the way a reasonable user, operator, or developer expects. Surprise is a source of defects — including security defects — because behavior that diverges from expectation is not being reviewed or defended.

*In practice:*

- Choose defaults, naming, and behavior consistent throughout the codebase and with users' expectations.
- Flag and document any deviation from expected behavior, especially at trust boundaries.
- Treat unexpected state as a signal worth investigating, not a condition to silently work around.

#### Actionable Security Intelligence Principle

Security output becomes valuable only once it is translated into prioritized, engineering-grounded direction calibrated to the developer's context. Raw tool output, exploit-centric narratives, and unfiltered vulnerability lists are information, not yet intelligence.

*In practice:*

- Security teams collaborate with development on systemic flaw reductions, not one-off finding hand-offs.
- Findings arrive through the engineering channels developers already use, tied to requirements and acceptance criteria.
- Reports explain observed effects and how they violate requirements or user expectations — skillful communication that opposes the "Shoveling Left" anti-pattern.

---

## Adoption

How to introduce FIASSE into an organization, assign responsibilities across roles, and avoid AppSec anti-patterns that undermine developer engagement.

### A Practical Path to Integration

FIASSE does not require a rigid adoption sequence, but organizations benefit from a deliberate implementation plan. The six steps below represent a practical path toward successful integration.

1. **Assess current practices** — Evaluate organizational readiness through stakeholder discussions and a review of existing security and development workflows. Identify where practices align with SSEM attributes and where misalignment exists.
2. **Integrate SSEM terminology** — Deliberately incorporate SSEM attributes (Maintainability, Trustworthiness, Reliability) and their sub-attributes into developer documentation, coding standards, and training. Build the common language that makes the rest possible.
3. **Identify key influencers** — Find senior engineers and stakeholders grounded in software engineering who can internalize the framework and champion adoption from within the engineering culture.
4. **Educate and train teams** — Role-specific training on FIASSE and SSEM delivered inside onboarding, merge reviews, architecture discussions, and requirements sessions — not as a standalone security program.
5. **Foster collaboration** — Promote regular engagement between AppSec and Development. Discourage isolated reviews. Encourage AppSec participation in requirements gathering and early design.
6. **Monitor and improve continuously** — Use real-time security observability to refine implementation over time. Treat adoption as ongoing discipline, not a one-time rollout.

### Roles and Responsibilities

FIASSE only works when responsibilities are distributed across the roles that shape software. Each role has a distinct contribution.

**Security Team** — Engage early and often. Shape requirements, design, and architecture rather than arriving at the end with a finding list.

- State security objectives in SSEM-grounded acceptance criteria developers can act on.
- Apply the Actionable Security Intelligence Principle: deliver engineering-grounded direction, not raw tool output.
- Measure the partnership through implementation completeness, not vulnerability counts.

**Senior Software Engineers** — Carry SSEM vocabulary and securable design patterns into merge reviews, architecture decisions, and mentorship.

- Model Boundary Control, Derived Integrity, and Canonical Input Handling in day-to-day code.
- Make securable design visible in reviews so junior engineers can learn it.
- Champion adoption from inside the engineering culture, not as a security mandate.

**Developing Software Engineers** — Apply SSEM attributes to the code you write and review. Securable engineering is an extension of good engineering, not a second discipline. Follow guidelines closely and understand *why* over time — only then can you identify *why not*.

- Use SSEM attribute language in commit messages, code comments, and review feedback.
- Treat trust boundaries as first-class design concerns; minimize request surface; derive integrity.
- Ask for framework-grounded acceptance criteria when requirements are vague. Clarity is a security feature.

**Product Owners and Managers** — The security posture of a product is a product decision. Every scope cut, deferred maintenance, or story accepted without security criteria has a consequence.

- Include framework-grounded security acceptance criteria in user stories and definitions of done.
- Protect time for dependency stewardship, threat modeling, and requirements refinement.
- Treat securable engineering as a product investment, not an externality paid by the security team.

### Common AppSec Anti-Patterns

These patterns undermine AppSec credibility and cause developer disengagement. Each has a corrective discipline grounded in the Actionable Security Intelligence Principle.

**"Shoveling Left"** — Supplying impractical information to developers and leaving the burden on them to make sense of it. Manifests in how vulnerabilities are reported, how training is conducted, and how test results are delivered.
*Corrective:* Apply the Actionable Security Intelligence Principle. Translate raw information into prioritized, engineering-grounded direction calibrated to the developer's context before handing it over.

**Ineffective Vulnerability Reporting** — Long finding lists with CVSS scores but no engineering direction. Developers are expected to prioritize, triage, and remediate without the security context.
*Corrective:* Report root cause, class of flaw, and suggested engineering change. Tie findings to requirements and acceptance criteria so remediation becomes ordinary engineering work.

**Exploit-First Training** — Training that teaches developers to think like attackers rather than to build securable software. Understanding how a system can be broken is not the same as knowing how to engineer it to remain defensible.
*Corrective:* Train on SSEM attributes and securable engineering patterns. Adversarial understanding is supplementary, not foundational.

**Bypassing Engineering Workflows** — Fix requests that circumvent the processes software engineers rely on. Disrupting the workflow degrades software quality and produces the conditions AppSec seeks to prevent.
*Corrective:* Route findings through normal engineering channels with clear, actionable information and time for the team's standard processes.

---

## Resources

### GitHub Repository

The main repository contains the RFC, examples, and detailed documentation for securable software engineering practices.

- [github.com/Xcaciv/securable_software_engineering](https://github.com/Xcaciv/securable_software_engineering)
- Active Development · CC BY-SA 4.0 License · Community Driven

### OWASP Project Page

Official OWASP project documentation and community resources — comprehensive documentation, community discussions, and the latest project updates.

- [owasp.org/www-project-fiasse](https://owasp.org/www-project-fiasse/)

### Community

- Slack: `#project-fiasse`
- GitHub: [@xcaciv/securable_software_engineering](https://github.com/Xcaciv/securable_software_engineering)
- OWASP Project: [owasp.org/www-project-fiasse](https://owasp.org/www-project-fiasse/)

Ways to get involved:

- Contribute feedback
- Create a Pull Request with correction or addition

---

## Links

### Quick Links

- [OWASP Project Page](https://owasp.org/www-project-fiasse/)
- [GitHub Repository](https://github.com/Xcaciv/securable_software_engineering)
- [Examples](https://github.com/Xcaciv/securable_software_engineering/tree/main/examples)
- [Other OWASP Projects](https://owasp.org/projects/)
- [OWASP Cheat Sheets](https://cheatsheetseries.owasp.org/)

### Legal

- [Privacy Policy](https://owasp.org/www-policy/operational/privacy)
- [Policies & Terms](https://owasp.org/www-policy/)
- [License (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/)
- [Security Policy](https://github.com/Xcaciv/securable_software_engineering/security/policy)

---

&copy; 2025 OWASP FIASSE Project. Licensed under CC BY-SA 4.0. *Relentlessly Practical. Relentlessly Securable.*
