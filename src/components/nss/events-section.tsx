'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { events, eventsSectionContent } from '@/data/events';
import { initiatives } from '@/data/initiatives';
import type { EventRecord } from '@/types/content';

const statusConfig = {
  completed: { label: 'Completed', variant: 'secondary' as const },
  registration_open: { label: 'Registration Open', variant: 'default' as const },
};

function EventCard({ event, index, inView }: { event: EventRecord; index: number; inView: boolean }) {
  const initiative = initiatives.find((item) => item.slug === event.initiativeSlug);
  const status = statusConfig[event.status];

  return <motion.article initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: index * 0.08 }} className="group flex flex-col rounded-2xl border bg-card p-6 transition-all hover:shadow-medium">
    <div className="mb-3 flex flex-wrap items-center gap-2"><Badge variant={status.variant}>{status.label}</Badge>{initiative && <span className="text-xs text-muted-foreground">{initiative.title}</span>}</div>
    <h3 className="mb-2 text-lg font-semibold group-hover:text-primary">{event.title}</h3>
    <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{event.description}</p>
    <div className="space-y-1.5 text-sm text-muted-foreground">
      <div className="flex items-center gap-2"><Calendar className="h-4 w-4 shrink-0" /><time dateTime={event.startDate}>{new Date(`${event.startDate}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</time></div>
      <div className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" /><span>{event.venue}</span></div>
    </div>
    {event.registrationLink && <a href={event.registrationLink} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">Register now <ArrowRight className="h-4 w-4" /></a>}
    {event.outcome && <details className="mt-4"><summary className="cursor-pointer text-sm font-medium text-primary hover:underline">View outcomes</summary><p className="mt-2 rounded-lg bg-muted p-3 text-sm text-muted-foreground">{event.outcome}</p></details>}
  </motion.article>;
}

export function EventsSection() {
  const [filter, setFilter] = useState<'all' | 'registration_open' | 'completed'>('all');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const filteredEvents = filter === 'all' ? events : events.filter((event) => event.status === filter);

  return <section id="events" className="py-16 sm:py-24" aria-label="Events"><div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-service">{eventsSectionContent.eyebrow}</p><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{eventsSectionContent.title}</h2></div>
      <div className="flex gap-2" role="tablist">{(['all', 'registration_open', 'completed'] as const).map((item) => <button key={item} type="button" role="tab" aria-selected={filter === item} onClick={() => setFilter(item)} className={`rounded-lg px-3 py-1.5 text-sm font-medium ${filter === item ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}>{eventsSectionContent.filters[item]}</button>)}</div>
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filteredEvents.map((event, index) => <EventCard key={event.slug} event={event} index={index} inView={inView} />)}</div>
    {filteredEvents.length === 0 && <p className="py-16 text-center text-muted-foreground">No events found for this filter.</p>}
  </div></section>;
}
