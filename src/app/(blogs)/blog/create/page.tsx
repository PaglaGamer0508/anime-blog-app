import PostBlogEditor from "@/components/BlogPostEditor";
import LoginToPostBlogs from "@/components/LoginToPostBlogs";
import { getAuthSession } from "@/lib/auth";
import React from "react";

const Page = async ({}) => {
  const session = await getAuthSession();
  const authorId = session?.user?.id;

  return (
    <>
      <div className="flex justify-center">
        {authorId ? (
          <PostBlogEditor authorId={authorId} />
        ) : (
          <LoginToPostBlogs />
        )}
      </div>
    </>
  );
};

export default Page;
