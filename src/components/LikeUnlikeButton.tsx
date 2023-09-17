"use client";

import { toast } from "@/hooks/use-toast";
import { formatCount } from "@/lib/formatCounts";
import { likeAndViewPostCreationRequest } from "@/lib/validators/likeAndViewPostValidator";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Icons } from "./Icons";
import { useCustomToasts } from "@/hooks/use-custom-toast";

interface LikeUnlikeButtonProps {
  isLiked: boolean;
  likes: number;
  userId: string;
  postId: string;
}

const LikeUnlikeButton: React.FC<LikeUnlikeButtonProps> = ({
  likes,
  isLiked,
  userId,
  postId,
}) => {
  const router = useRouter();

  const [liked, setLiked] = useState(isLiked);
  const [likesCount, setLikesCount] = useState(likes);
  const { loginToast } = useCustomToasts();

  // Like post
  const { mutate: likePost } = useMutation({
    mutationFn: async () => {
      const payload: likeAndViewPostCreationRequest = { postId, userId };
      await axios.post("/api/like-post", payload);
    },
    onSettled: () => {
      router.refresh();
    },
  });

  // Unlike post
  const { mutate: unlikePost } = useMutation({
    mutationFn: async () => {
      const payload: likeAndViewPostCreationRequest = { postId, userId };
      await axios.post("/api/unlike-post", payload);
    },
    onSettled: () => {
      router.refresh();
    },
  });

  const handleLikeClick = () => {
    setLiked(true);
    setLikesCount((currentLike) => currentLike + 1);
    likePost();
  };

  const handleUnlikeClick = () => {
    setLiked(false);
    setLikesCount((currentLike) => currentLike - 1);
    unlikePost();
  };

  const showLoginToast = () => {
    return loginToast();
  };

  return (
    <div className="flex items-center gap-2 text-xl rounded-full py-1 px-2">
      {userId !== "" ? (
        <div className="flex items-center">
          {liked ? (
            // unlike button
            <button
              onClick={handleUnlikeClick}
              className="active:scale-125 transition-transform duration-100 ease-in outline-none">
              <Icons.liked className="w-6 h-6" />
            </button>
          ) : (
            // like button
            <button
              onClick={handleLikeClick}
              className="active:scale-75 transition-transform duration-100 ease-out outline-none">
              <Icons.like className="w-6 h-6" />
            </button>
          )}
        </div>
      ) : (
        <button
          onClick={showLoginToast}
          className="active:scale-75 transition-transform duration-100 ease-out outline-none">
          <Icons.like className="w-6 h-6" />
        </button>
      )}
      <div>
        <span>{formatCount(likesCount)}</span>
      </div>
    </div>
  );
};

export default LikeUnlikeButton;
