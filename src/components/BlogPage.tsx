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
import ShowBlogGenres from "./ShowBlogGenres";
import AddView from "./AddView";
import { getLikes } from "@/lib/getLikes";
import { getViews } from "@/lib/getViews";
import { EyeIcon } from "lucide-react";
import { GenreEnum } from "@/app/config";

interface BlogPageProps extends HTMLAttributes<HTMLDivElement> {
  blog: FullBlog;
}

const BlogPage: React.FC<BlogPageProps> = async ({ blog, ...props }) => {
  const { Author, image, title, content, type, createdAt, genres } = blog;

  const formattedGenres: GenreEnum[] = JSON.parse(genres);

  const followers = await getUserFollowers(Author.id);

  const isLiked = await getIsLiked(blog.id);
  const isFollowing = await getIsFollowing(Author.id);

  // this is the user
  const session = await getAuthSession();
  // likes and views freash data
  const likeCount = await getLikes(blog.id);
  const viewCount = await getViews(blog.id);

  const ownAccount = session?.user?.id === Author.id;

  return (
    <div className="shadow-lg overflow-hidden" {...props}>
      {/* This component return nothing, it is for adding view to the post */}
      {ownAccount ? null : (
        <AddView postId={blog.id} userId={session?.user?.id || ""} />
      )}
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
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-x-2 py-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-600 font-semibold mb-2">
            {title}
          </h1>
          <ShowBlogType type={type} />
        </div>

        {/* Blog Genres */}
        <ShowBlogGenres genres={formattedGenres} />

        {/* views and date */}
        <div className="flex items-center font-medium gap-x-2 text-gray-300">
          <div className="flex items-center gap-x-1">
            <EyeIcon className="w-4 h-4" />
            <p>{formatCount(viewCount)} views</p>
          </div>
          <p>{formatDate(createdAt)}</p>
        </div>

        <div className="flex items-center justify-between">
          {/* User icon and info */}
          <div className="mb-2">
            <div className="w-fit flex items-center gap-4">
              <Link href={`/user-profile/${Author.id}`}>
                <div className="flex items-center gap-2 pt-1">
                  <UserAvatar
                    user={Author}
                    className="w-8 md:w-10 h-8 md:h-10"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-base md:text-lg font-semibold">
                      {Author.name}
                    </p>
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
                    userId={session?.user?.id || ""}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Like and share */}
          <div className="flex items-center mx-4">
            {/* <Icons.liked className="w-8 h-8" /> */}
            {ownAccount ? (
              <div>{likeCount} Likes</div>
            ) : (
              <LikeUnlikeButton
                userId={session?.user?.id || ""}
                isLiked={isLiked}
                likes={likeCount}
                postId={blog.id}
              />
            )}
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
