import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sardaunatechlabs.com.ng"),
  title: {
    default: "Sardauna Tech Lab Ltd | Enterprise Software, Digital Products & Systems",
    template: "%s | Sardauna Tech Lab Ltd"
  },
  description: "Sardauna Tech Lab Ltd is a Nigerian technology and software engineering company designing, building, and delivering digital products, enterprise systems, and custom software solutions.",
  keywords: [
    "Sardauna Tech Lab",
    "Software Engineering Nigeria",
    "Enterprise ERP Nigeria",
    "Web Development Jigawa",
    "Custom Software Systems",
    "EventPass",
    "TraderERP",
    "Mobile Application Development Nigeria",
    "Technology Consultancy"
  ],
  authors: [{ name: "Sardauna Tech Lab Ltd", url: "https://sardaunatechlabs.com.ng" }],
  creator: "Sardauna Tech Lab Ltd",
  publisher: "Sardauna Tech Lab Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://sardaunatechlabs.com.ng",
    title: "Sardauna Tech Lab Ltd | Enterprise Software & Digital Products",
    description: "Designing, building, and delivering digital products, business systems, and technology solutions for organizations solving real problems.",
    siteName: "Sardauna Tech Lab Ltd"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sardauna Tech Lab Ltd | Enterprise Software & Digital Products",
    description: "Designing, building, and delivering digital products, business systems, and technology solutions for organizations solving real problems.",
    creator: "@sardaunatechlab"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sardauna Tech Lab Ltd",
  "alternateName": "STL",
  "url": "https://sardaunatechlabs.com.ng",
  "logo": "https://sardaunatechlabs.com.ng/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+234 701 967 2820",
    "contactType": "customer service",
    "areaServed": ["NG", "Africa"],
    "availableLanguage": ["English", "Hausa"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dutse",
    "addressRegion": "Jigawa State",
    "addressCountry": "NG"
  },
  "identifier": {
    "@type": "PropertyValue",
    "name": "CAC Registration (RC)",
    "value": "9161899"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${playfair.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </head>
      <body className="min-h-screen bg-[#F9FAFB] text-[#111827] flex flex-col font-sans selection:bg-[#F5A623] selection:text-[#06101E] antialiased">
        <Navbar />
        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
