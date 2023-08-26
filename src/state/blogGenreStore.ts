import { toast, useToast } from "@/hooks/use-toast";
import { create } from "zustand";

export enum Genre {
  ACTION = "ACTION ✊🔥",
  ADVENTURE = "ADVENTURE 🌍🌟",
  ROMANCE = "ROMANCE 💑❤️",
  SHOUJO = "SHOUJO 👧🎀",
  COMEDY = "COMEDY 😂🎉",
  DRAMA = "DRAMA 🎭😢",
  FANTASY = "FANTASY 🧚🏼🦄",
  HORROR = "HORROR 🧛‍♂️😱",
  MAGIC = "MAGIC 🧙✨",
  MECHA = "MECHA 🤖🚀",
  MYSTERY = "MYSTERY 🕵️‍♂️🔍",
  SCI_FI = "SCI_FI 🚀🌌",
  SUPERNATURAL = "SUPERNATURAL 👻✨",
  THRILLER = "THRILLER 🎢😱",
  SPORTS = "SPORTS 🏀⚽",
  PSYCHOLOGICAL = "PSYCHOLOGICAL 🧠🤯",
  HISTORICAL = "HISTORICAL 🏛️📜",
  MILITARY = "MILITARY ⚔️💣",
  MUSIC = "MUSIC 🎵🎶",
  SLICE_OF_LIFE = "SLICE_OF_LIFE 🍕🌞",
  HAREM = "HAREM 🙆‍♂️👩‍🦰",
  ISEKAI = "ISEKAI 🌍🔮",
  SEINEN = "SEINEN 👨🔞",
  SHOUNEN = "SHOUNEN 👦🔥",
  JOSEI = "JOSEI 👩📚",
  ECCHI = "ECCHI 👙😳",
  HENTAI = "HENTAI 🔞💦",
  MAGICAL_GIRL = "MAGICAL_GIRL 🧙‍♀️🌟",
  VAMPIRE = "VAMPIRE 🧛‍♂️🦇",
  ZOMBIE = "ZOMBIE 🧟‍♂️🧟‍♀️",
}

interface BlogGerneStore {
  genres: Genre[];
  addGenre: (genre: Genre) => void;
  removeGenre: (genre: Genre) => void;
}

export const useBlogGerneStore = create<BlogGerneStore>((set, get) => ({
  genres: [],
  addGenre: (genre: Genre) => {
    if (!get().genres.includes(genre)) {
      set((state) => ({ genres: [...state.genres, genre] }));
    } else {
      toast({
        title: "Alert",
        description: "Genre Already Added",
      });
    }
  },
  removeGenre: (genre: Genre) => {
    set((state) => ({ genres: state.genres.filter((g) => g !== genre) }));
  },
}));
