import { db } from "@/lib/db";
import { followUserValidator } from "@/lib/validators/followUserValidator";
import { NextResponse } from "next/server";
import { z } from "zod";

export const POST = async (req: Request) => {
  const body = await req.json();
  const { followUserId, userId } = followUserValidator.parse(body);

  try {
    const existingFollow = await db.follow.findFirst({
      where: {
        followedUserId: followUserId,
        followerId: userId,
      },
    });

    if (existingFollow) {
      return new NextResponse("User is already following this user", {
        status: 400,
      });
    }

    await db.follow.create({
      data: {
        followedUserId: followUserId,
        followerId: userId,
      },
    });

    return new NextResponse("Successfully followed user", { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse("Invalid Follow data request passed", {
        status: 422,
      });
    }

    return new NextResponse("Error creating follow relationship", {
      status: 500,
    });
  }
};
