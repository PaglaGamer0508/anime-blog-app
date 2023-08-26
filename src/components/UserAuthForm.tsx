"use client";

import { Button } from "@/components/ui/Button";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { Icons } from "./Icons";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: React.FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  // these state are for showing the loading spinner only on the buttom that the user clicked
  const [googleLoadingSpinner, setGoogleLoadingSpinner] =
    useState<boolean>(false);
  const [githubLoadingSpinner, setGithubLoadingSpinner] =
    useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);
    setGoogleLoadingSpinner(true);
    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error logging in with Google",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setGoogleLoadingSpinner(false);
    }
  };

  const loginWithGithub = async () => {
    setIsLoading(true);
    setGithubLoadingSpinner(true);
    try {
      await signIn("github");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error logging in with Github",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setGithubLoadingSpinner(false);
    }
  };

  return (
    <div
      className={cn("flex flex-col space-y-2 justify-center", className)}
      {...props}>
      <Button
        isLoading={isLoading}
        loadingSpinner={false}
        type="button"
        size="sm"
        className="w-full"
        onClick={loginWithGoogle}
        disabled={isLoading}>
        {googleLoadingSpinner ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : null}
        <Icons.google className="h-4 w-4 mr-2" />
        Google
      </Button>

      <Button
        isLoading={isLoading}
        loadingSpinner={false}
        type="button"
        size="sm"
        className="w-full"
        onClick={loginWithGithub}
        disabled={isLoading}>
        {githubLoadingSpinner ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : null}
        <Icons.github className="h-6 w-6 mr-2" />
        Github
      </Button>
    </div>
  );
};

export default UserAuthForm;
