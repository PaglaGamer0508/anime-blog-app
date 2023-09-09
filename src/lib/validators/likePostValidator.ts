import { z } from "zod";

export const likePostValidator = z.object({
  postId: z.string(),
  userId: z.string(),
});

export type likePostCreationRequest = z.infer<typeof likePostValidator>;
