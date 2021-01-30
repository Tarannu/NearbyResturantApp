import React from "react";
import {AiFillStar} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const Restaurants = ({ results,onSortChanged }) => {
  return results ? (
    <div>
      <div onChange={onSortChanged}>
      {results.map(item=>(
          <ol className="resturaunt-list-parent" >
          <Link to={`/${item.restaurant.id}`} style={{textDecoration:'none'}}><li key={item.restaurant.id}>Restaurant Name is {item.restaurant.name}</li></Link>
          <li key={item.restaurant.locality_verbose}>Location is : {item.restaurant.location.locality_verbose}</li>
          <li> It has {item.restaurant.user_rating.aggregate_rating}{" "}<AiFillStar/> reviews </li>
          </ol>
      ))}
      <button className="load-more">Load More</button> 
      </div> 
      
    </div>
    ) : null
  
};

export default Restaurants;