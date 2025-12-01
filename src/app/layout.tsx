import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import FloatingNav from "./components/FloatingNav";
import WhatsAppFloat from "./components/WhatsappFloat";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Gaurav Sharma",
  description: "Professional Legal Services",
  icons: {
    icon: "/assets/gaurav-sharma-org-header.png",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Header/>
        <FloatingNav />
        <WhatsAppFloat 
          phoneNumber="918595650338" 
          message="Hello! I'd like to inquire about your legal services."
        />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
