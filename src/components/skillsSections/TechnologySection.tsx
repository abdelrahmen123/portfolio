import { TechnologyIconType } from "@/lib/types/iconsTypes";

function TechnologySection({
  skills,
  title,
}: {
  skills: TechnologyIconType[];
  title: string;
}) {
  return (
    <section
      data-aos="fade-left"
      id={title}
      className="flex flex-col gap-12 mt-12 w-full px-16"
    >
      <h3 className="text-2xl underline font-bold text-primary text-end">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-18">
        {skills.map(({ Icon, label, color, href, description }, index) => (
          <article
            key={label}
            className="relative flex justify-start flex-row-reverse items-center gap-5"
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`رابط إلى ${label}`}
              className="flex flex-col items-center justify-center group"
            >
              <div
                className="p-3 rounded-full transition-transform group-hover:scale-110 
                 bg-linear-to-br shadow-xl shadow-sky-950 from-blue-500 to-sky-900"
              >
                <Icon
                  size={32}
                  title={label}
                  color={color}
                  className="transition-transform group-hover:scale-110"
                />
              </div>
              <span className="text-xs mt-2 text-white text-center">
                {label}
              </span>

              {/* وصف يظهر عند تمرير الماوس على الأيقونة والنص فقط */}
              <div
                className="absolute top-full right-0 mt-2 text-sm text-white bg-sky-900 p-2 rounded shadow-lg
                 opacity-0 translate-y-2 scale-95 transition-all duration-300 group-hover:opacity-100 
                 group-hover:translate-y-0 group-hover:scale-100 z-20 w-fit max-w-xs text-end"
              >
                {description}
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TechnologySection;
