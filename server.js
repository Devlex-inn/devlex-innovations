import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import cors from "cors";
import nodemailer from "nodemailer";

const PORT = process.env.PORT || 5011;

app.use(cors());
app.use(express.json());

// Nodemailer transporter setup
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, 
  },
});

// Verify transporter setup
contactEmail.verify((error) => {
  if (error) {
    console.error("Email transporter error:", error);
  } else {
    console.log("Email transporter is ready");
  }
});

// POST route to handle contact form submissions
app.post("/contact", async (req, res) => {
  const { name, email, phone, address, message } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !address || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Email template for admin (Devlex Innovations)
  const adminEmailTemplate = `
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); font-family: Arial, sans-serif;">
      <div style="background: #007bff; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h2>New Contact Form Submission</h2>
      </div>
      <div style="padding: 20px;">
        <p style="font-size: 16px; color: #333;"><strong>Name:</strong> ${name}</p>
        <p style="font-size: 16px; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
        <p style="font-size: 16px; color: #333;"><strong>Phone:</strong> ${phone}</p>
        <p style="font-size: 16px; color: #333;"><strong>Address:</strong> ${address}</p>
        <p style="font-size: 16px; color: #333;"><strong>Message:</strong></p>
        <div style="background: #f8f9fa; padding: 15px; border-left: 5px solid #007bff; border-radius: 5px;">
          <p style="font-size: 16px; color: #555; margin: 0;">${message}</p>
        </div>
      </div>
      <div style="background: #f4f4f4; padding: 15px; text-align: center; font-size: 14px; color: #555; border-radius: 0 0 8px 8px;">
        This email was sent via the Devlex Innovations Contact Form.
      </div>
    </div>
  `;

  // Email template for the user (confirmation email)
  const userEmailTemplate = `
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); font-family: Arial, sans-serif;">
      <div style="background: #28a745; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h2>Thank You, ${name}!</h2>
      </div>
      <div style="padding: 20px;">
        <p style="font-size: 16px; color: #333;">We appreciate you reaching out to Devlex Innovations. We have received your message and will get back to you as soon as possible.</p>
        <p style="font-size: 16px; color: #333;"><strong>Your Message:</strong></p>
        <div style="background: #f8f9fa; padding: 15px; border-left: 5px solid #28a745; border-radius: 5px;">
          <p style="font-size: 16px; color: #555; margin: 0;">${message}</p>
        </div>
        <p style="margin-top: 20px; font-size: 16px; color: #333;">If you have any urgent inquiries, feel free to reply to this email.</p>
      </div>
      <div style="background: #f4f4f4; padding: 15px; text-align: center; font-size: 14px; color: #555; border-radius: 0 0 8px 8px;">
        Best regards,<br><strong>Devlex Innovations</strong><br><a href="mailto:${process.env.EMAIL_USER}" style="color: #007bff;">${process.env.EMAIL_USER}</a>
      </div>
    </div>
  `;

  try {
    // Send email to admin (Devlex Innovations)
    await contactEmail.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Sender address
      to: process.env.EMAIL_USER, // Admin email address
      replyTo: email, // Reply-to address
      subject: "New Contact Form Submission - Devlex Innovations", // Subject line
      html: adminEmailTemplate, // HTML body
    });

    // Send confirmation email to the user
    await contactEmail.sendMail({
      from: `"Devlex Innovations" <${process.env.EMAIL_USER}>`, // Sender address
      to: email, // User's email address
      subject: "Thank You for Contacting Devlex Innovations!", // Subject line
      html: userEmailTemplate, // HTML body
    });

    // Respond with success message
    res.status(200).json({ status: "Message Sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});