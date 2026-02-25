import type { Metadata } from "next";
import { Outfit, Newsreader } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { config } from "@/lib/config";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: {
    default: `${config.siteName} | Allied Health Private Practice Australia`,
    template: `%s | ${config.siteName}`,
  },
  description: config.description,
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: config.siteUrl,
    siteName: config.siteName,
    title: config.siteName,
    description: config.description,
  },
  twitter: {
    card: "summary_large_image",
    title: config.siteName,
    description: config.description,
  },
  alternates: {
    canonical: config.siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body
        className={`${outfit.variable} ${newsreader.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
