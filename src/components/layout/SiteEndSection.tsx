import { getRecommendedReadingPool } from "@/lib/recommended-reading";
import SiteEndSectionClient from "./SiteEndSectionClient";

export default function SiteEndSection() {
  const pool = getRecommendedReadingPool();
  const dayKey = new Date().toISOString().slice(0, 10);
  return <SiteEndSectionClient pool={pool} dayKey={dayKey} />;
}
