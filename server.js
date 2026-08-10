import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 4174);
const host = process.env.HOST || "127.0.0.1";

app.use(cors());
app.use(express.json());

const createTransporter = async () => {
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER || "resend";
  const smtpPass = process.env.SMTP_PASS || process.env.RESEND_API_KEY;

  if (smtpHost && smtpPass) {
    return nodemailer.createTransport({
      host: smtpHost,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });
  }

  if (process.env.NODE_ENV !== "production") {
    const testAccount = await nodemailer.createTestAccount();
    console.warn("Using Ethereal test account for local email delivery.");
    return nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }

  throw new Error(
    "Mail server is not configured. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS in the backend environment."
  );
};

const sendContactEmail = async ({ name, company, email, mobile, country, product, message }) => {
  const transporter = await createTransporter();
  const fromEmail = process.env.RESEND_FROM_EMAIL || "noreply@hevinet.in";

  const mailOptions = {
    from: fromEmail,
    replyTo: email,
    to: process.env.CONTACT_EMAIL || "hevinet.official@gmail.com",
    subject: `Hevinet inquiry from ${name}`,
    text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nMobile: ${mobile || "N/A"}\nCountry: ${country}\nProduct of interest: ${product}\nMessage:\n${message}`,
  };

  const info = await transporter.sendMail(mailOptions);
  return {
    info,
    previewUrl: nodemailer.getTestMessageUrl(info) || undefined,
  };
};

const sendContactEmailWithResend = async ({ name, company, email, mobile, country, product, message }) => {
  const apiKey = process.env.RESEND_API_KEY;
  const envFromEmail = process.env.RESEND_FROM_EMAIL;
  const fromEmail = envFromEmail?.endsWith("@hevinet.com") ? "noreply@hevinet.in" : envFromEmail || "noreply@hevinet.in";
  const toEmail = process.env.CONTACT_EMAIL || "hevinet.official@gmail.com";

  if (!apiKey || !fromEmail) {
    throw new Error("Resend is not configured. Set RESEND_API_KEY and RESEND_FROM_EMAIL.");
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
      subject: `Hevinet inquiry from ${name}`,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend API error: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  return {
    messageId: data.id,
  };
};

app.post("/api/contact", async (req, res) => {
  const { name, company, email, mobile, country, product, message } = req.body;

  if (!name || !company || !email || !country || !product || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const result = await sendContactEmail({ name, company, email, mobile, country, product, message });
    res.json({ success: true, previewUrl: result.previewUrl });
  } catch (error) {
    console.error("Contact form send error:", error);
    res.status(500).json({
      error:
        error instanceof Error
          ? error.message
          : "Unable to send inquiry. Please try again later.",
    });
  }
});

app.post("/api/resend", async (req, res) => {
  const { name, company, email, mobile, country, product, message } = req.body;

  if (!name || !company || !email || !country || !product || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const result = await sendContactEmailWithResend({ name, company, email, mobile, country, product, message });
    res.json({ success: true, resent: true, messageId: result.messageId });
  } catch (error) {
    console.error("Resend inquiry error:", error);
    res.status(500).json({
      error:
        error instanceof Error
          ? error.message
          : "Unable to resend inquiry. Please try again later.",
    });
  }
});

app.listen(port, host, () => {
  console.log(`Contact API running on http://${host}:${port}`);
});
