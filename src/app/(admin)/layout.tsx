"use client";
import AdminHeader from "@/components/websiteHeader/AdminHeader";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ProtectRoute from "@/components/ProtectRoute";

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <ProtectRoute />
      <AdminHeader />
      {children}
    </Provider>
  );
}
