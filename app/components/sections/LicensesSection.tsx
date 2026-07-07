import { siteData } from "../../data/site";
import { Section } from "../ui/Section";

export function LicensesSection() {
  return (
    <Section id="licenses" title={siteData.licenses.title}>
      <div className="section-grid columns-3">
        {siteData.licenses.items.map((item) => (
          <div key={item.title} className="section-card" style={{ minHeight: "180px" }}>
            <h3 style={{ marginTop: 0, marginBottom: "0.75rem", color: "var(--primary-color)" }}>
              {item.title}
            </h3>
            <p className="section-text" style={{ margin: 0 }}>{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
