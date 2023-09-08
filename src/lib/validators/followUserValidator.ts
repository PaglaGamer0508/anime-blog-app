import { z } from "zod";

export const followUserValidator = z.object({
  followUserId: z.string(),
  userId: z.string(),
});

export type followUserCreationRequest = z.infer<typeof followUserValidator>;
