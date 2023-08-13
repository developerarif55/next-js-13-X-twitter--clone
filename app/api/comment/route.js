import current from "@/app/actions/CurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const currentUser = await current();
  const { body, postId } = await request.json();
  try {
    const comment = await prisma.comment.create({
      data: {
        body,
        postId,
        userId: currentUser.id,
      },
    });
    return NextResponse.json(comment);
  } catch (error) {
    console.log(error);
  }
}
