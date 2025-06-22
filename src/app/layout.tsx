import type { Metadata } from "next";
import { El_Messiri, Changa } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

export const changa = Changa({
  subsets: ["arabic"],
  weight: ["600", "700"],
  variable: "--font-changa",
  display: "swap",
});

export const messiri = El_Messiri({
  subsets: ["arabic"],
  weight: ["500", "700"],
  variable: "--font-messiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdelrahman Ahmad",
  description:
    "Abdelrahman Ahmad is a full-stack web developer, i specialize in building user-friendly, performant, secure, and scalable web applications.",
  icons: {
    icon: "/logo.jpg",
  },
  authors: [{ name: "Abdelrahman Ahmad" }],
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
        {children}
      </body>
    </html>
  );
}
