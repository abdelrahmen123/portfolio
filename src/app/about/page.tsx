import AboutMeIntro from "@/components/about/AboutMeIntro";
import PhilosophySection from "@/components/about/PhilosophySection";
import CallToActionSection from "@/components/callToActionSection";
import SkillsSectionComponent from "@/components/skillsSections";
import React from "react";

function AboutPage() {
  return (
    <main className="flex flex-col items-center gap-20">
      <AboutMeIntro />
      <SkillsSectionComponent />
      <PhilosophySection />
      <CallToActionSection />
    </main>
  );
}

export default AboutPage;
