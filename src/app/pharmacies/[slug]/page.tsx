import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AsdaOnlineDoctorContent from "@/components/pharmacies/content/AsdaOnlineDoctorContent";
import AshcroftPharmacyContent from "@/components/pharmacies/content/AshcroftPharmacyContent";
import AypHealthcareContent from "@/components/pharmacies/content/AypHealthcareContent";
import BoltPharmacyContent from "@/components/pharmacies/content/BoltPharmacyContent";
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
  pharmacyProfileJsonGraph,
} from "@/lib/seo/pharmacy-landing-json-ld";

type Props = { params: Promise<{ slug: string }> };

/** Slugs with custom landing pages not (yet) in compare tables. */
const EXTRA_PHARMACY_LANDING_SLUGS: string[] = [
  "ayp-healthcare",
  "bolt-pharmacy",
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
      "AYP Healthcare weight management (UK) — Wegovy, Mounjaro, online review";
    const description =
      "AYP Healthcare: online weight management, Wegovy and Mounjaro context, delivery, costs and FAQs. Information from Health Wise — not medical advice.";
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
      "Asda Online Doctor weight loss (UK) — Wegovy, Mounjaro, Saxenda guide";
    const description =
      "How Asda Online Doctor works: online consultation, UK prescribers, Wegovy and Mounjaro pricing context, delivery and FAQs. Information from Health Wise — not medical advice.";
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
      "Ashcroft Pharmacy weight loss (UK) — Wegovy, Mounjaro, review & guide";
    const description =
      "Ashcroft Pharmacy online weight loss: consultation, range of treatments, delivery, safety and cost context. Information from Health Wise — not medical advice.";
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
          <Link
            href="/wegovy-price-comparison#wegovy-compare-table"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-teal-700"
          >
            All Wegovy providers
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        )}
        {m && (
          <Link
            href="/mounjaro-price-comparison#mounjaro-compare-table"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-violet-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-violet-700"
          >
            All Mounjaro providers
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        )}
        {s && (
          <Link
            href="/saxenda-price-comparison#saxenda-compare-table"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-sky-700"
          >
            All Saxenda providers
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
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
