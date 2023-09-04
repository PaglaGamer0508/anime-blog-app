import { formatViewCount } from "@/lib/formatViewCount";
import { timeAgo } from "@/lib/timeAgo";
import { extendedBlog } from "@/types/thumbnail-card";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShowBlogType from "./ShowBlogType";
import UserAvatar from "./UserAvatar";

interface ThumbnailProps {
  blog: extendedBlog;
}

const ThumbnailCard: React.FC<ThumbnailProps> = async ({ blog }) => {
  const { Author, image, type, createdAt, title, Views } = blog;

  return (
    <div className="mx-auto bg-slate-800 text-white rounded-lg shadow-lg w-full overflow-hidden pb-2 relative">
      <div className="image-box w-full h-56 relative flex justify-center overflow-hidden">
        <Link href={"/"}>
          <Image
            src={image}
            alt={title}
            width={600}
            height={250}
            style={{ objectFit: "cover" }}
          />
        </Link>
      </div>
      <div className="px-4 py-1">
        <Link href={"/"}>
          <h1 className="text-xl font-semibold mb-1 py-1">{title}</h1>
        </Link>
        <Link href={`/user-profile/${Author.id}`}>
          <div className="flex items-center gap-2 pt-1">
            <UserAvatar user={Author} className="w-6 h-6" />
            <p className="text-base">{Author.name}</p>
          </div>
        </Link>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-xs mt-2 space-x-1 text-slate-400">
            <EyeIcon className="h-4 w-4" />
            <span>{formatViewCount(Views.length)} views</span>
            <span>• {timeAgo(createdAt)} ago</span>
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
