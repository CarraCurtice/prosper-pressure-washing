import "./globals.css";
import { Header, Footer } from "../components/ui";
import { SITE } from "../lib/config";

export const metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} — Pressure Washing in Prosper, TX`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Driveway cleaning, house soft washing, and fence & patio cleaning in Prosper, TX. Fast quotes, careful work, local crew.",
  openGraph: { siteName: SITE.name, locale: "en_US", type: "website" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description:
    "Residential pressure washing and soft washing service for Prosper, Texas.",
  url: SITE.domain,
  telephone: SITE.phoneTel, // TODO: TWILIO TRACKING NUMBER (set in lib/config.js)
  areaServed: {
    "@type": "City",
    name: "Prosper",
    containedInPlace: { "@type": "State", name: "Texas" },
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  openingHours: "Mo-Sa 07:30-18:00",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
