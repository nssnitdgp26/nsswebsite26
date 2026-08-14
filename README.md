# NSS NIT Durgapur Website

The official website of the **National Service Scheme (NSS) Unit, NIT Durgapur**. This repository contains the complete source code for a modern, responsive, and maintainable static web application built with **React, Vite, and Tailwind CSS**.

## Overview

The website serves as a central platform for showcasing NSS NIT Durgapur's activities, events, team, initiatives, and social impact. It is designed with a strong focus on **performance, accessibility, responsiveness, and maintainability**.

A core architectural principle of the project is the **separation of content from presentation**. All editable website content—including events, team members, gallery items, site information, and page-specific text—is maintained in dedicated files within `src/data/`.

This approach allows content to be updated without modifying the underlying React components and eliminates the need for an external database or CMS.

## Project Structure

```text
.
├── public/                 # Static assets such as logos and robots.txt
├── src/
│   ├── component/          # Reusable React components
│   │   └── ui/             # Generic UI primitives
│   ├── data/               # Centralized website content
│   ├── images/             # Image assets used throughout the website
│   ├── lib/                # Shared utilities and helper functions
│   └── pages/              # Top-level page components
├── index.html              # Application entry point
├── package.json            # Dependencies and project scripts
└── vite.config.js          # Vite configuration
```

### Key Directories

* **`src/pages/`** — Contains the primary page components, including Home, Events, Team, and other routed pages.
* **`src/component/`** — Contains reusable components and page sections used throughout the application.
* **`src/data/`** — Acts as the **single source of truth** for all editable website content.
* **`src/images/`** — Contains visual assets used across the website.
* **`src/lib/`** — Contains shared utilities and helper functions.

## Getting Started

### Prerequisites

Ensure that **Node.js 20.x or later** is installed on your system.

### Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/nssnitdgp26/nsswebsite26.git
cd nsswebsite26
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

If port `5173` is unavailable, Vite will automatically use the next available port.

## Available Scripts

| Command           | Description                                               |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Starts the development server with hot module replacement |
| `npm run build`   | Creates an optimized production build in `dist/`          |
| `npm run preview` | Serves the production build locally for verification      |
| `npm run lint`    | Runs ESLint to identify code-quality issues               |

## Content Management

All website content is centralized within the `src/data/` directory. This allows contributors to update information without modifying the presentation or component logic.

### Events

Add or modify events in:

```text
src/data/events.js
```

### Team

Manage the faculty advisor, current leadership, and previous team members in:

```text
src/data/team.js
```

### Gallery

Manage gallery categories and images in:

```text
src/data/gallery.js
```

### Site Information

Manage general website configuration, navigation, contact information, and other global content in:

```text
src/data/site.js
```

### Page Content

Page-specific content is organized into dedicated files, such as:

```text
src/data/home.js
src/data/about.js
```

## Development Workflow

1. Make the required changes in the appropriate files.
2. Run the development server and verify the changes locally.
3. Run the linter to identify potential issues.
4. Create a descriptive Git commit.
5. Push the changes to the repository.

The production website is automatically updated through the deployment pipeline after changes are successfully pushed.

## Architecture Principles

The project follows several core principles:

* **Content–Presentation Separation** — Editable content remains independent of UI components.
* **Component Reusability** — Common UI elements and page sections are implemented as reusable components.
* **Responsive Design** — The interface is optimized for desktop, tablet, and mobile devices.
* **Maintainability** — A structured project layout keeps content, components, pages, utilities, and assets organized.
* **Performance** — Vite provides fast development and optimized production builds.
* **Accessibility** — UI components and interactions are designed with usability and accessibility in mind.

## Technology Stack

* **React** — Frontend UI library
* **Vite** — Development server and build tool
* **Tailwind CSS** — Utility-first CSS framework
* **ESLint** — Code quality and linting
* **JavaScript** — Primary programming language

## Contributing

When contributing to the project, please maintain the existing project structure and follow the established separation between content, presentation, and reusable components.

Before submitting changes, ensure that:

```bash
npm run lint
npm run build
```

both complete successfully.

---

**NSS NIT Durgapur**
*Official website of the National Service Scheme Unit, NIT Durgapur.*
