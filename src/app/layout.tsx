import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import FloatingNav from "./components/FloatingNav";
import WhatsAppFloat from "./components/WhatsappFloat";

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
        <WhatsAppFloat 
          phoneNumber="918595650338" 
          message="Hello! I'd like to inquire about your legal services."
        />
        {children}
      </body>
    </html>
  );
}
