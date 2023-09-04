import LoginToDoAction from "@/components/LoginToDoAction";
import MyProfile from "@/components/MyProfile";
import { getAuthSession } from "@/lib/auth";
import React from "react";

const page: React.FC = async () => {
  const session = await getAuthSession();
  return (
    <>
      {session?.user ? (
        <MyProfile user={session?.user} />
      ) : (
        <LoginToDoAction action="See Profile" />
      )}
    </>
  );
};

export default page;
