import React from "react";

const ResultSection = ({ results }) => {
  return results ? (
    <div>
      
      <div>
      {results.map(item=>(
          <ol className="resturaunt-list-parent">
          <li className="resturaunt-name-list" key={item.restaurant.id}>Restaurant Name is {item.restaurant.name}</li>
          <li className="resturaunt-name-list" key={item.restaurant.locality_verbose}>Location is : {item.restaurant.location.locality_verbose}</li>
          </ol>
      ))} 
      </div> 
      
    </div>
    ) : null
  
};

export default ResultSection;
