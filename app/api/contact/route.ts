import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; text-align: center;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #1e293b; margin-bottom: 5px;">Name:</h3>
              <p style="color: #475569; margin: 0; font-size: 16px;">${name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #1e293b; margin-bottom: 5px;">Email:</h3>
              <p style="color: #475569; margin: 0; font-size: 16px;">
                <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
              </p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #1e293b; margin-bottom: 5px;">Subject:</h3>
              <p style="color: #475569; margin: 0; font-size: 16px;">${subject}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #1e293b; margin-bottom: 5px;">Message:</h3>
              <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                <p style="color: #475569; margin: 0; font-size: 16px; line-height: 1.6;">${message}</p>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <p style="color: #64748b; font-size: 14px;">This email was sent from your DigitalPro website contact form.</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}