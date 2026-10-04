import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const description = "AI chatbots, AI automation, modern websites, full-stack and mobile apps for businesses in India and worldwide.";

export const metadata: Metadata = {
  title: `${site.name} · ${site.role}`,
  description,
  openGraph: { title: `${site.name} · ${site.role}`, description, type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
