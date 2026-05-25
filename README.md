# NoZak Labs — nozaklabs.com

**Live at https://nozaklabs.com**

Marketing and portfolio site for NoZak Labs, Noha Zakaria's solo engineering consultancy
based in Cairo. Services: automation engineering, AI integration, systems architecture,
and Pega case lifecycle development.

<!-- TODO: Update the GitHub repo "About" field to point to https://nozaklabs.com (currently shows the Vercel preview URL). Edit it at https://github.com/nozaklabs/website → ⚙ → "About". -->

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 — `@import "tailwindcss"` + `@theme` block, no config file |
| Fonts | Space Grotesk (display), Inter (body), Geist Mono (mono) via `next/font/google` |
| Analytics | Vercel Analytics |
| Contact form | Formspree (`/f/mlgvwzow`) |
| Deploy | Vercel — auto-deploys from `main` |

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
```

---

## Project structure

```
app/
  layout.tsx        # Root layout — fonts, metadata, Nav, Analytics
  page.tsx          # Single-page site (Hero, Capabilities, Work, Contact, Footer)
  globals.css       # Tailwind v4 theme tokens + base styles
  components/
    Nav.tsx         # Fixed nav with scroll-activated backdrop blur ('use client')
public/
  # Static assets
```

---

## Deployment

Vercel auto-deploys every push to `main`. No manual steps required.
Environment variables: none currently required.
