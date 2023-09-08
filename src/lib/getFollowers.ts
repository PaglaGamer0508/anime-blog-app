import { db } from "./db";

export const getUserFollowers = async (userId: string) => {
  try {
    const userFollowerCount = await db.follow.count({
      where: {
        followedUserId: userId,
      },
    });
    return userFollowerCount;
  } catch (error) {
    return null;
  }
};
