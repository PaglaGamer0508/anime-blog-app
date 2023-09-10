import React from "react";

interface ShowBlogGenresProps {
  genres: string[];
}

const ShowBlogGenres: React.FC<ShowBlogGenresProps> = ({ genres }) => {
  return (
    <div>
      <div className="mt-2 flex flex-wrap gap-2 mb-2">
        {genres.map((genre, index) => (
          <div
            key={Math.random()}
            className={`h-fit w-fit border rounded-md py-1 px-2
        ${
          [
            "text-blue-500 border-blue-500",
            "text-red-500 border-red-500",
            "text-green-500 border-green-500",
            "text-indigo-600 border-indigo-600",
            "text-yellow-500 border-yellow-500",
            "text-violet-600 border-violet-600",
          ][index % 6]
        }`}>
            {genre}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowBlogGenres;
