import prisma from "@/app/libs/prismadb";
import md5 from "md5";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, username, name, password } = await request.json();
  const user = await prisma.user.create({
    data: {
      email,
      username,
      name,
      password: md5(password),
    },
  });
  return NextResponse.json(user);
}
