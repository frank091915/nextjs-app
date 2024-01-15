import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: {
    id: number;
  };
}
export function GET(request: NextRequest, { params: { id } }: Props) {
  const validation = schema.safeParse({ id });
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 404 });
  }
  return NextResponse.json({
    id: 6,
    name: "bread",
    price: 888,
  });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  const bodyValue = Object.assign({}, body, { id });
  const validation = schema.safeParse(bodyValue);
  if (id > 10) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  return NextResponse.json({
    id,
    name: body.name,
    price: body.price,
  });
}

export function DELETE(request: NextRequest, { params: { id } }: Props) {
  if (id > 10) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }
  return NextResponse.json({});
}
