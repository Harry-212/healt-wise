import React from "react";
import type { UkWeightLossLocation } from "@/lib/data/uk-weight-loss-locations";
import UkLocationArticleClient from "@/components/blog/UkLocationArticleClient";

import HerefordLocationContent from "@/components/locations/content/HerefordLocationContent";
import LondonLocationContent from "@/components/locations/content/LondonLocationContent";
import NorwichLocationContent from "@/components/locations/content/NorwichLocationContent";
import PeterboroughLocationContent from "@/components/locations/content/PeterboroughLocationContent";
import PlymouthLocationContent from "@/components/locations/content/PlymouthLocationContent";
import RiponLocationContent from "@/components/locations/content/RiponLocationContent";
import SalfordLocationContent from "@/components/locations/content/SalfordLocationContent";
import SouthamptonLocationContent from "@/components/locations/content/SouthamptonLocationContent";
import BangorNorthernIrelandLocationContent from "@/components/locations/content/BangorNorthernIrelandLocationContent";
import PerthLocationContent from "@/components/locations/content/PerthLocationContent";
import NewportLocationContent from "@/components/locations/content/NewportLocationContent";
import StDavidsLocationContent from "@/components/locations/content/StDavidsLocationContent";
import ReadingLocationContent from "@/components/locations/content/ReadingLocationContent";
import HuddersfieldLocationContent from "@/components/locations/content/HuddersfieldLocationContent";
import MiddlesbroughLocationContent from "@/components/locations/content/MiddlesbroughLocationContent";
import WarringtonLocationContent from "@/components/locations/content/WarringtonLocationContent";
import EastKilbrideLocationContent from "@/components/locations/content/EastKilbrideLocationContent";
import LivingstonLocationContent from "@/components/locations/content/LivingstonLocationContent";
import NeathPortTalbotLocationContent from "@/components/locations/content/NeathPortTalbotLocationContent";

type Props = {
  slug: string;
  loc: UkWeightLossLocation;
  shareUrl: string;
};

export default function LocationContentRenderer({ slug, loc, shareUrl }: Props) {
  if (slug === "hereford") return <HerefordLocationContent loc={loc} shareUrl={shareUrl} />;
  if (slug === "london") return <LondonLocationContent loc={loc} shareUrl={shareUrl} />;
  if (slug === "norwich") return <NorwichLocationContent loc={loc} shareUrl={shareUrl} />;
  if (slug === "peterborough") return <PeterboroughLocationContent loc={loc} shareUrl={shareUrl} />;
  if (slug === "plymouth") return <PlymouthLocationContent loc={loc} shareUrl={shareUrl} />;
  if (slug === "ripon") return <RiponLocationContent loc={loc} shareUrl={shareUrl} />;
  if (slug === "salford") return <SalfordLocationContent loc={loc} shareUrl={shareUrl} />;
  if (slug === "southampton") return <SouthamptonLocationContent loc={loc} shareUrl={shareUrl} />;
  if (slug === "bangor-northern-ireland") return <BangorNorthernIrelandLocationContent loc={loc} shareUrl={shareUrl} />;
  if (slug === "perth") return <PerthLocationContent loc={loc} shareUrl={shareUrl} />;
  if (slug === "newport") return <NewportLocationContent loc={loc} shareUrl={shareUrl} />;
  if (slug === "st-davids") return <StDavidsLocationContent loc={loc} shareUrl={shareUrl} />;
  if (slug === "reading") return <ReadingLocationContent loc={loc} shareUrl={shareUrl} />;
  if (slug === "huddersfield") return <HuddersfieldLocationContent loc={loc} shareUrl={shareUrl} />;
  if (slug === "middlesbrough") return <MiddlesbroughLocationContent loc={loc} shareUrl={shareUrl} />;
  if (slug === "warrington") return <WarringtonLocationContent loc={loc} shareUrl={shareUrl} />;
  if (slug === "east-kilbride") return <EastKilbrideLocationContent loc={loc} shareUrl={shareUrl} />;
  if (slug === "livingston") return <LivingstonLocationContent loc={loc} shareUrl={shareUrl} />;
  if (slug === "neath-port-talbot") return <NeathPortTalbotLocationContent loc={loc} shareUrl={shareUrl} />;

  // Fallback if not found
  return <UkLocationArticleClient loc={loc} shareUrl={shareUrl} />;
}
