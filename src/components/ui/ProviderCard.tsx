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
      <div className="relative flex flex-col justify-between border-b bg-slate-50 p-6 md:w-1/3 md:border-r md:border-b-0 dark:bg-slate-900/40">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {provider.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            {provider.brandOffered}
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            <span className="font-medium text-slate-800 dark:text-slate-200">
              Dose (from):
            </span>{" "}
            {doseLabel}
          </p>
        </div>
        <div className="mt-6">
          <div className="mb-1 text-sm text-slate-500 dark:text-slate-400">
            Starting price
          </div>
          <div className="text-3xl font-bold text-slate-900 dark:text-slate-50">
            £{provider.totalPrice}
            <span className="text-lg font-normal text-slate-500 dark:text-slate-400">
              /mo
            </span>
          </div>
        </div>

        {provider.gphcStatus === "Verified" && (
          <div className="absolute top-6 right-6 flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800 md:right-auto md:top-auto md:bottom-6 dark:bg-emerald-900/40 dark:text-emerald-200">
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
              <span className="block font-medium text-slate-900 dark:text-slate-100">
                Shipping
              </span>
              <span className="text-slate-600 dark:text-slate-400">
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
              <span className="block font-medium text-slate-900 dark:text-slate-100">
                Consultation
              </span>
              <span className="text-slate-600 dark:text-slate-400">
                {provider.consultationCost === "Included"
                  ? "Included"
                  : `£${provider.consultationCost}`}
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Truck className="h-5 w-5 shrink-0 text-emerald-500" />
            <div>
              <span className="block font-medium text-slate-900 dark:text-slate-100">
                Delivery speed
              </span>
              <span className="text-slate-600 dark:text-slate-400">
                {provider.deliverySpeed}
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${provider.maintenanceAllowed ? "border-emerald-500 bg-emerald-100 dark:bg-emerald-900/30" : "border-slate-300 dark:border-slate-600"}`}
            >
              {provider.maintenanceAllowed && (
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              )}
            </div>
            <div>
              <span className="block font-medium text-slate-900 dark:text-slate-100">
                Maintenance
              </span>
              <span className="text-slate-600 dark:text-slate-400">
                {provider.maintenanceAllowed
                  ? "Available"
                  : "Not offered / unclear"}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-100 pt-4 dark:border-slate-800 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <a
              href={gphcHref(provider)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:underline dark:text-emerald-400"
            >
              Check on GPhC register
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            {provider.gphcRegistrationNumber ? (
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Premises ref (verify): {provider.gphcRegistrationNumber}
              </span>
            ) : null}
          </div>
          <Link
            href={reviewHref}
            className="text-sm font-medium text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
          >
            View full provider review →
          </Link>
          <a
            href={provider.affiliateUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-2.5 font-medium text-white transition-colors hover:bg-slate-800 sm:ml-auto sm:w-auto dark:bg-emerald-700 dark:hover:bg-emerald-600"
          >
            Visit pharmacy <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
