import type { ReactNode } from "react";
import { LivePricesProvider } from "@/lib/data/live-prices-context";
import { getLiveMounjaroProvider, getLivePriceCheckLabels, getLiveWegovyProvider } from "@/lib/data/compare-live";

/** Gives every pharmacy page's (client) content the live price rows for its provider. */
export default async function PharmacyLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const labels = getLivePriceCheckLabels();
  return (
    <LivePricesProvider
      value={{
        providerId: slug,
        mounjaro: getLiveMounjaroProvider(slug) ?? null,
        wegovy: getLiveWegovyProvider(slug) ?? null,
        mounjaroLastUpdated: labels.mounjaro,
        wegovyLastUpdated: labels.wegovy,
      }}
    >
      {children}
    </LivePricesProvider>
  );
}
