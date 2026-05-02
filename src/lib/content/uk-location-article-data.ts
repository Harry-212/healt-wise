import type { UkNation, UkWeightLossLocation } from "@/lib/data/uk-weight-loss-locations";

/** `a` may include markdown links `[label](/path)` for on-page rendering; JSON-LD uses plain text. */
export type FaqItem = { q: string; a: string };

export function faqAnswerPlain(markdown: string): string {
  return markdown
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

/** First sentence of place snapshot — hook for SERP without recycling the shared health paragraph opening. */
export function placeSnapshotLeadingSentence(snapshot: string): string {
  const trimmed = snapshot.replace(/\s+/g, " ").trim();
  const match = trimmed.match(/^.{1,350}?[.!?](?=\s|$)/);
  if (match) return match[0].trim();
  return trimmed.length > 120 ? `${trimmed.slice(0, 117)}…` : trimmed;
}

/** SERP snippet: lead with place-specific hook, then standard disclaimer tail. */
export function buildUkLocationMetaDescription(loc: UkWeightLossLocation): string {
  const hook = placeSnapshotLeadingSentence(loc.placeSnapshot);
  const suffix = ` ${loc.name} (${loc.nation}): NHS, private & online GLP-1 access—not medical advice.`;
  const out = `${hook}${suffix}`;
  return out.length > 158 ? `${out.slice(0, 155)}…` : out;
}

export function nationCareContext(nation: UkNation): {
  nhsFrame: string;
  postcodeNote: string;
} {
  switch (nation) {
    case "Northern Ireland":
      return {
        nhsFrame:
          "HSC Northern Ireland pathways can look quite different from NHS England on paper, even when the underlying medicines are the same class.",
        postcodeNote:
          "Postcode checks still matter for courier cold-chain, especially if you live between smaller towns.",
      };
    case "Scotland":
      return {
        nhsFrame:
          "NHS Scotland routes often run through health boards rather than English-style ICBs; waiting lists and eligibility wording can shift between boards.",
        postcodeNote:
          "Rural postcodes around Scotland sometimes narrow delivery windows for refrigerated pens.",
      };
    case "Wales":
      return {
        nhsFrame:
          "Welsh health boards publish their own obesity service arrangements; what your GP in Wales can offer this month may not mirror a cousin’s surgery in Leeds.",
        postcodeNote:
          "Coastal and valley postcodes can still be served by national couriers, but cut-off times vary.",
      };
    default:
      return {
        nhsFrame:
          "In England, much of the gatekeeping sits with GP practices and integrated care boards (ICBs), so two people with similar BMIs might still hear different answers depending on postcode.",
        postcodeNote:
          "Same-day courier maps rarely follow council borders; a practice just outside {name} might still count as “local” for delivery.",
      };
  }
}

export function buildLocationFaq(loc: UkWeightLossLocation): FaqItem[] {
  const { name, nation } = loc;
  const icbOrBoard =
    nation === "England"
      ? "your integrated care board (ICB)"
      : nation === "Northern Ireland"
        ? "HSC structures"
        : "your health board";

  return [
    {
      q: `What counts as the “best” weight loss treatment if you live in ${name}?`,
      a: `There isn’t a single winner on a chart. For some people in ${name}, the strongest option will still be an NHS dietitian-led programme with no injection at all. For others—after assessment—GLP-1-class medicines may become appropriate: tirzepatide ([Mounjaro](/what-is-mounjaro)), semaglutide ([Wegovy](/what-is-wegovy)), or liraglutide ([Saxenda](/what-is-saxenda)), but only where monitoring exists. Compare indicative monthly totals on our [Mounjaro price comparison](/mounjaro-price-comparison), [Wegovy price comparison](/wegovy-price-comparison), and [Saxenda price comparison](/saxenda-price-comparison). “Best” should probably mean “safest fit for you this year,” not “trendiest molecule.”`,
    },
    {
      q: `Could I get Mounjaro, Wegovy, or Saxenda without going through my GP in ${name}?`,
      a: `You might, through a private prescriber or a GPhC-registered online clinic, if you meet their clinical criteria—that can apply to [Mounjaro](/what-is-mounjaro), [Wegovy](/what-is-wegovy), or [Saxenda](/what-is-saxenda) where appropriate. That route can be faster on paper; it can also leave your GP surgery out of the loop unless you explicitly ask for shared care, which many practices will not agree to. On the NHS side, access often stays narrower than social media suggests, and ${icbOrBoard} may apply its own criteria on top of national guidance. If you are weighing costs, start with our [Mounjaro price comparison](/mounjaro-price-comparison), [Wegovy price comparison](/wegovy-price-comparison), and [Saxenda price comparison](/saxenda-price-comparison).`,
    },
    {
      q: `Is NHS weight management in ${nation} actually realistic for ${name} residents?`,
      a: `It can be, but it isn’t guaranteed. Services might be oversubscribed, or they might insist on documented lifestyle steps first. If you are told to wait, that delay doesn’t automatically mean private treatment is “necessary”—it may simply reflect capacity. You should be able to ask what the next milestone is, in writing if you want clarity.`,
    },
    {
      q: `What would I need to check before paying for an online clinic that ships to ${name}?`,
      a: `At minimum: the prescriber’s professional registration, the pharmacy’s GPhC registration, a clear titration plan, and a written policy for nausea, dehydration, or missed doses. You cannot safely infer quality from Instagram ads alone. If a website won’t name its superintendent pharmacist, that alone might be reason to pause.`,
    },
    {
      q: `Why do search results around ${name} mention “cheap” GLP-1s?`,
      a: `Price is visible; clinical risk is harder to google. A low headline fee might exclude follow-up, or it might bundle blood tests you do not need. We tend to treat “cheap” as a signal to read the small print, not as proof of value. Comparing monthly totals—including repeats and delivery—usually paints a fairer picture for households in ${name}; try our [Mounjaro price comparison](/mounjaro-price-comparison), [Wegovy price comparison](/wegovy-price-comparison), and [Saxenda price comparison](/saxenda-price-comparison).`,
    },
    {
      q: `Where should scepticism go—not cynicism, just healthy doubt?`,
      a: `Toward any claim that a single injection removes the need for food planning forever, or that BMI thresholds are “flexible” without documentation. UK regulators have repeatedly warned consumers about unlicensed products; if a seller cannot show an MHRA-style UK supply chain for a prescription-only medicine, you should probably walk away regardless of how local they claim to be to ${name}.`,
    },
  ];
}

export const UK_LOCATION_SOURCES: { label: string; href: string; note: string }[] = [
  {
    label: "NHS — healthy weight overview",
    href: "https://www.nhs.uk/live-well/healthy-weight/",
    note: "Public-facing lifestyle and weight management context.",
  },
  {
    label: "NICE NG246 — overweight and obesity management",
    href: "https://www.nice.org.uk/guidance/ng246",
    note: "National guidance that may influence local formularies; not a substitute for your clinician.",
  },
  {
    label: "MHRA",
    href: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency",
    note: "UK medicines regulator; useful background on alerts and licensed products.",
  },
  {
    label: "General Pharmaceutical Council (GPhC)",
    href: "https://www.pharmacyregulation.org/",
    note: "Use their register tools to confirm a UK pharmacy before you pay.",
  },
];

export function locationFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: faqAnswerPlain(a) },
    })),
  };
}
