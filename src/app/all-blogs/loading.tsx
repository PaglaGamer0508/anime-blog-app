import AllBlogsLoadingSkeleton from "@/components/AllBlogsLoadingSkeleton";
import React from "react";

interface loadingProps {}

const loading: React.FC<loadingProps> = ({}) => {
  return (
    <>
      <AllBlogsLoadingSkeleton />
    </>
  );
};

export default loading;
