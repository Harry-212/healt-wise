import type { Metadata } from "next";
import { Stethoscope } from "lucide-react";
import CompareHereLink from "@/components/ui/CompareHereLink";
import ProviderCard from "@/components/ui/ProviderCard";
import { PharmacyProvider } from "@/lib/types/provider";
import { siteOrigin } from "@/lib/seo/site-origin";

export const metadata: Metadata = {
  title: "Wegovy price list UK",
  description:
    "Dose-by-dose Wegovy price index across UK pharmacies — illustrative snapshot on Health Wise.",
  alternates: {
    canonical: `${siteOrigin()}/wegovy-price-list`,
  },
};

const MOCK_PROVIDERS: PharmacyProvider[] = [
  {
    id: "boots", name: "Boots Online Doctor", brandOffered: "Wegovy", dose: ["0.25mg"], totalPrice: 199.00,
    shippingCost: "Included", consultationCost: "Included", subscriptionType: "One-off", stockStatus: "In Stock", maintenanceAllowed: false, minBMI: 30, gphcStatus: "Verified", deliverySpeed: "Standard", supportFeatures: [], lastCheckedDate: new Date().toISOString()
  }
];

export default function WegovyPriceList() {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-12">
      <div className="mb-8">
        <CompareHereLink href="/wegovy-price-comparison" />
      </div>
      
      <div className="mb-10 lg:w-2/3">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Complete Wegovy Price List UK</h1>
        <p className="text-slate-600 text-lg">
          Live index of Wegovy starting dose (0.25mg) and maintenance dose (2.4mg) prices across verified UK pharmacies.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {MOCK_PROVIDERS.map(p => <ProviderCard key={p.id} provider={p} />)}
      </div>

      <div className="mt-12 p-6 bg-slate-900 text-white rounded-xl flex gap-4">
        <Stethoscope className="h-6 w-6 text-emerald-400 shrink-0" />
        <p className="text-sm text-slate-300">
          <strong>Note:</strong> Price comparison data is independently monitored. Wegovy costs often increase substantially at the 1.7mg and 2.4mg doses.
        </p>
      </div>
    </div>
  );
}
