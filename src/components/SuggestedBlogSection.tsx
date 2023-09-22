"use client";

import React, { useEffect, useState } from "react";
import SuggestedThumbnailCard from "./SuggestedThumbnailCard";
import { suggestedBlog } from "@/types/extended-blog";
import { usePathname } from "next/navigation";
import SuggestedBlogsLoadingSkeleton from "./SuggestedBlogsLoadingSkeleton";

interface SuggestedBlogSectionProps {}

const SuggestedBlogSection: React.FC<SuggestedBlogSectionProps> = ({}) => {
  const [suggestedBlogs, setSuggestedBlogs] = useState<suggestedBlog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const currentUrl = usePathname();
  const currentBlogPost = currentUrl.split("/")[2];

  useEffect(() => {
    const fetchSuggestedBlogs = async () => {
      try {
        const response = await fetch("/api/suggested-blogs");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const { blogs } = data;
        setSuggestedBlogs(blogs as suggestedBlog[]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchSuggestedBlogs();
  }, []);

  if (isLoading) {
    return <SuggestedBlogsLoadingSkeleton />;
  }

  if (isError) {
    return <h1>Error, cannot load suggested blogs</h1>;
  }

  if (suggestedBlogs.length === 0) {
    return <h1>No Blogs to show</h1>;
    return <h1>Loading...</h1>;
  }

  return (
    <div className="space-y-2">
      {suggestedBlogs?.map((blog) => {
        if (blog.id == currentBlogPost) {
          return null;
        }
        return <SuggestedThumbnailCard key={blog.id} suggestedBlog={blog} />;
      })}
    </div>
  );
};

export default SuggestedBlogSection;
