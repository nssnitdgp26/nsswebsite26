import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import { events, eventsSectionContent } from "@/data/events";


function formatDate(date) {
  if (!date) return "";

  return new Date(`${date}T00:00:00`).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );
}


/* =========================================================
   EVENTS HERO
========================================================= */

function EventsHero({ eventCount }) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-slate-900 text-white">

      {/* BACKGROUND GLOW */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />


      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, -30, 0],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-3xl"
      />


      {/* FLOATING DECORATIVE CIRCLES */}

      <motion.div
        animate={{
          y: [0, -18, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[10%] top-[18%] h-14 w-14 rounded-full border border-white/10"
      />


      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[18%] right-[25%] h-5 w-5 rounded-full bg-primary/60"
      />


      <motion.div
        animate={{
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-[8%] top-[40%] h-24 w-24 border border-white/5"
      />


      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">

        <div className="max-w-4xl">

          {/* EYEBROW */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Sparkles className="h-4 w-4 text-primary" />

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              {eventsSectionContent.eyebrow || "NSS NIT Durgapur"}
            </p>

          </motion.div>


          {/* TITLE */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {eventsSectionContent.title}
          </motion.h1>


          {/* DESCRIPTION */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.25,
            }}
            className="mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg"
          >
            {eventsSectionContent.description}
          </motion.p>


          {/* HERO BOTTOM INFO */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >

            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <CalendarDays className="h-5 w-5" />
              </div>

              <div>

                <p className="text-2xl font-bold text-white">
                  {eventCount}+
                </p>

                <p className="text-xs font-medium uppercase tracking-wide text-white/50">
                  Events & Initiatives
                </p>

              </div>

            </div>


            <div className="flex items-center gap-2 text-sm text-white/55">

              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />

              Creating impact through action

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   EVENT CARD
========================================================= */

function EventCard({ event, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group
        flex
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-shadow
        duration-300
        hover:border-primary/30
        hover:shadow-xl
      "
    >

      {/* EVENT POSTER */}

      <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">

        {event.image ? (
          <img
            src={event.image}
            alt={event.title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-slate-800 text-sm text-white/40">
            Event Poster
          </div>
        )}


        {/* CATEGORY */}

        {event.category && (
          <div className="absolute left-4 top-4">

            <span className="rounded-full bg-slate-950/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
              {event.category}
            </span>

          </div>
        )}


        {/* IMAGE OVERLAY */}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />

      </div>


      {/* CARD CONTENT */}

      <div className="flex flex-1 flex-col p-6">

        <h2 className="text-xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-primary sm:text-2xl">
          {event.title}
        </h2>


        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
          {event.description}
        </p>


        {/* EVENT DETAILS */}

        <div className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-sm text-slate-500">

          {event.startDate && (
            <div className="flex items-center gap-2.5">

              <CalendarDays className="h-4 w-4 shrink-0 text-primary" />

              <span>
                {formatDate(event.startDate)}
              </span>

            </div>
          )}


          {event.venue && (
            <div className="flex items-center gap-2.5">

              <MapPin className="h-4 w-4 shrink-0 text-primary" />

              <span className="line-clamp-1">
                {event.venue}
              </span>

            </div>
          )}

        </div>


        {/* VIEW EVENT */}

        <Link
          to={`/events/${event.slug}`}
          className="group/button mt-7 inline-flex items-center gap-2 self-start text-sm font-semibold text-slate-900 transition-colors hover:text-primary"
        >

          View Event

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover/button:bg-primary group-hover/button:text-primary-foreground">

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-0.5" />

          </span>

        </Link>

      </div>

    </motion.article>
  );
}


/* =========================================================
   MAIN EVENTS PAGE
========================================================= */

function Events() {
  const sortedEvents = [...events].sort(
    (a, b) =>
      new Date(`${b.startDate}T00:00:00`) -
      new Date(`${a.startDate}T00:00:00`)
  );


  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">

      {/* HERO */}

      <EventsHero eventCount={sortedEvents.length} />


      {/* EVENTS SECTION */}

      <section className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        {/* SUBTLE BACKGROUND */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

        </div>


        <div className="relative mx-auto max-w-7xl">

          {/* SECTION HEADER */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Event Archive
            </p>


            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Explore Our Initiatives
            </h2>


            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Discover the events, campaigns, awareness drives, and
              community initiatives organised by NSS NIT Durgapur.
            </p>

          </motion.div>


          {/* EVENT CARDS */}

          {sortedEvents.length > 0 ? (

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

              {sortedEvents.map((event, index) => (

                <EventCard
                  key={event.slug}
                  event={event}
                  index={index}
                />

              ))}

            </div>

          ) : (

            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">

              <h2 className="text-2xl font-bold text-slate-900">
                No events yet
              </h2>

              <p className="mt-3 text-slate-500">
                Events organised by NSS NIT Durgapur will appear here.
              </p>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}


export default Events;