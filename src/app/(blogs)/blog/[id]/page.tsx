import React from "react";

interface pageProps {
  params: {
    id: string;
  };
}

const page: React.FC<pageProps> = ({ params }) => {
  const { id } = params;

  return <div>{id}</div>;
};

export default page;
