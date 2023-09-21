export const getViews = async (postId: string): Promise<number> => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/get-views/${postId}`,
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
      throw new Error(errorData.message || "Cannot get Views");
      return 0;
    }

    const responseData = await response.json();
    const { ViewCounts } = responseData;

    return ViewCounts;
  } catch (error) {
    throw error;
  }
};
