import BestProjects from "@/components/bestProjects";
import BestSkills from "@/components/bestSkills";
import CallToActionSection from "@/components/callToActionSection";
import FeaturesSection from "@/components/featuresSection";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-40 justify-baseline">
      <Hero />
      <BestSkills />
      <BestProjects />
      <FeaturesSection />
      <CallToActionSection />
    </main>
  );
}
