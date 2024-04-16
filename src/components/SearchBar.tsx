import { IoSearchSharp, IoLocationSharp } from "react-icons/io5";
import CustomCheckBox from "./CustomCheckBox";

const SearchBar = () => {
  return (
    <form className="w-full bg-white grid lg:grid-cols-[40%_30%_auto] rounded-md">
      <div className="border-r-2 pl-6 flex items-center ">
        <IoSearchSharp className="text-3xl text-main-violet" />
        <input
          type="text"
          className="w-full px-4 py-6 rounded-l-md"
          placeholder="Filter by title, companies, expertise ..."
        />
      </div>
      <div className="border-r-2 pl-4 flex items-center">
        <IoLocationSharp className="text-3xl text-main-violet" />
        <input
          type="text"
          className="w-full px-4 py-6"
          placeholder="Filter by location..."
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
