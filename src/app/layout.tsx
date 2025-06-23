import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AOSInit } from "./aos-init";
import { messiri } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "عبد الرحمن أحمد | مطور ويب فول ستاك",
  description:
    "عبد الرحمن أحمد مطور ويب فول ستاك متخصص في JavaScript و TypeScript. أبني تطبيقات ويب عصرية باستخدام Next.js و NestJS مع التركيز على الأداء، الأمان، وقابلية التوسع.",
  keywords: [
    "عبد الرحمن أحمد",
    "مطور ويب",
    "فول ستاك",
    "Next.js",
    "NestJS",
    "TypeScript",
    "JavaScript",
    "برمجة",
    "مواقع",
    "تطوير مواقع",
  ],
  authors: [{ name: "Abdelrahman Ahmad", url: "https://yourdomain.com" }],
  creator: "Abdelrahman Ahmad",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "عبد الرحمن أحمد | مطور ويب فول ستاك",
    description:
      "أبني تطبيقات ويب عالية الجودة باستخدام أحدث تقنيات JavaScript مثل Next.js و NestJS.",
    url: "https://yourdomain.com",
    siteName: "عبد الرحمن أحمد",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/logo.jpg", // تأكد أن الصورة موجودة في public
        width: 1200,
        height: 630,
        alt: "Abdelrahman Ahmad Portfolio",
      },
    ],
  },
  icons: {
    icon: "/logo.jpg", // favicon
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${messiri.variable} font-messiri bg-background text-foreground dark`}
      >
        <Navbar />
        <AOSInit />
        {children}
        <Footer />
      </body>
    </html>
  );
}
