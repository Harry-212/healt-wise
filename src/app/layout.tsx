import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Footer from "@/components/layout/Footer";
import SiteEndSection from "@/components/layout/SiteEndSection";
import { SupabaseAuthProvider } from "@/components/providers/SupabaseAuthProvider";
import { siteOrigin } from "@/lib/seo/site-origin";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import { SITE_FAVICON_SRC, SITE_LOGO_SRC } from "@/lib/site-assets";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: {
    default: `${SITE_BRAND_NAME} | Weight loss treatment comparison UK 2026`,
    template: `%s | ${SITE_BRAND_NAME}`,
  },
  description:
    "Independent UK comparison for weight loss treatment prices, safety, and support. Compare providers and monthly costs. Updated 2026.",
  openGraph: {
    type: "website",
    siteName: SITE_BRAND_NAME,
    locale: "en_GB",
    images: [{ url: SITE_LOGO_SRC, alt: SITE_BRAND_NAME }],
  },
  icons: {
    icon: [{ url: SITE_FAVICON_SRC, type: "image/webp" }],
    apple: [{ url: SITE_FAVICON_SRC, type: "image/webp" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full max-w-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="flex min-h-full max-w-full flex-col bg-background font-sans text-foreground antialiased"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <SupabaseAuthProvider>
          <NavBar />
          <AnnouncementBar />
          <main className="min-w-0 flex-1 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            {children}
            <SiteEndSection />
          </main>
          <Footer />
        </SupabaseAuthProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
