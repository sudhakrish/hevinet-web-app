import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 4174;

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, company, country, product, message } = req.body;

  if (!name || !company || !country || !product || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error("Missing SMTP configuration. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS in .env.");
    return res.status(500).json({
      error: "Mail server is not configured. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS in the backend environment.",
    });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_FROM || "no-reply@hevinet.com",
    to: process.env.CONTACT_EMAIL || "sales@hevinet.com",
    subject: `Hevinet inquiry from ${name}`,
    text: `Name: ${name}\nCompany: ${company}\nCountry: ${country}\nProduct of interest: ${product}\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.error("Contact form send error:", error);
    res.status(500).json({
      error:
        (error instanceof Error && error.message) ||
        "Unable to send inquiry. Please try again later.",
    });
  }
});

app.listen(port, () => {
  console.log(`Contact API running on http://localhost:${port}`);
});
