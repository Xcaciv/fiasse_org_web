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