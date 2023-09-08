"use client";

import { toast } from "@/hooks/use-toast";
import { followUserCreationRequest } from "@/lib/validators/followUserValidator";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Check, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/Button";

interface FollowUnfollowButtonProps {
  isFollowing: boolean;
  followUserId: string;
  userId: string;
}

const FollowUnfollowButton: React.FC<FollowUnfollowButtonProps> = ({
  isFollowing,
  followUserId,
  userId,
}) => {
  const router = useRouter();

  //* Follow User
  const { mutate: follow, isLoading: isFollowLoading } = useMutation({
    mutationFn: async () => {
      const payload: followUserCreationRequest = {
        followUserId,
        userId,
      };

      await axios.post("/api/follow-user", payload);
    },
    onSuccess: () => {
      router.refresh();
    },
    onError: () => {
      return toast({
        title: "Error",
        description: "Can't follow user, Pleas try again later",
        variant: "destructive",
      });
    },
  });

  //! Unfollow User
  const { mutate: unfollow, isLoading: isUnfollowLoading } = useMutation({
    mutationFn: async () => {
      const payload: followUserCreationRequest = {
        followUserId,
        userId,
      };

      await axios.post("/api/unfollow-user", payload);
    },
    onSuccess: () => {
      router.refresh();
    },
    onError: () => {
      return toast({
        title: "Error",
        description: "Can't unfollow user, Pleas try again later",
        variant: "destructive",
      });
    },
  });

  return (
    <>
      {isFollowing ? (
        <Button
          isLoading={isUnfollowLoading}
          onClick={() => unfollow()}
          className="rounded-full active:scale-90 transition-transform duration-100">
          <span>Following</span>
          <Check className="h-4 w-4 ml-1" />
        </Button>
      ) : (
        <Button
          isLoading={isFollowLoading}
          onClick={() => follow()}
          className="rounded-full active:scale-90 transition-transform duration-100"
          variant={"primary"}>
          Follow
        </Button>
      )}
    </>
  );
};

export default FollowUnfollowButton;
