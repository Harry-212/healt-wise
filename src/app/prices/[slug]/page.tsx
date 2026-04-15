import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CheapestOptionsUkPage from "@/components/prices/CheapestOptionsUkPage";
import {
  cheapestOptionsUkJsonLd,
  cheapestOptionsUkMetadata,
} from "@/lib/seo/cheapest-options-page-seo";
import { buildSeoMetadata } from "@/lib/seo/metadata";
import { PRICE_SLUGS } from "@/lib/routes/price-slugs";
import ComparisonTable from "@/components/comparison/ComparisonTable";
import { HOME_PREVIEW_PROVIDERS } from "@/lib/data/home-preview-providers";
import TrustSignals from "@/components/trust/TrustSignals";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(PRICE_SLUGS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cfg = PRICE_SLUGS[slug];
  if (!cfg) return {};
  if (slug === "cheapest-options-uk") return cheapestOptionsUkMetadata();
  return buildSeoMetadata(cfg.keyword, `/prices/${slug}`);
}

export default async function PricePage({ params }: Props) {
  const { slug } = await params;
  const cfg = PRICE_SLUGS[slug];
  if (!cfg) notFound();

  if (slug === "cheapest-options-uk") {
    const jsonLd = cheapestOptionsUkJsonLd();
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CheapestOptionsUkPage />
      </>
    );
  }

  return (
    <article className="mx-auto min-w-0 max-w-4xl px-4 pb-20 pt-8 sm:px-5 sm:py-10 md:px-6 md:py-12">
      <p className="text-sm font-medium text-brand-primary">Prices</p>
      <h1 className="mt-2 text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
        {cfg.keyword}
      </h1>
      <p className="mt-4 text-sm text-slate-600 sm:text-base">
        Compare {cfg.keyword.toLowerCase()} figures in the UK. Figures are
        illustrative snapshots—always confirm with the pharmacy before you pay.
      </p>

      <TrustSignals className="mt-8" />

      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Price overview</h2>
        <p className="text-slate-600">
          Starting-pack and maintenance pricing diverge by dose and provider. Use{" "}
          <Link href="/methodology" className="text-brand-primary underline">
            our methodology
          </Link>{" "}
          to understand what we include in each line.
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">
          Price by dosage &amp; monthly cost
        </h2>
        <p className="text-slate-600">
          Monthly estimates depend on titration schedules. When we show a monthly
          column, it is an illustrative 4-week equivalent unless otherwise
          stated on the provider page.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Cheapest providers &amp; comparison table
        </h2>
        <p className="text-sm text-slate-600">
          Filter by medication and sort by price to shortlist options, then
          verify GPhC registration and prescribing routes.
        </p>
        <ComparisonTable providers={HOME_PREVIEW_PROVIDERS} />
      </section>
    </article>
  );
}
