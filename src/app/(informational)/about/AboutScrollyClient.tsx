"use client";

import Image from "next/image";
import Link from "next/link";
import CompareHereLink from "@/components/ui/CompareHereLink";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ShieldCheck, Sparkles, Telescope } from "lucide-react";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Editorial imagery — remotePatterns allow images.unsplash.com & images.pexels.com */
const ABOUT_IMAGES = {
  hero: "/hero section about us.webp",
  why: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  what: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  journey:
    "https://images.pexels.com/photos/7579822/pexels-photo-7579822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=840&dpr=2",
  depthBg:
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=75",
} as const;

function ChapterImage({
  src,
  alt,
  sizes,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm ring-1 ring-slate-900/5 ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
        priority={priority}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-900/10 via-transparent to-transparent" />
    </div>
  );
}

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
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35, margin: "0px 0px -12% 0px" }}
      transition={{
        duration: reduce ? 0.01 : 0.65,
        delay: reduce ? 0 : delay,
        ease: easeOut,
      }}
    >
      {children}
    </motion.div>
  );
}

function ParallaxLayer({
  scrollYProgress,
  reduce,
}: {
  scrollYProgress: MotionValue<number>;
  reduce: boolean | null;
}) {
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-18%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0.25, 0.55, 0.45, 0.2]);
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ opacity }}
    >
      <motion.div
        className="absolute -inset-[20%] bg-[radial-gradient(ellipse_at_30%_20%,rgba(16,185,129,0.14),transparent_55%),radial-gradient(ellipse_at_80%_60%,rgba(245,158,11,0.08),transparent_50%)]"
        style={{ y }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(15,23,42,0.04)_45%,rgba(15,23,42,0.08)_100%)]" />
    </motion.div>
  );
}

export default function AboutScrollyClient() {
  const reduce = useReducedMotion();

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(
    heroProgress,
    [0, 1],
    reduce ? [1, 1] : [1, 1.06],
  );
  const heroBgOpacity = useTransform(heroProgress, [0, 1], [1, 0.92]);
  const heroCopyOpacity = useTransform(
    heroProgress,
    [0, 0.85, 1],
    reduce ? [1, 1, 1] : [1, 1, 0.35],
  );
  const heroScrollHintOpacity = useTransform(
    heroProgress,
    [0, 0.5],
    reduce ? [1, 1] : [1, 0],
  );

  const journeyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: journeyProgress } = useScroll({
    target: journeyRef,
    offset: ["start end", "end start"],
  });

  const stickyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: stickyProgress } = useScroll({
    target: stickyRef,
    offset: ["start start", "end end"],
  });
  const stickyScale = useTransform(
    stickyProgress,
    [0, 0.45, 1],
    reduce ? [1, 1, 1] : [1, 1.06, 1.02],
  );
  const stickyRadius = useTransform(
    stickyProgress,
    [0, 0.5, 1],
    reduce ? [24, 24, 24] : [28, 20, 24],
  );
  const stickyBorderRadiusPx = useTransform(stickyRadius, (v) => `${v}px`);

  const staggerContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: reduce ? 0 : 0.05 },
    },
  };
  const staggerItem = {
    hidden: reduce ? {} : { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <div className="bg-background text-foreground">
      {/* Hero — scroll-linked zoom + fade */}
      <section
        ref={heroRef}
        className="relative flex min-h-[min(68dvh,560px)] flex-col justify-start overflow-hidden px-4 pb-12 pt-20 sm:min-h-[min(70dvh,600px)] sm:px-6 sm:pb-14 sm:pt-24 md:px-10 md:pt-28"
      >
        <motion.div
          className="absolute inset-0 bg-slate-950"
          style={{ scale: heroScale, opacity: heroBgOpacity }}
        />
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <Image
            src={ABOUT_IMAGES.hero}
            alt=""
            fill
            className="object-cover opacity-65"
            sizes="100vw"
            priority
            aria-hidden
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.42)_0%,rgba(15,23,42,0.78)_100%)]" />
        <motion.div
          className="relative z-[1] mx-auto w-full max-w-5xl"
          style={{ opacity: heroCopyOpacity }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400/90">
            Health Wise
          </p>
          <h1 className="max-w-[18ch] text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.05]">
            Independent clarity for UK GLP‑1 care.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-300 sm:mt-6 sm:text-lg">
            We guide you through pricing, safety signals, and provider quality—one calm scroll at a
            time—so decisions feel considered, not rushed.
          </p>
        </motion.div>
        <motion.div
          className="pointer-events-none absolute bottom-6 left-1/2 z-[1] h-12 w-px -translate-x-1/2 bg-gradient-to-b from-white/50 to-transparent sm:bottom-8"
          style={{ opacity: heroScrollHintOpacity }}
          aria-hidden
        />
      </section>

      {/* Story blocks — text + photo pairs to avoid long empty bands */}
      <section className="relative border-t border-brand-border bg-brand-card px-4 py-16 sm:px-6 md:px-10 md:py-20">
        <div className="mx-auto max-w-5xl space-y-16 md:space-y-20">
          <RevealBlock>
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600">
                  Why we exist
                </p>
                <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                  Comparison should feel like care—not a funnel.
                </h2>
                <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
                  Pricing, stock, and aftercare policies for treatments like Wegovy and Mounjaro
                  are often fragmented. We surface what matters in plain language, from regulated
                  providers you can verify yourself.
                </p>
              </div>
              <ChapterImage
                src={ABOUT_IMAGES.why}
                alt="Notes and laptop suggesting careful research and comparison"
                sizes="(min-width: 768px) 42vw, 100vw"
                priority
              />
            </div>
          </RevealBlock>

          <RevealBlock delay={0.06}>
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
              <ChapterImage
                src={ABOUT_IMAGES.what}
                alt="Clinical healthcare setting representing safety-first information"
                sizes="(min-width: 768px) 42vw, 100vw"
              />
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600">
                  What we do
                </p>
                <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                  Evidence-minded, commercially independent.
                </h2>
                <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
                  We are not a pharmacy and we are not owned by manufacturers. Rankings and tables
                  lean on transparent criteria—cost, availability, and safety posture—so you can
                  align price with peace of mind.
                </p>
              </div>
            </div>
          </RevealBlock>

          <RevealBlock delay={0.1}>
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600">
                  Your journey
                </p>
                <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                  Built for long-term decisions, not one-off clicks.
                </h2>
                <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
                  Whether you are exploring options or maintaining treatment, we keep the narrative
                  steady: verify, compare, then discuss anything clinical with your prescriber.
                </p>
              </div>
              <ChapterImage
                src={ABOUT_IMAGES.journey}
                alt="Pharmacist reviewing medication, reflecting ongoing care and support"
                sizes="(min-width: 768px) 42vw, 100vw"
              />
            </div>
          </RevealBlock>
        </div>
        <p className="mx-auto mt-12 max-w-5xl text-center text-[11px] leading-relaxed text-slate-400">
          Photography:{" "}
          <a
            href="https://unsplash.com"
            className="underline decoration-slate-300 underline-offset-2 hover:text-slate-600"
            rel="noreferrer"
            target="_blank"
          >
            Unsplash
          </a>
          {" · "}
          <a
            href="https://www.pexels.com"
            className="underline decoration-slate-300 underline-offset-2 hover:text-slate-600"
            rel="noreferrer"
            target="_blank"
          >
            Pexels
          </a>
        </p>
      </section>

      {/* Parallax depth strip */}
      <section ref={journeyRef} className="relative min-h-[56vh] overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src={ABOUT_IMAGES.depthBg}
            alt=""
            fill
            className="object-cover opacity-25"
            sizes="100vw"
            aria-hidden
          />
        </div>
        <ParallaxLayer scrollYProgress={journeyProgress} reduce={reduce} />
        <div className="relative z-[1] mx-auto flex min-h-[56vh] max-w-4xl flex-col justify-center px-4 py-16 text-center sm:px-6 md:px-10 md:py-20">
          <RevealBlock>
            <Telescope className="mx-auto mb-5 h-9 w-9 text-emerald-400/90" aria-hidden />
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              Depth without noise.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
              Motion here is purpose-driven: backgrounds drift slower than foreground copy so the
              page feels spatial—without distracting from the facts you came for.
            </p>
          </RevealBlock>
        </div>
      </section>

      {/* Sticky visual + changing narrative */}
      <section
        ref={stickyRef}
        className="border-t border-slate-800/80 bg-slate-950 px-4 py-14 sm:px-6 md:px-10 md:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <motion.div
              className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.75)]"
              style={{
                scale: stickyScale,
                borderRadius: stickyBorderRadiusPx,
              }}
            >
              <Image
                src="/why choose healthwise360.webp"
                alt="Why choose Health Wise — independent UK comparison for weight loss care"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 42vw, 100vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />
            </motion.div>
          </div>

          <div className="flex flex-col gap-[min(14vh,7rem)] py-2 lg:gap-20 lg:py-8">
            {[
              {
                icon: ShieldCheck,
                title: "Safety first",
                body: "We prioritise GPhC-registered pathways and show how we think about verification—so you can cross-check any provider in minutes.",
                href: "/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards",
                cta: "How we verify pharmacies",
              },
              {
                icon: Sparkles,
                title: "Transparent methodology",
                body: "Our rankings spell out what moves a row up or down. No hidden weighting behind a glossy landing page.",
                href: "/methodology",
                cta: "Read our methodology",
              },
              {
                icon: ArrowRight,
                title: "Human support",
                body: "Questions about the site or a listing? Reach out—we treat editorial integrity as part of the product.",
                href: "/contact",
                cta: "Contact us",
              },
            ].map((item, i) => (
              <RevealBlock key={item.title} delay={i * 0.06} className="max-w-xl">
                <item.icon className="mb-5 h-9 w-9 text-emerald-400/90" aria-hidden />
                <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-pretty leading-relaxed text-slate-300">{item.body}</p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
                >
                  {item.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </RevealBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Staggered closing */}
      <section className="border-t border-brand-border bg-brand-surface px-4 py-16 sm:px-6 md:px-10 md:py-20">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p
            variants={staggerItem}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700"
          >
            2026 onward
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
          >
            Stay curious. Stay sceptical. We will keep publishing clearly.
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Founded in 2026, Health Wise exists to make UK GLP‑1 markets easier to navigate—with
            restraint in motion and generosity in detail.
          </motion.p>
          <motion.div variants={staggerItem} className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/tools/weight-loss-tracker"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-400"
            >
              Weight loss tracker
            </Link>
            <CompareHereLink href="/wegovy-price-comparison" />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
