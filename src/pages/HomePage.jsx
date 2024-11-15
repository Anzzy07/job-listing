import { Hero } from "../components/Hero";
import { HomeCards } from "../components/HomeCards";
import { JobListings } from "../components/JobListings";
import { ViewAllJobs } from "../components/ViewAllJobs";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};
