import { BlogThumbnail } from "@/types/extended-blog";
import axios from "axios";
import React from "react";
import AllBlogs from "./AllBlogs";

interface AllBlogsContainerProps {
  filter: [FilterBlogType, string];
}

const AllBlogsContainer: React.FC<AllBlogsContainerProps> = async ({
  filter,
}) => {
  const filterType = filter[0];
  console.log("TYPE:", filterType);
  const filterGenre = filter[1];
  console.log("GENRE:", filterGenre);

  return <div>{/* <AllBlogs blogs={allBLogs} /> */}</div>;
};

export default AllBlogsContainer;
