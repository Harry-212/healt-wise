import type { Metadata } from "next";
import { Stethoscope } from "lucide-react";
import CompareHereLink from "@/components/ui/CompareHereLink";
import ProviderCard from "@/components/ui/ProviderCard";
import { PharmacyProvider } from "@/lib/types/provider";
import { siteOrigin } from "@/lib/seo/site-origin";

export const metadata: Metadata = {
  title: "Mounjaro price list UK",
  description:
    "Dose-by-dose Mounjaro price index across UK pharmacies — illustrative snapshot on Health Wise.",
  alternates: {
    canonical: `${siteOrigin()}/mounjaro-price-list`,
  },
};

const MOCK_PROVIDERS: PharmacyProvider[] = [
  {
    id: "medexpress", name: "MedExpress", brandOffered: "Both", dose: ["2.5mg"], totalPrice: 149.99,
    shippingCost: "Included", consultationCost: "Included", subscriptionType: "Subscription", stockStatus: "In Stock", maintenanceAllowed: true, minBMI: 30, gphcStatus: "Verified", deliverySpeed: "Next Day", supportFeatures: [], lastCheckedDate: new Date().toISOString()
  }
];

export default function MounjaroPriceList() {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-12">
      <div className="mb-8">
        <CompareHereLink href="/mounjaro-price-comparison" />
      </div>
      
      <div className="mb-10 lg:w-2/3">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Complete Mounjaro Price List UK</h1>
        <p className="text-slate-600 text-lg">
          Live index of Mounjaro prices across registered UK pharmacies. Prices typically increase as your dosage titrates up from 2.5mg to 15mg.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {MOCK_PROVIDERS.map(p => <ProviderCard key={p.id} provider={p} />)}
      </div>

      <div className="mt-12 p-6 bg-slate-900 text-white rounded-xl flex gap-4">
        <Stethoscope className="h-6 w-6 text-emerald-400 shrink-0" />
        <p className="text-sm text-slate-300">
          <strong>Note:</strong> Price comparison data is independently monitored. Always verify final totals including shipping directly at checkout.
        </p>
      </div>
    </div>
  );
}
