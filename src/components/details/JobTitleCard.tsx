import { Job } from "../../types/staticPages.types";

const JobTitleCard = ({ job }: { job: Job }) => {
  return (
    <div className="-mt-4 md:-mt-12 py-10 md:py-0 md:h-[128px] flex flex-col md:flex-row justify-center md:justify-normal items-center rounded-[9px] text-black dark:text-white bg-white dark:bg-secondary-dark">
      <div
        className="w-[50px] h-10 rounded-2xl md:w-[176px] md:h-full -mt-14 md:mt-0 flex justify-center items-center md:rounded-none md:rounded-tl-[9px] md:rounded-bl-[9px]"
        style={{ backgroundColor: job.logoBackground }}
      >
        <img src={`${job.logo}`} className="w-[60%]" alt={job.company} />
      </div>
      <div className="md:w-[40%] md:pl-7 pt-3 flex flex-col justify-center md:justify-start items-center md:items-start">
        <h1 className="text-2xl pb-2 font-bold">{job.company}</h1>
        <p className="py-2 text-[14px] text-main-gray">{job.website}</p>
      </div>
      <div className="md:w-[40%] text-right px-5">
        <button className="text-center text-[12px] md:w-[120px] bg-off-white dark:bg-main-dark text-main-violet dark:text-white font-bold h-[50px] w-40">
          <a href={job.website}>Company Site</a>
        </button>
      </div>
    </div>
  );
};

export default JobTitleCard;
