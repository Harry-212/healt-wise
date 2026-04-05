import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Health Wise | Weight Loss Treatment Price Comparison UK (2026)",
    template: "%s | Health Wise",
  },
  description:
    "Independent UK comparison for GLP-1 prices, safety, and support. Compare providers and monthly costs. Updated 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full max-w-full overflow-x-clip antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon_light.jpeg" />
      </head>
      <body className="flex min-h-full max-w-full flex-col overflow-x-clip bg-background font-sans text-foreground antialiased">
        <NavBar />
        <AnnouncementBar />
        <main className="min-w-0 flex-1 overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
