import React from "react";
import Link from "next/link";
import { LogIn } from "lucide-react";

interface LoginToDoActionProps {
  action: string;
}

const LoginToDoAction: React.FC<LoginToDoActionProps> = ({ action }) => {
  return (
    <div className="rounded-md min-h-[80dvh] grid place-content-center text-white text-center shadow-md">
      <div className="mb-4">
        <LogIn className="text-4xl mx-auto mb-2" /> {/* Log in icon */}
        <p className="text-lg font-semibold">Sign In to {action}</p>
      </div>
      <Link
        href="/sign-in"
        className="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold transition-colors">
        Sign In
      </Link>
    </div>
  );
};

export default LoginToDoAction;
