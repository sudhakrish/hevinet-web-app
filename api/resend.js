export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch (error) {
      return res.status(400).json({ error: "Invalid JSON payload." });
    }
  }

  const { name, company, email, mobile = "", country, product, message } = body || {};

  if (!name || !company || !email || !country || !product || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "noreply@hevinet.in";
  const toEmail = process.env.CONTACT_EMAIL || "hevinet.official@gmail.com";

  if (!apiKey) {
    return res.status(500).json({ error: "Resend API key is not configured." });
  }

  const text = `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nMobile: ${mobile || "N/A"}\nCountry: ${country}\nProduct of interest: ${product}\nMessage:\n${message}`;
  const html = `
    <div style="font-family: Arial, sans-serif; font-size: 14px; color: #111;">
      <h2>New Hevinet inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobile || "N/A"}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Product of interest:</strong> ${product}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: toEmail,
      reply_to: email,
      subject: `Hevinet inquiry from ${name}`,
      text,
      html,
    }),
  });

  const responseText = await response.text();
  if (!response.ok) {
    return res.status(response.status).json({ error: responseText || "Resend API failed." });
  }

  const data = JSON.parse(responseText || "{}");
  return res.status(200).json({ success: true, messageId: data.id });
}
