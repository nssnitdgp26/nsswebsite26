import { InitiativesSection } from '@/components/nss/initiatives-section';
import { PageIntro, PageShell } from '@/components/nss/page-shell';
import { pageIntros } from '@/data/pages';
export default function InitiativesPage() {
  return (
    <PageShell>
      <PageIntro {...pageIntros.initiatives} />
      <InitiativesSection />
    </PageShell>
  );
}
