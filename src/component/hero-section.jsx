import React from "react";
import { Button } from "@/component/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { homeContent } from "@/data/home";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-background"
      aria-label="National Service Scheme"
    >
      {/* Background Pattern - reduced opacity so photo remains visible */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.12) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Soft Background Gradients */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_18%_20%,hsl(var(--primary)/0.08),transparent_28%),radial-gradient(circle_at_82%_72%,hsl(var(--brand-nature)/0.08),transparent_28%)]"
      />

      {/* Floating Decorative Elements */}
      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, -16, 0],
          x: [0, 8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 9,
          ease: "easeInOut",
        }}
        className="absolute -right-28 top-24 z-10 h-72 w-72 rounded-full bg-primary/10 blur-[100px]"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, 20, 0],
          x: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 11,
          ease: "easeInOut",
        }}
        className="absolute -bottom-32 -left-20 z-10 h-80 w-80 rounded-full bg-brand-nature/10 blur-[110px]"
      />

      {/* Hero Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:py-32">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary"
        >
          {homeContent.hero.eyebrow}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-7 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {homeContent.hero.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          {homeContent.hero.description}
        </motion.p>

        {/* Only Explore Events Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <Button
            size="lg"
            asChild
            className="min-w-[180px]"
          >
            <Link to={homeContent.hero.secondaryAction.href}>
              {homeContent.hero.secondaryAction.label}
            </Link>
          </Button>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 8, 0],
        }}
        transition={{
          opacity: {
            delay: 1,
            duration: 0.5,
          },
          y: {
            repeat: Infinity,
            duration: 2,
          },
        }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-muted-foreground/50 transition-colors hover:text-foreground"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}