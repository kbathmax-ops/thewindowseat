import type { Metadata, Viewport } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
