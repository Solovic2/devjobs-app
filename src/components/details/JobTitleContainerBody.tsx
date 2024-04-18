import { ReactNode } from "react";

const JobTitleContainerBody = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" h-full mx-auto text-black dark:text-white lg:mx-[9%]">
      {children}
    </div>
  );
};

export default JobTitleContainerBody;
