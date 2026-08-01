import { JoinSection } from '@/components/nss/join-section';
import { PageIntro, PageShell } from '@/components/nss/page-shell';
import { pageIntros } from '@/data/pages';
export default function JoinPage() {
  return (
    <PageShell>
      <PageIntro {...pageIntros.join} />
      <JoinSection />
    </PageShell>
  );
}
