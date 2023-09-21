"use client";

import { useBlogFilterStore } from "@/state/filter/blogFilterStore";
import React from "react";

interface SelectBlogTypeFilterProps {}

const SelectBlogTypeFilter: React.FC<SelectBlogTypeFilterProps> = ({}) => {
  const { blogType, setType } = useBlogFilterStore();
  const options: FilterBlogType[] = ["ALL", "GENERAL", "CHARACTER", "REVIEW"];

  const handleOptionClick = (option: FilterBlogType) => {
    setType(option); 
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-2">
      {/* <span className="text-lg font-semibold text-slate-200 text-center">
        Type:
      </span> */}
      <div className="flex flex-wrap justify-center items-center rounded overflow-hidden">
        {options.map((option) => (
          <div key={option} className="w-full sm:w-auto">
            <button
              className={`${
                blogType === option
                  ? "bg-blue-800 hover:bg-blue-700 text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-200"
              } py-2 px-3 w-full font-semibold transition-transform duration-75`}
              onClick={() => handleOptionClick(option)}>
              {option}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectBlogTypeFilter;
