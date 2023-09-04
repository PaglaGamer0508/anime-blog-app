"use client";

import Link from "next/link";
import type { User } from "next-auth";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import UserAvatar from "./UserAvatar";

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: User;
}

const UserAccountNav: React.FC<UserAccountNavProps> =  ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <UserAvatar
          user={{ name: user.name || null, image: user.image || null }}
          className="h-8 w-8 select-none"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-slate-700 text-slate-200" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/my-profile/">Profile</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/blog/create">Create Blog</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/settings">Settings</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserAccountNav