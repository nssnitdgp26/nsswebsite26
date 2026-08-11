import React from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function PageShell({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}) {
  return (
    <section
      className="relative overflow-hidden border-b bg-surface py-16 sm:py-20 lg:py-24"
      aria-label={title}
    >
      {/* Background Pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.12) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative Gradient */}
      <div
        aria-hidden="true"
        className="absolute -right-28 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 h-64 w-64 rounded-full bg-brand-nature/10 blur-[100px]"
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {description && (
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}