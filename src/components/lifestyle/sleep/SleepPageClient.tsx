"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TipsZigzagSection } from "@/components/lifestyle/tips/TipsZigzagSection";
import { SleepHero } from "./SleepHero";
import { SleepImpactGrid } from "./SleepImpactGrid";
import { SleepKeyInsight } from "./SleepKeyInsight";
import { SleepTipsGrid } from "./SleepTipsGrid";
import { SleepSystemBand } from "./SleepSystemBand";
import { SleepPromoSection } from "./SleepPromoSection";
import { SleepRelatedGuides } from "./SleepRelatedGuides";
import { SleepFaqSection } from "./SleepFaqSection";
import { SleepInternalLinks } from "./SleepInternalLinks";
import { SleepStrategicInsight } from "./SleepStrategicInsight";
import { SLEEP_ZIGZAG_IMAGES } from "@/lib/lifestyle/sleep-content";

gsap.registerPlugin(ScrollTrigger);

export function SleepPageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sleep-hero-animate",
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power2.out", delay: 0.08 }
      );

      gsap.utils.toArray<HTMLElement>(".sleep-fade-up").forEach((el) => {
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
      <div className="sleep-hero-animate">
        <SleepHero />
      </div>

      <div className="space-y-24 py-20 sm:space-y-28 sm:py-24 md:space-y-32 md:py-28">
        <div className="sleep-fade-up">
          <TipsZigzagSection
            eyebrow="Why it matters"
            title="Sleep and weight loss are closely connected"
            imageSrc={SLEEP_ZIGZAG_IMAGES.connection}
            imageAlt="Low energy at home — tiredness and disrupted rest"
            ctaHref="/tools/bmi-calculator"
            ctaLabel="Understand your body"
          >
            <p>
              Sleep and weight are deeply linked in a cycle that can either support or sabotage your
              progress.
            </p>
            <p>
              Carrying excess weight can disrupt sleep quality, while poor sleep makes it harder to
              lose weight. When you&apos;re tired, your body looks for quick energy—often through food.
              At the same time, low energy reduces your motivation to exercise.
            </p>
            <p>
              This combination makes weight loss more difficult, even if your diet is under control.
            </p>
          </TipsZigzagSection>
        </div>

        <div className="sleep-fade-up">
          <SleepImpactGrid />
        </div>

        <div className="sleep-fade-up">
          <SleepKeyInsight />
        </div>

        <div className="sleep-fade-up">
          <TipsZigzagSection
            eyebrow="Take control"
            title="Better sleep starts with simple changes"
            imageSrc={SLEEP_ZIGZAG_IMAGES.optimise}
            imageAlt="Calm evening light and bedroom — wind-down routine"
            imageRight
            ctaHref="/stress"
            ctaLabel="Reduce stress for better sleep"
          >
            <p>
              Improving your sleep doesn&apos;t require drastic changes. Small adjustments to your daily
              habits can significantly improve sleep quality—and support your weight loss journey.
            </p>
          </TipsZigzagSection>
        </div>

        <div className="sleep-fade-up">
          <SleepTipsGrid />
        </div>

        <div className="sleep-fade-up px-4 sm:px-6 lg:px-8">
          <SleepSystemBand />
        </div>

        <div className="sleep-fade-up">
          <SleepPromoSection />
        </div>

        <div className="sleep-fade-up">
          <SleepRelatedGuides />
        </div>

        <div className="sleep-fade-up">
          <SleepFaqSection />
        </div>

        <div className="sleep-fade-up">
          <SleepInternalLinks />
        </div>

        <div className="sleep-fade-up px-4 sm:px-6 lg:px-8">
          <SleepStrategicInsight />
        </div>
      </div>
    </div>
  );
}
