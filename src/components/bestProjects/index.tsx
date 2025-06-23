import Image from "next/image";

function BestProjects() {
  return (
    <section className="w-3/5 flex flex-col gap-12">
      <h2
        data-aos="fade-up"
        className="text-3xl font-bold text-primary text-center"
      >
        صور من أهم المشاريع
      </h2>
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="rounded-3xl ">
          <Image
            className="w-full object-cover rounded-3xl border-2 border-sky-100 h-full"
            src={"/images/myshop.webp"}
            width={100}
            height={100}
            unoptimized
            alt="myshop"
          />
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" className="rounded-3xl ">
          <Image
            className="w-full object-cover rounded-3xl border-2 border-sky-100 h-full"
            src={"/images/chat.webp"}
            width={100}
            height={100}
            unoptimized
            alt="chat"
          />
        </div>
      </div>
    </section>
  );
}

export default BestProjects;
// shadow-2xl shadow-sky-700
// shadow-2xl shadow-sky-700
