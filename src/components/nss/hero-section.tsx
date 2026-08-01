'use client';

import { Button } from '@/components/ui/button';
import { ChevronDown, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { homeContent } from '@/data/home';

export function HeroSection() {
  return (
    <section
      id="home"
      className="premium-grid relative flex min-h-[calc(100svh-4.5rem)] items-center justify-center overflow-hidden bg-[#090d17]"
      aria-label="Hero"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgb(143_174_255/0.26),transparent_26%),radial-gradient(circle_at_82%_75%,rgb(94_230_168/0.15),transparent_25%),radial-gradient(circle_at_58%_42%,rgb(255_179_107/0.11),transparent_27%),linear-gradient(145deg,#090d17_0%,#10192d_52%,#090d17_100%)]" />
      <motion.div aria-hidden="true" animate={{ y: [0, -16, 0], x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }} className="absolute -right-28 top-24 h-72 w-72 rounded-full bg-primary/15 blur-[100px]" />
      <motion.div aria-hidden="true" animate={{ y: [0, 20, 0], x: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 11, ease: 'easeInOut' }} className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-brand-nature/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-foreground/75 shadow-soft"
        >
          {homeContent.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="premium-heading mb-7 text-5xl font-bold text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {homeContent.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-foreground/70 sm:text-xl"
        >
          {homeContent.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" asChild className="w-full sm:w-auto">
            <Link href={homeContent.hero.primaryAction.href}>{homeContent.hero.primaryAction.label}</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="w-full border-white/20 bg-white/[0.035] text-foreground hover:bg-white/[0.1] hover:text-foreground sm:w-auto"
          >
            <Link href={homeContent.hero.secondaryAction.href}>{homeContent.hero.secondaryAction.label}</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="mt-14 flex flex-wrap justify-center gap-x-3 gap-y-3 text-sm text-foreground/75"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2"><Heart className="h-4 w-4 text-brand-service" /> {homeContent.hero.highlights[0]}</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2"><Sparkles className="h-4 w-4 text-brand-nature" /> {homeContent.hero.highlights[1]}</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#impact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.5 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/50 transition-colors hover:text-foreground"
        aria-label="Scroll to impact metrics"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
