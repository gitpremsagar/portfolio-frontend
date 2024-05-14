import AdminHeader from "@/components/websiteHeader/AdminHeader";

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
