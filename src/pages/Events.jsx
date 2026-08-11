import React, { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
} from "lucide-react";

import { events, eventsSectionContent } from "@/data/events";
import { PageIntro } from "@/component/page-shell";

const statusConfig = {
  completed: {
    label: "Completed",
    icon: CheckCircle2,
    className: "bg-primary/10 text-primary border-primary/20",
  },
  registration_open: {
    label: "Upcoming",
    icon: Clock3,
    className:
      "bg-brand-service/10 text-brand-service border-brand-service/20",
  },
};

function formatDate(date) {
  if (!date) return "";

  return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function getYear(date) {
  if (!date) return "Other";

  return new Date(`${date}T00:00:00`).getFullYear();
}

function EventTimelineItem({ event, index }) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const status = statusConfig[event.status] ?? statusConfig.completed;
  const StatusIcon = status.icon;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={
        inView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 30 }
      }
      transition={{
        duration: 0.5,
        delay: index * 0.06,
      }}
      className="relative grid gap-6 md:grid-cols-[180px_1fr] md:gap-10"
    >
      <div className="relative md:text-right">
        <p className="text-sm font-semibold text-primary">
          {formatDate(event.startDate)}
        </p>

        {event.endDate && event.endDate !== event.startDate && (
          <p className="mt-1 text-xs text-muted-foreground">
            to {formatDate(event.endDate)}
          </p>
        )}

        <div
          aria-hidden="true"
          className="absolute -right-[2.65rem] top-1 hidden h-4 w-4 rounded-full border-4 border-background bg-primary md:block"
        />
      </div>

      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary md:hidden"
        />

        <div className="overflow-hidden rounded-2xl border bg-card shadow-soft transition-shadow hover:shadow-medium">
          {event.image && (
            <div className="aspect-[16/7] overflow-hidden bg-muted">
              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          )}

          <div className="p-6 sm:p-7">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${status.className}`}
              >
                <StatusIcon className="h-3.5 w-3.5" />
                {status.label}
              </span>

              {event.category && (
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  {event.category}
                </span>
              )}
            </div>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {event.title}
            </h2>

            {event.description && (
              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                {event.description}
              </p>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4 shrink-0 text-primary" />
                <span>{formatDate(event.startDate)}</span>
              </div>

              {event.venue && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  <span>{event.venue}</span>
                </div>
              )}
            </div>

            {(event.registrationLink || event.outcome) && (
              <div className="mt-7 flex flex-wrap gap-3 border-t pt-5">
                {event.registrationLink && (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
                  >
                    Register now
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}

                {event.outcome && (
                  <a
                    href={event.outcome}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    View outcomes
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function YearSection({ year, yearEvents }) {
  return (
    <section className="relative">
      <div className="mb-10 flex items-center gap-4">
        <div className="flex h-12 w-20 shrink-0 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground shadow-sm">
          {year}
        </div>

        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="relative ml-5 border-l border-primary/20 pl-8 md:ml-[180px] md:border-l-0 md:pl-10">
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-[calc(50%-90px)] top-0 hidden w-px bg-primary/20 md:block"
        />

        <div className="space-y-10">
          {yearEvents.map((event, index) => (
            <EventTimelineItem
              key={event.id ?? event.slug ?? `${event.title}-${index}`}
              event={event}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Events() {
  const sortedEvents = useMemo(() => {
    return [...events].sort(
      (a, b) =>
        new Date(`${b.startDate}T00:00:00`) -
        new Date(`${a.startDate}T00:00:00`)
    );
  }, []);

  const eventsByYear = useMemo(() => {
    return sortedEvents.reduce((groups, event) => {
      const year = getYear(event.startDate);

      if (!groups[year]) {
        groups[year] = [];
      }

      groups[year].push(event);

      return groups;
    }, {});
  }, [sortedEvents]);

  const years = Object.keys(eventsByYear).sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <main>
      <PageIntro
        eyebrow={eventsSectionContent.eyebrow ?? "NSS Activities"}
        title={eventsSectionContent.title ?? "Events & Activities"}
        description={
          eventsSectionContent.description ??
          "Explore the events, drives, campaigns and community initiatives conducted by NSS NIT Durgapur."
        }
      />

      <section
        className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        aria-label="NSS events timeline"
      >
        <div className="mx-auto max-w-6xl">
          {years.length > 0 ? (
            <div className="space-y-16">
              {years.map((year) => (
                <YearSection
                  key={year}
                  year={year}
                  yearEvents={eventsByYear[year]}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border bg-card px-6 py-16 text-center">
              <CalendarDays className="mx-auto h-8 w-8 text-muted-foreground" />

              <h2 className="mt-4 text-lg font-semibold">
                No events available
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Events and activities will appear here when they are added.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-primary px-7 py-12 text-center text-primary-foreground sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] opacity-80">
            NSS NIT Durgapur
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Be a part of the next initiative.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 opacity-80">
            Stay connected with NSS NIT Durgapur and take part in activities
            that create meaningful impact in the community.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-primary transition-transform hover:-translate-y-0.5"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Events;
