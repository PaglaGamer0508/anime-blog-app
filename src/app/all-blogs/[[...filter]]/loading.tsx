import LoadingSkeletonThumbnail from "@/components/LoadingSkeletonThumbnail";
import React from "react";
import Styles from "./all-blogs.module.scss";

const loading: React.FC = ({}) => {
  const numberOfSkeletons = 6;

  return (
    <div className={`max-w-[1400px] mx-auto py-3 ${Styles.container}`}>
      {Array.from({ length: numberOfSkeletons }).map((_, index) => (
        <LoadingSkeletonThumbnail key={index} />
      ))}
    </div>
  );
};

export default loading;
