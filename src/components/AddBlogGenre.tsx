"use client";

import { Genre, useBlogGerneStore } from "@/state/blogGenreStore";
import { Minus, PlusIcon } from "lucide-react";
import React from "react";
import Styles from "./styles/dropdown.module.scss";
import { Button, buttonVariants } from "./ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";

interface AddBlogGenreProps {}

const AddBlogGenre: React.FC<AddBlogGenreProps> = ({}) => {
  const { genres, addGenre, removeGenre } = useBlogGerneStore();

  const BlogGenres = [
    Genre.ACTION,
    Genre.ADVENTURE,
    Genre.ROMANCE,
    Genre.SHOUJO,
    Genre.COMEDY,
    Genre.DRAMA,
    Genre.FANTASY,
    Genre.HORROR,
    Genre.MAGIC,
    Genre.MECHA,
    Genre.MYSTERY,
    Genre.SCI_FI,
    Genre.SUPERNATURAL,
    Genre.THRILLER,
    Genre.SPORTS,
    Genre.PSYCHOLOGICAL,
    Genre.HISTORICAL,
    Genre.MILITARY,
    Genre.MUSIC,
    Genre.SLICE_OF_LIFE,
    Genre.HAREM,
    Genre.ISEKAI,
    Genre.SEINEN,
    Genre.SHOUNEN,
    Genre.JOSEI,
    Genre.ECCHI,
    Genre.HENTAI,
    Genre.MAGICAL_GIRL,
    Genre.VAMPIRE,
    Genre.ZOMBIE,
  ];

  const formatGenreName = (genreinput: string | Genre): string => {
    const genre = genreinput.toString();
    const hyphenated = genre.replace(/_/g, "-");
    const formattedGenre = hyphenated
      .toLowerCase()
      .replace(/\b\w/g, (char: string) => char.toUpperCase());
    return formattedGenre;
  };

  return (
    <>
      <div className="flex px-3 pt-3">
        {/* Drop down genre select section */}
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none w-44">
            <Button className="space-x-1 min-h-[3rem] mx-1">
              <span>Add Genres</span>
              <PlusIcon />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className={`${Styles.custom_scrollbar} bg-gray-800 max-h-[40dvh] overflow-scroll overflow-x-hidden text-white z-20`}>
            <DropdownMenuItem>All</DropdownMenuItem>
            {BlogGenres.map((genre, index) => (
              <DropdownMenuItem key={index}>
                <Button
                  onClick={() => {
                    addGenre(genre);
                  }}
                  className="w-full flex justify-between p-2">
                  {formatGenreName(genre)}
                  <PlusIcon />
                </Button>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Selected Genres Section */}
        <div className="flex items-center flex-wrap gap-2 bg-slate-800 min-h-[3rem] w-full border border-slate-400 p-2 rounded-lg">
          {genres.length === 0 ? (
            <span className="select-none">No Genre Selected</span>
          ) : (
            genres.map((genre) => (
              <div
                key={genre}
                className={`flex justify-between ${buttonVariants()}`}>
                <span className="select-none">{formatGenreName(genre)}</span>
                <Button
                  onClick={() => removeGenre(genre)}
                  className="p-0 ml-3 h-fit rounded-full"
                  variant={"destructive"}>
                  <Minus />
                </Button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default AddBlogGenre;
