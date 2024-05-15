"use client";
import AdminHeader from "@/components/websiteHeader/AdminHeader";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <AdminHeader />
      {children}
    </Provider>
  );
}
