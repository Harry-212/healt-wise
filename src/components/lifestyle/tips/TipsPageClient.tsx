"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TipsHero } from "./TipsHero";
import { TipsZigzagSection } from "./TipsZigzagSection";
import { TipsPrincipleCards } from "./TipsPrincipleCards";
import { TipsSupportBand } from "./TipsSupportBand";
import { TipsPromoSection } from "./TipsPromoSection";
import { TipsRelatedGuides } from "./TipsRelatedGuides";
import { TipsFinalInsight } from "./TipsFinalInsight";
import { TIPS_ZIGZAG_IMAGES } from "@/lib/lifestyle/tips-content";

gsap.registerPlugin(ScrollTrigger);

export function TipsPageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tips-hero-animate",
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power2.out", delay: 0.08 }
      );

      const blocks = gsap.utils.toArray<HTMLElement>(".tips-fade-up");
      blocks.forEach((el) => {
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
      <div className="tips-hero-animate">
        <TipsHero />
      </div>

      <div className="space-y-24 py-20 sm:space-y-28 sm:py-24 md:space-y-32 md:py-28">
        <div className="tips-fade-up">
          <TipsZigzagSection
            eyebrow="Nutrition basics"
            title="Eat in a way that works with your body"
            imageSrc={TIPS_ZIGZAG_IMAGES.nutrition}
            imageAlt="Colourful balanced meal with vegetables and whole foods"
            ctaHref="/helpful-guides/mounjaro-nutrition-guide-uk"
            ctaLabel="Learn about meal strategies"
          >
            <p>
              Weight loss isn’t about extreme restriction—it’s about consistency. Focus on balanced
              meals with protein, fibre, and healthy fats to stay fuller for longer. This helps
              reduce cravings and keeps your energy stable throughout the day.
            </p>
            <p>Small, sustainable changes often outperform strict diets that are hard to maintain.</p>
          </TipsZigzagSection>
        </div>

        <div className="tips-fade-up">
          <TipsZigzagSection
            eyebrow="Appetite control"
            title="Understand hunger before fighting it"
            imageSrc={TIPS_ZIGZAG_IMAGES.appetite}
            imageAlt="Calm dining setting — mindful approach to eating"
            imageRight
            ctaHref="/what-is-wegovy#how-wegovy-works"
            ctaLabel="See how appetite control works"
          >
            <p>
              Hunger isn’t just about willpower—it’s driven by hormones and habits. Medications like
              GLP-1 treatments work by helping regulate appetite, but lifestyle still plays a key role.
            </p>
            <p>
              Eating slowly, staying hydrated, and choosing nutrient-dense foods can significantly
              reduce overeating.
            </p>
          </TipsZigzagSection>
        </div>

        <div className="tips-fade-up">
          <TipsZigzagSection
            eyebrow="Consistency"
            title="Build habits you can stick to"
            imageSrc={TIPS_ZIGZAG_IMAGES.consistency}
            imageAlt="Outdoor activity — sustainable movement as part of daily life"
            ctaHref="/diet"
            ctaLabel="Explore sustainable habits"
          >
            <p>
              Quick fixes don’t create lasting results. Sustainable weight loss comes from habits you
              can maintain long-term—like regular meals, movement, and sleep routines.
            </p>
            <p>The goal isn’t perfection—it’s consistency over time.</p>
          </TipsZigzagSection>
        </div>

        <div className="tips-fade-up">
          <TipsPrincipleCards />
        </div>

        <div className="tips-fade-up px-4 sm:px-6 lg:px-8">
          <TipsSupportBand />
        </div>

        <div className="tips-fade-up">
          <TipsPromoSection />
        </div>

        <div className="tips-fade-up">
          <TipsRelatedGuides />
        </div>

        <div className="tips-fade-up px-4 sm:px-6 lg:px-8">
          <TipsFinalInsight />
        </div>
      </div>
    </div>
  );
}
