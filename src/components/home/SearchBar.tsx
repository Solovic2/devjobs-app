import { IoSearchSharp, IoLocationSharp } from "react-icons/io5";
import CustomCheckBox from "./CustomCheckBox";
import { MouseEventHandler, useRef } from "react";
import { SearchProps } from "../../types/staticPages.types";

const SearchBar = ({
  handleSubmit,
  isModalOpened,
  setIsModalOpened,
}: SearchProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick: MouseEventHandler = (e) => {
    const { target } = e;
    if (
      modalRef.current &&
      !modalRef.current.contains(target as HTMLDivElement)
    ) {
      setIsModalOpened(false);
    }
  };
  return (
    <form
      className="w-full  bg-white dark:bg-secondary-dark grid md:grid-cols-[30%_30%_auto] lg:grid-cols-[40%_30%_auto] rounded-md"
      onSubmit={handleSubmit}
    >
      <div className="dark:border-main-dark md:border-r-2  pl-6 flex items-center ">
        <IoSearchSharp className="text-3xl text-main-violet" />
        <input
          type="text"
          className="w-full px-4 py-6 rounded-l-md dark:bg-secondary-dark"
          placeholder="Filter by title, companies, expertise ..."
          name="title"
        />
        <div className="md:hidden flex items-center  pr-8 gap-5 cursor-pointer">
          <button
            type="button"
            onClick={() => setIsModalOpened((prev) => !prev)}
          >
            <img src="/src/assets/mobile/icon-filter.svg" alt="Filter" />
          </button>
          <button
            type="submit"
            className="bg-main-violet w-16 h-10  flex justify-center items-center text-white rounded-md cursor-pointer"
          >
            <img src="/src/assets/mobile/icon-search.svg" alt="Search" />
          </button>
        </div>
      </div>
      <div className="hidden  md:flex dark:border-main-dark border-r-2 pl-4  items-center">
        <IoLocationSharp className="text-3xl text-main-violet" />
        <input
          type="text"
          className="w-full px-4 py-6 dark:bg-secondary-dark"
          placeholder="Filter by location..."
          name="location"
        />
      </div>
      <div className="hidden md:flex justify-between items-center md:px-3  rounded-r-md">
        <div className="flex items-center gap-4 md:gap-2">
          <CustomCheckBox />
          <p className="font-semibold">Full Time Only</p>
        </div>
        <button
          type="submit"
          className="hidden md:block bg-main-violet h-fit px-8 py-2 text-white rounded-md"
        >
          Search
        </button>
      </div>
      {isModalOpened && (
        <div
          onClick={handleClick}
          className="h-[100vh] w-full fixed top-0 left-0 flex  justify-center items-center bg-main-gray bg-opacity-80 "
        >
          <div
            ref={modalRef}
            className="flex flex-col opacity-100 bg-white dark:bg-secondary-dark w-[90%] p-10 rounded-xl"
          >
            <div className=" flex dark:border-main-dark mb-5  items-center">
              <IoLocationSharp className="text-3xl text-main-violet" />
              <input
                type="text"
                className="w-full px-4 py-3 dark:bg-secondary-dark"
                placeholder="Filter by location..."
                name="location"
              />
            </div>
            <hr />
            <div className=" flex  flex-col justify-between items-center mt-5  rounded-r-md">
              <div className="flex  w-full items-center gap-4 md:gap-2">
                <CustomCheckBox />
                <p className="font-semibold">Full Time Only</p>
              </div>
              <button
                type="submit"
                className=" w-full mt-5 bg-main-violet h-fit px-8 py-2 text-white rounded-md"
                // onClick={handleCloseModal}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};
export default SearchBar;
