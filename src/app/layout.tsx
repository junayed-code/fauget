import type { Metadata } from "next";
import { inter, unbounded } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home Page - Fauget",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${unbounded.variable}`}>
      <body className="font-inter">{children}</body>
    </html>
  );
}
