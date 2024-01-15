import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
  const data = [
    {
      id: 1,
      name: "Finn",
    },
    {
      id: 2,
      name: "John",
    },
  ];
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  // if the name is empty or doesn't exist, return a 400 error
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  return NextResponse.json(body, { status: 201 });
}
