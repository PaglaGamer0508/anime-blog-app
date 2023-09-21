import React from "react";

const SuggestedBlogsLoadingSkeleton: React.FC = () => {
  return (
    <div className="space-y-2">
      {Array.from({ length: 15 }).map((_, index) => {
        return (
          <div
            key={index}
            className="flex gap-x-2 rounded-md overflow-hidden p-1 active:bg-gray-400/40 transition-colors duration-100 ease-in">
            <div className="bg-gradient-to-r from-slate-700 to-slate-500 w-48 h-fit relative aspect-video overflow-hidden rounded"></div>
            <div className="flex flex-col gap-y-[5px] w-[60%]">
              {/* title */}
              <h1 className="bg-gradient-to-r from-slate-700 to-slate-500 h-5 w-40"></h1>
              <p className="bg-gradient-to-r from-slate-700 to-slate-500 h-4 w-28 mt-2" />
              <div className="bg-gradient-to-r from-slate-700 to-slate-500 h-3 w-32 mt-1" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SuggestedBlogsLoadingSkeleton;
