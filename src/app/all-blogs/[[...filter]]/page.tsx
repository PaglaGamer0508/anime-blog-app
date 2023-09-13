import AllBlogs from "@/components/AllBlogs";
import FilterSection from "@/components/FilterSection";
import { fetchAllBlogs } from "@/lib/fetchAllBlogs";
import React from "react";

interface pageProps {
  params: {
    filter: string;
  };
}

const page: React.FC<pageProps> = async ({ params }) => {
  console.log(params);
  // filteredBlogs = blogs.filter((blog) => blog.type === filterType);
  const blogsData = await fetchAllBlogs();
  return (
    <div>
      <FilterSection />
      <AllBlogs blogs={blogsData} />
    </div>
  );
};

export default page;
