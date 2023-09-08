"use client";

import React from "react";
import Styles from "./styles/dropdown.module.scss";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";

interface DropDownMenuGenresProps {}

const DropDownMenuGenres: React.FC<DropDownMenuGenresProps> = ({}) => {
  const genres = [
    "Action",
    "Adventure",
    "Romance",
    "Shoujo",
    "Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Magic",
    "Mecha",
    "Mystery",
    "Sci-fi",
    "Supernatural",
    "Thriller",
    "Sports",
    "Psychological",
    "Historical",
    "Military",
    "Music",
    "Slice of life",
    "Harem",
    "Isekai",
    "Seinen",
    "Shounen",
    "Josei",
    "Ecchi",
    "Hentai",
    "Magical girl",
    "Vampire",
    "Zombie",
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">Genres</DropdownMenuTrigger>

      <DropdownMenuContent
        className={`${Styles.custom_scrollbar} bg-gray-800 max-h-[50vh] overflow-scroll overflow-x-hidden text-white z-20`}>
        <DropdownMenuItem>All</DropdownMenuItem>
        {genres.map((genre) => (
          <DropdownMenuItem key={genre}>{genre}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownMenuGenres;
