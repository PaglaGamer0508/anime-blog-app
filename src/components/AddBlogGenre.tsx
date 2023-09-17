"use client";

import { useBlogGerneStore } from "@/state/editor/blogGenreStore";
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
import { Genres } from "@/app/config";
import { formatGenreName } from "@/lib/formatGenreName";

interface AddBlogGenreProps {}

const AddBlogGenre: React.FC<AddBlogGenreProps> = ({}) => {
  const { genres, addGenre, removeGenre } = useBlogGerneStore();

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
            {Genres.map((genre, index) => (
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
            genres.map((genre, index) => (
              <div
                key={genre}
                className={`flex justify-between border ${buttonVariants()} ${
                  [
                    "border-blue-500",
                    "border-red-500",
                    "border-green-500",
                    "border-indigo-600",
                    "border-yellow-500",
                    "border-violet-600",
                  ][index % 6]
                }`}>
                <span
                  className={`select-none ${
                    [
                      "text-blue-500",
                      "text-red-500",
                      "text-green-500",
                      "text-indigo-600",
                      "text-yellow-500",
                      "text-violet-600",
                    ][index % 6]
                  }`}>
                  {formatGenreName(genre)}
                </span>
                <Button
                  onClick={() => removeGenre(genre)}
                  className={`p-0 ml-3 h-fit rounded-full ${
                    [
                      "bg-blue-500 hover:bg-blue-600",
                      "bg-red-500 hover:bg-red-600",
                      "bg-green-500 hover:bg-green-600",
                      "bg-indigo-600 hover:bg-indigo-600",
                      "bg-yellow-500 hover:bg-yellow-600",
                      "bg-violet-600 hover:bg-violet-600",
                    ][index % 6]
                  }`}>
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
