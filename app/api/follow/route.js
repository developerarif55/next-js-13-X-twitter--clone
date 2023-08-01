import current from "@/app/actions/CurrentUser";
import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth";
import { handler } from "../auth/[...nextauth]/route";

export async function POST(request) {
  const session = await getServerSession(handler);
  if (!session) {
    return null;
  }
  const currentUser = await current();
  const { userId } = await request.json();
  try {
    // Check if the user is already following the userToFollow
    const isFollowing = currentUser.following.includes(userId);

    if (isFollowing) {
      return {
        status: 400,
        body: { error: "User is already following the specified user" },
      };
    }
    const updateUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        following: {
          push: userId,
        },
      },
    });
    console.log("user follow has been updated");
    return Response.json(updateUser);
  } catch (error) {
    console.error("Error");
  }
}
