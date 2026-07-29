import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const editorial = localFont({
  src: "./fonts/EditorialNew-Medium.woff2",
  weight: "500",
  variable: "--font-editorial",
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
    <html lang="en" className={editorial.variable}>
      <body>{children}</body>
    </html>
  );
}
