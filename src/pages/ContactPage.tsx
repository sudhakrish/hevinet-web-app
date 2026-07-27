import { useState } from "react";
import { siteInfo, products } from "../data/site";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    country: "",
    product: "",
    message: "",
  });
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message?: string }>({ type: "idle" });

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    if (status.type !== "idle") {
      setStatus({ type: "idle" });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, company, country, product, message } = form;

    if (!name || !company || !country || !product || !message) {
      setStatus({ type: "error", message: "Please complete all fields before submitting your inquiry." });
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, company, country, product, message }),
      });

      const text = await response.text();
      let data: { error?: string; success?: boolean } = {};

      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        // If the server returns invalid JSON, keep the raw text available.
        data = { error: text || "Unable to send inquiry. Please try again later." };
      }

      if (!response.ok) {
        throw new Error(data.error || "Unable to send inquiry. Please try again later.");
      }

      setStatus({ type: "success", message: "Thank you! Your inquiry has been sent successfully." });
      setForm({ name: "", company: "", country: "", product: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send inquiry. Please try again later.",
      });
    }
  };

  return (
    <section>
      <p className="eyebrow">Get in touch</p>
      <h2 className="section-title">Contact <span className="accent">Us</span></h2>
      <p className="section-intro">{siteInfo.contact.intro}</p>
      <div className="contact-wrap">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" value={form.name} onChange={handleChange("name")} placeholder="Your name" required />

          <label htmlFor="company">Company Name</label>
          <input id="company" name="company" type="text" value={form.company} onChange={handleChange("company")} placeholder="Your company" required />

          <label htmlFor="country">Country</label>
          <input id="country" name="country" type="text" value={form.country} onChange={handleChange("country")} placeholder="Your country" required />

          <label htmlFor="product">Product of Interest</label>
          <select id="product" name="product" value={form.product} onChange={handleChange("product")} required>
            <option value="">Select a product</option>
            {products.map((product) => (
              <option key={product.slug} value={product.shortName}>
                {product.shortName}
              </option>
            ))}
          </select>

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange("message")} placeholder="Tell us about your requirement" required />

          <button className="btn btn-primary" type="submit" style={{ marginTop: 20 }}>
            Send Inquiry
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
            </div>
          )}
        </form>

        <div className="contact-details">
          <div className="item">
            <h4>Registered Office</h4>
            <p>Chennai, Tamil Nadu, India</p>
          </div>
          <div className="item">
            <h4>Phone / WhatsApp</h4>
            <p>+91 97898 51808</p>
          </div>
          <div className="item">
            <h4>Email</h4>
            <p>sales@hevinet.com</p>
          </div>
          <div className="item">
            <h4>Business Hours</h4>
            <p>24/7 operational support with continuous service availability and rapid inquiry response.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
