"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/Button";

const SignInNavButton: React.FC = ({}) => {
  const pathname = usePathname();

  return (
    <div>
      {pathname === "/sign-in" ? null : (
        <Link
          href="/sign-in"
          className={`${cn(buttonVariants({ variant: "primary" }))}`}>
          SignIn
        </Link>
      )}
    </div>
  );
};

export default SignInNavButton;
