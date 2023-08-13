import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
export async function GET(request, { params }) {
  try {
    if (!params.postId) {
      return new NextResponse.json("error");
    }

    const post = await prisma.post.findUnique({
      where: {
        id: params.postId,
      },
      include: {
        user: true,
        comments: true,
        likes: true,
      },
    });
    return NextResponse.json(post);
  } catch (error) {
    return new NextResponse.json("error", { status: 500 });
  }
}
