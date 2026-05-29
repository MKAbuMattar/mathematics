# Mathematics

A searchable reference for the math formulas you actually use. Algebra, geometry, trigonometry, and calculus, rendered with KaTeX.

<p>
  <a href="http://math.mkabumattar.com"><img alt="Live" src="https://img.shields.io/badge/live-math.mkabumattar.com-0891b2?style=flat-square"></a>
  <a href="https://github.com/MKAbuMattar/mathematics"><img alt="Repo" src="https://img.shields.io/badge/repo-MKAbuMattar%2Fmathematics-181717?style=flat-square&logo=github"></a>
  <img alt="Pages" src="https://img.shields.io/badge/pages-39-22c55e?style=flat-square">
  <img alt="Formulas" src="https://img.shields.io/badge/formulas-30%20topics-22c55e?style=flat-square">
  <img alt="Astro" src="https://img.shields.io/badge/astro-6-BC52EE?style=flat-square&logo=astro&logoColor=white">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white">
  <img alt="KaTeX" src="https://img.shields.io/badge/math-KaTeX-329F75?style=flat-square">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue?style=flat-square">
</p>

- **Live site:** <http://math.mkabumattar.com>
- **Repo (active):** <https://github.com/MKAbuMattar/mathematics>
- **Archived original (CRA build):** <https://github.com/MKAbuMattar/archive-mathematics>

> This is a full rewrite of the original Create-React-App + MathJax site. The archived repo above stays read-only as a historical record. New issues and PRs go here.

## Why

Most formula references bury what you need under context you don't. This site keeps each topic on a focused page, renders math with KaTeX, and ships with light and dark modes. No accounts, no tracking, no ads.

## Contents

- [Stack](#stack)
- [Quick start](#quick-start)
- [Project layout](#project-layout)
- [Adding a formula page](#adding-a-formula-page)
- [Shortcodes](#shortcodes)
- [Contributing](#contributing)
- [Reporting a math error](#reporting-a-math-error)
- [Roadmap](#roadmap)
- [Design](#design)
- [Migration from archive-mathematics](#migration-from-archive-mathematics)
- [Scripts](#scripts)
- [Credits](#credits)
- [License](#license)

## Stack

- [Astro 6](https://astro.build) with MDX content collections
- [React 19](https://react.dev) for interactive shortcodes
- [Tailwind CSS v4](https://tailwindcss.com) for the design system
- [KaTeX](https://katex.org) for math rendering
- [astro-auto-import](https://github.com/delucis/astro-auto-import) so shortcodes work in MDX without imports
- [lucide-react](https://lucide.dev) icons

## Quick start

```bash
git clone https://github.com/MKAbuMattar/mathematics.git
cd mathematics
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static output in dist/
pnpm preview    # serve the build locally
```

Node ≥ 22 and pnpm ≥ 11 are assumed.

## Project layout

```
src/
  components/
    partials/         Navbar, Footer, Sidebar, Breadcrumbs
    shortcodes/       Math, Notice, Card, Badge, Kbd, Accordion, Spoiler,
                      Steps, Quote, Tooltip, Diagram (auto-imported in MDX)
    ui/               ThemeToggle
  content/
    formulas/         30 MDX files, organised by category
      basics/
      geometry/
      coordinate-geometry/
      trigonometry/
      calculus/
  content.config.ts   Zod schema for the formulas collection
  layouts/
    BaseLayout.astro      site shell, head meta, theme script
    CategoryLayout.astro  topnav + sidebar + content grid
  lib/
    categories.ts     single source of truth for nav + sidebar
    cn.ts             tailwind class merger
    site.ts           site metadata
  pages/
    index.astro
    about.astro
    privacy-policy.astro
    404.astro
    [category]/
      index.astro     category landing
      [topic].astro   renders the matching MDX
  styles/
    global.css        Tailwind v4 entry, theme tokens, font imports, KaTeX
public/
  diagrams/           SVG figures used by Diagram src=
```

## Adding a formula page

1. Pick a category and add a topic entry to [src/lib/categories.ts](src/lib/categories.ts). The slug becomes the URL.
2. Create the MDX file at `src/content/formulas/<category>/<topic>.mdx` with frontmatter:

   ```yaml
   ---
   title: "Page Title"
   description: "One sentence."
   category: "calculus"
   topic: "derivatives"
   order: 2
   ---
   ```

3. Author the body in markdown plus shortcodes. Math goes in `<Math>`:

   ```mdx
   ## Power Rule

   Drop the exponent and reduce by one:

   <Math math="\frac{d}{dx}(x^n) = n x^{n-1}" display />
   ```

4. Drop in diagrams either via a file in `public/diagrams/` and `<Diagram src="..." />`, or as inline SVG:

   ```mdx
   <Diagram
     alt="Unit circle"
     viewBox="0 0 200 200"
     caption="cos² θ + sin² θ = 1"
   >
     <circle cx="100" cy="100" r="80" />
     <text x="100" y="98" font-size="10" fill="currentColor" stroke="none">
       O
     </text>
   </Diagram>
   ```

## Shortcodes

All shortcodes are auto-imported in MDX. No imports needed in content files.

| Component                                                              | Use                                          |
| ---------------------------------------------------------------------- | -------------------------------------------- |
| `<Math math="..." display? />`                                         | KaTeX. `display` for block, omit for inline. |
| `<Notice type="info\|tip\|warning\|note" title?>...</Notice>`          | Callout boxes.                               |
| `<Card title? href?>...</Card>`                                        | Bordered content card.                       |
| `<Badge color="primary\|green\|amber\|red\|slate\|violet">...</Badge>` | Pills.                                       |
| `<Kbd>...</Kbd>`                                                       | Keyboard key styling.                        |
| `<Accordion title defaultOpen?>...</Accordion>`                        | Collapsible section.                         |
| `<Spoiler>...</Spoiler>`                                               | Click-to-reveal.                             |
| `<Steps>` + `<li>`                                                     | Numbered step list with circle markers.      |
| `<Quote cite?>...</Quote>`                                             | Block quote.                                 |
| `<Tooltip tip="...">...</Tooltip>`                                     | Hover tooltip.                               |
| `<Diagram src? alt? caption? viewBox?>`                                | Image or inline SVG, light/dark themed.      |

Registration is in [astro.config.mjs](astro.config.mjs).

## Contributing

Contributions are welcome. Especially:

- **Fixing math errors** — wrong signs, missing exponents, typos in LaTeX (see [Reporting a math error](#reporting-a-math-error)).
- **Adding new topics** — number theory, linear algebra, statistics, discrete math, etc. Open an issue first if it's a whole new category.
- **Improving explanations** — clearer wording, better intuition, removing remaining padding. Keep the voice terse and direct; resist marketing fluff.
- **Authoring diagrams** — SVG figures that clarify a formula. Inline SVGs are preferred; one-off raster images go in `public/diagrams/`.
- **Improving accessibility** — alt text, focus states, keyboard nav, color contrast.

### Workflow

1. Fork the repo and create a branch: `git checkout -b fix/log-sign-error`.
2. Make the change. For content-only edits you don't need to run the build.
3. Run `pnpm build` and `pnpm astro check` locally to make sure nothing breaks.
4. Open a PR against `main`. Link the relevant issue if there is one.

### Style

- LaTeX inside `<Math math="..." />` stays as JSX-attribute strings. Backslashes are literal — `\frac` not `\\frac`.
- Prose stays declarative. No "It is important to note…", no overuse of em-dashes, no marketing adjectives. See the existing pages for the target voice.
- SVGs inside `<Diagram>` inherit `stroke="currentColor"` and `fill="none"` so they theme correctly. Text labels need `stroke="none"`.

## Reporting a math error

A subset of the original LaTeX strings were migrated verbatim and carry math bugs that haven't been corrected yet (see [Roadmap](#roadmap)). If you find a wrong formula:

1. Search [open issues](https://github.com/MKAbuMattar/mathematics/issues?q=is%3Aissue+label%3Abug%3Amath) for `bug:math` first.
2. If not already filed, open a new issue with:
   - URL of the page (e.g. `/calculus/derivatives`)
   - The exact incorrect LaTeX (copy from the MDX file)
   - The correct LaTeX
   - One-line reason (e.g. "Pythagorean identity sign flipped")

Or skip the issue and open a PR directly.

## Roadmap

- [ ] **LaTeX-bugfix pass** — correct the math errors carried over from the archived original:
  - `basics/complex-numbers`: modulus uses `b^4` (should be `b^2`); conjugate has the wrong sign
  - `basics/probability`: `P(A∪B)` formula has an empty `P()` argument
  - `coordinate-geometry/basics`: distance formula uses `(x₂ - x₂)²`
  - `coordinate-geometry/circle`: empty exponent on `r^{}`
  - `coordinate-geometry/hyperbola`: equation 1 uses `x²/b²` instead of `y²/b²`
  - `trigonometry/basics`: co-function arguments written as `π/(2-θ)` instead of `π/2 - θ`
  - `trigonometry/hyperbolic`: `cosh` defined with `(eˣ - e⁻ˣ)/2` (sign flip); `tanh² - sech² = 1` (sign)
  - `calculus/laplace-transform`: uses `\ulcorner` where `\Gamma` was intended
- [ ] **Pagefind static search** — index every page so users can jump to a formula by keyword.
- [ ] **Per-page table of contents** on long pages (derivatives, integration).
- [ ] **MathML output toggle** for screen readers that prefer it over KaTeX HTML.
- [ ] **Print stylesheet** — collapse nav/sidebar so a page can be printed as a one-shot cheat sheet.
- [ ] **More categories** — linear algebra, number theory, statistics.

## Design

Design tokens (cyan-600 primary, slate neutrals, IBM Plex Sans + JetBrains Mono + KaTeX defaults) live in [src/styles/global.css](src/styles/global.css) under `@theme`. Dark mode flips on the `.dark` class on `<html>` set by the inline script in [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro).

The pattern and palette were generated by the [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) skill (Documentation Landing + Swiss Minimalism). The typography pick was overridden to IBM Plex Sans / JetBrains Mono because the skill's auto-suggestion (Baloo 2 / Comic Neue) misfired on the "education" keyword. The persisted design system is in [design-system/mathematics-reference/MASTER.md](design-system/mathematics-reference/MASTER.md).

Prose was passed through a humanizer pass to strip the usual AI tells (em-dash overuse, significance inflation, copula avoidance, signposting).

## Migration from archive-mathematics

The original site lives at [MKAbuMattar/archive-mathematics](https://github.com/MKAbuMattar/archive-mathematics) and uses Create-React-App, react-bootstrap, react-mathjax2, and react-router-dom v5. That repo is archived and will not receive new content.

What changed in the rewrite:

| Concern         | Before                                  | After                                        |
| --------------- | --------------------------------------- | -------------------------------------------- |
| Framework       | Create-React-App (react-scripts 3.4.1)  | Astro 6 (static)                             |
| Math rendering  | react-mathjax2 (unmaintained)           | KaTeX 0.17 (server-rendered)                 |
| Routing         | react-router-dom v5                     | Astro file-based routing                     |
| Content         | Hard-coded JSX with LaTeX in JS strings | MDX content collections with Zod schema      |
| Styling         | Bootstrap 4.5 CDN + custom CSS          | Tailwind v4 with theme tokens                |
| Slugs           | `/coordinate_geomery/laws_of_yrigonometry` (with typos) | `/coordinate-geometry/laws-of-trigonometry` |
| Build           | CRA webpack                             | Astro / Vite                                 |
| Dark mode       | None                                    | Yes, via `.dark` class                       |
| Diagrams        | Imported SVG files only                 | SVG files + inline `<svg>` via `<Diagram>`   |

Topic URLs were normalized to clean kebab-case slugs. If you have inbound links to the old paths, add redirects in `astro.config.mjs`.

## Scripts

```bash
pnpm dev          # dev server
pnpm build        # production build
pnpm preview      # serve dist/
pnpm astro check  # type-check Astro + MDX
```

## Credits

- Original Mathematics site and content authored by [Mohammad Abu Mattar](https://mkabumattar.github.io/).
- Shortcode pattern adapted from the portfolio at <https://github.com/MKAbuMattar> (private working tree).
- Design intelligence from the [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) skill.
- KaTeX team for fast, lightweight math rendering.

## License

MIT. See [LICENSE](LICENSE) for the full text.
