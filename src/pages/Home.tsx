import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import jsonData from "../assets/data.json";
import JobCard from "../components/JobCard";
import {
  FormEventHandler,
  MouseEventHandler,
  useState,
  FormEvent,
} from "react";
import { useSearchParams } from "react-router-dom";
export interface Job {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}

const Home = () => {
  const [data, setData] = useState<Job[]>(jsonData.slice(0, 9));
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick: MouseEventHandler = () => {
    setData((prev) => jsonData.slice(0, prev.length + 3));
  };
  const handleSubmit: FormEventHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    setSearchParams(formData);
    // position, company, location, contract;

    // const filterData = data.filter((element) => {
    //   return (
    //     (searchParams.get("title") &&
    //       element.position
    //         .toLowerCase()
    //         .includes(searchParams.get("title") || "")) ||
    //     element.company
    //       .toLowerCase()
    //       .includes(searchParams.get("title") || "") ||
    //     (searchParams.get("location") &&
    //       element.location
    //         .toLowerCase()
    //         .includes(searchParams.get("location") || "")) ||
    //     (searchParams.get("fullTime") &&
    //       element.location
    //         .toLowerCase()
    //         .includes(searchParams.get("fullTime") || ""))
    //   );
    // });
    // console.log(filterData);

    // const filterByLocation = data.filter((element) => {
    //   if (
    //     searchParams.get("location") &&
    //     element.location
    //       .toLowerCase()
    //       .includes(searchParams.get("location") || "")
    //   )
    //     return element;
    // });

    // const filterByFullTime = data.filter((element) => {
    //   if (
    //     searchParams.get("fullTime") &&
    //     element.location
    //       .toLowerCase()
    //       .includes(searchParams.get("fullTime") || "")
    //   )
    //     return element;
    // });

    // console.log(filterData || filterByLocation || filterByFullTime);
  };
  return (
    <Layout>
      <SearchBar handleSubmit={handleSubmit} />
      <ul className="grid grid-cols-3 gap-6 mt-16">
        {data.map((job: Job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </ul>
      {data.length < jsonData.length && (
        <button
          className="flex justify-center mx-auto my-10 text-white px-8 py-3 rounded-md bg-main-violet hover:bg-light-violet "
          onClick={handleClick}
        >
          {" "}
          Load More
        </button>
      )}
    </Layout>
  );
};
export default Home;
