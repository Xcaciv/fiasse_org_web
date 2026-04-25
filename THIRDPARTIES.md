# Third-Party Dependencies and Notices

This file lists third-party packages currently present in this repository based on lockfiles:
- `package-lock.json` (root)
- `api/package-lock.json`

Generated on: 2026-04-24

## Scope

- Includes packages currently recorded in lockfiles.
- Includes production and development dependencies.
- For npm packages, license values are taken from lockfiles when present.
- If a package license is not present in lockfile metadata, it is marked as `UNKNOWN`.

## API Project (`api/`) Runtime Dependencies

| Package | Version | Dependency Type | License |
| --- | --- | --- | --- |
| @azure/functions | 4.7.2 | direct (production) | MIT |
| @fastify/busboy | 2.1.1 | transitive (production) | MIT |
| cookie | 0.7.2 | transitive (production) | MIT |
| long | 4.0.0 | transitive (production) | Apache-2.0 |
| undici | 5.29.0 | transitive (production) | MIT |

## Root Project (`./`) Development Dependencies

| Package | Version | Dependency Type | License |
| --- | --- | --- | --- |
| @playwright/test | 1.22.2 | direct (development) | UNKNOWN |
| @types/node | 18.0.0 | transitive (development) | UNKNOWN |
| playwright-core | 1.22.2 | transitive (development) | UNKNOWN |

## Project License

This repository declares `CC-BY-SA-4.0` for project content/code in:
- `licence.txt`
- `package.json`
- `api/package.json`

## Notes

- This notice file is an inventory and does not replace the full text of each dependency license.
- If required by your distribution/compliance policy, include full license texts in a dedicated `licenses/` directory and update this file accordingly.
