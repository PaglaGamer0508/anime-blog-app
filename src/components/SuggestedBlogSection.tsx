"use client";

import React, { useEffect, useState } from "react";
import SuggestedThumbnailCard from "./SuggestedThumbnailCard";
import { suggestedBlog } from "@/types/extended-blog";
import { usePathname } from "next/navigation";

interface SuggestedBlogSectionProps {}

const SuggestedBlogSection: React.FC<SuggestedBlogSectionProps> = ({}) => {
  const [suggestedBlogs, setSuggestedBlogs] = useState<suggestedBlog[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

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
