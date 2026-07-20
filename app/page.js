import Link from "next/link";
import { SITE } from "../lib/config";
import { QuoteForm, Faq, Shot } from "../components/ui";

export const metadata = {
  title: "Pressure Washing in Prosper, TX — Driveways, Houses, Fences",
  description:
    "Pressure washing in Prosper, TX: driveway and concrete cleaning, house soft washing, fence and patio cleaning. Local crew, fast quotes, careful with your surfaces.",
  alternates: { canonical: "/" },
};

const faqItems = [
  {
    q: "Pressure washing vs. soft washing — which does my house need?",
    a: "Concrete gets pressure. Siding, brick, stone, and stucco get a soft wash — low pressure plus the right cleaning solution — because high pressure can force water behind mortar joints and strip sealant. We use both, on the right surfaces.",
  },
  {
    q: "What's the orange-brown staining on my curb and driveway edges?",
    a: "Usually two culprits in Prosper: iron-rich irrigation water leaving rust trails, and red clay splash-back from beds and bare yards after storms. Both need specific treatments, not just more pressure — blasting clay stains spreads them.",
  },
  {
    q: "How much does driveway cleaning cost?",
    a: "Priced by square footage and condition — a standard 3-car Prosper driveway is a predictable job and we can usually quote it over the phone from your address. Whole-exterior packages bundle driveway, house, and fence for less than booking each separately.",
  },
  {
    q: "Will you damage my plants or my neighbor's car?",
    a: "We pre-wet and rinse landscaping, control overspray, and cover anything sensitive near the work area. If your HOA has rules about runoff or work hours — several Prosper communities do — we work within them.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <h1>
              Pressure Washing in <em>Prosper, TX</em>
            </h1>
            <p className="hero-sub">
              Driveways that lost their color, brick with green shadow lines,
              fences gone gray — a local crew that puts exteriors back the way
              they looked on closing day.
            </p>
            <a href={`tel:${SITE.phoneTel}`} className="hero-phone">
              {SITE.phone}
            </a>
            <ul className="hero-ticks">
              <li>Local Prosper crew</li>
              <li>Quotes from your address, same day</li>
              <li>Right method for every surface</li>
              <li>HOA-letter turnarounds</li>
            </ul>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section>
        <div className="shell">
          <h2>What We Clean</h2>
          <div className="svc-cards">
            <div className="svc-card">
              <Shot note="Real photo: half-cleaned driveway — one pass done, one strip still gray. Shoot on an actual Prosper job." />
              <h3>
                <Link href="/driveway-cleaning/">Driveways &amp; Concrete</Link>
              </h3>
              <p>
                Surface cleaning for driveways, sidewalks, and curbs — tire
                marks, rust trails, red-clay staining, gum, and grime.
              </p>
            </div>
            <div className="svc-card">
              <Shot note="Real photo: soft-wash rinse on brick/stone elevation of a Prosper home, wand visible." />
              <h3>
                <Link href="/house-washing/">House Washing</Link>
              </h3>
              <p>
                Low-pressure soft wash for brick, stone, siding, and stucco.
                Kills the algae causing the streaks instead of smearing it.
              </p>
            </div>
            <div className="svc-card">
              <Shot note="Real photo: cedar fence half-washed — gray vs. restored wood grain, sharp contrast line." />
              <h3>
                <Link href="/fence-and-patio-cleaning/">Fences &amp; Patios</Link>
              </h3>
              <p>
                Cedar fences, patios, and pool decks cleaned at pressures that
                lift the gray without chewing up the wood.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="shell split">
          <div>
            <h2>Why Prosper Exteriors Get Dirty Fast</h2>
            <p>
              This town is basically a construction zone with great schools.
              Between the US 380 corridor work and new phases still building
              out in Windsong Ranch and Star Trail, fine dust settles on every
              surface facing a road. Add North Texas humidity swings — algae
              shadows on north-facing brick by year three — and sprinkler
              systems that leave rust arcs on the concrete, and a two-year-old
              house can look ten.
            </p>
            <p>
              We see the same patterns street by street, which means quotes are
              fast and the fix is usually routine.{" "}
              <Link href="/service-areas/">
                Check your neighborhood on our service-area page.
              </Link>
            </p>
          </div>
          <iframe
            src={SITE.mapEmbedSrc}
            className="map-box"
            title="Map of Prosper, TX"
            loading="lazy"
          />
        </div>
      </section>

      <Faq items={faqItems} />

      <section className="cta-slab">
        <div className="shell">
          <h2>Got an HOA Letter? A Party Coming?</h2>
          <p>
            Text us your address and what needs cleaning — most quotes go out
            the same day.
          </p>
          <a href={`tel:${SITE.phoneTel}`} className="btn">
            Call {SITE.phone}
          </a>
        </div>
      </section>
    </>
  );
}
