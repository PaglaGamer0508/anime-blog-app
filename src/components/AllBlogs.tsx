import { fetchAllBlogs } from "@/lib/fetchAllBlogs";
import React from "react";
import ThumbnailCard from "./ThumbnailCard";
import Styles from "./styles/all-blogs.module.scss";

interface AllBlogsProps {}

const AllBlogs: React.FC<AllBlogsProps> = async ({}) => {
  const blogsData = await fetchAllBlogs();

  return (
    <>
      <div className={`max-w-[1400px] mx-auto py-3 ${Styles.container}`}>
        {blogsData.map((blog) => {
          return <ThumbnailCard blog={blog} />;
        })}
      </div>
    </>
  );
};

export default AllBlogs;
