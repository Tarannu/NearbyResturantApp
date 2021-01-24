import React from "react";

const ResultSection = ({ results }) => {
  return results ? (
    <div>
      <select  classname="selection-button" name='sort' >
      <option value="" disabled selected>Sort by</option>
      <option value='by review'>Sort by Review</option>
      </select>
      {results.map(item=>(
          <ol className="resturaunt-list-parent">
          <li className="resturaunt-name-list" key={item.restaurant.id}>Restaurant Name is {item.restaurant.name}</li>
          <li className="resturaunt-name-list" key={item.restaurant.id}>Restaurant Location is {item.restaurant.location.locality_verbose}</li>
          </ol>
      ))}  
      
    </div>
    ) : null
  
};

export default ResultSection;
