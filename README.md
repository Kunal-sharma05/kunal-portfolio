# Kunal Sharma — portfolio

Complete React 18 + Vite single-page portfolio. Cream, charcoal, terracotta and olive; geometric SVG and CSS artwork, no stock imagery or liquid effects.

## Run locally

Use Node 22 LTS or newer supported LTS and npm. Dependencies are pinned in `package.json`; the lockfile records the full dependency graph.

```sh
npm ci
npm run dev
```

Open the URL printed by Vite. Default path: `/kunal-portfolio/`.

```sh
npm run build
npm run preview
```

Deployable static output is `dist/`. No backend or API keys are needed.

## Edit content

All owner content is in `src/data/portfolio.js`, with JSDoc typing for projects. Components are named single-purpose functions in `src/App.jsx`. Shared motion variants are in `src/animations/variants.js`. Styling is in `src/styles.module.css`.

Replace `public/Kunal_Sharma_Resume.pdf` with your final resume whenever needed. The included two-page PDF was generated from the supplied portfolio facts; it is not an independently verified original resume. Favicon and Open Graph SVG are included. Before public sharing, set an absolute `og:url` and replace the SVG Open Graph image with a hosted 1200×630 PNG for broader social platform compatibility.

## Design decisions

- Retained the supplied 2.5-year statement and May 2024 start date verbatim; no inferred dates for Hindalco.
- Removed the spec-driven tooling / small-language-model fine-tuning project. Five project cards remain.
- Desktop projects use a sticky section and vertical-to-horizontal scroll. Mobile and reduced-motion visitors get a native horizontal scroller with buttons, avoiding a long pinned mobile section.
- Modals trap Tab focus, close with Escape, lock background scrolling and restore focus to their originating card. Native links, menu state, visible focus indicators, semantic landmarks and a skip link are included.
- Native CSS smooth scrolling; no Lenis dependency. Fine-pointer-only cursor supplements the system cursor. Magnetic chip motion is limited to 6px.
- Google Fonts are loaded with `display=swap`, with local system fallbacks. All artwork is local geometry. No trackers or analytics.
- Accent terracotta is primarily decorative or large text. Smaller copy uses charcoal/muted text for contrast. A 12-column spacing grid underpins the wide page.
- This is a source deliverable. Private Sites publication was attempted, but the environment policy blocked the publisher credential handoff. GitHub Pages/Vercel publication to your own account remains a separate owner deployment step below.

## Animation checklist

- [x] Hero letter mask reveal, staggered per letter.
- [x] Typewriter and erase cycle through all three titles; stable accessible title.
- [x] Azure support-assistant architecture replaces the original graph. Sequential highlights and moving connector packets show ingestion, memory, retrieval and guarded action. Reduced motion uses a static diagram.
- [x] Section headings reveal at 20% visibility; outlined section numbers fill.
- [x] Scroll-linked timeline stroke and alternating role entrances.
- [x] Desktop pinned horizontal project gallery; hover lifts 8px with terracotta border and top sweep.
- [x] Full-screen project dialogs with shared `layoutId` transitions.
- [x] Six metrics count up once on visibility.
- [x] Skill chips stagger at 30ms, with magnetic hover up to 6px.
- [x] Terracotta cursor dot expands over interactive elements; disabled on touch.
- [x] Smooth anchor scrolling and reduced-motion alternatives.

## Option A: GitHub Pages (free)

1. Sign in as `Kunal-sharma05` and create a public repository named `kunal-portfolio`.
2. Push this folder's source (exclude `node_modules` and `dist`):

```sh
git init
git add .
git commit -m "Build Kunal Sharma portfolio"
git branch -M main
git remote add origin https://github.com/Kunal-sharma05/kunal-portfolio.git
git push -u origin main
```

3. The default Vite `base` is already `/kunal-portfolio/`; `gh-pages` is installed and the `deploy` script is included.
4. Build and deploy:

```sh
npm ci
npm run build
npm run deploy
```

5. In repository **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, `gh-pages`, `/ (root)`, then Save.
6. Once GitHub completes deployment, the expected address is https://kunal-sharma05.github.io/kunal-portfolio/ . This is an expected address, not a claim that your repository is already published.

See [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Option B: Vercel or Netlify (free plans)

1. Push source to GitHub.
2. Import the repository on Vercel, select Vite, build `npm run build`, output `dist`. Set environment variable `VITE_BASE=/` for root hosting, then Deploy.
3. Vercel assigns a free subdomain. `kunal-portfolio.vercel.app` depends on availability; use the actual URL the dashboard returns.
4. On Netlify, import the same repo, set build `npm run build`, publish directory `dist`, and `VITE_BASE=/`.

You may alternatively change the fallback `base` in `vite.config.js` to `/` for either provider. For PowerShell builds: `$env:VITE_BASE='/'; npm run build`. For macOS/Linux: `VITE_BASE=/ npm run build`.

## Option C: custom domain and DNS

A free developer subdomain can be requested through [is-a.dev](https://docs.is-a.dev/quickstart/). The correct suffix is **yourname.is-a.dev**, not `is-a-dev.com`. Availability, approval and provider compatibility apply. Follow their current registration requirements yourself; free registration is not guaranteed. Do not rely on Freenom availability.

For a domain you control, add it to the hosting provider first. Rebuild with `VITE_BASE=/` for custom domain root hosting.

### GitHub Pages subdomain example

| Type | Name | Target | TTL |
|---|---|---|---|
| CNAME | portfolio | Kunal-sharma05.github.io | 3600 |

In repository Pages settings enter `portfolio.example.com`, enable HTTPS when available, and create `public/CNAME` containing only `portfolio.example.com` before rebuilding/deploying. CNAME targets have no protocol or `/kunal-portfolio/` path.

For an apex domain, use GitHub's documented A records instead:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

[GitHub custom-domain instructions](https://docs.github.com/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site).

### Vercel example

Add `www.example.com` under your project Domains. A typical documented record is:

| Type | Name | Target | TTL |
|---|---|---|---|
| CNAME | www | cname.vercel-dns-0.com | 3600 |

Use the exact project-specific CNAME/A values displayed by Vercel if they differ; apex A values should come from that dashboard. Remove conflicting records at the same name. Wait for DNS propagation and HTTPS provisioning. [Vercel domain setup](https://vercel.com/docs/domains/set-up-custom-domain).

Domain purchase prices depend on registrar, extension, taxes and renewal terms; compare current prices before paying. No purchase or DNS changes were made as part of this build.

## Verification

Production build succeeds. Dependency audit after updating Vite and gh-pages reports zero vulnerabilities. Browser checks cover the hero, gallery and project dialog; the included PDF was rendered and visually inspected. Lighthouse scores are targets, not measured guarantees: run Chrome Lighthouse on your final deployed production build (mobile, incognito, extensions disabled). Verify keyboard navigation, reduced motion, mobile scrolling and contact/resume links before your public launch.

## Source tree

```text
kunal-portfolio/
├── .gitignore
├── .openai/hosting.json
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
├── FILE_TREE.txt
├── public/
│   ├── favicon.svg
│   ├── og-card.svg
│   └── Kunal_Sharma_Resume.pdf
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── styles.module.css
│   ├── components/MemoryArchitecture.jsx
│   ├── animations/variants.js
│   └── data/portfolio.js

```

`dist/` is generated by the build; `node_modules/` is restored with `npm ci`.




## Architecture and responsive update

The hero visualizes the supplied rag_memory_architecture_v2.md. The attachment was used as architecture reference only. It does not assert that the proposed system is deployed. Architecture copy remains in src/data/portfolio.js. A full flow description is accessible through the expandable description. Animation respects reduced-motion preferences.

Checked viewport sizes: 320×568, 390×844, 768×1024, 1366×640, 1440×900 and 2560×1440. No page-level horizontal overflow in these checks. Native gallery scrolling is used below 900px width or 760px height; larger screens retain the pinned gallery. Mobile project dialogs scroll within the viewport. Layouts are fluid; these checks do not guarantee every device/browser/resolution.
