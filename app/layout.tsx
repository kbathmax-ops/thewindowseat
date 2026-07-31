import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

/* Display face for the intro poster, from the Claude Design project. */
const entuista = localFont({
  src: "./fonts/Entuista-Regular.otf",
  variable: "--font-entuista",
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
    <html lang="en" className={entuista.variable}>
      <body>{children}</body>
    </html>
  );
}
