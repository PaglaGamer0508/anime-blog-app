import { db } from "@/lib/db";
import { likeAndViewPostValidator } from "@/lib/validators/likeAndViewPostValidator";
import { NextResponse } from "next/server";
import { z } from "zod";

export const POST = async (req: Request) => {
  const body = await req.json();
  const { postId, userId } = likeAndViewPostValidator.parse(body);
  try {
    const likeRecordToDelete = await db.like.findFirst({
      where: {
        likerId: userId,
        postId,
      },
    });

    if (!likeRecordToDelete) {
      return new NextResponse("You are liked to this post", {
        status: 403,
      });
    }

    await db.like.delete({
      where: {
        id: likeRecordToDelete.id,
      },
    });

    return new NextResponse("Successfully unliked post", { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse("Invalid unlike data request passed", {
        status: 422,
      });
    }

    return new NextResponse("Error unliking post", {
      status: 500,
    });
  } finally {
    await db.$disconnect();
  }
};
