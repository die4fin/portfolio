import type { Metadata } from "next";
import { sansKR, sansSans, serifZH } from "../fonts";
import "@/app/globals.css";
import "@/env.ts";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
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

  if (!routing.locales.includes(locale as SupportedLocales)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${sansSans.variable} ${serifZH.variable} ${sansKR.variable}`}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className="flex min-h-screen flex-col bg-[var(--color-bg-canvas)] antialiased"
      >
        <Navigation />
        {/* Konten Utama Terisolasi secara Elastis */}
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
