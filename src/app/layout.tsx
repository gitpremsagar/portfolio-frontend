import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import WebsiteHeader from "@/components/websiteHeader/WebsiteHeader";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <WebsiteHeader />
        {children}
      </body>
    </html>
  );
}
