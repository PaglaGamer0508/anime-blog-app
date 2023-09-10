import { z } from "zod";

export const likeAndViewPostValidator = z.object({
  postId: z.string(),
  userId: z.string(),
});

export type likeAndViewPostCreationRequest = z.infer<typeof likeAndViewPostValidator>;
