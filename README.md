# Antikythera UI Primitives

A lightweight React + Tailwind showcase of Antikythera-inspired typography and interface primitives. The system leans on tokenized Tailwind utilities to keep spacing, color, radii, and shadows aligned across light and dark themes.

## Getting started

```bash
npm install
npm run dev
```

The demo lives at `/src/pages/tokens.tsx` and is mounted as the default `App` entry. It highlights the typography scale, link and button states, and card/divider primitives with responsive behavior and accessible focus management.

## Components

- **Typography**: `H1`, `H2`, `H3`, `Body`, `Caption`, `Label`
- **Interactive primitives**: `Link`, `Button`
- **Layout primitives**: `Card`, `CardMeta`, `CardBadge`, `Divider`

Design tokens are defined via CSS variables in `src/styles/tokens.css` and surfaced through Tailwind utilities so variants stay in sync with Tailwind v4 token naming expectations.
