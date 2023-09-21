import React from "react";
import { Icons } from "./Icons";

const BlogPageLoadingSkeleton: React.FC = () => {
  return (
    <div className="shadow-lg overflow-hidden">
      {/* image */}
      <div className="aspect-video bg-gradient-to-r from-slate-700 to-slate-500 rounded-md" />
      <header>
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-x-2 py-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-slate-700 to-slate-500 text-transparent mb-2">
            This is the title of this post
          </h1>
          {/* type */}
          <div className="rounded bg-gradient-to-r from-slate-700 to-slate-500 h-8 w-16" />
        </div>

        {/* Blog Genres */}
        <div className="flex flex-wrap gap-x-2">
          <div className="rounded bg-gradient-to-r from-slate-700 to-slate-500 h-8 w-20" />
          <div className="rounded bg-gradient-to-r from-slate-700 to-slate-500 h-8 w-28" />
          <div className="rounded bg-gradient-to-r from-slate-700 to-slate-500 h-8 w-36" />
          <div className="rounded bg-gradient-to-r from-slate-700 to-slate-500 h-8 w-24" />
        </div>

        <div className="bg-gradient-to-r from-slate-700 to-slate-500 h-4 w-44 mt-4 mb-3"></div>

        {/* views and date */}
        <div className="flex items-center font-medium gap-x-2 bg-gray-300" />

        <div className="flex items-center justify-between">
          {/* User icon and info */}
          <div className="mb-2">
            <div className="w-fit flex items-center gap-4">
              <div className="flex items-center gap-2">
                {/* user section */}
                <div className="w-fit">
                  <div className="flex items-center gap-2 pt-1">
                    <div className="bg-gradient-to-r from-slate-700 to-slate-500 rounded-full overflow-hidden w-10 h-10" />
                    <div className="space-y-2">
                      <p className="bg-gradient-to-r from-slate-700 to-slate-500 h-6 w-28"></p>
                      <p className="bg-gradient-to-r from-slate-700 to-slate-500 h-4 w-20"></p>
                    </div>
                  </div>
                </div>
              </div>
              {/* follow button */}
              <div className="rounded-full bg-gradient-to-r from-slate-700 to-slate-500 h-10 w-20" />
            </div>
          </div>

          {/* Like and */}
          <div className="flex items-center mx-4">
            <Icons.likeLoading className="w-7 h-7" />
          </div>
        </div>
      </header>

      <hr className="bg-slate-400 border-none h-[1px] w-full mt-2" />

      {/* Content section */}
      <div className="mt-4 space-y-2">
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[90%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[100%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[95%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[85%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[90%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[95%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[85%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[90%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[85%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[100%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[100%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[100%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[100%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[95%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[90%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[95%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[90%]"></div>
        <div className="bg-transparent h-5"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[85%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[100%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[85%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[100%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[90%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[100%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[95%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[90%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[85%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[95%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[95%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[90%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[100%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[85%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[90%]"></div>
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 h-5 w-[40%]"></div>
      </div>
    </div>
  );
};

export default BlogPageLoadingSkeleton;
