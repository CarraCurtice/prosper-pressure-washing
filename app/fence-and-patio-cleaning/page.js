import { SITE } from "../../lib/config";
import { QuoteForm, Faq, Shot } from "../../components/ui";

export const metadata = {
  title: "Fence & Patio Cleaning in Prosper, TX",
  description:
    "Cedar fence cleaning and patio, pool deck, and outdoor-living washing in Prosper, TX. Lifts the gray from wood safely and preps fences for stain.",
  alternates: { canonical: "/fence-and-patio-cleaning/" },
};

const faqItems = [
  {
    q: "Can pressure washing ruin a cedar fence?",
    a: "Absolutely — too much pressure furs the wood and carves lines into it. Cedar gets cleaned at low pressure with a wood-safe brightener. Done right, the gray oxidation lifts and the grain underneath comes back without damage.",
  },
  {
    q: "Should I clean my fence before staining it?",
    a: "Always. Stain over gray oxidation fails early and looks blotchy. A proper clean-and-brighten is the prep step — many customers book us right before their stain contractor, or before re-staining to meet HOA color requirements.",
  },
  {
    q: "Can you clean travertine and cool-deck around pools?",
    a: "Yes, with surface-appropriate pressure and cleaners — travertine, stamped concrete, and spray-deck coatings each get treated differently. We rinse thoroughly so wash water doesn't end up in the pool.",
  },
  {
    q: "What about outdoor kitchens and pergolas?",
    a: "Part of the same visit. Stone kitchen surrounds, pergola posts, and patio ceilings collect the same dust and organic film as everything else out back. Tell us what's on the patio when you call and we'll quote the whole space.",
  },
];

export default function FencePatioCleaning() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <h1>
              Fence &amp; Patio Cleaning in <em>Prosper, TX</em>
            </h1>
            <p className="hero-sub">
              Cedar fences brought back from gray, patios and pool decks
              cleaned without chewing up the surface.
            </p>
            <a href={`tel:${SITE.phoneTel}`} className="hero-phone">
              {SITE.phone}
            </a>
          </div>
          <QuoteForm heading="Quote My Fence or Patio" />
        </div>
      </section>

      <section>
        <div className="shell">
          <h2>The Backyard Package</h2>
          <ul>
            <li>Cedar privacy fences — clean and brighten, stain-prep ready</li>
            <li>Patios: stamped concrete, pavers, travertine, cool deck</li>
            <li>Pool deck surrounds, rinsed away from the water</li>
            <li>Outdoor kitchens, pergolas, and patio ceilings</li>
            <li>Board-on-board and cap-rail fence detail work</li>
          </ul>
          <p>
            Prosper backyards work hard — board-on-board cedar around almost
            every lot, big covered patios, and pool decks that host all
            summer. Texas sun turns unsealed cedar gray in about two years,
            and most Prosper HOAs expect fences kept to a maintained standard,
            which is why a fence clean here is often step one of a staining
            project. We leave the wood clean, bright, and dry-ready for
            whoever holds the stain sprayer — you, or your stain contractor.
          </p>
          <div className="shot-pair">
            <Shot note="Real photo: cedar fence mid-clean — half gray, half restored grain. The money shot for this page." />
            <Shot note="Real photo: clean travertine or stamped-concrete pool deck at a Prosper home, water visible." />
          </div>
        </div>
      </section>

      <Faq items={faqItems} />

      <section className="cta-slab">
        <div className="shell">
          <h2>Fence Looking Gray?</h2>
          <p>It&rsquo;s not dead — it&rsquo;s dirty. One visit brings it back.</p>
          <a href={`tel:${SITE.phoneTel}`} className="btn">
            Call {SITE.phone}
          </a>
        </div>
      </section>
    </>
  );
}
