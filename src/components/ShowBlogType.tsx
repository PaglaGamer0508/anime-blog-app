import React from "react";

interface ShowBlogTypeProps {
  type: BlogType;
}

const ShowBlogType: React.FC<ShowBlogTypeProps> = ({ type }) => {
  let textColor = "";
  let borderColor = "";

  switch (type) {
    case "GENERAL":
      textColor = "text-blue-500";
      borderColor = "border-blue-500";
      break;
    case "CHARACTER":
      textColor = "text-green-500";
      borderColor = "border-green-500";
      break;
    case "REVIEW":
      textColor = "text-orange-300";
      borderColor = "border-orange-300";
      break;
    default:
      borderColor = "border-gray-300";
      textColor = "text-black";
  }

  return (
    <div
      className={`px-2 py-1 rounded-sm border-2 text-base ${borderColor}`}
      style={{
        color: textColor,
      }}>
      {type === "GENERAL" && <h3 className={`${textColor}`}>General</h3>}
      {type === "CHARACTER" && <h3 className={`${textColor}`}>Character</h3>}
      {type === "REVIEW" && <h3 className={`${textColor}`}>Review</h3>}
    </div>
  );
};

export default ShowBlogType;
