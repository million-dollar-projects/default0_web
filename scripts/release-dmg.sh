#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'EOF'
Usage:
  scripts/release-dmg.sh [reserved] [dmg_path] [title] [notes]

Example:
  scripts/release-dmg.sh \
    _ \
    /Users/yangzie/www/mac/default0/build/default0-v1.0.0.dmg \
    "v1.0.0" \
    "Initial public release."
EOF
}

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
  usage
  exit 0
fi

if ! command -v git >/dev/null 2>&1; then
  echo "Error: git not found."
  exit 1
fi

if ! command -v gh >/dev/null 2>&1; then
  echo "Error: GitHub CLI (gh) not found."
  exit 1
fi

confirm() {
  local prompt="$1"
  local answer
  read -r -p "$prompt [y/N]: " answer
  [[ "$answer" =~ ^[Yy]$ ]]
}

if ! git ls-remote --exit-code origin >/dev/null 2>&1; then
  echo "Cannot access git remote 'origin'."
  echo "Please check SSH/network/auth first, then retry."
  echo "Hint: current origin is SSH; if port 22 is blocked, switch to HTTPS:"
  echo "  git remote set-url origin https://github.com/million-dollar-projects/default0_web.git"
  exit 1
fi

read -r -p "Enter version (e.g. 1.0.2): " input_version
version="${input_version#"${input_version%%[![:space:]]*}"}"
version="${version%"${version##*[![:space:]]}"}"
version="${version#v}"

if [[ -z "$version" ]]; then
  echo "Error: version cannot be empty."
  exit 1
fi

tag="v$version"
dmg_path="${2:-/Users/yangzie/www/mac/default0/build/default0-v${version}.dmg}"
title="${3:-$tag}"
notes="${4:-Initial public release.}"

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
source_version_json="/Users/yangzie/www/mac/default0/version/${version}.json"
target_version_json="${repo_root}/public/version.json"

if [[ ! -f "$source_version_json" ]]; then
  version_dir="/Users/yangzie/www/mac/default0/version"
  echo "Version file not found."
  echo "Expected file: $source_version_json"
  echo "Please create that file under: $version_dir"
  echo "Available versions:"
  ls -1 "$version_dir"/*.json 2>/dev/null | xargs -n1 basename | sed 's/\.json$//' || true
  exit 1
fi

if [[ ! -d "$(dirname "$target_version_json")" ]]; then
  echo "Error: target directory not found: $(dirname "$target_version_json")"
  exit 1
fi

echo "Copying version file to public/version.json ..."
cp "$source_version_json" "$target_version_json"

if [[ ! -f "$dmg_path" ]]; then
  echo "Error: DMG file not found: $dmg_path"
  exit 1
fi

if confirm "Confirm commit all uncommitted changes to git?"; then
  if [[ -n "$(git status --porcelain)" ]]; then
    echo "Staging all changes ..."
    git add -A
    echo "Creating commit ..."
    git commit -m "chore: release $tag"
  else
    echo "No uncommitted changes. Skip commit."
  fi
else
  echo "Canceled: commit not confirmed."
  exit 1
fi

if ! confirm "Confirm create and publish git tag $tag?"; then
  echo "Canceled: tag publish not confirmed."
  exit 1
fi

if git rev-parse -q --verify "refs/tags/$tag" >/dev/null; then
  echo "Tag already exists locally, skip creating tag: $tag"
else
  echo "Creating tag: $tag"
  git tag "$tag"
fi

echo "Pushing tag: $tag"
if ! git push origin "$tag"; then
  echo "Failed to push tag to origin."
  echo "Local commit/tag are kept:"
  echo "  - commit on current branch"
  echo "  - tag: $tag"
  echo "After fixing remote access, run:"
  echo "  git push origin main"
  echo "  git push origin $tag"
  exit 1
fi

echo "Creating GitHub release and uploading DMG..."
gh release create "$tag" \
  "$dmg_path" \
  --title "$title" \
  --notes "$notes"

echo "Release completed: $tag"
