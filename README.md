# chatTelos · Antikythera Relay

This project contains the Antikythera-inspired chat interface for chatTelos. It is built with Next.js (App Router) and showcases a themed conversation surface at [`/antikythera-chat`](http://localhost:3000/antikythera-chat).

## Prerequisites

- Node.js 18 or later
- npm 9+
- Playwright browsers (install with `npx playwright install` after `npm install`)

If you are running Playwright locally for the first time on Linux you may also need to install the system dependencies listed by `npx playwright install-deps`.

## Development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) for the landing page or [http://localhost:3000/antikythera-chat](http://localhost:3000/antikythera-chat) for the themed chat experience.

## Visual regression testing

Playwright is configured to capture visual snapshots of the Antikythera theme at 375×812, 768×1024, and 1280×720.

```bash
npm run test:e2e            # run against existing baselines
npm run test:e2e -- --update-snapshots  # refresh snapshots after UI changes
```

Generated baselines live in `tests/antikythera-chat.spec.ts-snapshots/`.

## Project structure

- `app/antikythera-chat/` – route and layout for the themed chat experience
- `components/antikythera/` – theme provider, chat primitives, and input controls
- `tests/` – Playwright specification and snapshots

The default landing page (`/`) intentionally remains minimal to keep the Antikythera theme self-contained.
