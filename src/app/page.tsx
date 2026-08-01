import { HeroSection } from "@/components/nss/hero-section";
import { ImpactSection } from "@/components/nss/impact-section";
import { AboutSection } from "@/components/nss/about-section";
import { InitiativesSection } from "@/components/nss/initiatives-section";
import { JoinSection } from "@/components/nss/join-section";
import { PageShell } from "@/components/nss/page-shell";

export default function HomePage() {
  return (
    <PageShell>
        <HeroSection />
        <ImpactSection />
        <AboutSection />
        <InitiativesSection />
        <JoinSection />
    </PageShell>
  );
}
