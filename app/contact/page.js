import { SITE } from "../../lib/config";
import { QuoteForm, Faq } from "../../components/ui";

export const metadata = {
  title: "Contact Prosper Pressure Washing — Fast Quotes",
  description:
    "Get a pressure washing quote in Prosper, TX. Call or send the form — most quotes same day, many priced straight from your address.",
  alternates: { canonical: "/contact/" },
};

const faqItems = [
  {
    q: "How fast can you get me on the schedule?",
    a: "Usually within the week, and faster for single-surface jobs like a driveway. Spring and pre-holiday weeks book up first — call ahead of the party, not the day before.",
  },
  {
    q: "Do I need to be home during the work?",
    a: "No, as long as we have water spigot access and gates are unlocked. Most jobs happen while owners are at work; you come home to the after photo.",
  },
];

export default function Contact() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <h1>
              Contact <em>{SITE.name}</em>
            </h1>
            <p className="hero-sub">
              Call, or send the form and we&rsquo;ll come back with a number —
              same business day.
            </p>
            <a href={`tel:${SITE.phoneTel}`} className="hero-phone">
              {SITE.phone}
            </a>
            <p className="hero-sub">{SITE.hours}</p>
            <p className="hero-sub">
              Service area: all of Prosper, TX — Lakes of Prosper, Tanners
              Mill, Artesia, Windsong Ranch, Star Trail, Whitley Place, Gentle
              Creek, and downtown.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section>
        <div className="shell split">
          <div>
            <h2>Where We Work</h2>
            <iframe
              src={SITE.mapEmbedSrc}
              className="map-box"
              title="Map of Prosper, TX service area"
              loading="lazy"
            />
          </div>
          <div>
            <h2>Good to Know</h2>
            <p>
              Photos speed everything up. Snap the driveway, the streaked
              wall, or the gray fence and have them ready — most jobs can be
              priced from photos plus your address.
            </p>
          </div>
        </div>
      </section>

      <Faq items={faqItems} heading="Scheduling Questions" />
    </>
  );
}
