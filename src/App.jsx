import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { PageShell } from "@/component/page-shell";

import Home from "@/pages/Home";
import Events from "@/pages/Events";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";

function NotFound() {
  return (
    <PageShell>
      <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          404
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>

        <p className="mt-4 text-muted-foreground">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Return Home
        </Link>
      </main>
    </PageShell>
  );
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageShell>
            <Home />
          </PageShell>
        }
      />

      <Route
        path="/events"
        element={
          <PageShell>
            <Events />
          </PageShell>
        }
      />

      <Route
        path="/team"
        element={
          <PageShell>
            <Team />
          </PageShell>
        }
      />

      <Route
        path="/contact"
        element={
          <PageShell>
            <Contact />
          </PageShell>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;