"use client";

import { useBlogTypeStore } from "@/state/blogTypeStore";
import React from "react";

const SelectBlogType: React.FC = () => {
  const { blogType, setBlogType } = useBlogTypeStore();
  const options: BlogType[] = ["GENERAL", "CHARACTER", "REVIEW"];

  const handleOptionClick = (option: BlogType) => {
    setBlogType(option);
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 bg-slate-700 w-full p-3">
      <span className="text-lg font-semibold text-slate-200 text-center">
        Select Blog Type:
      </span>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        {options.map((option) => (
          <div key={option} className="w-full sm:w-auto">
            <button
              className={`${
                blogType === option
                  ? "bg-slate-900 text-white" // Dark theme selected state with slate-700 background
                  : "bg-gray-800 text-gray-200" // Dark theme default state with gray-800 background
              } py-2 px-4 rounded-md w-full font-semibold active:scale-95 transition-transform duration-75`}
              onClick={() => handleOptionClick(option)}>
              {option}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectBlogType;
