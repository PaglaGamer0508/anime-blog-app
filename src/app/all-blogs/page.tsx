import AllBlogs from "@/components/AllBlogs";
import React from "react";

interface pageProps {}

const page: React.FC<pageProps> = ({}) => {
  return (
    <div>
      <AllBlogs />
    </div>
  );
};

export default page;