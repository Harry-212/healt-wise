import { PharmacyProvider } from "@/lib/types/provider";
import Link from "next/link";
import { ExternalLink, ShieldCheck, Truck, CheckCircle2 } from "lucide-react";

const defaultGphcRegisterBase =
  "https://www.pharmacyregulation.org/registers/pharmacy/register";

function gphcHref(provider: PharmacyProvider): string {
  if (provider.gphcCheckUrl) return provider.gphcCheckUrl;
  return defaultGphcRegisterBase;
}

interface ProviderCardProps {
  provider: PharmacyProvider;
}

export default function ProviderCard({ provider }: ProviderCardProps) {
  const doseLabel = provider.dose.join(", ");
  const reviewHref =
    provider.reviewHref ?? `/mounjaro-price-comparison#provider-${provider.id}`;

  return (
    <div
      id={`provider-${provider.id}`}
      className="flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:shadow-md md:flex-row scroll-mt-24"
    >
      <div className="relative flex flex-col justify-between border-b bg-slate-50 p-6 md:w-1/3 md:border-r md:border-b-0">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">
            {provider.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-emerald-600">
            {provider.brandOffered}
          </p>
          <p className="mt-2 text-sm text-slate-600">
            <span className="font-medium text-slate-800">
              Dose (from):
            </span>{" "}
            {doseLabel}
          </p>
        </div>
        <div className="mt-6">
          <div className="mb-1 text-sm text-slate-500">
            Starting price
          </div>
          <div className="text-3xl font-bold text-slate-900">
            £{provider.totalPrice}
            <span className="text-lg font-normal text-slate-500">
              /mo
            </span>
          </div>
        </div>

        {provider.gphcStatus === "Verified" && (
          <div className="absolute top-6 right-6 flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800 md:right-auto md:top-auto md:bottom-6">
            <ShieldCheck className="h-4 w-4 shrink-0" /> GPhC verified
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between p-6 md:w-2/3">
        <div className="mb-6 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
          <div className="flex items-start gap-2">
            <CheckCircle2
              className={`h-5 w-5 shrink-0 ${provider.shippingCost === "Included" ? "text-emerald-500" : "text-slate-300"}`}
            />
            <div>
              <span className="block font-medium text-slate-900">
                Shipping
              </span>
              <span className="text-slate-600">
                {provider.shippingCost === "Included"
                  ? "Included"
                  : `£${provider.shippingCost}`}
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2
              className={`h-5 w-5 shrink-0 ${provider.consultationCost === "Included" ? "text-emerald-500" : "text-slate-300"}`}
            />
            <div>
              <span className="block font-medium text-slate-900">
                Consultation
              </span>
              <span className="text-slate-600">
                {provider.consultationCost === "Included"
                  ? "Included"
                  : `£${provider.consultationCost}`}
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Truck className="h-5 w-5 shrink-0 text-emerald-500" />
            <div>
              <span className="block font-medium text-slate-900">
                Delivery speed
              </span>
              <span className="text-slate-600">
                {provider.deliverySpeed}
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${provider.maintenanceAllowed ? "border-emerald-500 bg-emerald-100" : "border-slate-300"}`}
            >
              {provider.maintenanceAllowed && (
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              )}
            </div>
            <div>
              <span className="block font-medium text-slate-900">
                Maintenance
              </span>
              <span className="text-slate-600">
                {provider.maintenanceAllowed
                  ? "Available"
                  : "Not offered / unclear"}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <a
              href={gphcHref(provider)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:underline"
            >
              Check on GPhC register
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            {provider.gphcRegistrationNumber ? (
              <span className="text-xs text-slate-500">
                Premises ref (verify): {provider.gphcRegistrationNumber}
              </span>
            ) : null}
          </div>
          <Link
            href={reviewHref}
            className="text-sm font-medium text-slate-600 hover:text-emerald-600"
          >
            View full provider review →
          </Link>
          <a
            href={provider.affiliateUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-cta px-6 py-2.5 font-semibold text-slate-900 transition-colors hover:brightness-95 sm:ml-auto sm:w-auto"
          >
            Visit pharmacy <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
