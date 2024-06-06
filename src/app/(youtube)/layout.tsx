import type { Metadata } from "next";
import YouTubeHeader from "./../../components/websiteHeader/YouTubeHeader";

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
      <YouTubeHeader />
      {children}
    </>
  );
}
