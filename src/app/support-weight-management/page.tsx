import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { siteOrigin } from "@/lib/seo/site-origin";
import heroManageWeight from "../../../public/hero-manage-weight.webp";
import ProductGrid from "./ProductGrid";
import WeightManagementFaq, {
  SUPPORT_WEIGHT_MANAGEMENT_FAQS,
} from "./WeightManagementFaq";

const PATH = "/support-weight-management";
const TITLE = "Support Weight Management | Nutrition";
const DESCRIPTION =
  "Nutritionally complete meals that support sustainable weight management — from high-protein options to lower-calorie diet powder.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteOrigin()}${PATH}`,
    type: "website",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SUPPORT_WEIGHT_MANAGEMENT_FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function SupportWeightManagementPage() {
  return (
    <div className="flex flex-col pb-10">
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[220px] w-full sm:h-[300px] md:h-[360px] lg:h-[420px]">
          <Image
            src={heroManageWeight}
            alt="Complete nutrition to support sustainable weight management"
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-center"
          />
          <span
            className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/55 via-black/25 to-transparent"
            aria-hidden
          />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-10">
              <h1 className="max-w-2xl text-3xl font-black leading-[1.05] tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl lg:text-6xl">
                Manage Weight. Stay In Control.
              </h1>
              <p className="mt-3 max-w-xl text-sm font-medium text-white/90 drop-shadow-sm sm:text-base md:text-lg">
                Complete, balanced nutrition designed to support sustainable
                weight management — without the guesswork.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid />

      <section className="w-full px-4 py-6 sm:px-6 md:px-8 lg:px-10">
        <div className="relative mx-auto flex min-h-[200px] max-w-[1200px] flex-col justify-center overflow-hidden rounded-2xl bg-linear-to-br from-emerald-600 via-emerald-500 to-emerald-700 px-6 py-10 sm:px-10 md:min-h-[220px] md:px-14">
          <span
            className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl"
            aria-hidden
          />
          <span
            className="pointer-events-none absolute -bottom-12 right-24 h-40 w-40 rounded-full bg-emerald-300/20 blur-2xl"
            aria-hidden
          />
          <h2 className="relative max-w-lg text-3xl font-black leading-[1.05] tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl">
            Support Your Weight Management Goals
          </h2>
          <p className="relative mt-3 max-w-md text-sm font-medium text-emerald-50/90 sm:text-base">
            Practical tips and science-backed strategies to help you stay
            consistent on your weight management journey.
          </p>
          <div className="relative mt-6">
            <Link
              href="/tips"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-emerald-700 shadow-md transition hover:bg-emerald-50 active:scale-[0.98] sm:text-base"
            >
              Learn more
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </section>

      <WeightManagementFaq />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
    </div>
  );
}
