import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLanguage, SUPPORTED_LANGUAGES } from "@/lib/i18n/config";
import { dictionaries } from "@/lib/i18n/dictionaries";
import { localizedHref } from "@/lib/i18n/routing";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LiveChatWidget from "@/components/LiveChatWidget";
import ScrollToTop from "@/components/ScrollToTop";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { getSiteConfig } from "@/lib/content-loader";
import { createPageMetadata, DEFAULT_SOCIAL_IMAGE, serializeJsonLd, SITE_NAME, SITE_URL } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteConfig = getSiteConfig();
const socialProfiles = siteConfig
  ? Object.values(siteConfig.social).filter((url): url is string => Boolean(url))
  : [];

const baseMetadata: Metadata = {
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
    images: [{
      url: DEFAULT_SOCIAL_IMAGE,
      width: 1200,
      height: 630,
      type: 'image/png',
      alt: "MagicChip Mini PC and industrial computing",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini PC & Industrial Computing OEM/ODM Manufacturer | MagicChip",
    description: "Industrial, AI, commercial, and firewall Mini PC solutions with OEM/ODM support.",
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  robots: { index: true, follow: true },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLanguage(lang)) notFound();
  return { ...baseMetadata, ...createPageMetadata({ name: 'Mini PC & Industrial Computing OEM/ODM Manufacturer', description: 'MagicChip manufactures Mini PCs and industrial computing products with OEM/ODM support in Shenzhen, China.', path: '/' }, lang) };
}

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map(lang => ({ lang }));
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ["Magic Chip", "Shenzhen Magic Chip Technology Co., Ltd."],
  legalName: "Shenzhen Magic Chip Technology Co., Ltd.",
  description: "MagicChip, also known as Magic Chip, is the brand of Shenzhen Magic Chip Technology Co., Ltd., a Shenzhen-based manufacturer of Mini PCs and industrial computing systems.",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/brand/logo-mark-512.png`,
  sameAs: socialProfiles,
  email: "klauslee@szmagicchip.com",
  telephone: "+86-0755-23099863",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5E, JinDa City, Central Road, Xinqiao Street, Baoan District",
    addressLocality: "Shenzhen",
    addressCountry: "CN",
  },
  foundingDate: "2021",
  foundingLocation: {
    "@type": "Place",
    name: "Shenzhen, China",
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
  alternateName: "Magic Chip",
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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isValidLanguage(lang)) notFound();
  const localizedWebsite = { ...websiteJsonLd, url: `${SITE_URL}${localizedHref("/", lang)}`, inLanguage: lang, potentialAction: { ...websiteJsonLd.potentialAction, target: { ...websiteJsonLd.potentialAction.target, urlTemplate: `${SITE_URL}${localizedHref("/search", lang)}?q={search_term_string}` } } };
  return (
    <html lang={lang} className="scroll-smooth" suppressHydrationWarning>
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
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(localizedWebsite) }}
        />
        <LanguageProvider initialLanguage={lang} initialTranslations={dictionaries[lang]}>
          <ScrollToTop />
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
          <Footer newsletterEnabled={siteConfig?.newsletter.enabled ?? false} />
          <LiveChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
