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

type suggestedBlog = {
  id: string;
  title: string;
  image: string;
  Views: View[];
  createdAt: Date;
  Author: User;
};
