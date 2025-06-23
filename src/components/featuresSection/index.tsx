import { ShieldCheck, Zap, Expand, Code } from "lucide-react";

const features = [
  { Icon: Expand, label: "قابلية التوسع" },
  { Icon: Code, label: "كود نظيف" },
  { Icon: ShieldCheck, label: "أمان عالي" },
  { Icon: Zap, label: "سرعة في الأداء" },
];

function FeaturesSection() {
  return (
    <section className="w-4/5 mx-auto mt-16">
      <h2
        data-aos="fade-up"
        className="text-3xl font-bold text-primary text-center mb-12"
      >
        ما يميز عملي
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
        {features.map(({ Icon, label }, i) => (
          <div
            key={label}
            data-aos="zoom-in"
            data-aos-delay={i * 100}
            className="flex flex-col items-center"
          >
            <Icon size={36} className="text-primary" />
            <span className="mt-2 text-sm text-muted-foreground text-center">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
