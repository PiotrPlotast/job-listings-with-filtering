/* eslint-disable react/prop-types */
import deleteIcon from "/icon-remove.svg";
export default function Filters({ filters, setFilters }) {
  const handleFilterClick = (filter) => {
    setFilters((prevFilters) => {
      if (prevFilters.includes(filter))
        return prevFilters.filter((f) => f !== filter);
      return [...prevFilters];
    });
  };

  const handleButtonClick = (event, filter) => {
    event.stopPropagation();
    setFilters((prevFilters) => prevFilters.filter((f) => f !== filter));
  };
  return (
    <div className="bg-white mx-auto mb-14 p-5 md:px-10 flex justify-between max-w-6xl">
      <ul className="flex gap-4 flex-wrap">
        {filters.map((filter) => (
          <li
            key={filter}
            className="text-card-main-color bg-card-tag-bg-color rounded overflow-hidden font-bold inline-block"
            onClick={() => handleFilterClick(filter)}
          >
            <span className="p-2 pb-1 inline-block mr-2 cursor-pointer">
              {filter}
            </span>
            <button
              className="bg-card-main-color p-[0.75rem]"
              onClick={(event) => handleButtonClick(event, filter)}
            >
              <img src={deleteIcon} alt="" />
            </button>
          </li>
        ))}
      </ul>
      <button
        className="text-card-details-color font-bold"
        onClick={() => setFilters([])}
      >
        Clear
      </button>
    </div>
  );
}
