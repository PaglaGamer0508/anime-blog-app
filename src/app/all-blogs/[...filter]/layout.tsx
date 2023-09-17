import FilterSection from "@/components/FilterSection";
import React, { ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
  filter: ReactNode;
}

const layout: React.FC<layoutProps> = ({ children, filter }) => {
  return (
    <div className="max-w-[1400px] mx-auto p-3">
      <FilterSection />
      <div>{children}</div>
    </div>
  );
};

export default layout;
