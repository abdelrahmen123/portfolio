import { El_Messiri, Changa } from "next/font/google";

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
