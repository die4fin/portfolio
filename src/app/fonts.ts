import { Noto_Sans_KR, Noto_Serif_TC, Plus_Jakarta_Sans } from "next/font/google";

// Font utama untuk teks berbasis alfabet (English & Indonesian)
export const sansSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Font mewah untuk karakter Tradisional/Simplified Chinese
export const serifZH = Noto_Serif_TC({
  subsets: ["latin"],
  variable: "--font-serif-zh",
  weight: ["500", "700"],
  display: "swap",
});

// Font sans-serif optimal untuk karakter Korea
export const sansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-sans-kr",
  weight: ["400", "500", "700"],
  display: "swap",
});
