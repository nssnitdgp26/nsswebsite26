# NSS NIT Durgapur

The public website for the National Service Scheme unit at NIT Durgapur, built with Next.js App Router and TypeScript.

## Project structure

```text
src/
  app/                 Route composition and route handlers
  components/
    nss/               Domain sections and shared page shell
    ui/                Reusable form and primitive components
  data/                Editor-managed site copy, navigation, and page content
  lib/                 Small shared utilities
```

Route pages only compose sections. Reusable UI primitives live in `components/ui`; NSS-specific presentation and interactions live in `components/nss`. Global editable copy is intentionally centralised in `src/data`.

## Commands

```bash
npm run dev
npm run lint
npm run build
```

## Content

All editable content—including initiatives, events, team members, gallery records, and impact metrics—is managed in `src/data`. The website is static and has no API or database dependency.
