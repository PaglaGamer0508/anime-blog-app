"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/Alert-dialog";
import React from "react";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

const SignOutModal: React.FC = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <LogOut className="hover:text-blue-700" />
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-slate-800">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription className="text-slate-300">
            Continuing will Sign you Out.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-black active:scale-95 transition-transform duration-75">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-transform duration-75"
            onClick={() => signOut()}>
            Sign Out
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SignOutModal;
