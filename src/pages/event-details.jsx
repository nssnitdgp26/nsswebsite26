import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  MapPin,
  Images,
  Play,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";

import { events } from "@/data/events";


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

function getEmbedUrl(video) {
  if (typeof video !== "string") return null;

  if (video.includes("youtube.com/embed/")) return video;

  const match = video.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/
  );

  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}


/* =========================================================
   EVENT DETAILS
========================================================= */

function EventDetails() {
  const { slug } = useParams();
  const [activePhoto, setActivePhoto] = useState(null);

  const event = events.find(
    (item) => item.slug === slug
  );

  useEffect(() => {
    setActivePhoto(null);
  }, [slug]);

  useEffect(() => {
    if (activePhoto === null) return undefined;

    function handleKeyDown(eventKey) {
      if (eventKey.key === "Escape") setActivePhoto(null);
      if (eventKey.key === "ArrowLeft") {
        setActivePhoto((current) =>
          current === 0 ? event.photos.length - 1 : current - 1
        );
      }
      if (eventKey.key === "ArrowRight") {
        setActivePhoto((current) =>
          current === event.photos.length - 1 ? 0 : current + 1
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhoto, event]);


  /* =========================================================
     EVENT NOT FOUND
  ========================================================= */

  if (!event) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-slate-100 px-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-lg">
          <h1 className="text-3xl font-bold text-slate-900">
            Event not found
          </h1>

          <p className="mt-3 text-slate-600">
            The event you are looking for does not exist.
          </p>

          <Link
            to="/events"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Link>
        </div>
      </main>
    );
  }


  return (
    <main className="min-w-0 overflow-hidden bg-slate-100 text-slate-900">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-slate-950 text-white">

        {event.image && (
          <img
            src={event.image}
            alt=""
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
          />
        )}

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgba(2,12,27,.98)_12%,rgba(9,28,55,.92)_55%,rgba(2,12,27,.72))]" />
        <div className="absolute -right-28 top-16 -z-10 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <Link
            to="/events"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 text-sm font-semibold text-white/85 backdrop-blur-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            All events
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl pb-5 pt-14 sm:pb-8 sm:pt-20 lg:max-w-[56%]"
          >
            {event.category && (
              <p className="inline-flex rounded-full border border-primary/40 bg-primary/15 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white">
                {event.category}
              </p>
            )}

            <h1 className="mt-5 max-w-4xl break-words text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {event.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              {event.description}
            </p>
          </motion.div>

          {event.image && (
            <motion.figure
              initial={{ opacity: 0, x: 28, rotate: 2 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="absolute right-8 top-32 hidden w-[29%] max-w-sm lg:block"
            >
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-slate-800 p-2 shadow-2xl shadow-black/40">
                <img
                  src={event.image}
                  alt={`${event.title} event poster`}
                  className="aspect-[4/5] w-full rounded-[1.3rem] object-cover"
                />
                <div className="absolute inset-x-2 bottom-2 rounded-b-[1.3rem] bg-gradient-to-t from-slate-950/90 to-transparent px-5 pb-5 pt-16">
                  <p className="text-xs font-bold uppercase tracking-[0.17em] text-primary">NSS NIT Durgapur</p>
                  <p className="mt-1 text-sm font-semibold text-white">Event journal</p>
                </div>
              </div>
            </motion.figure>
          )}

          <div className="grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 sm:grid-cols-2 lg:max-w-[56%]">
            <div className="flex items-center gap-4 bg-slate-950/65 px-5 py-4 backdrop-blur-sm">
              <CalendarDays className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">When</p>
                <p className="mt-1 text-sm font-semibold text-white">{formatDate(event.startDate)}</p>
              </div>
            </div>

            {event.venue && (
              <div className="flex min-w-0 items-center gap-4 bg-slate-950/65 px-5 py-4 backdrop-blur-sm">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">Where</p>
                  <p className="mt-1 truncate text-sm font-semibold text-white">{event.venue}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>



      {/* =====================================================
          EVENT STORY
      ===================================================== */}

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Event overview
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              More than a day on the calendar.
            </h2>
          </div>

          <div className="mt-10 min-w-0 space-y-12 sm:mt-14 sm:space-y-16">


              {/* WHY */}

              {event.why && (
                <motion.section
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Sparkles className="h-5 w-5" />
                    </div>

                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      Purpose
                    </p>

                  </div>


                  <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                    Why it matters
                  </h2>


                  <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
                    {event.why}
                  </p>

                </motion.section>
              )}


              {/* ABOUT */}

              {event.about && (
                <motion.section
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>

                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      About
                    </p>

                  </div>


                  <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                    The story
                  </h2>


                  <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
                    {event.about}
                  </p>

                </motion.section>
              )}


              {/* ACTIVITIES */}

              {event.activities &&
                event.activities.length > 0 && (

                  <motion.section
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >

                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                      Highlights
                    </p>


                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                      On the day
                    </h2>


                    <div className="mt-8 grid gap-3 md:grid-cols-2 md:gap-4">

                      {event.activities.map(
                        (activity, index) => (

                          <motion.div
                            key={index}
                            initial={{
                              opacity: 0,
                              x: -20,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.06,
                            }}
                            className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5 transition-all hover:border-primary/30 hover:bg-white hover:shadow-lg hover:shadow-slate-200/60 sm:gap-5 sm:px-5"
                          >

                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                              {index + 1}
                            </div>


                            <p className="pt-1 text-sm leading-7 text-slate-600 sm:text-base">
                              {activity}
                            </p>

                          </motion.div>

                        )
                      )}

                    </div>

                  </motion.section>

                )}

            </div>

        </div>

      </section>



      {/* =====================================================
          PHOTO GALLERY
      ===================================================== */}

      {event.photos &&
        event.photos.length > 0 && (

          <section className="bg-slate-900 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">

            <div className="mx-auto max-w-7xl">


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl"
              >

                <div className="flex items-center gap-3 text-primary">

                  <Images className="h-5 w-5" />

                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Gallery
                  </p>

                </div>


                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  Moments From The Event
                </h2>


                <p className="mt-5 text-base leading-7 text-white/60 sm:text-lg">
                  A glimpse into the people, experiences, and memories that
                  made this event meaningful.
                </p>

              </motion.div>


              <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">

                {event.photos.map((photo, index) => (

                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 30,
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
                      delay: index * 0.06,
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-xl hover:shadow-black/20"
                  >

                    <button
                      type="button"
                      onClick={() => setActivePhoto(index)}
                      className="block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-primary"
                      aria-label={`View image ${index + 1} from ${event.title}`}
                    >
                    <div className="aspect-[4/3] overflow-hidden bg-slate-950">

                      <img
                        src={photo}
                        alt={`${event.title} ${index + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                    </div>
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent px-4 pb-4 pt-12 text-xs font-semibold uppercase tracking-[0.16em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                      View image {index + 1}
                    </span>
                    </button>

                  </motion.div>

                ))}

              </div>

            </div>

          </section>

        )}



      {/* =====================================================
          VIDEOS
      ===================================================== */}

      {event.videos &&
        event.videos.length > 0 && (

          <section className="border-t border-white/5 bg-slate-800 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">

            <div className="mx-auto max-w-6xl">


              <div className="max-w-3xl">

                <div className="flex items-center gap-3 text-primary">

                  <Play className="h-5 w-5" />

                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Watch
                  </p>

                </div>


                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  Event Videos
                </h2>


                <p className="mt-5 text-base leading-7 text-white/60 sm:text-lg">
                  Watch moments and experiences captured during the event.
                </p>

              </div>


              <div className="mt-10 grid gap-6 sm:mt-14">

                {event.videos.map((video, index) => (

                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/20"
                  >
                    {getEmbedUrl(video) ? (
                      <iframe
                        src={getEmbedUrl(video)}
                        title={`${event.title} video ${index + 1}`}
                        className="aspect-video w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={video}
                        controls
                        playsInline
                        preload="metadata"
                        className="block aspect-video w-full bg-black object-contain"
                      >
                        Your browser does not support the video tag.
                      </video>
                    )}

                  </motion.div>

                ))}

              </div>

            </div>

          </section>

        )}


      {activePhoto !== null && event.photos && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${event.title} gallery image ${activePhoto + 1}`}
          onClick={(clickEvent) => {
            if (clickEvent.target === clickEvent.currentTarget) setActivePhoto(null);
          }}
        >
          <button
            type="button"
            onClick={() => setActivePhoto(null)}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-8 sm:top-8"
            aria-label="Close image viewer"
          >
            <X className="h-5 w-5" />
          </button>

          {event.photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => setActivePhoto((current) => current === 0 ? event.photos.length - 1 : current - 1)}
                className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-8"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={() => setActivePhoto((current) => current === event.photos.length - 1 ? 0 : current + 1)}
                className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-8"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <img
            src={event.photos[activePhoto]}
            alt={`${event.title} ${activePhoto + 1}`}
            className="max-h-[82vh] max-w-full rounded-xl object-contain shadow-2xl"
          />
        </div>
      )}

    </main>
  );
}


export default EventDetails;
