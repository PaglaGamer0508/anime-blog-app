import FilterSection from '@/components/FilterSection';
import {ReactNode} from 'react';

interface layoutProps {
  children:ReactNode;
};

const layout: React.FC<layoutProps> = ({children}) => {
  return (
    <div className="max-w-[1400px] mx-auto p-3">
        <FilterSection />
      {children}
    </div>
  );
};

export default layout;