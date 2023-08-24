import React from "react";
import Link from "next/link";
import UserAuthForm from "./UserAuthForm";
// import UserAuthForm from "./UserAuthForm";

const SignIn = () => {
  return (
    <div className="container mx-auto w-full flex flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome</h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you are setting up a AnimeBlogs account and agree to
          our User Agreement and Privacy Policy.
        </p>

        {/* Sing in form */}
        <UserAuthForm />
      </div>
    </div>
  );
};

export default SignIn;
