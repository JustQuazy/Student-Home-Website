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

## Heading and section styles

Article H2 headings mark major sections (28-34 px), H3 headings mark subsections (22-24 px), and H4 headings mark focused topics (18-20 px). Sizes scale with the viewport using rem-based CSS. Major sections get a theme-aware divider, 3-4 rem of space before it, and 1.5-2 rem after it. Subsection/topic gaps are smaller, and consecutive headings stay grouped. These shared article styles also apply to the homepage; navigation headings and the hero retain their own presentation. Keep semantic heading levels and existing anchors when editing content.

## Homepage artwork

`src/components/HomeHero.astro` wraps the standard Starlight hero with the selected warm portrait artwork. Mobile displays the whole facade below the text; desktop crops the artwork to the right with an ivory fade behind the copy. The hero keeps dark text and a green button on its light canvas in either theme. The image is decorative (`alt=""`), loaded eagerly, and built as responsive WebP variants (approximately 34/78/127 kB). Original artwork is under `src/assets/`; the unselected alternative is retained there but excluded from the build. No input reference screenshots are exported.
