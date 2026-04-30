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
  GuideTempZones,
  IL,
  EL,
} from "@/components/guide/GuideLayout";

export const metadata = buildGuideShareMetadata({
  slug: "mounjaro-delivery-storage-uk",
  title: "Mounjaro Delivery & Storage UK: Temperature Rules, Safety Checks & What to Do",
  description: "Mounjaro must be refrigerated between 2°C and 8°C. Learn how to check your delivery, understand the temperature safety zones, and what to do if your medication arrives warm.",
  openGraphTitle: "Mounjaro Delivery & Storage UK: Temperature Rules, Safety Checks & What to Do",
  openGraphDescription: "Mounjaro must be refrigerated between 2°C and 8°C. Learn how to check your delivery and what to do if your medication arrives warm.",
});


const TOC = [
  { id: "storage", label: "Storage Requirements" },
  { id: "safe-delivery", label: "What Safe Delivery Looks Like" },
  { id: "if-warm", label: "What If It Gets Warm?" },
  { id: "warning-signs", label: "Warning Signs" },
  { id: "references", label: "Sources & Further Reading" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQ_ITEMS = [
  {
    q: "Can I use Mounjaro if it arrived warm?",
    a: "Only if it stayed below 30°C and within the safe time limits. If it remained below 30°C, it can be used for up to 21 days (some sources cite 30 days—always check the patient information leaflet for the specific product you received). If you cannot confirm the temperature, contact the pharmacy before using it.",
  },
  {
    q: "How should I store Mounjaro at home?",
    a: "Store Mounjaro in a refrigerator between 2°C and 8°C. Do not freeze it. Keep it in the original packaging and out of direct light. If it has been removed from the fridge, it can be kept at room temperature below 30°C for a limited period—check your patient information leaflet for the exact timeframe.",
  },
  {
    q: "What if my Mounjaro pen was frozen in transit?",
    a: "Do not use Mounjaro if it has been frozen. Freezing can damage the formulation and make it unsafe or ineffective. Contact your pharmacy immediately for a replacement.",
  },
  {
    q: "Can I travel with Mounjaro?",
    a: "Yes, but you must keep it refrigerated or ensure it stays below 30°C if travelling without a cool bag. For longer trips, use an insulated travel case with a cooling element. Check airline regulations for carrying injectable medications and bring a copy of your prescription.",
  },
  {
    q: "What packaging should a legitimate Mounjaro delivery include?",
    a: "A proper cold-chain delivery should include insulated packaging (such as a polystyrene or foam box), ice packs or gel packs, and the medication should feel cool on arrival. The package should be sealed and tamper-evident.",
  },
];

const REFERENCES = [
  {
    label: "Mounjaro (tirzepatide) SmPC — storage and handling",
    description:
      "Official prescribing reference confirming storage requirements of 2°C–8°C refrigerated, and the 21-day room temperature rule below 30°C.",
    href: "https://www.medicines.org.uk/emc/product/15481",
  },
  {
    label: "MHRA — Cold chain guidance for medicines",
    description:
      "MHRA guidance on the transport and storage of temperature-sensitive medicines in the UK supply chain.",
    href: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency",
  },
  {
    label: "NHS — Tirzepatide (Mounjaro) — storage information",
    description:
      "NHS patient information on how to store and handle Mounjaro correctly at home.",
    href: "https://www.england.nhs.uk/long-read/tirzepatide-in-primary-care-for-weight-management-information-on-wraparound-care/",
  },
  {
    label: "GPhC — Standards for registered pharmacies: premises and equipment",
    description:
      "GPhC standards requiring pharmacies to maintain appropriate storage conditions for all dispensed medicines.",
    href: "https://www.pharmacyregulation.org/standards/standards-registered-pharmacies",
  },
  {
    label: "How we verify UK pharmacies — Health Wise",
    description:
      "How Health Wise checks cold-chain compliance for every pharmacy listed on our platform.",
    href: "/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards",
    external: false,
  },
];

const RELATED_GUIDES = [
  {
    href: "/helpful-guides/mounjaro-prescription-timeline-uk",
    category: "Medications",
    title: "How Long Does It Take to Get Mounjaro in the UK?",
    description:
      "From consultation to cold-chain delivery—the full Mounjaro prescription timeline explained.",
  },
  {
    href: "/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards",
    category: "Pharmacy Safety",
    title: "How We Verify UK Pharmacies: GPhC Checks Explained",
    description:
      "Our multi-layer pharmacy verification process, including storage and cold-chain compliance checks.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Mounjaro Delivery & Storage UK: Temperature Rules, Safety Checks & What to Do",
  description:
    "Mounjaro must be refrigerated between 2°C and 8°C. Learn how to check your delivery and what to do if your medication arrives warm.",
  author: { "@type": "Organization", name: "Health Wise" },
  publisher: { "@type": "Organization", name: "Health Wise" },
  dateModified: "2026-04-09",
  about: [{ "@type": "Drug", name: "Mounjaro" }],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteOrigin()}${helpfulGuidePath("mounjaro-delivery-storage-uk")}`,
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

export default function GuideMounjaroStorage() {
  return (
    <GuideLayout
      slug="mounjaro-delivery-storage-uk"
      category="Pharmacy Safety"
      categorySlug="pharmacy-safety"
      title="Mounjaro Delivery & Storage UK: Temperature Rules, Safety Checks & What to Do"
      description="Mounjaro is a temperature-sensitive medication. Knowing how to check your delivery and store it correctly protects both your safety and the effectiveness of your treatment."
      readTime="3 min read"
      lastUpdated="April 2026"
      toc={TOC}
      schemaJson={{ ...SCHEMA, "@graph": [SCHEMA, FAQ_SCHEMA] }}
    >
      {/* ── Section 1 ── */}
      <GuideSection id="storage" heading="Storage Requirements">
        <GuideParagraph>
          <IL href="/what-is-mounjaro">Mounjaro</IL> must be kept
          refrigerated at:
         For more context, explore our resources on <IL href="/wegovy-price-comparison" className="font-medium text-emerald-600 hover:underline">Wegovy price comparison</IL>.</GuideParagraph>
        <GuideCallout variant="info">
          <strong>2°C to 8°C</strong> — refrigerated storage is required at
          all times until use. This is a mandatory requirement set out in the{" "}
          <EL href="https://www.medicines.org.uk/emc/product/15481">
            official Mounjaro SmPC
          </EL>
          .
        </GuideCallout>
        <GuideBulletList
          items={[
            "Store in a refrigerator — not in the door, which can experience temperature fluctuations",
            "Keep in the original packaging and away from direct light",
            "Do not freeze — freezing permanently damages the formulation",
            "Once removed from the fridge, refer to the patient information leaflet for room temperature time limits",
          ]}
        />
        <GuideParagraph>
          These requirements apply throughout the entire supply chain from the
          manufacturer, to the{" "}
          <IL href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
            pharmacy
          </IL>
          , through delivery, and into your home. Failure at any point can
          compromise medication safety and effectiveness.
        </GuideParagraph>
      </GuideSection>

      {/* ── Section 2 ── */}
      <GuideSection id="safe-delivery" heading="What Safe Delivery Looks Like">
        <GuideParagraph>
          A proper cold chain delivery from a{" "}
          <IL href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
            GPhC registered pharmacy
          </IL>{" "}
          should include:
         For more context, explore our resources on <IL href="/blog/best-weight-loss-treatment-in-birmingham" className="font-medium text-emerald-600 hover:underline">clinics in Birmingham</IL>.</GuideParagraph>
        <GuideBulletList
          items={[
            "Insulated packaging — typically a polystyrene box or specialist insulated bag",
            "Ice packs or gel packs — to maintain temperature during transit",
            "Cool temperature on arrival — the packaging and medication should feel cold when opened",
          ]}
        />
        <GuideParagraph>
          The packaging should also be sealed, tamper evident, and include
          your prescription details and patient information leaflet. If any of
          these elements are absent, contact the pharmacy before using the
          medication.
        </GuideParagraph>
        <GuideCallout variant="tip">
          For full details on how we verify pharmacy delivery and storage
          compliance, see our{" "}
          <IL href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
            pharmacy verification guide
          </IL>
          . We check cold-chain handling for every provider listed on{" "}
          <IL href="/">Health Wise</IL>.
        </GuideCallout>
      </GuideSection>

      {/* ── Section 3 ── */}
      <GuideSection id="if-warm" heading="What If It Gets Warm?">
        <GuideParagraph>
          Temperature excursions during delivery are rare when using a
          compliant pharmacy, but they do occur. The{" "}
          <EL href="https://www.medicines.org.uk/emc/product/15481">
            Mounjaro SmPC
          </EL>{" "}
          provides clear guidance on what to do:
        </GuideParagraph>
        <GuideTempZones
          zones={[
            {
              range: "2–8°C",
              label: "Refrigerated — fully safe for use",
              status: "safe",
            },
            {
              range: "8–30°C",
              label: "Room temperature — usable within time limit (check leaflet)",
              status: "caution",
            },
            {
              range: "Above 30°C",
              label: "Unsafe — do not use, contact pharmacy",
              status: "danger",
            },
          ]}
        />
        <GuideParagraph>
          If the medication has been exposed to temperatures above 30°C, do
          not use it. Contact your pharmacy to report the issue and request a
          replacement. Keep the packaging as evidence of the temperature
          breach.
         For more context, explore our resources on <IL href="/blog/best-weight-loss-treatment-in-manchester" className="font-medium text-emerald-600 hover:underline">treatment in Manchester</IL>.</GuideParagraph>
      </GuideSection>

      {/* ── Section 4 ── */}
      <GuideSection id="warning-signs" heading="Warning Signs">
        <GuideParagraph>
          Be cautious if your delivery shows any of the following signs of
          inadequate cold chain handling:
        </GuideParagraph>
        <GuideBulletListRich
          items={[
            "No insulation — the package is a standard cardboard box or envelope with no thermal lining.",
            "Warm packaging on arrival — the contents should feel cold, not room temperature.",
            "Melted or absent ice packs — indicates the cold-chain may have failed during transit.",
            <>
              Poor or absent packaging — if the pen is not in its original box,
              or the patient information leaflet is missing, contact the
              pharmacy before use.
            </>,
            <>
              No GPhC registration displayed — legitimate pharmacies are
              legally required to show their registration. Verify at the{" "}
              <EL href="https://www.pharmacyregulation.org/registers/pharmacy">
                GPhC register
              </EL>
              .
            </>,
          ]}
        />
        <GuideParagraph>
          These warning signs are also indicators of an unregistered or
          unverified supplier. Our{" "}
          <IL href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards">
            pharmacy verification guide
          </IL>{" "}
          explains the checks that distinguish compliant providers from
          unsafe ones. All pharmacies listed on{" "}
          <IL href="/">Health Wise</IL> are verified against these standards
          before listing.
         For more context, explore our resources on <IL href="/helpful-guides/mounjaro-weight-loss-injection-uk" className="font-medium text-emerald-600 hover:underline">Mounjaro weight loss treatment UK</IL>.</GuideParagraph>
      </GuideSection>

      {/* ── Key Takeaways ── */}
      <GuideKeyTakeaways
        items={[
          "Mounjaro must be stored at 2°C–8°C (refrigerated). Do not freeze.",
          "Safe delivery includes insulated packaging, ice packs, and a cool temperature on arrival.",
          "If Mounjaro remained below 30°C, it can be used within the time limit specified in the patient information leaflet.",
          "If it was exposed to temperatures above 30°C, do not use it—contact the pharmacy for a replacement.",
          "Absent insulation, warm packaging, or missing documentation are red flags that should prompt a call to the pharmacy before use.",
        ]}
      />

      {/* ── Related Guides ── */}
      <GuideRelatedGuides guides={RELATED_GUIDES} />

      {/* ── References ── */}
      <GuideReferences items={REFERENCES} />

      {/* ── Disclaimer ── */}
      <GuideDisclaimer>
        This guide is for informational purposes only. Always consult the
        patient information leaflet supplied with your{" "}
        <IL href="/what-is-mounjaro">Mounjaro</IL> for specific storage and
        handling instructions. If you have any doubt about the safety of your
        medication, contact your prescribing pharmacy or clinician before use.
      </GuideDisclaimer>

      {/* ── FAQ ── */}
      <GuideFaq items={FAQ_ITEMS} />
    </GuideLayout>
  );
}
