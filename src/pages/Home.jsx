import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

import { aboutContent } from "@/data/about";
import { HomeHero } from "@/component/home-hero";

/* =====================================================
   CHOOSE WHICH EVENTS TO DISPLAY ON HOME PAGE HERE

   Add, remove, or change events in this array.
   Only the events written here will appear on Home.jsx.
===================================================== */

const featuredEvents = [
  {
    id: 1,
    title: "Event Title 1",
    description:
      "Add a short description about this event and its impact.",
    date: "Recent Event",
    image: "/images/events/event1.jpg",
  },
  {
    id: 2,
    title: "Event Title 2",
    description:
      "Add a short description about this event and its impact.",
    date: "Recent Event",
    image: "/images/events/event2.jpg",
  },
];

function Home() {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  const videoScale = useTransform(
    smoothProgress,
    [0.35, 0.6],
    [0.94, 1]
  );

  const impactY = useTransform(
    smoothProgress,
    [0.55, 0.75],
    [50, -20]
  );

  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* =====================================================
          HERO
          DO NOT CHANGE
      ====================================================== */}

      <HomeHero />

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section
        id="about"
        className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
      >
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {aboutContent.eyebrow}
              </p>

              <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                {aboutContent.title}{" "}
                <span className="text-primary">
                  {aboutContent.titleAccent}
                </span>
              </h2>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-8 h-px w-20 origin-left bg-primary"
              />

              <div className="mt-8 max-w-3xl space-y-5">
                {aboutContent.paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="text-base leading-8 text-slate-600 sm:text-lg"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* RIGHT EXPERIENCE CARD */}

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-5 rounded-[2.5rem] bg-primary/5 blur-3xl" />

              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl sm:p-10"
              >
                <motion.div
                  animate={{
                    x: [-20, 30, -20],
                    y: [-10, 20, -10],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-0 top-0 h-48 w-48 rounded-full bg-primary/20 blur-3xl"
                />

                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                    NSS NIT Durgapur
                  </p>

                  <h3 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
                    Service.
                    <br />
                    Responsibility.
                    <br />
                    Community.
                  </h3>

                  <div className="mt-7 h-px w-14 bg-primary" />

                  <p className="mt-7 text-base leading-7 text-white/65">
                    NSS gives students an opportunity to step beyond the
                    classroom, understand real community needs, and contribute
                    through consistent voluntary service.
                  </p>

                  <div className="mt-9 flex items-center gap-3 text-sm font-semibold text-white/70">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                    </span>

                    Student-led community service
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          FOUNDATION / OBJECTIVES
      ====================================================== */}

      <section
        id="foundation"
        className="relative overflow-hidden border-y border-slate-200 bg-slate-50 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Foundation
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              {aboutContent.objectivesTitle}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              The values that guide our volunteers and every step we take
              towards building stronger communities.
            </p>
          </motion.div>

          {/* OBJECTIVES — ARROW REMOVED */}

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {aboutContent.objectives.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -4 }}
                className="group relative flex min-h-[150px] items-center gap-6 overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg sm:px-8"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-primary transition-all duration-300 group-hover:w-2" />

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          VIDEO
      ====================================================== */}

      <section
        id="work"
        className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8"
      >
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[150px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                {aboutContent.video.eyebrow}
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                {aboutContent.video.title}
              </h2>

              <div className="mt-6 h-px w-16 bg-blue-400" />

              <p className="mt-6 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
                {aboutContent.video.description}
              </p>
            </motion.div>

            <motion.div
              style={{ scale: videoScale }}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-5 rounded-[2rem] bg-primary/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black shadow-2xl">
                <video
                  src={aboutContent.video.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="block h-auto max-h-[720px] min-h-[300px] w-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          YEAR OF SERVICE / IMPACT
      ====================================================== */}

      <section
        id="impact"
        className="relative overflow-hidden border-b border-slate-200 bg-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">

          <motion.div
            style={{ y: impactY }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Impact
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Service measured
              <span className="block text-primary">
                through action.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Verified figures reflecting the scale of student participation
              and community engagement at NSS NIT Durgapur.
            </p>
          </motion.div>

          <div className="mt-16 grid border-y border-slate-200 md:grid-cols-4">
            {aboutContent.facts.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden border-b border-slate-200 px-5 py-10 transition-all duration-500 last:border-b-0 hover:bg-slate-50 md:border-b-0 md:border-r md:px-7 md:py-12 md:last:border-r-0 lg:px-10"
              >
                <div className="absolute left-0 top-0 h-full w-1 scale-y-0 bg-primary transition-transform duration-500 group-hover:scale-y-100" />

                <p className="text-5xl font-bold tracking-tight text-slate-950 transition-transform duration-500 group-hover:-translate-y-1 sm:text-6xl">
                  {fact.value}
                </p>

                <div className="mt-5 h-px w-10 bg-primary transition-all duration-500 group-hover:w-20" />

                <p className="mt-4 text-sm font-medium leading-6 text-slate-500">
                  {fact.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED EVENTS
      ====================================================== */}

      <section
        id="moments"
        className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Featured Events
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Moments in
                <span className="text-primary"> action.</span>
              </h2>
            </motion.div>

            <motion.a
              href={aboutContent.moments.href}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="group inline-flex items-center gap-3 text-sm font-semibold text-slate-900 transition-colors hover:text-primary"
            >
              View all events

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </motion.a>

          </div>

          {/* EVENTS */}

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {featuredEvents.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-900 backdrop-blur-sm">
                    {item.date}
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold tracking-tight text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-6 h-px w-10 bg-primary transition-all duration-500 group-hover:w-20" />
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}

export default Home;