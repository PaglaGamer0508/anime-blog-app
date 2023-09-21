import { GenreEnum } from "@/app/config";

const Genres = {
  ACTION: "✊🔥",
  ADVENTURE: "🌍🌟",
  ROMANCE: "💑❤️",
  SHOUJO: "👧🎀",
  COMEDY: "😂🎉",
  DRAMA: "🎭😢",
  FANTASY: "🧚🏼🦄",
  HORROR: "🧛‍♂️😱",
  MAGIC: "🧙✨",
  MECHA: "🤖🚀",
  MYSTERY: "🕵️‍♂️🔍",
  SCI_FI: "🚀🌌",
  SUPERNATURAL: "👻✨",
  THRILLER: "🎢😱",
  SPORTS: "🏀⚽",
  PSYCHOLOGICAL: "🧠🤯",
  HISTORICAL: "🏛️📜",
  MILITARY: "⚔️💣",
  MUSIC: "🎵🎶",
  SLICE_OF_LIFE: "🍕🌞",
  HAREM: "🙆‍♂️👩‍🦰",
  ISEKAI: "🌍🔮",
  SEINEN: "👨🔞",
  SHOUNEN: "👦🔥",
  JOSEI: "👩📚",
  ECCHI: "👙😳",
  HENTAI: "🔞💦",
  MAGICAL_GIRL: "🧙‍♀️🌟",
  VAMPIRE: "🧛‍♂️🦇",
  ZOMBIE: "🧟‍♂️🧟‍♀️",
  CRIME: "🔪🔍",
};

export const addEmojiToGenre = (genre: GenreEnum): string => {
  return `${genre} ${Genres[genre]}`;
};

addEmojiToGenre(GenreEnum.ACTION);
