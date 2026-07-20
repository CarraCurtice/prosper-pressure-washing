import { SITE } from "../../lib/config";
import { QuoteForm, Faq, Shot } from "../../components/ui";

export const metadata = {
  title: "House Washing & Soft Wash in Prosper, TX",
  description:
    "Soft-wash house washing in Prosper, TX for brick, stone, stucco, and siding. Removes algae streaks and construction dust without high-pressure damage.",
  alternates: { canonical: "/house-washing/" },
};

const faqItems = [
  {
    q: "Why are there green-black streaks on the north side of my house?",
    a: "Algae and mildew. North-facing walls dry slowest, and North Texas humidity feeds growth — it shows up on white brick and light stone first, which is exactly what most newer Prosper elevations are built with. Soft washing kills it at the root instead of smearing it around.",
  },
  {
    q: "Is soft washing safe for white brick and mortar wash finishes?",
    a: "Yes — that's the point of it. The painted, limewashed, and mortar-washed finishes popular in Prosper's newer builds are exactly what you should never hit with high pressure. Soft wash cleans them with solution and rinse pressure about as strong as a garden hose.",
  },
  {
    q: "How often does a house need washing here?",
    a: "Every 2–3 years for most homes; sooner if you're north-facing on a greenbelt or near active construction. The algae comes back faster once it's established, so the first wash is the one that buys you the longest interval.",
  },
  {
    q: "Do you clean gutters and soffits too?",
    a: "Exterior gutter faces and soffits, yes — the black 'tiger striping' on gutters comes off as part of a house wash. Interior gutter clean-outs are a separate add-on; ask when you call.",
  },
];

export default function HouseWashing() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <h1>
              House Washing in <em>Prosper, TX</em>
            </h1>
            <p className="hero-sub">
              Low-pressure soft washing for brick, stone, stucco, and siding.
              The streaks and shadows go; the mortar and sealant stay.
            </p>
            <a href={`tel:${SITE.phoneTel}`} className="hero-phone">
              {SITE.phone}
            </a>
          </div>
          <QuoteForm heading="Quote My House Wash" />
        </div>
      </section>

      <section>
        <div className="shell">
          <h2>Why Soft Wash, Not Blast</h2>
          <p>
            High pressure on a house forces water behind brick weep holes,
            strips mortar sand, etches cedar accents, and voids some siding
            warranties. A soft wash does the work chemically — an applied
            cleaning solution dwells, kills the organic growth, and rinses off
            at low pressure. It lasts longer too, because the algae is dead
            rather than redistributed.
          </p>
          <h2>Built for Prosper&rsquo;s Exteriors</h2>
          <p>
            Walk any street in Windsong Ranch or Star Trail and you&rsquo;ll
            see the palette: white and painted brick, light limestone, dark
            trim, cedar garage doors. Beautiful, and unforgiving — light
            surfaces show algae shadows and 380-corridor dust years before a
            1990s red-brick elevation would. The custom homes out in
            Whispering Farms and Gentle Creek add stucco and big stone
            water-table courses to the mix. We match method and solution to
            each surface on the elevation, not one setting for the whole
            house.
          </p>
          <div className="shot-pair">
            <Shot note="Real photo: BEFORE — algae streaks on white brick / light stone elevation, north side." />
            <Shot note="Real photo: AFTER — same elevation clean. Same angle, same lighting if possible." />
          </div>
        </div>
      </section>

      <Faq items={faqItems} />

      <section className="cta-slab">
        <div className="shell">
          <h2>Selling? Hosting? Just Tired of the Streaks?</h2>
          <p>A house wash is the cheapest curb-appeal upgrade there is.</p>
          <a href={`tel:${SITE.phoneTel}`} className="btn">
            Call {SITE.phone}
          </a>
        </div>
      </section>
    </>
  );
}
