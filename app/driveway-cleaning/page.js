import { SITE } from "../../lib/config";
import { QuoteForm, Faq, Shot } from "../../components/ui";

export const metadata = {
  title: "Driveway & Concrete Cleaning in Prosper, TX",
  description:
    "Driveway cleaning in Prosper, TX — surface cleaning for concrete, sidewalks, and curbs. Rust trails, red clay stains, tire marks, and years of gray lifted in one visit.",
  alternates: { canonical: "/driveway-cleaning/" },
};

const faqItems = [
  {
    q: "Why is my driveway gray when the concrete is only a few years old?",
    a: "That gray is a biofilm of dirt, algae, and exhaust residue, not the concrete's actual color. A surface cleaner takes it back to near-original. The color difference at the property line usually sells the neighbors.",
  },
  {
    q: "Can you remove rust stains from sprinkler water?",
    a: "Yes — rust needs a dedicated rust remover applied before washing; pressure alone won't touch it. Prosper irrigation water is mineral-heavy, so those orange arcs along driveways and curbs are one of our most common jobs.",
  },
  {
    q: "What about oil spots?",
    a: "We degrease and hot-treat them. Fresh spots usually come out fully; an old spot that has soaked in for years lightens dramatically but may leave a shadow. We'll tell you which yours is before we start.",
  },
  {
    q: "Do you use a surface cleaner or just a wand?",
    a: "A rotary surface cleaner for the field of the driveway — even results, no wand stripes — then edge and detail work by hand. Wand-only driveway jobs leave the zebra marks you've seen on other streets.",
  },
];

export default function DrivewayCleaning() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <h1>
              Driveway Cleaning in <em>Prosper, TX</em>
            </h1>
            <p className="hero-sub">
              Concrete surface cleaning for driveways, sidewalks, curbs, and
              walkways — even finish, edge to edge, no wand stripes.
            </p>
            <a href={`tel:${SITE.phoneTel}`} className="hero-phone">
              {SITE.phone}
            </a>
          </div>
          <QuoteForm heading="Quote My Driveway" />
        </div>
      </section>

      <section>
        <div className="shell">
          <h2>What a Driveway Visit Includes</h2>
          <ul>
            <li>Pre-treatment of organic staining and problem spots</li>
            <li>Rotary surface cleaning of the full slab</li>
            <li>Rust and clay-stain treatment where needed (most Prosper jobs need it)</li>
            <li>Edges, expansion joints, and curb faces detailed by hand</li>
            <li>Full rinse of paths, beds, and the street gutter</li>
          </ul>
          <div className="shot-pair">
            <Shot note="Real photo: BEFORE — gray driveway with rust arcs from sprinklers (typical Prosper new-build)." />
            <Shot note="Real photo: AFTER — same driveway, same angle, restored. Real job, no stock." />
          </div>
          <h2>The Prosper Driveway Problem Set</h2>
          <p>
            Prosper driveways are big — three-car fronts are standard in Star
            Trail, Windsong Ranch, and Lakes of Prosper — and they collect a
            specific local mix: red clay wash-out from newly landscaped beds,
            iron staining where the irrigation overspray hits, and
            construction dust from whichever phase is building nearby. Homes
            near active sections see it worst; if your street still has builder
            signs on it, your concrete is aging on fast-forward.
          </p>
          <p>
            One visit resets it. Most homeowners then rebook every 12–18
            months, which keeps the slab from ever getting back to gray.
          </p>
        </div>
      </section>

      <Faq items={faqItems} />

      <section className="cta-slab">
        <div className="shell">
          <h2>Priced From Your Address</h2>
          <p>Standard driveways quoted over the phone — no visit needed.</p>
          <a href={`tel:${SITE.phoneTel}`} className="btn">
            Call {SITE.phone}
          </a>
        </div>
      </section>
    </>
  );
}
