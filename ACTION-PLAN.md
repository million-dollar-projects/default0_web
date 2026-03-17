# SEO ACTION PLAN — Default0

Generated: 2026-03-17 (Asia/Tokyo)

## Critical (fix immediately)

1. Create crawl/index control endpoints
- Add `app/robots.ts` with sitemap reference and clear allow/disallow rules.
- Add `app/sitemap.ts` generating all locale pages + blog URLs.
- Add `public/llms.txt` to guide AI crawlers and citation extraction.

2. Implement locale alternates (`hreflang`)
- For each locale page and blog page, add `alternates.languages` and `x-default` in metadata.
- Ensure each translated equivalent points to all language versions.

3. Fix broken footer destination
- Replace placeholder `#` changelog link in `components/site-chrome.tsx` (`getHref` index 2) with a valid URL or remove link.

## High (within 1 week)

1. Upgrade blog metadata quality
- In `app/[locale]/blog/page.tsx` and `app/[locale]/blog/[slug]/page.tsx`, add:
  - canonical
  - Open Graph URL/image/title/description
  - Twitter metadata

2. Expand structured data
- Add `Blog` / `CollectionPage` schema for blog index.
- Add `BlogPosting` schema for each article with `headline`, `datePublished`, `inLanguage`, `author`, `publisher`.

3. Resolve domain consistency
- Align canonical/base domain across:
  - `app/layout.tsx` (`metadataBase: https://default0.app`)
  - `public/version.json` (`downloadURL: https://www.default0.com/`)

## Medium (within 1 month)

1. Improve E-E-A-T and trust signals
- Add “About”/maintainer identity section, support policy, and changelog page.
- Add author metadata for blog posts.

2. Improve internal link graph
- Link from each blog post to related posts and core conversion sections.
- Add breadcrumb navigation for blog detail pages.

3. Improve media efficiency
- Audit whether large PNG assets are still needed; remove or move non-production assets out of `public/`.

## Low (backlog)

1. Add search-focused long-tail pages
- Expand multilingual article cluster around adjacent risk moments (Bluetooth reconnect, app switch mute, wake-from-sleep).

2. Add FAQ schema if Q&A sections become dedicated pages

---

## Expected Impact

If Critical + High actions are completed, expected SEO Health Score uplift is roughly **+14 to +20 points** (from ~62 to ~76–82).

## Implementation Order (recommended)

1. `robots` + `sitemap` + `llms.txt`
2. `hreflang` + canonical coverage on blog routes
3. broken link fix
4. schema expansion
5. trust/content depth expansion
