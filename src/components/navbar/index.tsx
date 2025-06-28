import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <header className="sticky mb-12 bg-linear-to-r from-sky-700 to-cyan-600 top-0 z-50 backdrop-blur-md  border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg text-secondary font-bold">
          <div className="flex items-center justify-center rounded-full">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={30}
              height={30}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </h1>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:underline hover:text-secondary">
            الرئيسية
          </Link>
          <a href="#projects" className="hover:underline hover:text-secondary">
            المشاريع
          </a>
          <Link href="/about" className="hover:underline hover:text-secondary ">
            من أنا
          </Link>

          <a href="#contact" className="hover:underline hover:text-secondary">
            تواصل معي
          </a>
        </nav>
        <div className="flex items-center gap-2"></div>
      </div>
    </header>
  );
}

export default Navbar;
