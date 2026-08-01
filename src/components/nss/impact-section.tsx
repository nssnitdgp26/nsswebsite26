'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { impactMetrics } from '@/data/impact';
import { homeContent } from '@/data/home';
import type { ImpactMetric } from '@/types/content';

function AnimatedCounter({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => { if (!inView) return; const startTime = performance.now(); let frame = 0; const animate = (now: number) => { const progress = Math.min((now - startTime) / 1200, 1); setCount(Math.floor((1 - Math.pow(1 - progress, 3)) * target)); if (progress < 1) frame = requestAnimationFrame(animate); }; frame = requestAnimationFrame(animate); return () => cancelAnimationFrame(frame); }, [inView, target]);
  return <span>{count.toLocaleString('en-IN')}</span>;
}

function MetricCard({ metric, index, inView }: { metric: ImpactMetric; index: number; inView: boolean }) { const value = Number(metric.value); return <motion.article initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex flex-col items-center rounded-2xl border bg-card p-6 shadow-soft"><div className="mb-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">{Number.isNaN(value) ? metric.value : <AnimatedCounter target={value} inView={inView} />}</div><div className="text-sm font-medium text-muted-foreground">{metric.label}</div><div className="mt-2 text-xs text-muted-foreground/70">{metric.reportingPeriod}</div></motion.article>; }

export function ImpactSection() { const ref = useRef<HTMLDivElement>(null); const inView = useInView(ref, { once: true, margin: '-100px' }); return <section id="impact" className="bg-surface py-16 sm:py-24" aria-label="Impact metrics"><div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 text-center"><h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{homeContent.impact.title}</h2><p className="mt-2 text-muted-foreground">{homeContent.impact.description}</p></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{impactMetrics.map((metric, index) => <MetricCard key={metric.label} metric={metric} index={index} inView={inView} />)}</div></div></section>; }
