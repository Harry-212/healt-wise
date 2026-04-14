"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TipsZigzagSection } from "@/components/lifestyle/tips/TipsZigzagSection";
import { DietHero } from "./DietHero";
import { DietPrincipleCards } from "./DietPrincipleCards";
import { DietSupportBand } from "./DietSupportBand";
import { DietPromoSection } from "./DietPromoSection";
import { DietRelatedGuides } from "./DietRelatedGuides";
import { DietFaqSection } from "./DietFaqSection";
import { DietInternalLinks } from "./DietInternalLinks";
import { DietStrategicInsight } from "./DietStrategicInsight";
import { DIET_ZIGZAG_IMAGES } from "@/lib/lifestyle/diet-content";

gsap.registerPlugin(ScrollTrigger);

export function DietPageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".diet-hero-animate",
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power2.out", delay: 0.08 }
      );

      gsap.utils.toArray<HTMLElement>(".diet-fade-up").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 44, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="bg-[#fafbfc] text-slate-900">
      <div className="diet-hero-animate">
        <DietHero />
      </div>

      <div className="space-y-24 py-20 sm:space-y-28 sm:py-24 md:space-y-32 md:py-28">
        <div className="diet-fade-up">
          <TipsZigzagSection
            eyebrow="Balanced nutrition"
            title="Build meals that keep you full and energised"
            imageSrc={DIET_ZIGZAG_IMAGES.balanced}
            imageAlt="Healthy plate with protein, vegetables, and whole foods"
            ctaHref="/helpful-guides/mounjaro-nutrition-guide-uk#balanced-meals"
            ctaLabel="Learn how to build balanced meals"
          >
            <p>
              A successful diet isn’t about cutting everything out—it’s about balance. Prioritising
              protein, fibre, and healthy fats helps stabilise blood sugar and keeps hunger under
              control.
            </p>
            <p>
              Instead of focusing on what to avoid, focus on what your body needs to function at its
              best.
            </p>
          </TipsZigzagSection>
        </div>

        <div className="diet-fade-up">
          <TipsZigzagSection
            eyebrow="Calorie control"
            title="Create a deficit without feeling deprived"
            imageSrc={DIET_ZIGZAG_IMAGES.calories}
            imageAlt="Thoughtful meal portion and balanced ingredients"
            imageRight
            ctaHref="/tools/bmi-calculator"
            ctaLabel="Understand calorie balance"
          >
            <p>
              Weight loss happens when you consistently consume fewer calories than you burn. The key
              is doing this in a sustainable way—without extreme dieting.
            </p>
            <p>
              Simple strategies like portion awareness, mindful eating, and reducing ultra-processed
              foods can make a big difference.
            </p>
          </TipsZigzagSection>
        </div>

        <div className="diet-fade-up">
          <TipsZigzagSection
            eyebrow="Consistency over perfection"
            title="The best diet is one you can stick to"
            imageSrc={DIET_ZIGZAG_IMAGES.consistency}
            imageAlt="Relaxed, enjoyable meal — sustainable eating habits"
            ctaHref="/tips"
            ctaLabel="Explore sustainable dieting"
          >
            <p>
              Short-term diets often fail because they’re too restrictive. Long-term success comes from
              habits you can maintain—flexible eating, occasional treats, and realistic expectations.
            </p>
            <p>Progress matters more than perfection.</p>
          </TipsZigzagSection>
        </div>

        <div className="diet-fade-up">
          <DietPrincipleCards />
        </div>

        <div className="diet-fade-up px-4 sm:px-6 lg:px-8">
          <DietSupportBand />
        </div>

        <div className="diet-fade-up">
          <DietPromoSection />
        </div>

        <div className="diet-fade-up">
          <DietRelatedGuides />
        </div>

        <div className="diet-fade-up">
          <DietFaqSection />
        </div>

        <div className="diet-fade-up">
          <DietInternalLinks />
        </div>

        <div className="diet-fade-up px-4 sm:px-6 lg:px-8">
          <DietStrategicInsight />
        </div>
      </div>
    </div>
  );
}
