import { z } from "zod";

const BlogType = ["GENERAL", "REVIEW", "CHARACTER"] as const;

const BlogGenres = [
  "ACTION",
  "ADVENTURE",
  "ROMANCE",
  "SHOUJO",
  "COMEDY",
  "DRAMA",
  "FANTASY",
  "HORROR",
  "MAGIC",
  "MECHA",
  "MYSTERY",
  "SCI_FI",
  "SUPERNATURAL",
  "THRILLER",
  "SPORTS",
  "PSYCHOLOGICAL",
  "HISTORICAL",
  "MILITARY",
  "MUSIC",
  "SLICE_OF_LIFE",
  "HAREM",
  "ISEKAI",
  "SEINEN",
  "SHOUNEN",
  "JOSEI",
  "ECCHI",
  "HENTAI",
  "MAGICAL_GIRL",
  "VAMPIRE",
  "ZOMBIE",
] as const;

export const BlogPostValidator = z.object({
  image: z.string(),
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters" })
    .max(128, { message: "Title cannot be longer than 128 characters" }),
  content: z.any(),
  authorId: z.string(),
  genres: z.array(z.enum(BlogGenres)),
  type: z.enum(BlogType),
});

export type BlogPostCreationRequest = z.infer<typeof BlogPostValidator>;
