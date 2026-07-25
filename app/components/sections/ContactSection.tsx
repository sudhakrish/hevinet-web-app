"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { siteData } from "../../data/site";

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "0.9rem 1rem",
  borderRadius: "4px",
  border: "1px solid #d0d0d0",
  backgroundColor: "white",
  fontSize: "0.95rem",
  fontFamily: "inherit",
  color: "var(--text-color)",
  boxSizing: "border-box",
};

const fieldLabelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.7rem",
  fontWeight: 700,
  color: "var(--muted-color)",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  marginBottom: "0.5rem",
};

function FieldLabel({ children }: { children: ReactNode }) {
  return <label style={fieldLabelStyle}>{children}</label>;
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        borderLeft: "3px solid var(--primary-color)",
        paddingLeft: "1rem",
      }}
    >
      <div
        style={{
          fontSize: "0.72rem",
          fontWeight: 700,
          color: "var(--primary-color)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "0.4rem",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: "0.95rem",
          color: "var(--text-color)",
          fontWeight: 500,
          lineHeight: 1.5,
        }}
      >
        {value}
      </div>
    </div>
  );
}

export function ContactSection() {
  const [tradeType, setTradeType] = useState<string>(
    siteData.contact.form.tradeTypes[0],
  );

  return (
    <>
      <section
        id="contact-us"
        style={{
          backgroundColor: "var(--page-background)",
          padding: "5rem 2rem 4.5rem",
          scrollMarginTop: "6rem",
        }}
      >
        <div className="contact-grid">
          {/* LEFT: contact info */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.85rem",
                marginBottom: "1.25rem",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "34px",
                  height: "3px",
                  backgroundColor: "var(--primary-color)",
                }}
              />
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "var(--primary-color)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                {siteData.contact.label}
              </span>
            </div>

            <h2
              style={{
                fontSize: "2.6rem",
                margin: "0 0 1.25rem",
                fontWeight: 800,
                color: "var(--text-color)",
                textTransform: "uppercase",
                lineHeight: 1.05,
                letterSpacing: "0.01em",
              }}
            >
              {siteData.contact.title}
            </h2>

            <p
              style={{
                fontSize: "1rem",
                color: "var(--muted-color)",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
                maxWidth: "440px",
              }}
            >
              {siteData.contact.description}
            </p>

            <div style={{ display: "grid", gap: "1.5rem" }}>
              {siteData.contact.info.map((item) => (
                <InfoItem
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: trade inquiry form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              backgroundColor: "#e6e6e6",
              borderRadius: "8px",
              padding: "2.5rem 2rem",
              display: "grid",
              gap: "1.25rem",
            }}
          >
            <div className="contact-fields-row">
              <div>
                <FieldLabel>{siteData.contact.form.fullNameLabel}</FieldLabel>
                <input
                  type="text"
                  placeholder={siteData.contact.form.fullNamePlaceholder}
                  style={inputStyle}
                />
              </div>
              <div>
                <FieldLabel>{siteData.contact.form.companyLabel}</FieldLabel>
                <input
                  type="text"
                  placeholder={siteData.contact.form.companyPlaceholder}
                  style={inputStyle}
                />
              </div>
            </div>

            <div className="contact-fields-row">
              <div>
                <FieldLabel>{siteData.contact.form.emailLabel}</FieldLabel>
                <input
                  type="email"
                  placeholder={siteData.contact.form.emailPlaceholder}
                  style={inputStyle}
                />
              </div>
              <div>
                <FieldLabel>{siteData.contact.form.countryLabel}</FieldLabel>
                <input
                  type="text"
                  placeholder={siteData.contact.form.countryPlaceholder}
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <FieldLabel>{siteData.contact.form.tradeTypeLabel}</FieldLabel>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${siteData.contact.form.tradeTypes.length}, 1fr)`,
                  gap: 0,
                }}
              >
                {siteData.contact.form.tradeTypes.map((type, index) => {
                  const isActive = tradeType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setTradeType(type)}
                      style={{
                        position: "relative",
                        backgroundColor: isActive
                          ? "var(--primary-color)"
                          : "white",
                        color: isActive ? "white" : "var(--text-color)",
                        border: `1px solid ${isActive ? "var(--primary-color)" : "#d0d0d0"}`,
                        marginLeft: index === 0 ? 0 : "-1px",
                        zIndex: isActive ? 1 : 0,
                        padding: "0.9rem 1rem",
                        cursor: "pointer",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        transition:
                          "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease",
                      }}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <FieldLabel>
                {siteData.contact.form.requirementsLabel}
              </FieldLabel>
              <textarea
                rows={5}
                placeholder={siteData.contact.form.requirementsPlaceholder}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: "120px",
                  lineHeight: 1.5,
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: "var(--primary-color)",
                color: "white",
                border: "none",
                padding: "1.1rem 1.5rem",
                cursor: "pointer",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginTop: "0.25rem",
                transition: "background-color 0.2s ease",
              }}
            >
              {siteData.contact.form.submitLabel}
            </button>
          </form>
        </div>
      </section>

      <style>{`
        .contact-grid {
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: start;
        }
        .contact-fields-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .contact-fields-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
