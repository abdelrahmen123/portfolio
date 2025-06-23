import { TechnologyIconType } from "@/lib/types/iconsTypes";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiTailwindcss,
  SiPrisma,
} from "@icons-pack/react-simple-icons";

const mainIcons: TechnologyIconType[] = [
  {
    Icon: SiJavascript,
    label: "JavaScript",
    color: "#F7DF1E",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    Icon: SiTypescript,
    label: "TypeScript",
    color: "#3178C6",
    href: "https://www.typescriptlang.org/",
  },
  {
    Icon: SiNextdotjs,
    label: "Next.js",
    color: "#000000",
    href: "https://nextjs.org/",
  },
  {
    Icon: SiNestjs,
    label: "NestJS",
    color: "#E0234E",
    href: "https://nestjs.com/",
  },
  {
    Icon: SiTailwindcss,
    label: "Tailwind CSS",
    color: "#06B6D4",
    href: "https://tailwindcss.com/",
  },
  {
    Icon: SiPrisma,
    label: "Prisma",
    color: "#2D3748",
    href: "https://www.prisma.io/",
  },
];

function BestSkills() {
  return (
    <section className="w-3/5 flex flex-col gap-5">
      <h2
        data-aos="fade-down"
        className="text-3xl font-bold text-primary text-center"
      >
        أهم التقنيات التي اتقنها
      </h2>
      <section className="grid grid-cols-3 gap-6 justify-items-center mt-12 w-full">
        {mainIcons.map(({ Icon, label, color, href }, index) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`رابط إلى ${label}`}
            className="flex flex-col items-center group"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="p-3 rounded-full bg-linear-to-br from-sky-500 to-cyan-100">
              <Icon
                size={32}
                title={label}
                color={color}
                className="transition-transform group-hover:scale-110"
              />
            </div>
            <span className="text-xs mt-2 text-white text-center">{label}</span>
          </a>
        ))}
      </section>
      {/* <p className="text-sm w-7/8 text-end mt-6">
        لمعرفة المزيد عن التقنيات التي اتقنها {"  "}
        <Link href="/about" className="underline text-sky-400 text-sm">
          يمكنك الضغط هنا
        </Link>
      </p> */}
    </section>
  );
}

export default BestSkills;
