const MAX_REDIRECT_HOPS = 10;

/**
 * Follows redirects manually so every hop and the real status code are
 * recorded, instead of letting fetch() hide them. Stops at a repeated URL
 * (loop) or after MAX_REDIRECT_HOPS (chain too long to be a real redirect).
 */
export async function fetchWithRedirectTracking(startUrl) {
  const hops = [];
  const seen = new Set();
  let currentUrl = startUrl;

  for (let i = 0; i <= MAX_REDIRECT_HOPS; i++) {
    if (seen.has(currentUrl)) {
      return {
        finalUrl: currentUrl,
        status: null,
        hops,
        redirectLoop: true,
        response: null,
        html: null,
      };
    }
    seen.add(currentUrl);

    const response = await fetch(currentUrl, {
      redirect: "manual",
      headers: { "User-Agent": "Healthwise360-SEO-Export/1.0" },
    });

    const isRedirect = response.status >= 300 && response.status < 400;
    if (!isRedirect) {
      const contentType = response.headers.get("content-type") || "";
      const html = contentType.includes("text/html")
        ? await response.text()
        : null;
      return {
        finalUrl: currentUrl,
        status: response.status,
        hops,
        redirectLoop: false,
        response,
        html,
      };
    }

    const location = response.headers.get("location");
    if (!location) {
      return {
        finalUrl: currentUrl,
        status: response.status,
        hops,
        redirectLoop: false,
        response,
        html: null,
      };
    }

    hops.push({ from: currentUrl, status: response.status, to: location });
    currentUrl = new URL(location, currentUrl).toString();
  }

  return {
    finalUrl: currentUrl,
    status: null,
    hops,
    redirectLoop: false,
    chainTooLong: true,
    response: null,
    html: null,
  };
}
