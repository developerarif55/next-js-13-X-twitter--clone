import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth";
import { handler } from "../api/auth/[...nextauth]/route";

const current = async () => {

  try {
    const session = await getServerSession(handler);

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email 
      }
    });

    return currentUser;
  } catch (error) {
    return null;
  }
};

export default current;