# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install
pnpm dev            # dev server at http://localhost:4321 (next free port if taken)
pnpm build          # static output in dist/, 39 pages
pnpm preview        # serve dist/
pnpm astro check    # type-check Astro + MDX
```

Node ≥ 22, pnpm ≥ 11. Always install with `pnpm add` (not npm/yarn) — lockfile is pnpm.

There are no unit tests in this repo. "Verifying a change" means: `pnpm build` succeeds, then either `pnpm preview` and click around, or grep the built HTML for `class="katex-error"`.

## Architecture

### The two sources of truth for routes

Routes for formula pages come from intersecting two files. Keep them aligned:

1. **`src/lib/categories.ts`** — drives the navbar, footer link list, sidebar, homepage cards, category landing pages, and `/[category]` `getStaticPaths`. Editing this changes UI but not URLs that resolve.
2. **`src/content/formulas/<category>/<topic>.mdx`** — drives `/[category]/[topic]` `getStaticPaths` via the Astro content collection. Editing this changes URLs that resolve but not nav UI.

A topic listed in `categories.ts` with no matching MDX file produces a 404 link in the sidebar. An MDX file with no matching topic in `categories.ts` builds a page but isn't linked anywhere and throws at render time (the `[topic].astro` guard).

When adding a new formula topic: add the entry to `categories.ts` AND create the MDX file in the same PR.

### Auto-imported shortcodes

Shortcodes for MDX are registered in **`astro.config.mjs`** under `AutoImport({ imports: [...] })`. Files in `src/components/shortcodes/` are NOT auto-imported just by living there — they must be explicitly listed in that array. Math, Notice, Card, Badge, Kbd, Accordion, Spoiler, Steps, Quote, Tooltip, Diagram are all registered.

Adding a new shortcode = add the file + add the path to `astro.config.mjs`.

### LaTeX inside `<Math math="…" />`

LaTeX is passed as a JSX attribute string. **Backslashes are literal** — write `\frac{a}{b}`, not `\\frac{a}{b}`. JSX attribute strings do not process JS escapes. This is the opposite of the original Create-React-App source (which used JS string literals with `\\`).

There is a documented set of pre-existing LaTeX bugs preserved verbatim from the migration (`b^4` in complex-numbers modulus, `(x₂ - x₂)²` in distance formula, `\ulcorner` instead of `\Gamma`, etc.). See the **Roadmap** in [README.md](README.md). **Do not silently rewrite these when editing nearby prose** — the user is tracking them for a deliberate bugfix pass.

KaTeX renders with `throwOnError: false, strict: false` (see `src/components/shortcodes/Math.tsx`). Errors surface as inline red-text fallbacks rather than build failures. Sweep for them with `curl <page> | grep 'class="katex-error"'` — a clean page returns zero. Known gotcha: `&` is rejected even inside `\text{}` — use words or commas.

### Diagram component has two modes

[src/components/shortcodes/Diagram.astro](src/components/shortcodes/Diagram.astro) accepts either:
- `src="filename.svg"` → resolves to `/diagrams/<filename>` (file in `public/diagrams/`), rendered as `<img>` with dark-mode invert.
- Inline children (no `src` prop) → wraps `<slot />` in an `<svg>` that inherits `stroke=currentColor, fill=none, stroke-width=1.5`. Text labels inside must set `stroke="none"` or they pick up a stroke outline.

Existing `<Diagram src="…" />` references are tied to the original migration's SVG filenames in `public/diagrams/` (including the source typo `lows_of_trigonometry.svg`). Leave those filenames alone.

### Theme system

Tailwind v4 with `@theme { --color-… }` tokens in `src/styles/global.css`. Dark mode uses `@custom-variant dark (&:where(.dark, .dark *))` and toggles the `.dark` class on `<html>`. The class is set by an inline script in `BaseLayout.astro` BEFORE the body renders (FOUC prevention) — that script reads `localStorage.theme` first, then `prefers-color-scheme`. The `<ThemeToggle>` React component (client:load) writes back to localStorage.

When adding styles, use the theme tokens (`bg-surface`, `text-text`, `border-border`) rather than Tailwind palette names. Dark variants use the `*-dark` token suffix (`bg-surface-dark`, `text-text-dark`).

### Path aliases

Single alias: `@/*` → `src/*`. Defined in `tsconfig.json` `paths` without `baseUrl` (TS 7.0 deprecation — adding `baseUrl` will trigger a diagnostic). Both `.ts`/`.tsx`/`.astro` imports use this alias.

### Page actions (Edit on GitHub / Report an error)

[src/components/partials/PageActions.astro](src/components/partials/PageActions.astro) renders at the bottom of every formula page. It builds:
- An edit URL: `${site.repo}/edit/${site.branch}/${filePath}` (opens GitHub web editor)
- An issue URL: `${site.repo}/issues/new` with prefilled title, body template, and `bug:math` label

`site.repo`, `site.branch`, `site.contentRoot` are config in [src/lib/site.ts](src/lib/site.ts). The `[topic].astro` page computes `filePath = \`${site.contentRoot}/${entry.id}.mdx\`` and passes it down.

A matching issue form lives at [.github/ISSUE_TEMPLATE/math-error.yml](.github/ISSUE_TEMPLATE/math-error.yml) — GitHub picks this up when the `?labels=` URL matches.

## Content authoring conventions

- Voice is terse mathematical reference. Not blog, not tutorial, not marketing. The prose has been passed through a humanizer pass and should stay that way: at most one em-dash per paragraph, no significance inflation ("the algebraic kernel"), no copula avoidance ("serves as" → "is"), no signposting ("Notably,", "thus" at sentence starts).
- Don't add worked numerical examples (correctness risk without verification).
- Use `<Notice type="warning|tip|note|info">` sparingly for genuine pitfalls or shortcuts — not as decoration.

## Skills used to build this project

The project's design system and prose were shaped by skills under `.claude/skills/`:

- **ui-ux-pro-max** — generated the initial design system (Documentation Landing pattern + Swiss Minimalism style). Persisted output at [design-system/mathematics-reference/MASTER.md](design-system/mathematics-reference/MASTER.md). The typography pick was overridden manually because the skill's auto-suggestion ("Baloo 2 / Comic Neue") misfires on the `education` keyword.
- **humanizer** — applied to all 30 formula pages, homepage, about, privacy, footer copy, category descriptions. If you add new prose, run the same pass mentally before committing.

## Reference: full background

[README.md](README.md) has the migration history, archive repo link, roadmap, and contributing flow. [AGENTS.md](AGENTS.md) has additional guardrails for AI agents (Cursor, Cline, others).
