import { BlogThumbnail } from "@/types/extended-blog";

export const fetchAllBlogs = async (): Promise<BlogThumbnail[]> => {
  try {
    const response = await fetch("http://localhost:3000/api/all-blogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();

    const { blogs } = responseData;
    return blogs;
  } catch (error) {
    throw error;
  }
};
