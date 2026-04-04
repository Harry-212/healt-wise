"use client";

import Link from "next/link";
import { useRef } from "react";
import { Zap } from "lucide-react";
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

/** Bold green — same font size as surrounding text (inherited from h2) */
const hlGreen = "font-bold text-emerald-800 dark:text-emerald-400";

/** Bold purple — same font size as surrounding text (inherited from h2) */
const hlViolet = "font-bold text-violet-700 dark:text-violet-400";

const ctaClass =
  "inline-flex h-12 cursor-pointer items-center gap-2 rounded-full bg-emerald-800 px-5 text-sm font-medium text-white shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:bg-violet-800 hover:shadow-violet-900/35 dark:bg-violet-800 dark:shadow-violet-950/40 dark:hover:bg-emerald-800 dark:hover:shadow-emerald-950/30";

export default function AboutSection2() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      className="w-full scroll-mt-24 border-b border-violet-200/50 bg-gradient-to-b from-violet-100/90 via-violet-50/95 to-purple-50/80 py-10 md:py-14 dark:border-violet-900/40 dark:from-violet-950/50 dark:via-violet-950/35 dark:to-purple-950/40"
      aria-labelledby="about-heading"
    >
      <TimelineSection className="w-full px-4 md:px-8 lg:px-10">
        <div
          ref={heroRef}
          className="flex w-full flex-col items-start gap-8 lg:flex-row"
        >
          <div className="w-full flex-1">
            <TimelineContent
              as="h2"
              animationNum={0}
              timelineRef={heroRef}
              customVariants={revealVariants}
              id="about-heading"
              className="mb-6 text-2xl leading-[110%] font-semibold text-black sm:text-4xl md:text-5xl dark:text-zinc-100"
            >
              Health Wise is an{" "}
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
              prescription-only{" "}
              <TimelineContent
                as="span"
                animationNum={2}
                timelineRef={heroRef}
                customVariants={textVariants}
                className={hlViolet}
              >
                weight-loss treatments
              </TimelineContent>{" "}
              from GPhC-registered online pharmacies—so you see the full cost
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
                <div className="mb-1 font-medium capitalize text-black dark:text-zinc-100">
                  Health Wise — we compare, we don&apos;t prescribe
                </div>
                <div className="font-semibold tracking-wide text-emerald-800 uppercase dark:text-emerald-400">
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
                  href="/compare-weight-loss-treatments-uk"
                  className={ctaClass}
                >
                  <Zap className="h-4 w-4 shrink-0 fill-white" aria-hidden />
                  Compare weight-loss treatments
                </Link>
              </TimelineContent>
            </div>
          </div>
        </div>
      </TimelineSection>
    </section>
  );
}
