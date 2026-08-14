import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

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

function EventsHero({ eventCount, featuredEvent }) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(23,63,115,.65),transparent_28rem),linear-gradient(120deg,#071426,#102a4d)]" />
      <div className="absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_.8fr] lg:items-end lg:gap-16 lg:px-8 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-2 text-primary">
            <Sparkles className="h-4 w-4" />
            <p className="text-xs font-bold uppercase tracking-[0.2em]">{eventsSectionContent.eyebrow || "NSS NIT Durgapur"}</p>
          </div>

          <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[.96] tracking-tight sm:text-6xl lg:text-7xl">
            Moments that <span className="text-primary">move</span> people.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
            {eventsSectionContent.description}
          </p>

          <div className="mt-10 flex items-center gap-4 border-l-2 border-primary pl-4">
            <p className="text-3xl font-bold">{eventCount}</p>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/55">Stories of service,<br />action and community</p>
          </div>
        </motion.div>

        {featuredEvent && (
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative mx-auto w-full max-w-md lg:mr-0">
            <div className="absolute -inset-3 rounded-[2rem] bg-primary/25 blur-2xl" />
            <Link to={`/events/${featuredEvent.slug}`} className="group relative block overflow-hidden rounded-[1.5rem] border border-white/15 bg-slate-900 shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              <div className="aspect-[5/4] overflow-hidden bg-slate-800">
                {featuredEvent.image && <img src={featuredEvent.image} alt={featuredEvent.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />}
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent px-5 pb-5 pt-20">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Latest event · {formatDate(featuredEvent.startDate)}</p>
                <p className="mt-2 text-xl font-bold leading-tight text-white">{featuredEvent.title}</p>
              </div>
            </Link>
          </motion.div>
        )}
      </div>

    </section>
  );
}


/* =========================================================
   EVENT CARD
========================================================= */

function EventCard({ event, index }) {
  const navigate = useNavigate();

  function openEvent(target) {
    if (target.closest("a")) return;
    navigate(`/events/${event.slug}`);
  }

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
      onClick={(clickEvent) => openEvent(clickEvent.target)}
      onKeyDown={(keyEvent) => {
        if (keyEvent.key === "Enter" || keyEvent.key === " ") {
          keyEvent.preventDefault();
          openEvent(keyEvent.target);
        }
      }}
      tabIndex={0}
      aria-label={`Open ${event.title}`}
      className="
        group
        flex
        flex-col
        cursor-pointer
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        will-change-transform
        hover:border-primary/30
        hover:shadow-xl
        hover:shadow-slate-900/10
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-primary
      "
    >

      {/* EVENT POSTER */}

      <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">

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

      <div className="flex flex-1 flex-col p-5 sm:p-6">

        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
          <span>Event {String(index + 1).padStart(2, "0")}</span>
          <span className="text-primary">NSS NITD</span>
        </div>

        <h2 className="mt-4 text-xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-primary sm:text-2xl">
          {event.title}
        </h2>


        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 sm:leading-7">
          {event.description}
        </p>


        {/* EVENT DETAILS */}

        <div className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-sm text-slate-500">

          {event.startDate && (
            <div className="flex items-center gap-2.5">

              <CalendarDays className="h-4 w-4 shrink-0 text-primary" />

              <span className="font-medium text-slate-600">
                {formatDate(event.startDate)}
              </span>

            </div>
          )}


          {event.venue && (
            <div className="flex items-center gap-2.5">

              <MapPin className="h-4 w-4 shrink-0 text-primary" />

              <span className="line-clamp-1 font-medium text-slate-600">
                {event.venue}
              </span>

            </div>
          )}

        </div>


        {/* VIEW EVENT */}

        <Link
          to={`/events/${event.slug}`}
          aria-label={`View details for ${event.title}`}
          className="group/button mt-7 inline-flex min-h-11 items-center justify-between gap-2 border-t border-slate-100 pt-4 text-sm font-semibold text-slate-900 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary hover:text-primary"
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

      <EventsHero eventCount={sortedEvents.length} featuredEvent={sortedEvents[0]} />


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
              The archive
            </p>


            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Every event leaves a mark.
            </h2>


            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Explore the drives, campaigns and shared experiences led by our volunteers.
            </p>

          </motion.div>


          {/* EVENT CARDS */}

          {sortedEvents.length > 0 ? (

            <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">

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
