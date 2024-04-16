import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import data from "../assets/data.json";
import JobCard from "../components/JobCard";

const Home = () => {
  return (
    <Layout>
      <SearchBar />
      <ul className="grid grid-cols-3 gap-6 mt-16">
        {data.map((job) => (
          <JobCard job={job}/>
        ))}
      </ul>
    </Layout>
  );
};
export default Home;
