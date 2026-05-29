# AGENTS.md

Rules and conventions for any AI coding agent (Claude Code, Cursor, Cline, Aider, etc.) working in this repository. Read this before editing.

[CLAUDE.md](CLAUDE.md) has the architecture overview and is the more thorough document. This file is the short list of guardrails.

## Project in one paragraph

Static Astro 6 site that renders math formula reference pages with KaTeX. Content lives in MDX files under `src/content/formulas/<category>/<topic>.mdx`. Routes are generated from a combination of `src/lib/categories.ts` (UI source of truth for nav) and the MDX collection (URL source of truth). Original site was Create-React-App + react-mathjax2; this is the rewrite. Archived original: <https://github.com/MKAbuMattar/archive-mathematics>.

## Hard rules

1. **LaTeX strings in `<Math math="…" />` are JSX attribute strings, not JS strings.** Backslashes are literal: write `\frac{a}{b}`, never `\\frac{a}{b}`.

2. **Do not silently "fix" math errors.** There is a documented set of LaTeX bugs preserved verbatim from the migration (see the *Roadmap* in [README.md](README.md)). The owner is tracking them for a deliberate bugfix pass. Examples:
   - `basics/complex-numbers`: modulus uses `b^4` (should be `b^2`)
   - `coordinate-geometry/basics`: distance formula uses `(x₂ - x₂)²`
   - `trigonometry/hyperbolic`: `cosh` sign flip
   - `calculus/laplace-transform`: `\ulcorner` instead of `\Gamma`

   If you spot a wrong formula AND the owner asked for fixes, fix it. Otherwise leave it and surface it in your report.

3. **Frontmatter is not prose.** Do not edit `title:`, `category:`, `topic:`, `order:` in MDX frontmatter when "improving content". Frontmatter is canonical metadata.

4. **Do not edit shape SVG filenames in `public/diagrams/`.** The original migration kept original typos (`lows_of_trigonometry.svg`, `parallelgram.svg`). Existing `<Diagram src="…" />` references depend on these exact strings.

5. **Shortcodes are auto-imported via `astro-auto-import`, not by Astro itself.** A new shortcode in `src/components/shortcodes/` is invisible to MDX until added to the `AutoImport({ imports: [...] })` list in [astro.config.mjs](astro.config.mjs).

6. **Use `pnpm`, not npm or yarn.** Lockfile is `pnpm-lock.yaml`. Install latest with `pnpm add <pkg>`.

7. **Do not add `baseUrl` to `tsconfig.json`.** TypeScript 7.0 deprecation — `paths` resolves relative to the tsconfig file location without it.

## Voice for prose

This site has been deliberately humanized. The prose target is terse mathematical reference: declarative sentences, varied length, no marketing fluff. When you write or edit prose:

- At most one em-dash per paragraph
- No significance inflation ("the algebraic kernel", "the cornerstone identity", "essential", "fundamental" except where it's actual math terminology)
- No copula avoidance ("serves as" → "is")
- No signposting filler ("It is important to note that…", "Notably,", "Crucially,", "Indeed,", "thus" / "hence" at sentence starts)
- No "-ing analyses" ("highlighting the…", "demonstrating that…", "underscoring how…")
- No worked numerical examples (correctness risk without verification)

If your output reads like a blog post, rewrite it.

## File-edit checklist

Before saving an edit, verify:

- LaTeX in `<Math math="…" />` is unchanged (unless you were asked to fix math)
- Frontmatter is unchanged (unless you were asked to update metadata)
- Existing `<Diagram src="…" />` filenames are unchanged
- No new imports added to MDX files (everything is auto-imported)
- Tailwind theme tokens used instead of palette names (`bg-surface` not `bg-white`, `text-text` not `text-slate-900`)

## Build verification

```bash
pnpm build
```

Should complete in ~2.5s and produce 39 pages. If it fails, the first 50 lines of output usually identify the issue.

For KaTeX render errors specifically (which don't fail the build):

```bash
pnpm preview &  # in background
# then for each route:
curl -s http://localhost:4321/<route> | grep -c 'class="katex-error"'  # should be 0
```

## What to do when unsure

- Need a new shortcode? Match the existing pattern in `src/components/shortcodes/` (TypeScript, default export, `cn()` from `@/lib/cn` for classes, `Diagram.astro` if it needs SVG slot support).
- Need a new page? Match the existing pattern in `src/pages/`. Use `BaseLayout` for standalone pages, `CategoryLayout` if it lives under a category and needs the sidebar.
- Need to add a topic? Add to `src/lib/categories.ts` AND create the MDX file in `src/content/formulas/<category>/<topic>.mdx`. URLs only resolve when both are present.
- Need to install a package? `pnpm add <name>` (or `pnpm add -D <name>` for dev deps).

## What never to do

- Run `npm install` / `yarn install` (will fight the pnpm lockfile)
- Push branches with `--force` to `main`
- Commit `node_modules/`, `dist/`, `.astro/`
- Add a `tsconfig.json` `baseUrl` field
- Bulk-rewrite the formula MDX files to "improve them" without an explicit ask
