import current from "@/app/actions/CurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const CurrentUser = await current();
  const { body } = await request.json();
  try {
    const post = await prisma.post.create({
      data: {
        body,
        userId: CurrentUser.id,
      },
    });
    console.log("post created");
    return Response.json(post);
  } catch (error) {
    console.error(error);
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        created_at: "desc",
      },
      include: {
        user: true,
        comments: true,
        likes: true,
      },
    });
    const postWithLikesCount = []
    for (const post of posts) {
      const likeCount = await prisma.userLike.count({
        where: {
          postId: post.id,
        }
      })
      postWithLikesCount.push({
        ...post,
        likeCount
      })
    }
    return NextResponse.json(postWithLikesCount);
  } catch (error) {
    console.error("Error getting posts");
    return new NextResponse("Internal error: ", { status: 500 });
  }
}
