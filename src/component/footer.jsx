import React from "react";
import {
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Separator } from "@/component/ui/separator";
import {
  footerLinks,
  relatedLinks,
  siteConfig,
} from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* =====================================================
              Brand
          ====================================================== */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <img
                  src="/logo.png"
                  alt="NSS NIT Durgapur"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h2 className="font-bold">
                  {siteConfig.name}
                </h2>

                <p className="text-xs text-white/60">
                  {siteConfig.motto}
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-white/75">
              {siteConfig.description}
            </p>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
              Under the Ministry of Youth Affairs &amp; Sports,
              Government of India.
            </p>
          </div>

          {/* =====================================================
              Quick Links
          ====================================================== */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white/50">
              Quick Links
            </h3>

            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              Related Links
          ====================================================== */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white/50">
              Related
            </h3>

            <ul className="space-y-2">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =====================================================
              Contact
          ====================================================== */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white/50">
              Contact
            </h3>

            <ul className="space-y-3">

              {/* Address */}
              <li className="flex items-start gap-2 text-sm text-white/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />

                <span>
                  {siteConfig.contact.address}
                </span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2 text-sm text-white/80">
                <Mail className="h-4 w-4 shrink-0" />

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </li>

              {/* Instagram */}
              <li>
                <a
                  href="https://www.instagram.com/nss_nitdgp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <Instagram className="h-4 w-4 shrink-0" />
                  nss_nitdgp
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>

              {/* LinkedIn */}
              <li>
                <a
                  href="https://www.linkedin.com/company/nss-nit-durgapur/posts/?feedView=videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <Linkedin className="h-4 w-4 shrink-0" />
                  nss_nit_durgapur
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Divider */}
        <Separator className="my-8 bg-white/10" />

        {/* =====================================================
            Copyright
        ====================================================== */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()}{" "}
            {siteConfig.name}. All rights reserved.
          </p>

          <p className="text-xs text-white/60">
            National Service Scheme &middot; Ministry of Youth Affairs &amp;
            Sports, Government of India
          </p>

        </div>
      </div>
    </footer>
  );
}