import { redirect } from "next/navigation";
import { blogTopicHubPath } from "@/lib/blog-feed";

/** Legacy path — keep for bookmarks; send to the static locations topic hub. */
export default function UkWeightLossRedirectPage() {
  redirect(blogTopicHubPath("locations"));
}
