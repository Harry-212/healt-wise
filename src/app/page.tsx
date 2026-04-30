import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Stethoscope } from "lucide-react";
import { siteOrigin } from "@/lib/seo/site-origin";
import { homePageJsonLdGraph } from "@/lib/seo/home-json-ld";
import HeroNumanStyle from "@/components/ui/HeroNumanStyle";
import TrustBarMarquee from "@/components/trust/TrustBarMarquee";

/** Below-the-fold client sections (framer-motion / heavy UI) load in separate chunks for faster TTI. */
const AboutSection2 = dynamic(() => import("@/components/ui/about-section-2"));
const OurServices = dynamic(() => import("@/components/ui/OurServices"));
const OurMethodology = dynamic(() => import("@/components/ui/OurMethodology"));
const WhyChooseHealthWise = dynamic(() => import("@/components/ui/WhyChooseHealthWise"));

export const metadata: Metadata = {
  description:
    "Independent UK comparison for weight loss treatment prices, safety, and support. Compare providers, monthly costs, and verified pharmacy options. Updated 2026.",
  alternates: {
    canonical: `${siteOrigin()}/`,
  },
};

export default function Homepage() {
  const homeLd = homePageJsonLdGraph();

  return (
    <div className="flex flex-col pb-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeLd) }}
      />
      <HeroNumanStyle />
      <div className="flex flex-col gap-0 pt-0">
        <AboutSection2 />

        {/* Trust bar: full bleed scrolling marquee */}
        <section id="trust-bar" className="w-full scroll-mt-4">
          <TrustBarMarquee />
        </section>

        {/* Our Services */}
        <section id="our-services" className="w-full scroll-mt-4">
          <OurServices />
        </section>

        {/* Healthwise360 methodology */}
        <section id="healthwise360" className="w-full scroll-mt-4">
          <OurMethodology />
        </section>

        {/* Why choose Healthwise360 */}
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
              <h2 className="mb-3 text-2xl font-bold">Safety and prescribing</h2>
              <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                The weight loss treatment on this site is discussed only in
                general terms. Prescription only medicines (POM) are not
                suitable for everyone. A registered clinician must assess you
                before any supply. Answer questionnaires honestly, read the
                patient information for your medicine, and speak to your GP or
                NHS 111 if you are unsure. This site is informational only and
                does not replace medical advice.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
