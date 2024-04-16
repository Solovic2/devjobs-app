import { useLocation } from "react-router-dom";
import JobTitleCard from "../components/details/JobTitleCard";
import JobTitleContainerBody from "../components/details/JobTitleContainerBody";
import JobTitleDescriptions from "../components/details/JobTitleDescriptions";
import JobTitleFooter from "../components/details/JobTitleFooter";
import Layout from "../components/Layout";
import jsonData from "../assets/data.json";
import { Job } from "./Home";

const Details = () => {
  const { pathname } = useLocation();
  const id: string = pathname.split("/")[1];
  const job: Job =
    jsonData.find((element) => element.id.toString() === id) || jsonData[0];

  return (
    <>
      <Layout>
        <JobTitleContainerBody>
          <JobTitleCard job={job} />
          <JobTitleDescriptions job={job} />
        </JobTitleContainerBody>
      </Layout>
      <JobTitleFooter job={job} />
    </>
  );
};
export default Details;
