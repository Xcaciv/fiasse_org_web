#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const repoRoot = process.cwd();
const outputPath = path.join(repoRoot, "THIRDPARTIES.md");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function packageNameFromPath(packagePath) {
  if (!packagePath || !packagePath.includes("node_modules/")) {
    return null;
  }
  const parts = packagePath.split("node_modules/");
  return parts[parts.length - 1] || null;
}

function buildRows(lockfilePath) {
  const lock = readJson(lockfilePath);
  const packages = lock.packages || {};
  const rootPkg = packages[""] || {};

  const directProd = new Set(Object.keys(rootPkg.dependencies || {}));
  const directDev = new Set(Object.keys(rootPkg.devDependencies || {}));
  const rows = [];

  for (const [pkgPath, pkgData] of Object.entries(packages)) {
    const name = packageNameFromPath(pkgPath);
    if (!name) {
      continue;
    }

    let depType;
    if (directProd.has(name)) {
      depType = "direct (production)";
    } else if (directDev.has(name)) {
      depType = "direct (development)";
    } else if (pkgData.dev) {
      depType = "transitive (development)";
    } else {
      depType = "transitive (production)";
    }

    rows.push({
      name,
      version: pkgData.version || "UNKNOWN",
      dependencyType: depType,
      license: pkgData.license || "UNKNOWN"
    });
  }

  rows.sort((a, b) => {
    if (a.name === b.name) {
      return a.version.localeCompare(b.version);
    }
    return a.name.localeCompare(b.name);
  });

  return rows;
}

function toMarkdownTable(rows) {
  if (!rows.length) {
    return "No dependencies found.\n";
  }

  const lines = [
    "| Package | Version | Dependency Type | License |",
    "| --- | --- | --- | --- |"
  ];

  for (const row of rows) {
    lines.push(`| ${row.name} | ${row.version} | ${row.dependencyType} | ${row.license} |`);
  }

  return `${lines.join("\n")}\n`;
}

function generate() {
  const rootLockPath = path.join(repoRoot, "package-lock.json");
  const apiLockPath = path.join(repoRoot, "api", "package-lock.json");

  if (!fs.existsSync(rootLockPath)) {
    throw new Error("Missing lockfile: package-lock.json");
  }

  if (!fs.existsSync(apiLockPath)) {
    throw new Error("Missing lockfile: api/package-lock.json");
  }

  const rootRows = buildRows(rootLockPath);
  const apiRows = buildRows(apiLockPath);

  const rootDevRows = rootRows.filter((row) => row.dependencyType.endsWith("(development)"));
  const apiRuntimeRows = apiRows.filter((row) => row.dependencyType.endsWith("(production)"));

  const now = new Date();
  const generatedDate = [
    String(now.getFullYear()),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0")
  ].join("-");

  const content = [
    "# Third-Party Dependencies and Notices",
    "",
    "This file lists third-party packages currently present in this repository based on lockfiles:",
    "- `package-lock.json` (root)",
    "- `api/package-lock.json`",
    "",
    `Generated on: ${generatedDate}`,
    "",
    "## Scope",
    "",
    "- Includes packages currently recorded in lockfiles.",
    "- Includes production and development dependencies.",
    "- For npm packages, license values are taken from lockfiles when present.",
    "- If a package license is not present in lockfile metadata, it is marked as `UNKNOWN`.",
    "",
    "## API Project (`api/`) Runtime Dependencies",
    "",
    toMarkdownTable(apiRuntimeRows).trimEnd(),
    "",
    "## Root Project (`./`) Development Dependencies",
    "",
    toMarkdownTable(rootDevRows).trimEnd(),
    "",
    "## Project License",
    "",
    "This repository declares `CC-BY-SA-4.0` for project content/code in:",
    "- `licence.txt`",
    "- `package.json`",
    "- `api/package.json`",
    "",
    "## Notes",
    "",
    "- This notice file is an inventory and does not replace the full text of each dependency license.",
    "- If required by your distribution/compliance policy, include full license texts in a dedicated `licenses/` directory and update this file accordingly.",
    ""
  ].join("\n");

  fs.writeFileSync(outputPath, content, "utf8");
  process.stdout.write(`Wrote ${path.relative(repoRoot, outputPath)}\n`);
}

generate();