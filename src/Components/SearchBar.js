import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({
  location,
  onFoodChange,
  onLocationChange,
  onTermSubmit,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter food type ..."
            onChange={onFoodChange}
          />
          {"    "}
          <input
            onChange={onLocationChange}
            value={location}
            placeholder="Enter Location ... "
          />
          {"    "}
          <button className="searchButton" style={{ padding: 10 }}>
            <FiSearch
              name="search"
              style={{ fontSize: 20, alignItems: "center" }}
              onClick={onTermSubmit}
            />{" "}
            Search{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
