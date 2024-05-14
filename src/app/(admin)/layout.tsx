import type { Metadata } from "next";
import AdminHeader from "@/components/websiteHeader/AdminHeader";

export const metadata: Metadata = {
  title: "Welcom Prem",
  description: "Dashboard for Prem Sagar.",
};

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdminHeader />
      {children}
    </>
  );
}
