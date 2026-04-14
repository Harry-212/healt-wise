"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TipsZigzagSection } from "@/components/lifestyle/tips/TipsZigzagSection";
import { ExerciseHero } from "./ExerciseHero";
import { ExerciseBenefitGrid } from "./ExerciseBenefitGrid";
import { ExerciseSimpleMovesGrid } from "./ExerciseSimpleMovesGrid";
import { ExerciseSystemBand } from "./ExerciseSystemBand";
import { ExercisePromoSection } from "./ExercisePromoSection";
import { ExerciseRelatedGuides } from "./ExerciseRelatedGuides";
import { ExerciseFaqSection } from "./ExerciseFaqSection";
import { ExerciseInternalLinks } from "./ExerciseInternalLinks";
import { ExerciseStrategicInsight } from "./ExerciseStrategicInsight";
import { EXERCISE_ZIGZAG_IMAGES } from "@/lib/lifestyle/exercise-content";

gsap.registerPlugin(ScrollTrigger);

export function ExercisePageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".exercise-hero-animate",
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, ease: "power2.out", delay: 0.08 }
      );

      gsap.utils.toArray<HTMLElement>(".exercise-fade-up").forEach((el) => {
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
      <div className="exercise-hero-animate">
        <ExerciseHero />
      </div>

      <div className="space-y-24 py-20 sm:space-y-28 sm:py-24 md:space-y-32 md:py-28">
        <div className="exercise-fade-up">
          <TipsZigzagSection
            eyebrow="Why it matters"
            title="Exercise is more than just burning calories"
            imageSrc={EXERCISE_ZIGZAG_IMAGES.role}
            imageAlt="Person jogging outdoors at sunrise — cardiovascular training"
            ctaHref="/tips"
            ctaLabel="Explore weight loss strategies"
          >
            <p>
              Exercise plays a critical role in sustainable weight loss. While diet controls calorie
              intake, physical activity increases energy expenditure, supports muscle growth, and
              improves metabolic health.
            </p>
            <p>
              Studies consistently show that combining exercise with proper nutrition leads to better
              long-term weight outcomes compared to dieting alone. But the real value goes beyond the
              scale—exercise enhances how your body functions daily.
            </p>
          </TipsZigzagSection>
        </div>

        <div className="exercise-fade-up">
          <ExerciseBenefitGrid />
        </div>

        <div className="exercise-fade-up">
          <TipsZigzagSection
            eyebrow="Training intensity"
            title="Moderate vs vigorous: what’s the difference?"
            imageSrc={EXERCISE_ZIGZAG_IMAGES.intensity}
            imageAlt="People walking and running — contrasting movement intensity"
            imageRight
            ctaHref="/tools/bmi-calculator"
            ctaLabel="Start your plan"
          >
            <p>
              Not all exercise feels the same—and that&apos;s important. Moderate-intensity activities
              like brisk walking or cycling allow you to talk but not sing. Vigorous exercises like
              running or swimming push your limits, making conversation difficult.
            </p>
            <p className="font-medium text-slate-800">For optimal results, aim for:</p>
            <ul className="list-disc space-y-2 pl-5 text-slate-600 marker:text-emerald-700">
              <li>150 minutes of moderate activity per week, or</li>
              <li>75 minutes of vigorous activity weekly</li>
            </ul>
            <p>Combining both often gives the best outcome for fitness and weight management.</p>
          </TipsZigzagSection>
        </div>

        <div className="exercise-fade-up">
          <TipsZigzagSection
            eyebrow="Training types"
            title="Cardio burns calories. Strength builds results."
            imageSrc={EXERCISE_ZIGZAG_IMAGES.cardioStrength}
            imageAlt="Strength training in a gym — resistance and conditioning"
            ctaHref="/tips"
            ctaLabel="Build your routine"
          >
            <p>
              Cardio exercises like running, cycling, and swimming elevate heart rate and are highly
              effective for calorie burning.
            </p>
            <p>
              Resistance training—using weights or bodyweight—builds muscle, which increases metabolism
              and helps your body burn more calories even at rest.
            </p>
            <p className="font-medium text-slate-800">The most effective strategy? Combine both.</p>
          </TipsZigzagSection>
        </div>

        <div className="exercise-fade-up">
          <ExerciseSimpleMovesGrid />
        </div>

        <div className="exercise-fade-up px-4 sm:px-6 lg:px-8">
          <ExerciseSystemBand />
        </div>

        <div className="exercise-fade-up">
          <ExercisePromoSection />
        </div>

        <div className="exercise-fade-up">
          <ExerciseRelatedGuides />
        </div>

        <div className="exercise-fade-up">
          <ExerciseFaqSection />
        </div>

        <div className="exercise-fade-up">
          <ExerciseInternalLinks />
        </div>

        <div className="exercise-fade-up px-4 sm:px-6 lg:px-8">
          <ExerciseStrategicInsight />
        </div>
      </div>
    </div>
  );
}
