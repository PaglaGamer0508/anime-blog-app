"use client";

import type { User } from "next-auth";
import React from "react";
import SignOutModal from "./SignOutDialogue";
import UserAvatar from "./UserAvatar";

interface MyProfileProps {
  user: User;
}

const MyProfile: React.FC<MyProfileProps> = ({ user }) => {
  return (
    <div className="flex flex-col items-center pt-10 min-h-screen bg-gray-800 text-white">
      <div className="bg-gray-900 w-full p-8 rounded-lg shadow-md max-w-lg relative">
        <div className="absolute right-3 top-3">
          <SignOutModal />
        </div>
        <div className="flex items-center justify-center">
          <UserAvatar user={user} className="h-20 w-20" />
        </div>
        <h2 className="mt-4 flex text-xl justify-center items-center gap-2 font-semibold text-center">
          <span>{user.name}</span>
        </h2>
        <div className="flex items-center justify-center mt-6">
          <div className="flex flex-wrap gap-2">
            <p className="mx-auto">Email:</p>
            <p className="text-blue-700">{user.email}</p>
          </div>
        </div>
        <div>
          <h1 className="mx-auto text-blue-700 text-2xl font-bold w-fit mt-3">All Blogs</h1>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
