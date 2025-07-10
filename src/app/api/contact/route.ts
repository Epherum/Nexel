// src/app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.CONTACT_FORM_TO_EMAIL;
const fromDomain = process.env.RESEND_VERIFIED_DOMAIN; // <-- Get the domain

export async function POST(request: NextRequest) {
  // ============= DEBUGGING LOGS =============
  console.log("Verified Domain from .env:", fromDomain);
  const fromAddress = `Contact Form <contact@${fromDomain}>`;
  console.log("Constructed 'from' address:", fromAddress);
  // ==========================================

  try {
    const body = await request.json();
    const { name, company, email, projectDetails, budget, services } = body;

    if (!name || !email || !projectDetails) {
      return NextResponse.json(
        { error: "Name, email, and project details are required." },
        { status: 400 }
      );
    }

    if (!toEmail || !fromDomain) {
      // <-- Also check if fromDomain is set
      console.error(
        "Environment variables (TO_EMAIL or VERIFIED_DOMAIN) are not set."
      );
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: fromAddress, // <-- Use the constructed address
      to: [toEmail],
      subject: `New Contact Form Submission from ${name}`,
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
