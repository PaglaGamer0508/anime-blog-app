import { z } from "zod";

const BlogType = ["GENERAL", "REVIEW", "CHARACTER"] as const;

export const BlogPostValidator = z.object({
  image: z.string(),
  title: z
    .string()
    .min(3, { message: "Title must be at least be 3 characters" })
    .max(128, { message: "Title cannot be longer than 128 characters" }),
  content: z
    .string()
    .min(30, { message: "Content must at least be 30 characters long" }),
  authorId: z.string(),
  genres: z.array(z.string()),
  type: z.enum(BlogType),
});

export type BlogPostCreationRequest = z.infer<typeof BlogPostValidator>;
