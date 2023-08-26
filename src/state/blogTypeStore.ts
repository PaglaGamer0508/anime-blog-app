import { create } from "zustand";

interface BlogTypeStore {
  blogType: BlogType;
  setBlogType: (blogType: BlogType) => void;
}

export const useBlogTypeStore = create<BlogTypeStore>((set, get) => ({
  blogType: "GENERAL",
  setBlogType: (blogType: BlogType) => set({ blogType }),
}));
