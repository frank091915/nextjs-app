import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";
interface Props {
  params: {
    id: string;
  };
}
export async function GET(request: NextRequest, { params: { id } }: Props) {
  const product = await prisma.products.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!product) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }
  return NextResponse.json(product);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  const bodyValue = Object.assign({}, body, { id });
  const validation = schema.safeParse(bodyValue);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  // check if the product exists
  const product = await prisma.products.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!product) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }
  const newProduct = await prisma.products.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name: body.name,
      price: body.price,
    },
  });
  return NextResponse.json(newProduct);
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  const product = await prisma.products.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!product) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }
  const deletedProduct = await prisma.products.delete({
    where: { id: parseInt(id) },
  });
  return NextResponse.json(deletedProduct);
}
