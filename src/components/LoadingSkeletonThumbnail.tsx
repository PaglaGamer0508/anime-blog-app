import React from "react";

const LoadingSkeletonThumbnail: React.FC = () => {
  return (
    <div className="select-none h-full">
      <div className="mx-auto bg-gradient-to-r from-slate-800 to-slate-600 text-white rounded-lg shadow-lg w-full overflow-hidden pb-2 relative">
        <div className="w-full aspect-video">
          {/* image */}
          <div className="h-full w-full bg-gradient-to-r from-slate-600 to-slate-500"></div>
        </div>
        <div className="px-4 py-3">
          {/* title */}
          <h1 className="h-6 w-52 mb-2 bg-gradient-to-r from-slate-600 to-slate-500"></h1>
          {/* Author section */}
          <div className="w-fit">
            <div className="flex items-center gap-2 pt-1">
              <div className="bg-gradient-to-r from-slate-600 to-slate-500 rounded-full overflow-hidden w-6 h-6"></div>
              <p className="bg-gradient-to-r from-slate-600 to-slate-500 h-4 w-28"></p>
            </div>
          </div>
          {/* details section */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="mt-2 bg-gradient-to-r from-slate-600 to-slate-500 h-3 w-14"></div>
              <div className="mt-2 bg-gradient-to-r from-slate-600 to-slate-500 h-3 w-14"></div>
            </div>
            <div className="rounded bg-gradient-to-r from-slate-600 to-slate-500 h-8 w-16"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeletonThumbnail;
