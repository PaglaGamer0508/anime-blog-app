import { Post, User, View } from "@prisma/client";

type BlogThumbnail = {
  id: string;
  image: string;
  title: string;
  createdAt: Date;
  type: BlogType;
  Author: User;
  Views: View[];
  genres: string;
};

type FullBlog = Post & {
  Author: User;
};
