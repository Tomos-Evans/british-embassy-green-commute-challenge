# Green Commute Challenge

A green commute tracking app. Users log their daily commute (mode of transport, distance, weather warrior bonus) and compete on a points-based leaderboard, all on an honour system — no proof of travel required.

- **Frontend:** React + TypeScript SPA built with Vite, styled with Tailwind, hosted on GitHub Pages
- **Backend:** Supabase (Auth + Postgres with row level security)

See [docs/SPEC.md](docs/SPEC.md) for the original product spec and [docs/DATABASE.md](docs/DATABASE.md) for the schema.

## Getting started

```bash
npm install
cp .env.example .env   # fill in your Supabase project URL and anon key
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Deployment

Pushes to `main` are built and deployed to GitHub Pages automatically via `.github/workflows/`. The `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` secrets must be configured in the repo settings.
