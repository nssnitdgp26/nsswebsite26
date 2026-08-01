import { EventsSection } from '@/components/nss/events-section';
import { PageIntro, PageShell } from '@/components/nss/page-shell';
import { pageIntros } from '@/data/pages';
export default function EventsPage() {
  return (
    <PageShell>
      <PageIntro {...pageIntros.events} />
      <EventsSection />
    </PageShell>
  );
}
