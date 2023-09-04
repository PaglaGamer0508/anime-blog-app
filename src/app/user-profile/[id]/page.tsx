import { getAuthSession } from "@/lib/auth";
import React from "react";

interface pageProps {
  params: {
    id: string;
  };
}

const page: React.FC<pageProps> = async ({ params }) => {
  const session = await getAuthSession();

  const ownUserAccount = session?.user?.id === params.id;

  return (
    <div>
      <h1>{params.id}</h1>
      {ownUserAccount ? <span>True</span> : <span>False</span>}
    </div>
  );
};

export default page;
