import { getAuthSession } from "@/lib/auth";
import { formatCount } from "@/lib/formatCounts";
import { formatDate } from "@/lib/formatDate";
import { getUserFollowers } from "@/lib/getFollowers";
import { getIsFollowing } from "@/lib/getIsFollowing";
import { getIsLiked } from "@/lib/getIsLiked";
import { FullBlog } from "@/types/extended-blog";
import Image from "next/image";
import Link from "next/link";
import React, { HTMLAttributes } from "react";
import FollowUnfollowButton from "./FollowUnfollowButton";
import LikeUnlikeButton from "./LikeUnlikeButton";
import ShowBlogType from "./ShowBlogType";
import UserAvatar from "./UserAvatar";

interface BlogPageProps extends HTMLAttributes<HTMLDivElement> {
  blog: FullBlog;
}

const BlogPage: React.FC<BlogPageProps> = async ({ blog, ...props }) => {
  const {
    Author,
    Likes,
    Views,
    image,
    title,
    content,
    type,
    createdAt,
    genres,
  } = blog;

  const followers = await getUserFollowers(Author.id);
  const formattedGenres: String[] = JSON.parse(genres);

  const isLiked = await getIsLiked(blog.id);
  const isFollowing = await getIsFollowing(Author.id);

  const session = await getAuthSession();
  const ownAccount = session?.user?.id === Author.id;

  return (
    <div className="p-10 rounded-lg shadow-lg overflow-hidden" {...props}>
      <div className="aspect-video relative overflow-hidden rounded-md">
        {/* main image */}
        <Image
          src={image}
          alt={title}
          width={1000}
          height={560}
          className="h-full w-auto relative z-20 mx-auto select-none"
        />
        {/* background blur image */}
        <Image
          src={image}
          alt={title}
          width={100}
          height={50}
          className="h-full w-full absolute inset-0 z-10 blur-lg object-cover select-none"
        />
      </div>
      <header>
        <div className="flex justify-between items-center gap-2 pt-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-600 font-semibold mb-2">
            {title}
          </h1>
          <ShowBlogType type={type} />
        </div>

        {/* Blog Genres */}
        <div className="mt-2 flex flex-wrap gap-2 mb-2">
          {formattedGenres.map((genre, index) => (
            <div
              key={Math.random()}
              className={`h-fit w-fit border rounded-md py-1 px-2
        ${
          [
            "text-blue-500 border-blue-500",
            "text-red-500 border-red-500",
            "text-green-500 border-green-500",
            "text-indigo-600 border-indigo-600",
            "text-yellow-500 border-yellow-500",
            "text-violet-600 border-violet-600",
          ][index % 6]
        }`}>
              {genre}
            </div>
          ))}
        </div>

        {/* views and date */}
        <div className="flex items-center font-medium gap-x-2 text-gray-300">
          <p>{formatCount(Views.length)} views</p>
          <p>{formatDate(createdAt)}</p>
        </div>

        <div className="flex items-center justify-between">
          {/* User icon and info */}
          <div className="mb-2">
            <div className="w-fit flex items-center gap-4">
              <Link href={`/user-profile/${Author.id}`}>
                <div className="flex items-center gap-2 pt-1">
                  <UserAvatar user={Author} className="w-10 h-10" />
                  <div className="flex flex-col justify-between">
                    <p className="text-lg font-semibold">{Author.name}</p>
                    <div className="text-slate-300">
                      {followers === null ? (
                        <span>No info</span>
                      ) : (
                        <span>{formatCount(followers)} followers</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>

              <div>
                {ownAccount ? null : (
                  <FollowUnfollowButton
                    isFollowing={isFollowing}
                    followUserId={Author.id}
                    userId={session?.user ? session?.user?.id : ""}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Like and share */}
          <div className="flex items-center mx-4">
            {/* <Icons.liked className="w-8 h-8" /> */}
            <LikeUnlikeButton
              userId={session?.user ? session?.user?.id : ""}
              isLiked={isLiked}
              likes={Likes.length}
              postId={blog.id}
            />
          </div>
        </div>
      </header>

      <hr className="bg-slate-400 border-none h-[1px] w-full mt-2" />

      {/* Content section */}
      <div className="mt-4 text-slate-300 whitespace-pre-wrap md:text-lg">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BlogPage;
