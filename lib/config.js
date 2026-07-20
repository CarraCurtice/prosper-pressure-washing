// Central site config.

export const SITE = {
  name: "Prosper Pressure Washing",
  legalLine:
    "Prosper Pressure Washing is a locally operated exterior cleaning business serving Prosper, TX.",
  domain: "https://pressurewashingprosper.com", // exact-match domain (prosperpressurewashing.com is taken — registered 4/2025, live competitor site)
  city: "Prosper",
  state: "TX",

  // ============================================================
  // TODO: TWILIO TRACKING NUMBER — replace BOTH values below.
  // ============================================================
  phone: "(XXX) XXX-XXXX",
  phoneTel: "+1XXXXXXXXXX",

  // ============================================================
  // TODO: FORM ENDPOINT — paste Formspree (or similar) POST URL.
  // ============================================================
  formEndpoint: "https://formspree.io/f/REPLACE_ME",

  hours: "Monday – Saturday, 7:30 AM – 6:00 PM",
  geo: { lat: 33.2362, lng: -96.8011 },
  mapEmbedSrc: "https://www.google.com/maps?q=Prosper,+TX&output=embed",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/driveway-cleaning/", label: "Driveways & Concrete" },
  { href: "/house-washing/", label: "House Washing" },
  { href: "/fence-and-patio-cleaning/", label: "Fences & Patios" },
  { href: "/service-areas/", label: "Service Area" },
  { href: "/contact/", label: "Contact" },
];
