import { getAuthSession } from "./auth";
import { db } from "./db";

export const getIsFollowing = async (userId: string) => {
  try {
    const session = await getAuthSession();
    if(!session?.user?.id){
      return false
    }
    const isFollowing = await db.follow.findFirst({
      where: {
        followerId: session?.user?.id,
        followedUserId: userId,
      },
    });

    if (!isFollowing) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
};
