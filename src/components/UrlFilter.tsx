"use client";

import { useBlogFilterStore } from "@/state/filter/blogFilterStore";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface UrlFilterProps {}

const UrlFilter: React.FC<UrlFilterProps> = ({}) => {
  const router = useRouter();
  const { blogType, blogGenre } = useBlogFilterStore();
  const url = `/all-blogs/${blogType}/${blogGenre}`;

  useEffect(() => {
    router.push(url);
  }, [url]);

  return null;
};

export default UrlFilter;
