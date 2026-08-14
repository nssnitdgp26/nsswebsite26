import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  MapPin,
  Images,
  Play,
  Sparkles,
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


/* =========================================================
   EVENT DETAILS
========================================================= */

function EventDetails() {
  const { slug } = useParams();

  const event = events.find(
    (item) => item.slug === slug
  );


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
    <main className="overflow-hidden bg-slate-100 text-slate-900">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-slate-900 text-white">


        {/* Decorative Background */}

        <div className="absolute inset-0 opacity-40">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

          <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        </div>


        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">


          {/* Back */}

          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Link>


          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">


            {/* Hero Content */}

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >


              {event.category && (
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
                  {event.category}
                </p>
              )}


              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                {event.title}
              </h1>


              <div className="mt-7 h-px w-20 bg-primary" />


              <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                {event.description}
              </p>


              {/* Event Meta */}

              <div className="mt-10 grid gap-4 sm:grid-cols-2">


                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <CalendarDays className="h-5 w-5 text-primary" />

                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                    Date
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    {formatDate(event.startDate)}
                  </p>
                </div>


                {event.venue && (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <MapPin className="h-5 w-5 text-primary" />

                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                      Venue
                    </p>

                    <p className="mt-1 text-sm font-semibold leading-6 text-white">
                      {event.venue}
                    </p>
                  </div>
                )}

              </div>

            </motion.div>


            {/* Poster */}

            {event.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
                className="mx-auto w-full max-w-xl"
              >

                <div className="relative">


                  <div className="absolute -inset-4 rounded-[2rem] bg-primary/20 blur-2xl" />


                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-800 p-2 shadow-2xl">

                    <div className="overflow-hidden rounded-xl bg-slate-950">

                      <img
                        src={event.image}
                        alt={event.title}
                        className="max-h-[650px] w-full object-cover"
                      />

                    </div>

                  </div>

                </div>

              </motion.div>
            )}

          </div>

        </div>

      </section>



      {/* =====================================================
          EVENT STORY
      ===================================================== */}

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

        <div className="mx-auto max-w-6xl">


          <div className="grid gap-14 lg:grid-cols-[0.35fr_1fr]">


            {/* Side Label */}

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                The Event
              </p>

              <div className="mt-5 h-px w-16 bg-primary" />
            </div>


            {/* Content */}

            <div className="space-y-16">


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
                    Why We Conduct This Event
                  </h2>


                  <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
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
                    About The Event
                  </h2>


                  <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
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
                      What Happens in This Event
                    </h2>


                    <div className="mt-8 grid gap-3">

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
                            className="group flex items-start gap-5 rounded-xl border border-slate-200 bg-slate-50 px-5 py-5 transition-all hover:border-primary/30 hover:bg-white hover:shadow-md"
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

        </div>

      </section>



      {/* =====================================================
          PHOTO GALLERY
      ===================================================== */}

      {event.photos &&
        event.photos.length > 0 && (

          <section className="bg-slate-900 px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">

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


              <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

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
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-800"
                  >

                    <div className="aspect-[4/3] overflow-hidden">

                      <img
                        src={photo}
                        alt={`${event.title} ${index + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                    </div>

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

          <section className="bg-slate-800 px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">

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


              <div className="mt-14 space-y-8">

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
                    className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl"
                  >

                    <video
                      src={video}
                      controls
                      playsInline
                      preload="metadata"
                      className="block max-h-[700px] w-full"
                    >
                      Your browser does not support the video tag.
                    </video>

                  </motion.div>

                ))}

              </div>

            </div>

          </section>

        )}



      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="bg-slate-100 px-4 py-20 sm:px-6 lg:px-8">

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-5xl rounded-3xl bg-slate-900 px-7 py-12 text-center text-white shadow-xl sm:px-12 sm:py-16"
        >

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
            NSS NIT Durgapur
          </p>


          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Explore more events and initiatives.
          </h2>


          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/60">
            Discover the activities, campaigns, and community initiatives
            conducted by NSS NIT Durgapur.
          </p>


          <Link
            to="/events"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >

            <ArrowLeft className="h-4 w-4" />

            Explore More Events

          </Link>

        </motion.div>

      </section>


    </main>
  );
}


export default EventDetails;