import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { homeContent } from "@/data/home";
import { aboutContent } from "@/data/about";
import { JoinSection } from "@/component/join-section";

function Home() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-semibold uppercase tracking-[0.18em] text-primary"
              >
                {homeContent.hero.eyebrow}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mt-4 max-w-3xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              >
                {homeContent.hero.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl"
              >
                {homeContent.hero.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href={homeContent.hero.primaryAction.href}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  {homeContent.hero.primaryAction.label}
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={homeContent.hero.secondaryAction.href}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border bg-card px-6 py-3 font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  {homeContent.hero.secondaryAction.label}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                {homeContent.hero.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border bg-card px-4 py-2 text-sm font-medium text-muted-foreground"
                  >
                    {highlight}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl border bg-card p-8 shadow-soft sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  NSS NIT Durgapur
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                  Service to the Nation,
                  <span className="block text-primary">
                    Starting with Community
                  </span>
                </h2>

                <p className="mt-5 leading-7 text-muted-foreground">
                  NSS gives students the opportunity to step beyond the
                  classroom, understand real community needs, and contribute
                  through consistent voluntary service.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {homeContent.hero.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-2xl bg-muted/60 p-4"
                    >
                      <p className="text-sm font-semibold">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {aboutContent.eyebrow}
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {aboutContent.title}{" "}
                <span className="text-primary">
                  {aboutContent.titleAccent}
                </span>
              </h2>

              <div className="mt-7 space-y-5">
                {aboutContent.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base leading-8 text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border bg-card p-7 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                NSS NIT Durgapur
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Service, responsibility and community.
              </h3>

              <p className="mt-4 leading-7 text-muted-foreground">
                NSS gives students an opportunity to step beyond the
                classroom, understand real community needs, and contribute
                through consistent voluntary service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Our Foundation
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              {aboutContent.objectivesTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aboutContent.objectives.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-2xl border bg-card p-6"
              >
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {aboutContent.video.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              {aboutContent.video.title}
            </h2>

            <p className="mt-3 leading-7 text-muted-foreground">
              {aboutContent.video.description}
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl bg-slate-950 shadow-soft">
            <video
              className="block h-auto w-full"
              src={aboutContent.video.src}
              controls
              playsInline
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="bg-surface px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Our Impact
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Service measured through action.
            </h2>

            <p className="mt-3 leading-7 text-muted-foreground">
              Verified figures from the NSS unit at NIT Durgapur.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-4">
            {aboutContent.facts.map((fact) => (
              <div
                key={fact.label}
                className="bg-card px-5 py-8 text-center"
              >
                <div className="text-3xl font-bold text-primary sm:text-4xl">
                  {fact.value}
                </div>

                <div className="mt-2 text-sm text-muted-foreground">
                  {fact.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {aboutContent.moments.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                {aboutContent.moments.title}
              </h2>

              <p className="mt-3 leading-7 text-muted-foreground">
                {aboutContent.moments.description}
              </p>
            </div>

            <a
              href={aboutContent.moments.href}
              className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
            >
              {aboutContent.moments.action}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {aboutContent.moments.items.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group overflow-hidden rounded-2xl border bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {item.date}
                  </p>

                  <h3 className="mt-2 text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <JoinSection />
    </main>
  );
}

export default Home;