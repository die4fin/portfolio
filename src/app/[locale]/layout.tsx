import type { Metadata } from "next";
import { sansKR, sansSans, serifZH } from "../fonts";
import "@/app/globals.css";
import "@/env.ts";
import { type SupportedLocales, routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Architectural Portfolio",
  description: "Premium global tech platform.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const locale = useLocale();

  // Konfigurasi aman tanpa 'any' dengan menegaskan string ke tipe SupportedLocales
  if (!routing.locales.includes(locale as SupportedLocales)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${sansSans.variable} ${serifZH.variable} ${sansKR.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
