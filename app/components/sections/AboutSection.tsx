import { siteData } from "../../data/site";
import { Section } from "../ui/Section";

export function AboutSection() {
  return (
    <Section id="about-us" title={siteData.about.title}>
      <p className="section-text" style={{ maxWidth: "760px", margin: "0 auto 2rem" }}>
        {siteData.about.description}
      </p>
      <div className="section-grid columns-3">
        {siteData.about.cards.map((card) => (
          <div key={card.title} className="section-card">
            <h3 style={{ marginTop: 0, marginBottom: "0.75rem", color: "var(--primary-color)" }}>
              {card.title}
            </h3>
            <p className="section-text" style={{ margin: 0 }}>{card.subtitle}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
