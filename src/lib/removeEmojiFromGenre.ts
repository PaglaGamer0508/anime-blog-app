// for a single string
export const removeEmojisFromGenre = (genre: string): string => {
  const genreNoEmoji = genre
    .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "")
    .trim();

  return genreNoEmoji;
};

// for a array of string
export const removeEmojisFromGenresArray = (
  genresArray: string[]
): string[] => {
  const genresWithoutEmojis = genresArray.map((genre) => {
    return genre
      .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "")
      .trim();
  });

  return genresWithoutEmojis;
};

