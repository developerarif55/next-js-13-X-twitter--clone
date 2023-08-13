import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const comment = await prisma.comment.findMany({
      where: {
        postId: params.postId,
      },
      include: {
        user: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return NextResponse.json(comment);
  } catch (error) {
    console.error(error);
  }
}
