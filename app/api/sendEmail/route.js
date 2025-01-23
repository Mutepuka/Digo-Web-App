import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json(); // Parse incoming JSON request body
    const { user, property } = body;

    // Check if necessary data exists
    if (!user || !property || !property.agent || !property.agent.email) {
      throw new Error('Missing required information.');
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Property Inquiry" <${process.env.EMAIL_USER}>`,
      to: property.agent.email,
      replyTo: user.email,
      subject: `Inquiry about ${property.addressOne} ${property.addressTwo}`,
      text: `
        You have received a new property inquiry.

        Name: ${user.name}
        Email: ${user.email}
        Message: ${user.message}

        Property Address: ${property.addressOne}
        This inquiry was sent via DigoEstate.
      `,
      html: `
        <p>You have received a new property inquiry.</p>
        <p>
          <strong>Name:</strong> ${user.name}<br>
          <strong>Email:</strong> ${user.email}<br>
          <strong>Message:</strong> ${user.message}
        </p>
        <p>
          <strong>Property Address:</strong> ${property.addressOne}<br>
          <em>This inquiry was sent via DigoEstate.</em>
        </p>
      `,
      
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({
        error: `Failed to send email. ${error.message || 'Unknown error'}`,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
