import { aboutContent } from '@/data/about';

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24" aria-label="About NSS">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-service">
              {aboutContent.eyebrow}
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              {aboutContent.title}{' '}<span className="text-primary">{aboutContent.titleAccent}</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {aboutContent.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>

          {/* Objectives card */}
          <div className="rounded-2xl border bg-card p-8 shadow-soft">
            <h3 className="mb-6 text-xl font-bold">{aboutContent.objectivesTitle}</h3>
            <ul className="space-y-4">
              {aboutContent.objectives.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-nature/10">
                    <div className="h-2 w-2 rounded-full bg-brand-nature" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{item.title}</div>
                    <div className="mt-0.5 text-sm text-muted-foreground">{item.description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
