import React from "react";
import LoadingSkeletonThumbnail from "./LoadingSkeletonThumbnail";
import Styles from "./styles/all-blogs.module.scss";

const AllBlogsLoadingSkeleton: React.FC = () => {
  return (
    <div>
      <div className={`max-w-[1400px] mx-auto ${Styles.container}`}>
        {Array.from({ length: 9 }).map((_, index) => (
          <LoadingSkeletonThumbnail key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogsLoadingSkeleton;
