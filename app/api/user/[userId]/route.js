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