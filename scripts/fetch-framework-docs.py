#!/usr/bin/env python3
# SPDX-License-Identifier: CC-BY-SA-4.0
"""Download the docs/framework subdirectory from a tagged release of
https://github.com/OWASP/FIASSE.

Usage:
    python scripts/fetch-framework-docs.py [TAG] [OUTPUT_DIR]

Defaults:
        TAG         v1.3.0
    OUTPUT_DIR  ./docs/framework

Uses only the Python 3 standard library.
"""
from __future__ import annotations

import argparse
import json
import shutil
import sys
import tarfile
import tempfile
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import urlopen

# GitHub repository and subdirectory being fetched.
REPO = "OWASP/FIASSE"
SUBDIR = "docs/framework"

# Default release tag and output path. If the user runs the script without
# arguments, it downloads the framework docs for v1.3.0 into ./docs/framework
# relative to the current working directory.
DEFAULT_TAG = "v1.3.0"
DEFAULT_OUTPUT = Path("docs/framework")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Download docs/framework from a tag of " + REPO
    )
    parser.add_argument(
        "tag",
        nargs="?",
        default=DEFAULT_TAG,
        help=f"release tag to fetch (default: {DEFAULT_TAG})",
    )
    parser.add_argument(
        "output_dir",
        nargs="?",
        type=Path,
        default=DEFAULT_OUTPUT,
        help=f"destination directory (default: {DEFAULT_OUTPUT})",
    )
    return parser.parse_args()


def resolve_tag(tag: str) -> str:
    if tag != "latest":
        return tag

    api_url = f"https://api.github.com/repos/{REPO}/releases/latest"
    try:
        with urlopen(api_url) as response:
            payload = json.load(response)
        latest_tag = payload.get("tag_name")
        if not latest_tag:
            sys.exit("Error: latest release tag is missing from the GitHub API response.")
        return latest_tag
    except HTTPError as e:
        sys.exit(
            f"Error: could not resolve the latest release from GitHub "
            f"(HTTP {e.code})."
        )
    except URLError as e:
        sys.exit(f"Error: could not reach GitHub API ({e.reason}).")


def download(url: str, dest: Path) -> None:
    try:
        with urlopen(url) as response, dest.open("wb") as out:
            shutil.copyfileobj(response, out)
    except HTTPError as e:
        sys.exit(
            f"Error: download failed for {url} (HTTP {e.code}). "
            "Check that the tag exists."
        )
    except URLError as e:
        sys.exit(f"Error: could not reach {url} ({e.reason}).")


def extract_subdir(archive: Path, subdir: str, dest: Path) -> int:
    """Extract files under <top>/<subdir>/ from the tarball into <dest>/.

    Strips both the GitHub-supplied <repo>-<tag>/ wrapper and the <subdir>/
    prefix so files land at their in-subdir paths.
    """
    dest_resolved = dest.resolve()
    count = 0

    with tarfile.open(archive, "r:gz") as tf:
        members = tf.getmembers()
        if not members:
            sys.exit("Error: archive is empty.")

        # GitHub wraps everything under one top-level folder; discover it
        # from the first member rather than guessing the naming.
        top = members[0].name.split("/", 1)[0]
        prefix = f"{top}/{subdir}/"

        for m in members:
            if not m.name.startswith(prefix):
                continue
            rel = m.name[len(prefix):]
            if not rel:
                continue

            target = (dest / rel).resolve()
            try:
                target.relative_to(dest_resolved)
            except ValueError:
                # Defensive: refuse entries that would escape the destination.
                continue

            if m.isdir():
                target.mkdir(parents=True, exist_ok=True)
                continue
            if m.issym() or m.islnk():
                continue  # framework docs are plain files; skip links

            target.parent.mkdir(parents=True, exist_ok=True)
            src = tf.extractfile(m)
            if src is None:
                continue
            with src, target.open("wb") as out:
                shutil.copyfileobj(src, out)
            count += 1

    if count == 0:
        sys.exit(f"Error: '{subdir}' not found in the archive.")
    return count


def main() -> None:
    args = parse_args()
    tag: str = resolve_tag(args.tag)
    output_dir: Path = args.output_dir

    # GitHub source archives are downloaded as a .tar.gz file for the requested
    # tag, then the framework docs are peeled out of that archive and written to
    # the target directory.
    url = f"https://codeload.github.com/{REPO}/tar.gz/refs/tags/{tag}"

    with tempfile.TemporaryDirectory() as tmp:
        archive = Path(tmp) / "archive.tar.gz"
        print(f"Fetching {REPO}@{tag}...")
        download(url, archive)

        # The destination is not created under the temp download directory. It is
        # the caller-provided path, which defaults to ./docs/framework from the
        # current working directory.
        print(f"Extracting {SUBDIR} -> {output_dir}...")
        if output_dir.exists():
            shutil.rmtree(output_dir)
        output_dir.mkdir(parents=True, exist_ok=True)
        count = extract_subdir(archive, SUBDIR, output_dir)

    print(f"Wrote {count} file(s) to {output_dir}")


if __name__ == "__main__":
    main()
