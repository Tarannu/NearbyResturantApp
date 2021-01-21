import React from "react";
import { FiSearch } from "react-icons/fi";
//<input type="text" placeholder="Enter Sushie type ..." />
//{"    "}

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input onChange={onTermChange} value={term} placeholder="Enter Location ... " />
          {"    "}
          <button
            className='searchButton'
            style={{ padding: 10 }} 
          >
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
