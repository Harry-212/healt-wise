import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import TrustSignals from "@/components/trust/TrustSignals";
import { WEGOVY_TABLET_FAQ_SECTIONS } from "@/lib/seo/wegovy-tablet-faqs-data";
import {
  WEGOVY_TABLET_FAQS_DESCRIPTION,
  WEGOVY_TABLET_FAQS_PATH,
  WEGOVY_TABLET_FAQS_TITLE,
  wegovyTabletFaqsJsonLd,
} from "@/lib/seo/wegovy-tablet-faqs-json-ld";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";
import {
  WHY_CHOOSE_HEALTHWISE360_ALT,
  WHY_CHOOSE_HEALTHWISE360_SRC,
} from "@/lib/site-assets";

export const metadata: Metadata = {
  ...buildPageShareMetadata({
    canonicalPath: WEGOVY_TABLET_FAQS_PATH,
    title: WEGOVY_TABLET_FAQS_TITLE,
    metaDescription: WEGOVY_TABLET_FAQS_DESCRIPTION,
    openGraphTitle: "Wegovy Tablet FAQ UK: Questions and Answers",
    openGraphDescription:
      "Plain English answers on the Wegovy tablet in the UK: how it works, how to take it, doses, weight loss and safety.",
    imagePath: WHY_CHOOSE_HEALTHWISE360_SRC,
    imageAlt: WHY_CHOOSE_HEALTHWISE360_ALT,
  }),
  title: { absolute: WEGOVY_TABLET_FAQS_TITLE },
};

const linkClass =
  "font-semibold text-emerald-800 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-950";
const h2Class = "text-2xl font-bold tracking-tight text-slate-900 md:text-3xl";
const h3Class = "text-lg font-bold text-slate-900 sm:text-xl";

/** Phrases inside the approved answers that become internal/external links without changing wording. */
const ANSWER_LINKS: { phrase: string; href: string; external?: boolean }[] = [
  { phrase: "BMI calculator", href: "/tools/bmi-calculator" },
  { phrase: "Wegovy tablet guide", href: "/what-is-wegovy-pill" },
  {
    phrase: "GPhC",
    href: "https://www.pharmacyregulation.org/",
    external: true,
  },
  {
    phrase: "MHRA Yellow Card scheme",
    href: "https://yellowcard.mhra.gov.uk/",
    external: true,
  },
];

function withLinks(text: string): ReactNode {
  let nodes: ReactNode[] = [text];

  for (const link of ANSWER_LINKS) {
    const nextNodes: ReactNode[] = [];
    for (const node of nodes) {
      if (typeof node !== "string" || !node.includes(link.phrase)) {
        nextNodes.push(node);
        continue;
      }
      const parts = node.split(link.phrase);
      for (let i = 0; i < parts.length; i++) {
        if (parts[i]) nextNodes.push(parts[i]);
        if (i < parts.length - 1) {
          if (link.external) {
            nextNodes.push(
              <a
                key={`${link.phrase}-${i}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {link.phrase}
              </a>
            );
          } else {
            nextNodes.push(
              <Link
                key={`${link.phrase}-${i}`}
                href={link.href}
                className={linkClass}
              >
                {link.phrase}
              </Link>
            );
          }
        }
      }
    }
    nodes = nextNodes;
  }

  return <>{nodes}</>;
}

export default function WegovyTabletFaqsPage() {
  const jsonLd = wegovyTabletFaqsJsonLd();

  // Separate sections 1-6 from section 8 (so section 7 Myths & Facts can sit between 6 and 8)
  const sectionsBeforeMyths = WEGOVY_TABLET_FAQ_SECTIONS.filter(
    (s) => s.id !== "before-you-start-the-wegovy-tablet"
  );
  const sectionBeforeStart = WEGOVY_TABLET_FAQ_SECTIONS.find(
    (s) => s.id === "before-you-start-the-wegovy-tablet"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="w-full">
        <section className="w-full border-b border-slate-200/80 bg-gradient-to-b from-[#f4f7f5] to-white">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-5 sm:py-12 md:px-8 md:py-16">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 ring-1 ring-emerald-200/70">
                UK Treatment FAQs
              </span>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.12]">
                Wegovy Tablet FAQ: Questions and Answers for the UK
              </h1>
              <p
                id="hero-answer"
                className="mt-4 text-base font-medium leading-relaxed text-slate-800 sm:text-lg"
              >
                The Wegovy tablet is a once daily weight loss tablet that
                contains semaglutide. The MHRA approved it in the UK on 11 June
                2026. It is prescription only, and it was not on the NHS when
                it was approved.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                Welcome to our Wegovy tablet FAQ. Below are plain answers to the
                questions people ask when they plan to start the Wegovy pill, or
                have just started it. We wrote these frequently asked questions
                about Wegovy tablets for adults in the UK. These Wegovy pill
                questions and answers are short on purpose, so you can find an
                answer fast. For a comprehensive overview of how the pill
                compares to injections, read our{" "}
                <Link href="/what-is-wegovy-pill" className={linkClass}>
                  Wegovy tablet guide
                </Link>{" "}
                or browse our wider{" "}
                <Link href="/wegovy-faq" className={linkClass}>
                  Wegovy FAQs
                </Link>
                .
              </p>

              <div className="mt-6 rounded-2xl border border-amber-200/90 bg-amber-50/70 p-4 text-sm leading-relaxed text-amber-950 sm:text-base">
                <p>
                  <strong>Medical note:</strong> This page is a guide, not
                  medical advice. Talk to a prescriber or pharmacist about
                  whether the Wegovy tablet is right for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl space-y-12 px-4 py-10 leading-relaxed text-slate-800 sm:px-6 sm:py-14 md:py-16">
          {sectionsBeforeMyths.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 space-y-6"
            >
              <h2 className={h2Class}>{section.heading}</h2>
              {section.faqs.map((faq) => (
                <div key={faq.question} className="space-y-2">
                  <h3 className={h3Class}>{faq.question}</h3>
                  <p className="leading-relaxed">{withLinks(faq.answer)}</p>
                </div>
              ))}
            </section>
          ))}

          {/* Section 7: Wegovy pill facts and myths */}
          <section
            id="wegovy-pill-facts-and-myths"
            className="scroll-mt-28 space-y-6"
          >
            <h2 className={h2Class}>Wegovy pill facts and myths</h2>
            <p className="leading-relaxed text-slate-700">
              Here are some Wegovy pill facts, set against common myths. Each of
              the Wegovy pill myths and facts below is short.
            </p>
            <div className="grid gap-3 sm:gap-4">
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/60 p-4 leading-relaxed">
                <p>
                  <strong className="text-rose-900">Myth:</strong> The Wegovy
                  pill is just a weaker version of the injection.{" "}
                  <strong className="text-emerald-900">Fact:</strong> It has the
                  same medicine, semaglutide, but it is taken in a different
                  way and at different doses. The milligram numbers cannot be
                  compared.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/60 p-4 leading-relaxed">
                <p>
                  <strong className="text-rose-900">Myth:</strong> You can take
                  it with breakfast, like most tablets.{" "}
                  <strong className="text-emerald-900">Fact:</strong> No. Your
                  stomach must be empty for at least 8 hours, and you must wait
                  30 minutes before you eat or drink.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/60 p-4 leading-relaxed">
                <p>
                  <strong className="text-rose-900">Myth:</strong> A missed
                  tablet can be taken later in the day.{" "}
                  <strong className="text-emerald-900">Fact:</strong> No. Skip
                  it and take your usual tablet the next day.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/60 p-4 leading-relaxed">
                <p>
                  <strong className="text-rose-900">Myth:</strong> You can move
                  up a dose early if you feel ready.{" "}
                  <strong className="text-emerald-900">Fact:</strong> No. Each
                  step lasts at least one month, and your prescriber decides.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/60 p-4 leading-relaxed">
                <p>
                  <strong className="text-rose-900">Myth:</strong> You can keep
                  raising the dose after 25 mg.{" "}
                  <strong className="text-emerald-900">Fact:</strong> No. 25 mg
                  is the highest dose.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/90 bg-slate-50/60 p-4 leading-relaxed">
                <p>
                  <strong className="text-rose-900">Myth:</strong> Approval means
                  it is free on the NHS.{" "}
                  <strong className="text-emerald-900">Fact:</strong> No. It was
                  not on the NHS at approval, and NICE has to review it first.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Before you start the Wegovy tablet */}
          {sectionBeforeStart && (
            <section
              id={sectionBeforeStart.id}
              className="scroll-mt-28 space-y-6"
            >
              <h2 className={h2Class}>{sectionBeforeStart.heading}</h2>
              {sectionBeforeStart.faqs.map((faq) => (
                <div key={faq.question} className="space-y-2">
                  <h3 className={h3Class}>{faq.question}</h3>
                  <p className="leading-relaxed">{withLinks(faq.answer)}</p>
                </div>
              ))}
            </section>
          )}

          <div className="border-t border-slate-200 pt-8 text-xs text-slate-500">
            <p>
              Last reviewed: October 2026. Sources include product information
              published by the MHRA, clinical trial publications, and official
              guidance from the General Pharmaceutical Council.
            </p>
          </div>
        </div>

        <TrustSignals />
      </article>
    </>
  );
}
