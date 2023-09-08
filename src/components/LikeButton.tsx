"use client";

import React, { useState } from "react";
import { Icons } from "./Icons";

interface LikeButtonProps {
  //   isLiked: boolean;
  likes: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ likes }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex items-center gap-2 text-xl rounded-full py-1 px-2">
      <div className="flex items-center">
        {liked ? (
          <button
            onClick={() => setLiked(false)}
            className="active:scale-125 transition-transform duration-100 ease-in outline-none">
            <Icons.liked className="w-6 h-6" />
          </button>
        ) : (
          <button
            onClick={() => setLiked(true)}
            className="active:scale-75 transition-transform duration-100 ease-out outline-none">
            <Icons.like className="w-6 h-6" />
          </button>
        )}
      </div>
      <div>
        <span>{likes}</span>
      </div>
    </div>
  );
};

export default LikeButton;
