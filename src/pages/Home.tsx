import Layout from "../components/ui/Layout";
import SearchBar from "../components/home/SearchBar";
import jsonData from "../../public/assets/data.json";
import JobCard from "../components/home/JobCard";
import {
  FormEventHandler,
  MouseEventHandler,
  useState,
  FormEvent,
  useMemo,
} from "react";
import { useSearchParams } from "react-router-dom";
import { Job } from "../types/staticPages.types";

const Home = () => {
  const [offset, setOffset] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const handleClick: MouseEventHandler = () => {
    setOffset((prev) => prev + 3);
  };

  const handleSubmit: FormEventHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(e.currentTarget)
    ) as Record<string, string>;
    const newSearchParams: Record<string, string> = {};
    if (formData.title) newSearchParams.title = formData.title;
    if (formData.location) newSearchParams.location = formData.location;
    if (formData.fullTime) newSearchParams.fullTime = formData.fullTime;
    setSearchParams(newSearchParams, { replace: true });
    setIsModalOpened(false);
  };

  const data = useMemo<Job[]>(
    () => jsonData.slice(0, offset + 9),
    [offset, jsonData]
  );
  const filteredData = useMemo(
    () =>
      data.filter((element) => {
        if (searchParams.get("fullTime") && element.contract !== "Full Time") {
          return false;
        }

        if (
          searchParams.get("title") &&
          ![element.position.toLowerCase(), element.company.toLowerCase()].some(
            (el) => el.includes(searchParams.get("title")!?.toLowerCase())
          )
        ) {
          return false;
        }
        if (
          searchParams.get("location") &&
          !element.location
            .toLowerCase()
            .includes(searchParams.get("location")!?.toLowerCase())
        ) {
          return false;
        }
        return true;
      }),
    [data, searchParams]
  );

  return (
    <Layout>
      <SearchBar
        handleSubmit={handleSubmit}
        isModalOpened={isModalOpened}
        setIsModalOpened={setIsModalOpened}
      />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {filteredData.map((job: Job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </ul>
      <div className="pb-10">
        {filteredData.length >= offset + 9 && (
          <button
            className="flex justify-center mx-auto mt-10 text-white px-8 py-3 rounded-md bg-main-violet hover:bg-light-violet "
            onClick={handleClick}
          >
            Load More
          </button>
        )}
      </div>
    </Layout>
  );
};
export default Home;
