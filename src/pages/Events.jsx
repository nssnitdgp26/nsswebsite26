import React, { useState } from "react";
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

  return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/* Poster stays fully visible.
   The blurred background fills side spaces beautifully. */
function EventPoster({ event, className = "" }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = event.image && !imageFailed;

  return (
    <div
      className={`relative isolate overflow-hidden bg-slate-950 ${className}`}
    >
      {showImage ? (
        <>
          {/* Blurred version fills the complete poster area */}
          <img
            src={event.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full scale-110 object-cover opacity-45 blur-2xl"
          />

          <div className="absolute inset-0 -z-10 bg-slate-950/45" />

          {/* Full poster */}
          <img
            src={event.image}
            alt={event.title}
            onError={() => setImageFailed(true)}
            className="relative h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </>
      ) : (
        <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_top,rgba(45,101,184,.45),transparent_55%),linear-gradient(135deg,#0b1930,#142d57)] px-6 text-center text-white">
          <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/55">
            NSS NIT Durgapur
          </span>

          <span className="mt-3 max-w-xs text-lg font-semibold leading-snug">
            {event.title}
          </span>
        </div>
      )}

      {event.category && (
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
          {event.category}
        </span>
      )}
    </div>
  );
}

function EventsHero({ eventCount, featuredEvent }) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_10%,rgba(39,100,189,.5),transparent_28rem),linear-gradient(135deg,#071426,#112d55)]" />
      <div className="absolute -bottom-32 -left-32 -z-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-primary">
            <Sparkles className="h-4 w-4" />
            <p className="text-xs font-bold uppercase tracking-[0.2em]">
              {eventsSectionContent.eyebrow || "NSS NIT Durgapur"}
            </p>
          </div>

          <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            Stories of service.
            <span className="block text-primary">Moments of impact.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
            {eventsSectionContent.description}
          </p>

          <div className="mt-9 flex items-center gap-4 border-l-2 border-primary pl-4">
            <p className="text-3xl font-bold">{eventCount}</p>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/55">
              Events, drives and
              <br />
              community initiatives
            </p>
          </div>
        </motion.div>

        {featuredEvent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto w-full max-w-md lg:mr-0"
          >
            <Link
              to={`/events/${featuredEvent.slug}`}
              className="group block overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur-sm"
            >
              <EventPoster
                event={featuredEvent}
                className="aspect-[4/3] rounded-[1.25rem]"
              />

              <div className="px-3 pb-3 pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                  Latest event · {formatDate(featuredEvent.startDate)}
                </p>
                <p className="mt-2 text-xl font-bold leading-tight text-white">
                  {featuredEvent.title}
                </p>
              </div>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function EventCard({ event, index }) {
  const navigate = useNavigate();

  function openEvent(target) {
    if (target.closest("a")) return;
    navigate(`/events/${event.slug}`);
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      onClick={(clickEvent) => openEvent(clickEvent.target)}
      onKeyDown={(keyEvent) => {
        if (keyEvent.key === "Enter" || keyEvent.key === " ") {
          keyEvent.preventDefault();
          openEvent(keyEvent.target);
        }
      }}
      tabIndex={0}
      aria-label={`Open ${event.title}`}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all duration-300 hover:border-primary/30 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      <EventPoster event={event} className="aspect-[4/3]" />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
          <span>Event {String(index + 1).padStart(2, "0")}</span>
          <span className="text-primary">NSS NITD</span>
        </div>

        <h2 className="mt-4 text-xl font-bold leading-tight tracking-tight text-slate-900 transition-colors group-hover:text-primary sm:text-2xl">
          {event.title}
        </h2>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
          {event.description}
        </p>

        <div className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-sm">
          {event.startDate && (
            <div className="flex items-center gap-2.5 text-slate-600">
              <CalendarDays className="h-4 w-4 shrink-0 text-primary" />
              <span className="font-medium">{formatDate(event.startDate)}</span>
            </div>
          )}

          {event.venue && (
            <div className="flex items-center gap-2.5 text-slate-600">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <span className="line-clamp-1 font-medium">{event.venue}</span>
            </div>
          )}
        </div>

        <Link
          to={`/events/${event.slug}`}
          aria-label={`View details for ${event.title}`}
          className="group/button mt-7 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-semibold text-slate-900 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          View Event

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover/button:bg-primary group-hover/button:text-primary-foreground">
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </motion.article>
  );
}

function Events() {
  const sortedEvents = [...events].sort(
    (a, b) =>
      new Date(`${b.startDate}T00:00:00`) -
      new Date(`${a.startDate}T00:00:00`)
  );

  return (
    <main className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <EventsHero
        eventCount={sortedEvents.length}
        featuredEvent={sortedEvents[0]}
      />

      <section className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-blue-400/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-11"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              The archive
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Every event leaves a mark.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Explore the drives, campaigns and shared experiences led by our
              volunteers.
            </p>
          </motion.div>

          {sortedEvents.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {sortedEvents.map((event, index) => (
                <EventCard key={event.slug} event={event} index={index} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
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