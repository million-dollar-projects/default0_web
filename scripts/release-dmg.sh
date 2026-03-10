#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'EOF'
Usage:
  scripts/release-dmg.sh <tag> [dmg_path] [title] [notes]

Example:
  scripts/release-dmg.sh v1.0.0 \
    /Users/yangzie/www/mac/default0/build/default0.dmg \
    "v1.0.0" \
    "Initial public release."
EOF
}

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
  usage
  exit 0
fi

if [[ $# -lt 1 ]]; then
  usage
  exit 1
fi

if ! command -v git >/dev/null 2>&1; then
  echo "Error: git not found."
  exit 1
fi

if ! command -v gh >/dev/null 2>&1; then
  echo "Error: GitHub CLI (gh) not found."
  exit 1
fi

tag="$1"
dmg_path="${2:-/Users/yangzie/www/mac/default0/build/default0.dmg}"
title="${3:-$tag}"
notes="${4:-Initial public release.}"

if [[ ! -f "$dmg_path" ]]; then
  echo "Error: DMG file not found: $dmg_path"
  exit 1
fi

if git rev-parse -q --verify "refs/tags/$tag" >/dev/null; then
  echo "Tag already exists locally, skip creating tag: $tag"
else
  echo "Creating tag: $tag"
  git tag "$tag"
fi

echo "Pushing tag: $tag"
git push origin "$tag"

echo "Creating GitHub release and uploading DMG..."
gh release create "$tag" \
  "$dmg_path" \
  --title "$title" \
  --notes "$notes"

echo "Release completed: $tag"
