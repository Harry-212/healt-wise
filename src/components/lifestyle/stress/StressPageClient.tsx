"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TipsZigzagSection } from "@/components/lifestyle/tips/TipsZigzagSection";
import { StressHero } from "./StressHero";
import { StressImpactGrid } from "./StressImpactGrid";
import { StressAcuteChronicCompare } from "./StressAcuteChronicCompare";
import { StressStrategiesGrid } from "./StressStrategiesGrid";
import { StressSystemBand } from "./StressSystemBand";
import { StressPromoSection } from "./StressPromoSection";
import { StressRelatedGuides } from "./StressRelatedGuides";
import { StressFaqSection } from "./StressFaqSection";
import { StressInternalLinks } from "./StressInternalLinks";
import { StressStrategicInsight } from "./StressStrategicInsight";
import { STRESS_ZIGZAG_IMAGES } from "@/lib/lifestyle/stress-content";

gsap.registerPlugin(ScrollTrigger);

export function StressPageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stress-hero-animate",
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power2.out", delay: 0.08 }
      );

      gsap.utils.toArray<HTMLElement>(".stress-fade-up").forEach((el) => {
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
      <div className="stress-hero-animate">
        <StressHero />
      </div>

      <div className="space-y-24 py-20 sm:space-y-28 sm:py-24 md:space-y-32 md:py-28">
        <div className="stress-fade-up">
          <TipsZigzagSection
            eyebrow="What's the link?"
            title="Stress doesn't just affect your mind — it affects your body"
            imageSrc={STRESS_ZIGZAG_IMAGES.connection}
            imageAlt="Person working under pressure — stress and daily demands"
            ctaHref="/tools/weight-loss-tracker"
            ctaLabel="Understand your habits"
          >
            <p>
              Stress plays a powerful role in weight regulation. When your body experiences ongoing
              stress, it releases cortisol—a hormone that can increase appetite and drive cravings for
              high-calorie, high-fat foods.
            </p>
            <p>
              Over time, this can lead to overeating and fat storage, particularly around the abdomen.
              While short-term stress may temporarily reduce appetite, chronic stress tends to have the
              opposite effect—making weight gain more likely.
            </p>
          </TipsZigzagSection>
        </div>

        <div className="stress-fade-up">
          <StressImpactGrid />
        </div>

        <div className="stress-fade-up">
          <StressAcuteChronicCompare />
        </div>

        <div className="stress-fade-up">
          <TipsZigzagSection
            eyebrow="Take control"
            title="Simple ways to reduce stress and support weight loss"
            imageSrc={STRESS_ZIGZAG_IMAGES.calm}
            imageAlt="Calm stretching or mindful movement — recovery and balance"
            imageRight
            ctaHref="/exercise"
            ctaLabel="Explore movement for stress relief"
          >
            <p>
              Managing stress isn&apos;t about eliminating it—it&apos;s about building resilience. By
              combining physical, mental, and lifestyle strategies, you can reduce its impact on your
              body and improve your weight loss outcomes.
            </p>
          </TipsZigzagSection>
        </div>

        <div className="stress-fade-up">
          <StressStrategiesGrid />
        </div>

        <div className="stress-fade-up px-4 sm:px-6 lg:px-8">
          <StressSystemBand />
        </div>

        <div className="stress-fade-up">
          <StressPromoSection />
        </div>

        <div className="stress-fade-up">
          <StressRelatedGuides />
        </div>

        <div className="stress-fade-up">
          <StressFaqSection />
        </div>

        <div className="stress-fade-up">
          <StressInternalLinks />
        </div>

        <div className="stress-fade-up px-4 sm:px-6 lg:px-8">
          <StressStrategicInsight />
        </div>
      </div>
    </div>
  );
}
