import { SITE } from "../../lib/config";
import { Faq } from "../../components/ui";

export const metadata = {
  title: "Prosper, TX Pressure Washing Service Area",
  description:
    "Pressure washing across Prosper, TX: Lakes of Prosper, Tanners Mill, Artesia, Windsong Ranch, Star Trail, Whitley Place, Gentle Creek, and downtown Prosper.",
  alternates: { canonical: "/service-areas/" },
};

const areas = [
  {
    name: "Lakes of Prosper",
    note: "Close to downtown and Prosper High. Established enough that driveways and fences are on their second or third cleaning cycle — we know these streets well.",
  },
  {
    name: "Tanners Mill",
    note: "East side off Prosper Trail. Larger lots mean longer fence runs and bigger driveway squares — jobs here are usually bundled packages.",
  },
  {
    name: "Artesia",
    note: "Far west Prosper, north of 380. Homes here sit closest to the corridor construction dust, and light-colored elevations show it first. House washes are the top request.",
  },
  {
    name: "Windsong Ranch",
    note: "Big community, phased build-out — which means new-construction dust drifting onto finished streets for years. Driveway and house-wash combos are the standard call.",
  },
  {
    name: "Star Trail",
    note: "White brick, light stone, dark trim — gorgeous and quick to show algae shadowing. Soft washing keeps these elevations looking like the model home.",
  },
  {
    name: "Whitley Place",
    note: "Mature trees along Wilson Creek drop organic debris that feeds mildew on shaded patios and north walls. Patio and fence work dominates here.",
  },
  {
    name: "Gentle Creek & Whispering Farms",
    note: "Custom homes, stucco and stone mixes, long fence lines on acreage-style lots. Every quote is a walk-around; every job is different.",
  },
  {
    name: "Downtown Prosper",
    note: "The established blocks off Broadway — older concrete, mature landscaping, and some of the most satisfying before-and-afters in town.",
  },
];

const faqItems = [
  {
    q: "Do you cover all of Prosper?",
    a: "Yes — anywhere in town limits, both the Collin County and Denton County sides. If your neighborhood isn't named above, you're still covered.",
  },
  {
    q: "Do you work outside Prosper?",
    a: "Occasionally, for addresses just over the line when the schedule allows. Call with your cross streets and we'll give you a straight yes or no.",
  },
];

export default function ServiceAreas() {
  return (
    <>
      <section className="hero">
        <div className="shell">
          <h1>
            Serving All of <em>Prosper, TX</em>
          </h1>
          <p className="hero-sub">
            Every neighborhood, both sides of Preston Road, both counties.
            Here&rsquo;s what we actually clean where.
          </p>
          <a href={`tel:${SITE.phoneTel}`} className="hero-phone">
            {SITE.phone}
          </a>
        </div>
      </section>

      <section>
        <div className="shell">
          <div className="area-blocks">
            {areas.map((a) => (
              <div className="area-block" key={a.name}>
                <h3>{a.name}</h3>
                <p>{a.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="shell split">
          <div>
            <h2>Local Means Faster and Cheaper</h2>
            <p>
              No trip fees, no minimums padded for drive time. Our equipment
              lives minutes from your street, so a driveway job in Lakes of
              Prosper or a fence in Tanners Mill fits into the schedule the
              same week you call — often the same day the HOA letter shows up.
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

      <Faq items={faqItems} heading="Coverage Questions" />
    </>
  );
}
