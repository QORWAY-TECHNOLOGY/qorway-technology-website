import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QORWAY Technology — Sovereign Decision Intelligence Infrastructure",
  description:
    "QORWAY builds sovereign Decision Intelligence infrastructure for causal, constrained, executable, and auditable enterprise decisions."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
