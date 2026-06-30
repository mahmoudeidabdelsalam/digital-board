# Digital Board

Landing page agency built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion, and Cloudflare Pages-compatible static export.

## Features

- Arabic-first RTL landing page
- Fully responsive and accessible UI
- Static export for Cloudflare Pages
- SEO metadata, sitemap, robots, Open Graph, Twitter cards, and JSON-LD
- Reusable UI components and motion-enhanced sections

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

## Cloudflare Pages Deployment

1. Push the project to GitHub.
2. In Cloudflare Pages, create a new project and connect the repository.
3. Use the following build settings:
   - Build command: `npm run build`
   - Build output directory: `out`
4. Deploy.

> The project uses static export, so no server runtime is required.
