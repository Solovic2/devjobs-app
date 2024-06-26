import { NavLink } from "react-router-dom";

const ApplyButtonComponent = ({ id }: { id: string }) => {
  return (
    <NavLink to={`/${id}/apply`}>
      <button className="my-8 w-full md:w-fit text-white bg-main-violet hover:bg-light-violet p-3 rounded-lg font-bold">
        Apply Now
      </button>
    </NavLink>
  );
};

export default ApplyButtonComponent;
