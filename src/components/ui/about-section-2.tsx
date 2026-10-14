"use client";

import Link from "next/link";
import { useRef } from "react";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
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

export default function AboutSection2() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      className="w-full scroll-mt-24 border-b border-slate-200/80 bg-linear-to-b from-slate-100/95 via-brand-surface to-emerald-50/40 py-4 md:py-6"
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
              className="mb-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              What is {SITE_BRAND_NAME}?
            </TimelineContent>

            <TimelineContent
              as="p"
              animationNum={1}
              timelineRef={heroRef}
              customVariants={textVariants}
              className="max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg"
            >
              {SITE_BRAND_NAME} is an{" "}
              <span className={hlGreen}>
                independent UK price comparison
              </span>{" "}
              site for weight loss injections. We compare{" "}
              <span className={hlAccent}>Mounjaro and Wegovy prices</span> at
              60+ GPhC-registered pharmacies, so you can see the full cost
              before you start a consultation.
            </TimelineContent>

            <TimelineContent
              as="p"
              animationNum={2}
              timelineRef={heroRef}
              customVariants={textVariants}
              className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg"
            >
              We compare; we do not prescribe. We never sell or send
              medicines, and we never tell you which pharmacy to choose. The
              choice is always yours.
            </TimelineContent>

            <TimelineContent
              as="div"
              animationNum={3}
              timelineRef={heroRef}
              customVariants={textVariants}
              className="mt-6"
            >
              <Link
                href="/about"
                className="group inline-flex items-center text-sm font-semibold text-emerald-800 transition hover:text-emerald-950 sm:text-base"
              >
                <span className="underline underline-offset-4 decoration-emerald-500/50 group-hover:decoration-emerald-700">
                  About {SITE_BRAND_NAME}
                </span>
                <span
                  className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </TimelineContent>
          </div>
        </div>
      </TimelineSection>
    </section>
  );
}
