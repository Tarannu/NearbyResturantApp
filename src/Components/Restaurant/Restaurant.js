import React from 'react';
import { NavLink} from 'react-router-dom';
import "./Restaurant.css";

const Restaurant = (props) => {
    return(
        <div
            className="Restaurant" 
            // onClick={props.selected}
        >
            <div className="NameAndThumbnail">
                <NavLink className="Name" to={`/${props.id}/res-details`}><p>{props.restaurantName}</p></NavLink>
                { props.thumbnail ? <img src={props.thumbnail} alt={props.restaurantNname}/> : null}
            </div>  
            <div className="RestaurantLocation">
                <p>{props.restaurantAddress}</p>
                {/* <p>{props.restaurant.location}</p> */}
            </div>
            <p>Rating:&emsp;{props.rating.aggregate_rating}</p>
        </div>
    )
//     return results ? (
//         <div>
//           <div className="Restaurant" onChange={onSortChanged}>
//           {results.map(item=>(
//               <ol className="resturaunt-list-parent" >
//               <Link to={`/${item.restaurant.id}`} style={{textDecoration:'none'}}><li  className="NameAndThumbnail" key={item.restaurant.id}>Restaurant Name is {item.restaurant.name}</li></Link>
//               <li className="RestaurantLocation" key={item.restaurant.locality_verbose}>Location is : {item.restaurant.location.locality_verbose}</li>
//               <li> It has {item.restaurant.user_rating.aggregate_rating}{" "} reviews </li>
//               </ol>
//           ))}
//           <button className="load-more">Load More</button> 
//           </div> 
          
//         </div>
//         ) : null
      

}

export default Restaurant;
