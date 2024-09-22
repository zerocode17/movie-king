import type { Metadata, Viewport } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Movie King",
  description: "Find your favorite movies and TV shows",
};

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  height: "device-height",
  width: "device-width",
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulish.className} bg-black text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
