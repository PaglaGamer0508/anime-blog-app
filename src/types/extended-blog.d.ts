import { Like, Post, User, View } from "@prisma/client";

type BlogThumbnail = {
  id: string;
  image: string;
  title: string;
  createdAt: Date;
  type: BlogType;
  Author: User;
  Views: View[];
};

type FullBlog = Post & {
  Author: User;
  Views: View[];
  Likes: Like[];
};
