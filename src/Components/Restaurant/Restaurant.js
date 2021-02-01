import React from 'react';
import {Link} from 'react-router-dom';
import "./Restaurant.css";

const Restaurant = ({ results,onSortChanged }) => {
   
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
          
          </div> 
          
        </div>
        ) : null
      

}

export default Restaurant;

// import React from 'react';
// import "./Restaurant.css";

// const Restaurant = (props) => {
//     return(
//         <div className="Restaurant">
//             <div className="NameAndThumbnail">
//                 <p>{props.restaurant.name}</p>
//                 { props.restaurant.thumb ? <img src={props.restaurant.thumb} alt={props.restaurant.name}/> : null}
//             </div>  
//             <div className="RestaurantLocation">
//                 <p>{props.restaurant.location.address}</p>
//                 {/* <p>{props.restaurant.location}</p> */}
//             </div>
//             <p>Rating:&emsp;{props.restaurant.user_rating.aggregate_rating}</p>
//         </div>
//     )
// }

// export default Restaurant;

// // restaurant_name={restaurant.name}
// //         thumbnail={restaurant.thumb}
// //         location={restaurant.location}
// //         user_rating={restaurant.rating}/>