import { redirect, useRouter } from "next/navigation";
import React from "react";

const page: React.FC = ({}) => {
  redirect("/all-blogs/ALL/ALL");

  return null;
};

export default page;
