import current from "@/app/actions/CurrentUser";
import prisma from "@/app/libs/prismadb";

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
