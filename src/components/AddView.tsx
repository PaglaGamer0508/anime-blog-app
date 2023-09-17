"use client";

import { likeAndViewPostCreationRequest } from "@/lib/validators/likeAndViewPostValidator";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";

interface AddViewProps {
  postId: string;
  userId: string;
}

const AddView: React.FC<AddViewProps> = ({ postId, userId }) => {
  const { mutate: viewPost } = useMutation({
    mutationFn: async () => {
      const payload: likeAndViewPostCreationRequest = {
        postId,
        userId,
      };
      await axios.post("/api/view-post", payload);
    },
  });

  useEffect(() => {
    if (userId !== "") {
      viewPost();
    }
  }, []);

  return null;
};

export default AddView;
