import { IoSearchSharp, IoLocationSharp } from "react-icons/io5";
import CustomCheckBox from "./CustomCheckBox";
import { FormEventHandler } from "react";

const SearchBar = ({ handleSubmit }: { handleSubmit: FormEventHandler }) => {
  return (
    <form
      className="w-full bg-white dark:bg-secondary-dark grid lg:grid-cols-[40%_30%_auto] rounded-md"
      onSubmit={handleSubmit}
    >
      <div className="dark:border-main-dark border-r-2 pl-6 flex items-center ">
        <IoSearchSharp className="text-3xl text-main-violet" />
        <input
          type="text"
          className="w-full px-4 py-6 rounded-l-md dark:bg-secondary-dark"
          placeholder="Filter by title, companies, expertise ..."
          name="title"
        />
      </div>
      <div className="dark:border-main-dark border-r-2 pl-4 flex items-center">
        <IoLocationSharp className="text-3xl text-main-violet" />
        <input
          type="text"
          className="w-full px-4 py-6 dark:bg-secondary-dark"
          placeholder="Filter by location..."
          name="location"
        />
      </div>
      <div className="flex justify-center items-center gap-10 rounded-r-md">
        <div className="flex items-center gap-4">
          <CustomCheckBox />
          <p className="font-semibold">Full Time Only</p>
        </div>
        <button
          type="submit"
          className="bg-main-violet h-fit px-8 py-2 text-white rounded-md"
        >
          Search
        </button>
      </div>
    </form>
  );
};
export default SearchBar;
