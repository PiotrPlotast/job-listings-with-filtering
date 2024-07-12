import { useState } from "react";
import jobsData from "./assets/data.json";
import JobOffer from "./JobOffert";
import Filters from "./Filters";
export default function JobListing() {
  const [jobs] = useState(jobsData);
  const [filters, setFilters] = useState([]);
  return (
    <div>
      {filters.length > 0 && (
        <Filters filters={filters} setFilters={setFilters} />
      )}
      {filters.length >= 1
        ? jobs
            .filter((job) => {
              const jobFilters = [
                job.role,
                job.level,
                ...job.languages,
                ...job.tools,
              ];
              return filters.every((filter) => jobFilters.includes(filter));
            })
            .map((job) => (
              <JobOffer key={job.id} job={job} setFilters={setFilters} />
            ))
        : jobs.map((job) => (
            <JobOffer key={job.id} job={job} setFilters={setFilters} />
          ))}
    </div>
  );
}
