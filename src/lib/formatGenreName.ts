export const formatGenreName = (genreinput: string): string => {
  const genre = genreinput.toString();
  const hyphenated = genre.replace(/_/g, "-");
  const formattedGenre = hyphenated
    .toLowerCase()
    .replace(/\b\w/g, (char: string) => char.toUpperCase());
  return formattedGenre;
};
