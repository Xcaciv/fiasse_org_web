# Project Memory

This file is the working memory for the repository. Keep it aligned with [readme.md](readme.md) and update it when project terminology or workflow changes.

## Source Of Truth

- [readme.md](readme.md) is the main entry point for the repository and should be treated as the first reference for project overview and local setup.
- If this file and the README ever disagree, prefer the README unless the change is an intentional project-memory update.
- Core framework details: [[docs/securable_framework.md](docs/securable_framework.md)](https://github.com/OWASP/FIASSE/blob/main/docs/securable_framework.md)
- Detailed model components: [[docs/framework](docs/framework)](https://github.com/OWASP/FIASSE/tree/main/docs/framework)

## Project Terms

- FIASSE means the Framework for Integrating Application Security into Software Engineering.
- FIASSE is a developer-facing, creational framework for building securable software.
- FIASSE does not map cleanly to security assurance frameworks or maturity models because it is not trying to measure organizational assurance posture.
- SSEM means the Securable Software Engineering Model.
- In conversation and project shorthand, pronounce FIASSE as the project name, but use SSEM as the acronym when referring to the model.

## Repository Rules

- Preserve the distinction between FIASSE as the broader framework and SSEM as the model used inside it.
- Keep language developer-centered and software-engineering-centered rather than compliance-centered.
- When updating site content, prefer wording that reflects FIASSE as a framework for creating securable software, not a security assurance scorecard.
- Do not use dashes as sentence structure to connect full ideas.
- If a sentence feels overloaded or compound, rewrite it as two or more clear sentences.

## Local Development

- Install dependencies with `npm install`.
- Run the site locally with `npm start`.
- The site is served from `src/` on port `8000` by default.

## Notes For Future Edits

- Add durable terminology decisions here when they affect multiple files.
- Treat this file as lightweight project memory, not a replacement for the documentation in `src/`.

## Framework Version Alignment

- The site, the `/docs/` mirror, and the agent skills under `src/.well-known/agent-skills/` reflect FIASSE v1.3.0 (`https://github.com/OWASP/FIASSE/tree/v1.3.0`).
- The `/docs/` mirror is the `docs/framework` section split from that tag, plus a site-specific `docs/llms.txt` with descriptions. Regenerate it with `scripts/fetch-framework-docs.py <tag> src/docs` when a new release is adopted, then update the index, version strings, and skill section references.
- Version strings to update together on a release bump: the header badge and footer in `src/index.html`, the framework version stat tile, `src/llms.txt`, `src/campaign/security_property.html`, the three `SKILL.md` files and their references, `src/.well-known/agent-skills/index.json` (descriptions and sha256 digests of each `SKILL.md`), and `DEFAULT_TAG` in the fetch script.

## Terminology Decisions (v1.3.0)

- Use "The Isolated Integrity Principle" (section 4.4.1.2). "Derived Integrity" is the retired name.
- Use "The Canonical Parsing Principle" (section 4.4.1.1). "Request Surface Minimization" is the retired name. Its content (explicit schema per operation, parse only expected fields, fail closed) lives inside Canonical Parsing.
- Use "The Actionable Security Intelligence Principle" (section 6.2) for the principle. "Strategic Use of Security Output" (section 6.3) is that principle applied to tool output, not a separate principle.
- Dependency guidance is a single section, "Dependency Stewardship" (section 4.5). There is no separate "Dependency Management" section.
- The input handling order in the framework is canonicalization, validation, sanitization.
- Attribute definitions cite ISO/IEC 25010, ISO/IEC 27000, and ISO/IEC TS 5723. Do not cite RFC 4949 for SSEM definitions.
