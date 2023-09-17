import { formatCount } from "@/lib/formatCounts";
import { timeAgo } from "@/lib/timeAgo";
import { BlogThumbnail } from "@/types/extended-blog";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShowBlogType from "./ShowBlogType";
import UserAvatar from "./UserAvatar";

interface ThumbnailProps {
  blog: BlogThumbnail;
}

const ThumbnailCard: React.FC<ThumbnailProps> = async ({ blog }) => {
  const { Author, image, type, createdAt, title, Views, id } = blog;

  return (
    <div className="mx-auto bg-slate-800 text-white rounded-lg shadow-lg w-full overflow-hidden pb-2 relative">
      <div className="w-full aspect-video relative flex justify-center overflow-hidden">
        <Link href={`/blog/${id}`}>
          {/* main image */}
          <Image
            src={image}
            alt={title}
            width={600}
            height={250}
            className="h-full relative w-auto z-20 object-cover mx-auto"
          />
          {/* background blur image */}
          <Image
            src={image}
            alt={title}
            width={60}
            height={25}
            className="h-full w-full absolute inset-0 z-10 filter blur-md object-cover"
          />
        </Link>
      </div>
      <div className="px-4 py-1">
        {/* title */}
        <Link href={`/blog/${id}`}>
          <h1 className="text-xl font-semibold mb-1 py-1">
            {title.length > 60 ? title.slice(0, 40) + "..." : title}
          </h1>
        </Link>
        {/* Author section */}
        <div className="w-fit">
          <Link href={`/user-profile/${Author.id}`}>
            <div className="flex items-center gap-2 pt-1">
              <UserAvatar user={Author} className="w-6 h-6" />
              <p className="text-base">{Author.name}</p>
            </div>
          </Link>
        </div>
        {/* details section */}
        <div className="flex justify-between items-center">
          <div className="flex items-center text-xs mt-2 space-x-1 text-slate-400">
            <EyeIcon className="h-4 w-4" />
            <span className="flex items-center">
              {formatCount(Views.length)} views
            </span>
            <span className="flex items-center">
              • {timeAgo(createdAt)}
            </span>
          </div>
          <div>
            <ShowBlogType type={type} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThumbnailCard;
