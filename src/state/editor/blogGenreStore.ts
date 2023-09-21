import { GenreEnum } from "@/app/config";
import { toast } from "@/hooks/use-toast";
import { create } from "zustand";

interface BlogGerneStore {
  genres: GenreEnum[];
  addGenre: (genre: GenreEnum) => void;
  removeGenre: (genre: string) => void;
  clearGenre: () => void;
}

export const useBlogGerneStore = create<BlogGerneStore>((set, get) => ({
  genres: [],
  addGenre: (genre: GenreEnum) => {
    if (get().genres.length >= 6) {
      toast({
        title: "Alert",
        description: "You cannot add more than 6 genres",
      });
    } else {
      if (!get().genres.includes(genre)) {
        set((state) => ({ genres: [...state.genres, genre] }));
      } else {
        toast({
          title: "Alert",
          description: "Genre Already Added",
        });
      }
    }
  },
  removeGenre: (genre: string) => {
    set((state) => ({ genres: state.genres.filter((g) => g !== genre) }));
  },
  clearGenre: () => set({ genres: [] }),
}));
