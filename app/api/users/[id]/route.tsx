import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
interface Props {
  params: { id: number };
}
export function GET(request: NextRequest, { params: { id } }: Props) {
  if (id > 10) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }
  return NextResponse.json({ id: 1, name: "Finn" });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  // validate the request body
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  // fetch the user
  if (id > 10) {
    return NextResponse.json({ error: "user doesn't exist" }, { status: 404 });
  }
  // update the user
  return NextResponse.json(body);
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  if (id > 10) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }
  return NextResponse.json({});
}
