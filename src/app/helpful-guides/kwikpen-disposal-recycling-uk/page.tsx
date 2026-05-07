import { helpfulGuidePath } from "@/lib/helpful-guide-slugs";
import { siteOrigin } from "@/lib/seo/site-origin";
import { buildGuideShareMetadata } from "@/lib/seo/guide-share-metadata";
import {
  GuideLayout,
  GuideSection,
  GuideParagraph,
  GuideBulletList,
  GuideBulletListRich,
  GuideKeyTakeaways,
  GuideDisclaimer,
  GuideFaq,
  GuideReferences,
  GuideRelatedGuides,
  GuideCallout,
  IL,
  EL,
} from "@/components/guide/GuideLayout";

export const metadata = buildGuideShareMetadata({
  slug: "kwikpen-disposal-recycling-uk",
  title: "KwikPen Disposal & Recycling UK (Mounjaro / Eli Lilly): Safe Sharps Guide",
  description: "How to dispose of used Mounjaro KwikPens and needles safely in the UK—sharps bins, general waste rules, returning unused medicine, and why household recycling is not suitable.",
  openGraphTitle: "KwikPen Disposal & Recycling UK (Mounjaro / Eli Lilly): Safe Sharps Guide",
  openGraphDescription: "How to dispose of used Mounjaro KwikPens and needles safely in the UK—sharps bins, general waste rules, and returning unused medicine.",
});


const TOC = [
  { id: "can-recycle", label: "Can KwikPens Be Recycled?" },
  { id: "step-needles", label: "Step 1: Handle Needles Safely" },
  { id: "step-pen", label: "Step 2: Dispose of the Pen Body" },
  { id: "unused-medicine", label: "Returning Unused Medication" },
  { id: "developments", label: "Recycling Developments" },
  { id: "why-matters", label: "Why Proper Disposal Matters" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "Can I put my used Mounjaro KwikPen in household recycling?",
    a: "No. KwikPens should not go in standard household recycling bins. They contain a mix of materials and may have traces of medication. After the needle is removed and disposed of in a sharps bin, the empty pen body should go in general (non-recyclable) household waste unless your local authority or pharmacy advises otherwise.",
  },
  {
    q: "Where can I get a sharps bin in the UK?",
    a: "GP practices, pharmacies, and diabetes or weight-management clinics often provide sharps bins free of charge or can tell you how to obtain one. Local councils also offer clinical waste collection services in many areas. Never put loose needles in household waste.",
  },
  {
    q: "Should I recap the needle before disposal?",
    a: "No. The NHS advises against recapping used needles because it increases the risk of a needle-stick injury. Remove the needle using your pen's instructions (usually unscrewing the needle unit) and place it straight into a sharps bin without recapping.",
  },
  {
    q: "Can I reuse or refill a KwikPen?",
    a: "No. KwikPens are single-patient use devices designed to be discarded after the labelled number of doses. Never attempt to refill or reuse a pen—this risks inaccurate dosing and contamination.",
  },
  {
    q: "What should I do with unused Mounjaro pens?",
    a: "Return unused or expired medicines to a pharmacy for safe disposal. Do not flush medicines down the toilet or put them in general waste if they still contain active drug. Your local pharmacy can accept them through NHS medicines waste routes.",
  },
];

const REFERENCES = [
  {
    label: "NHS — How to get rid of used needles",
    description:
      "NHS guidance on sharps disposal, obtaining sharps bins, and what never to do with used needles.",
    href: "https://www.nhs.uk/common-health-questions/accidents-first-aid-and-treatments/how-should-i-dispose-of-used-needles-or-sharps/",
  },
  {
    label: "NHS — How to dispose of unused medicines",
    description:
      "NHS advice on returning unused medicines to a pharmacy and why home disposal can harm the environment.",
    href: "https://www.nhs.uk/nhs-services/pharmacies/how-pharmacies-can-help/",
  },
  {
    label: "Mounjaro (tirzepatide) patient information — EMC",
    description:
      "Official patient-facing information for Mounjaro, including device handling; always follow the leaflet supplied with your pack.",
    href: "https://www.medicines.org.uk/emc/product/15481/pil",
  },
  {
    label: "Mounjaro delivery & storage UK — Health Wise",
    description:
      "Cold-chain storage, checking deliveries, and keeping pens safe before use.",
    href: "/helpful-guides/mounjaro-delivery-storage-uk",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/helpful-guides/mounjaro-delivery-storage-uk",
    category: "Pharmacy Safety",
    title: "Mounjaro Delivery & Storage UK: Temperature Rules & Safety Checks",
    description:
      "How to store pens correctly before disposal becomes relevant—2°C to 8°C and what to check on arrival.",
  },
  {
    href: "/helpful-guides/norovirus-mounjaro-wegovy-uk",
    category: "Side Effects",
    title: "Norovirus & Mounjaro/Wegovy: Symptoms & Safe Recovery",
    description:
      "Illness can affect how you manage treatments and waste—hygiene and safe disposal matter more when unwell.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Feel confident on your journey - A Simple Guide",
  description:
    "How to dispose of used Mounjaro KwikPens and needles safely in the UK—sharps bins, general waste rules, and returning unused medicine.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteOrigin()}${helpfulGuidePath("kwikpen-disposal-recycling-uk")}`,
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function GuideKwikpenDisposal() {
  return (
    <GuideLayout
      slug="kwikpen-disposal-recycling-uk"
      category="Safety Checks"
      categorySlug="safety-checks"
      title="Feel confident on your journey - A Simple Guide"
      description="Proper disposal of used KwikPens protects others from needle injuries, reduces environmental harm from medicines in the wrong waste stream, and aligns with UK clinical waste practice. Here's what to do step by step."
      readTime="3 min read"
      lastUpdated="April 2026"
      toc={TOC}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      <GuideSection id="can-recycle" heading="Can KwikPens Be Recycled?">
        <GuideParagraph>
          KwikPens used for{" "}
          <IL href="/what-is-mounjaro">Mounjaro (tirzepatide)</IL> cannot
          currently be recycled through standard UK household recycling. They
          combine plastic, metal, and other components, and may retain traces
          of medication after use.
          Most councils are happy to arrange the collection of medical sharps
          free of charge by a special collection.
         For more context, explore our resources on <IL href="/helpful-guides/mounjaro-weight-loss-injection-uk" className="font-medium text-emerald-600 hover:underline">Mounjaro weight loss treatment UK</IL>.</GuideParagraph>
        <GuideBulletList
          items={[
            "Never reuse or refill a KwikPen — pens are single-patient devices; reuse risks infection and dosing errors",
            "Remove the needle after each treatment and dispose of it in a sharps bin",
            "Dispose of the empty pen body in general household waste (not recycling), unless your pharmacist or local authority specifies a clinical waste route",
          ]}
        />
        <GuideCallout variant="info">
          Safe disposal always takes priority over recycling. If dedicated
          take-back or recycling schemes become available in your area, your
          pharmacist or{" "}
          <EL href="https://www.nhs.uk/">NHS</EL> local services will
          advertise them—until then, follow sharps and medicines waste guidance.
        </GuideCallout>
      </GuideSection>

      <GuideSection id="step-needles" heading="Step 1: Handle Needles Safely">
        <GuideParagraph>
          The{" "}
          <EL href="https://www.nhs.uk/common-health-questions/accidents-first-aid-and-treatments/how-should-i-dispose-of-used-needles-or-sharps/">
            NHS is clear
          </EL>
          : used needles must not go in household waste loose, and you should
          not try to bend, break, or snap them.
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            <>
              <strong>Do not recap used needles</strong> — recapping increases
              the risk of needle-stick injuries. Follow your KwikPen
              instructions to unscrew or detach the needle and place it
              immediately into a sharps bin.
            </>,
            <>
              <strong>Use an NHS-approved sharps bin</strong> — obtain one from
              your GP practice, specialist clinic, or pharmacy. When full,
              return it for incineration through arrangements offered by your
              surgery, pharmacy, or council.
            </>,
            <>
              <strong>If you do not yet have a sharps bin</strong> — use a
              strong, puncture-resistant plastic container with a secure lid
              (e.g. an empty laundry detergent bottle), label it clearly as
              containing sharps, and take it to a pharmacy or collection point
              as soon as possible. This is an interim measure only.
            </>,
          ]}
        />
      </GuideSection>

      <GuideSection id="step-pen" heading="Step 2: Dispose of the Pen Body">
        <GuideParagraph>
          Once the needle has been removed and disposed of safely:
         For more context, explore our resources on <IL href="/blog/side-effects-of-wegovy-and-how-to-manage-them" className="font-medium text-emerald-600 hover:underline">managing Wegovy side effects</IL>.</GuideParagraph>
        <GuideBulletList
          items={[
            "Place the empty pen body in your general household waste (not recycling)",
            "Some patients prefer to place the pen in the sharps bin as well for extra caution—check with your pharmacist whether your bin capacity allows this",
            "Do not put KwikPens in plastic or paper recycling streams",
          ]}
        />
      </GuideSection>

      <GuideSection id="unused-medicine" heading="Returning Unused Medication">
        <GuideParagraph>
          If you have{" "}
          <IL href="/what-is-mounjaro">Mounjaro</IL> pens you no longer need
           for example after a dose change or if treatment stops return them to
          a pharmacy. The{" "}
          <EL href="https://www.nhs.uk/nhs-services/pharmacies/how-pharmacies-can-help/">
            NHS recommends
          </EL>{" "}
          returning unused medicines rather than binning or flushing them, to
          protect waterways and prevent accidental ingestion.
        </GuideParagraph>
      </GuideSection>

      <GuideSection id="developments" heading="Recycling Developments">
        <GuideParagraph>
          Pharmaceutical packaging and device recycling schemes evolve. Industry
          initiatives and NHS pilot programmes occasionally introduce
          take back options for specific devices or regions. There is no
          guarantee that a scheme available in one country applies in the UK.
         For more context, explore our resources on <IL href="/blog/best-weight-loss-treatment-in-manchester" className="font-medium text-emerald-600 hover:underline">treatment in Manchester</IL>.</GuideParagraph>
        <GuideParagraph>
          Names such as PenCycle or similar programmes may exist for certain
          product lines in some markets always confirm with your pharmacist,
          prescriber, or the current patient information for your device rather
          than assuming a scheme accepts Mounjaro KwikPens.
         For more context, explore our resources on <IL href="/mounjaro-price-comparison" className="font-medium text-emerald-600 hover:underline">Mounjaro price comparison</IL>.</GuideParagraph>
      </GuideSection>

      <GuideSection id="why-matters" heading="Why Proper Disposal Matters">
        <GuideBulletList
          items={[
            "Prevents needle-stick injuries to waste handlers, children, and pets",
            "Reduces environmental contamination from active pharmaceutical ingredients",
            "Supports compliance with UK clinical waste and medicines disposal expectations",
          ]}
        />
        <GuideCallout variant="tip">
          Best practice: always keep a sharps bin at home, dispose of pens
          responsibly after each treatment, and return unused medicine to a
          pharmacy. Stay updated via your clinic or{" "}
          <EL href="https://www.nhs.uk/">NHS.uk</EL> if local collection
          services change.
        </GuideCallout>
      </GuideSection>

      <GuideKeyTakeaways
        items={[
          "KwikPens are not suitable for household recycling—dispose of the empty pen body in general waste after needle removal.",
          "Never reuse or refill pens; never put loose needles in the bin—use a sharps container.",
          "Do not recap used needles—detach and drop straight into a sharps bin to reduce needle-stick risk.",
          "Return unused or expired Mounjaro to a pharmacy for safe NHS medicines waste disposal.",
          "Ask your GP surgery or pharmacy how sharps bin collection works in your area.",
        ]}
      />

      <GuideRelatedGuides guides={RELATED_GUIDES} />
      <GuideReferences items={REFERENCES} />

      <GuideDisclaimer>
        This guide summarises common UK practice. Local rules for clinical waste
        can vary. Always follow the patient information leaflet supplied with
        your medication and advice from your pharmacist or clinician.
      </GuideDisclaimer>

      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
