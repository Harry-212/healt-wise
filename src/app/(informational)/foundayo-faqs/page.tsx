import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import TrustSignals from "@/components/trust/TrustSignals";
import { FOUNDAYO_FAQ_SECTIONS } from "@/lib/seo/foundayo-faqs-data";
import {
  FOUNDAYO_FAQS_DESCRIPTION,
  FOUNDAYO_FAQS_PATH,
  FOUNDAYO_FAQS_TITLE,
  foundayoFaqsJsonLd,
} from "@/lib/seo/foundayo-faqs-json-ld";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";
import {
  WHY_CHOOSE_HEALTHWISE360_ALT,
  WHY_CHOOSE_HEALTHWISE360_SRC,
} from "@/lib/site-assets";

// Draft: kept out of search results (and the sitemap) until the medical
// reviewer and Harry have signed the page off. Remove `robots` to publish.
export const metadata: Metadata = {
  ...buildPageShareMetadata({
    canonicalPath: FOUNDAYO_FAQS_PATH,
    title: FOUNDAYO_FAQS_TITLE,
    metaDescription: FOUNDAYO_FAQS_DESCRIPTION,
    openGraphTitle: "Foundayo FAQ UK: Questions and Answers",
    openGraphDescription:
      "Plain English answers to common Foundayo questions in the UK: approval, NHS, cost, who can take it, doses, food, alcohol and side effects.",
    imagePath: WHY_CHOOSE_HEALTHWISE360_SRC,
    imageAlt: WHY_CHOOSE_HEALTHWISE360_ALT,
  }),
  title: { absolute: FOUNDAYO_FAQS_TITLE },
  robots: { index: false, follow: false },
};

const linkClass =
  "font-semibold text-emerald-800 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-950";
const h2Class = "text-2xl font-bold tracking-tight text-slate-900 md:text-3xl";
const h3Class = "text-lg font-bold text-slate-900 sm:text-xl";

/** Phrases inside the approved answers that become internal links; the text itself is unchanged. */
const ANSWER_LINKS: { phrase: string; href: string }[] = [
  { phrase: "BMI calculator", href: "/tools/bmi-calculator" },
  { phrase: "Foundayo price page", href: "/foundayo-price-comparison" },
  { phrase: "Wegovy pill guide", href: "/what-is-wegovy-pill" },
  { phrase: "Wegovy vs Mounjaro comparison", href: "/compare/wegovy-vs-mounjaro" },
];

/** Extra link shown under an approved answer, outside the answer text and the schema. */
const SEE_ALSO: Record<string, { label: string; href: string }> = {
  "How is Foundayo different from the Wegovy pill?": {
    label: "Wegovy tablet FAQ",
    href: "/wegovy-tablet-faqs",
  },
};

function withLinks(answer: string): ReactNode {
  const link = ANSWER_LINKS.find((l) => answer.includes(l.phrase));
  if (!link) return answer;
  const [before, ...rest] = answer.split(link.phrase);
  return (
    <>
      {before}
      <Link href={link.href} className={linkClass}>
        {link.phrase}
      </Link>
      {rest.join(link.phrase)}
    </>
  );
}

export default function FoundayoFaqsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(foundayoFaqsJsonLd()) }}
      />

      <article className="w-full">
        <section className="w-full border-b border-slate-200/80 bg-gradient-to-b from-[#f4f7f5] to-white">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-5 sm:py-12 md:px-8 md:py-16">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.12]">
                Foundayo FAQ: Questions and Answers for the UK
              </h1>
              <p
                id="hero-answer"
                className="mt-4 text-base font-medium leading-relaxed text-slate-800 sm:text-lg"
              >
                {FOUNDAYO_FAQS_DESCRIPTION} For a full guide to the tablet, read{" "}
                <Link href="/what-is-foundayo" className={linkClass}>
                  What is Foundayo
                </Link>
                .
              </p>

              <div className="mt-6 rounded-2xl border border-amber-200/90 bg-amber-50/70 p-4 text-sm leading-relaxed text-amber-950 sm:text-base">
                <p>
                  <strong>Medical note:</strong> This page is a guide, not
                  medical advice. Talk to a prescriber or pharmacist about
                  whether Foundayo is right for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl space-y-12 px-4 py-10 leading-relaxed text-slate-800 sm:px-6 sm:py-14 md:py-16">
          {FOUNDAYO_FAQ_SECTIONS.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 space-y-6"
            >
              <h2 className={h2Class}>{section.heading}</h2>
              {section.faqs.map((faq) => (
                <div key={faq.question} className="space-y-2">
                  <h3 className={h3Class}>{faq.question}</h3>
                  <p>{withLinks(faq.answer)}</p>
                  {SEE_ALSO[faq.question] ? (
                    <p className="text-sm text-slate-600">
                      See also:{" "}
                      <Link href={SEE_ALSO[faq.question].href} className={linkClass}>
                        {SEE_ALSO[faq.question].label}
                      </Link>
                    </p>
                  ) : null}
                </div>
              ))}
            </section>
          ))}
        </div>

        <TrustSignals />
      </article>
    </>
  );
}
