import { db } from "./db";

export const followUser = async (followUserId: string, userId: string) => {
  try {
    await db.follow.create({
      data: {
        followedUserId: followUserId,
        followerId: userId,
      },
    });
  } catch (error) {
    throw new Error("Error creating follow:", { cause: error });
  }
};
