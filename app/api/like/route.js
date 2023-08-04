import current from "@/app/actions/CurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const currentUser = await current();

  const { postId } = await request.json();
  try {
    const post = await prisma.post.findUnique({
        where: { id: postId },
        select: {
          likes: true,
        },
      });
  
      if (!post) {
        return NextResponse.json({ error: "Post not found" });
      }

    const userLike = await prisma.userLike.findFirst({
      where: {
        postId,
        userId: currentUser.id,
      },
    });

    // make it if user like exists then create or delete it

    if (userLike) {
      await prisma.userLike.delete({
        where: {
          id: userLike.id,
        },
      });
      return NextResponse.json({ likeCount: post.likes - 1, isLiked: false });
    } else {
      await prisma.userLike.create({
        data: {
          userId: currentUser.id,
          postId,
        },
      });
      return NextResponse.json({ likeCount: post.likes + 1, isLiked: true });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error creating user likes" });
  }
}
