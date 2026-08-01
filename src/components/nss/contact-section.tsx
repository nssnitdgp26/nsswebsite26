import { Clock, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { contactContent } from '@/data/contact';

const contactIcons = { address: MapPin, email: Mail, phone: Phone, hours: Clock };

export function ContactSection() {
  return (
    <section id="contact" className="bg-surface py-16 sm:py-24" aria-label="Contact us">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-service">{contactContent.eyebrow}</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{contactContent.title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{contactContent.description}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactContent.cards.map((card) => {
            const Icon = contactIcons[card.key];
            return (
              <div key={card.key} className="flex flex-col items-start rounded-2xl border bg-card p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
                <h3 className="mb-1 font-semibold">{card.title}</h3>
                {'lines' in card ? <p className="text-sm leading-relaxed text-muted-foreground">{card.lines.map((line) => <span key={line} className="block">{line}</span>)}</p> : 'href' in card ? <a href={card.href} className="text-sm text-primary hover:underline">{card.value}</a> : <p className="text-sm text-muted-foreground">{card.value}</p>}
                {'note' in card && <p className="mt-1 text-xs text-muted-foreground">{card.note}</p>}
              </div>
            );
          })}
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border bg-muted">
          <div className="flex h-64 items-center justify-center sm:h-80"><div className="text-center">
            <MapPin className="mx-auto mb-3 h-8 w-8 text-muted-foreground/50" />
            <p className="text-sm text-muted-foreground">{contactContent.map.label}</p>
            <a href={contactContent.map.href} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              {contactContent.map.action} <ExternalLink className="h-3 w-3" />
            </a>
          </div></div>
        </div>
      </div>
    </section>
  );
}
