import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    console.log(params);

    try {
     
      const user = await prisma.user.findUnique({
        where: {
          id: params.userId,
        },
      });
        return NextResponse.json(user)
        
    } catch (error) {
        console.log(error)
        
    }

}

export async function PATCH(request, {params}) {
  const body = await request.json()

  try {
    const updateUser = await prisma.user.update({
      where: {
        id: params.userId,
      },
      data: {
        name: body.name,
        username: body.username,
        bio: body.bio,
        profilePic: body.profilePic,
        coverPic: body.coverPic
      }
    })
    console.log("user updated")
    return Response.json(updateUser, {status: 200})
    
  } catch (error) {
    return new NextResponse(400).end()
    
  }

}