import { GallerySection } from '@/components/nss/gallery-section';
import { PageIntro, PageShell } from '@/components/nss/page-shell';
import { pageIntros } from '@/data/pages';
export default function GalleryPage() {
  return (
    <PageShell>
      <PageIntro {...pageIntros.gallery} />
      <GallerySection />
    </PageShell>
  );
}
