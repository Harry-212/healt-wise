import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildSeoMetadata } from "@/lib/seo/metadata";
import { COMPARE_SLUGS } from "@/lib/routes/compare-slugs";
import { internalLinksFor } from "@/lib/internal-linking";
import InternalLinks from "@/components/content/InternalLinks";
import ComparisonTable from "@/components/comparison/ComparisonTable";
import { HOME_PREVIEW_PROVIDERS } from "@/lib/data/home-preview-providers";
import TrustSignals from "@/components/trust/TrustSignals";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(COMPARE_SLUGS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cfg = COMPARE_SLUGS[slug];
  if (!cfg) return {};
  return buildSeoMetadata(cfg.keyword);
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const cfg = COMPARE_SLUGS[slug];
  if (!cfg) notFound();

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <p className="text-sm font-medium text-brand-primary">
        Comparison
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {cfg.keyword}
      </h1>
      <p className="mt-4 text-slate-600">
        Independent UK comparison for GLP-1 prices, safety context, and support
        options. Always confirm live prices and eligibility with your prescriber
        or pharmacy.
      </p>

      <TrustSignals className="mt-8" />

      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Overview
        </h2>
        <p className="text-slate-600">
          Use the table below as a structured starting point. For brand-specific
          titration and eligibility, see our{" "}
          <Link href="/what-is-wegovy" className="text-brand-primary underline">
            Wegovy
          </Link>{" "}
          and{" "}
          <Link href="/what-is-mounjaro" className="text-brand-primary underline">
            Mounjaro
          </Link>{" "}
          guides.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Price comparison
        </h2>
        <ComparisonTable providers={HOME_PREVIEW_PROVIDERS} />
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Effectiveness
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Outcomes depend on dose, adherence, diet, activity, and medical
            history. Discuss trial evidence and personal goals with a
            prescriber—this page is not medical advice.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Side effects
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Nausea, GI upset, and other adverse effects are common discussion
            points. Read the patient information leaflet for your medicine and{" "}
            <Link
              href="/glp-1-side-effects-explained"
              className="text-brand-primary underline"
            >
              our side effects overview
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">
          Best choice
        </h2>
        <p className="mt-2 text-slate-600">
          The &ldquo;best&rdquo; option is individual: eligibility, tolerance,
          cost stability, and prescriber preference all matter. Compare total
          monthly cost (consultation + delivery + medication) before deciding.
        </p>
      </section>

      <div className="mt-12">
        <InternalLinks links={internalLinksFor(cfg.internal)} />
      </div>
    </article>
  );
}
