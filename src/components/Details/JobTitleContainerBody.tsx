import React, { ReactNode } from "react";

const JobTitleContainerBody = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" h-full mx-auto text-black dark:text-white">{children}</div>
  );
};

export default JobTitleContainerBody;
