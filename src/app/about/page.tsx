import { AboutSection } from '@/components/nss/about-section';
import { PageIntro, PageShell } from '@/components/nss/page-shell';
import { pageIntros } from '@/data/pages';
export default function AboutPage() {
  return (
    <PageShell>
      <PageIntro {...pageIntros.about} />
      <AboutSection />
    </PageShell>
  );
}
