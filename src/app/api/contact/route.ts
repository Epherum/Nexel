// src/app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.CONTACT_FORM_TO_EMAIL;

export async function POST(request: NextRequest) {
  try {
    // 1. Parse the request body
    const body = await request.json();
    const { name, company, email, projectDetails, budget, services } = body;

    // 2. Basic validation
    if (!name || !email || !projectDetails) {
      return NextResponse.json(
        { error: "Name, email, and project details are required." },
        { status: 400 }
      );
    }

    if (!toEmail) {
      console.error("CONTACT_FORM_TO_EMAIL environment variable is not set.");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    // 3. Send the email using Resend
    const { data, error } = await resend.emails.send({
      // The "from" address must be a verified domain in Resend.
      // We recommend using something like "onboarding@yourdomain.com"
      from: "Contact Form <contact@" + process.env.RESEND_VERIFIED_DOMAIN + ">", // Replace with your verified domain
      to: [toEmail],
      subject: `New Contact Form Submission from ${name}`,
      // Use react-email for more complex templates
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Budget:</strong> ${budget || "N/A"}</p>
        <p><strong>Services:</strong> ${services.join(", ") || "N/A"}</p>
        <hr>
        <h2>Project Details:</h2>
        <p>${projectDetails}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    // 4. Return a success response
    return NextResponse.json(
      { message: "Email sent successfully!", data },
      { status: 200 }
    );
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
