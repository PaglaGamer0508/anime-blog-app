"use client";

import { GenreEnum, Genres } from "@/app/config";
import { useBlogFilterStore } from "@/state/filter/blogFilterStore";
import React from "react";
import { Icons } from "./Icons";
import Styles from "./styles/dropdown.module.scss";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { addEmojiToGenre } from "@/lib/addEmojiToGenre";

interface SelectGenreFilterProps {}

const SelectGenreFilter: React.FC<SelectGenreFilterProps> = ({}) => {
  const { setGenre, blogGenre } = useBlogFilterStore();

  const selectGenre = (genre: GenreEnum) => {
    setGenre(genre);
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center justify-between h-full min-w-[13rem] w-full py-2 px-4 rounded border border-slate-400 outline-none focus:outline-slate-500 outline-offset-0">
          {blogGenre === "ALL" ? blogGenre : addEmojiToGenre(blogGenre)}
          <Icons.downIcon className="w-4 h-4 text-white" />
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className={`${Styles.custom_scrollbar} bg-gray-800 max-h-[50vh] overflow-scroll overflow-x-hidden text-white z-20`}>
          <DropdownMenuItem onClick={() => setGenre("ALL")}>
            ALL
          </DropdownMenuItem>
          {Genres.map((genre) => (
            <DropdownMenuItem key={genre} onClick={() => selectGenre(genre)}>
              {addEmojiToGenre(genre)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SelectGenreFilter;
