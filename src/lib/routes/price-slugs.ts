import type { InternalTopic } from "@/lib/internal-linking";

export const PRICE_SLUGS: Record<
  string,
  { keyword: string; internal: InternalTopic }
> = {
  "cheapest-options-uk": {
    keyword: "Cheapest GLP-1 options UK",
    internal: "cheapestOptions",
  },
};
