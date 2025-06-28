import TechnologySection from "./TechnologySection";
import { sections } from "@/lib/sections";

function SkillsSectionComponent() {
  return (
    <section className="w-4/5 mx-auto">
      <h2 className="text-3xl font-bold text-primary text-center">مهاراتي</h2>
      <div>
        {sections.map((section) => (
          <TechnologySection
            key={section.title}
            skills={section.Items}
            title={section.title}
          />
        ))}
      </div>
    </section>
  );
}

export default SkillsSectionComponent;
