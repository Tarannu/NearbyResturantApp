import React from "react";
import { FiSearch } from "react-icons/fi";
import './SearchBar.css';

const SearchBar = (props) => {

  return (
    <div className="SearchBar">
        <input 
          className="InputBox"
          type="text"
          placeholder="Enter food type ..."
          onChange={props.onFoodChange}
        />
        <input
            className="InputBox"
            onChange={props.onLocationChange}
            value={props.location}
            placeholder="Enter Location ... "
        />
        <button 
            className="SearchButton" 
        >
            <FiSearch
              name="search"
              style={{ fontSize: 20, verticalAlign: "center" }}
              onClick={props.handleSearchButton}
            />
            Search
        </button>
    </div>
  );
};

export default SearchBar;
