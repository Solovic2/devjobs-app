import React from "react";
import ApplyButtonComponent from "./ApplyButtonComponent";

const JobTitleFooter = ({ user }: { user: any }) => {
  return (
    <div className="bg-white dark:bg-secondary-dark mt-10  text-white">
      <div className="mx-4 md:mx-12 lg:mx-[21.5%] md:flex md:justify-between md:items-center">
        <div className="hidden md:flex md:flex-col text-black dark:text-white">
          <h1 className="text-lg font-bold">{user.position}</h1>
          <p className="text-main-gray">{user.company}</p>
        </div>
        <ApplyButtonComponent />
      </div>
    </div>
  );
};

export default JobTitleFooter;
