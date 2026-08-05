import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LiveChatWidget from "@/components/LiveChatWidget";
import ScrollToTop from "@/components/ScrollToTop";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { serializeJsonLd, SITE_NAME, SITE_URL } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mini PC & Industrial Computing OEM/ODM Manufacturer | MagicChip",
    template: "%s | MagicChip",
  },
  description: "MagicChip is a Shenzhen-based Mini PC and industrial computing manufacturer providing industrial, AI, commercial, and firewall Mini PC solutions with OEM/ODM support.",
  keywords: [
    "Mini PC manufacturer",
    "industrial Mini PC",
    "fanless industrial computer",
    "AI Mini PC",
    "firewall Mini PC",
    "OEM Mini PC",
    "ODM Mini PC",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mini PC & Industrial Computing OEM/ODM Manufacturer | MagicChip",
    description: "Industrial, AI, commercial, and firewall Mini PC solutions with OEM/ODM support from Shenzhen, China.",
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: "/assets/brand/logo-wordmark.png", alt: "MagicChip Mini PC and industrial computing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini PC & Industrial Computing OEM/ODM Manufacturer | MagicChip",
    description: "Industrial, AI, commercial, and firewall Mini PC solutions with OEM/ODM support.",
    images: ["/assets/brand/logo-wordmark.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/assets/brand/logo-mark.png",
    apple: "/assets/brand/logo-mark.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/brand/logo-wordmark.png`,
  email: "Contact@szmagicchip.com",
  telephone: "+86-0755-23099863",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5E, JinDa City, Central Road, Xinqiao Street, Baoan District",
    addressLocality: "Shenzhen",
    addressCountry: "CN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+86-133-9217-2330",
    contactType: "sales",
    availableLanguage: ["English", "French", "German", "Italian", "Spanish"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: "Mini PC and industrial computing products with OEM/ODM support.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(websiteJsonLd) }}
        />
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