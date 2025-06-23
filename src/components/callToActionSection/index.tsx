import Link from "next/link";
import React from "react";

function CallToActionSection() {
  return (
    <section data-aos="fade-up" className="mt-10 text-center px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
        هل لديك فكرة مشروع؟
      </h2>
      <p className="text-muted-foreground mt-2 text-sm sm:text-base">
        دعنا نحولها إلى واقع باستخدام أحدث تقنيات الويب.
      </p>
      <Link
        href="/contact"
        className="inline-block mt-6 px-6 py-3 rounded-3xl bg-linear-to-r from-sky-700 to-cyan-600 text-white font-semibold transition hover:opacity-90"
      >
        تواصل معي الآن
      </Link>
    </section>
  );
}

export default CallToActionSection;
