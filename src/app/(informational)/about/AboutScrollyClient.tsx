"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { HOME_COMPARE_HUB_HREF } from "@/lib/routes/home-compare-hub";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import { ABOUT_PAGE_FAQS } from "@/lib/seo/about-page-seo";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const HERO_IMAGE_SRC = "/hero section about us.webp";
const FOUNDER_PHOTO_SRC = "/authors/alistair-greenwood.jpg";

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

type Section = {
  kicker: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  numbered?: string[];
  links?: { label: string; href: string }[];
};

const SECTIONS: Section[] = [
  {
    kicker: "Compare provider prices",
    title: "What Healthwise360 does",
    paragraphs: [
      "Our comparison pages show published prices from UK weight-management providers. Where information is available, we look beyond the headline figure to identify consultation charges, delivery costs, introductory offers and ongoing prices.",
      "Prices can change between checks. Each comparison should show when its information was last reviewed, and you should confirm the final cost directly with the provider before paying.",
    ],
  },
  {
    kicker: "Make pharmacy checks easier",
    title: "Verify who actually dispenses your medicine",
    paragraphs: [
      "The website shows pharmacy registration information where available and explains how to check a supplying pharmacy on the General Pharmaceutical Council (GPhC) register. The company you order from and the pharmacy that dispenses your medicine may be different, so both are worth checking.",
    ],
    links: [
      { label: "Read our pharmacy verification guide", href: "/pharmacy-safety-gphc-verification" },
    ],
  },
  {
    kicker: "Explain the comparison",
    title: "Guides and tools, not personal medical advice",
    paragraphs: [
      "Our guides and tools help readers understand pricing, provider services and questions to raise during a clinical consultation. They are general information, not personal medical advice.",
    ],
    links: [
      { label: "Explore our comparison methodology", href: "/methodology" },
      { label: "Compare UK providers", href: HOME_COMPARE_HUB_HREF },
    ],
  },
  {
    kicker: "Why we built Healthwise360",
    title: "A founder who hit the same wall",
    paragraphs: [
      "Founder Alistair Greenwood encountered the difficulty of comparing weight-management options while researching his own health and wellbeing. Published prices were easy to find in isolation, but it took more work to understand what they included and what the ongoing cost might be.",
      "His background in senior project management and information analysis shaped the approach to Healthwise360: organise the details, explain the method and show readers where they can check important facts for themselves.",
    ],
  },
  {
    kicker: "How we compare providers",
    title: "Published prices, checked dates, and an open methodology",
    paragraphs: [
      "We use published provider information to record prices and available details about consultations, delivery, dispensing pharmacies and ongoing support. We present that information alongside the date it was checked and explain our approach in a published methodology.",
      "Three principles guide the work:",
    ],
    numbered: [
      "Look beyond introductory prices. A first-order offer may differ from the amount you pay later.",
      "Show the source of important checks. Pharmacy registration can be checked against the official GPhC register.",
      "Be clear about uncertainty. Prices, stock and provider terms can change. A comparison is a starting point, not a live checkout quote.",
    ],
  },
  {
    kicker: "Who Healthwise360 is for",
    title: "UK adults who want to compare before they commit",
    paragraphs: [],
    bullets: [
      "compare private weight-management providers before booking a consultation;",
      "understand the difference between a starting offer and ongoing costs;",
      "check who supplies a medicine and how to verify a pharmacy;",
      "compare what providers include, such as consultations, delivery and follow-up support; or",
      "prepare questions for a qualified healthcare professional.",
    ],
  },
  {
    kicker: "How Healthwise360 is funded",
    title: "Commercial relationships, disclosed",
    paragraphs: [
      "Some links on Healthwise360 may be affiliate links. Where a commercial relationship applies, we disclose it. A provider cannot pay to change a pharmacy verification result or override our published comparison criteria.",
      "Whether or not a link earns commission, check the provider's current price, terms and pharmacy details before making a decision.",
    ],
    links: [
      { label: "Editorial policy", href: "/editorial-policy" },
      { label: "Comparison methodology", href: "/methodology" },
    ],
  },
];

const AT_A_GLANCE: { fact: string; detail: string }[] = [
  { fact: "Name", detail: "Healthwise360" },
  { fact: "Founded", detail: "2026" },
  { fact: "Founder", detail: "Alistair Greenwood" },
  { fact: "Based in", detail: "London, UK" },
  { fact: "Website", detail: "healthwise360.co.uk" },
  {
    fact: "What it does",
    detail:
      "Compares UK private weight-management providers, published prices and pharmacy information",
  },
  {
    fact: "What it does not do",
    detail:
      "Prescribe, sell or supply medicines; assess individual eligibility; or provide personal medical advice",
  },
  {
    fact: "How it works",
    detail: "Researches published information using a documented comparison methodology",
  },
  {
    fact: "Commercial relationships",
    detail: "Affiliate links may apply and are disclosed where relevant",
  },
];

export default function AboutScrollyClient() {
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
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative flex min-h-[min(60dvh,480px)] flex-col justify-end overflow-hidden px-4 pb-12 pt-20 sm:px-6 sm:pb-14 sm:pt-24 md:px-10"
      >
        <motion.div className="absolute inset-0 bg-slate-950" style={{ scale: heroScale }} />
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <Image
            src={HERO_IMAGE_SRC}
            alt={`About ${SITE_BRAND_NAME} — independent UK weight loss provider comparison`}
            title={`About ${SITE_BRAND_NAME} — independent UK weight loss provider comparison`}
            fill
            className="object-cover opacity-35"
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
            About {SITE_BRAND_NAME}
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl md:leading-[1.08]">
            About Healthwise360
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:mt-5 sm:text-lg">
            Healthwise360 is an independent UK website that helps adults compare
            private weight-management providers, published prices and pharmacy
            information before choosing where to seek a consultation.
          </p>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
            A low starting price rarely tells the whole story. Consultation
            fees, delivery, repeat prices and the services included can all
            affect what you pay. We bring those details together so you can
            ask better questions and check the information that matters to
            you.
          </p>
          <p className="mt-4 max-w-2xl text-pretty text-sm font-semibold leading-relaxed text-emerald-300/90 sm:text-base">
            We compare providers. We do not prescribe, sell medicines or
            decide whether a treatment is suitable for you.
          </p>
        </motion.div>
      </section>

      {/* Main narrative sections */}
      <section className="relative border-t border-brand-border bg-brand-card px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl space-y-14 md:space-y-16">
          {SECTIONS.map((sec, i) => (
            <RevealBlock key={sec.title} delay={Math.min(i * 0.05, 0.2)}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                {sec.kicker}
              </p>
              <h2 className="text-balance text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                {sec.title}
              </h2>
              {sec.paragraphs.length > 0 ? (
                <div className="mt-4 space-y-4 text-pretty text-base leading-relaxed text-slate-600">
                  {sec.paragraphs.map((p, pi) => (
                    <p key={`${sec.title}-p-${pi}`}>{p}</p>
                  ))}
                </div>
              ) : null}
              {sec.numbered && sec.numbered.length > 0 ? (
                <ol className="mt-5 list-inside list-decimal space-y-2.5 text-pretty text-base leading-relaxed text-slate-600 marker:font-semibold marker:text-emerald-600">
                  {sec.numbered.map((n, ni) => (
                    <li key={`${sec.title}-n-${ni}`}>{n}</li>
                  ))}
                </ol>
              ) : null}
              {sec.bullets && sec.bullets.length > 0 ? (
                <ul className="mt-5 list-inside list-disc space-y-2.5 text-pretty text-base leading-relaxed text-slate-600 marker:text-emerald-600">
                  {sec.bullets.map((b, bi) => (
                    <li key={`${sec.title}-b-${bi}`}>{b}</li>
                  ))}
                </ul>
              ) : null}
              {sec.links && sec.links.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {sec.links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="text-sm font-semibold text-emerald-700 underline decoration-emerald-300 underline-offset-2 hover:text-emerald-800"
                    >
                      {l.label} →
                    </Link>
                  ))}
                </div>
              ) : null}
            </RevealBlock>
          ))}

          {/* Who Healthwise360 is for — closing note */}
          <RevealBlock delay={0.1}>
            <p className="text-pretty text-sm italic leading-relaxed text-slate-500">
              A prescriber must assess your individual circumstances and
              decide whether any prescription treatment is appropriate.
            </p>
          </RevealBlock>

          {/* Corrections note (part of "How we compare providers") */}
          <RevealBlock delay={0.1}>
            <p className="text-pretty text-base leading-relaxed text-slate-600">
              We welcome corrections from readers and providers. If you find a
              price, registration detail or description that needs attention,{" "}
              <Link
                href="/contact"
                className="font-semibold text-emerald-700 underline decoration-emerald-300 underline-offset-2 hover:text-emerald-800"
              >
                please contact us
              </Link>
              .
            </p>
          </RevealBlock>
        </div>
      </section>

      {/* The person behind Healthwise360 */}
      <section className="border-t border-slate-800/80 bg-slate-950 px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl">
          <RevealBlock>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/90">
              The person behind Healthwise360
            </p>
            <div className="mt-4 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <Image
                src={FOUNDER_PHOTO_SRC}
                alt="Alistair Greenwood"
                width={96}
                height={96}
                className="h-20 w-20 rounded-full object-cover ring-4 ring-white/15 sm:h-24 sm:w-24"
              />
              <div>
                <h2 className="text-balance text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  Alistair Greenwood, founder
                </h2>
                <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-slate-300">
                  Alistair founded Healthwise360 in 2026. He researches
                  provider information, compares published costs and works to
                  make complex choices easier to understand.
                </p>
                <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-slate-300">
                  Alistair&rsquo;s experience is in senior project management
                  and information analysis. His personal experience with
                  weight-management challenges prompted him to examine how
                  providers present prices and services. He is not a clinician
                  or pharmacist. Healthwise360 does not have an in-house
                  medical team, its content is not medically reviewed, and it
                  does not offer individual treatment advice.
                </p>
                <Link
                  href="/editorial-team/alistair-greenwood"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
                >
                  Read Alistair Greenwood&rsquo;s full profile
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Healthwise360 at a glance */}
      <section className="border-t border-brand-border bg-brand-card px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl">
          <RevealBlock>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              At a glance
            </p>
            <h2 className="text-balance text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              Healthwise360 at a glance
            </h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <th className="px-4 py-3">Fact</th>
                    <th className="px-4 py-3">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {AT_A_GLANCE.map((row) => (
                    <tr key={row.fact} className="border-b border-slate-100 last:border-0">
                      <td className="px-4 py-3 align-top font-medium text-slate-900">
                        {row.fact}
                      </td>
                      <td className="px-4 py-3 align-top text-slate-600">{row.detail}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="px-4 py-3 align-top font-medium text-slate-900">Contact</td>
                    <td className="px-4 py-3 align-top text-slate-600">
                      <Link
                        href="/contact"
                        className="font-semibold text-emerald-700 underline decoration-emerald-300 underline-offset-2 hover:text-emerald-800"
                      >
                        Contact Healthwise360
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-slate-200/80 bg-white px-4 py-14 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto max-w-3xl">
          <RevealBlock>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              FAQ
            </p>
            <h2 className="text-balance text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              Frequently asked questions
            </h2>
            <div className="mt-6 space-y-3">
              {ABOUT_PAGE_FAQS.map((item, i) => (
                <details
                  key={i}
                  className="group overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50/40 shadow-sm open:border-emerald-200/80 open:bg-white open:shadow-md"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-left font-semibold text-slate-900 transition hover:bg-white/80 md:px-6 md:py-5 [&::-webkit-details-marker]:hidden">
                    <span className="pr-2">{item.question}</span>
                    <span className="shrink-0 rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs font-bold tabular-nums text-slate-500 group-open:border-emerald-200 group-open:text-emerald-800">
                      <span className="group-open:hidden">Show</span>
                      <span className="hidden group-open:inline">Hide</span>
                    </span>
                  </summary>
                  <div className="border-t border-slate-100 px-5 pb-5 pt-1 text-sm leading-relaxed text-slate-600 md:px-6 md:pb-6">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-slate-800/80 bg-slate-950 px-4 py-14 sm:px-6 md:px-10 md:py-16">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          <h2 className="text-balance text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Ready to compare?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-relaxed text-slate-400 sm:text-base">
            Explore UK weight-management providers, or get in touch if you
            spot something we should check.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={HOME_COMPARE_HUB_HREF}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-400"
            >
              Compare UK providers
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
