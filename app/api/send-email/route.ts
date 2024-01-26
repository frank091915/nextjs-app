import HelloEmail from "@/emails/HelloEmail";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const { error, data } = await resend.emails.send({
    // the real domain you verify on the resend web page
    from: "...",
    to: "frank091915@gmail.com",
    subject: "email for you",
    react: HelloEmail({ name: "Finn" }),
  });
  if (error) {
    return NextResponse.json(error, { status: 400 });
  }
  return NextResponse.json(data);
}
