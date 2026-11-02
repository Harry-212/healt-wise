"use client";

import Link from "next/link";
import PharmacyPriceTable from "@/components/pharmacies/PharmacyPriceTable";
import RelatedPharmacyLinks from "@/components/pharmacies/RelatedPharmacyLinks";
import { PRICE_CHECK_DATE_LONG } from "@/lib/data/price-check";
import { dossierOfferProps, getActiveProvider } from "@/lib/data/providers";
import { gphcPharmacyRegisterUrl } from "@/lib/seo/gphc-pharmacy-register-url";
import {
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  ProviderCta,
} from "./_dossier";

const paragraphClass = "text-slate-800 leading-relaxed";

function deliveryText(fee: number): string {
  return fee === 0 ? "Free standard delivery" : `Standard delivery from £${fee.toFixed(2)}`;
}

/**
 * Profile for any active partner that has no hand-written page yet, built only
 * from the central provider data and the live price tables. It makes a newly
 * added partner a complete page (and a valid sitemap entry) the moment it is
 * switched on; a bespoke profile can replace it later without touching routing.
 * It states facts held in the data and nothing more: no description, claims or
 * ranking.
 */
export default function GenericProviderProfile({ providerId }: { providerId: string }) {
  const provider = getActiveProvider(providerId);
  const offer = dossierOfferProps(providerId);
  if (!provider) return null;

  return (
    <PharmacyDossierPage
      slugLabel={provider.name}
      fileRef={`HW-${provider.id.toUpperCase()}-2026`}
      title={`${provider.name} weight loss review: Mounjaro & Wegovy prices`}
      subtitle={`Independent provider review of ${provider.name}: standard retail prices by dose, standard delivery fee and GPhC registration (information only — not medical advice).`}
      scopeLabel="Scope: standard retail prices as listed in our Mounjaro and Wegovy comparison tables"
      providerName={provider.name}
      providerUrl={provider.affiliate.outboundUrl}
      docDetails={[
        { k: "Checked", v: PRICE_CHECK_DATE_LONG },
        { k: "Provider", v: provider.name },
        { k: "GPhC", v: provider.gphcNumber },
        { k: "Delivery", v: deliveryText(provider.standardDeliveryFee) },
      ]}
      discountCode={offer.discountCode}
      discountCodeLabel={offer.discountCodeLabel}
      secondaryDiscount={offer.secondaryDiscount}
      hasDiscount={offer.hasDiscount}
      offerTerms={offer.offerTerms}
      heroProviderLogoSrc={provider.logoSrc}
      heroProviderLogoAlt={provider.logoAlt ?? provider.name}
      heroProviderWordmark={provider.name}
    >
      <section className="space-y-4">
        <PharmacyPriceTable slug={provider.id} providerName={provider.name} />
        <p className={paragraphClass}>
          Prices are the standard retail price for one pen or pack, checked on {PRICE_CHECK_DATE_LONG}.
          Discount codes and introductory offers are shown separately and are never included. See the{" "}
          <Link
            href="/mounjaro-price-comparison"
            className="font-semibold text-emerald-800 underline hover:text-emerald-950"
          >
            Mounjaro
          </Link>{" "}
          and{" "}
          <Link
            href="/wegovy-price-comparison"
            className="font-semibold text-emerald-800 underline hover:text-emerald-950"
          >
            Wegovy
          </Link>{" "}
          price comparisons for other partners, or check the pharmacy&apos;s registration on the{" "}
          <a
            href={gphcPharmacyRegisterUrl(provider.gphcNumber)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-800 underline hover:text-emerald-950"
          >
            GPhC register
          </a>
          .
        </p>
        <div className="flex justify-center">
          <ProviderCta
            url={provider.affiliate.outboundUrl}
            name={provider.name}
            id={provider.id}
            copyCode={offer.discountCode || undefined}
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            {provider.affiliate.ctaLabel}: {provider.name}
          </ProviderCta>
        </div>
      </section>
      <RelatedPharmacyLinks currentSlug={provider.id} />
    </PharmacyDossierPage>
  );
}
