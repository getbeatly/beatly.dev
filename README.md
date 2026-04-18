# beatly.dev

The website for **Beatly** — a live music soundtrack for coding agents.

Live at **[beatly.dev](https://beatly.dev)**.

## What is Beatly?

Beatly scores the work. A live, generative soundtrack that reacts to your coding agent in real time — tempo rising on long builds, a drop when tests pass, ambient pads while it thinks.

## Repositories

Beatly is open source and split across two repos:

| Repo | What's in it |
| :--- | :--- |
| **[getbeatly/beatly.dev](https://github.com/getbeatly/beatly.dev)** | This website. Astro + Cloudflare. |
| **[getbeatly/beatly](https://github.com/getbeatly/beatly)** | Core library and agent skills. _(coming soon — not yet ready.)_ |

## Stack

- **[Astro](https://astro.build)** — static site generator
- **[Cloudflare Workers](https://developers.cloudflare.com/workers/)** (Static Assets) — hosting + custom domains
- **[Wrangler](https://developers.cloudflare.com/workers/wrangler/)** — deploy tooling
- **Geist** / **Geist Mono** — typefaces
- Single source of marketing copy in [`src/content/site.ts`](src/content/site.ts)

## Project structure

```text
/
├── public/                   # static assets served as-is
├── src/
│   ├── content/site.ts       # brand, hero, features, repos, waitlist copy
│   └── pages/index.astro     # the landing page
├── astro.config.mjs
├── wrangler.jsonc            # Cloudflare Workers + custom domain routes
└── package.json
```

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server at `http://localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview the built site locally |
| `npm run cf:dev` | Build + run `wrangler dev` (simulates Workers runtime) |
| `npm run deploy` | Build + deploy to Cloudflare Workers |

## Deploying

1. One-time: `npx wrangler login`
2. Ensure `beatly.dev` is a zone on your Cloudflare account.
3. `npm run deploy`

Custom domains `beatly.dev` and `www.beatly.dev` are provisioned automatically via the `routes` block in [`wrangler.jsonc`](wrangler.jsonc).

## Editing copy

All marketing content lives in [`src/content/site.ts`](src/content/site.ts). Change it there, run `npm run dev`, and the whole page updates.

## License

See the repo for license details.
