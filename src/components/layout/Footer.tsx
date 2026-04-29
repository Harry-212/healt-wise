"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUp, ChevronRight, ShieldCheck, Mail } from "lucide-react";
import { HOME_COMPARE_HUB_HREF } from "@/lib/routes/home-compare-hub";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import { SITE_LOGO_SRC } from "@/lib/site-assets";
import { motion } from "framer-motion";

/** Matches `UK_LOCATION_ARTICLE_PREFIX` in `@/lib/blog` — avoid importing `blog` in a client component. */
const UK_LOCATION_BLOG_HREF = (citySlug: string) =>
  `/blog/best-weight-loss-treatment-in-${citySlug}`;

const FOOTER_UK_LOCATION_CITIES = [
  { slug: "london", name: "London" },
  { slug: "birmingham", name: "Birmingham" },
  { slug: "manchester", name: "Manchester" },
  { slug: "glasgow", name: "Glasgow" },
  { slug: "leeds", name: "Leeds" },
] as const;

/** Title case with lowercase “in” (e.g. Best Weight Loss Treatment in London). */
function ukLocationFooterLabel(cityDisplayName: string): string {
  return `Best Weight Loss Treatment in ${cityDisplayName}`;
}

const FOOTER_NAV_LINK =
  "group flex w-full items-center justify-between gap-2 rounded-xl border border-transparent px-3 py-2 -mx-3 text-left text-base font-medium text-slate-400 transition-all duration-300 hover:bg-white/5 hover:text-emerald-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50";

const FOOTER_NAV_LINK_CHEVRON =
  "h-4 w-4 shrink-0 text-emerald-400 opacity-0 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100";

const FOOTER_NAV_LINK_PRIMARY =
  "group flex w-full items-center justify-between gap-2 rounded-xl border border-transparent px-3 py-2 -mx-3 text-left text-lg font-bold text-slate-200 transition-all duration-300 hover:bg-emerald-500/10 hover:text-emerald-300 hover:shadow-lg hover:shadow-emerald-900/20 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50";

const MediumIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.5 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

/**
 * Render the email field only after mount so password-manager / form-filler
 * browser extensions cannot mutate SSR HTML before hydration (which causes
 * React “Hydration failed” when they inject data-* attrs and sibling nodes).
 */
function FooterNewsletterEmailInput() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="min-h-[48px] w-full bg-transparent px-5 py-3 text-base"
        aria-hidden
      />
    );
  }

  return (
    <input
      type="email"
      name="footer-email"
      autoComplete="email"
      placeholder="Enter your email address"
      className="w-full bg-transparent px-5 py-3 text-base outline-none text-slate-200 placeholder:text-slate-500"
    />
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-slate-900 via-slate-900/95 to-slate-950 border-t border-slate-800 pb-8 pt-24 mt-0">
      {/* Background glowing effects */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-emerald-900/20 blur-[120px] rounded-full opacity-50" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-500/30 to-transparent" aria-hidden />
      
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">
        
        {/* Scroll to Top Button */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="absolute -top-32 right-6 md:right-12 h-14 w-14 rounded-full bg-emerald-600 shadow-[0_0_20px_rgba(5,150,105,0.4)] flex items-center justify-center border border-emerald-400/30 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6 text-white group-hover:animate-bounce" />
        </motion.button>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Top Section: Email Subscribe & Socials */}
          <motion.div variants={itemVariants} className="flex flex-col lg:flex-row justify-between mb-20 gap-12 lg:gap-0 border-b border-slate-800/80 pb-16">
            <div className="flex flex-col gap-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold w-fit mb-2">
                <Mail className="w-4 h-4" />
                <span>Stay connected</span>
              </div>
              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl tracking-tight">
                Get updates you'll <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">actually want.</span>
              </h2>
              <p className="text-lg text-slate-400 mt-2 max-w-xl">
                Discover the latest updates, expert guides, and essential articles on weight loss treatments across the UK, delivered straight to your inbox.
              </p>
              
              <div className="mt-6 flex flex-col sm:flex-row w-full max-w-lg items-center rounded-full bg-slate-900/80 border border-slate-700/80 p-1.5 shadow-inner backdrop-blur-md focus-within:border-emerald-500/60 focus-within:ring-1 focus-within:ring-emerald-500/60 transition-all duration-300">
                <FooterNewsletterEmailInput />
                <button type="button" className="w-full sm:w-auto mt-2 sm:mt-0 h-12 shrink-0 rounded-full bg-emerald-600 px-8 text-base font-bold text-white shadow-[0_0_15px_rgba(5,150,105,0.2)] hover:bg-emerald-500 hover:shadow-[0_0_25px_rgba(5,150,105,0.4)] transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
            
            <div className="flex flex-col items-start lg:items-end justify-center gap-6">
              <span className="text-lg font-bold text-white tracking-wide">Follow the feeling</span>
              <div className="flex items-center gap-4">
                <a href="#" className="relative group w-12 h-12 flex items-center justify-center rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-400 hover:text-white transition-all duration-300 overflow-hidden hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(5,150,105,0.2)]">
                  <div className="absolute inset-0 bg-emerald-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <MediumIcon className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Middle Section: Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 mb-20">
            <motion.div variants={itemVariants}>
              <h3 className="mb-6 text-lg font-bold tracking-tight text-white">Treatments</h3>
              <ul className="space-y-2">
                <li>
                  <Link href={HOME_COMPARE_HUB_HREF} className={FOOTER_NAV_LINK_PRIMARY}>
                    <span>Compare Treatments</span>
                    <ChevronRight className={FOOTER_NAV_LINK_CHEVRON} aria-hidden />
                  </Link>
                </li>
                <li>
                  <Link href="/helpful-guides" className={FOOTER_NAV_LINK}>
                    <span>Helpful Guides</span>
                    <ChevronRight className={FOOTER_NAV_LINK_CHEVRON} aria-hidden />
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="col-span-2 md:col-span-1 lg:col-span-1">
              <h3 className="mb-6 text-lg font-bold tracking-tight text-white">
                Locations
              </h3>
              <ul className="space-y-2">
                {FOOTER_UK_LOCATION_CITIES.map(({ slug, name }) => (
                  <li key={slug}>
                    <Link href={UK_LOCATION_BLOG_HREF(slug)} className={FOOTER_NAV_LINK}>
                      <span className="leading-snug">{ukLocationFooterLabel(name)}</span>
                      <ChevronRight className={FOOTER_NAV_LINK_CHEVRON} aria-hidden />
                    </Link>
                  </li>
                ))}
                <li className="pt-3 mt-3 border-t border-slate-800/80">
                  <Link href="/blog?topic=locations" className={FOOTER_NAV_LINK_PRIMARY}>
                    <span>All UK Locations</span>
                    <ChevronRight className={FOOTER_NAV_LINK_CHEVRON} aria-hidden />
                  </Link>
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="mb-6 text-lg font-bold tracking-tight text-white">Trust &amp; Safety</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/pharmacy-safety-gphc-verification" className={FOOTER_NAV_LINK}>
                    <span>GPhC Verification</span>
                    <ChevronRight className={FOOTER_NAV_LINK_CHEVRON} aria-hidden />
                  </Link>
                </li>
                <li>
                  <Link href="/methodology" className={FOOTER_NAV_LINK}>
                    <span>{SITE_BRAND_NAME} Methodology</span>
                    <ChevronRight className={FOOTER_NAV_LINK_CHEVRON} aria-hidden />
                  </Link>
                </li>
                <li>
                  <Link href="/helpful-guides" className={FOOTER_NAV_LINK}>
                    <span>Helpful Health Guides</span>
                    <ChevronRight className={FOOTER_NAV_LINK_CHEVRON} aria-hidden />
                  </Link>
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="mb-6 text-lg font-bold tracking-tight text-white">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/helpful-guides" className={FOOTER_NAV_LINK}>
                    <span>Weight Loss FAQs</span>
                    <ChevronRight className={FOOTER_NAV_LINK_CHEVRON} aria-hidden />
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={FOOTER_NAV_LINK}>
                    <span>Contact</span>
                    <ChevronRight className={FOOTER_NAV_LINK_CHEVRON} aria-hidden />
                  </Link>
                </li>
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="mb-6 text-lg font-bold tracking-tight text-white">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className={FOOTER_NAV_LINK}>
                    <span>About Us</span>
                    <ChevronRight className={FOOTER_NAV_LINK_CHEVRON} aria-hidden />
                  </Link>
                </li>
                <li>
                  <Link href="/editorial-policy" className={FOOTER_NAV_LINK}>
                    <span>Editorial Policy</span>
                    <ChevronRight className={FOOTER_NAV_LINK_CHEVRON} aria-hidden />
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className={FOOTER_NAV_LINK}>
                    <span>Privacy Policy</span>
                    <ChevronRight className={FOOTER_NAV_LINK_CHEVRON} aria-hidden />
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className={FOOTER_NAV_LINK}>
                    <span>Terms of Service</span>
                    <ChevronRight className={FOOTER_NAV_LINK_CHEVRON} aria-hidden />
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="mb-6 text-lg font-bold tracking-tight text-white">Commitment</h3>
              <div className="flex flex-col gap-5">
                <div className="max-w-[220px] text-base leading-relaxed text-slate-400">
                  <strong className="font-bold text-white">Headquarters:</strong>
                  <br />
                  London, United Kingdom
                  <br />
                  <div className="mt-4 flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 backdrop-blur-sm">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <span className="text-sm font-medium leading-snug text-slate-300">
                      Independent and unbiased. Not affiliated with manufacturers.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar: Dark Pill */}
          <div className="flex flex-col md:flex-row items-center justify-between rounded-full bg-slate-950 px-6 py-4 md:px-10 md:py-6 shadow-xl gap-4 md:gap-0 mt-8">
            <div className="flex flex-col md:flex-row items-center gap-6 text-white w-full md:w-auto">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Image 
                  src={SITE_LOGO_SRC} 
                  alt={`${SITE_BRAND_NAME} logo`} 
                  width={200} 
                  height={54} 
                  className="h-10 w-auto object-contain brightness-0 invert" 
                />
              </Link>
              <div className="hidden items-center gap-4 text-sm font-semibold text-slate-400 md:flex">
                <Link
                  href="/privacy-policy"
                  className="rounded-md px-1.5 py-0.5 transition-all duration-200 hover:bg-white/10 hover:text-white hover:underline-offset-4 hover:underline"
                >
                  Privacy Policy
                </Link>
                <span className="text-slate-600">|</span>
                <Link
                  href="/terms-of-service"
                  className="rounded-md px-1.5 py-0.5 transition-all duration-200 hover:bg-white/10 hover:text-white hover:underline-offset-4 hover:underline"
                >
                  Terms of Use
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto mt-2 md:mt-0">
              <div className="mb-2 flex items-center gap-4 text-sm font-semibold text-slate-400 md:hidden">
                <Link
                  href="/privacy-policy"
                  className="rounded-md px-1.5 py-0.5 transition-all duration-200 hover:bg-white/10 hover:text-white hover:underline-offset-4 hover:underline"
                >
                  Privacy Policy
                </Link>
                <span className="text-slate-600">|</span>
                <Link
                  href="/terms-of-service"
                  className="rounded-md px-1.5 py-0.5 transition-all duration-200 hover:bg-white/10 hover:text-white hover:underline-offset-4 hover:underline"
                >
                  Terms of Use
                </Link>
              </div>
              <div className="text-sm font-bold tracking-tight text-slate-400">
                Copyright © {SITE_BRAND_NAME} 2026
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
