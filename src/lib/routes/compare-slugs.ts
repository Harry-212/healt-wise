import type { InternalTopic } from "@/lib/internal-linking";

export const COMPARE_SLUGS: Record<
  string,
  { keyword: string; internal: InternalTopic }
> = {
  "wegovy-vs-mounjaro": {
    keyword: "Wegovy vs Mounjaro",
    internal: "wegovyVsMounjaro",
  },
  "mounjaro-vs-saxenda": {
    keyword: "Mounjaro vs Saxenda",
    internal: "mounjaroVsSaxenda",
  },
  "best-weight-loss-injections-uk": {
    keyword: "Best weight loss injections UK",
    internal: "bestInjections",
  },
};
