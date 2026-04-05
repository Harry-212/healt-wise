import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import HubDashboard from "@/components/my-hub/HubDashboard";

export const dynamic = "force-dynamic";

export default async function MyHubPage() {
  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <h1 className="text-xl font-bold text-slate-900">
          My Hub
        </h1>
        <p className="mt-4 text-slate-600">
          Configure{" "}
          <code className="rounded bg-brand-surface px-1">NEXT_PUBLIC_SUPABASE_URL</code>{" "}
          and{" "}
          <code className="rounded bg-brand-surface px-1">
            NEXT_PUBLIC_SUPABASE_ANON_KEY
          </code>{" "}
          to enable the tracker.
        </p>
        <p className="mt-4">
          <a href="/my-hub/login" className="text-brand-primary underline">
            Login page
          </a>
        </p>
      </div>
    );
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/my-hub/login");

  return <HubDashboard userId={user.id} email={user.email ?? ""} />;
}
