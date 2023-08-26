"use client"

import { useBlogTypeStore } from "@/state/blogTypeStore";
import React from "react";

const SelectBlogType: React.FC = () => {
  const selectedOption = useBlogTypeStore((state) => state.blogType);
  const setSelectedOption = useBlogTypeStore((state) => state.setBlogType);
  const options: BlogType[] = ["GENERAL", "CHARACTER", "REVIEW"];

  const handleOptionClick = (option: BlogType) => {
    setSelectedOption(option);
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
                selectedOption === option
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              } py-2 px-4 rounded-md w-full font-semibold`}
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
