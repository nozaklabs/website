import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Nav from "./components/Nav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NoZak Labs — Operational systems, engineered.",
  description:
    "Cairo-based automation, AI integration, Pega case lifecycle, and systems engineering. Solo build. Shipped in weeks.",
  metadataBase: new URL("https://nozaklabs.com"),
  openGraph: {
    title: "NoZak Labs — Operational systems, engineered.",
    description:
      "Cairo-based automation, AI integration, Pega case lifecycle, and systems engineering.",
    url: "https://nozaklabs.com",
    siteName: "NoZak Labs",
    type: "website",
    // TODO: add og:image — create /public/og.png (1200×630) and uncomment:
    // images: [{ url: "/og.png", width: 1200, height: 630, alt: "NoZak Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NoZak Labs — Operational systems, engineered.",
    description:
      "Cairo-based automation, AI integration, Pega case lifecycle, and systems engineering.",
    // TODO: add twitter:image — create /public/og.png and uncomment:
    // images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable}`}
      >
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}