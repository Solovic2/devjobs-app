import React from "react";

const JobTitleFooter = ({ user }: { user: any }) => {
  return (
    <div className="bg-white dark:bg-secondary-dark mt-10  text-white ">
      <div className="mx-4 md:mx-12 lg:mx-[19%] md:flex md:justify-between md:items-center">
        <div className="hidden md:flex md:flex-col text-black dark:text-white">
          <h1 className="text-lg font-bold">{user.position}</h1>
          <p className="text-main-gray">{user.company}</p>
        </div>
        <button className="my-8 w-full md:w-fit bg-main-violet p-3 rounded-lg font-bold">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobTitleFooter;
