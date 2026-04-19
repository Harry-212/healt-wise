"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ShieldCheck } from "lucide-react";
import { HOME_COMPARE_HUB_HREF } from "@/lib/routes/home-compare-hub";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import { SITE_LOGO_SRC } from "@/lib/site-assets";

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

const MediumIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.5 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
)

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200/90 bg-linear-to-b from-slate-50/95 via-brand-surface to-slate-100/40 pb-6 pt-16 mt-0">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-200/50 to-transparent"
        aria-hidden
      />
      
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative">
        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute -top-24 right-6 md:right-12 h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-slate-200 hover:bg-slate-50 hover:-translate-y-1 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6 text-slate-800" />
        </button>

        {/* Top Section: Email Subscribe & Socials */}
        <div className="flex flex-col lg:flex-row justify-between mb-16 gap-12 lg:gap-0 border-b border-slate-200/80 pb-16">
          <div className="flex flex-col gap-6 max-w-xl">
            <h2 className="text-2xl font-bold leading-snug text-slate-900 text-pretty md:text-3xl md:leading-tight">
              Get updates you'll actually want: new treatments, special offers, and more ways to feel good.
            </h2>
            <div className="flex flex-col sm:flex-row w-full max-w-md items-center rounded-full bg-white border border-slate-200 p-1.5 shadow-sm focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500 transition-shadow">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-transparent px-5 py-3 text-base font-medium outline-none text-slate-900 placeholder:text-slate-500"
              />
              <button type="button" className="w-full sm:w-auto mt-2 sm:mt-0 h-12 shrink-0 rounded-full bg-slate-900 px-8 text-base font-bold text-white hover:bg-slate-800 transition-colors">
                Submit
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 md:gap-16">
            <div className="flex flex-col gap-4">
              <span className="text-lg font-bold text-slate-900">Follow the feeling</span>
              <div className="flex items-center gap-3">
                <a href="#" className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-200/60 hover:bg-slate-300 transition-colors text-slate-700 hover:text-slate-900">
                  <MediumIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 mb-20">
          <div>
            <h3 className="mb-6 text-lg font-bold tracking-tight text-slate-900">Treatments</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href={HOME_COMPARE_HUB_HREF}
                  className="text-xl font-extrabold text-slate-900 hover:text-emerald-800 transition-colors"
                >
                  Compare treatments
                </Link>
              </li>
              <li>
                <Link
                  href="/helpful-guides"
                  className="text-base font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Helpful guides
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h3 className="mb-6 text-lg font-bold tracking-tight text-slate-900">
              Locations
            </h3>
            <ul className="space-y-4">
              {FOOTER_UK_LOCATION_CITIES.map(({ slug, name }) => (
                <li key={slug}>
                  <Link
                    href={UK_LOCATION_BLOG_HREF(slug)}
                    className="text-base font-semibold text-slate-600 hover:text-slate-900 transition-colors leading-snug"
                  >
                    Best weight loss treatment in {name}
                  </Link>
                </li>
              ))}
              <li className="pt-3 mt-1 border-t border-slate-200/90">
                <Link
                  href="/blog/locations-in-uk"
                  className="text-base font-bold text-slate-900 hover:text-emerald-800 transition-colors"
                >
                  All UK locations
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 text-lg font-bold tracking-tight text-slate-900">Trust & safety</h3>
            <ul className="space-y-4">
              <li><Link href="/pharmacy-safety-gphc-verification" className="text-base font-semibold text-slate-600 hover:text-slate-900 transition-colors">GPhC verification</Link></li>
              <li><Link href="/methodology" className="text-base font-semibold text-slate-600 hover:text-slate-900 transition-colors">{SITE_BRAND_NAME} methodology</Link></li>
              <li><Link href="/helpful-guides" className="text-base font-semibold text-slate-600 hover:text-slate-900 transition-colors">Helpful health guides</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 text-lg font-bold tracking-tight text-slate-900">Support</h3>
            <ul className="space-y-4">
              <li><Link href="/helpful-guides" className="text-base font-semibold text-slate-600 hover:text-slate-900 transition-colors">Weight loss FAQs</Link></li>
              <li><Link href="/contact" className="text-base font-semibold text-slate-600 hover:text-slate-900 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 text-lg font-bold tracking-tight text-slate-900">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-base font-semibold text-slate-600 hover:text-slate-900 transition-colors">About us</Link></li>
              <li><Link href="/editorial-policy" className="text-base font-semibold text-slate-600 hover:text-slate-900 transition-colors">Editorial policy</Link></li>
              <li><Link href="/privacy-policy" className="text-base font-semibold text-slate-600 hover:text-slate-900 transition-colors">Privacy policy</Link></li>
              <li><Link href="/terms-of-service" className="text-base font-semibold text-slate-600 hover:text-slate-900 transition-colors">Terms of service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold tracking-tight text-slate-900">Commitment</h3>
            <div className="flex flex-col gap-5">
              <div className="max-w-[220px] text-base leading-relaxed text-slate-600">
                <strong className="font-bold text-slate-900">Headquarters:</strong>
                <br />
                London, United Kingdom
                <br />
                <span className="mt-3 flex items-start gap-2 rounded-lg border border-emerald-100/50 bg-emerald-50/50 p-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-sm font-semibold leading-snug text-slate-700">
                    Independent and unbiased. Not affiliated with manufacturers.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Dark Pill */}
        <div className="flex flex-col md:flex-row items-center justify-between rounded-full bg-slate-950 px-6 py-4 md:px-10 md:py-6 shadow-xl gap-4 md:gap-0">
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
              <Link href="/privacy-policy" className="transition-colors hover:text-white">Privacy policy</Link>
              <span className="text-slate-600">|</span>
              <Link href="/terms-of-service" className="transition-colors hover:text-white">Terms of use</Link>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto mt-2 md:mt-0">
            <div className="mb-2 flex items-center gap-4 text-sm font-semibold text-slate-400 md:hidden">
              <Link href="/privacy-policy" className="transition-colors hover:text-white">Privacy policy</Link>
              <span className="text-slate-600">|</span>
              <Link href="/terms-of-service" className="transition-colors hover:text-white">Terms of use</Link>
            </div>
            <div className="text-sm font-bold tracking-tight text-slate-400">
              Copyright © {SITE_BRAND_NAME} 2026
            </div>
          </div>
        </div>
        

      </div>
    </footer>
  );
}
