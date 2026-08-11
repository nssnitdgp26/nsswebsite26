import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
} from "lucide-react";

import { Badge } from "@/component/ui/badge";
import { events, eventsSectionContent } from "@/data/events";

const statusConfig = {
  completed: {
    label: "Completed",
    variant: "secondary",
  },
  registration_open: {
    label: "Registration Open",
    variant: "default",
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

function EventTimelineItem({ event, index, inView }) {
  const status = statusConfig[event.status];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={
        inView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 24 }
      }
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      id={event.slug ? `event-${event.slug}` : undefined}
      className="relative grid gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr]"
    >
      {/* Date */}
      <div className="relative md:pr-8 md:text-right">
        <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary md:flex md:flex-col md:items-end md:gap-1">
          <Calendar className="h-4 w-4 md:hidden" />

          <span className="text-base">
            {formatDate(event.startDate)}
          </span>
        </div>

        {event.time && (
          <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground md:justify-end">
            <Clock className="h-3.5 w-3.5" />
            {event.time}
          </div>
        )}
      </div>

      {/* Timeline Connector */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-1.5 hidden h-full w-px bg-border md:left-[180px] lg:left-[220px] md:block"
      />

      {/* Timeline Dot */}
      <div
        aria-hidden="true"
        className="absolute left-[-5px] top-1.5 hidden h-3 w-3 rounded-full border-2 border-background bg-primary ring-4 ring-primary/10 md:left-[175px] lg:left-[215px] md:block"
      />

      {/* Event Content */}
      <div className="relative rounded-2xl border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-medium md:ml-8 lg:ml-8">
        {/* Category + Status */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {event.category && (
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {event.category}
            </span>
          )}

          {status && (
            <Badge variant={status.variant}>
              {status.label}
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
          {event.title}
        </h3>

        {/* Description */}
        {event.description && (
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
            {event.description}
          </p>
        )}

        {/* Event Details */}
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          {event.venue && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <span>{event.venue}</span>
            </div>
          )}

          {event.duration && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 shrink-0 text-primary" />
              <span>{event.duration}</span>
            </div>
          )}
        </div>

        {/* Image */}
        {event.image && (
          <div className="mt-6 overflow-hidden rounded-xl">
            <img
              src={event.image}
              alt={event.title}
              className="h-auto max-h-[420px] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        )}

        {/* Actions */}
        {(event.registrationLink || event.outcome) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {event.registrationLink && (
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
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
                className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                View outcomes
                <ArrowRight className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function EventsSection() {
  const [filter, setFilter] = useState("all");

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const filteredEvents =
    filter === "all"
      ? events
      : events.filter((event) => event.status === filter);

  return (
    <section
      id="events"
      ref={ref}
      className="py-16 sm:py-24"
      aria-label="NSS Events"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {eventsSectionContent.eyebrow}
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {eventsSectionContent.title}
          </h2>

          <p className="mt-4 leading-7 text-muted-foreground">
            {eventsSectionContent.description}
          </p>
        </div>

        {/* Filters */}
        <div
          className="mb-12 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Event filters"
        >
          {["all", "registration_open", "completed"].map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              onClick={() => setFilter(item)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                filter === item
                  ? "bg-primary text-primary-foreground"
                  : "border bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {eventsSectionContent.filters[item]}
            </button>
          ))}
        </div>

        {/* Timeline */}
        {filteredEvents.length > 0 ? (
          <div className="space-y-10 md:space-y-12">
            {filteredEvents.map((event, index) => (
              <EventTimelineItem
                key={event.id ?? event.slug ?? index}
                event={event}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border bg-card px-6 py-12 text-center">
            <p className="text-sm text-muted-foreground">
              No events found for this filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}