import AllBlogsContainer from "@/components/AllBlogsContainer";
import UrlFilter from "@/components/UrlFilter";
import React from "react";

interface pageProps {
  params: {
    filter: [FilterBlogType, string];
  };
}

const page: React.FC<pageProps> = async ({ params }) => {
  const { filter } = params;

  return (
    <>
      <UrlFilter />
      <AllBlogsContainer filter={filter} />
    </>
  );
};

export default page;
