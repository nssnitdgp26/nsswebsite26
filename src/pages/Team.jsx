import React from "react";
import { PageIntro } from "@/component/page-shell";
import { TeamSection } from "@/component/team-section";

export default function Team() {
  return (
    <>
      <PageIntro
        eyebrow=""
        title="The People Behind NSS NIT Durgapur"
        description="Meet the faculty and student leaders who guide and coordinate the National Service Scheme at NIT Durgapur."
      />

      <TeamSection />
    </>
  );
}