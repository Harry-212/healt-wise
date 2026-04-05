import type { Metadata } from "next";
import Link from "next/link";
import { buildSeoMetadata } from "@/lib/seo/metadata";
import InternalLinks from "@/components/content/InternalLinks";
import { internalLinksFor } from "@/lib/internal-linking";

export const metadata: Metadata = buildSeoMetadata("Weight loss tracker");

export default function WeightLossTrackerToolPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 md:px-6">
      <h1 className="text-3xl font-bold text-slate-900">
        Weight loss tracker
      </h1>
      <p className="mt-4 text-slate-600">
        Log weight, dose, medication, and supplier over time in{" "}
        <strong>My Hub</strong>. Create a free account to save entries securely
        (Supabase-backed when configured).
      </p>
      <Link
        href="/my-hub"
        className="mt-8 inline-flex rounded-lg bg-brand-cta px-5 py-3 text-sm font-bold text-slate-900"
      >
        Open My Hub
      </Link>
      <div className="mt-12">
        <InternalLinks links={internalLinksFor("home")} />
      </div>
    </div>
  );
}
