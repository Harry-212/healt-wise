import type { Metadata } from "next";
import { isAdminAuthenticated } from "@/lib/admin/auth";
import AdminDashboard from "./AdminDashboard";
import AdminLoginForm from "./AdminLoginForm";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin Dashboard | Health Wise",
  robots: { index: false, follow: false },
};

export default async function AdminDashboardPage() {
  const authed = await isAdminAuthenticated();

  if (!authed) {
    return <AdminLoginForm />;
  }

  return <AdminDashboard />;
}
