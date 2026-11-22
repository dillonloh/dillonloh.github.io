# dillonloh.github.io

Personal website, built with [Eleventy (11ty)](https://www.11ty.dev/) and deployed to GitHub Pages.

## Requirements

- Node.js 18+ and npm

## Serve locally

```bash
npm install
npx @11ty/eleventy --serve
```

Then open http://localhost:8080. The dev server rebuilds and live-reloads when you save a file.

To use a different port:

```bash
npx @11ty/eleventy --serve --port=3000
```

## Build

```bash
npm run build
```

The site is written to `_site/` (git-ignored). To preview the built output without the dev server, serve that folder with any static server, e.g. `npx serve _site` or `python3 -m http.server -d _site`.

## Deploy

Pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which runs `npm run build` and publishes `_site/` to GitHub Pages. No manual step is needed.

## Layout

| Path | Contents |
| --- | --- |
| `index.md`, `research.md`, `projects.md`, `news.md` | Pages |
| `_data/` | Data files (`news.js`, `research.js`) used by the pages |
| `_includes/` | Nunjucks layout, header and footer |
| `css/` | Stylesheets |
| `static/` | Images, GIFs and other assets |
| `.eleventy.js` | Eleventy config (passthrough copies, input/output dirs) |
