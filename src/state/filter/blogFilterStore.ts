import { removeEmojisFromGenre } from "@/lib/removeEmojiFromGenre";
import { create } from "zustand";
interface filterStates {
  blogType: FilterBlogType | null;
  blogGenre: string | null;
}

interface filterActions {
  setType: (type: FilterBlogType) => void;
  setGenre: (genre: string) => void;
}

export const useBlogFilterStore = create<filterStates & filterActions>(
  (set) => ({
    blogType: "ALL",
    blogGenre: "ALL",
    setType: (type) => {
      set({ blogType: type });
      console.log(type);
    },
    setGenre: (genre) => {
      set({ blogGenre: removeEmojisFromGenre(genre) });
      console.log(genre);
    },
  })
);
