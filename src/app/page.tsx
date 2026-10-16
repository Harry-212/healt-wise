import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Stethoscope } from "lucide-react";
import { siteOrigin } from "@/lib/seo/site-origin";
import { homePageJsonLdGraph } from "@/lib/seo/home-json-ld";
import HeroNumanStyle from "@/components/ui/HeroNumanStyle";
import PriceSnapshotSection from "@/components/ui/PriceSnapshotSection";
import CompareFaqSection from "@/components/compare/CompareFaqSection";
import { compareFaqPageJsonLd } from "@/lib/routes/compare-faqs";
import { buildHomePageFaqs } from "@/lib/routes/home-faqs";
import { getLivePriceSummary } from "@/lib/data/home-price-summary";
import {
  SITE_SHARE_IMAGE_ALT,
  SITE_SHARE_IMAGE_HEIGHT,
  SITE_SHARE_IMAGE_SRC,
  SITE_SHARE_IMAGE_WIDTH,
} from "@/lib/site-assets";

/** Below-the-fold client sections (framer-motion / heavy UI) load in separate chunks for faster TTI. */
const AboutSection2 = dynamic(() => import("@/components/ui/about-section-2"));
const ChooseYourPathSection = dynamic(
  () => import("@/components/ui/ChooseYourPathSection"),
);
const CostSection = dynamic(() => import("@/components/ui/CostSection"));
const FirstThreeMonthsCostSection = dynamic(
  () => import("@/components/ui/FirstThreeMonthsCostSection"),
);
const MounjaroVsWegovySection = dynamic(
  () => import("@/components/ui/MounjaroVsWegovySection"),
);
const WhyPricesDifferSection = dynamic(
  () => import("@/components/ui/WhyPricesDifferSection"),
);
const OurMethodology = dynamic(() => import("@/components/ui/OurMethodology"));
const HomeSafetySection = dynamic(
  () => import("@/components/ui/HomeSafetySection"),
);
const FreeToolsSection = dynamic(
  () => import("@/components/ui/FreeToolsSection"),
);
const WhyChooseHealthWise = dynamic(
  () => import("@/components/ui/WhyChooseHealthWise"),
);

const HOME_SEO_TITLE =
  "Weight Loss Injections Price Comparison UK | Healthwise360";
const HOME_SEO_DESCRIPTION =
  "Compare weight loss injection prices at 60+ GPhC registered UK pharmacies. See Mounjaro from £119 and Wegovy from £73, at every dose.";
const HOME_OG_TITLE = "Compare Weight Loss Injection Prices in the UK";
const HOME_OG_DESCRIPTION =
  "Mounjaro and Wegovy prices at 60+ GPhC registered UK pharmacies, for every dose. Free, independent and no paid rankings.";

export const metadata: Metadata = {
  title: {
    absolute: HOME_SEO_TITLE,
  },
  description: HOME_SEO_DESCRIPTION,
  alternates: {
    canonical: `${siteOrigin()}/`,
  },
  openGraph: {
    title: HOME_OG_TITLE,
    description: HOME_OG_DESCRIPTION,
    url: `${siteOrigin()}/`,
    images: [
      {
        url: SITE_SHARE_IMAGE_SRC,
        width: SITE_SHARE_IMAGE_WIDTH,
        height: SITE_SHARE_IMAGE_HEIGHT,
        alt: SITE_SHARE_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_OG_TITLE,
    description: HOME_OG_DESCRIPTION,
    images: [SITE_SHARE_IMAGE_SRC],
  },
};

export default function Homepage() {
  const priceSummary = getLivePriceSummary();
  const homeFaqs = buildHomePageFaqs(
    priceSummary.wegovyStarterLow,
    priceSummary.mounjaroStarterLow,
    priceSummary.mounjaroTopHigh,
  );
  const homeLd = homePageJsonLdGraph({
    mounjaroStarterLow: priceSummary.mounjaroStarterLow.replace("£", ""),
    mounjaroTopHigh: priceSummary.mounjaroTopHigh.replace("£", ""),
    wegovyStarterLow: priceSummary.wegovyStarterLow.replace("£", ""),
    wegovyTopHigh: priceSummary.wegovyTopHigh.replace("£", ""),
  });
  const faqLd = compareFaqPageJsonLd(homeFaqs, siteOrigin().replace(/\/$/, "") + "/");

  return (
    <div className="flex flex-col pb-6">
      <script
        type="application/ld+json"
        className="hw-homepage-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeLd) }}
      />
      <script
        type="application/ld+json"
        className="hw-homepage-faq-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <HeroNumanStyle
        wegovyStarterLow={priceSummary.wegovyStarterLow}
        mounjaroStarterLow={priceSummary.mounjaroStarterLow}
      />
      <div className="flex flex-col gap-0 pt-0">
        <PriceSnapshotSection
          rows={priceSummary.snapshotRows}
          lastUpdated={priceSummary.lastUpdated}
        />

        <AboutSection2 />

        <ChooseYourPathSection />

        <CostSection
          wegovyStarterLow={priceSummary.wegovyStarterLow}
          mounjaroStarterLow={priceSummary.mounjaroStarterLow}
          mounjaroTopHigh={priceSummary.mounjaroTopHigh}
          mounjaroStarterHigh={priceSummary.mounjaroStarterHigh}
          mounjaroStarterDiff={priceSummary.mounjaroStarterGap}
        />

        <FirstThreeMonthsCostSection
          data={priceSummary.firstThreeMonths}
          lastUpdated={priceSummary.lastUpdated}
        />

        <MounjaroVsWegovySection
          mounjaroStarterLow={priceSummary.mounjaroStarterLow}
          wegovyStarterLow={priceSummary.wegovyStarterLow}
        />

        <WhyPricesDifferSection />

        {/* Healthwise360 methodology — "How we compare" */}
        <OurMethodology />

        <HomeSafetySection />

        <FreeToolsSection />

        {/* Why choose Healthwise360 */}
        <WhyChooseHealthWise />

        <section
          id="safety-disclaimer"
          className="w-full scroll-mt-24 px-4 md:px-8 lg:px-10"
        >
          <div className="flex flex-col items-center gap-6 rounded-2xl bg-slate-900 p-5 text-center text-white sm:gap-8 sm:p-8 md:flex-row md:p-12 md:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
              <Stethoscope className="h-8 w-8 text-emerald-400" />
            </div>
            <div>
              <h2 className="mb-3 text-2xl font-bold">
                Medical disclaimer
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                The weight loss treatment on this site is discussed only in
                general terms. A registered clinician must assess you before any
                supply. Answer questionnaires honestly, read the patient
                information for your medicine, and speak to your GP or NHS 111
                if you are unsure. This site is informational only and does not
                replace medical advice. Read our{" "}
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className="font-semibold text-emerald-300 underline decoration-emerald-500/60 underline-offset-2 transition hover:text-emerald-200"
                >
                  GPhC verification guide
                </Link>{" "}
                and{" "}
                <Link
                  href="/methodology"
                  className="font-semibold text-emerald-300 underline decoration-emerald-500/60 underline-offset-2 transition hover:text-emerald-200"
                >
                  comparison methodology
                </Link>
                . For company facts, see our{" "}
                <Link
                  href="/about/ssot"
                  className="font-semibold text-emerald-300 underline decoration-emerald-500/60 underline-offset-2 transition hover:text-emerald-200"
                >
                  reference information page
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <CompareFaqSection
          items={homeFaqs}
          subtitle="Quick answers about Healthwise360 and how our comparisons work. This is not medical advice; always follow your prescriber and official patient information."
        />
      </div>
    </div>
  );
}
