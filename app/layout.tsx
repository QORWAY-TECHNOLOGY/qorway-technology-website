import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://qorway.com"),
  title: {
    default: "QORWAY Technology — Sovereign Decision Intelligence Infrastructure",
    template: "%s — QORWAY Technology"
  },
  description:
    "QORWAY builds sovereign Decision Intelligence infrastructure for causal, constrained, governed, resilient, and auditable enterprise decisions.",
  applicationName: "QORWAY Technology",
  authors: [{ name: "QORWAY Technology" }],
  creator: "QORWAY Technology",
  publisher: "QORWAY Technology",
  keywords: [
    "sovereign decision intelligence",
    "decision infrastructure",
    "causal intelligence",
    "enterprise governance",
    "sovereign resilience",
    "PolicyCore",
    "PulseFlow",
    "GreenCore",
    "Atlas"
  ],
  openGraph: {
    title: "QORWAY Technology — Sovereign Decision Intelligence Infrastructure",
    description:
      "Infrastructure for organizations that need to reason, validate, execute, and govern decisions under digital, regulatory, operational, and geopolitical constraints.",
    url: "https://qorway.com",
    siteName: "QORWAY Technology",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "QORWAY Technology — Sovereign Decision Intelligence Infrastructure",
    description:
      "Causal, constrained, governed, resilient, and auditable decision infrastructure for Europe."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
