import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import CompareHereLink from "@/components/ui/CompareHereLink";
import AsdaOnlineDoctorContent from "@/components/pharmacies/content/AsdaOnlineDoctorContent";
import AshcroftPharmacyContent from "@/components/pharmacies/content/AshcroftPharmacyContent";
import AypHealthcareContent from "@/components/pharmacies/content/AypHealthcareContent";
import BoltPharmacyContent from "@/components/pharmacies/content/BoltPharmacyContent";
import BootsOnlineDoctorContent from "@/components/pharmacies/content/BootsOnlineDoctorContent";
import Click2PharmacyMounjaroContent from "@/components/pharmacies/content/Click2PharmacyMounjaroContent";
import CloudPharmacyContent from "@/components/pharmacies/content/CloudPharmacyContent";
import CuratePharmacyContent from "@/components/pharmacies/content/CuratePharmacyContent";
import CurelyPharmacyContent from "@/components/pharmacies/content/CurelyPharmacyContent";
import CuvaHealthContent from "@/components/pharmacies/content/CuvaHealthContent";
import DotorPharmacyContent from "@/components/pharmacies/content/DotorPharmacyContent";
import DrWeightmansContent from "@/components/pharmacies/content/DrWeightmansContent";
import EnvigorePharmacyContent from "@/components/pharmacies/content/EnvigorePharmacyContent";
import FarmeciPharmacyContent from "@/components/pharmacies/content/FarmeciPharmacyContent";
import FyldeClinicPharmacyContent from "@/components/pharmacies/content/FyldeClinicPharmacyContent";
import GenmedsPharmacyContent from "@/components/pharmacies/content/GenmedsPharmacyContent";
import GetADripPharmacyContent from "@/components/pharmacies/content/GetADripPharmacyContent";
import GetWeightLossPharmacyContent from "@/components/pharmacies/content/GetWeightLossPharmacyContent";
import GoodBodyClinicPharmacyContent from "@/components/pharmacies/content/GoodBodyClinicPharmacyContent";
import HappyPharmacyContent from "@/components/pharmacies/content/HappyPharmacyContent";
import HeySlimPharmacyContent from "@/components/pharmacies/content/HeySlimPharmacyContent";
import {
  getWegovyCompareProviderById,
  pharmacyProfileHref,
  startingPrice as wegovyStartingPrice,
  WEGOVY_DOSE_KEYS,
  WEGOVY_UK_COMPARE_LAST_UPDATED,
  WEGOVY_UK_COMPARE_PROVIDERS,
} from "@/lib/data/wegovy-uk-compare-providers";
import {
  getMounjaroCompareProviderById,
  startingPrice as mounjaroStartingPrice,
  MOUNJARO_DOSE_KEYS,
  MOUNJARO_UK_COMPARE_LAST_UPDATED,
  MOUNJARO_UK_COMPARE_PROVIDERS,
} from "@/lib/data/mounjaro-uk-compare-providers";
import {
  getSaxendaCompareProviderById,
  SAXENDA_COMPARE_DOSE_KEYS,
  SAXENDA_PACK_KEYS,
  SAXENDA_UK_COMPARE_LAST_UPDATED,
  SAXENDA_UK_COMPARE_PROVIDERS,
} from "@/lib/data/saxenda-uk-compare-providers";
import { TrustpilotStarIcon } from "@/components/compare/TrustpilotRatingPresentation";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  asdaPharmacyLandingJsonGraph,
  ashcroftPharmacyLandingJsonGraph,
  aypPharmacyLandingJsonGraph,
  boltPharmacyLandingJsonGraph,
  bootsPharmacyLandingJsonGraph,
  click2pharmacyLandingJsonGraph,
  cloudPharmacyLandingJsonGraph,
  curatePharmacyLandingJsonGraph,
  curelyPharmacyLandingJsonGraph,
  cuvaHealthPharmacyLandingJsonGraph,
  dotorPharmacyLandingJsonGraph,
  drWeightmansPharmacyLandingJsonGraph,
  envigorePharmacyLandingJsonGraph,
  farmeciPharmacyLandingJsonGraph,
  fyldeClinicPharmacyLandingJsonGraph,
  genmedsPharmacyLandingJsonGraph,
  getADripPharmacyLandingJsonGraph,
  getWeightLossPharmacyLandingJsonGraph,
  goodBodyClinicPharmacyLandingJsonGraph,
  happyPharmacyLandingJsonGraph,
  heySlimPharmacyLandingJsonGraph,
  pharmacyProfileJsonGraph,
} from "@/lib/seo/pharmacy-landing-json-ld";

type Props = { params: Promise<{ slug: string }> };

/** Slugs with custom landing pages not (yet) in compare tables. */
const EXTRA_PHARMACY_LANDING_SLUGS: string[] = [
  "ayp-healthcare",
  "bolt-pharmacy",
  "farmeci",
  "fylde-clinic",
  "genmeds",
  "get-weight-loss",
  "getadrip",
  "goodbody-clinic",
  "happy-pharmacy",
  "hey-slim",
];

function allPharmacySlugs(): string[] {
  const ids = new Set<string>();
  for (const p of WEGOVY_UK_COMPARE_PROVIDERS) ids.add(p.id);
  for (const p of MOUNJARO_UK_COMPARE_PROVIDERS) ids.add(p.id);
  for (const p of SAXENDA_UK_COMPARE_PROVIDERS) ids.add(p.id);
  for (const s of EXTRA_PHARMACY_LANDING_SLUGS) ids.add(s);
  return [...ids];
}

export function generateStaticParams() {
  return allPharmacySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const canonical = `${siteOrigin()}/pharmacies/${slug}`;

  if (slug === "ayp-healthcare") {
    const title =
      "AYP Healthcare Weight Management Review — Wegovy & Mounjaro (UK)";
    const description =
      "AYP Healthcare weight management: online consultation, clinical assessment, home delivery, pricing context and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "bolt-pharmacy") {
    const title =
      "Bolt Pharmacy weight loss (UK) — Wegovy, Mounjaro, online review";
    const description =
      "Bolt Pharmacy: online weight loss, Wegovy, Mounjaro and Saxenda context, delivery, costs and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "boots-online-doctor") {
    const title =
      "Boots Online Doctor Weight Loss Review — Wegovy support (UK)";
    const description =
      "Boots Online Doctor: online consultation, clinical review, delivery or pharmacy collection, pricing context and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "click2pharmacy") {
    const title =
      "Click2Pharmacy Mounjaro review (UK) — buying Mounjaro injections online";
    const description =
      "Click2Pharmacy: Mounjaro-focused online consultation, prescription approval, delivery notes, pricing context and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "cloud-pharmacy") {
    const title =
      "Cloud Pharmacy weight loss (UK) — Wegovy, Mounjaro, online review";
    const description =
      "Cloud Pharmacy: online consultation, Wegovy and Mounjaro context, delivery and temperature handling, pricing context and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "curate") {
    const title = "Curate weight loss (UK) — Wegovy, Saxenda, online review";
    const description =
      "Curate: online consultation, Wegovy and Saxenda context, delivery or collection, pricing context and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "curely") {
    const title =
      "Curely weight loss (UK) — Wegovy, Mounjaro, online review";
    const description =
      "Curely: pharmacist-led consultation, regulated supply, tracked delivery options, pricing context and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "cuva-health") {
    const title =
      "Cuva Health weight loss (UK) — Mounjaro, Wegovy, clinician-led support";
    const description =
      "Cuva Health: clinician-led review, cold-chain delivery, pricing context and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "dotor") {
    const title =
      "Dotor weight loss (UK) — Mounjaro, Wegovy, online review";
    const description =
      "Dotor: online assessment, prescriber review, in-house dispensing, DPD tracked delivery options, pricing context and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "dr-weightmans") {
    const title =
      "Dr Weightmans weight loss (UK) — clinically supported products, delivery & review";
    const description =
      "Dr Weightmans: clinically guided weight management overview, ordering flow, delivery expectations, cost components and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "envigore") {
    const title =
      "Envigore weight loss (UK) — Wegovy, Mounjaro, clinician-led support";
    const description =
      "Envigore: online assessment, pharmacist and prescriber review, programme-style support, cold-chain delivery, pricing context and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "farmeci") {
    const title =
      "Farmeci Weight Loss Treatment Review — Wegovy, Mounjaro, UK clinician support";
    const description =
      "Farmeci: My Health Stop Ltd platform, partner pharmacies, consultations, cold-chain delivery, pricing from ~£92/dose and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "fylde-clinic") {
    const title =
      "Fylde Clinic Weight Loss Treatment Review — Wegovy, Mounjaro (UK)";
    const description =
      "Fylde Clinic: clinician-led online pharmacy, Royal Mail Tracked 24, 2–8°C packaging, Wegovy from ~£99, Mounjaro from ~£134 and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "genmeds") {
    const title =
      "Genmeds Weight Loss Review — Wegovy & Mounjaro, UK registered pharmacy";
    const description =
      "Genmeds: pharmacy-led Wegovy and Mounjaro access, listed from ~£129.99 / ~£179.99, accessories, discreet delivery and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "get-weight-loss") {
    const title =
      "Get Weight Loss Review — Wegovy, medically supervised, UK delivery";
    const description =
      "Get Weight Loss: digital clinical pathway, tracked delivery, ~£179.99/pen Wegovy example, no mandatory subscription, optional blood tests and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "getadrip") {
    const title =
      "GetADrip Weight Loss Review — Wegovy, Mounjaro, UK programme";
    const description =
      "GetADrip: programme-style GLP-1 access, app support, DPD cold-chain delivery, ~£109 / ~£159 monthly-style pricing and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "goodbody-clinic") {
    const title =
      "GoodBody Clinic Weight Loss Review — Wegovy, UK medical support";
    const description =
      "GoodBody Clinic: programme-style Wegovy access, nurse and doctor oversight, subscriptions, delivery often included, ~£129/mo examples and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "happy-pharmacy") {
    const title =
      "Happy Pharmacy Weight Loss Review — Wegovy, Mounjaro, GPhC (UK)";
    const description =
      "Happy Pharmacy: GPhC-regulated Wegovy and Mounjaro from ~£89.99 / ~£139.99, Orlistat/Alli, discreet tracked delivery and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "hey-slim") {
    const title =
      "Hey Slim Weight Loss Review — Wegovy, Mounjaro, clinician-led (UK)";
    const description =
      "Hey Slim: doctor-led programme, GLP-1 access, delivery often 1–2 days and included (stated), dose-dependent pricing and FAQs. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  const w = getWegovyCompareProviderById(slug);
  const m = getMounjaroCompareProviderById(slug);
  const s = getSaxendaCompareProviderById(slug);
  const name = w?.name ?? m?.name ?? s?.name;
  if (!name) return { title: "Pharmacy" };

  const meds: string[] = [];
  if (w) meds.push("Wegovy");
  if (m) meds.push("Mounjaro");
  if (s) meds.push("Saxenda");

  if (slug === "asda-online-doctor") {
    const title =
      "Asda Online Doctor Weight Loss Treatment Review — Wegovy & Mounjaro (UK)";
    const description =
      "Asda Online Doctor: how online consultation and prescribing works, treatment options (Wegovy, Mounjaro, Saxenda, Orlistat), delivery and pricing context. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  if (slug === "ashcroft-pharmacy") {
    const title =
      "Ashcroft Pharmacy Weight Loss Treatment Review — Wegovy & Mounjaro (UK)";
    const description =
      "Ashcroft Pharmacy: online consultation, treatment range, delivery expectations, safety notes and cost context. Information from Health Wise — not medical advice.";
    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        type: "website",
        url: canonical,
        title,
        description,
      },
    };
  }

  return {
    title: `${name} — ${meds.join(" & ")} UK prices (2026)`,
    description: `Independent snapshot: ${name} — illustrative ${meds.join(" and ")} pen prices and delivery notes on Health Wise.`,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title: `${name} — UK pharmacy`,
      description: `Provider profile and illustrative pricing for ${name}.`,
    },
  };
}

export default async function PharmacyProfilePage({ params }: Props) {
  const { slug } = await params;

  if (slug === "ayp-healthcare") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aypPharmacyLandingJsonGraph()),
          }}
        />
        <AypHealthcareContent />
      </>
    );
  }

  if (slug === "bolt-pharmacy") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(boltPharmacyLandingJsonGraph()),
          }}
        />
        <BoltPharmacyContent />
      </>
    );
  }

  if (slug === "boots-online-doctor") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(bootsPharmacyLandingJsonGraph()),
          }}
        />
        <BootsOnlineDoctorContent />
      </>
    );
  }

  if (slug === "click2pharmacy") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(click2pharmacyLandingJsonGraph()),
          }}
        />
        <Click2PharmacyMounjaroContent />
      </>
    );
  }

  if (slug === "cloud-pharmacy") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(cloudPharmacyLandingJsonGraph()),
          }}
        />
        <CloudPharmacyContent />
      </>
    );
  }

  if (slug === "curate") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(curatePharmacyLandingJsonGraph()),
          }}
        />
        <CuratePharmacyContent />
      </>
    );
  }

  if (slug === "curely") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(curelyPharmacyLandingJsonGraph()),
          }}
        />
        <CurelyPharmacyContent />
      </>
    );
  }

  if (slug === "cuva-health") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(cuvaHealthPharmacyLandingJsonGraph()),
          }}
        />
        <CuvaHealthContent />
      </>
    );
  }

  if (slug === "dotor") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(dotorPharmacyLandingJsonGraph()),
          }}
        />
        <DotorPharmacyContent />
      </>
    );
  }

  if (slug === "dr-weightmans") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(drWeightmansPharmacyLandingJsonGraph()),
          }}
        />
        <DrWeightmansContent />
      </>
    );
  }

  if (slug === "envigore") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(envigorePharmacyLandingJsonGraph()),
          }}
        />
        <EnvigorePharmacyContent />
      </>
    );
  }

  if (slug === "farmeci") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(farmeciPharmacyLandingJsonGraph()),
          }}
        />
        <FarmeciPharmacyContent />
      </>
    );
  }

  if (slug === "fylde-clinic") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(fyldeClinicPharmacyLandingJsonGraph()),
          }}
        />
        <FyldeClinicPharmacyContent />
      </>
    );
  }

  if (slug === "genmeds") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(genmedsPharmacyLandingJsonGraph()),
          }}
        />
        <GenmedsPharmacyContent />
      </>
    );
  }

  if (slug === "get-weight-loss") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWeightLossPharmacyLandingJsonGraph()),
          }}
        />
        <GetWeightLossPharmacyContent />
      </>
    );
  }

  if (slug === "getadrip") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getADripPharmacyLandingJsonGraph()),
          }}
        />
        <GetADripPharmacyContent />
      </>
    );
  }

  if (slug === "goodbody-clinic") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(goodBodyClinicPharmacyLandingJsonGraph()),
          }}
        />
        <GoodBodyClinicPharmacyContent />
      </>
    );
  }

  if (slug === "happy-pharmacy") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(happyPharmacyLandingJsonGraph()),
          }}
        />
        <HappyPharmacyContent />
      </>
    );
  }

  if (slug === "hey-slim") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(heySlimPharmacyLandingJsonGraph()),
          }}
        />
        <HeySlimPharmacyContent />
      </>
    );
  }

  const w = getWegovyCompareProviderById(slug);
  const m = getMounjaroCompareProviderById(slug);
  const s = getSaxendaCompareProviderById(slug);
  if (!w && !m && !s) notFound();

  const displayName = w?.name ?? m?.name ?? s!.name;

  if (slug === "asda-online-doctor") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(asdaPharmacyLandingJsonGraph()),
          }}
        />
        <AsdaOnlineDoctorContent />
      </>
    );
  }

  if (slug === "ashcroft-pharmacy") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ashcroftPharmacyLandingJsonGraph()),
          }}
        />
        <AshcroftPharmacyContent />
      </>
    );
  }

  const meds: string[] = [];
  if (w) meds.push("Wegovy");
  if (m) meds.push("Mounjaro");
  if (s) meds.push("Saxenda");
  const profileTitle = `${displayName} — ${meds.join(" & ")} UK prices (2026)`;
  const profileDescription = `Independent snapshot: ${displayName} — illustrative ${meds.join(" and ")} pen prices and delivery notes on Health Wise.`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            pharmacyProfileJsonGraph({
              slug,
              name: displayName,
              title: profileTitle,
              description: profileDescription,
            }),
          ),
        }}
      />
    <article className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
      <div className="flex flex-col gap-2 border-b border-slate-200 pb-6">
        {w && (
          <Link
            href="/wegovy-price-comparison"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-800 underline-offset-2 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to Wegovy price comparison
          </Link>
        )}
        {m && (
          <Link
            href="/mounjaro-price-comparison"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-800 underline-offset-2 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to Mounjaro price comparison
          </Link>
        )}
        {s && (
          <Link
            href="/saxenda-price-comparison"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-800 underline-offset-2 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to Saxenda price comparison
          </Link>
        )}
      </div>

      <header className="mt-8 border-b border-slate-200 pb-8">
        <p className="text-sm font-medium text-slate-500">UK pharmacy profile</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          {displayName}
        </h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Illustrative pen prices from our comparison snapshots for{" "}
          <strong className="font-semibold text-slate-800">{displayName}</strong>
          . Always confirm live pricing and prescribing rules on the provider’s
          own site.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {w && (
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900">
              Wegovy from £{wegovyStartingPrice(w)}
            </span>
          )}
          {m && (
            <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-900">
              Mounjaro from £{mounjaroStartingPrice(m)}
            </span>
          )}
          {s && (
            <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-900">
              Saxenda from £{s.packs["1"].packPrice.toFixed(2)} (1 pen)
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            <TrustpilotStarIcon className="h-3.5 w-3.5 shrink-0" />
            <span>Trustpilot {(w ?? m ?? s)!.rating.toFixed(1)}</span>
          </span>
        </div>
      </header>

      {w && (
        <section className="py-10" aria-labelledby="wegovy-prices-heading">
          <h2
            id="wegovy-prices-heading"
            className="text-xl font-bold text-slate-900"
          >
            Wegovy pen prices (illustrative)
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Per-strength figures — {WEGOVY_UK_COMPARE_LAST_UPDATED} snapshot.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <th className="px-4 py-3">Strength</th>
                  <th className="px-4 py-3">Price</th>
                </tr>
              </thead>
              <tbody>
                {WEGOVY_DOSE_KEYS.map((k) => (
                  <tr key={k} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 py-3 text-slate-800">{k}</td>
                    <td className="px-4 py-3 tabular-nums font-medium text-slate-900">
                      £{w.prices[k]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Delivery note: {w.deliveryNote} · Updated {w.updatedLabel}
          </p>
        </section>
      )}

      {m && (
        <section className="border-t border-slate-200 py-10" aria-labelledby="mounjaro-prices-heading">
          <h2
            id="mounjaro-prices-heading"
            className="text-xl font-bold text-slate-900"
          >
            Mounjaro pen prices (illustrative)
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Per-strength figures — {MOUNJARO_UK_COMPARE_LAST_UPDATED} snapshot.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <th className="px-4 py-3">Strength</th>
                  <th className="px-4 py-3">Price</th>
                </tr>
              </thead>
              <tbody>
                {MOUNJARO_DOSE_KEYS.map((k) => (
                  <tr key={k} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 py-3 text-slate-800">{k}</td>
                    <td className="px-4 py-3 tabular-nums font-medium text-slate-900">
                      £{m.prices[k]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Delivery note: {m.deliveryNote} · Updated {m.updatedLabel}
          </p>
        </section>
      )}

      {s && (
        <section className="border-t border-slate-200 py-10" aria-labelledby="saxenda-prices-heading">
          <h2
            id="saxenda-prices-heading"
            className="text-xl font-bold text-slate-900"
          >
            Saxenda pack prices (illustrative)
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            1 / 3 / 5 pens — {SAXENDA_UK_COMPARE_LAST_UPDATED} snapshot.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <th className="px-4 py-3">Pack</th>
                  <th className="px-4 py-3">Pack price</th>
                  <th className="px-4 py-3">£/mg</th>
                  <th className="px-4 py-3">Repeat</th>
                </tr>
              </thead>
              <tbody>
                {SAXENDA_PACK_KEYS.map((k) => {
                  const row = s.packs[k];
                  const label =
                    k === "1" ? "1 pen" : k === "3" ? "3 pens" : "5 pens";
                  return (
                    <tr key={k} className="border-b border-slate-100 last:border-0">
                      <td className="px-4 py-3 text-slate-800">{label}</td>
                      <td className="px-4 py-3 tabular-nums font-medium text-slate-900">
                        £{row.packPrice.toFixed(2)}
                      </td>
                      <td className="px-4 py-3 tabular-nums text-slate-700">
                        £{row.pricePerMg.toFixed(2)}/mg
                      </td>
                      <td className="px-4 py-3 tabular-nums text-slate-800">
                        £{row.repeatPrice.toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Delivery: {s.packs["1"].deliverySummary} · GPhC ref:{" "}
            {s.packs["1"].gphcRef} · Updated {s.updatedLabel}
          </p>

          <h3 className="mt-10 text-lg font-bold text-slate-900">
            Daily dose steps (illustrative)
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Order-style prices at each titration — same snapshot as the compare
            table.
          </p>
          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <th className="px-4 py-3">Daily dose</th>
                  <th className="px-4 py-3">Price</th>
                </tr>
              </thead>
              <tbody>
                {SAXENDA_COMPARE_DOSE_KEYS.map((k) => (
                  <tr key={k} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 py-3 text-slate-800">{k} mg</td>
                    <td className="px-4 py-3 tabular-nums font-medium text-slate-900">
                      £{s.doses[k]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <section className="border-t border-slate-200 py-10" aria-labelledby="ops-heading">
        <h2 id="ops-heading" className="text-xl font-bold text-slate-900">
          Consultation &amp; GPhC
        </h2>
        <p className="mt-4 text-sm text-slate-600">
          Private routes typically require an online clinical assessment before
          supply. Verify the supplying pharmacy on the{" "}
          <a
            href="https://www.pharmacyregulation.org/registers/pharmacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-slate-800 underline-offset-2 hover:underline"
          >
            GPhC register
          </a>
          .
        </p>
      </section>

      <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-6 text-slate-600">
        <p className="text-sm font-semibold text-slate-800">Profile URL</p>
        <p className="mt-2 text-sm leading-relaxed">
          Stable route:{" "}
          <code className="rounded bg-white px-1.5 py-0.5 text-xs text-slate-800">
            {pharmacyProfileHref(slug)}
          </code>
        </p>
      </section>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {w && (
          <CompareHereLink href="/wegovy-price-comparison#wegovy-compare-table" />
        )}
        {m && (
          <CompareHereLink href="/mounjaro-price-comparison#mounjaro-compare-table" />
        )}
        {s && (
          <CompareHereLink href="/saxenda-price-comparison#saxenda-compare-table" />
        )}
        <Link
          href="/helpful-guides"
          className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-300"
        >
          Check eligibility
        </Link>
      </div>
    </article>
    </>
  );
}
