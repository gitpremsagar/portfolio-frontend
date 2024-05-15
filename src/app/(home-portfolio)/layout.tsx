import type { Metadata } from "next";
import "../globals.css";
import PortfolioHeader from "@/components/websiteHeader/PortfolioHeader";

export const metadata: Metadata = {
  title: "Prem Sagar",
  description: "Prem Sagar's portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PortfolioHeader />
      {children}
    </>
  );
}
