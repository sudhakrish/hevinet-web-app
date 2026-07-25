import { siteData } from "../../data/site";
import { Section } from "../ui/Section";

export function ContactSection() {
  return (
    <Section id="contact-us" title="">
      <div className="contact-section">
        <div className="contact-grid">
          <div className="contact-panel">
            <span className="contact-eyebrow">Contact us</span>
            <h2 className="contact-heading">Start your trade journey</h2>
            <p className="contact-copy">Tell us about your trade requirements. A specialist from our desk will respond within one business day.</p>

            <div className="contact-info-list">
              {siteData.contact.info.map((item) => (
                <div key={item.label} className="contact-info-item">
                  <div className="contact-info-key">{item.label}</div>
                  <p className="contact-info-value">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-shell">
            <div className="contact-form-card">
              <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
                <div className="form-row two-column">
                  <label>
                    Full name
                    <input type="text" placeholder="James Thor" />
                  </label>
                  <label>
                    Company
                    <input type="text" placeholder="Acme Indus" />
                  </label>
                </div>

                <div className="form-row two-column">
                  <label>
                    Email
                    <input type="email" placeholder="james@acme.com" />
                  </label>
                  <label>
                    Country
                    <input type="text" placeholder="United States" />
                  </label>
                </div>

                <div className="form-row">
                  <span className="form-label">Trade type</span>
                  <div className="trade-type-group">
                    <button type="button" className="trade-type-button active">
                      Export
                    </button>
                    <button type="button" className="trade-type-button">
                      Import
                    </button>
                    <button type="button" className="trade-type-button">
                      Both
                    </button>
                  </div>
                </div>

                <div className="form-row">
                  <label>
                    Trade requirements
                    <textarea rows={6} placeholder="Describe your goods, target markets, volumes..." />
                  </label>
                </div>

                <button type="submit" className="contact-submit-button">
                  Submit trade inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
