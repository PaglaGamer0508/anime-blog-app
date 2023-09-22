import BlogPageLoadingSkeleton from "@/components/BlogPageLoadingSkeleton";
import SuggestedBlogsLoadingSkeleton from "@/components/SuggestedBlogsLoadingSkeleton";
import React from "react";

const loading: React.FC = () => {
  return (
    <div className="lg:flex lg:justify-between gap-4 max-w-[1400px] py-4 px-2 md:px-6 mx-auto select-none">
      <div className="lg:w-[70%]">
        <BlogPageLoadingSkeleton />
      </div>
      <div className="lg:w-[30%]">
        <div className="mb-3">
          <h1 className="bg-gradient-to-r from-slate-800 to-slate-600 my-[6px] w-36 h-6 mx-auto" />
          <hr className="bg-slate-400 h-[2px] border-none" />
        </div>
        <SuggestedBlogsLoadingSkeleton />
      </div>
    </div>
  );
};

export default loading;
