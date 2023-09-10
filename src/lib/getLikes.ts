export const getLikes = async (postId: string): Promise<number> => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/get-likes/${postId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Cannot get Likes");
    }

    const responseData = await response.json();
    const { likeCounts } = responseData;

    return likeCounts;
  } catch (error) {
    throw error;
  }
};
