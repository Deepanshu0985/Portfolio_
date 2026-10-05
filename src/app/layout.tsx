import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { brandName, site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const description =
  "AI chatbots, AI automation, modern websites, full-stack and mobile apps for businesses in India and worldwide. Fixed quotes, built by an engineer.";
const title = `${brandName} · ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://deepanshu-portfolio-two.vercel.app"),
  title,
  description,
  openGraph: { title, description, type: "website", siteName: brandName },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
