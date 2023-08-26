import { getAuthSession } from "@/lib/auth";
import Link from "next/link";
import DropDownMenuGenres from "./DropDownMenuGenres";
import SignInNavButton from "./SignInNavButton";
import { UserAccountNav } from "./UserAccountNav";

const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <nav className="bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-white hover:text-gray-300 font-bold text-xl">
              AnimeBlogs
            </Link>
          </div>
          <div className="md:block">
            <div className="ml-10 flex items-center space-x-4">
              <DropDownMenuGenres />
              {session?.user ? (
                <UserAccountNav user={session.user} />
              ) : (
                <SignInNavButton />
              )}
            </div>
          </div>
        </div>
      </div>
      <hr className="h-[1px] w-full border-none bg-slate-500" />
    </nav>
  );
};

export default Navbar;
