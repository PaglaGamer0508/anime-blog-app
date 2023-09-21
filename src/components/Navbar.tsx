import { getAuthSession } from "@/lib/auth";
import Link from "next/link";
import DropDownMenuGenres from "./DropDownMenuGenres";
import SignInNavButton from "./SignInNavButton";
import UserAccountNav from "./UserAccountNav";
import Image from "next/image";
import Logo from "@/../public/logo.png";
import Styles from "./styles/logo-font.module.scss";

const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <nav className="bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo section */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`${Styles.logo_font} flex items-center gap-x-1 text-white hover:text-gray-300 font-bold`}>
              <Image
                alt="logo"
                width={100}
                height={100}
                src={Logo}
                className="w-10 md:w-14 h-10 md:h-14"
              />
              <h1 className="text-base sm:text-lg md:text-xl">
                Anime Whispers
              </h1>
            </Link>
          </div>
          <div className="ml-10 flex items-center space-x-4">
            <Link href={"/all-blogs"}>All Blogs</Link>
            <DropDownMenuGenres />
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <SignInNavButton />
            )}
          </div>
        </div>
      </div>
      <hr className="h-[1px] w-full border-none bg-slate-500" />
    </nav>
  );
};

export default Navbar;
