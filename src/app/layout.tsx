import type { Metadata } from "next";
import "./globals.css";
import { SkipLink } from "@/components/nss/skip-link";
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - ${siteConfig.motto}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    siteConfig.description,
  keywords: [
    "NSS",
    "NIT Durgapur",
    "National Service Scheme",
    "community service",
    "volunteer",
    "West Bengal",
  ],
  authors: [{ name: "NSS NIT Durgapur" }],
  openGraph: {
    title: "NSS NIT Durgapur - Not Me, But You",
    description:
      "The official website of the National Service Scheme unit at NIT Durgapur.",
    type: "website",
    siteName: "NSS NIT Durgapur",
  },
  twitter: {
    card: "summary_large_image",
    title: "NSS NIT Durgapur - Not Me, But You",
    description:
      "The official website of the National Service Scheme unit at NIT Durgapur.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
