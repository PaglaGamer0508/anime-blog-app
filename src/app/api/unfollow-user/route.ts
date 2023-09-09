import { db } from "@/lib/db";
import { followUserValidator } from "@/lib/validators/followUserValidator";
import { NextResponse } from "next/server";
import { z } from "zod";

export const POST = async (req: Request) => {
  const body = await req.json();
  const { followUserId, userId } = followUserValidator.parse(body);

  try {
    const followRecordToDelete = await db.follow.findFirst({
      where: {
        followedUserId: followUserId,
        followerId: userId,
      },
    });

    if (!followRecordToDelete) {
      return new NextResponse("You are not followed to this user", {
        status: 403,
      });
    }

    await db.follow.delete({
      where: {
        id: followRecordToDelete.id,
      },
    });

    return new NextResponse("Successfully unfollowed user", { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse("Invalid Unfollow data request passed", {
        status: 422,
      });
    }

    return new NextResponse("Error deleting follow relationship", {
      status: 500,
    });
  }
};
