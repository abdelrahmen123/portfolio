function AboutMeIntro() {
  return (
    <section className="w-4/5 max-w-3xl mx-auto mt-16 text-center space-y-6">
      {/* العنوان مع أنيميشن خاص به */}
      <h1
        className="text-4xl font-bold text-primary"
        data-aos="fade-down"
        data-aos-duration="700"
      >
        من أنا؟
      </h1>

      {/* الفقرات مع أنيميشن آخر */}
      <div className="space-y-4" data-aos="fade-up" data-aos-duration="800">
        <p className="text-primary leading-relaxed text-sm sm:text-base">
          مرحبًا، أنا{" "}
          <span className="font-semibold text-xl text-foreground">
            عبد الرحمن أحمد{" "}
          </span>
          مطور تطبيقات فول ستاك للويب. شغفي بالبرمجة بدأ من الرغبة في بناء أشياء
          واقعية تحل مشاكل حقيقية. لم أكتفِ بتعلّم الأساسيات، بل انطلقت أستكشف
          كل ما يتعلّق بتطوير الويب، بدءًا من تصميم الواجهات وحتى بناء خوادم
          قوية وآمنة.
        </p>
        <p className="text-primary leading-relaxed text-sm sm:text-base">
          أؤمن بأن الكود الجيّد لا يجب فقط أن يعمل — بل يجب أن يكون أنيقًا،
          واضحًا، وسهل الفهم والصيانة. لذلك أُركّز كثيرًا على كتابة كود نظيف،
          قابل للتوسعة، وأحب بناء الأنظمة القابلة للنمو على المدى الطويل.
        </p>
        <p className="text-primary leading-relaxed text-sm sm:text-base">
          أعمل يوميًا على تحسين نفسي، سواء بتجربة تقنيات جديدة، أو بقراءة الكود
          مفتوح المصدر، أو ببناء مشاريع شخصية تُخرج أفضل ما عندي. لا أتعامل مع
          البرمجة كوظيفة فقط، بل كأسلوب تفكير وأداة لصنع شيء ذي قيمة.
        </p>
        <p className="text-primary leading-relaxed text-sm sm:text-base">
          وأنا أؤمن أن تطبيقًا يخدم قرية اليوم، قد يخدم قارة غدًا. لذلك أتعامل
          مع كل فكرة على أنها فرصة لبناء شيء له أثر حقيقي.
        </p>
      </div>
    </section>
  );
}

export default AboutMeIntro;
