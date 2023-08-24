import React from 'react';

interface pageProps {
  params: {
    id: string
  }
};

const page: React.FC<pageProps> = ({params}) => {
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
};

export default page;