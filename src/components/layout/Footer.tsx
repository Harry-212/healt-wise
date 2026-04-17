"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ShieldCheck } from "lucide-react";
import { SITE_LOGO_SRC } from "@/lib/site-assets";

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
            <h2 className="text-xl md:text-[22px] font-medium text-slate-900 leading-snug text-pretty">
              Get updates you'll actually want—new treatments, special offers, and more ways to feel good.
            </h2>
            <div className="flex flex-col sm:flex-row w-full max-w-md items-center rounded-full bg-white border border-slate-200 p-1.5 shadow-sm focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500 transition-shadow">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-transparent px-5 py-3 text-[15px] outline-none text-slate-900 placeholder:text-slate-500"
              />
              <button type="button" className="w-full sm:w-auto mt-2 sm:mt-0 h-11 shrink-0 rounded-full bg-slate-900 px-8 text-sm font-medium text-white hover:bg-slate-800 transition-colors">
                Submit
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 md:gap-16">
            <div className="flex flex-col gap-4">
              <span className="text-[15px] font-medium text-slate-900">Follow the feeling</span>
              <div className="flex items-center gap-3">
                <a href="#" className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-200/60 hover:bg-slate-300 transition-colors text-slate-700 hover:text-slate-900">
                  <MediumIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 mb-20">
          <div>
            <h3 className="mb-6 font-semibold text-slate-900 text-[15px]">Treatments</h3>
            <ul className="space-y-4">
              <li><Link href="/mounjaro-price-comparison" className="text-[15px] text-slate-500 hover:text-slate-900 transition-colors">Mounjaro pricing</Link></li>
              <li><Link href="/wegovy-price-comparison" className="text-[15px] text-slate-500 hover:text-slate-900 transition-colors">Wegovy pricing</Link></li>
              <li><Link href="/saxenda-price-comparison" className="text-[15px] text-slate-500 hover:text-slate-900 transition-colors">Saxenda pricing</Link></li>
              <li><Link href="/" className="text-[15px] text-slate-500 hover:text-slate-900 transition-colors">Compare all</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 font-semibold text-slate-900 text-[15px]">Trust & safety</h3>
            <ul className="space-y-4">
              <li><Link href="/pharmacy-safety-gphc-verification" className="text-[15px] text-slate-500 hover:text-slate-900 transition-colors">GPhC verification</Link></li>
              <li><Link href="/methodology" className="text-[15px] text-slate-500 hover:text-slate-900 transition-colors">Our methodology</Link></li>
              <li><Link href="/helpful-guides" className="text-[15px] text-slate-500 hover:text-slate-900 transition-colors">Helpful health guides</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 font-semibold text-slate-900 text-[15px]">Support</h3>
            <ul className="space-y-4">
              <li><Link href="/mounjaro-faq" className="text-[15px] text-slate-500 hover:text-slate-900 transition-colors">Mounjaro FAQs</Link></li>
              <li><Link href="/wegovy-faq" className="text-[15px] text-slate-500 hover:text-slate-900 transition-colors">Wegovy FAQs</Link></li>
              <li><Link href="/contact" className="text-[15px] text-slate-500 hover:text-slate-900 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 font-semibold text-slate-900 text-[15px]">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-[15px] text-slate-500 hover:text-slate-900 transition-colors">About us</Link></li>
              <li><Link href="/editorial-policy" className="text-[15px] text-slate-500 hover:text-slate-900 transition-colors">Editorial policy</Link></li>
              <li><Link href="/privacy-policy" className="text-[15px] text-slate-500 hover:text-slate-900 transition-colors">Privacy policy</Link></li>
              <li><Link href="/terms-of-service" className="text-[15px] text-slate-500 hover:text-slate-900 transition-colors">Terms of service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-semibold text-slate-900 text-[15px]">Commitment</h3>
            <div className="flex flex-col gap-5">
              <div className="text-[14px] text-slate-500 leading-relaxed max-w-[200px]">
                <strong className="text-slate-900 font-medium">Headquarters:</strong><br />
                London, United Kingdom<br />
                <span className="flex items-start gap-2 mt-3 p-3 rounded-lg bg-emerald-50/50 border border-emerald-100/50">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-600 mt-0.5" />
                  <span className="text-xs text-slate-600 font-medium">Independent and unbiased. Not affiliated with manufacturers.</span>
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
                alt="Health Wise Logo" 
                width={200} 
                height={54} 
                className="h-10 w-auto object-contain brightness-0 invert" 
              />
            </Link>
            <div className="hidden md:flex items-center gap-4 text-[13px] font-medium text-slate-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy policy</Link>
              <span className="text-slate-600">|</span>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of use</Link>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto mt-2 md:mt-0">
            <div className="flex md:hidden items-center gap-4 text-[13px] font-medium text-slate-400 mb-2">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy policy</Link>
              <span className="text-slate-600">|</span>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of use</Link>
            </div>
            <div className="text-[13px] font-bold text-slate-500">
              Copyright © Health Wise 2026
            </div>
          </div>
        </div>
        

      </div>
    </footer>
  );
}
