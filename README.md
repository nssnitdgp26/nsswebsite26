# NSS NIT Durgapur

The official website for the National Service Scheme unit at NIT Durgapur. It is a single-page React application that presents the unit’s work, event stories, leadership, and ways to connect.

## Highlights

- Responsive home experience with scroll-led motion and an interactive 3D service orbit.
- Event archive with individual event-detail routes and media galleries.
- Team and contact pages backed by editable local data files.
- Route-specific page transitions, smooth scrolling, keyboard navigation, and reduced-motion support.
- Reusable interaction primitives from React Bits plus shadcn/Base UI components.

## Stack

- React 19 and React Router
- Vite 7
- Tailwind CSS 4
- Framer Motion and Lenis
- Three.js, React Three Fiber, and Drei
- shadcn/Base UI and Lucide icons

## Getting started

### Prerequisites

- Node.js 26 or newer (the project declares this in `package.json`)
- npm

### Install and run

```bash
git clone https://github.com/nssnitdgp26/nsswebsite26.git
cd nsswebsite26
npm install
npm run dev
```

Vite prints the local URL when the server starts (normally `http://localhost:5173`).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create the production bundle in `dist/`. |
| `npm run preview` | Serve the production bundle locally. |
| `npm run lint` | Run ESLint across the repository. |

## Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/events` | Event archive |
| `/events/:slug` | Event detail |
| `/team` | NSS team |
| `/contact` | Contact and volunteering |

## Project structure

```text
src/
├── component/       # Site sections, shell, navigation, and visual effects
├── components/      # React Bits and shadcn/Base UI primitives
├── data/            # Editable site, event, gallery, team, and page content
├── images/          # Local image and video assets
├── lib/             # Shared utilities
├── pages/           # Route-level React components
├── App.jsx          # Router and page transition orchestration
├── index.css        # Tailwind import, theme tokens, and global styles
└── main.jsx         # Application entry point
```

## Editing content

Most content is data-driven. Update the files below rather than hard-coding copy in page components.

| Content | File |
| --- | --- |
| Events, detail copy, galleries, and media | `src/data/events.js` |
| Current and past teams; faculty advisor | `src/data/team.js` |
| Home-page copy and content | `src/data/home.js` |
| Contact details | `src/data/contact.js` |
| Site-wide navigation and metadata | `src/data/site.js` |

Add images under `public/` when they must be addressable by URL, or import them from `src/images/` when they belong to a component bundle.

## UI conventions

- Use the `@/` alias for imports from `src/`; it is configured in both `jsconfig.json` and `vite.config.js`.
- Keep reusable shadcn/Base UI primitives in `src/components/ui/`.
- Keep bespoke visual/interaction components in `src/component/` or `src/components/` according to their existing pattern.
- Respect `prefers-reduced-motion` when adding motion. Prefer transform and opacity animation over layout-changing animation.
- Keep mobile interaction alternatives for pointer-only effects.

## Verification

Before opening a pull request, run:

```bash
npm run lint
npm run build
```

Then inspect the primary routes at desktop and mobile widths, including menu navigation, event links, gallery overlays, the contact form, and reduced-motion behaviour.

## Current audit notes

The production build completes successfully. At the time this README was updated, ESLint reports seven existing errors: unused imports/variables in Home, `home-hero`, and `service-orbit`; one synchronous state update warning promoted to an error in the navbar; and two React ref-update rules in the React Bits `Magnet` and `SpotlightCard` components. Address these before treating lint as a passing quality gate.

## License

No license has been specified for this repository. Add one before distributing or accepting external contributions.
