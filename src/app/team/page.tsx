import { TeamSection } from '@/components/nss/team-section';
import { PageIntro, PageShell } from '@/components/nss/page-shell';
import { pageIntros } from '@/data/pages';
export default function TeamPage() {
  return (
    <PageShell>
      <PageIntro {...pageIntros.team} />
      <TeamSection />
    </PageShell>
  );
}
