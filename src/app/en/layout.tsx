import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Levi Loseke — Web Integrator & Developer",
  description:
    "Portfolio of Levi Loseke, web integrator and front-end developer based in Laval, Quebec. Web integration, technical SEO, accessibility (WCAG), and Next.js / React development.",
  keywords: [
    "Levi Loseke",
    "Web Integrator",
    "Web Developer",
    "Next.js",
    "React",
    "Technical SEO",
    "WCAG Accessibility",
    "Portfolio",
  ],
  authors: [{ name: "Levi Loseke" }],
  openGraph: {
    title: "Levi Loseke — Web Integrator & Developer",
    description:
      "Portfolio of Levi Loseke, web integrator and front-end developer. Web integration, technical SEO, and accessibility.",
    url: "https://portfoliowev.vercel.app/en",
    siteName: "Levi Loseke — Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Levi Loseke — Web Integrator & Developer",
    description:
      "Portfolio of Levi Loseke, web integrator and front-end developer.",
  },
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}