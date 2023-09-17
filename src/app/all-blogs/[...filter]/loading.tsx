import LoadingSkeletonThumbnail from "@/components/LoadingSkeletonThumbnail";
import React from "react";
import Styles from "./all-blogs.module.scss";

const loading: React.FC = ({}) => {
  const numberOfSkeletons = 8;

  return (
    <div className={`max-w-[1400px] mx-auto ${Styles.container}`}>
      {Array.from({ length: numberOfSkeletons }).map((_, index) => (
        <LoadingSkeletonThumbnail key={index} />
      ))}
    </div>
  );
};

export default loading;
