import { mailOptions, transporter } from "@/app/config/nodemailer";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "GET is working!" });
}

export async function POST(req) {
  const data = await req.json();
  const { firstname, lastname, email, telefon, message } = data;
  console.log("!!json data", data);
  if (!firstname || !lastname || !email || !telefon || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: data.subject,
      text: "test string",
      html: "<h1>test title</h1><p>some body </p>",
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("Email error:", error);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
  //   return NextResponse.json({ error: "Bad request" }, { status: 400 });
  //   return NextResponse.json({ received: data });
}
