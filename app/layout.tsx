import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LiveChatWidget from "@/components/LiveChatWidget";
import ScrollToTop from "@/components/ScrollToTop";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MagicChip - Advanced Hardware Solutions",
  description: "Leading provider of high-end hardware products and enterprise services",
  icons: {
    icon: "/magic-chip-Logo.png",
    apple: "/magic-chip-Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          <ScrollToTop />
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
          <LiveChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
