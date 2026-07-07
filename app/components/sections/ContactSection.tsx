import { siteData } from "../../data/site";
import { Section } from "../ui/Section";

export function ContactSection() {
  return (
    <Section id="contact-us" title={siteData.contact.title}>
      <p className="section-text" style={{ maxWidth: "760px", margin: "0 auto 2rem" }}>
        {siteData.contact.description}
      </p>
      <div className="section-grid columns-2" style={{ alignItems: "start" }}>
        <div className="section-card">
          <h3 style={{ marginTop: 0, marginBottom: "0.75rem", color: "var(--primary-color)" }}>
            Reach out
          </h3>
          <div style={{ display: "grid", gap: "1rem" }}>
            {siteData.contact.info.map((item) => (
              <div key={item.label}>
                <strong>{item.label}:</strong>
                <p style={{ margin: "0.25rem 0 0", color: "var(--muted-color)" }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <form className="section-card" style={{ display: "grid", gap: "1rem" }}>
          <label style={{ display: "grid", gap: "0.5rem" }}>
            Name
            <input type="text" placeholder="Your name" style={{ padding: "0.9rem 1rem", borderRadius: "12px", border: "1px solid #ccc" }} />
          </label>
          <label style={{ display: "grid", gap: "0.5rem" }}>
            Email
            <input type="email" placeholder="Your email" style={{ padding: "0.9rem 1rem", borderRadius: "12px", border: "1px solid #ccc" }} />
          </label>
          <label style={{ display: "grid", gap: "0.5rem" }}>
            Message
            <textarea rows={5} placeholder="Tell us about your request" style={{ padding: "0.9rem 1rem", borderRadius: "12px", border: "1px solid #ccc", resize: "vertical" }} />
          </label>
          <button
            type="button"
            style={{
              backgroundColor: "var(--primary-color)",
              color: "white",
              border: "none",
              borderRadius: "999px",
              padding: "1rem 1.5rem",
              cursor: "pointer",
              fontWeight: "700",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
}
