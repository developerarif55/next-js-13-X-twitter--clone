import current from "@/app/actions/CurrentUser";
import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth";
import { handler } from "../../auth/[...nextauth]/route";

export async function DELETE(request, { params }) {
  const session = await getServerSession(handler);

  if (!session?.user?.email) {
    return null;
  }

  const currentUser = await current();
  try {
    // Check if the user is already following the userToUnfollow
    const isFollowing = currentUser.following.includes(params.userId);

    if (!isFollowing) {
      return {
        status: 400,
        body: { error: "User is not following the specified user" },
      };
    }

    // Update the user's following array to remove the specified user
    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        following: currentUser.following.filter((id) => id !== params.userId),
      },
    });

    console.log("Unfollow request accepted");
    return Response.json(updatedUser);
  } catch (error) {
    console.log("Unfollow request  rejected", error);
  }
}