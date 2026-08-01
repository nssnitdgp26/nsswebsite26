import { ContactSection } from '@/components/nss/contact-section';
import { PageIntro, PageShell } from '@/components/nss/page-shell';
import { pageIntros } from '@/data/pages';
export default function ContactPage() {
  return (
    <PageShell>
      <PageIntro {...pageIntros.contact} />
      <ContactSection />
    </PageShell>
  );
}
