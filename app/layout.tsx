import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Norika Atelier | Party Decoration Rentals & Event Planning on Long Island, NY";
const siteDescription = "Norika Atelier creates elegant party decoration rentals and full-service event planning for birthdays, baby showers, bridal showers, and celebrations across Long Island, New York.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Norika Atelier",
  description: siteDescription,
  url: "https://norikaatelier.com",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Long Island, New York",
  },
  serviceType: [
    "Party Decoration Rentals",
    "Event Planning",
    "Event Design",
    "Birthday Party Planning",
    "Baby Shower Planning",
    "Bridal Shower Planning",
  ],
  priceRange: "$$",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://norikaatelier.com"),
  title: {
    default: siteTitle,
    template: "%s | Norika Atelier",
  },
  description: siteDescription,
  keywords: [
    "party decoration rentals Long Island NY",
    "party planning Long Island NY",
    "event planning Long Island NY",
    "birthday decorations Long Island",
    "baby shower decorations Long Island",
    "bridal shower decor Long Island",
    "event rentals Long Island",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
