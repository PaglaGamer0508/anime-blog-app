import { db } from "@/lib/db";
import { likeAndViewPostValidator } from "@/lib/validators/likeAndViewPostValidator";
import { NextResponse } from "next/server";
import { z } from "zod";

export const POST = async (req: Request) => {
  const body = await req.json();

  try {
    const { postId, userId } = likeAndViewPostValidator.parse(body);
    const existingLike = await db.like.findFirst({
      where: {
        likerId: userId,
        postId,
      },
    });

    if (existingLike) {
      return new NextResponse("User has already liked this post", {
        status: 201,
      });
    }

    await db.like.create({
      data: {
        likerId: userId,
        postId,
      },
    });

    return new NextResponse("Successfully liked post", { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse("Invalid like data request passed", {
        status: 422,
      });
    }

    return new NextResponse("Error liking post", {
      status: 500,
    });
  } finally {
    await db.$disconnect();
  }
};
