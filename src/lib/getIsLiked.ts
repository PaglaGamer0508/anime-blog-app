import { getAuthSession } from "./auth";
import { db } from "./db";

export const getIsLiked = async (postId: string) => {
  try {
    const session = await getAuthSession();
    if (!session?.user?.id) {
      return false;
    }
    const isLiked = await db.like.findFirst({
      where: {
        likerId: session?.user?.id,
        postId,
      },
    });

    if (!isLiked) {
      return false;
    }

    return true;
  } catch (error) {
    return false;
  }
};
