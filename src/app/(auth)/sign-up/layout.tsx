import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign Up",
};

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
