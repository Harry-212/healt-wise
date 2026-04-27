/**
 * If you have a Trustpilot “review/…” company URL, set it on the provider;
 * otherwise we use Trustpilot search so the user still has a one-click
 * off-site path (refine to the exact business page in data when you have the URL).
 */
export function trustpilotHrefForProvider(
  providerName: string,
  companyPageUrl?: string,
): string {
  const t = companyPageUrl?.trim();
  if (t) return t;
  const q = `${providerName} UK pharmacy`.trim();
  return `https://www.trustpilot.com/search?query=${encodeURIComponent(q)}`;
}
