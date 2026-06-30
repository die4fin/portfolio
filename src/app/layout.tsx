import type { Metadata } from "next";
import { sansKR, sansSans, serifZH } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Architectural Portfolio",
  description: "Premium global tech platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansSans.variable} ${serifZH.variable} ${sansKR.variable}`}>
      <body>{children}</body>
    </html>
  );
}
