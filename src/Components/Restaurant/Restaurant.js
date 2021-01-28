import React from 'react';
import {Link} from 'react-router-dom';
import "./Restaurant.css";

const Restaurant = ({ results,onSortChanged }) => {
    // return(
    //     <div className="Restaurant" onChange={onSortChanged}>
    //         <div className="NameAndThumbnail">
    //             <p>{results.restaurant.name}</p>
    //             { results.restaurant.thumb ? <img src={results.restaurant.thumb} alt={results.restaurant.name}/> : null}
    //         </div>  
    //         <div className="RestaurantLocation">
    //             <p>{results.restaurant.location.address}</p>
    //             {/* <p>{props.restaurant.location}</p> */}
    //         </div>
    //         <p>Rating:&emsp;{results.restaurant.user_rating.aggregate_rating}</p>
    //     </div>
    // )
    return results ? (
        <div>
          <div className="Restaurant" onChange={onSortChanged}>
          {results.map(item=>(
              <ol className="resturaunt-list-parent" >
              <Link to={`/${item.restaurant.id}`} style={{textDecoration:'none'}}><li  className="NameAndThumbnail" key={item.restaurant.id}>Restaurant Name is {item.restaurant.name}</li></Link>
              <li className="RestaurantLocation" key={item.restaurant.locality_verbose}>Location is : {item.restaurant.location.locality_verbose}</li>
              <li> It has {item.restaurant.user_rating.aggregate_rating}{" "} reviews </li>
              </ol>
          ))}
          <button className="load-more">Load More</button> 
          </div> 
          
        </div>
        ) : null
      

}

export default Restaurant;

// restaurant_name={restaurant.name}
//         thumbnail={restaurant.thumb}
//         location={restaurant.location}
//         user_rating={restaurant.rating}/>