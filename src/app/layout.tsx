import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import FloatingNav from "./components/FloatingNav";

export const metadata: Metadata = {
  title: "Gaurav Sharma Law Offices",
  description: "Professional Legal Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <FloatingNav />
        {children}
      </body>
    </html>
  );
}
