import { extendedBlog } from "@/types/thumbnail-card";

export const fetchAllBlogs = async (): Promise<extendedBlog[]> => {
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
    console.error("Error occurred:", error);
    throw error;
  }
};
