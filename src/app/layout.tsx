import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Levi Loseke — Intégrateur Web & Développeur",
  description:
    "Portfolio de Levi Loseke, intégrateur web et développeur front-end basé à Laval, Québec. Intégration web, SEO technique, accessibilité (WCAG) et développement Next.js / React.",
  keywords: [
    "Levi Loseke",
    "Intégrateur web",
    "Développeur web",
    "Next.js",
    "React",
    "SEO technique",
    "Accessibilité WCAG",
    "Portfolio",
  ],
  authors: [{ name: "Levi Loseke" }],
  openGraph: {
    title: "Levi Loseke — Intégrateur Web & Développeur",
    description:
      "Portfolio de Levi Loseke, intégrateur web et développeur front-end. Intégration web, SEO technique et accessibilité.",
    url: "https://portfoliowev.vercel.app",
    siteName: "Levi Loseke — Portfolio",
    locale: "fr_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Levi Loseke — Intégrateur Web & Développeur",
    description:
      "Portfolio de Levi Loseke, intégrateur web et développeur front-end.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}