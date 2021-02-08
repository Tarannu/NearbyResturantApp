import React from "react";
import { FiSearch } from "react-icons/fi";
import './SearchBar.css';

const SearchBar = (props) => {

  return (
    <div className="SearchBar">
        <input 
          className="InputBox"
          onChange={props.onFoodChange}
          type="text"
          value={props.food}
          placeholder="Enter food type ..."
        />
        <input
            className="InputBox"
            onChange={props.onLocationChange}
            type="text"
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