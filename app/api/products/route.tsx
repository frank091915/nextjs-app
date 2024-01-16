import { NextRequest, NextResponse } from "next/server";
import React from "react";
import schema from "./schema";
import { prisma } from "@/prisma/client";

interface Props {
  params: {
    name: string;
  };
}
export async function GET(request: NextRequest) {
  const products = await prisma.products.findMany();
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  // find if there is a same product exists
  const product = await prisma.products.findUnique({
    where: {
      name: body.name,
    },
  });
  if (product) {
    return NextResponse.json({ error: "product exist" }, { status: 400 });
  }
  const newProduct = await prisma.products.create({
    data: {
      name: body.name,
      price: body.price,
    },
  });
  return NextResponse.json(newProduct);
}
