import PostBlogEditor from "@/components/BlogPostEditor";
import { getAuthSession } from "@/lib/auth";
import React from "react";

const Page = async ({}) => {
  const session = await getAuthSession();
  const authorId = session?.user?.id ?? "";

  return (
    <>
      <div className="flex justify-center">
        <PostBlogEditor authorId={authorId} />
      </div>
    </>
  );
};

export default Page;
