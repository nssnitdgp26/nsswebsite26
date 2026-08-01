import Link from 'next/link';
import { TreePine, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { footerLinks, relatedLinks, siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#090d17] text-foreground" role="contentinfo">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div aria-hidden="true" className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-[110px]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 font-semibold">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-primary text-primary-foreground">
                <TreePine className="h-5 w-5" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold">{siteConfig.name}</span>
                <span className="text-[10px] font-medium opacity-70">{siteConfig.motto}</span>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed opacity-80">
              {siteConfig.description} Under the Ministry of Youth Affairs &amp; Sports, Government of India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground/50">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground/50">Related</h3>
            <ul className="space-y-2">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm opacity-80 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground/50">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Mail className="h-4 w-4 shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Phone className="h-4 w-4 shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs opacity-60">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs opacity-60">
            National Service Scheme &middot; Ministry of Youth Affairs &amp; Sports, Government of India
          </p>
        </div>
      </div>
    </footer>
  );
}
