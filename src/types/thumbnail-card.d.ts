import { Like, Post, User, View } from "@prisma/client";

type extendedBlog = Post & {
  Author: User;
  Likes: Like[];
  Views: View[]
};

