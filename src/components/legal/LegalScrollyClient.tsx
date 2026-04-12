"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const HERO_BG =
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2000&q=82";

function RevealBlock({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.32, margin: "0px 0px -10% 0px" }}
      transition={{
        duration: reduce ? 0.01 : 0.62,
        delay: reduce ? 0 : delay,
        ease: easeOut,
      }}
    >
      {children}
    </motion.div>
  );
}

export type LegalSection = {
  kicker: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalScrollyProps = {
  eyebrow: string;
  title: string;
  lead: string;
  lastUpdated: string;
  sections: LegalSection[];
  ctaHref?: string;
  ctaLabel?: string;
};

export default function LegalScrollyClient({
  eyebrow,
  title,
  lead,
  lastUpdated,
  sections,
  ctaHref = "/contact",
  ctaLabel = "Contact us",
}: LegalScrollyProps) {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.05]);
  const heroCopyOpacity = useTransform(
    scrollYProgress,
    [0, 0.82, 1],
    reduce ? [1, 1, 1] : [1, 1, 0.4],
  );

  return (
    <div className="bg-background text-foreground">
      <section
        ref={heroRef}
        className="relative flex min-h-[min(72dvh,620px)] flex-col justify-end overflow-hidden px-4 pb-12 pt-20 sm:px-6 sm:pb-14 sm:pt-24 md:px-10"
      >
        <motion.div className="absolute inset-0 bg-slate-950" style={{ scale: heroScale }} />
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <Image
            src={HERO_BG}
            alt=""
            fill
            className="object-cover object-[center_30%] opacity-35"
            sizes="100vw"
            priority
            aria-hidden
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.5)_0%,rgba(15,23,42,0.92)_100%)]" />
        <motion.div
          className="relative z-[1] mx-auto w-full max-w-3xl"
          style={{ opacity: heroCopyOpacity }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400/90">
            {eyebrow}
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl md:leading-[1.08]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:mt-5 sm:text-lg">
            {lead}
          </p>
          <p className="mt-6 text-xs font-medium text-slate-500">Last updated: {lastUpdated}</p>
        </motion.div>
      </section>

      <section className="relative border-t border-brand-border bg-brand-card px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl space-y-14 md:space-y-16">
          {sections.map((sec, i) => (
            <RevealBlock key={`legal-sec-${i}`} delay={Math.min(i * 0.05, 0.2)}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                {sec.kicker}
              </p>
              <h2 className="text-balance text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                {sec.title}
              </h2>
              <div className="mt-4 space-y-4 text-pretty text-base leading-relaxed text-slate-600">
                {sec.paragraphs.map((p, pi) => (
                  <p key={`${sec.title}-p-${pi}`}>{p}</p>
                ))}
              </div>
              {sec.bullets && sec.bullets.length > 0 ? (
                <ul className="mt-5 list-inside list-disc space-y-2.5 text-pretty text-base leading-relaxed text-slate-600 marker:text-emerald-600">
                  {sec.bullets.map((b, bi) => (
                    <li key={`${sec.title}-b-${bi}`}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </RevealBlock>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-800/80 bg-slate-950 px-4 py-14 sm:px-6 md:px-10 md:py-16">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <h2 className="text-balance text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Questions about this page?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-relaxed text-slate-400 sm:text-base">
            We read every message. If something here is unclear or you believe we should correct a
            detail, please reach out.
          </p>
          <Link
            href={ctaHref}
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-400"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
