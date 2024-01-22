import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "@/prisma/client";
interface Props {
  params: { id: string };
}
export async function GET(request: NextRequest, { params: { id } }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  if (!user) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }
  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  // validate the request body
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  // fetch the user
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "user doesn't exist" }, { status: 404 });
  }
  // update the user
  const newUser = await prisma.user.update({
    where: {
      id: params.id,
    },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(newUser);
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!user) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }
  const deletedUser = await prisma.user.delete({
    where: {
      id: params.id,
    },
  });
  return NextResponse.json(deletedUser);
}
