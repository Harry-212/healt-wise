import type { Metadata } from "next";
import Image from "next/image";

import { siteOrigin } from "@/lib/seo/site-origin";
import heroEatHealthy from "../../../public/hero-eat-healther.jpg";
import ProductGrid from "./ProductGrid";

const PATH = "/eat-healthier";
const TITLE = "Eat Healthier | Complete Nutrition for Better Everyday Meals";
const DESCRIPTION =
  "Nutritious, balanced meals that fit real life — from complete high-protein powder to lighter instant ramen. Eat better without the guesswork.";

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

export default function EatHealthierPage() {
  return (
    <div className="flex flex-col pb-10">
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[220px] w-full sm:h-[300px] md:h-[360px] lg:h-[420px]">
          <Image
            src={heroEatHealthy}
            alt="Complete nutrition to help you eat healthier every day"
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
                Eat Better. Feel Better.
              </h1>
              <p className="mt-3 max-w-xl text-sm font-medium text-white/90 drop-shadow-sm sm:text-base md:text-lg">
                Complete, balanced nutrition — from high-protein meals to lighter
                options — so healthy eating fits your routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid />
    </div>
  );
}
