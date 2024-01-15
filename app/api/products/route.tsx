import { NextRequest, NextResponse } from "next/server";
import React from "react";
import schema from "./schema";

interface Props {
  searchParams: {
    limit: number;
  };
}
export function GET(request: NextRequest, { searchParams }: Props) {
  console.log("limit", searchParams?.limit);
  return NextResponse.json([
    { id: 1, name: "milk", price: 666 },
    { id: 2, name: "alcohol", price: 666 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  return NextResponse.json(
    { id: 6, name: body.name, price: body.price },
    { status: 201 },
  );
}
