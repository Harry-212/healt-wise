import { redirect } from "next/navigation";

/** Old hub path; city articles now live on `/blog` grid and `/blog/best-weight-loss-treatment-in-…`. */
export default function UkWeightLossLegacyHubRedirect() {
  redirect("/blog?topic=locations");
}
