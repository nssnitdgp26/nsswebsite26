import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

import { homeContent } from "@/data/home";
import { siteConfig } from "@/data/site";

export function JoinSection() {
  const subject = encodeURIComponent("NSS volunteer interest");

  return (
    <section
      id="join"
      className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32"
      aria-label="Join NSS NIT Durgapur"
    >
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              {homeContent.join.eyebrow}
            </p>

            <h2 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {homeContent.join.title}
            </h2>

            <div className="mt-8 h-px w-20 bg-blue-400" />

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
              {homeContent.join.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:justify-self-end"
          >
            <div className="max-w-md border-l border-white/15 pl-7">
              <p className="text-sm leading-7 text-white/50">
                Become part of a student community that learns through
                service, takes responsibility beyond the classroom, and works
                towards meaningful community impact.
              </p>

              <a
                href={`mailto:${siteConfig.contact.email}?subject=${subject}`}
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-slate-950 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-100"
              >
                <Mail className="h-4 w-4" />

                {homeContent.join.action}

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-20 h-px origin-left bg-white/10"
        />

        <div className="mt-6 flex flex-col justify-between gap-3 text-xs uppercase tracking-[0.16em] text-white/30 sm:flex-row">
          <span>NSS NIT Durgapur</span>
          <span>Not Me, But You</span>
        </div>
      </div>
    </section>
  );
}