# REVO Home Save workspace ready

Created in `/Users/daniel/Documents/Elloh Clients/REVO Home Save`.

## Included

- TanStack Start with React, TypeScript, Vite and Tailwind CSS 4.
- Server-rendered REVO starter homepage, shared layout components, editable content and central link configuration.
- SEO metadata helpers, canonical URL support, Open Graph/social image, favicon, robots.txt and sitemap.xml.
- Self-hosted Inter and Manrope fonts.
- Vercel/Nitro configuration. No deployment or account linking performed.
- Biome formatting/checks, TypeScript checks, pinned package versions and npm lockfile.
- `design.md`, `AGENTS.md`, README and launch checklist.
- `design/stitch/` for the original export; `src/components/ui/`, `public/images/` and `public/fonts/` for implementation assets.
- Draft Privacy and Accessibility pages clearly marked for completion and excluded from indexing.

## Run in the IDE terminal

```sh
nvm install
nvm use
npm run dev
```

The project version files select Node 24. The original active Node 22.11 is below the current framework requirement; setup and verification used a temporary Node 24 runtime without changing the machine default. Packages are installed already.

## Verification

- TypeScript and Biome checks passed.
- Local production build passed.
- Vercel preset build passed and generated the expected Vercel output configuration.
- Browser inspected on desktop and at 390px; mobile document width matched the viewport.
- Home, legal draft pages, favicon, social artwork, robots and sitemap returned HTTP 200; missing page returned 404.
- Server HTML contained the title, content and noindex metadata. robots.txt disallowed indexing and sitemap was empty as expected before launch configuration.
- npm audit reported zero known vulnerabilities at setup.
- Upstream tools emit non-blocking bundler/circular-dependency warnings; builds and checks still complete successfully.

## Installed versions

- @tanstack/react-start: 1.169.4
- @tanstack/react-router: 1.170.46
- react: 19.3.1
- tailwindcss: 4.3.3
- nitro: 3.0.260610-beta

## Next step

Place the Stitch export in `design/stitch/`, then adapt it into the existing routes and components. The current homepage is starter content, not the final Stitch implementation. Confirm the owner's programme details and referral URLs before launch. See `docs/launch-checklist.md`.

Indexing remains off until the final HTTPS address is configured and the production indexing flag is deliberately enabled. Vercel previews remain noindex. No member area, authentication or app-style bottom navigation is included.
