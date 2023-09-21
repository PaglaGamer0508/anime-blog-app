import { GenreEnum } from "@/app/config";
import { create } from "zustand";
interface filterStates {
  blogType: FilterBlogType;
  blogGenre: GenreEnum | "ALL";
}

interface filterActions {
  setType: (type: FilterBlogType) => void;
  setGenre: (genre: GenreEnum | "ALL") => void;
}

export const useBlogFilterStore = create<filterStates & filterActions>(
  (set) => ({
    blogType: "ALL",
    blogGenre: "ALL",
    setType: (type) => {
      set({ blogType: type });
    },
    setGenre: (genre) => {
      set({ blogGenre: genre });
    },
  })
);
