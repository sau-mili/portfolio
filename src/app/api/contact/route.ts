import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

    // Validate fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "*All fields are required" }, { status: 400 });
    }

    // TODO: send email or save to DB
    // Example: using Nodemailer, SendGrid, or Supabase
    console.log("Contact form submitted:", { name, email, message });

    return NextResponse.json({ success: true, message: "Message received!" });
  } catch (err) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
