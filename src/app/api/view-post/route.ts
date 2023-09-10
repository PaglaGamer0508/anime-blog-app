import { db } from "@/lib/db";
import { likeAndViewPostValidator } from "@/lib/validators/likeAndViewPostValidator";
import { NextResponse } from "next/server";
import { z } from "zod";

export const POST = async (req: Request) => {
  const body = await req.json();
  try {
    const { postId, userId } = likeAndViewPostValidator.parse(body);
    const existingView = await db.view.findFirst({
      where: {
        postId,
        viewerId: userId,
      },
    });

    if (existingView) {
      return new NextResponse("User has already viewed this post", {
        status: 201,
      });
    }

    await db.view.create({
      data: {
        viewerId: userId,
        postId,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse("Invalid view data request passed", {
        status: 422,
      });
    }

    return new NextResponse("Error adding views to the post", {
      status: 500,
    });
  } finally {
    db.$disconnect();
  }
};
