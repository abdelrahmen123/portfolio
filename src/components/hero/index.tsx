import Image from "next/image";

function Hero() {
  return (
    <section className="flex flex-col h-[90vh] p-10 items-center justify-center text-white">
      <h1
        data-aos="slide-down"
        className="text-5xl text-center mt-10 py-10 text-shadow-white font-extrabold bg-clip-text text-primary"
      >
        عبد الرحمن أحمد
      </h1>

      <h3
        data-aos="fade-up"
        dir="rtl"
        className="text-sm text-center md:text-xl leading-relaxed  bg-clip-text text-primary font-medium max-w-2xl mx-auto"
      >
        أنا مطور فول ستاك ويب متخصص في لغة
        <span
          dir="ltr"
          className="inline-block font-semibold  mx-1 text-foreground "
        >
          JavaScript
        </span>
        أبني تطبيقات ويب متكاملة وعالية الأداء باستخدام
        <span
          dir="ltr"
          className="inline-block font-semibold text-foreground mx-1"
        >
          Next.js
        </span>
        و
        <span
          dir="ltr"
          className="inline-block font-semibold text-foreground mx-1"
        >
          NestJS
        </span>
        ، مع تركيز على كتابة كود نظيف، قابل للتوسع، وسهل الصيانة.
      </h3>

      <div
        data-aos="zoom-in"
        className="bg-background/2 w-full h-full flex items-center justify-center"
      >
        <Image
          src={"/svg/website-amico.svg"}
          width={200}
          height={200}
          alt="svg-hero"
          className="w-full h-full object-contain "
        />
      </div>
    </section>
  );
}

export default Hero;
