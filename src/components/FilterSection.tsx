"use client";

import { FilterIcon } from "lucide-react";
import React from "react";
import SelectBlogTypeFilter from "./SelectBlogTypeFilter";
import SelectGenreFilter from "./SelectGenreFilter";
import { Button } from "./ui/Button";
import { useBlogFilterStore } from "@/state/filter/blogFilterStore";

interface FilterSectionProps {}

const FilterSection: React.FC<FilterSectionProps> = ({}) => {
  const { setGenre, setType } = useBlogFilterStore();

  const clearFilter = () => {
    setType("ALL");
    setGenre("ALL");
  };

  return (
    <div className="flex flex-wrap mb-2 p-0 gap-1">
      <Button
        onClick={clearFilter}
        variant={"primary"}
        className="flex items-center space-x-1">
        <FilterIcon className="w-4 h-4" />
        <span>Filter</span>
      </Button>

      <SelectBlogTypeFilter />
      <SelectGenreFilter />
    </div>
  );
};

export default FilterSection;
