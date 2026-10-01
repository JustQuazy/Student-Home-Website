# Student Home website

A local review slice built with Astro and Starlight: the homepage and household-regulations guide. This repository has independent history and contains only site inputs. It has no deployment configuration or remote.

## Local review

Use Node.js 22.12 or newer (verified with Node.js 24.14.1).

```sh
npm ci
npm run check
npm run build
npm run preview -- --port 4322
```

Open http://127.0.0.1:4322/ in a browser. Preview serves the production build, including Pagefind search. Use `npm run dev` for live editing; rebuild before reviewing search.

The guide's body is preserved from the reviewed Markdown. Only its frontmatter and duplicate top-level title are adapted for Starlight. The contents menu follows the 14 original sections; subsection headings also have direct anchors and appear in search.

No public release is approved. The preview binds to loopback, pages carry `noindex, nofollow`, and the intended hosting URL is deliberately unset. A build may report that sitemap generation is skipped until a hosting destination is chosen. Do not use this repository as a broad vault export.
