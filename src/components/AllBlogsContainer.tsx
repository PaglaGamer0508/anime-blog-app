"use client";

import { BlogThumbnail } from "@/types/extended-blog";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import AllBlogs from "./AllBlogs";
import AllBlogsLoadingSkeleton from "./AllBlogsLoadingSkeleton";
import NoBlogsFound from "./NoBlogsFound";
import { useBlogFilterStore } from "@/state/filter/blogFilterStore";

const AllBlogsContainer: React.FC = () => {
  const { blogType, blogGenre } = useBlogFilterStore();
  const page = 1;
  const pageSize = 9;

  const {
    data: blogs = [],
    isLoading,
    isError,
  } = useQuery<BlogThumbnail[]>({
    queryKey: ["all-blogs"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `/api/all-blogs?page=${page}&pageSize=${pageSize}`
        );
        const { blogs } = response.data;
        return blogs as BlogThumbnail[];
      } catch (error) {
        throw error;
      }
    },
  });

  if (isLoading) {
    return <AllBlogsLoadingSkeleton />;
  }
  if (isError) {
    return <NoBlogsFound />;
  }

  const filteredBlogs = blogs.filter((blog) => {
    if (blogType === "ALL" && blogGenre === "ALL") {
      // If both are "ALL," don't apply any filtering
      return true;
    }

    if (blogType === "ALL" && blogGenre !== "ALL") {
      // If only blogType is "ALL," filter based on blogGenre
      return blog.genres.includes(blogGenre);
    }

    if (blogType !== "ALL" && blogGenre === "ALL") {
      // If only blogGenre is "ALL," filter based on blogType
      return blog.type === blogType;
    }

    // If neither is "ALL," filter based on both blogType and blogGenre
    return blog.type === blogType && blog.genres.includes(blogGenre);
  });

  return (
    <div>
      <AllBlogs blogs={filteredBlogs} />
    </div>
  );
};

export default AllBlogsContainer;
