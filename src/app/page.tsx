import type { Metadata } from "next";
import Link from "next/link";
import { Stethoscope } from "lucide-react";
import HeroNumanStyle from "@/components/ui/HeroNumanStyle";
import AboutSection2 from "@/components/ui/about-section-2";
import TrustBarMarquee from "@/components/trust/TrustBarMarquee";
import OurServices from "@/components/ui/OurServices";
import OurMethodology from "@/components/ui/OurMethodology";
import WhyChooseHealthWise from "@/components/ui/WhyChooseHealthWise";

const jumpLinkClass =
  "group relative overflow-hidden rounded-full border border-slate-200/90 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-px hover:border-emerald-300/70 hover:text-emerald-900 hover:shadow-md";

export const metadata: Metadata = {
  title: "Health Wise | Weight Loss Treatment Price Comparison UK (2026)",
  description:
    "Independent UK comparison for GLP-1 prices, safety, and support. Compare providers, monthly costs, and verified pharmacy options. Updated 2026.",
};

export default function Homepage() {
  return (
    <div className="flex flex-col pb-12">
      <HeroNumanStyle />
      <div className="flex flex-col gap-4 pt-6 md:gap-6 md:pt-8">
        <AboutSection2 />

        {/* Trust bar — Full-bleed scrolling marquee */}
        <section id="trust-bar" className="w-full scroll-mt-4">
          <TrustBarMarquee />
        </section>

        {/* Our Services */}
        <section id="our-services" className="w-full scroll-mt-4">
          <OurServices />
        </section>

        {/* Our Methodology */}
        <section id="our-methodology" className="w-full scroll-mt-4">
          <OurMethodology />
        </section>

        {/* Why Choose Health Wise */}
        <WhyChooseHealthWise />

        <section
          id="safety"
          className="w-full scroll-mt-24 px-4 md:px-8 lg:px-10"
        >
          <div className="flex flex-col items-center gap-6 rounded-2xl bg-slate-900 p-5 text-center text-white sm:gap-8 sm:p-8 md:flex-row md:p-12 md:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
              <Stethoscope className="h-8 w-8 text-emerald-400" />
            </div>
            <div>
              <h2 className="mb-3 text-2xl font-bold">Safety & prescribing</h2>
              <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                GLP-1 medicines are prescription-only (POM). They are not
                suitable for everyone. A registered clinician must assess you
                before any supply. Answer questionnaires honestly, read the
                patient information for your medicine, and speak to your GP or
                NHS 111 if you are unsure. This site is informational only and
                does not replace medical advice.
              </p>
            </div>
          </div>
        </section>

        <section
          id="alerts"
          className="w-full scroll-mt-24 px-4 text-center md:px-8 lg:px-10"
        >
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/80 p-5 sm:p-8 md:p-12">
            <h2 className="mb-3 text-2xl font-bold text-emerald-950">
              Price &amp; policy alerts
            </h2>
            <p className="mb-4 font-medium text-emerald-900/90">
              Get email updates when it matters:
            </p>
            <ul className="mx-auto mb-8 w-full max-w-full list-inside list-disc text-left text-sm text-emerald-900/85 sm:max-w-xl md:max-w-2xl">
              <li>Price drop alerts when starting or maintenance rates move</li>
              <li>Stock alerts when a listed pharmacy changes availability</li>
              <li>
                Maintenance policy alerts when providers change long-term
                prescribing rules
              </li>
            </ul>
            <form className="mx-auto flex w-full max-w-full flex-col gap-3 sm:max-w-lg sm:flex-row">
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Your email"
                className="flex-1 rounded-xl border border-emerald-200 bg-white px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-700"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-xs text-emerald-800/70">
              No pharmacy spam—unsubscribe any time. (Form wiring can connect to
              your ESP later.)
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
