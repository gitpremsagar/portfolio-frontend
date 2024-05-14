import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import BlogHeader from "@/components/websiteHeader/BlogHeader";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <BlogHeader />
        {children}
      </body>
    </html>
  );
}
