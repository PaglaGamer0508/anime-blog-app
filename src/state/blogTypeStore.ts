import { create } from "zustand";

interface BlogTypeStore {
  blogType: BlogType;
  setBlogType: (blogType: BlogType) => void;
  clearBlogType: () => void;
}

export const useBlogTypeStore = create<BlogTypeStore>((set) => ({
  blogType: "GENERAL",
  setBlogType: (blogType: BlogType) => set({ blogType }),
  clearBlogType: () => set({ blogType: "GENERAL" }),
}));
