import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import CompareHereLink from "@/components/ui/CompareHereLink";
import ProviderCard from "@/components/ui/ProviderCard";
import { PharmacyProvider } from "@/lib/types/provider";
import { siteOrigin } from "@/lib/seo/site-origin";

export const metadata: Metadata = {
  title: "Mounjaro maintenance pharmacies",
  description:
    "UK pharmacies with maintenance policies for Mounjaro after target weight — illustrative listing on Health Wise.",
  alternates: {
    canonical: `${siteOrigin()}/mounjaro-maintenance-pharmacies`,
  },
};

const MOCK_PROVIDERS: PharmacyProvider[] = [
  {
    id: "medexpress", name: "MedExpress", brandOffered: "Both", dose: ["15mg"], totalPrice: 189.99,
    shippingCost: "Included", consultationCost: "Included", subscriptionType: "Subscription", stockStatus: "In Stock", maintenanceAllowed: true, minBMI: 30, gphcStatus: "Verified", deliverySpeed: "Next Day", supportFeatures: [], lastCheckedDate: new Date().toISOString()
  }
];

export default function MounjaroMaintenanceList() {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-12">
      <div className="mb-8">
        <CompareHereLink href="/mounjaro-price-comparison" />
      </div>
      
      <div className="mb-10 p-8 bg-emerald-50 rounded-2xl border border-emerald-100">
        <h1 className="text-3xl font-bold text-emerald-950 mb-4">Mounjaro Maintenance Policies</h1>
        <p className="text-emerald-800 text-lg mb-6">
          When you reach your target weight with a BMI below 30 or 27, some pharmacies will stop prescribing Mounjaro. The pharmacies listed below have confirmed maintenance policies allowing you to continue treatment to maintain your weight loss.
        </p>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 text-sm text-emerald-900 font-medium">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Prescribes below BMI 25
          </div>
          <div className="flex items-center gap-2 text-sm text-emerald-900 font-medium">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Allows clinical maintenance
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {MOCK_PROVIDERS.map(p => <ProviderCard key={p.id} provider={p} />)}
      </div>
    </div>
  );
}
