import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json(); // Parse the incoming request body

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: "naphtalimorage56@example.com",
      subject: `New message from ${name}`,
      text: `You have received a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a successful response
    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    // Return an error response
    return new Response(JSON.stringify({ message: "Failed to send email.", error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
