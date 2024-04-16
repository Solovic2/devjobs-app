import React from "react";

const JobTitleDescriptions = ({ user }: { user: any }) => {
  return (
    <div className="bg-white dark:bg-secondary-dark mt-5 md:mt-12 p-10 rounded-[9px]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center ">
        <div className="flex flex-col">
          <div className="flex gap-5 items-center text-dark-gray ">
            <div>{user.postedAt}</div>
            <span className="h-[5px] w-[5px] rounded-full bg-dark-gray"></span>
            <div>{user.contract}</div>
          </div>
          <h1 className="text-[22px] font-bold mt-5">{user.position}</h1>
          <p className="my-5 text-main-violet font-bold">{user.location}</p>
        </div>
        <div className="md:w-[18%] lg:w-fit">
          <button className="my-8 w-full text-white bg-main-violet p-3 rounded-lg font-bold">
            Apply Now
          </button>
        </div>
      </div>
      <p className="text-dark-gray mb-3">{user.description}</p>
      <h1 className="text-[24px] font-bold my-4">Requirements</h1>
      <p className="text-dark-gray">{user.requirements.content}</p>
      <ul className="list-disc list-inside text-dark-gray">
        {user.requirements.items.map((item: string, index: number) => {
          return (
            <li
              className="marker:text-main-violet marker:text-xs my-4"
              key={`${item}-${index}`}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <h1 className="text-[24px] font-bold my-4">What You Will Do</h1>
      <p className="text-dark-gray">{user.role.content}</p>
      <div className="text-dark-gray">
        {user.role.items.map((item: string, index: number) => {
          return (
            <div className="flex my-4  " key={`${item}-${index}`}>
              <span className="  text-main-violet font-bold mr-5">
                {index + 1}
              </span>
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobTitleDescriptions;
