# Nyi Wai — Portfolio

A personal portfolio site built with **React + Vite + TypeScript + Tailwind CSS v4**, based on a hand-drawn wireframe.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Add your photo

The hero expects a **transparent-background PNG cutout** of you at:

```
public/nyi-wai.png
```

Take a portrait photo, remove the background (e.g. remove.bg, Photopea, or the `rembg` CLI), and export as a real PNG with transparency (not a screenshot of a preview — that bakes in a fake checkerboard). Drop it in with that exact filename — no code changes needed.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Deploy to Vercel (free)

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com, sign in with GitHub, click "Add New Project," and import the repo.
3. Vercel auto-detects Vite — leave the defaults (Build Command: `npm run build`, Output Directory: `dist`) and click **Deploy**.
4. You'll get a free `yourproject.vercel.app` URL — no payment info required for this tier.

## Customize

- Palette, fonts: `src/index.css`
- Copy and sections: `src/components/*.tsx`
- Replace the placeholder email/social links in `src/components/Hero.tsx` and `src/components/Contact.tsx` with your real ones.
- Your photo: `src/components/PortraitArch.tsx` reads from `public/nyi-wai.png` — see "Add your photo" above.
