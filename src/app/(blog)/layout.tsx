import type { Metadata } from "next";
import BlogHeader from "@/components/websiteHeader/BlogHeader";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prem's Blog",
  description: "Latest articles from Prem Sagar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BlogHeader />
      {children}
    </>
  );
}
