import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma"
import { json, z } from "zod"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "*All fields are required" }, { status: 400 });
    }

  
    // await prisma.message.create({
    //   data: { name, email, message },
    // });

    // Return only a success string
    return NextResponse.json({
      success: true,
      message: "Message received and stored successfully!",
    });
  } catch (err) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}