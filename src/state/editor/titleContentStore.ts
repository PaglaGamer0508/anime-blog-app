import { create } from "zustand";

// Define the store state type
interface TitleContentState {
  title: string;
  content: string;
}

// Define the store actions type
interface TitleContentActions {
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
  clearData: () => void;
}

export const useTitleContentStore = create<TitleContentState & TitleContentActions>(
  (set) => ({
    title: "",
    content: "",
    setTitle: (title) => set({ title }),
    setContent: (content) => set({ content }),
    clearData: () => set({ title: "", content: "" }),
  })
);
