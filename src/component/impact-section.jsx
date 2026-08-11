import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { impactMetrics } from "@/data/impact";
import { homeContent } from "@/data/home";

function AnimatedCounter({ value, inView }) {
  const [count, setCount] = useState(0);

  // Extract numeric portion:
  // "250+"   -> 250
  // "5,000+" -> 5000
  // "12,000" -> 12000
  const numericValue = Number(
    String(value).replace(/,/g, "").replace(/[^\d]/g, "")
  );

  // Preserve everything after the number, e.g. "+"
  const suffix = String(value).replace(/[\d,]/g, "");

  useEffect(() => {
    if (!inView || Number.isNaN(numericValue)) return;

    const startTime = performance.now();
    let frame;

    const animate = (now) => {
      const progress = Math.min((now - startTime) / 1200, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * numericValue));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [inView, numericValue]);

  if (Number.isNaN(numericValue)) {
    return <span>{value}</span>;
  }

  return (
    <span>
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

function MetricCard({ metric, index, inView }) {
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
        delay: index * 0.1,
      }}
      className="flex flex-col items-center rounded-2xl border bg-card p-6 shadow-soft"
    >
      <div className="mb-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        <AnimatedCounter
          value={metric.value}
          inView={inView}
        />
      </div>

      <div className="text-sm font-medium text-muted-foreground">
        {metric.label}
      </div>

      <div className="mt-2 text-xs text-muted-foreground/70">
        {metric.reportingPeriod}
      </div>
    </motion.article>
  );
}

export function ImpactSection() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="impact"
      className="bg-surface py-16 sm:py-24"
      aria-label="Impact metrics"
    >
      <div
        ref={ref}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {homeContent.impact.title}
          </h2>

          <p className="mt-2 text-muted-foreground">
            {homeContent.impact.description}
          </p>
        </div>

        {/* Metrics */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              metric={metric}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
