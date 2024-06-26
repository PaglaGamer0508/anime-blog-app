"use client";

import { toast } from "@/hooks/use-toast";
import { followUserCreationRequest } from "@/lib/validators/followUserValidator";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "./ui/Button";
import { useCustomToasts } from "@/hooks/use-custom-toast";

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
  const { loginToast } = useCustomToasts();
  const [following, setFollowing] = useState(isFollowing);

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
      setFollowing(true);
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
      setFollowing(false);
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

  const showLoginToast = () => {
    return loginToast();
  };

  return (
    <>
      {userId !== "" ? (
        <div>
          {following ? (
            <Button
              isLoading={isUnfollowLoading}
              disabled={isUnfollowLoading}
              onClick={() => unfollow()}
              className="rounded-full active:scale-90 transition-transform duration-100">
              <span>Following</span>
              <Check className="h-4 w-4 ml-1" />
            </Button>
          ) : (
            <Button
              isLoading={isFollowLoading}
              disabled={isFollowLoading}
              onClick={() => follow()}
              className="rounded-full active:scale-90 transition-transform duration-100"
              variant={"primary"}>
              Follow
            </Button>
          )}
        </div>
      ) : (
        <div>
          <Button
            onClick={showLoginToast}
            className="rounded-full active:scale-90 transition-transform duration-100"
            variant={"primary"}>
            Follow
          </Button>
        </div>
      )}
    </>
  );
};

export default FollowUnfollowButton;
