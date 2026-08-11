import React from "react";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";

import { PageIntro } from "@/component/page-shell";
import { siteConfig } from "@/data/site";

export default function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="Contact Us"
        title="Get in Touch with NSS NIT Durgapur"
        description="Have a question, want to collaborate, or interested in volunteering? Reach out to the NSS unit at NIT Durgapur."
      />

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-card p-7 shadow-soft">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>

              <h2 className="text-lg font-semibold">Visit Us</h2>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {siteConfig.contact.address}
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-7 shadow-soft">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>

              <h2 className="text-lg font-semibold">Email Us</h2>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                For enquiries, volunteering, and collaboration opportunities.
              </p>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-4 inline-flex break-all text-sm font-medium text-primary hover:underline"
              >
                {siteConfig.contact.email}
              </a>
            </div>

            <div className="rounded-2xl border bg-card p-7 shadow-soft">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>

              <h2 className="text-lg font-semibold">Call Us</h2>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Get in touch with the NSS unit for direct enquiries.
              </p>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="mt-4 inline-flex text-sm font-medium text-primary hover:underline"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl bg-primary px-7 py-12 text-center text-primary-foreground sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] opacity-75">
              NSS NIT Durgapur
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Be a part of the service.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 opacity-80">
              Whether you are a student looking to volunteer or an organisation
              interested in working with us, we would be happy to hear from you.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-primary transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                Send an Email
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Call NSS
              </a>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border bg-card p-7 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  Institutional Affiliation
                </p>

                <h2 className="mt-2 text-xl font-bold">
                  National Service Scheme
                </h2>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  National Service Scheme, NIT Durgapur, under the Ministry of
                  Youth Affairs &amp; Sports, Government of India.
                </p>
              </div>

              <a
                href="https://nitdgp.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                NIT Durgapur
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}