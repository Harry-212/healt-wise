import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Health Wise | Independent Weight Loss Treatments UK",
  description:
    "Independent UK comparison site for GLP-1 treatment prices, maintenance policies, pharmacy safety, and support options.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          href="/favicon_light.jpeg"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/favincon_20dark.jpeg"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 dark:bg-[#020a05] dark:text-slate-100 transition-colors">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
