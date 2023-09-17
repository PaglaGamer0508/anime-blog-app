// useBlogPagination.tsx
import { useQuery } from "@tanstack/react-query";

interface BlogData {
  // Define your blog data structure here
}

interface FetchBlogsResponse {
  blogs: BlogData[];
  totalPages: number;
}

const fetchBlogs = async (page: number): Promise<FetchBlogsResponse> => {
  const response = await fetch(`/api/blogs?page=${page}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data;
};

export const useBlogPagination = () => {
  return useQuery(["blogs"], ({ pageParam = 1 }) => fetchBlogs(pageParam), {
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length + 1 <= lastPage.totalPages
        ? allPages.length + 1
        : null;
    },
  });
};
