/* eslint-disable react/prop-types */
export default function JobOffer({ job, setFilters }) {
  const handleClick = () => {
    setFilters((prevFilters) => {
      if (prevFilters.includes(event.target.innerText))
        return prevFilters.filter(
          (filter) => filter !== event.target.innerText
        );
      return [...prevFilters, event.target.innerText];
    });
  };
  return (
    <div
      className={`flex flex-col bg-white max-w-6xl rounded mb-10 mx-auto px-6 drop-shadow-[0_5px_5px_rgba(92,165,165,0.25)] md:flex-row md:items-center md:justify-between md:px-10 md:py-8  ${
        job.featured && "border-l-[0.3125rem] border-l-card-main-color"
      }`}
    >
      <div className="md:flex md:items-center">
        <img
          src={job.logo}
          alt=""
          className="-translate-y-6 w-12 -mb-4 md:mb-0 md:translate-y-0 md:w-[5.5rem] md:mr-6"
        />
        <div>
          <div>
            <h2 className="text-[0.8125rem] text-card-main-color font-bold inline-block mr-9 md:mr-4 md:text-lg">
              {job.company}
            </h2>
            {job.new && (
              <span className="text-white bg-card-main-color rounded-full py-1 px-2 font-bold mr-2 text-[0.875rem]">
                NEW!
              </span>
            )}
            {job.featured && (
              <span className="text-white bg-card-secondary-color rounded-full py-1 px-2 font-bold text-[0.875rem]">
                FEATURED
              </span>
            )}
          </div>
          <h2 className="text-card-secondary-color font-bold text-[0.9375rem] mt-2 md:text-[1.375rem]">
            {job.position}
          </h2>
          <div>
            <p className="text-card-details-color inline-block mr-2 mt-2 md:text-lg">
              {job.contract}
            </p>
            <p className="text-card-details-color inline-block mr-2 mt-2 md:text-lg">
              {job.location}
            </p>
            <p className="text-card-details-color inline-block mr-2 mt-2 md:text-lg">
              {job.postedAt}
            </p>
          </div>
        </div>
      </div>
      <hr className="my-4 divide-[#B7C4C4] md:hidden" />
      <ul className="md:flex">
        <li
          onClick={handleClick}
          className="text-card-main-color bg-card-tag-bg-color rounded p-2 pb-1 font-bold inline-block mr-4 mb-4 cursor-pointer md:mb-0"
        >
          {job.role}
        </li>
        <li
          onClick={handleClick}
          className="text-card-main-color bg-card-tag-bg-color rounded p-2 pb-1 font-bold inline-block mr-4 mb-4 cursor-pointer md:mb-0"
        >
          {job.level}
        </li>
        {job.languages.map((language) => (
          <li
            onClick={handleClick}
            key={language}
            className="text-card-main-color bg-card-tag-bg-color rounded p-2 pb-1  font-bold inline-block mr-4 mb-4 cursor-pointer md:mb-0"
          >
            {language}
          </li>
        ))}
        {job.tools.map((tool) => (
          <li
            onClick={handleClick}
            key={tool}
            className="text-card-main-color bg-card-tag-bg-color rounded p-2 pb-1 font-bold inline-block mr-4 mb-4 cursor-pointer md:mb-0"
          >
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}
