# Roognis

AI-powered support for founders & intrapreneurs.

## Quick start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploy to Netlify

1. Connect this repo to Netlify.
2. Set the build command to `npm run build` and publish directory to `.next`.
3. Add the `@netlify/plugin-nextjs` plugin (already configured in `netlify.toml`).

## Environment

- Next.js 14 + TypeScript + Tailwind CSS
- No external fonts or images; all assets are inline SVG or CSS.

## Editing copy

All text content lives in the React components under `app/` and `components/`.
Adjust copy directly in those files and run `npm run build` before deploying.
