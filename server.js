import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 4174;

app.use(cors());
app.use(express.json());

const createTransporter = async () => {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
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

const sendContactEmail = async ({ name, company, email, country, product, message }) => {
  const transporter = await createTransporter();

  const mailOptions = {
    from: email,
    replyTo: email,
    to: process.env.CONTACT_EMAIL || "hevinet.official@gmail.com",
    subject: `Hevinet inquiry from ${name}`,
    text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nCountry: ${country}\nProduct of interest: ${product}\nMessage:\n${message}`,
  };

  const info = await transporter.sendMail(mailOptions);
  return {
    info,
    previewUrl: nodemailer.getTestMessageUrl(info) || undefined,
  };
};

app.post("/api/contact", async (req, res) => {
  const { name, company, email, country, product, message } = req.body;

  if (!name || !company || !email || !country || !product || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const result = await sendContactEmail({ name, company, email, country, product, message });
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
  const { name, company, email, country, product, message } = req.body;

  if (!name || !company || !email || !country || !product || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const result = await sendContactEmail({ name, company, email, country, product, message });
    res.json({ success: true, resent: true, previewUrl: result.previewUrl });
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

app.listen(port, () => {
  console.log(`Contact API running on http://localhost:${port}`);
});
