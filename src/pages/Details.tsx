import Layout from "../components/Layout";
import logos from "../assets/logos/scoot.svg";
const Details = () => {
  const user = {
    id: 1,
    company: "Scoot",
    logo: "../assets/logos/scoot.svg",
    logoBackground: "hsl(36, 87%, 49%)",
    position: "Senior Software Engineer",
    postedAt: "5h ago",
    contract: "Full Time",
    location: "United Kingdom",
    website: "https://example.com/scoot",
    apply: "https://example.com/scoot/apply",
    description:
      "Scoot is looking for a Senior Software Engineer passionate about building approachable, innovative and user-first experiences to join our small but growing Engineering team. You will be responsible for building and maintaining front end functionality across all of Scoot’s applications, fostering a growing team of software engineers, and helping drive and maintain best software patterns and practices in our codebase.",
    requirements: {
      content:
        "The ideal candidate is as passionate about solving challenges through technology. They are well-versed in building proof of concepts from scratch and taking these POCs to production and scale. The right fit will have the engineering experience to build and iterate quickly and is comfortable working with product and design to set the technical strategy and roadmap.",
      items: [
        "5+ years of industry experience in a software engineering role, preferably building a SaaS product. You can demonstrate significant impact that your work has had on the product and/or the team.",
        "Experience with scalable distributed systems, both built from scratch as well as on AWS primitives.",
        "Extremely data-driven.",
        "Ability to debug complex systems.",
      ],
    },
    role: {
      content:
        "We are looking for a Senior Software Engineer to join as one of our first hires. As we iterate on our MVP, you will have the opportunity to drive the vision and own the build behind our digital experience. You’ll have the support of an experienced technical advisor, a Head of Product, and an external team to work with.",
      items: [
        "This role is for someone who is excited about the early stage - you’ll be responsible for turning the platform vision into reality through smart, efficient building and testing.",
        "Translate the product roadmap into engineering requirements and own the engineering roadmap",
        "Work with limited resources to test and learn as efficiently as possible, while laying the framework to build a more scalable product over time.",
        "Collaborate with product, design, and external engineering teammates as needed.",
      ],
    },
  };
  return (
    <>
      <Layout>
        <div className=" h-full mx-auto text-black dark:text-white">
          <div className="-mt-12 py-10 md:py-3 flex flex-col md:flex-row justify-center md:justify-normal items-center rounded-[9px] text-black dark:text-white bg-white dark:bg-secondary-dark">
            <div className="px-5 md:w-[20%]  text-center -mt-14  md:mt-0 ">
              <img src="src/assets/react.svg" alt={user.company} />
            </div>
            <div className="md:w-[40%] flex flex-col justify-center md:justify-start items-center md:items-start  ">
              <h1 className="text-2xl my-4 font-bold">{user.company}</h1>
              <p className="my-2 text-main-gray">{user.website}</p>
            </div>
            <div className="md:w-[40%] text-right px-5">
              <button className=" text-center bg-off-white dark:bg-main-dark text-main-violet dark:text-white font-bold h-[50px] w-40">
                <a href={user.website}>Company Site</a>
              </button>
            </div>
          </div>
          <div className="bg-white dark:bg-secondary-dark mt-5 md:mt-12 p-10 rounded-[9px]">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center ">
              <div className="flex flex-col">
                <div className="flex gap-5 items-center text-dark-gray ">
                  <div>{user.postedAt}</div>
                  <span className="h-[5px] w-[5px] rounded-full bg-dark-gray"></span>
                  <div>{user.contract}</div>
                </div>
                <h1 className="text-[22px] font-bold mt-5">{user.position}</h1>
                <p className="my-5 text-main-violet font-bold">
                  {user.location}
                </p>
              </div>
              <div className="md:w-[18%]">
                <button className="my-8 w-full text-white bg-main-violet p-3 rounded-lg font-bold">
                  Apply Now
                </button>
              </div>
            </div>
            <p className="text-dark-gray mb-3">{user.description}</p>
            <h1 className="text-[24px] font-bold my-4">Requirements</h1>
            <p className="text-dark-gray">{user.requirements.content}</p>
            <ul className="list-disc list-inside text-dark-gray">
              {user.requirements.items.map((item: string, index: number) => {
                return (
                  <li
                    className="marker:text-main-violet marker:text-xs my-4"
                    key={`${item}-${index}`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
            <h1 className="text-[24px] font-bold my-4">What You Will Do</h1>
            <p className="text-dark-gray">{user.role.content}</p>
            <div className="text-dark-gray">
              {user.role.items.map((item: string, index: number) => {
                return (
                  <div className="flex my-4  " key={`${item}-${index}`}>
                    <span className="  text-main-violet font-bold mr-5">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
      <div className="bg-white dark:bg-secondary-dark mt-10  text-white ">
        <div className="mx-4 md:mx-12 xl:mx-[10%] md:flex md:justify-between md:items-center">
          <div className="hidden md:flex md:flex-col text-black dark:text-white">
            <h1 className="text-lg font-bold">{user.position}</h1>
            <p className="text-main-gray">{user.company}</p>
          </div>
          <button className="my-8  w-full md:w-fit bg-main-violet p-3 rounded-lg font-bold">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};
export default Details;
