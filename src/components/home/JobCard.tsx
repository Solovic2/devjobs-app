import { NavLink } from "react-router-dom";
import { Job } from "../../types/staticPages.types";

const JobCard = ({ job }: { job: Job }) => {
  return (
    <NavLink to={`/${job.id}`}>
      <li className=" bg-white dark:bg-secondary-dark p-6 mt-6 rounded-md">
        <div
          className="company-logo -mt-11 h-10 w-10 px-1 rounded-xl flex justify-center items-center"
          style={{ backgroundColor: job.logoBackground }}
        >
          <img src={`${job.logo}`} alt={job.company} />
        </div>
        <div className="flex items-center gap-2 text-sm text-main-gray mt-3 my-1">
          <p>{job.postedAt}</p>
          <span className="text-2xl">•</span>
          <p>{job.contract}</p>
        </div>
        <h2 className="font-bold ">{job.position}</h2>
        <p className="mt-2 text-sm text-main-gray">{job.company}</p>
        <p className="mt-6 text-xs text-main-violet font-bold">
          {job.location}
        </p>
      </li>
    </NavLink>
  );
};

export default JobCard;
