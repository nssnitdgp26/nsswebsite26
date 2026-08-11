import React from "react";
import { Heart, Mail } from "lucide-react";
import { homeContent } from "@/data/home";
import { siteConfig } from "@/data/site";

export function JoinSection() {
  const subject = encodeURIComponent("NSS volunteer interest");

  return (
    <section
      id="join"
      className="relative overflow-hidden bg-primary py-16 text-primary-foreground sm:py-24"
      aria-label="Join NSS NIT Durgapur"
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative Glow */}
      <div
        aria-hidden="true"
        className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Icon */}
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
          <Heart className="h-6 w-6" />
        </div>

        {/* Eyebrow */}
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
          {homeContent.join.eyebrow}
        </p>

        {/* Title */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {homeContent.join.title}
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-primary-foreground/75 sm:text-lg">
          {homeContent.join.description}
        </p>

        {/* CTA */}
        <a
          href={`mailto:${siteConfig.contact.email}?subject=${subject}`}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-card px-6 py-3.5 font-semibold text-primary shadow-floating transition-all hover:-translate-y-0.5 hover:bg-card/95"
        >
          <Mail className="h-4 w-4" />
          {homeContent.join.action}
        </a>
      </div>
    </section>
  );
}
