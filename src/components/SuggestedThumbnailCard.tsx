import { checkIsNew } from "@/lib/checkIsNew";
import { formatCount } from "@/lib/formatCounts";
import { timeAgo } from "@/lib/timeAgo";
import { suggestedBlog } from "@/types/extended-blog";
import { EyeIcon, View } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SuggestedThumbnailCardProps {
  suggestedBlog: suggestedBlog;
}

const SuggestedThumbnailCard: React.FC<SuggestedThumbnailCardProps> = ({
  suggestedBlog,
}) => {
  const { id, title, image, Views, createdAt, Author } = suggestedBlog;


  return (
    <div className="flex gap-x-2 rounded-md overflow-hidden p-1 active:bg-gray-400/40 transition-colors duration-100 ease-in">
      <div className="w-48 h-fit relative aspect-video overflow-hidden rounded">
        <Link href={`/blog/${id}`}>
          {/* Main image */}
          <Image
            className="h-full w-auto mx-auto relative z-20"
            src={image}
            alt={title}
            width={250}
            height={100}
          />
          {/* blur image image */}
          <Image
            className="h-full w-full object-cover mx-auto absolute inset-0 z-10 blur-md"
            src={image}
            alt={title}
            width={40}
            height={20}
          />
        </Link>
      </div>
      <div className="flex flex-col gap-y-[5px] w-[60%]">
        <Link href={`/blog/${id}`}>
          <h1 className="text-base font-semibold">
            {title.length > 40 ? title.slice(0, 40) + "..." : title}
          </h1>
        </Link>
        <Link href={`/user-profile/${Author.id}`}>
          <p className="text-sm text-slate-400 hover:text-slate-300 transition-colors duration-75">
            {Author.name}
          </p>
        </Link>
        <div className="flex items-center text-xs text-slate-400 space-x-1">
          <EyeIcon className="w-4 h-4" />
          <span>{formatCount(Views.length)} views </span>
          <span> • {timeAgo(createdAt)}</span>
        </div>
        {checkIsNew(createdAt) ? (
          <div className="bg-gray-600/50 text-slate-300 text-xs w-fit h-fit py-[1px] px-1 rounded-sm">
            <span>New</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SuggestedThumbnailCard;
