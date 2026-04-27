"use client";

import Link from "next/link";
import { useRef } from "react";
import { Zap } from "lucide-react";
import { HOME_COMPARE_HUB_HREF } from "@/lib/routes/home-compare-hub";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import { homepageYellowCtaSolid } from "@/lib/ui/homepage-yellow-cta";
import {
  TimelineContent,
  TimelineSection,
} from "@/components/ui/timeline-animation";

const cubic: [number, number, number, number] = [0.22, 1, 0.36, 1];

const revealVariants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 1.5,
      duration: 0.7,
      ease: cubic,
    },
  }),
  hidden: {
    filter: "blur(10px)",
    y: 40,
    opacity: 0,
  },
};

const textVariants = {
  visible: (i: number) => ({
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.7,
      ease: cubic,
    },
  }),
  hidden: {
    filter: "blur(10px)",
    opacity: 0,
  },
};

/** Success / emphasis — brand green */
const hlGreen = "font-bold text-emerald-700";

/** Secondary emphasis — primary text */
const hlAccent = "font-bold text-brand-primary";

const ctaClass = `${homepageYellowCtaSolid} min-h-[56px] cursor-pointer px-10 py-3.5 text-base ring-2 ring-amber-300/40 hover:ring-amber-400/60 sm:min-h-[60px] sm:px-12 sm:text-lg`;

export default function AboutSection2() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      className="w-full scroll-mt-24 border-b border-slate-200/80 bg-gradient-to-b from-slate-100/95 via-brand-surface to-emerald-50/40 py-10 md:py-14"
      aria-labelledby="about-heading"
    >
      <TimelineSection className="w-full px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div
          ref={heroRef}
          className="mx-auto flex w-full max-w-4xl flex-col items-start gap-8 lg:flex-row"
        >
          <div className="w-full min-w-0 flex-1">
            <TimelineContent
              as="h2"
              animationNum={0}
              timelineRef={heroRef}
              customVariants={revealVariants}
              id="about-heading"
              className="mb-6 text-lg leading-snug font-semibold text-brand-primary sm:text-xl md:text-2xl"
            >
              {SITE_BRAND_NAME} is an{" "}
              <TimelineContent
                as="span"
                animationNum={1}
                timelineRef={heroRef}
                customVariants={textVariants}
                className={hlGreen}
              >
                independent UK comparison
              </TimelineContent>{" "}
              site that helps you review pricing and delivery for
              prescription only{" "}
              <TimelineContent
                as="span"
                animationNum={2}
                timelineRef={heroRef}
                customVariants={textVariants}
                className={hlAccent}
              >
                weight loss treatments
              </TimelineContent>{" "}
              from GPhC registered online pharmacies, so you see the full cost
              picture before you start a consultation.
            </TimelineContent>

            <div className="mt-10 flex flex-col gap-6 sm:mt-12 sm:flex-row sm:items-end sm:justify-between sm:gap-2">
              <TimelineContent
                as="div"
                animationNum={3}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="mb-0 text-xs sm:text-xl"
              >
                <div className="mb-1 font-medium capitalize text-brand-primary">
                  {SITE_BRAND_NAME}: we compare, we don&apos;t prescribe
                </div>
                <div className="font-semibold tracking-wide text-emerald-700 uppercase">
                  Weight loss in the UK
                </div>
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={4}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="shrink-0"
              >
                <Link
                  href={HOME_COMPARE_HUB_HREF}
                  className={ctaClass}
                >
                  <Zap className="h-5 w-5 shrink-0 fill-slate-900 sm:h-6 sm:w-6" aria-hidden />
                  Compare here
                </Link>
              </TimelineContent>
            </div>
          </div>
        </div>
      </TimelineSection>
    </section>
  );
}
