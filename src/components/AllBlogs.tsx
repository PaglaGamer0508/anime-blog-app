import { BlogThumbnail } from "@/types/extended-blog";
import React from "react";
import ThumbnailCard from "./ThumbnailCard";
import Styles from "./styles/all-blogs.module.scss";
import NoBlogsFound from "./NoBlogsFound";

interface AllBlogsProps {
  blogs: BlogThumbnail[];
}

const AllBlogs: React.FC<AllBlogsProps> = ({ blogs }) => {
  return (
    <>
      {blogs.length > 0 ? (
        <div className={`${Styles.container}`}>
          {blogs.map((blog) => (
            <ThumbnailCard blog={blog} key={blog.id} />
          ))}
        </div>
      ) : (
        <NoBlogsFound />
      )}
    </>
  );
};

export default AllBlogs;
