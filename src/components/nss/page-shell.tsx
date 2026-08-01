import type { ReactNode } from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.07] bg-[#0b1020] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 premium-grid opacity-60" />
      <div className="absolute -right-28 top-0 h-72 w-72 rounded-full bg-primary/15 blur-[110px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="premium-kicker mb-4">{eyebrow}</p>
        <h1 className="premium-heading max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
      </div>
    </section>
  );
}
