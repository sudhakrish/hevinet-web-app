import { useState } from "react";
import { siteInfo, products } from "../data/site";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    country: "",
    product: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
    previewUrl?: string;
  }>({ type: "idle" });

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    if (status.type !== "idle") {
      setStatus({ type: "idle" });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, company, email, mobile, country, product, message } = form;

    if (!name || !company || !email || !country || !product || !message) {
      setStatus({ type: "error", message: siteInfo.contact.validationMessage });
      return;
    }

    try {
      const response = await fetch("/api/resend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, company, email, mobile, country, product, message }),
      });

      const text = await response.text();
      let data: { error?: string; success?: boolean; previewUrl?: string } = {};

      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        // If the server returns invalid JSON, keep the raw text available.
        data = { error: text || siteInfo.contact.errorMessage };
      }

      if (!response.ok) {
        throw new Error(data.error || siteInfo.contact.errorMessage);
      }

      setStatus({
        type: "success",
        message: siteInfo.contact.successMessage,
        previewUrl: data.previewUrl,
      });
      setForm({ name: "", company: "", email: "", mobile: "", country: "", product: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : siteInfo.contact.errorMessage,
      });
    }
  };

  return (
    <section>
      <p className="eyebrow">{siteInfo.contact.label}</p>
      <h2 className="section-title">{siteInfo.contact.title}</h2>
      <p className="section-intro">{siteInfo.contact.intro}</p>
      <div className="contact-wrap">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">{siteInfo.contact.fields.find((field) => field.id === "name")?.label}</label>
          <input id="name" name="name" type="text" value={form.name} onChange={handleChange("name")} placeholder={siteInfo.contact.fields.find((field) => field.id === "name")?.placeholder} required />

          <label htmlFor="company">{siteInfo.contact.fields.find((field) => field.id === "company")?.label}</label>
          <input id="company" name="company" type="text" value={form.company} onChange={handleChange("company")} placeholder={siteInfo.contact.fields.find((field) => field.id === "company")?.placeholder} required />

          <label htmlFor="email">{siteInfo.contact.fields.find((field) => field.id === "email")?.label}</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange("email")} placeholder={siteInfo.contact.fields.find((field) => field.id === "email")?.placeholder} required />

          <label htmlFor="mobile">{siteInfo.contact.fields.find((field) => field.id === "mobile")?.label}</label>
          <input id="mobile" name="mobile" type="tel" value={form.mobile} onChange={handleChange("mobile")} placeholder={siteInfo.contact.fields.find((field) => field.id === "mobile")?.placeholder} />

          <label htmlFor="country">{siteInfo.contact.fields.find((field) => field.id === "country")?.label}</label>
          <input id="country" name="country" type="text" value={form.country} onChange={handleChange("country")} placeholder={siteInfo.contact.fields.find((field) => field.id === "country")?.placeholder} required />

          <label htmlFor="product">{siteInfo.contact.fields.find((field) => field.id === "product")?.label}</label>
          <select id="product" name="product" value={form.product} onChange={handleChange("product")} required>
            <option value="">{siteInfo.contact.fields.find((field) => field.id === "product")?.placeholder}</option>
            {products.map((product) => (
              <option key={product.slug} value={product.shortName}>
                {product.shortName}
              </option>
            ))}
          </select>

          <label htmlFor="message">{siteInfo.contact.fields.find((field) => field.id === "message")?.label}</label>
          <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange("message")} placeholder={siteInfo.contact.fields.find((field) => field.id === "message")?.placeholder} required />

          <button className="btn btn-primary" type="submit" style={{ marginTop: 20 }}>
            {siteInfo.contact.submitButton}
          </button>
          {status.type !== "idle" && (
            <div
              style={{
                marginTop: 16,
                padding: "14px 16px",
                borderRadius: 12,
                backgroundColor: status.type === "success" ? "#e7f4ea" : "#fff0f0",
                color: status.type === "success" ? "#1f6f3b" : "#8a1b1b",
                border: `1px solid ${status.type === "success" ? "#b6dfc7" : "#f0b4b4"}`,
              }}
            >
              {status.message}
              {status.previewUrl && (
                <p style={{ marginTop: 12 }}>
                  {siteInfo.contact.previewLabel} <a href={status.previewUrl} target="_blank" rel="noreferrer">{siteInfo.contact.previewLinkText}</a>
                </p>
              )}
            </div>
          )}
        </form>

        <div className="contact-details">
          <div className="item">
            <h4>{siteInfo.contact.detailsHeadings.office}</h4>
            <p>{siteInfo.contact.address}</p>
          </div>
          <div className="item">
            <h4>{siteInfo.contact.detailsHeadings.phone}</h4>
            <p>{siteInfo.contact.phone}</p>
          </div>
          <div className="item">
            <h4>{siteInfo.contact.detailsHeadings.email}</h4>
            <p>{siteInfo.contact.email}</p>
          </div>
          <div className="item">
            <h4>{siteInfo.contact.detailsHeadings.hours}</h4>
            <p>{siteInfo.contact.hours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
