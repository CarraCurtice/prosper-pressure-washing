import Link from "next/link";
import { SITE, NAV_LINKS } from "../lib/config";

export function Header() {
  return (
    <header className="hdr">
      <div className="shell hdr-inner">
        <Link href="/" className="brand">
          <span className="brand-badge">PW</span>
          {SITE.name}
        </Link>
        <nav aria-label="Main">
          <ul className="hdr-nav">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <a href={`tel:${SITE.phoneTel}`} className="btn btn-call">
          {SITE.phone}
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="ftr">
      <div className="shell ftr-grid">
        <div>
          <p className="ftr-brand">{SITE.name}</p>
          <p>{SITE.legalLine}</p>
          <p>
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a> · {SITE.hours}
          </p>
        </div>
        <ul className="ftr-nav">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="shell ftr-fine">
        © {new Date().getFullYear()} {SITE.name} — driveways, houses, fences
        &amp; patios across Prosper, Texas.
      </div>
    </footer>
  );
}

/** FAQ + mirrored FAQPage JSON-LD */
export function Faq({ items, heading = "Straight Answers" }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
  return (
    <section className="faq-wrap">
      <div className="shell">
        <h2>{heading}</h2>
        <div className="faq-grid">
          {items.map((i) => (
            <div className="faq-cell" key={i.q}>
              <h3>{i.q}</h3>
              <p>{i.a}</p>
            </div>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </div>
    </section>
  );
}

/** Loud photo placeholder — replace with real local shots before launch. */
export function Shot({ note, wide = false }) {
  return (
    <div
      className={`shot${wide ? " shot-wide" : ""}`}
      role="img"
      aria-label={`Photo placeholder: ${note}`}
    >
      <strong>⚠ PHOTO PLACEHOLDER</strong>
      <span>{note}</span>
    </div>
  );
}

/** Quote form — posts to SITE.formEndpoint (wire before launch). */
export function QuoteForm({ heading = "Get a Fast Quote" }) {
  return (
    <div className="qcard">
      <h2>{heading}</h2>
      <form action={SITE.formEndpoint} method="POST">
        <label>
          Name
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" required autoComplete="tel" />
        </label>
        <label>
          What needs cleaning?
          <select name="service" defaultValue="Driveway / concrete">
            <option>Driveway / concrete</option>
            <option>House exterior (soft wash)</option>
            <option>Fence or patio</option>
            <option>Multiple / whole exterior</option>
          </select>
        </label>
        <label>
          Neighborhood
          <input
            type="text"
            name="neighborhood"
            placeholder="e.g. Star Trail, Lakes of Prosper"
          />
        </label>
        <button type="submit" className="btn btn-go">
          Send — We Reply Same Day
        </button>
      </form>
    </div>
  );
}
