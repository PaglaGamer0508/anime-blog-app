"use client";

import React, { useEffect, useState } from "react";
import { Icons } from "./Icons";
import { useMutation } from "@tanstack/react-query";
import {
  likePostCreationRequest,
  likePostValidator,
} from "@/lib/validators/likePostValidator";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

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

  // Like post
  const { mutate: likePost } = useMutation({
    mutationFn: async () => {
      const payload: likePostCreationRequest = { postId, userId };
      await axios.post("/api/like-post", payload);
    },
    onSuccess: () => {
      router.refresh();
    },
    onError: () => {
      return toast({
        title: "Error",
        description: "Error liking post",
        variant: "destructive",
      });
    },
  });

  // Unlike post
  const { mutate: unlikePost } = useMutation({
    mutationFn: async () => {
      const payload: likePostCreationRequest = { postId, userId };
      await axios.post("/api/unlike-post", payload);
    },
    onSuccess: () => {
      router.refresh();
    },
    onError: () => {
      return toast({
        title: "Error",
        description: "Error unliking post",
        variant: "destructive",
      });
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

  return (
    <div className="flex items-center gap-2 text-xl rounded-full py-1 px-2">
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
      <div>
        <span>{likesCount}</span>
      </div>
    </div>
  );
};

export default LikeUnlikeButton;
