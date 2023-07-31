import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        created_at: "desc",
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
  }
}
