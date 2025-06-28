import {
  Code,
  Gauge,
  TestTube,
  GitBranch,
  Paintbrush,
  BookOpenCheck,
} from "lucide-react";

function PhilosophySection() {
  const points = [
    {
      icon: <Code className="text-primary" size={24} />,
      text: "أؤمن أن الكود الجيد يُقرأ بسهولة، وليس فقط يعمل.",
    },
    {
      icon: <TestTube className="text-primary" size={24} />,
      text: "أختبر الكود الذي أكتبه لأضمن جودته واستقراره.",
    },
    {
      icon: <Gauge className="text-primary" size={24} />,
      text: "أفضل البساطة والأداء العالي على التعقيد غير الضروري.",
    },
    {
      icon: <GitBranch className="text-primary" size={24} />,
      text: "أستخدم Git في كل مشاريعي لتنظيم العمل والتعاون.",
    },
    {
      icon: <Paintbrush className="text-primary" size={24} />,
      text: "أهتم بتجربة المستخدم والتصميم البسيط والواضح.",
    },
    {
      icon: <BookOpenCheck className="text-primary" size={24} />,
      text: "أتعلم باستمرار وأجرب أدوات وتقنيات جديدة عند الحاجة.",
    },
  ];

  return (
    <section className="w-4/5 mx-auto mt-16">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">
        فلسفتي في العمل
      </h2>
      <ul className="space-y-6 text-end text-white text-lg leading-relaxed px-20">
        {points.map(({ icon, text }, index) => (
          <li
            key={index}
            className="flex flex-row-reverse items-center gap-4"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {icon}
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PhilosophySection;
