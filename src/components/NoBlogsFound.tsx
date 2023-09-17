import React from "react";
import NotFoundImage from "@/../public/no-found.png";
import Image from "next/image";

const NoBlogsFound: React.FC = () => {
  return (
    <div className="text-center py-8">
      <div className="flex justify-center">
        <Image src={NotFoundImage} alt="Not Found" width={256} height={256} />
      </div>
      <p className="text-lg font-semibold text-gray-600">
        No blogs found at the moment.
      </p>
      <p className="text-gray-400 mt-2">
        It looks like there are no blogs available right now.
      </p>
    </div>
  );
};

export default NoBlogsFound;
