import type { Metadata } from "next";
import { Stethoscope } from "lucide-react";
import HeroNumanStyle from "@/components/ui/HeroNumanStyle";
import AboutSection2 from "@/components/ui/about-section-2";
import TrustBarMarquee from "@/components/trust/TrustBarMarquee";
import OurServices from "@/components/ui/OurServices";
import OurMethodology from "@/components/ui/OurMethodology";
import WhyChooseHealthWise from "@/components/ui/WhyChooseHealthWise";

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
      </div>
    </div>
  );
}
