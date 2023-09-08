import { FullBlog } from "@/types/extended-blog";

export const getBlog = async (id: string): Promise<FullBlog> => {
  try {
    const response = await fetch(`http://localhost:3000/api/blog/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Blog Not Found");
    }
    const { blog } = await response.json();
    return blog;
  } catch (error) {
    throw error;
  }
};
