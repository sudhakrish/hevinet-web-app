import { siteData } from "../../data/site";
import { Section } from "../ui/Section";

export function ProductsSection() {
  return (
    <Section id="products" title="">
      <div style={{ maxWidth: 1120, width: "100%", margin: "0 auto", textAlign: "left" }}>
        <span className="contact-eyebrow" style={{ display: "inline-flex", marginBottom: "1.5rem" }}>{siteData.products.title}</span>

        <p className="section-text" style={{ maxWidth: "760px", margin: "0 0 2rem 0" }}>
          {siteData.products.highlights[0].content}
        </p>

        <div className="section-grid columns-2">
        {siteData.products.categories.map((category) => (
          <div key={category.title} className="section-card">
            <h3 style={{ marginTop: 0, marginBottom: "0.75rem", color: "var(--primary-color)" }}>
              {category.title}
            </h3>
            <p className="section-text" style={{ margin: 0 }}>{category.description}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "2rem" }}>
        <div className="section-grid columns-3">
          {siteData.products.highlights.map((highlight) => (
            <div key={highlight.title} className="section-card">
              <h4 style={{ marginTop: 0, marginBottom: "0.75rem", color: "var(--accent-color)" }}>
                {highlight.title}
              </h4>
              <p className="section-text" style={{ margin: 0 }}>{highlight.content}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </Section>
  );
}
