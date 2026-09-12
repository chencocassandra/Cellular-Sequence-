import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Longevity Protocol — Peptide Encyclopaedia & Advanced Skin",
    template: "%s · Longevity Protocol",
  },
  description:
    "Searchable peptide encyclopaedia covering approved medicines, cosmetic peptides, investigational compounds and research-only entries — plus a consumer protocol shop for advanced skin.",
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-AU"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
