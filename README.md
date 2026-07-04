# FLOIL — site

One-page site for **FLOIL** (Fast Loading FOIL), a patent-pending professional hair foil.
Museum-minimal "premium tool" direction (Apple / Dyson / Leica / B&O). White shell, cool accents.

## Stack
Next.js 14 (App Router) · static export (`output: 'export'`) · Tailwind · Framer Motion ·
Inter / Inter Tight. Deploys to GitHub Pages via `.github/workflows/deploy.yml`.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site → ./out
```

## Editing content
All copy/images live in [`lib/data.js`](lib/data.js). Search for `REPLACE` to find
everything that needs a real value before launch:

- **Hero video** — set `hero.videoSrc` to the 30–45s silent loop (e.g. `/videos/floil-hero.mp4`,
  placed in `public/videos/`). Until then the poster image shows automatically.
- **Photography** — swap the `gallery` items + section images for real macro / lifestyle /
  hands-in-use shots (drop into `public/images/`).
- **Links** — Instagram, LinkedIn, and the contact email (`brand.*`, `partner.cta.href`).
- **Testimonials** — add real quotes when available.

## Deploy (GitHub Pages, apex domain)
1. Push to a GitHub repo on branch `main`.
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. For a custom apex domain (e.g. `floil.com`), add `public/CNAME` containing the domain,
   and leave `basePath` empty. For a project subpath, set `NEXT_PUBLIC_BASE_PATH=/repo-name`.
