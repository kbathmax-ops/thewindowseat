import type { Metadata, Viewport } from "next";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Window Seat",
  description:
    "A six-question quiz for creatives, builders and founders. It matches you with three countries, each picked for the lesson travel writers say it teaches.",
};

export const viewport: Viewport = {
  themeColor: "#f2efe7",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
